#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_CANDIDATES = join(ROOT, "ui/src/data/candidates.ts");
const UI_V2 = join(ROOT, "ui/src/data/v2");

const MANUAL_V2_SLUGS = new Set([
  "allen-park",
  "ken-brooks",
  "mason-ruder",
  "nathan-leiker",
  "ruth-ruder",
  "tracey-mann",
]);

function requireTypescript() {
  const require = createRequire(import.meta.url);
  return require(join(ROOT, "ui/node_modules/typescript/lib/typescript.js"));
}

function loadV1Candidates() {
  const ts = requireTypescript();
  const source = readFileSync(UI_CANDIDATES, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;

  const sandbox = {
    exports: {},
    module: { exports: {} },
    process: { env: { NODE_ENV: "test" } },
    console,
  };
  sandbox.module.exports = sandbox.exports;
  vm.runInNewContext(compiled, sandbox, { filename: UI_CANDIDATES });
  return sandbox.exports.FULL_CANDIDATES ?? sandbox.module.exports.FULL_CANDIDATES;
}

function slugToConst(slug) {
  return `${slug.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase()}_V2`;
}

function slugifyForId(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "item";
}

function readIfExists(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

function readMemoryFile(slug, file) {
  return readIfExists(join(MEMORY_CANDIDATES, slug, file));
}

function extractSection(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(new RegExp(`^## ${escaped}\\s*\\n([\\s\\S]*?)(?=^## |\\z)`, "m"));
  return match?.[1]?.trim() ?? "";
}

function parseIssueSection(section) {
  const issues = [];
  const issueRegex = /\*\*([^*\n]+)\*\*:\s*([\s\S]*?)(?=\n\n\*\*[^*\n]+\*\*:|\n## |$)/g;
  let match;
  while ((match = issueRegex.exec(section)) !== null) {
    issues.push({
      issue: match[1].trim(),
      stance: match[2].trim(),
    });
  }
  return issues;
}

function parseMarkdownSources(markdown) {
  const sources = [];
  const sourceSection = extractSection(markdown, "Sources");
  const linkRegex = /- \[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(sourceSection)) !== null) {
    sources.push({
      title: match[1].trim(),
      url: match[2].trim(),
      publication: publisherFromUrl(match[2]),
      date: "2026-05-19",
    });
  }
  return sources;
}

function publisherFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Public source";
  }
}

function tierForUrl(url) {
  const value = String(url).toLowerCase();
  if (
    value.includes(".gov") ||
    value.includes("fec.gov") ||
    value.includes("kpdc.kansas.gov") ||
    value.includes("kslegislature.gov") ||
    value.includes("sos.ks.gov") ||
    value.includes("clerk.house.gov") ||
    value.includes("ellisco.net") ||
    value.includes("haysusa.com") ||
    value.includes("usd489.com") ||
    value.includes("boarddocs.com") ||
    value.includes("house.gov") ||
    value.includes("senate.gov")
  ) {
    return "primary";
  }
  if (
    value.includes("facebook.com") ||
    value.includes("x.com") ||
    value.includes("twitter.com") ||
    value.includes("instagram.com") ||
    value.includes("youtube.com") ||
    value.includes("tiktok.com") ||
    value.includes("linkedin.com")
  ) {
    return "social";
  }
  return "secondary";
}

function sourceRegistry(v1, siteProfile, slug) {
  const rawSources = [
    ...(Array.isArray(v1.sources) ? v1.sources : []),
    ...parseMarkdownSources(siteProfile),
  ].filter((source) => source?.url);

  if (rawSources.length === 0) {
    rawSources.push({
      title: `${v1.name} candidate memory profile`,
      url: `https://tylerpreisser.github.io/elect-righteous/candidates/${slug}`,
      publication: "Elect Righteous local memory",
      date: "2026-05-19",
    });
  }

  const seen = new Set();
  const sources = [];
  for (const raw of rawSources) {
    const url = String(raw.url).trim();
    if (!url || seen.has(url)) continue;
    seen.add(url);
    const id = `s-${sources.length + 1}`;
    sources.push({
      id,
      tier: tierForUrl(url),
      url,
      title: String(raw.title || publisherFromUrl(url)).trim(),
      publisher: String(raw.publication || publisherFromUrl(url)).trim(),
      accessed: String(raw.date || "2026-05-19").trim(),
      claimsAnchored: [
        `Source carried forward for ${v1.name}'s generated v2 profile.`,
      ],
    });
  }
  return sources;
}

