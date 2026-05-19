#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_V2 = join(ROOT, "ui/src/data/v2");

const require = createRequire(import.meta.url);
const ts = require(join(ROOT, "ui/node_modules/typescript/lib/typescript.js"));

const PLATFORM_RE =
  /\b(X|Twitter|Facebook|Instagram|YouTube|TikTok|Bluesky|Threads|LinkedIn|Truth Social|Gab|Gettr|Substack|Reddit|Rumble|Hays Post|Tiger Media Network|KCUR|Kansas Reflector|KSN|KAKE|KWCH)\b/i;

const SOCIAL_CONTEXT_RE =
  /\b(post(?:ed|s)?|wrote|said|quote|comment(?:ed|s)?|reply|repl(?:y|ies)|like(?:d|s)?|follow(?:ed|s|ing)?|share(?:d|s)?|repost(?:ed|s)?|amplif(?:y|ied|ies)|feed|account|profile metadata|public profile|facebook page|campaign site|website|video|short|thread|social|visible|not found|no verified|no public|no candidate-controlled|absence|surveyed|platform)\b/i;

const DOMAIN_KEYWORDS = [
  {
    id: "abortion-life",
    issue: /\b(abortion|life|sanctity|pro-life|reproductive)\b/i,
    words: /\b(abortion|pro-life|prolife|unborn|born-alive|planned parenthood|roe|dobbs|value them both|bodily autonomy|pregnancy|reproductive)\b/i,
  },
  {
    id: "lgbtq-family",
    issue: /\b(lgbtq|marriage|family|gender|trans|sexuality)\b/i,
    words: /\b(lgbtq|lgbt|gay|lesbian|transgender|trans|same-sex|same sex|marriage equality|respect for marriage|equality act|gender identity|bathroom|pride month|pride parade|pride event|#pride)\b/i,
  },
  {
    id: "religious-liberty",
    issue: /\b(religious|religion|church|faith|liberty|worship)\b/i,
    words: /\b(religious liberty|religion|church|faith|worship|christian|pastor|prayer|conscience|title ix)\b/i,
  },
  {
    id: "guns",
    issue: /\b(gun|second amendment|firearm|2a)\b/i,
    words: /\b(gun|guns|firearm|firearms|second amendment|2a|red flag|nra|handgun|weapon)\b/i,
  },
  {
    id: "immigration",
    issue: /\b(immigration|border|migrant|noncitizen|ice)\b/i,
    words: /\b(immigration|border|migrant|undocumented|noncitizen|non-citizen|ice|asylum|deport|wall|catch-and-release)\b/i,
  },
  {
    id: "education",
    issue: /\b(school|education|curriculum|student|teacher|board|superintendent|usd|library|bond|classroom)\b/i,
    words: /\b(school|schools|education|curriculum|student|students|teacher|teachers|board|superintendent|usd|library|libraries|bond|classroom|accreditation|parents)\b/i,
  },
  {
    id: "tax-budget",
    issue: /\b(tax|taxes|budget|spending|debt|finance|funding|economy|cost|affordability)\b/i,
    words: /\b(tax|taxes|budget|spending|debt|deficit|funding|cost|costs|affordability|inflation|economy|economic|loan|self-funding|donor|fundraising)\b/i,
  },
  {
    id: "healthcare",
    issue: /\b(health|healthcare|medicaid|hospital|insurance|mental|vaccine|covid)\b/i,
    words: /\b(health|healthcare|medicaid|medicare|hospital|hospitals|insurance|mental health|vaccine|vaccines|covid|aca|obamacare|doctor|medical)\b/i,
  },
  {
    id: "ag-water",
    issue: /\b(agriculture|farm|farmer|rural|water|ogallala|cattle|food)\b/i,
    words: /\b(agriculture|farm|farmer|farmers|rural|water|ogallala|cattle|ranch|ranchers|food|fertilizer|crop|milk)\b/i,
  },
  {
    id: "elections",
    issue: /\b(election|voting|vote|ballot|democracy|supreme court|judicial)\b/i,
    words: /\b(election|voting|vote|votes|ballot|democracy|january 6|electoral|supreme court|judicial|court|constitution|amendment)\b/i,
  },
  {
    id: "public-safety",
    issue: /\b(public safety|law enforcement|police|crime|jail|sheriff|fentanyl)\b/i,
    words: /\b(public safety|law enforcement|police|crime|jail|sheriff|fentanyl|trafficking|prosecutor|criminal)\b/i,
  },
];

function slugToConst(slug) {
  return `${slug.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase()}_V2`;
}

function loadCandidate(file) {
  const source = readFileSync(file, "utf8");
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
    process: { env: { NODE_ENV: "production" } },
    console: { error() {}, log() {} },
    require(specifier) {
      if (specifier === "@/data/types-v2") {
        return { validateCandidateV2: () => ({ ok: true, errors: [] }) };
      }
      throw new Error(`Unsupported require(${specifier}) in ${file}`);
    },
  };
  sandbox.module.exports = sandbox.exports;
  vm.runInNewContext(compiled, sandbox, { filename: file });
  return Object.values(sandbox.exports).find(
    (value) => value && typeof value === "object" && typeof value.slug === "string",
  );
}

