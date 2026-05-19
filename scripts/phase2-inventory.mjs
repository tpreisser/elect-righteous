#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_CANDIDATES = join(ROOT, "ui/src/data/candidates.ts");
const UI_ELECTIONS = join(ROOT, "ui/src/data/elections.ts");
const UI_V2 = join(ROOT, "ui/src/data/v2");

const candidateText = readFileSync(UI_CANDIDATES, "utf8");
const electionText = readFileSync(UI_ELECTIONS, "utf8");

function captureField(block, key) {
  const match = block.match(new RegExp(`"?${key}"?\\s*:\\s*"([^"]*)"`));
  return match?.[1] ?? "";
}

function parseCandidates(text) {
  const out = new Map();
  const slugMatches = [...text.matchAll(/(^|\n)\s*"?slug"?\s*:\s*"([^"]+)"/g)];
  for (let i = 0; i < slugMatches.length; i += 1) {
    const match = slugMatches[i];
    const slug = match[2];
    const start = match.index ?? 0;
    const end = slugMatches[i + 1]?.index ?? text.indexOf("\n];", start);
    const block = text.slice(start, end > start ? end : undefined);
    out.set(slug, {
      slug,
      name: captureField(block, "name"),
      party: captureField(block, "party"),
      position: captureField(block, "position"),
      electionSlug: captureField(block, "electionSlug"),
      block,
    });
  }
  return out;
}

function parseElections(text) {
  const out = [];
  const matches = text.matchAll(/\{\s*slug:\s*"([^"]+)"([\s\S]*?)candidateSlugs:\s*\[([\s\S]*?)\]([\s\S]*?)(?=\n\s*\},)/g);
  for (const match of matches) {
    const block = match[0];
    const slugs = [...match[3].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    out.push({
      slug: match[1],
      name: block.match(/name:\s*"([^"]+)"/)?.[1] ?? match[1],
      level: block.match(/level:\s*"([^"]+)"/)?.[1] ?? "",
      date: block.match(/date:\s*"([^"]+)"/)?.[1] ?? "",
      candidateSlugs: slugs,
    });
  }
  return out;
}

function humanBytes(bytes) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileInfo(slug, file) {
  const path = join(MEMORY_CANDIDATES, slug, file);
  if (!existsSync(path)) return null;
  return { file, bytes: statSync(path).size };
}

function artifactStatus(slug) {
  const files = [
    "site-profile.md",
    "raw-dump.md",
    "in-their-own-words.md",
    "social-harvest.md",
    "sleuth-pass.md",
    "raw-dump-v2.md",
    "v2-issues.yaml",
  ].map((file) => fileInfo(slug, file)).filter(Boolean);

  const v2Ts = existsSync(join(UI_V2, `${slug}.ts`));
  const hasGenericV2Route = existsSync(join(ROOT, "ui/src/app/candidates-v2/[slug]/page.tsx"));
  const v2Route =
    existsSync(join(ROOT, `ui/src/app/candidates/${slug}-v2/page.tsx`)) ||
    (v2Ts && hasGenericV2Route);
  return {
    files,
    v2Ts,
    v2Route,
    tags: [
      files.some((f) => f.file === "site-profile.md") ? "site" : null,
      files.some((f) => f.file === "raw-dump.md") ? "raw" : null,
      files.some((f) => f.file === "in-their-own-words.md") ? "words" : null,
      files.some((f) => f.file === "social-harvest.md") ? "social" : null,
      files.some((f) => f.file === "sleuth-pass.md") ? "sleuth" : null,
      files.some((f) => f.file === "raw-dump-v2.md") ? "deep" : null,
      files.some((f) => f.file === "v2-issues.yaml") ? "issues" : null,
      v2Ts ? "v2-ts" : null,
      v2Route ? "v2-route" : null,
    ].filter(Boolean),
  };
}

function v2NameFor(slug) {
  const path = join(UI_V2, `${slug}.ts`);
  if (!existsSync(path)) return "";
  const text = readFileSync(path, "utf8");
  return text.match(/"name":\s*"([^"]+)"/)?.[1] ?? "";
}

function laneFor({ slug, candidate, elections, artifacts }) {
  if (artifacts.v2Ts && artifacts.v2Route) return "E verify rendered v2 page";
  if (!candidate) return "P0 add to ui/src/data/candidates.ts";
  if (artifacts.v2Ts) return "D wire v2 route/page";
  if (artifacts.tags.includes("issues")) return "C compile v2 TypeScript";
  if (artifacts.tags.includes("deep")) return "B write v2 issue YAML";
  if (elections.some((e) => e.date.startsWith("2026"))) return "A active-2026 deep scrape";
  if (artifacts.tags.includes("site")) return "F all-candidate v2 rebuild from v1";
  return "F needs baseline profile";
}

function priorityFor(elections, lane) {
  if (lane.startsWith("P0")) return "P0";
  if (elections.some((e) => e.date === "2026-08-04")) return "P0";
  if (elections.some((e) => e.date.startsWith("2026") && e.level === "Federal")) return "P1";
  if (elections.some((e) => e.date.startsWith("2026") && e.level === "State")) return "P1";
  if (elections.some((e) => e.date.startsWith("2026") && e.level === "Local")) return "P1";
  if (elections.some((e) => e.date.startsWith("2027"))) return "P2";
  if (elections.some((e) => e.date.startsWith("2028"))) return "P3";
  return "P4";
}

function hasPopulatedObjectArray(block, key) {
  return new RegExp(`"?${key}"?\\s*:\\s*\\[\\s*\\{`).test(block);
}

function hasPopulatedObject(block, key) {
  return new RegExp(`"?${key}"?\\s*:\\s*\\{`).test(block);
}

