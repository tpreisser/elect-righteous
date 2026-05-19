/**
 * Elect Righteous v2 — Candidate data schema.
 *
 * This module defines the v2 TypeScript interfaces that Phase 2 of the
 * orchestration directive (plans/v2-orchestration.md) writes into and that
 * the renderer reads from. The shape is binding on every agent that
 * produces or consumes candidate data; the validator at the bottom of this
 * file is the enforcement mechanism.
 *
 * The schema is shaped to enforce IDENTITY.md commitments at the type
 * level, so downstream agents cannot accidentally violate them in prose
 * and have it pass code review:
 *
 *   1. Primary sources first. Every {@link Source} carries an explicit
 *      {@link SourceTier}; the renderer keys behavior off the tag.
 *   2. Stated vs. behavior gap. Every {@link IssueCard} carries `stated`
 *      (what the candidate says), `actions` (what they did, with primary
 *      sources), and an OPTIONAL `gap` field only present when
 *      triangulated evidence shows divergence. Gaps must cite specific
 *      evidence IDs, not free prose.
 *   3. Social signals are observation, never imputed belief. A
 *      {@link SocialSignal} has an `observation` string and no `belief`
 *      or `position` field. The type system makes it impossible to write
 *      "candidate believes X" as a social signal.
 *   4. Social signals are issue-scoped, never silo'd. Every
 *      {@link SocialSignal} carries a required `mappedToIssueId`. There
 *      is no top-level `socialMedia` array on the candidate. If a signal
 *      cannot be mapped to an issue, it does not render.
 *   5. Claim anchoring. Every {@link Source} carries a `claimsAnchored`
 *      list — the specific claims this source backs. Narrative writers
 *      must cite specifically rather than dumping URLs.
 *   6. No grading. There are intentionally no `score`, `integrityRating`,
 *      `valuesBadge`, `consistency`, or `flagAlert` fields on
 *      {@link CandidateFullV2}. The v1 badge components are deprecated.
 */

// =============================================================================
// Sources
// =============================================================================

/**
 * Source tier per IDENTITY.md "primary sources first" rule.
 *
 * - `primary`   — official record: voting roll-calls, board minutes, agenda
 *                 packets, court filings, FEC filings, government datasets,
 *                 the candidate's own published bill text or floor video.
 * - `secondary` — reputable news reporting, profile pieces, fact-checks,
 *                 issue advocacy writeups that quote primary records.
 * - `social`    — public social-media posts, comment threads, video
 *                 statements made by the candidate or directly observed
 *                 on the candidate's account.
 *
 * Validator rule: an {@link ActionEvidence} entry must be backed by at
 * least one `primary` or `secondary` source; pure `social` backing for a
 * documented action is not allowed.
 */
export type SourceTier = "primary" | "secondary" | "social";

/**
 * A single citable URL plus the specific claims it anchors.
 *
 * `claimsAnchored` is what forces narrative-writer (Phase 2.c) to be
 * specific rather than dumping a pile of URLs at the bottom of a page.
 * Renderer can show "Source: Hays USD 489 board minutes 2024-03-15
 * [backs claims: voted yes on item 7, attended in person]."
 *
 * Validator rule: every `sourceId` referenced anywhere in the candidate
 * must resolve to a {@link Source} listed in `CandidateFullV2.sources`.
 */
export interface Source {
  /** Unique within a candidate. Convention: `s-{n}` or kebab-case slug. */
  id: string;
  tier: SourceTier;
  url: string;
  title: string;
  /** Publisher / outlet / institution. Optional for self-published or
   * uncategorized social posts. */
  publisher?: string;
  /** ISO date the source was accessed/captured. */
  accessed: string;
  /**
   * Plain-language claims this source backs, e.g. ["voted yes on item 7",
   * "attended in person 2024-03-15"]. Required (may be empty array, but
   * narrative-writer is expected to populate this).
   */
  claimsAnchored: string[];
}

// =============================================================================
// Evidence — documented actions
// =============================================================================