function readMemory(slug) {
  const dir = join(MEMORY_CANDIDATES, slug);
  if (!existsSync(dir)) return "";
  const files = ["social-harvest.md", "in-their-own-words.md", "sleuth-pass.md", "raw-dump-v2.md"];
  return files
    .map((file) => {
      const path = join(dir, file);
      if (!existsSync(path)) return "";
      return `\n\nSOURCE FILE: ${file}\n\n${readFileSync(path, "utf8")}`;
    })
    .filter(Boolean)
    .join("\n\n");
}

function cleanMarkdown(text) {
  return text
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\(([^)]+)\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function chunksFromMemory(text) {
  const rough = text
    .split(/\n{2,}|(?=^\s*[-*]\s+)/m)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 40)
    .filter((chunk) => !chunk.trimStart().startsWith("|"))
    .filter((chunk) => (chunk.match(/\|/g) ?? []).length < 6);

  const chunks = [];
  for (const chunk of rough) {
    if (chunk.length <= 850) {
      chunks.push(chunk);
      continue;
    }
    const sentences = chunk.split(/(?<=[.!?])\s+(?=[A-Z0-9"“])/);
    let buffer = "";
    for (const sentence of sentences) {
      if ((buffer + " " + sentence).length > 650 && buffer) {
        chunks.push(buffer.trim());
        buffer = sentence;
      } else {
        buffer = `${buffer} ${sentence}`.trim();
      }
    }
    if (buffer) chunks.push(buffer);
  }
  return chunks;
}

function keywordForIssue(issue) {
  const title = issue.title ?? "";
  const domains = DOMAIN_KEYWORDS.filter((domain) => domain.issue.test(title));
  if (domains.length) return domains;

  const titleWords = title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 4)
    .slice(0, 5);

  return [
    {
      id: "title-derived",
      issue: /./,
      words: new RegExp(`\\b(${titleWords.join("|") || "public"})\\b`, "i"),
    },
  ];
}

function platformFor(chunk, url) {
  const match = chunk.match(PLATFORM_RE);
  if (match) return match[1].replace(/^Twitter$/i, "X");
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host.includes("facebook")) return "Facebook";
    if (host.includes("x.com") || host.includes("twitter")) return "X";
    if (host.includes("youtube")) return "YouTube";
    if (host.includes("instagram")) return "Instagram";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("bsky")) return "Bluesky";
    return host;
  } catch {
    return "Public web";
  }
}

function firstUrl(chunk) {
  return (
    chunk.match(/\[[^\]]+]\((https?:\/\/[^)]+)\)/)?.[1] ??
    chunk.match(/\bhttps?:\/\/[^\s)]+/)?.[0]?.replace(/[.,;]+$/, "") ??
    ""
  );
}