function hydrationFor({ candidate, artifacts }) {
  if (artifacts.v2Ts && artifacts.v2Route) return "v2 rendered";
  if (!candidate) return "missing UI entry";

  const block = candidate.block ?? "";
  const gaps = [];

  if (!hasPopulatedObjectArray(block, "whatTheyStandFor")) gaps.push("no issue positions");
  if (!hasPopulatedObjectArray(block, "quotes")) gaps.push("no quotes");
  if (!hasPopulatedObject(block, "inTheirOwnWords")) gaps.push("no own-words");
  if (!hasPopulatedObject(block, "campaignFinance")) gaps.push("no finance");
  if (/Public stance not found/i.test(block)) gaps.push("stance gaps");
  if (/Research in Progress|research is still in progress/i.test(block)) gaps.push("research placeholder");

  if (gaps.length) {
    const shown = gaps.slice(0, 3).join("; ");
    return `v1 incomplete: ${shown}${gaps.length > 3 ? "; ..." : ""}`;
  }

  return "v1 populated, needs v2 cross-reference";
}

function markdownTable(rows) {
  const headers = ["Priority", "Slug", "Name", "Election", "Hydration", "Artifacts", "Lane"];
  const widths = headers.map((h) => h.length);
  const cells = rows.map((row) => [
    row.priority,
    row.slug,
    row.name,
    row.electionNames,
    row.hydration,
    row.artifacts,
    row.lane,
  ]);
  for (const row of cells) {
    row.forEach((cell, i) => {
      widths[i] = Math.max(widths[i], String(cell).length);
    });
  }
  const line = (parts) => `| ${parts.map((part, i) => String(part).padEnd(widths[i])).join(" | ")} |`;
  return [
    line(headers),
    line(widths.map((w) => "-".repeat(w))),
    ...cells.map(line),
  ].join("\n");
}

const candidates = parseCandidates(candidateText);
const elections = parseElections(electionText);
const electionByCandidate = new Map();
for (const election of elections) {
  for (const slug of election.candidateSlugs) {
    const list = electionByCandidate.get(slug) ?? [];
    list.push(election);
    electionByCandidate.set(slug, list);
  }
}

const memorySlugs = readdirSync(MEMORY_CANDIDATES)
  .filter((entry) => !entry.startsWith("."))
  .filter((entry) => {
    try {
      return statSync(join(MEMORY_CANDIDATES, entry)).isDirectory();
    } catch {
      return false;
    }
  });

const allSlugs = new Set([
  ...memorySlugs,
  ...candidates.keys(),
  ...electionByCandidate.keys(),
]);

const rows = [...allSlugs].sort().map((slug) => {
  const candidate = candidates.get(slug);
  const candidateElections = electionByCandidate.get(slug) ?? [];
  const artifacts = artifactStatus(slug);
  const lane = laneFor({ slug, candidate, elections: candidateElections, artifacts });
  const priority = priorityFor(candidateElections, lane);
  const hydration = hydrationFor({ candidate, artifacts });
  const sizeTag = artifacts.files
    .filter((f) => f.file === "raw-dump-v2.md" || f.file === "v2-issues.yaml")
    .map((f) => `${basename(f.file, ".md")}:${humanBytes(f.bytes)}`)
    .join(",");
  return {
    priority,
    slug,
    name: candidate?.name || v2NameFor(slug) || "(missing candidate entry)",
    electionNames: candidateElections.map((e) => `${e.slug}:${e.date}`).join(", ") || "(none)",
    hydration,
    artifacts: `${artifacts.tags.join(",") || "none"}${sizeTag ? ` (${sizeTag})` : ""}`,
    lane,
  };
});

const counts = rows.reduce((acc, row) => {
  acc.total += 1;
  acc.byPriority[row.priority] = (acc.byPriority[row.priority] ?? 0) + 1;
  acc.byLane[row.lane] = (acc.byLane[row.lane] ?? 0) + 1;
  acc.byHydration[row.hydration] = (acc.byHydration[row.hydration] ?? 0) + 1;
  return acc;
}, { total: 0, byPriority: {}, byLane: {}, byHydration: {} });

const active2026 = rows.filter((row) => row.electionNames.includes("2026-")).length;
const missingCandidateEntries = rows.filter((row) => row.lane.startsWith("P0 add")).map((row) => row.slug);
const renderedV2 = rows.filter((row) => row.hydration === "v2 rendered").length;

console.log("# Phase 2 Inventory\n");
console.log(`Generated from ${UI_CANDIDATES} and ${UI_ELECTIONS}.\n`);
console.log(`Total candidate-like slugs: ${counts.total}`);
console.log(`Active 2026 candidate slugs: ${active2026}`);
console.log(`Rendered v2 candidate pages: ${renderedV2}`);
console.log(`Not yet rendered as v2 candidate pages: ${counts.total - renderedV2}`);
console.log(`Missing UI candidate entries: ${missingCandidateEntries.length ? missingCandidateEntries.join(", ") : "none"}\n`);
console.log("## Priority Counts\n");
for (const [priority, count] of Object.entries(counts.byPriority).sort()) {
  console.log(`- ${priority}: ${count}`);
}
console.log("\n## Hydration Counts\n");
for (const [hydration, count] of Object.entries(counts.byHydration).sort()) {
  console.log(`- ${hydration}: ${count}`);
}
console.log("\n## Lane Counts\n");
for (const [lane, count] of Object.entries(counts.byLane).sort()) {
  console.log(`- ${lane}: ${count}`);
}
console.log("\n## Candidate Matrix\n");
console.log(markdownTable(rows));