/**
 * One documented action by the candidate: a vote, a public statement, a
 * meeting attendance, a filing, an in-person appearance. `body` is short
 * factual prose; `sourceIds` references the candidate's `sources[]`
 * registry.
 *
 * Validator rule: at least one referenced source must be tier `primary`
 * or `secondary` (pure social backing is rejected — that belongs in a
 * {@link SocialSignal}, not an action).
 */
export interface ActionEvidence {
  /** Unique within a candidate. Convention: `a-{n}`. */
  id: string;
  /** ISO date the action occurred. */
  date: string;
  /** Short factual prose. Symmetry test applies — must read identically
   * if rewritten about a candidate of the opposite party with the same
   * evidence. */
  body: string;
  /** Source IDs from `CandidateFullV2.sources` backing this action. */
  sourceIds: string[];
}

// =============================================================================
// Social signals — observation only, issue-scoped
// =============================================================================

/**
 * An observed social-media behavior. Note the intentional absence of any
 * `belief`, `position`, `stance`, or `inferred` field — by design.
 * Signals describe what was seen (a like, a repost, a follow, an
 * attendance photo), not what it means.
 *
 * Renderer is expected to surface these under the {@link IssueCard} they
 * map to, not as a top-level "social media" silo.
 *
 * Validator rule: `mappedToIssueId` must resolve to a real
 * `IssueCard.id` on the same candidate. Unmapped signals do not render.
 */
export interface SocialSignal {
  /** Unique within a candidate. Convention: `ss-{n}`. */
  id: string;
  /** Platform name, e.g. "X", "Facebook", "Instagram", "YouTube". */
  platform: string;
  /**
   * What was observed, phrased as behavior, NOT as belief.
   *
   * Good: "Reposted KS-Gov press release on amendment 2 on 2024-03-15."
   * Bad:  "Believes amendment 2 is unconstitutional." (imputed belief)
   *
   * The type system cannot fully prevent the bad phrasing inside a
   * string, but the field name `observation` + the absence of any
   * `belief`/`position` field nudge writers in the right direction, and
   * the symmetry-test check at Phase 2.d catches violations.
   */
  observation: string;
  /** ISO date the post/signal was observed. */
  observedAt: string;
  /** Source IDs (typically tier `social`) backing this observation. */
  sourceIds: string[];
  /** REQUIRED. The IssueCard.id this signal maps to. Required, not
   * optional, by design: unmapped signals should not exist. */
  mappedToIssueId: string;
}

// =============================================================================
// Gap — triangulated divergence between stated and behavior
// =============================================================================

/**
 * Description of an evidence-supported divergence between what the
 * candidate says (`IssueCard.stated`) and what they have done
 * (`IssueCard.actions`) or how they have publicly engaged
 * (`IssueCard.socialSignals`).
 *
 * Validator rule: `evidenceIds.length >= 1`. A gap with no anchored
 * evidence is editorial speculation and must not render.
 */
export interface Gap {
  /** Short factual prose framing the divergence. Symmetry test applies. */
  summary: string;
  /**
   * IDs of {@link ActionEvidence} and/or {@link SocialSignal} entries on
   * the same {@link IssueCard} that document the divergence. Renderer
   * resolves which kind of evidence each ID points to.
   */
  evidenceIds: string[];
}

// =============================================================================
// Issue card — the primary unit of candidate content
// =============================================================================

/**
 * One issue area for one candidate.
 *
 * `stated` is what the candidate SAYS about the issue (campaign-website
 * text, public statement, debate answer) with source anchoring.
 *
 * `actions` is what the candidate HAS DONE on the issue — votes,
 * statements on the record, meeting attendance, filings — each with
 * primary-source backing.
 *
 * `socialSignals` are observed social-media behaviors mapped to this
 * issue. They are intentionally not a separate top-level section on the
 * candidate; they live here, next to the issue they illuminate.
 *
 * `gap` is OPTIONAL because not every issue has a triangulated
 * divergence. Most issues will not — that is correct, and the absence
 * of a gap should not be filled in for the sake of symmetry.
 */
