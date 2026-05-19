/**
 * v1 → v2 migration shim.
 *
 * Purpose: produce a structurally-valid {@link CandidateFullV2} stub from
 * a v1 {@link CandidateFull}, so that Phase 2 agents can start operating
 * on v2-shaped data without waiting for every candidate to be rewritten
 * from scratch.
 *
 * What this shim is NOT: it is not the canonical writer of v2 content.
 * The canonical writer is `site-profile-writer` (Phase 2.d), which
 * compiles cleaned, claim-anchored IssueCards from `v2-issues.yaml`
 * (produced by `narrative-writer` in Phase 2.c). The shim exists for
 * one job: lift v1 entries into a shape the renderer can read while the
 * Phase-2 pipeline catches up.
 *
 * Mapping summary:
 *   - Stable metadata fields → copied straight across.
 *   - v1 `whatYouShouldKnow: string[]`     → stub IssueCard per bullet,
 *                                            no actions / signals yet.
 *   - v1 `whatTheyStandFor: IssuePosition[]` → stub IssueCard per stance,
 *                                              text used as stated.text.
 *   - v1 `whoTheyAre` + `theirRecord` + `whereTheyWorship` →
 *                                          captured into warnings as
 *                                          prose that needs to be
 *                                          decomposed into issues by
 *                                          narrative-writer; NOT
 *                                          re-rendered as a silo.
 *   - v1 `inTheirOwnWords`               → captured into warnings; the
 *                                          v2 model does not have a
 *                                          social-media silo, so the
 *                                          narrative-writer must rewire
 *                                          the social observations
 *                                          inside their relevant issues.
 *   - v1 `sources: Source[]`             → mapped to v2 Source registry,
 *                                          tier=`secondary` by default
 *                                          (with a warning per source
 *                                          so narrative-writer reclasses
 *                                          them).
 *
 * Every warning is a directive to Phase 2 — they enumerate the work
 * needed to turn a stub into a publishable v2 candidate.
 */

import type { CandidateFull } from "./candidates";
import type {
  CandidateFullV2,
  IssueCard,
  Source as SourceV2,
} from "./types-v2";

/**
 * Best-effort migration result.
 *
 * `v2` is structurally valid against {@link CandidateFullV2} but is
 * almost always a STUB — it lacks actions, social signals, and
 * primary-source backing. The `warnings` array enumerates exactly what
 * is missing so Phase 2 can fill it in.
 */
export interface MigrationResult {
  v2: CandidateFullV2;
  warnings: string[];
}

/**
 * Convert a v1 {@link CandidateFull} into a v2-shaped stub.
 *
 * Run on Tracey Mann's v1 entry (the only fully-populated one), the
 * resulting v2 stub will:
 *   - validate cleanly against {@link validateCandidateV2}, because all
 *     IssueCards will have empty `actions` / `socialSignals` and no
 *     `gap` (the structural rules don't require those),
 *   - emit many warnings — one per source needing tier reclassification,
 *     one per narrative blob needing decomposition, one for the social
 *     silo needing redistribution.
 *
 * That is correct and expected. Validation passing does not mean the
 * stub is publishable — it means the renderer will not crash.
 *
 * @param v1 the source v1 candidate.
 * @returns `{ v2, warnings }`.
 */