function tierForUrl(url) {
  const value = String(url).toLowerCase();
  if (
    value.includes(".gov") ||
    value.includes("ksde.gov") ||
    value.includes("fec.gov") ||
    value.includes("kpdc.kansas.gov") ||
    value.includes("kslegislature.gov") ||
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
    value.includes("linkedin.com") ||
    value.includes("bsky.app") ||
    value.includes("truthsocial.com") ||
    value.includes("threads.net")
  ) {
    return "social";
  }
  return "secondary";
}

function titleFromUrl(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host
      .split(".")
      .slice(0, -1)
      .join(".")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  } catch {
    return "Public source";
  }
}

function cleanUrl(url) {
  let value = String(url)
    .trim()
    .replace(/[\\\]]+$/g, "")
    .replace(/[.,;]+$/g, "");
  const opens = (value.match(/\(/g) ?? []).length;
  let closes = (value.match(/\)/g) ?? []).length;
  while (value.endsWith(")") && closes > opens) {
    value = value.slice(0, -1);
    closes -= 1;
  }
  return value;
}

function sourceTitle(label, url) {
  const cleaned = cleanMarkdown(label ?? "");
  return cleaned && cleaned.length < 120 ? cleaned : titleFromUrl(url);
}

function linksFromMarkdown(text) {
  const links = [];
  const markdownLinkRe = /\[([^\]]+)]\((https?:\/\/[^)\s]+(?:\([^)]*\))?[^)\s]*)\)/g;
  let match;
  while ((match = markdownLinkRe.exec(text)) !== null) {
    links.push({ title: sourceTitle(match[1], match[2]), url: cleanUrl(match[2]) });
  }

  const bareUrlRe = /\bhttps?:\/\/[^\s<>"']+/g;
  while ((match = bareUrlRe.exec(text)) !== null) {
    const url = cleanUrl(match[0]);
    if (!links.some((link) => link.url === url)) {
      links.push({ title: titleFromUrl(url), url });
    }
  }

  return links.filter((link) => {
    try {
      new URL(link.url);
      return true;
    } catch {
      return false;
    }
  });
}