export interface IssueCard {
  /** Unique within a candidate. Convention: `i-{kebab-issue-name}`. */
  id: string;
  /** Human-readable issue title, e.g. "School library policy",
   * "Property tax mill levy", "Border security". */
  title: string;
  /** What the candidate says about this issue, with source backing. */
  stated: {
    text: string;
    sourceIds: string[];
  };
  /** Documented actions on this issue. May be empty if the candidate is
   * a first-time challenger with no record yet — narrative-writer
   * should note that case in `stated.text`, not invent actions. */
  actions: ActionEvidence[];
  /** Social-media observations mapped to this issue. May be empty. */
  socialSignals: SocialSignal[];
  /** Optional — only present when triangulated evidence shows a gap
   * between stated position and documented behavior. */
  gap?: Gap;
}

// =============================================================================
// Candidate — v2
// =============================================================================

/** Party affiliation — unchanged from v1. */
export type PartyKeyV2 = "R" | "D" | "I" | "NP";

/**
 * Optional church/worship-community metadata. v2 keeps this as
 * descriptive metadata only; it is intentionally NOT a basis for any
 * grading or values badge.
 */
export interface ChurchInfoV2 {
  name: string;
  denomination?: string;
  url?: string;
  details?: string;
}

/**
 * Campaign finance summary. Structurally unchanged from v1; v2 simply
 * carries it forward so the finance section continues to render.
 */
export interface CampaignFinanceV2 {
  totalRaised: string;
  narrative: string;
  donors: { name: string; amount: string }[];
  undisclosed?: string;
  reportingPeriod: string;
  source: string;
}

/**
 * A v2 candidate.
 *
 * v1's narrative blobs (`whoTheyAre`, `theirRecord`, `whatYouShouldKnow`,
 * `whatTheyStandFor`, `inTheirOwnWords`) are replaced by `issues:
 * IssueCard[]`. The renderer composes the candidate page from issue
 * cards rather than from prose silos.
 *
 * v1's deprecated grading/badge fields (NONE of which exist in the v1
 * `CandidateFull` interface today but which past iterations referenced)
 * are intentionally absent — `score`, `integrityRating`, `valuesBadge`,
 * `consistency`, `flagAlert`, `valuesAlignment`, `comparisonRow`. Do not
 * add them.
 *
 * `sources` at the top level is the registry every `sourceId` resolves
 * into. The validator enforces this.
 */
export interface CandidateFullV2 {
  // -------- Metadata (kept from v1) --------
  slug: string;
  name: string;
  party: PartyKeyV2;
  position: string;
  electionSlug: string;
  incumbent: boolean;
  occupation: string;

  // -------- At-a-glance (kept from v1, all optional) --------
  born?: string;
  hometown?: string;
  religion?: string;
  education?: string;
  family?: string;
  district?: string;
  margin2024?: string;
  campaignWebsite?: string;

  // -------- v2 content model --------
  /** The primary content of the candidate page — one card per issue. */
  issues: IssueCard[];

  // -------- Descriptive metadata (kept from v1) --------
  /** Short faith/worship narrative. Descriptive only, NOT a grade. */
  whereTheyWorship?: string;
  church?: ChurchInfoV2;
  campaignFinance?: CampaignFinanceV2;

  // -------- Source registry --------
  /**
   * All sources referenced anywhere in this candidate object. Every
   * `sourceId` in every {@link IssueCard.stated}, {@link ActionEvidence},
   * and {@link SocialSignal} must resolve to an entry here.
   */
  sources: Source[];
}

// =============================================================================
// Type guards (ergonomic, not over-engineered)
// =============================================================================

/** Type guard: is this object shaped like a {@link Source}? */
export function isSource(x: unknown): x is Source {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    (o.tier === "primary" || o.tier === "secondary" || o.tier === "social") &&
    typeof o.url === "string" &&
    typeof o.title === "string" &&
    typeof o.accessed === "string" &&
    Array.isArray(o.claimsAnchored)
  );
}