export function migrateV1ToV2(v1: CandidateFull): MigrationResult {
  const warnings: string[] = [];

  // ---- Source registry ----
  // v1 Source has no id/tier; assign synthetic ids and default tier.
  const sources: SourceV2[] = v1.sources.map((s, i) => {
    warnings.push(
      `Source "${s.title}" (${s.url}) imported with tier="secondary" — narrative-writer must reassess (could be primary if it's a roll-call / minutes / filing).`,
    );
    return {
      id: `s-v1-${i + 1}`,
      tier: "secondary",
      url: s.url,
      title: s.title,
      publisher: s.publication,
      accessed: s.date,
      claimsAnchored: [],
    };
  });

  // ---- Issue cards from `whatTheyStandFor` and `whatYouShouldKnow` ----
  // Each becomes a stub IssueCard. We don't try to deduplicate or merge
  // overlap (e.g. "Abortion" stance and an abortion-related WYSK bullet);
  // narrative-writer does that work explicitly.
  const issues: IssueCard[] = [];

  if (Array.isArray(v1.whatTheyStandFor)) {
    for (const [i, pos] of v1.whatTheyStandFor.entries()) {
      const issueId = `i-stance-${slugifyForId(pos.issue)}-${i + 1}`;
      issues.push({
        id: issueId,
        title: pos.issue,
        stated: {
          text: pos.stance,
          // No source anchoring in v1 IssuePosition — flag it.
          sourceIds: [],
        },
        actions: [],
        socialSignals: [],
      });
      warnings.push(
        `IssueCard "${issueId}" stub (from v1 whatTheyStandFor) has empty stated.sourceIds — narrative-writer must anchor.`,
      );
      warnings.push(
        `IssueCard "${issueId}" stub has zero actions — Phase 2.c must add primary-source ActionEvidence entries.`,
      );
    }
  }

  if (Array.isArray(v1.whatYouShouldKnow)) {
    for (const [i, bullet] of v1.whatYouShouldKnow.entries()) {
      const issueId = `i-wysk-${i + 1}`;
      issues.push({
        id: issueId,
        title: deriveTitleFromBullet(bullet),
        stated: {
          text: bullet,
          sourceIds: [],
        },
        actions: [],
        socialSignals: [],
      });
      warnings.push(
        `IssueCard "${issueId}" stub (from v1 whatYouShouldKnow bullet) — narrative-writer should either merge with a stance-derived IssueCard or anchor as standalone with sources.`,
      );
    }
  }

  if (issues.length === 0) {
    warnings.push(
      `Candidate "${v1.slug}" produced zero IssueCards (no whatTheyStandFor, no whatYouShouldKnow) — Phase 2.c must create issues from scratch.`,
    );
  }

  // ---- Prose blobs that don't have a v2 home ----
  if (v1.whoTheyAre && v1.whoTheyAre.trim().length > 0) {
    warnings.push(
      `v1 "whoTheyAre" narrative present (${v1.whoTheyAre.length} chars) — v2 has no biography silo; narrative-writer must decompose facts into the IssueCards they belong to (career → relevant policy issue, faith → wherever it shows up in actions).`,
    );
  }
  if (v1.theirRecord && v1.theirRecord.trim().length > 0) {
    warnings.push(
      `v1 "theirRecord" narrative present (${v1.theirRecord.length} chars) — v2 has no record silo; narrative-writer must split the prose into ActionEvidence entries on the relevant IssueCards.`,
    );
  }

  // ---- Social silo: explicitly NOT carried over ----
  if (v1.inTheirOwnWords) {
    warnings.push(
      `v1 "inTheirOwnWords" social narrative present — v2 has no top-level social silo. narrative-writer (Phase 2.c) must convert each observed social behavior into a SocialSignal mapped to the relevant IssueCard. Do NOT re-render this as prose.`,
    );
  }

  // ---- Build the v2 candidate ----
  const v2: CandidateFullV2 = {
    slug: v1.slug,
    name: v1.name,
    party: v1.party,
    position: v1.position,
    electionSlug: v1.electionSlug,
    incumbent: v1.incumbent,
    occupation: v1.occupation,

    born: v1.born,
    hometown: v1.hometown,
    religion: v1.religion,
    education: v1.education,
    family: v1.family,
    district: v1.district,
    margin2024: v1.margin2024,
    campaignWebsite: v1.campaignWebsite,

    issues,

    whereTheyWorship: v1.whereTheyWorship,
    church: v1.church
      ? {
          name: v1.church.name,
          denomination: v1.church.denomination,
          url: v1.church.url,
          details: v1.church.details,
        }
      : undefined,
    campaignFinance: v1.campaignFinance
      ? {
          totalRaised: v1.campaignFinance.totalRaised,
          narrative: v1.campaignFinance.narrative,
          donors: v1.campaignFinance.donors.map((d) => ({
            name: d.name,
            amount: d.amount,
          })),
          undisclosed: v1.campaignFinance.undisclosed,
          reportingPeriod: v1.campaignFinance.reportingPeriod,
          source: v1.campaignFinance.source,
        }
      : undefined,

    sources,
  };

  // ---- One blanket warning re: invariants the stub doesn't satisfy ----
  if (issues.length > 0 && sources.length > 0) {
    warnings.push(
      `Stub for "${v1.slug}" passes structural validation but is NOT publishable: every IssueCard has zero ActionEvidence, all sources are tagged tier="secondary" by default, and no claimsAnchored entries exist. Phase 2 must populate these before the candidate goes live.`,
    );
  }

  return { v2, warnings };
}

// ---- Helpers ----

function slugifyForId(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

/**
 * Derive a short title from a "what you should know" bullet so the
 * stub IssueCard has a usable card title. This is purely cosmetic —
 * narrative-writer will rewrite titles in Phase 2.c.
 */
function deriveTitleFromBullet(bullet: string): string {
  const firstClause = bullet.split(/[.,—]/)[0] ?? bullet;
  const trimmed = firstClause.trim();
  if (trimmed.length === 0) return "Key fact";
  if (trimmed.length <= 80) return trimmed;
  return trimmed.slice(0, 77) + "...";
}
