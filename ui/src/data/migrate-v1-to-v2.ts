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
 *   - v1 `whatYouShouldKnow: string[]`     → intentionally not carried as
 *                                            its own section. Important items
 *                                            should be merged into issues,
 *                                            record, worship, funding, or
 *                                            social relevance.
 *   - v1 `whatTheyStandFor: IssuePosition[]` → stub IssueCard per stance,
 *                                              text used as stated.text.
 *   - v1 `whoTheyAre` + `theirRecord` + `whereTheyWorship` →
 *                                          captured into warnings for
 *                                          collapsible dossier sections and
 *                                          claim-anchored issue/action work.
 *   - v1 `inTheirOwnWords`               → captured into warnings; the
 *                                          narrative-writer keeps a compact
 *                                          social relevance section while
 *                                          mapping concrete observations to
 *                                          their relevant issues.
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

  // ---- Issue cards from `whatTheyStandFor` ----
  // `whatYouShouldKnow` is deliberately not migrated as its own v2 section.
  // Important bullets should be merged into claim-anchored issues, actions,
  // funding, worship, social relevance, or record sections by Phase 2.c.
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

  if (Array.isArray(v1.whatYouShouldKnow) && v1.whatYouShouldKnow.length > 0) {
    warnings.push(
      `v1 "whatYouShouldKnow" has ${v1.whatYouShouldKnow.length} bullets — v2 must drop that standalone section and merge genuinely important facts into issues, record, worship, funding, or social relevance.`,
    );
  }

  if (issues.length === 0) {
    warnings.push(
      `Candidate "${v1.slug}" produced zero IssueCards (no whatTheyStandFor) — Phase 2.c must create issues from scratch.`,
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

  // ---- Social relevance: preserve proportion, not a standalone verdict ----
  if (v1.inTheirOwnWords) {
    warnings.push(
      `v1 "inTheirOwnWords" social narrative present — v2 should keep a compact social relevance section and convert concrete observed follows/likes/comments/posts into SocialSignal entries mapped to relevant IssueCards. Do not let social behavior become the whole relevance filter.`,
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

    whoTheyAre: v1.whoTheyAre,
    recordSummary: v1.theirRecord,
    ownWordsNarrative: v1.inTheirOwnWords?.narrative,
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