function sourceMemoryText(slug) {
  const dir = join(MEMORY_CANDIDATES, slug);
  if (!existsSync(dir)) return "";
  const files = [
    "profile.md",
    "raw-intel.md",
    "raw-dump-v2.md",
    "social-harvest.md",
    "in-their-own-words.md",
    "raw-dump.md",
    "site-profile.md",
  ];

  return files
    .map((file) => {
      const path = join(dir, file);
      if (!existsSync(path)) return "";
      let text = readFileSync(path, "utf8");
      if (file === "site-profile.md") {
        text = text.replace(/^## Sources\s*\n[\s\S]*$/m, "");
      }
      return text;
    })
    .filter(Boolean)
    .join("\n\n");
}

function candidateSourceTerms(candidate) {
  return [...new Set(
    `${candidate.name} ${candidate.slug}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((term) => term.length >= 4),
  )];
}

function buildCandidateSpecificSources(candidate) {
  const seen = new Set();
  const sources = [];
  const candidateTerms = candidateSourceTerms(candidate);
  for (const link of linksFromMarkdown(sourceMemoryText(candidate.slug))) {
    const normalized = link.url.replace(/#.*$/, "");
    if (seen.has(normalized)) continue;
    const haystack = `${link.title} ${link.url}`.toLowerCase();
    if (candidateTerms.length && !candidateTerms.some((term) => haystack.includes(term))) {
      continue;
    }
    seen.add(normalized);
    sources.push({
      id: `s-${sources.length + 1}`,
      tier: tierForUrl(link.url),
      url: link.url,
      title: link.title,
      publisher: titleFromUrl(link.url),
      accessed: "2026-05-19",
      claimsAnchored: [`Candidate-specific source extracted for ${candidate.name}.`],
    });
  }

  if (sources.length === 0) {
    return candidate.sources.filter((source) => source.tier !== "social").slice(0, 4);
  }

  return sources;
}

function sourceIdsForText(sources, text, domainText = text) {
  const cleanText = cleanMarkdown(text);
  const cleanDomainText = cleanMarkdown(domainText);
  const words = cleanMarkdown(text)
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 4)
    .slice(0, 16);

  const fallback = sources
    .filter((source) => source.tier !== "social")
    .slice(0, 4)
    .map((source) => source.id);

  if (/No candidate-controlled statement|No specific personal statement found/i.test(cleanText)) {
    return fallback;
  }

  const scored = sources
    .map((source) => {
      const haystack = `${source.title} ${source.publisher ?? ""} ${source.url} ${source.claimsAnchored.join(" ")}`.toLowerCase();
      const domainScore = DOMAIN_KEYWORDS
        .filter((domain) => domain.issue.test(cleanDomainText) || domain.words.test(cleanDomainText))
        .reduce((sum, domain) => sum + (domain.words.test(haystack) ? 12 : 0), 0);
      const score = domainScore + words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
      return { source, score, domainScore };
    })
    .filter(({ score }) => score > 0);

  const domainMatched = scored.filter(({ domainScore }) => domainScore > 0);
  const ranked = (domainMatched.length ? domainMatched : scored)
    .sort((a, b) => b.score - a.score)
    .map(({ source }) => source.id);

  return [...new Set([...ranked, ...fallback])].slice(0, 6);
}

function isGeneratedCarryForward(candidate) {
  return candidate.sources.some((source) =>
    source.claimsAnchored.some((claim) =>
      claim.startsWith("Source carried forward for ") ||
      claim.startsWith("Candidate-specific source extracted for "),
    ),
  );
}

function normalizeGeneratedSourceRegistry(candidate) {
  if (!isGeneratedCarryForward(candidate)) return;

  candidate.sources = buildCandidateSpecificSources(candidate);
  for (const issue of candidate.issues) {
    issue.stated.sourceIds = sourceIdsForText(
      candidate.sources,
      `${issue.title} ${issue.stated.text}`,
      issue.title,
    );
    for (const action of issue.actions) {
      action.sourceIds = sourceIdsForText(candidate.sources, `${issue.title} ${action.body}`, issue.title);
    }
    issue.socialSignals = issue.socialSignals.filter((signal) =>
      signal.sourceIds.every((id) => candidate.sources.some((source) => source.id === id)),
    );
  }
}

function pruneUnreferencedSources(candidate) {
  const referenced = new Set();
  for (const issue of candidate.issues) {
    for (const id of issue.stated.sourceIds) referenced.add(id);
    for (const action of issue.actions) {
      for (const id of action.sourceIds) referenced.add(id);
    }
    for (const signal of issue.socialSignals) {
      for (const id of signal.sourceIds) referenced.add(id);
    }
  }
  candidate.sources = candidate.sources.filter((source) => referenced.has(source.id));
}

function ensureSource(candidate, url, observation, issueTitle, platform) {
  if (!url) {
    const existing =
      candidate.sources.find((source) => source.tier === "social") ??
      candidate.sources.find((source) => source.tier !== "social") ??
      candidate.sources[0];
    return existing?.id;
  }

  const normalized = url.replace(/#.*$/, "");
  const existing = candidate.sources.find((source) => source.url.replace(/#.*$/, "") === normalized);
  if (existing) {
    const claim = `Observed public online activity mapped to ${issueTitle}.`;
    if (!existing.claimsAnchored.includes(claim)) existing.claimsAnchored.push(claim);
    return existing.id;
  }

  const id = `s-social-crossref-${candidate.sources.filter((source) => source.id.startsWith("s-social-crossref")).length + 1}`;
  candidate.sources.push({
    id,
    tier: tierForUrl(url),
    url,
    title: `${platform} / ${titleFromUrl(url)}`,
    publisher: titleFromUrl(url),
    accessed: "2026-05-19",
    claimsAnchored: [
      `Observed public online activity mapped to ${issueTitle}.`,
      cleanMarkdown(observation).slice(0, 180),
    ],
  });
  return id;
}

function observationFromChunk(chunk) {
  const cleaned = cleanMarkdown(chunk)
    .replace(/^SOURCE FILE:\s+\S+\s+/i, "")
    .replace(/^Methodology:\s*/i, "");
  if (cleaned.length <= 420) return cleaned;
  return `${cleaned.slice(0, 417).replace(/\s+\S*$/, "")}...`;
}

function addSignals(candidate) {
  const memory = readMemory(candidate.slug);

  normalizeGeneratedSourceRegistry(candidate);

  candidate.sources = candidate.sources.filter((source) => !source.id.startsWith("s-social-crossref"));
  for (const issue of candidate.issues) {
    issue.socialSignals = issue.socialSignals.filter((signal) => !signal.id.startsWith("ss-crossref"));
  }

  if (!memory) {
    pruneUnreferencedSources(candidate);
    return 0;
  }

  const chunks = chunksFromMemory(memory);
  const seen = new Set(
    candidate.issues.flatMap((issue) => issue.socialSignals.map((signal) => signal.observation)),
  );
  let added = 0;
  let totalForCandidate = 0;

  for (const issue of candidate.issues) {
    const domains = keywordForIssue(issue);
    const existingCount = issue.socialSignals.length;
    let issueAdded = 0;

    for (const chunk of chunks) {
      if (existingCount + issueAdded >= 3 || totalForCandidate >= 12) break;
      if (!domains.some((domain) => domain.words.test(chunk))) continue;
      if (!SOCIAL_CONTEXT_RE.test(chunk) && !PLATFORM_RE.test(chunk)) continue;

      const observation = observationFromChunk(chunk);
      if (observation.length < 45 || seen.has(observation)) continue;
      if (/^(source file|date range covered)$/i.test(observation)) continue;
      if (/^capture source:/i.test(observation)) continue;
      if (/^candidate:\s/i.test(observation)) continue;
      if (/^a summary of what/i.test(observation)) continue;
      if (/^hays post,.*https?:\/\//i.test(observation)) continue;
      if (/(?:-|\u2013|\u2014)\s*tier:\s/i.test(observation)) continue;
      if (/not an issue card/i.test(observation)) continue;
      if (/\bslug:\s|\bcapture date:\s|\bcapture mode:\s/i.test(observation)) continue;
      if ((observation.match(/\|/g) ?? []).length >= 4) continue;

      const url = firstUrl(chunk);
      const platform = platformFor(chunk, url);
      const sourceId = ensureSource(candidate, url, observation, issue.title, platform);
      if (!sourceId) continue;

      const signal = {
        id: `ss-crossref-${issue.socialSignals.length + issueAdded + 1}`,
        platform,
        observation,
        observedAt: "2026-05-19",
        sourceIds: [sourceId],
        mappedToIssueId: issue.id,
      };

      issue.socialSignals.push(signal);
      seen.add(observation);
      issueAdded += 1;
      totalForCandidate += 1;
      added += 1;
    }
  }

  pruneUnreferencedSources(candidate);
  return added;
}

function emitCandidate(candidate) {
  const slug = candidate.slug;
  const constName = slugToConst(slug);
  const body = JSON.stringify(candidate, null, 2);
  return `/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ${constName}: CandidateFullV2 = ${body};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(${constName});
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[${slug}.ts] validateCandidateV2 FAILED:\\n" +
        result.errors.join("\\n"),
    );
  }
}
`;
}

const files = readdirSync(UI_V2)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts")
  .sort();

const summary = [];
let totalAdded = 0;
for (const file of files) {
  const path = join(UI_V2, file);
  const candidate = loadCandidate(path);
  if (!candidate) continue;
  const added = addSignals(candidate);
  totalAdded += added;
  writeFileSync(path, emitCandidate(candidate));
  summary.push(`${basename(file, ".ts")}: +${added}`);
}

console.log(`Hydrated issue-mapped social/online signals: +${totalAdded}`);
console.log(summary.join("\n"));
