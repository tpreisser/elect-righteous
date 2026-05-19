# Phase 2 Throughput Plan

Purpose: keep Elect Righteous quality standards while making 50+ candidates
tractable.

## Operating Rule

Every candidate and current officeholder page must be rebuilt into the v2 model.
Do not run the full bespoke internet-research path for every public official at
the same time.

Use the election calendar and artifact state to assign candidates to lanes.
The lane controls order and research depth; it does not exempt anyone from the
rebuild. Quality is enforced at the lane exit by the v2 schema, source-tier
rules, symmetry test, and build validation.

## Current Inventory

Run:

```sh
node scripts/phase2-inventory.mjs
```

Current result on 2026-05-19:

- 55 candidate-like slugs total
- 35 active 2026 candidate slugs
- 20 off-cycle/current-officeholder slugs for 2027/2028 or context pages
- 1 P0 missing UI candidate entry: `michael-berges`

All 55 candidate-like slugs remain in scope for v2 conversion.

## Lanes

P0 - Structural holes:
- Candidate appears in an active election but has no UI candidate entry.
- Fix before writing more prose, because pages/routes cannot be complete.

A - Active 2026 deep scrape:
- Candidate is on a 2026 ballot and has v1 profile/raw/social artifacts but no
  v2 deep scrape.
- Work product: `memory/candidates/<slug>/sleuth-pass.md` and
  `raw-dump-v2.md`.
- Use office-specific primary-source adapters: FEC/Clerk for federal, Kansas
  Legislature/KPDC for state, county/city/school minutes for local.

B - Write v2 issue YAML:
- Candidate has `raw-dump-v2.md` but not `v2-issues.yaml`.
- Work product: structured issue cards with source registry, stated/actions,
  optional gaps only when triangulated.

C - Compile v2 TypeScript:
- Candidate has `v2-issues.yaml` but no `ui/src/data/v2/<slug>.ts`.
- Work product: typed `CandidateFullV2`, validator clean.

D - Wire v2 route/page:
- Candidate has `ui/src/data/v2/<slug>.ts`, but no page renders that v2 data
  yet.
- Work product: route import or shared v2 route registry wired into the
  candidate page system.

E - Verify rendered v2 page:
- Candidate has v2 TypeScript and a route/page.
- Work product: typecheck, build, and browser/mobile verification.

F - All-candidate v2 rebuild from v1:
- Candidate is 2027/2028/off-cycle context or a current-officeholder context
  page with v1 artifacts.
- Work product: `v2-issues.yaml` generated from `site-profile.md`,
  `raw-dump.md`, `in-their-own-words.md`, and `social-harvest.md`, followed by
  TypeScript compilation.
- Use targeted refresh only for claims that are stale, legally/safety
  sensitive, or likely to have changed. This saves cost without leaving the
  candidate on v1.

## Quality Gates

Every B/C lane exit must pass:

- Every action cites at least one primary or reputable secondary source.
- Every `sourceId` resolves in the candidate source registry.
- Social research remains visible but proportional. Follows, likes, comments,
  posts, platform absences, and screenshots belong in a compact "In Their Own
  Words" / relevant-social-activity dropdown, with concrete observations mapped
  to issue cards where they illuminate the record.
- Gap fields are omitted unless evidence shows a real stated/action divergence.
- The symmetry test is applied to every issue paragraph.
- `npx tsc --noEmit --incremental false` passes in `ui`.

## Efficiency Moves

1. Batch by office, not by candidate.
   Federal House/Senate candidates share FEC, Congress, VoteSmart, and social
   harvest paths. USD 489 candidates share BoardDocs. Ellis County candidates
   share Agenda Center minute extraction.

2. Promote existing v1 artifacts instead of rereading the internet from zero.
   `site-profile.md`, `in-their-own-words.md`, and `social-harvest.md` become
   candidate-stated/source-discovery inputs. Deep scrape only upgrades the
   claims that are going public.

3. Convert off-cycle candidates through the baseline lane.
   They still get v2 issue cards and source registries. They do not consume
   active-race deep-scrape time unless a claim needs fresh verification.

4. Use reusable source adapters.
   The Ellis County minute pattern documented in Nathan Leiker's v2 dump is now
   reusable across county candidates. The USD 489 BoardDocs/Highbond pattern is
   reusable across school candidates.

5. Compile after issue YAML, not during research.
   Narrative writers produce `v2-issues.yaml`; site-profile writers translate
   YAML to TypeScript. This prevents frontend edits from being mixed with
   research corrections.

6. Apply comment/screenshot/social handling to every candidate.
   Visible comments, screenshot captures, platform absence, and silence are
   universal evidence categories. They are not limited to candidates who
   commented or candidates with screenshots already in hand. If no candidate-
   controlled platform exists, record the absence as methodology/context, not
   as an issue-specific social signal.

7. Keep the public page in collapsible dossier sections.
   Required labels: "Who They Are", "Their Record", "In Their Own Words",
   "Where They Stand on Big Issues", "Where They Worship", and
   "Donor/Funding Information". Drop the old standalone "What You Should Know"
   section; merge anything important into the relevant section instead.

## Immediate Queue

1. P0: Add `michael-berges` candidate entry or remove him from the active ballot
   if the election listing is premature.
2. P2.e: Browser-check and mobile-check the six rendered v2 preview pages:
   `allen-park`, `ken-brooks`, `nathan-leiker`, `ruth-ruder`, `mason-ruder`,
   and `tracey-mann`.
3. A: Batch the remaining 2026 statewide/federal candidates by office.
4. F: Convert the 2027/2028/context candidates from existing v1 artifacts,
   with targeted refresh where stale facts or high-risk claims require it.