/** Type guard: is this object shaped like an {@link ActionEvidence}? */
export function isActionEvidence(x: unknown): x is ActionEvidence {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.date === "string" &&
    typeof o.body === "string" &&
    Array.isArray(o.sourceIds)
  );
}

/** Type guard: is this object shaped like a {@link SocialSignal}? */
export function isSocialSignal(x: unknown): x is SocialSignal {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.platform === "string" &&
    typeof o.observation === "string" &&
    typeof o.observedAt === "string" &&
    Array.isArray(o.sourceIds) &&
    typeof o.mappedToIssueId === "string"
  );
}

/** Type guard: is this object shaped like an {@link IssueCard}? */
export function isIssueCard(x: unknown): x is IssueCard {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  if (typeof o.id !== "string" || typeof o.title !== "string") return false;
  const stated = o.stated as Record<string, unknown> | undefined;
  if (
    !stated ||
    typeof stated.text !== "string" ||
    !Array.isArray(stated.sourceIds)
  ) {
    return false;
  }
  return Array.isArray(o.actions) && Array.isArray(o.socialSignals);
}

/** Type guard: is this object shaped like a {@link CandidateFullV2}? */
export function isCandidateFullV2(x: unknown): x is CandidateFullV2 {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.slug === "string" &&
    typeof o.name === "string" &&
    (o.party === "R" || o.party === "D" || o.party === "I" || o.party === "NP") &&
    typeof o.position === "string" &&
    typeof o.electionSlug === "string" &&
    typeof o.incumbent === "boolean" &&
    typeof o.occupation === "string" &&
    Array.isArray(o.issues) &&
    Array.isArray(o.sources)
  );
}

// =============================================================================
// Runtime validator
// =============================================================================

/** Validator return type. */
export type ValidationResult =
  | { ok: true }
  | { ok: false; errors: string[] };

/**
 * Validate a v2 candidate against the schema's structural invariants.
 *
 * Checks:
 *   (a) every `sourceId` referenced anywhere on the candidate resolves
 *       to a {@link Source} in `candidate.sources[]`.
 *   (b) every {@link SocialSignal.mappedToIssueId} resolves to a real
 *       {@link IssueCard.id} on this candidate.
 *   (c) no {@link IssueCard} has a `gap` without
 *       `gap.evidenceIds.length >= 1`.
 *   (d) every `gap.evidenceIds[]` entry resolves to a real
 *       {@link ActionEvidence.id} or {@link SocialSignal.id} on the
 *       same {@link IssueCard}.
 *   (e) no {@link ActionEvidence} is backed only by tier `social`
 *       sources (primary or secondary backing is required for actions).
 *   (f) all `id` fields on issues / actions / social signals / sources
 *       are unique within their respective collections.
 *
 * The validator does NOT check editorial quality (symmetry test,
 * 8th-grade readability, etc.) — those are Phase 2.d responsibilities.
 *
 * @param c the candidate to validate.
 * @returns `{ ok: true }` or `{ ok: false, errors }` with human-readable
 *          messages.
 */