function sourceIdsForIssue(sources, issueText) {
  const text = issueText.toLowerCase();
  const matched = sources
    .filter((source) => {
      const haystack = `${source.title} ${source.publisher ?? ""} ${source.url}`.toLowerCase();
      return text
        .split(/[^a-z0-9]+/)
        .filter((part) => part.length > 4)
        .slice(0, 8)
        .some((part) => haystack.includes(part));
    })
    .map((source) => source.id);

  const fallback = sources
    .filter((source) => source.tier !== "social")
    .slice(0, 4)
    .map((source) => source.id);

  return [...new Set([...matched, ...fallback])].slice(0, 6);
}

function cleanStance(stance) {
  const text = String(stance ?? "").trim();
  if (
    !text ||
    /^Public stance not found\.?$/i.test(text) ||
    (/No specific personal statement found/i.test(text) && /\bplatform\b/i.test(text))
  ) {
    return "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.";
  }
  return text
    .replace(/No specific personal statement found in public sources\.?\s*on [^.]+\./gi, "No specific personal statement found in public sources.")
    .replace(/\s+on ([a-z /-]+) in the source material reviewed\./gi, ".")
    .replace(/\.\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
}

function compactSocialNote(v1, slug) {
  const ownWords = v1.inTheirOwnWords;
  const socialHarvestExists = existsSync(join(MEMORY_CANDIDATES, slug, "social-harvest.md"));
  const platforms = ownWords?.platformsCovered?.length
    ? ownWords.platformsCovered.join(", ")
    : socialHarvestExists
      ? "public social and web sources"
      : "";

  if (!ownWords && !socialHarvestExists) return undefined;

  const range = ownWords?.dateRangeStart && ownWords?.dateRangeEnd
    ? ` Harvest range: ${ownWords.dateRangeStart} through ${ownWords.dateRangeEnd}.`
    : "";

  return `Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: ${platforms || "available public web records"}.${range}`;
}

function ownWordsNarrative(v1, slug) {
  if (v1.inTheirOwnWords?.narrative) return v1.inTheirOwnWords.narrative;
  const memory = readMemoryFile(slug, "in-their-own-words.md");
  if (!memory) return undefined;
  return memory.replace(/^# .+\n+/, "").trim();
}

function buildIssues(v1, siteProfile, sources) {
  const profileIssues = parseIssueSection(extractSection(siteProfile, "What They Stand For"));
  const baseIssues = profileIssues.length > 0
    ? profileIssues
    : Array.isArray(v1.whatTheyStandFor)
      ? v1.whatTheyStandFor
      : [];

  const issues = baseIssues.map((item, index) => {
    const title = String(item.issue || `Issue ${index + 1}`).trim();
    const issueId = `i-${slugifyForId(title)}-${index + 1}`;
    const statedText = cleanStance(item.stance);
    return {
      id: issueId,
      title,
      stated: {
        text: statedText,
        sourceIds: sourceIdsForIssue(sources, `${title} ${statedText}`),
      },
      actions: [],
      socialSignals: [],
    };
  });

  if (issues.length > 0) return issues;

  return [
    {
      id: "i-public-office-record-1",
      title: "Public Office Record",
      stated: {
        text: "No candidate-controlled issue platform was found in the reviewed public record. This generated v2 profile therefore centers the documented duties, public record, and source trail instead of inventing positions.",
        sourceIds: sources.filter((source) => source.tier !== "social").slice(0, 4).map((source) => source.id),
      },
      actions: [],
      socialSignals: [],
    },
  ];
}

function campaignFinanceFromProfile(v1, siteProfile, sources) {
  if (v1.campaignFinance) return v1.campaignFinance;
  const finance = extractSection(siteProfile, "Campaign Finance");
  if (!finance) return undefined;
  return {
    totalRaised: "See public finance narrative",
    narrative: finance,
    donors: [],
    undisclosed: "No donor-by-donor table was available in the reviewed public web sources for this generated v2 pass.",
    reportingPeriod: "Most recent public source set reviewed",
    source: sources.find((source) => source.tier !== "social")?.title ?? "Candidate source file",
  };
}

function firstNonEmpty(...values) {
  return values.find((value) => typeof value === "string" && value.trim().length > 0)?.trim();
}

function generatedCandidate(v1) {
  const slug = v1.slug;
  const siteProfile = readMemoryFile(slug, "site-profile.md");
  const sources = sourceRegistry(v1, siteProfile, slug);
  const whoTheyAre = firstNonEmpty(extractSection(siteProfile, "Who They Are"), v1.whoTheyAre);
  const recordSummary = firstNonEmpty(extractSection(siteProfile, "Their Record"), v1.theirRecord);
  const whereTheyWorship = firstNonEmpty(extractSection(siteProfile, "Where They Worship"), v1.whereTheyWorship);

  const candidate = {
    slug,
    name: v1.name,
    party: v1.party,
    position: v1.position,
    electionSlug: v1.electionSlug,
    incumbent: Boolean(v1.incumbent),
    occupation: v1.occupation ?? "",
    born: v1.born,
    hometown: v1.hometown,
    religion: v1.religion,
    education: v1.education,
    family: v1.family,
    district: v1.district,
    margin2024: v1.margin2024,
    campaignWebsite: v1.campaignWebsite,
    issues: buildIssues(v1, siteProfile, sources),
    whoTheyAre,
    recordSummary,
    ownWordsNarrative: ownWordsNarrative(v1, slug),
    whereTheyWorship,
    church: v1.church,
    campaignFinance: campaignFinanceFromProfile(v1, siteProfile, sources),
    socialResearchNote: compactSocialNote(v1, slug),
    sources,
  };

  for (const key of Object.keys(candidate)) {
    const value = candidate[key];
    if (value === undefined || value === null || value === "") {
      delete candidate[key];
    }
  }
  return candidate;
}

function michaelBergesCandidate() {
  const sources = [
    {
      id: "s-1",
      tier: "primary",
      url: "https://www.ellisco.net/120/County-Commission",
      title: "Ellis County Commission official page",
      publisher: "Ellis County, Kansas",
      accessed: "2026-05-19",
      claimsAnchored: ["Michael Berges is listed as an Ellis County commissioner."],
    },
    {
      id: "s-2",
      tier: "secondary",
      url: "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      title: "Hays Post candidate profile: Michael Berges",
      publisher: "Hays Post",
      accessed: "2026-05-19",
      claimsAnchored: ["Berges's 2022 county commission candidacy and public profile."],
    },
    {
      id: "s-3",
      tier: "secondary",
      url: "https://hayspost.com/posts/cc38c04a-09f2-41be-8708-04cc33013376",
      title: "Hays commissioner announces county run",
      publisher: "Hays Post",
      accessed: "2026-05-19",
      claimsAnchored: ["Berges moved from Hays City Commission into the Ellis County Commission race."],
    },
    {
      id: "s-4",
      tier: "secondary",
      url: "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      title: "Ellis County commission salary adjustments",
      publisher: "Hays Post",
      accessed: "2026-05-19",
      claimsAnchored: ["County commissioner compensation and county budget context."],
    },
    {
      id: "s-5",
      tier: "social",
      url: "https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/",
      title: "Hays Daily News public post referencing Berges commission comments",
      publisher: "Hays Daily News / Facebook",
      accessed: "2026-05-19",
      claimsAnchored: ["Public social/news reference to Berges commission comments."],
    },
  ];

  return {
    slug: "michael-berges",
    name: "Michael Berges",
    party: "R",
    position: "Ellis County Commissioner, District 1",
    electionSlug: "ellis-county-2026-ballot",
    incumbent: true,
    occupation: "Ellis County commissioner; Business Services Director at NWKEICI",
    hometown: "Hays / Ellis County, Kansas",
    religion: "Catholic / Methodist family worship context",
    issues: [
      {
        id: "i-county-budget-1",
        title: "County Budget and Taxes",
        stated: {
          text: "Berges's reviewed public profile centers county-government service rather than a broad ideological platform. The available record ties him to the county commission's budget, compensation, and administrative decisions; this page does not infer positions beyond those public records.",
          sourceIds: ["s-1", "s-2", "s-4"],
        },
        actions: [],
        socialSignals: [],
      },
      {
        id: "i-county-services-2",
        title: "County Services and Administration",
        stated: {
          text: "The county commission role covers roads, county services, land-use decisions, and department oversight. Berges is treated here as an incumbent officeholder whose public record should be read through those duties rather than through national-party issue categories.",
          sourceIds: ["s-1", "s-2", "s-3"],
        },
        actions: [],
        socialSignals: [],
      },
      {
        id: "i-public-communication-3",
        title: "Public Communication",
        stated: {
          text: "The reviewed source trail includes local-news and public-social references to Berges's commission comments. Those items are recorded as public communication evidence; no private view or motive is inferred from them.",
          sourceIds: ["s-2", "s-5"],
        },
        actions: [],
        socialSignals: [
          {
            id: "ss-hays-daily-news-1",
            platform: "Facebook",
            observation: "A Hays Daily News public post referenced Berges making comments in his capacity as Ellis County Commission chair. This is recorded only as a public-reference signal.",
            observedAt: "2026-05-19",
            sourceIds: ["s-5"],
            mappedToIssueId: "i-public-communication-3",
          },
        ],
      },
    ],
    whoTheyAre: "Michael Berges is the Ellis County commissioner for District 1, the northwest Ellis County seat that includes part of Hays. Project election research identifies him as first elected in 2022, with the seat returning to the ballot in November 2026. Before joining the county commission, Berges served on the Hays City Commission, leaving a vacancy later filled by Alaina Cunningham.",
    recordSummary: "The public record places Berges in the center of ordinary county-government work: commission meetings, budget and compensation decisions, county service oversight, and constituent-facing local issues. The important election-accuracy correction is that District 1 is a 2026 county commission seat, paired on the ballot with Nathan Leiker's District 3 seat.",
    ownWordsNarrative: "The public social trail available in the repository is thin compared with higher-profile candidates. The site records local-news and public-social references to Berges's commission comments, but does not infer private views from limited social visibility.",
    whereTheyWorship: "Faith research in the repository identifies Berges as Catholic, connected with St. Joseph, while also attending First United Methodist with his wife. This is presented as descriptive family/church context only, not as a policy inference.",
    campaignFinance: {
      totalRaised: "No itemized public web total found",
      narrative: "No donor-by-donor finance table for Berges's county commission race was available in the reviewed public web record. Local county candidates may have filing paths that do not produce an easily indexed online donor table.",
      donors: [],
      undisclosed: "No itemized donor table was found in the reviewed public sources.",
      reportingPeriod: "2022 county commission cycle / 2026 incumbent context",
      source: "Ellis County and Hays Post public source trail",
    },
    socialResearchNote: "Social research is included only where it is observable and relevant. For Berges, the accessible trail is local-news/public-social references rather than a broad candidate-controlled social feed.",
    sources,
  };
}

function emitTs(slug, candidate) {
  const constName = slugToConst(slug);
  const rel = `${slug}.ts`;
  const path = join(UI_V2, rel);
  const body = JSON.stringify(candidate, null, 2);
  const ts = `/* Auto-generated from current v1/site-profile memory.
 * To refresh generated profiles:
 *   node scripts/generate-v2-from-current-data.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ${constName}: CandidateFullV2 = ${body};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(${constName});
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[${rel}] validateCandidateV2 FAILED:\\n" +
        result.errors.join("\\n"),
    );
  }
}
`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, ts);
}

function emitIndex(slugs) {
  const sorted = [...slugs].sort();
  const imports = sorted
    .map((slug) => `import { ${slugToConst(slug)} } from "./${slug}";`)
    .join("\n");
  const entries = sorted.map((slug) => `  ${slugToConst(slug)},`).join("\n");
  const ts = `import type { CandidateFullV2 } from "@/data/types-v2";
${imports}

export const V2_CANDIDATES: CandidateFullV2[] = [
${entries}
];

export function getAllCandidateV2Slugs(): string[] {
  return V2_CANDIDATES.map((candidate) => candidate.slug);
}

export function getFullCandidateV2BySlug(slug: string): CandidateFullV2 | undefined {
  return V2_CANDIDATES.find((candidate) => candidate.slug === slug);
}
`;
  writeFileSync(join(UI_V2, "index.ts"), ts);
}

const v1Candidates = loadV1Candidates();
const written = new Set();

for (const candidate of v1Candidates) {
  if (MANUAL_V2_SLUGS.has(candidate.slug) && existsSync(join(UI_V2, `${candidate.slug}.ts`))) {
    written.add(candidate.slug);
    continue;
  }
  emitTs(candidate.slug, generatedCandidate(candidate));
  written.add(candidate.slug);
}

emitTs("michael-berges", michaelBergesCandidate());
written.add("michael-berges");

for (const file of readdirSync(UI_V2)) {
  if (file.endsWith(".ts") && file !== "index.ts") {
    written.add(basename(file, ".ts"));
  }
}

emitIndex(written);
console.log(`Generated/registered ${written.size} v2 candidate profiles.`);
