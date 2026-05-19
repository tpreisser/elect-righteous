#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const MEMORY_CANDIDATES = join(ROOT, "memory/candidates");
const UI_CANDIDATES = join(ROOT, "ui/src/data/candidates.ts");
const UI_V2 = join(ROOT, "ui/src/data/v2");

function slugToConst(slug) {
  return `${slug.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase()}_V2`;
}

function loadYaml(path) {
  const json = execFileSync(
    "ruby",
    [
      "-ryaml",
      "-rjson",
      "-e",
      "path=ARGV.fetch(0); obj=YAML.load_file(path); puts JSON.generate(obj)",
      path,
    ],
    { encoding: "utf8" },
  );
  return JSON.parse(json);
}

function findCandidateBlock(text, slug) {
  const slugRegex = /(^|\n)\s*"?slug"?\s*:\s*"([^"]+)"/g;
  const matches = [...text.matchAll(slugRegex)];
  for (let i = 0; i < matches.length; i += 1) {
    if (matches[i][2] !== slug) continue;
    const start = matches[i].index ?? 0;
    const end = matches[i + 1]?.index ?? text.indexOf("\n];", start);
    return text.slice(start, end > start ? end : undefined);
  }
  return "";
}

function readStringField(block, key) {
  const keyMatch = block.match(new RegExp(`"?${key}"?\\s*:`));
  if (!keyMatch || keyMatch.index === undefined) return undefined;
  let i = keyMatch.index + keyMatch[0].length;
  while (/\s/.test(block[i] ?? "")) i += 1;

  const quote = block[i];
  if (quote !== '"' && quote !== "`") return undefined;
  i += 1;
  let out = "";
  while (i < block.length) {
    const ch = block[i];
    if (ch === "\\" && quote === '"') {
      out += ch + (block[i + 1] ?? "");
      i += 2;
      continue;
    }
    if (ch === quote) break;
    out += ch;
    i += 1;
  }

  if (quote === '"') {
    try {
      return JSON.parse(`"${out}"`);
    } catch {
      return out.replace(/\\"/g, '"').replace(/\\n/g, "\n");
    }
  }
  return out;
}

function readBoolField(block, key) {
  const match = block.match(new RegExp(`"?${key}"?\\s*:\\s*(true|false)`));
  if (!match) return undefined;
  return match[1] === "true";
}

function omitEmpty(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  return value;
}

function cleanReligion(value) {
  if (!value) return undefined;
  if (/^(likely|unknown|unconfirmed)/i.test(value)) return undefined;
  return value;
}

function cleanCampaignWebsite(value) {
  if (!value) return undefined;
  if (/ellisco\.net|usd489\.com|haysusa\.com/i.test(value)) return undefined;
  return value;
}

function campaignFinanceFromNote(note) {
  if (!note) return undefined;
  return {
    totalRaised: "Not itemized in public web records",
    narrative: String(note).trim(),
    donors: [],
    undisclosed: "No donor-by-donor public web ledger was found in the reviewed local records.",
    reportingPeriod: "Most recent local cycle reviewed",
    source: "Candidate memory v2 issue file and local filing-system notes",
  };
}

function normalizeCandidate(slug, yaml, v1) {
  const meta = yaml.candidate_metadata ?? {};
  const whereTheyWorship =
    omitEmpty(meta.whereTheyWorship) ??
    omitEmpty(meta.whereTheyWorship_note) ??
    omitEmpty(v1.whereTheyWorship);

  const candidate = {
    slug,
    name: meta.name ?? v1.name ?? slug,
    party: v1.party ?? (meta.party === "Republican" ? "R" : meta.party === "Democrat" ? "D" : "NP"),
    position: meta.position ?? meta.office ?? v1.position ?? "",
    electionSlug: meta.electionSlug ?? v1.electionSlug ?? "",
    incumbent: typeof v1.incumbent === "boolean" ? v1.incumbent : Boolean(meta.incumbent),
    occupation: meta.occupation ?? v1.occupation ?? "",

    born: omitEmpty(meta.born ?? v1.born),
    hometown: omitEmpty(meta.hometown ?? v1.hometown),
    religion: cleanReligion(meta.religion ?? v1.religion),
    education: omitEmpty(meta.education ?? v1.education),
    family: omitEmpty(meta.family ?? v1.family),
    district: omitEmpty(meta.district ?? v1.district),
    margin2024: omitEmpty(meta.margin2024 ?? v1.margin2024),
    campaignWebsite: cleanCampaignWebsite(meta.campaignWebsite ?? v1.campaignWebsite),

    issues: yaml.issues ?? [],
    whoTheyAre: omitEmpty(meta.whoTheyAre ?? v1.whoTheyAre),
    recordSummary: omitEmpty(meta.recordSummary ?? meta.theirRecord ?? v1.theirRecord),
    ownWordsNarrative: omitEmpty(meta.ownWordsNarrative ?? v1.inTheirOwnWords?.narrative),
    whereTheyWorship,
    campaignFinance: yaml.campaignFinance ?? campaignFinanceFromNote(meta.campaign_finance_note),
    socialResearchNote: omitEmpty(meta.social_presence_note),
    sources: yaml.sources ?? [],
  };

  for (const key of Object.keys(candidate)) {
    if (candidate[key] === undefined) delete candidate[key];
  }

  return candidate;
}

function readV1Metadata(slug) {
  const text = readFileSync(UI_CANDIDATES, "utf8");
  const block = findCandidateBlock(text, slug);
  return {
    name: readStringField(block, "name"),
    party: readStringField(block, "party"),
    position: readStringField(block, "position"),
    electionSlug: readStringField(block, "electionSlug"),
    incumbent: readBoolField(block, "incumbent"),
    occupation: readStringField(block, "occupation"),
    born: readStringField(block, "born"),
    hometown: readStringField(block, "hometown"),
    religion: readStringField(block, "religion"),
    education: readStringField(block, "education"),
    family: readStringField(block, "family"),
    district: readStringField(block, "district"),
    margin2024: readStringField(block, "margin2024"),
    campaignWebsite: readStringField(block, "campaignWebsite"),
    whereTheyWorship: readStringField(block, "whereTheyWorship"),
  };
}

function emitTs(slug, candidate) {
  const constName = slugToConst(slug);
  const rel = `${slug}.ts`;
  const path = join(UI_V2, rel);
  const body = JSON.stringify(candidate, null, 2);
  const ts = `/* Auto-generated from memory/candidates/${slug}/v2-issues.yaml.
 * Edit the YAML source, then run:
 *   node scripts/compile-v2-yaml.mjs ${slug}
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
  return path;
}

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/compile-v2-yaml.mjs <slug> [slug...]");
  process.exit(2);
}

for (const slug of slugs) {
  const yamlPath = join(MEMORY_CANDIDATES, slug, "v2-issues.yaml");
  if (!existsSync(yamlPath)) {
    console.error(`Missing ${yamlPath}`);
    process.exitCode = 1;
    continue;
  }
  const yaml = loadYaml(yamlPath);
  const v1 = readV1Metadata(slug);
  const candidate = normalizeCandidate(slug, yaml, v1);
  const path = emitTs(slug, candidate);
  console.log(`Wrote ${path}`);
}