export function validateCandidateV2(c: CandidateFullV2): ValidationResult {
  const errors: string[] = [];

  // ---- (f) ID uniqueness ----
  const sourceIds = new Set<string>();
  for (const s of c.sources) {
    if (sourceIds.has(s.id)) {
      errors.push(`Duplicate source id "${s.id}" in sources[].`);
    }
    sourceIds.add(s.id);
  }

  const issueIds = new Set<string>();
  for (const issue of c.issues) {
    if (issueIds.has(issue.id)) {
      errors.push(`Duplicate issue id "${issue.id}" in issues[].`);
    }
    issueIds.add(issue.id);
  }

  // Build lookups
  const sourceById = new Map<string, Source>();
  for (const s of c.sources) sourceById.set(s.id, s);

  // Helper: assert every sourceId in `refs` resolves to a Source.
  const checkSourceRefs = (refs: string[], where: string) => {
    for (const id of refs) {
      if (!sourceById.has(id)) {
        errors.push(
          `Unresolved sourceId "${id}" referenced from ${where} (not in candidate.sources[]).`,
        );
      }
    }
  };

  // ---- Per-issue checks ----
  for (const issue of c.issues) {
    // Per-issue id uniqueness for actions and social signals
    const actionIds = new Set<string>();
    for (const a of issue.actions) {
      if (actionIds.has(a.id)) {
        errors.push(
          `Duplicate action id "${a.id}" in issue "${issue.id}".`,
        );
      }
      actionIds.add(a.id);
    }
    const signalIds = new Set<string>();
    for (const ss of issue.socialSignals) {
      if (signalIds.has(ss.id)) {
        errors.push(
          `Duplicate social signal id "${ss.id}" in issue "${issue.id}".`,
        );
      }
      signalIds.add(ss.id);
    }

    // (a) stated.sourceIds resolve
    checkSourceRefs(
      issue.stated.sourceIds,
      `issue "${issue.id}".stated.sourceIds`,
    );

    // (a, e) per-action source resolution + primary/secondary requirement
    for (const action of issue.actions) {
      checkSourceRefs(
        action.sourceIds,
        `issue "${issue.id}" action "${action.id}".sourceIds`,
      );
      if (action.sourceIds.length === 0) {
        errors.push(
          `Action "${action.id}" in issue "${issue.id}" has zero sourceIds; primary or secondary backing required.`,
        );
        continue;
      }
      const tiers = action.sourceIds
        .map((id) => sourceById.get(id)?.tier)
        .filter((t): t is SourceTier => Boolean(t));
      const hasPrimaryOrSecondary = tiers.some(
        (t) => t === "primary" || t === "secondary",
      );
      if (tiers.length > 0 && !hasPrimaryOrSecondary) {
        errors.push(
          `Action "${action.id}" in issue "${issue.id}" is backed only by tier "social" sources; primary or secondary required.`,
        );
      }
    }

    // (a, b) per-social-signal source resolution + issue mapping
    for (const ss of issue.socialSignals) {
      checkSourceRefs(
        ss.sourceIds,
        `issue "${issue.id}" socialSignal "${ss.id}".sourceIds`,
      );
      if (ss.mappedToIssueId !== issue.id) {
        // Allow signals to live under a different issue only if the
        // mapped issue exists somewhere on this candidate; but the
        // canonical placement is for signals to live in the issue they
        // map to. Surface a non-fatal warning as an error so writers
        // catch it during validation.
        if (!issueIds.has(ss.mappedToIssueId)) {
          errors.push(
            `SocialSignal "${ss.id}" maps to unknown issue "${ss.mappedToIssueId}" (not present on this candidate).`,
          );
        } else {
          errors.push(
            `SocialSignal "${ss.id}" lives under issue "${issue.id}" but maps to issue "${ss.mappedToIssueId}"; move it to the issue it maps to.`,
          );
        }
      }
    }

    // (c, d) gap rules
    if (issue.gap !== undefined) {
      if (!Array.isArray(issue.gap.evidenceIds) || issue.gap.evidenceIds.length === 0) {
        errors.push(
          `Issue "${issue.id}" declares a gap with zero evidenceIds; at least one is required.`,
        );
      } else {
        const localActionIds = new Set(issue.actions.map((a) => a.id));
        const localSignalIds = new Set(issue.socialSignals.map((s) => s.id));
        for (const evId of issue.gap.evidenceIds) {
          if (!localActionIds.has(evId) && !localSignalIds.has(evId)) {
            errors.push(
              `Gap on issue "${issue.id}" cites evidenceId "${evId}" that is neither an action nor a social signal on the same issue.`,
            );
          }
        }
      }
    }
  }

  return errors.length === 0 ? { ok: true } : { ok: false, errors };
}
