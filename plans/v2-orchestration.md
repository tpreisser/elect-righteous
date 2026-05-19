# Elect Righteous v2 — Orchestration Directive

Operating principle: main thread = orchestrator, never executes. Dispatches
sub-agent waves. Agents talk to each other through `memory/orchestration/STATE.md`,
not through chat. Every agent reads IDENTITY.md + STATE.md at start.

## Pre-conditions (operator action required)
1. `electrighteous.com` purchased, DNS at Cloudflare.
2. FormSubmit.co activation email at `tyler@preissersolutions.com` clicked.
3. `online-sleuth` agent built and registered.
4. Decision on monolithic `candidates.ts` vs. per-candidate file split.

## Concurrency budget
8 agents max in flight across all waves. Operator review gates after Phase 0,
after Phase 1, every 2 waves in Phase 2, before Phase 4.

---

## Phase 0 — Activation (1 wave, 4 parallel agents, ~30 min)

| # | Agent | Task |
|---|---|---|
| 0.1 | `web-code-executor` | Repair form. Extract `FEEDBACK_EMAIL = "tyler@preissersolutions.com"` to `ui/src/lib/config.ts`. Update `client.tsx:756` and `:921`. Live test, screenshot receipt. |
| 0.2 | `web-code-executor` | Repair Ken Brooks: strip "Hays High graduate" from `candidates.ts:45049`, replace `:45053` bogus campaignWebsite with verified Facebook page note. |
| 0.3 | `web-code-executor` | Split Ellis County race (`elections.ts:226–244`) into `ellis-county-2026-ballot` + `ellis-county-incumbents-off-cycle`. |
| 0.4 | `Explore` | Audit USD 489 board, Hays City, every local race entry for the same "officeholders ≠ ballot" conflation. Report-only. |

Phase 0 done when: test submission lands at `tyler@preissersolutions.com`,
three commits on `v2-p0`, audit report appended to STATE.md.

---

## Phase 1 — Schema + Allen Park proof-of-concept (sequential, 3 agents, ~3 hr)

| # | Agent | Task |
|---|---|---|
| 1.1 | `nextjs-expert` or `react-architect` | Design v2 TypeScript interfaces: `IssueCard`, `ActionEvidence`, `SocialSignal`, claim-anchored `Source` with `tier: 'primary'\|'secondary'\|'social'`. Output `ui/src/data/types-v2.ts` + migration shim. |
| 1.2 | `web-code-executor` | Build v2 render components (`IssueCardComponent`, `ActionList`, `SocialSignalChip`, `ClaimAnchoredSourcePanel`). Render Allen Park under v2 as the worked example with min 3 primary-source `ActionEvidence` entries on governance-scope issue. |
| 1.3 | `ui-mobile` | Mobile audit on Allen Park v2 page: 390px viewport, ≤5s to useful info, ≤44px tap targets, no horizontal scroll. File issues back to 1.2 in same wave. |

Phase 1 done when: Allen Park v2 dev-builds clean, passes symmetry + 8th-grade
readability, operator approves the pattern.

---

## Phase 2 — Candidate repopulation (parallel waves of 5, ~3 days wall clock)

Per-candidate pipeline (5 agents per candidate, partially parallel):

```
[online-sleuth] ──┐
[deep-scraper] ───┼──→ [narrative-writer] ──→ [site-profile-writer] ──→ [web-code-debug]
                  │
(verify + preview link)
              (parallel)
```

| Stage | Agent | Output |
|---|---|---|
| 2.a | `online-sleuth` (operator's new agent; fallback `internet-investigator`) | Comment-section + social-affiliation sweep. Output `memory/candidates/{slug}/sleuth-pass.md` with raw obs + issue-mapping notes ("this signal belongs to issue X because Y"). |
| 2.b | `deep-scraper` (project agent) | Re-scrape with explicit instruction: tier-primary voting records, minutes, agenda packets — not news writeups. Output `memory/candidates/{slug}/raw-dump.md` v2. |
| 2.c | `narrative-writer` (project agent) | Draft `IssueCard.stated.text` + `gap.summary`. Reads sleuth-pass.md, weaves social signals into the *issue* they're relevant to, never as a silo. Output `memory/candidates/{slug}/v2-issues.yaml`. |
| 2.d | `site-profile-writer` | Compile into `CandidateFull` v2 object. Validate every `sourceId` resolves. Symmetry-test every prose block. Append to `candidates.ts` (or per-candidate file). |
| 2.e | `web-code-debug` | Build check, render check, generate courtesy preview link template for operator. |

State transitions per slug: `queued → sleuth_in_flight → sleuth_done → scrape_done → narrative_done → compile_done → ready_for_operator → published`

Math: 53 candidates × 5 stages, wave size 5 = ~11 waves, ~14–18 agent-hr, ~3
days wall clock with operator checkpoints every 2 waves.

---

## Phase 3 — Election pages + civic-action surface (1 wave, 2 agents, ~2 hr)

| # | Agent | Task |
|---|---|---|
| 3.1 | `web-code-executor` | Rebuild `ui/src/app/elections/` with split structure. Add "How to Vote / How to Run" panel sourced from new `ui/src/data/civic-actions.ts` (filing deadlines per Nathan Leiker's feedback). |
| 3.2 | `documentation-specialist` | Update `CLAUDE.md` and `AGENTS.md` to reflect v2 schema, IDENTITY.md presence, civic-actions data file, new deploy target. |

---

## Phase 4 — Cloudflare migration (sequential, operator-in-loop, ~1 hr)

| # | Agent / Actor | Task |
|---|---|---|
| 4.1 | `web-code-executor` | Add `ui/wrangler.toml`. Strip GH Pages `basePath`. Update `metadataBase` → `https://electrighteous.com`. Add `public/_redirects` for legacy paths. |
| 4.2 | Operator | `wrangler login`, first `wrangler pages deploy`, attach custom domain. |
| 4.3 | `web-code-debug` + `security-audit-expert` (parallel) | Verify prod: headers, HTTPS, mixed-content, OG, canonical, sitemap, llms.txt, no leaked client-side secrets. |

---

## Phase 5 — Pre-launch verification (1 wave, 4 parallel, ~1 hr)

- `web-code-debug` — v1→v2 feature-parity regression sweep
- `ui-mobile` — full mobile pass
- `security-audit-expert` — form recipient leak, env-var audit
- `general-purpose` — send live test correction, confirm receipt, screenshot

Deploy gate: all green + courtesy preview links sent to Ken Brooks and Nathan
Leiker + operator approves.

---

## Agents available

**Project-internal** (`agents/`): election-finder, candidate-profiler,
deep-scraper, opposition-research, media-extractor, integrity-analyzer,
report-generator, site-profile-writer, narrative-writer. **+ operator's new
`online-sleuth`**.

**Harness subagents**: Explore, web-code-executor, web-code-debug, ui-mobile,
nextjs-expert, react-architect, javascript-typescript-expert, python-expert,
internet-investigator, documentation-specialist, security-audit-expert,
codebase-cartographer, general-purpose. Plus `frontend-design` skill.

## Halt conditions
Any agent that finds a bug class not enumerated here HALTS, writes the finding
to `STATE.md` under `blockers[]`, and waits for orchestrator decision. No
silent scope expansion.
