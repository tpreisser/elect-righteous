# CODEX HANDOFF — "In Their Own Words" Narrative Pipeline

> **Owner:** Tyler Preisser (Hays, Kansas)
> **Created:** 2026-05-11
> **Authoring agent:** Claude Code (handing off to OpenAI Codex)
> **Repository:** `/Users/tylerpreisser/Desktop/elect-righteous/`
> **Live site:** https://tpreisser.github.io/elect-righteous/
> **GitHub repo:** https://github.com/tpreisser/elect-righteous
> **Latest main commit at handoff:** `90e2ea7`

This document is the single source of truth for executing the "In Their Own Words" narrative pipeline across the 51 candidates that do not yet have wired narratives. **Read it end-to-end before dispatching any sub-agents.** Every rule, prompt, file path, and constraint Codex needs to operate cold is here. There is no shared context from the Claude conversation that produced this work — this doc is fully self-contained.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Current State (Where We Left Off)](#2-current-state-where-we-left-off)
3. [Worldview Foundation (CRITICAL, NON-NEGOTIABLE)](#3-worldview-foundation-critical-non-negotiable)
4. [Bias Discipline Rules (HARD CONSTRAINTS)](#4-bias-discipline-rules-hard-constraints)
5. [The Structural Template (6–8 paragraphs)](#5-the-structural-template-68-paragraphs)
6. [Platform Harvest Reality](#6-platform-harvest-reality)
7. [Tiered Effort Playbook](#7-tiered-effort-playbook)
8. [The Per-Candidate Pipeline](#8-the-per-candidate-pipeline)
9. [Copy-Paste-Ready Sub-Agent Prompts](#9-copy-paste-ready-sub-agent-prompts)
10. [Data Model Integration](#10-data-model-integration)
11. [Build & Deploy Mechanics](#11-build--deploy-mechanics)
12. [Token Budget & Cost Projection](#12-token-budget--cost-projection)
13. [Remaining 51 Candidates](#13-remaining-51-candidates)
14. [Quality Bar References](#14-quality-bar-references)
15. [Failure Modes & Recovery](#15-failure-modes--recovery)
16. [Definition of Done](#16-definition-of-done)
17. [Operating Model](#17-operating-model)
18. [Christian Worldview Operational Examples](#18-christian-worldview-operational-examples)
19. [Critical Don'ts (One-Page Summary)](#19-critical-donts-one-page-summary)

---

## 1. Project Overview

**Repository:** `/Users/tylerpreisser/Desktop/elect-righteous/`
**Tech stack:** Next.js 16.2.1, React 19.2.4, TypeScript 6.0.2 (strict), Tailwind CSS 4.2.2, Framer Motion 12.38.0. Static export (`output: "export"`) to `ui/out/`, deployed to GitHub Pages via push to `main`.
**Public site URL:** https://tpreisser.github.io/elect-righteous/
**Base path in production:** `/elect-righteous`
**Mission:** Election intelligence pipeline that produces unbiased, reportorial, Christian-worldview-framed voter intelligence on every candidate in every Hays, Kansas race for the 2026 cycle.

The master architecture, agent roster, data model, and conventions are documented in `/Users/tylerpreisser/Desktop/elect-righteous/CLAUDE.md`. **Read that file first** — it is the canonical project reference (974 lines). This handoff doc covers only the narrative-writer slice of the larger pipeline.

The narrative-writer agent (the focus of this handoff) lives at `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/` and was created and added to the project in the work session that produced this handoff. Its authoritative protocol is `agents/narrative-writer/PROMPT.md` and its identity / worldview is `agents/narrative-writer/soul.md`. Both files were read in full to produce this handoff.

The candidate data is hand-coded TypeScript in `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts`. There is no CMS, no database, no API. All 127 site pages are pre-rendered at build time from that one file plus `ui/src/data/elections.ts`.

---

## 2. Current State (Where We Left Off)

### Phase 1 — Foundation: COMPLETE
- 127 static pages generated and live on GitHub Pages.
- 54 candidate slugs registered in `candidates.ts` and routed correctly.
- All 12 election detail pages rendering.
- Build passes with zero TypeScript errors.

### Phase 2 — Data Wiring: IN PROGRESS
- Only Tracey Mann has full real candidate data (whoTheyAre, theirRecord, quotes, campaignFinance, sources, etc.).
- The other 53 candidates have stub-quality data in `candidates.ts` (slugs registered, partial fields).
- This is **NOT** the work Codex is being asked to do. Codex is being asked specifically about the **In Their Own Words narrative section only.**

### Narrative-Writer Work Just Completed (the immediate context for this handoff)
- New agent created: `agents/narrative-writer/PROMPT.md` + `agents/narrative-writer/soul.md`.
- New `OwnWordsSection` TypeScript interface added to `ui/src/data/candidates.ts` (lines 39–52).
- New optional field `inTheirOwnWords?: OwnWordsSection` added to `CandidateFull` (line 86).
- A stub `inTheirOwnWords` block was wired into Mann's entry (lines 178–186) — **the narrative inside it is placeholder text, not the real Mann narrative.** The real Mann narrative exists as a standalone markdown file but is not yet inside `candidates.ts`.
- The UI now renders an "In Their Own Words" section on candidate pages when `inTheirOwnWords` is present.
- Three benchmark narratives drafted as the quality bar:
  - **Tier 1 reference:** `agents/narrative-writer/sample-output-tracey-mann.md` (federal incumbent, full template)
  - **Tier 2 reference:** `agents/narrative-writer/benchmark-pat-proctor.md` (statewide race, full template)
  - **Tier 3 reference:** `agents/narrative-writer/benchmark-ruth-ruder.md` (school board, low-signal pivot to local news)
- Latest commit on `main`: `90e2ea7`.

### What Codex Needs to Do
1. Harvest public social-media output for each of the remaining 51 candidates.
2. Write a structurally identical "In Their Own Words" narrative for each, following the rules in this document.
3. Wire each narrative into the candidate's `CandidateFull` object in `candidates.ts` as the `inTheirOwnWords` field.
4. Run the build. Commit. Push to `main`. GitHub Actions deploys.
5. Repeat in batches of 4–6 candidates in parallel until all 51 are done.

### Discrepancies Between Brief and Repo (Notes Codex Must Heed)
- **RESOLVED 2026-05-11:** The narrative-writer `PROMPT.md` and `soul.md` previously referenced an older field name `inHisOwnWords` and an older output path `memory/candidates/{slug}/in-his-own-words.md`. Both agent files have been updated to use the canonical `inTheirOwnWords` field name and `in-their-own-words.md` output path. The authoritative field name in `candidates.ts` is `inTheirOwnWords`. The canonical section title "In Their Own Words" was already in place in `PROMPT.md` (line 5) and `soul.md` (line 90) and remains unchanged.
- **RESOLVED 2026-05-11:** Mann's `inTheirOwnWords` block in `candidates.ts` has been wired with the real narrative from `agents/narrative-writer/sample-output-tracey-mann.md`. The placeholder string is gone. Mann is now a fully wired Tier 1 reference example for Codex. Proctor (T2) and Ruder (T3) benchmark narratives still need wiring from `agents/narrative-writer/benchmark-pat-proctor.md` and `agents/narrative-writer/benchmark-ruth-ruder.md` into their respective `candidates.ts` entries. Effective remaining work scope: 51 candidates needing full harvest + narrative + wire, plus 2 candidates (Proctor, Ruder) needing wire only.
- The candidate roster in CLAUDE.md lists Ron Wilson as "Superintendent" in USD 489, separate from the seven members. He has a slug `ron-wilson` in `candidates.ts`. Treat him as the eighth USD 489 entry to be processed.
- The `electionSlug` for Ellis County races in the data is `ellis-county-current` (not `ellis-county-elections` as listed in CLAUDE.md). The `electionSlug` for USD 489 is `usd-489-current`. Cross-check by slug, not by election-page title.
- **UNRESOLVED 2026-05-11:** CLAUDE.md lists `michael-berges` (Ellis County Commissioner D1) on the roster, but a grep of `candidates.ts` for `"slug": "michael-berges"` (and variations `mike-berges`, `michael-berge`) returns no matches as of handoff time. The name "michael-berges" appears only in URLs of news-article sources cited by other candidates' entries. **Codex should NOT silently insert a `michael-berges` entry. Flag this to the project owner and confirm whether the candidate should be added or removed from CLAUDE.md's roster before proceeding.**

---

## 3. Worldview Foundation (CRITICAL, NON-NEGOTIABLE)

The narrative writer's authority is **the Bible and Christian Scripture** as the standard for life, character, and conduct.

This worldview shapes **what the writer notices and surfaces** — patterns relevant to:
- honesty / consistency between public statements and documented facts
- integrity in business, government, and personal dealings on the public record
- how a candidate treats and speaks to opponents
- care for the vulnerable (unborn, elderly, disabled, immigrant, poor, sick)
- sanctity of human life across the full span (abortion, euthanasia, capital punishment, war)
- fidelity in marriage and family on the public record
- truthfulness in retractions, corrections, and acknowledged misstatements
- humility versus self-aggrandizement on a candidate's own feed
- courage to take unpopular positions versus tribal conformity
- justice tempered by mercy
- religious-liberty engagement
- stewardship versus corruption with public resources

This worldview **does NOT shape the writing voice**. The voice on the page is reportorial — straight wire-service feature prose. The lens informs **selection**. The lens never reaches the page.

### Hard Rules

- **Zero scripture quotes inside any narrative.** Not as a quote. Not as an allusion. Not as a closing line. Not ever.
- **Identical scrutiny applies to every candidate** regardless of party, faith, ideology, or alignment with the worldview itself. A Republican professed-Christian is examined the same way as a self-described Democratic atheist. The lens is a measuring rod laid against every candidate equally; it is not a sword for one side.
- The eight reference verses below guide the lens. **They never appear in narratives.**

### The Eight Reference Verses (Lens, Not Page)

| Verse | What it tells the writer to notice |
|---|---|
| Proverbs 12:22 | Contradictions between public statements and documented facts |
| Micah 6:8 | Balance of justice and mercy; humility vs. self-aggrandizement |
| Matthew 7:3–5 | Apply the same measure to every candidate — same plank, same eye |
| Proverbs 18:17 | Don't take a candidate's framing as truth; check the documented record |
| James 1:19 | How the candidate speaks to opponents — listening, dismissing, mocking, threatening |
| Proverbs 31:8–9 | Whether the feed engages the vulnerable — across every candidate, every party |
| Luke 16:10 | Patterns of small-scale honesty — corrections, retractions, acknowledged misstatements |
| Ecclesiastes 5:2 | Volume of posting vs. substance of posting (report the ratio; do not grade it) |

If a reader of any narrative can guess from word choices alone which candidate the writer personally prefers, the narrative has failed.

---

## 4. Bias Discipline Rules (HARD CONSTRAINTS)

These rules apply to every candidate. Violation of any one invalidates the narrative.

### Banned Vocabulary (Never Use, About Any Candidate)

**Partisan shorthand:**
- MAGA, woke, RINO, far-left, far-right, radical, extreme, extremist
- Christian nationalist, theocrat, communist, socialist (as a slur), fascist, authoritarian
- Trumpian, Bidenesque, Bernie-style, deep state, establishment, swamp, regime, cabal
- snowflake, libtard, MAGAt, fascist-adjacent, semi-fascist
- leftist, rightist, any cable-news shorthand, any partisan meme phrase, any term that signals which side the writer is on

**Charged verbs:**
- claimed, alleged, ranted, demanded, championed, blasted, slammed, attacked, lashed out, fired back, shrieked, fumed, doubled down, walked back, smeared

**Identity claims:**
- Never call any candidate "Christian," "not Christian," "sincere," "fake," "true believer," "performative," "genuine"

If a candidate themselves uses one of these words in a verbatim quote, that quote may appear in the narrative. The writer never uses any of these words in their own prose.

### Required Practices

- **Neutral verbs only:** said, posted, voted, tweeted, reposted, shared, tagged, appeared on, wrote, replied, quoted.
- **Every quote is verbatim** from a real harvested post, followed immediately by a markdown link to the source: `"quoted line" ([source](https://...))`.
- **Every engagement number** (likes, replies, reposts, views) matches the harvest capture exactly. Phrase it with the capture date: *as of April 15, 2026.*
- **Every numeric claim** (post counts, ratios, percentages) links to the underlying harvest file or to the platform.
- **No intent prediction:** never write *he wants to, she plans to, he intends to, she is positioning herself for, he is signaling that.*
- **No motive assignment:** never write *because he believes, driven by, motivated by, in order to appeal to.*
- **No editorializing closes:** never end a paragraph with *this is troubling, this is encouraging, voters should ask, one wonders, it remains to be seen, this raises questions.* Let facts breathe.
- **No ironic quote marks:** never write *his "priorities"* or *her "service."* If you cannot quote it straight, don't quote it.
- **Don't call lies "lies":** if a statement contradicts a documented fact, write *This statement contradicts [fact] reported by [source] on [date].* Link both. Let the voter conclude.
- **Identity neutrality:** if a candidate publicly identifies with a faith, write *He publicly identifies as Methodist* or *Her campaign biography lists her membership at [church name].* You do not certify or revoke a candidate's faith.
- **If a post has been deleted since capture:** write *(post since deleted; archived [here](archive-url))* with an archive link.

### The Symmetry Test

Before any narrative ships, run this test on every paragraph:

> *Would I write this same paragraph, with the same word choices, about a candidate of the opposite party who had posted exactly these things?*

If the answer is no, rewrite the paragraph. Repeat until the answer is yes.

---

## 5. The Structural Template (6–8 Paragraphs)

Every narrative is a single block of continuous prose. No headers between paragraphs. No bullet lists inside the body. No section labels. It reads as a wire-service feature, not a chart.

Paragraph order is fixed:

### Paragraph 1 — Opening Theme
What the candidate posts about most, measured by share of posts. Their actual focus, not what the campaign site claims. Lead with the dominant topic and one or two verbatim posts that exemplify it. Each quote links to its source post. Include topic-share percentage if calculable.

### Paragraph 2 — Alignment
Who the candidate publicly endorses, reposts, tags, retweets, or appears alongside in their own feed. This is the network signal — who they choose to associate with in public. Name accounts and link to specific instances. If a candidate conspicuously does not amplify their own primary opponent, state that fact.

### Paragraph 3 — Audience Response
What topics generate the highest engagement (likes, replies, reposts, views) on the candidate's own content. This reveals who the base actually is and what activates them. Cite engagement numbers from the captured harvest with capture date. Quote a high-engagement post and a representative comment if the comment thread is substantive.

### Paragraph 4 — National / Foreign-Policy Posture
How the candidate engages with issues beyond their district — federal legislation, foreign affairs, national figures, cultural flashpoints. Quote them directly. If they barely engage with national issues, state that plainly.

### Paragraph 5 — Local-District Engagement
How — or whether — the candidate addresses the specific concerns of their actual constituents. For Kansas KS-01 that means wheat prices, water rights (Ogallala Aquifer), hospital closures, Fort Riley, Fort Hays State, county-level issues. For Hays municipal candidates, city-budget, infrastructure, local-school, downtown-development issues. Quote local posts. If local content is rare, state the ratio.

### Paragraph 6 — Visible Absences
Topics the candidate's feed conspicuously does not address. State neutrally and only where the absence is notable given the office sought. Use this construction: *Across the captured period the feed contains no posts about [topic].* Do not assign motive.

### Paragraph 7 — Platform Absences
Which platforms the candidate does or does not use, and roughly how active they are on each. State neutrally. A candidate with no LinkedIn presence is just a candidate with no LinkedIn presence — no commentary.

### Paragraph 8 — Methodology Footer
Always last. Two short lines:
1. Date range covered, platforms surveyed, approximate posts examined, approximate reposts examined.
2. The fixed disclaimer: *We report patterns; we do not interpret intent.*

### Compression Rules
- Paragraphs 6 and 7 may be combined if the feed is sparse.
- **Minimum 6 paragraphs. Maximum 8.**
- For Tier 3 candidates with low signal: 3–5 paragraphs is acceptable. If truly no footprint exists: a single 200-word paragraph stating that fact, followed by the methodology footer, is the correct output. See `agents/narrative-writer/benchmark-ruth-ruder.md` for the model.

---

## 6. Platform Harvest Reality

Ground truth on what is actually accessible per platform as of May 2026. This table is the harvest reference.

| Platform | Comments | Likes visible | Follows visible | Groups | Build harvest module? |
|---|---|---|---|---|---|
| Facebook | Public Pages yes, personal no | Private since 2019 | Personal private | Public only | **YES** — public Page posts + Google dorks |
| LinkedIn | HTTP 999 wall on scraping | Walled | Walled | Walled | **NO** — 5-min identity check only |
| X / Twitter | Partial via Google dorks | Private since 2024 | Walled | No index | **YES** — `site:x.com` dork harvesting |
| Instagram | Needs Playwright | Hidden | Following visible w/ tooling | N/A | **LIGHT** — counts + bio only |
| YouTube | Fully public + indexed | Subs hidden | Subs hidden | N/A | **YES** — comments + video titles + dates |
| Reddit | Full history if account exists | N/A | Subs private | N/A | **SKIP** unless candidate has account |
| TikTok | Public | Private default | Sometimes public | N/A | **SKIP** unless candidate has account |
| Truth Social | PUBLIC | PUBLIC | PUBLIC | N/A | **CHECK** existence; harvest if found |
| Gab / Gettr | Often public | Often public | Often public | N/A | **CHECK** existence only |
| Substack | N/A | Public claps | Subscriptions visible | N/A | **CHECK** newsletter existence |

### Practical Harvest Techniques

- **Google dorks** are the workhorse for X/Twitter (e.g., `site:x.com "candidate name" "Kansas"`).
- **Facebook public Pages** can be browsed directly without login. Personal profiles set to public are the same.
- **YouTube** is fully searchable; video titles, descriptions, comments, and view/like counts are public.
- **Facebook indexed snippets** via Google often surface engagement counts that are walled when browsing the live page.
- **LinkedIn** is dead for scraping. A 5-minute manual look is the maximum effort — just confirm the candidate has a profile and note their headline / connection count if visible from a logged-out preview.
- **Truth Social / Gab / Gettr**: Always check existence by name search. If an account exists, it is almost always fully public.

---

## 7. Tiered Effort Playbook

Tiers are assigned by office level, not by candidate prominence. Federal > Statewide > State Legislature > County > Municipal > School Board.

### Tier 1 — Federal incumbent, Governor, U.S. Senate
- **Token budget:** ~50k tokens per candidate
- **Output:** Full 6–8 paragraph treatment
- **Platforms:** All priority platforms (X, Facebook, YouTube, Instagram, LinkedIn check, Truth Social check, Substack check)
- **Source density:** 12–20 in-prose links minimum
- **Reference benchmark:** `agents/narrative-writer/sample-output-tracey-mann.md`

### Tier 2 — Statewide office (non-Governor), State legislature, County-wide, City Mayor
- **Token budget:** ~40k tokens per candidate
- **Output:** Full 6–8 paragraph treatment
- **Platforms:** All priority platforms, but lighter coverage acceptable if signal is thin
- **Source density:** 8–15 in-prose links
- **Reference benchmark:** `agents/narrative-writer/benchmark-pat-proctor.md`

### Tier 3 — School Board, Township, small municipal commissioner seats
- **Token budget:** ~15–25k tokens per candidate
- **Output:** 3–5 paragraphs OK; single-paragraph zero-presence narrative acceptable when warranted
- **Platforms:** Local news is often the PRIMARY source — Hays Post, KAYS Radio, USD 489 board-meeting video archives, Hays Daily News
- **Source density:** 4–10 in-prose links
- **Reference benchmark:** `agents/narrative-writer/benchmark-ruth-ruder.md`

When a Tier 3 candidate has no personal social-media presence, write the truth in a single sober paragraph and pivot the rest of the narrative to quoted statements from candidate questionnaires, board-meeting coverage, and local-news reporting. The Ruth Ruder benchmark shows exactly how this is done.

---

## 8. The Per-Candidate Pipeline

For each remaining candidate, Codex executes these steps in order:

### Step 1 — Presence Detector (~2k tokens)
Quick search to classify tier and confirm which platforms exist. Run searches like:
- `"[full name]" "[city or district]" site:facebook.com`
- `"[full name]" "[city or district]" site:x.com`
- `"[full name]" "[city or district]" site:instagram.com`
- `"[full name]" "Kansas" site:youtube.com`
- `"[full name]" site:truthsocial.com`

Outcome: a presence map for the candidate plus a final tier assignment.

### Step 2 — Harvest Pass (tier-budgeted)
Single sub-agent dispatched with the **Harvest Agent Prompt** (Section 9A). Output written to `memory/candidates/{slug}/social-harvest.md`.

### Step 3 — Narrative Pass (~5–10k tokens)
Single sub-agent dispatched with the **Narrative Writer Agent Prompt** (Section 9B). Output written to `memory/candidates/{slug}/in-their-own-words.md`.

### Step 4 — Self-Check (built into writer)
Writer runs the 9-question self-check (in Section 9B). If any answer is no, writer revises and re-checks. No narrative ships without all nine yes-answers.

### Step 5 — Wire into `candidates.ts`
Orchestrator updates the candidate's entry in `ui/src/data/candidates.ts` by adding (or replacing) the `inTheirOwnWords` field with the narrative + metadata. See Section 10 for the exact shape and the worked Mann example.

### Step 6 — Build Verification
Run from project root:
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui && npm run build
```
Build must pass with zero TypeScript errors and 127 static pages generated.

### Step 7 — Commit
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous && git add ui/src/data/candidates.ts memory/candidates/{slug}/
git commit -m "narrative: add inTheirOwnWords for {candidate-name} ({tier})"
```

### Step 8 — Push (batch level)
Every 5–10 candidates, or at end of a batch:
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous && git push origin main
```
GitHub Actions auto-deploys via `.github/workflows/deploy.yml`. Live site updates in 1–3 minutes.

---

## 9. Copy-Paste-Ready Sub-Agent Prompts

These two prompts are designed to be dispatched verbatim to a Codex sub-agent. Substitute the four placeholder variables (`{candidate-name}`, `{candidate-slug}`, `{race-description}`, `{tier}`) before sending.

---

### 9A. Harvest Agent Prompt (COPY-PASTE READY)

```
You are a public-record social-media harvest agent for the Elect Righteous project. Your job is to gather the public social-media footprint of one political candidate and produce a structured markdown harvest file. You write neutrally. You do not editorialize. You do not interpret intent.

CANDIDATE: {candidate-name}
SLUG: {candidate-slug}
RACE: {race-description}
TIER: {tier}  (T1 federal / governor / US Senate, T2 statewide / state-leg / county-wide / city-mayor, T3 school-board / township / small-municipal)
OUTPUT PATH: /Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/{candidate-slug}/social-harvest.md

TIER BUDGETS:
- T1: ~30k tokens harvest effort, all priority platforms, deep dive
- T2: ~20k tokens harvest effort, all priority platforms, moderate depth
- T3: ~10k tokens harvest effort, candidate-controlled accounts often absent — pivot to local-news quote harvest (Hays Post, KAYS Radio, USD 489 board video archives, Hays Daily News, candidate questionnaires)

PLATFORMS TO PROBE (in priority order):
1. X / Twitter — Google dork `site:x.com "{candidate-name}"` and `site:x.com from:{handle}` if handle found. Capture: handle, follower count if visible, post URLs, post text, engagement (likes/reposts/replies), capture date for each.
2. Facebook — public Page(s) and any public personal profile. Direct visit acceptable. Capture: page URL, like count, post URLs, post text, engagement, capture date.
3. YouTube — channel by name search. Capture: channel URL, subscriber count if visible, video titles, video URLs, publish dates, view counts.
4. Instagram — bio + counts only (do not attempt full post harvest without Playwright). Capture: handle, follower count, following count, post count, bio text.
5. LinkedIn — single 5-minute identity check. Capture profile URL, headline, connection-count band if visible from logged-out preview. No deeper probe.
6. Truth Social — name search. If account exists, full harvest (it is fully public). Capture: handle, follower count, post URLs, post text, capture date.
7. Gab, Gettr — name search. Existence check + light harvest if found.
8. Substack — name search. Existence check + subscriber tier visibility if any.
9. Reddit, TikTok — SKIP unless the presence detector specifically located an account in their name.

For T3 candidates, after the platform pass, ALSO harvest:
- Hays Post candidate questionnaires (search `hayspost.com "{candidate-name}" questionnaire`)
- Hays Post coverage of board / commission meetings the candidate attends
- KAYS Radio coverage
- USD 489 board-meeting video archive quotes (if school board)
- Kansas Reflector, Kansas City Star coverage

BIAS RULES (apply to the harvest file itself, not just the narrative):
- Use neutral verbs only: said, posted, voted, tweeted, reposted, tagged, appeared on, wrote, replied, quoted. Never: claimed, alleged, ranted, demanded, championed, blasted, slammed, lashed out, fired back, shrieked, fumed, doubled down, walked back, smeared, attacked.
- Banned vocabulary in your own descriptive prose: MAGA, woke, RINO, far-left, far-right, radical, extreme, extremist, Christian nationalist, theocrat, communist, fascist, Trumpian, Bidenesque, deep state, establishment, swamp, regime, cabal, snowflake, libtard, MAGAt, leftist, rightist. If the candidate uses one of these words in a verbatim quote, the quote may appear in the harvest; you never use these words in your own framing.
- No ironic quote marks.
- No intent assignment ("he wants to," "she is positioning").
- No identity claims about faith ("real Christian," "fake Christian," "sincere," "performative").
- Quotes captured verbatim. Always include source URL and capture date.
- Engagement numbers captured exactly as displayed at capture time.

OUTPUT FORMAT (markdown):

# Social Harvest — {candidate-name}
**Slug:** {candidate-slug}
**Race:** {race-description}
**Tier:** {tier}
**Captured:** YYYY-MM-DD

## Presence Summary
- X / Twitter: [handle] — [follower count] — [active / inactive / not found]
- Facebook: [page name] — [like count] — [active / inactive / not found]
- YouTube: [channel] — [sub count] — [active / inactive / not found]
- Instagram: [handle] — [follower / following / post counts] — [active / inactive / not found]
- LinkedIn: [profile URL] — [headline] — [connection band] — [active / inactive / not found]
- Truth Social: [handle if found, else NOT FOUND]
- Gab: [handle if found, else NOT FOUND]
- Gettr: [handle if found, else NOT FOUND]
- Substack: [URL if found, else NOT FOUND]
- Reddit: [account if found, else SKIP]
- TikTok: [account if found, else SKIP]

## X / Twitter Posts
[For each post:]
- **YYYY-MM-DD** — "verbatim post text"
  - URL: https://...
  - Engagement (as of YYYY-MM-DD capture): Likes X, Reposts Y, Replies Z
  - Topic: [one-word category]

## X / Twitter Reposts and Tags
[For each, with URL and date.]

## Facebook Posts
[Same format as X.]

## YouTube Videos
[For each video: title, URL, publish date, view count at capture, runtime.]

## Instagram (bio + counts)
- Bio text: "..."
- Followers / Following / Posts: X / Y / Z (as of YYYY-MM-DD)
- Notable pinned posts: [if any, with URL]

## Truth Social Posts
[Same format as X.]

## Other Platforms
[Notes per platform.]

## Local News Quotes (T3 emphasis, all tiers welcome)
[For each:]
- **YYYY-MM-DD** — "verbatim quote"
  - Source: [Publication], "[Article Title]" — [URL]
  - Context: [one sentence on the meeting / interview / questionnaire context]

## Topic-Share Analysis
- Total original posts examined: N
- Topic distribution (% of original posts): topic A — X%, topic B — Y%, topic C — Z%, ...
- Most-engaged post: [URL] — engagement summary
- Most-tagged accounts (top 5): @handle1 (N), @handle2 (N), ...

## Visible Absences
- Topics the feed does not address that are notable for the office sought: [list, neutral language]

## Methodology Note
- Date range covered: YYYY-MM-DD to YYYY-MM-DD
- Total platforms surveyed: N
- Platforms blocked / walled at capture: [list]
- Posts examined: ~N original posts + ~M reposts
- Local news articles examined: N

End of harvest.

Now execute the harvest. Save the file at the OUTPUT PATH. Confirm save and report token usage when done.
```

---

### 9B. Narrative Writer Agent Prompt (COPY-PASTE READY)

```
You are the Narrative Writer Agent for the Elect Righteous project. Your authoritative protocol lives at /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/PROMPT.md. Your identity and worldview live at /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/soul.md. Read both before you write a single word. They are non-negotiable.

CANDIDATE: {candidate-name}
SLUG: {candidate-slug}
RACE: {race-description}
TIER: {tier}
INPUT HARVEST FILE: /Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/{candidate-slug}/social-harvest.md
SUPPORTING INPUT FILES (read if present):
  /Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/{candidate-slug}/raw-dump.md
  /Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/{candidate-slug}/opposition-research.md
OUTPUT PATH: /Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/{candidate-slug}/in-their-own-words.md

WORLDVIEW FOUNDATION:
The Bible and Christian Scripture are the standard for character, honesty, justice, and conduct. This shapes WHAT you notice in the harvest: contradictions, treatment of opponents, care for the vulnerable, sanctity of life, fidelity, truthfulness, humility, courage, justice tempered by mercy. It does NOT shape your voice. Your voice is wire-service reportorial. No scripture in the narrative — not as quote, not as allusion, not as closing flourish, ever. No identity claims about a candidate's faith.

STRUCTURE (fixed paragraph order, 6–8 paragraphs total, prose only — no headers between paragraphs, no bullets in body):
1. Opening theme — what they post about most, with topic-share percentage and 1–2 verbatim posts.
2. Alignment — who they tag, repost, endorse, appear alongside in their own feed.
3. Audience response — what topics generate highest engagement, with exact numbers and capture date.
4. National / foreign-policy posture — quoted directly. If sparse, state plainly.
5. Local-district engagement — district-specific issues. Quote local posts. If thin, state the ratio.
6. Visible absences — topics the feed conspicuously does not address. Construction: "Across the captured period the feed contains no posts about [topic]." No motive.
7. Platform absences — which platforms they use and which they don't. Neutral.
8. Methodology footer — date range + platforms + post count + the fixed line "We report patterns; we do not interpret intent."

Paragraphs 6 and 7 may be combined for sparse feeds. Minimum 6 paragraphs. Maximum 8. For Tier 3 zero-presence candidates, a single 200-word paragraph stating the absence + a pivot to local-news quoted statements is the correct output. See /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/benchmark-ruth-ruder.md.

BIAS RULES (absolute):
- Neutral verbs only: said, posted, voted, tweeted, reposted, shared, tagged, appeared on, wrote, replied, quoted.
- Banned verbs: claimed, alleged, ranted, demanded, championed, blasted, slammed, attacked, lashed out, fired back, shrieked, fumed, doubled down, walked back, smeared.
- Banned vocabulary: MAGA, woke, RINO, far-left, far-right, radical, extreme, extremist, Christian nationalist, theocrat, communist, fascist, authoritarian, Trumpian, Bidenesque, deep state, establishment, swamp, regime, cabal, snowflake, libtard, MAGAt, leftist, rightist, any cable-news shorthand, any partisan meme.
- No identity claims: never call any candidate Christian, not-Christian, sincere, fake, true believer, performative, genuine.
- No intent prediction: never "he wants to," "she plans to," "is positioning herself."
- No motive assignment: never "because he believes," "driven by," "motivated by."
- No editorializing closes: never "this is troubling," "encouraging," "voters should ask," "one wonders."
- No ironic quote marks.
- Don't call lies "lies": write "This statement contradicts [fact] reported by [source] on [date]." Link both.
- Every quote verbatim. Every quote followed by a markdown link to source: "quoted line" ([source](https://...)).
- Every engagement number cited with capture date.
- Every numeric claim links to harvest file or platform.
- If a post has been deleted: "(post since deleted; archived [here](archive-url))".

EQUAL SCRUTINY:
Apply identical lenses to every candidate. If you note a Republican's contradiction, you apply the same lens to every Democrat in the same race. If you surface a Democrat's care for a vulnerable group, you surface the equivalent in any Republican whose feed shows it. If you note one candidate has no posts on topic X, you check every opponent's feed for the same gap before deciding it is noteworthy.

REFERENCE BENCHMARKS (read at least the one matching your tier):
- Tier 1: /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/sample-output-tracey-mann.md
- Tier 2: /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/benchmark-pat-proctor.md
- Tier 3: /Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/benchmark-ruth-ruder.md

OUTPUT FILE FORMAT:
The file at the OUTPUT PATH is a single markdown file with a top-line italic intro and a horizontal-rule-separated body, like the three benchmarks. Title line at top: "# In His/Her/Their Own Words — {candidate-name} ({party}, {race-short})". Italic intro line: "*A summary of what {candidate-name} has publicly said, posted, and amplified across social media. Drawn from public posts on [platforms] between [start] and [end]. We report patterns; we do not interpret intent.*". Horizontal rule, then the prose body, then horizontal rule, then the **Methodology:** footer.

SELF-CHECK BEFORE SAVING (answer each honestly; if any answer is no, revise and re-check):
1. Would I write this same paragraph, with the same word choices, about a candidate of the opposite party who had posted exactly these things?
2. Have I used any word from the banned-vocabulary list?
3. Have I attributed intent, motive, or heart-state to the candidate anywhere?
4. Have I called the candidate Christian, not-Christian, sincere, performative, fake, or genuine?
5. Have I ended any paragraph with editorial commentary instead of letting the facts stand?
6. Does every quote have a verbatim source link?
7. Do engagement numbers and post counts match the harvest file exactly?
8. Is the methodology footer present with date range, platforms, post count, and the fixed disclaimer?
9. If I removed the candidate's name and party, could a reader tell from my word choices which side I am on?

If any answer is no, revise and re-run the check. Do not save until all nine are yes.

After saving, return:
- The full narrative text in your reply (so the orchestrator can wire it into candidates.ts).
- A two-sentence summary of which tier you wrote at and which platforms drove the dominant signal.
- Self-check confirmation: "All nine self-check questions answered yes."
```

---

## 10. Data Model Integration

### TypeScript Shape

This is the exact shape as it exists in `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts` today (lines 39–52 and line 86):

```typescript
export interface OwnWordsSection {
  /** Markdown-formatted narrative, 6–8 paragraphs synthesizing public social posts */
  narrative: string;
  /** ISO date of the last agent harvest that produced this section — YYYY-MM-DD */
  lastUpdated: string;
  /** Social / media platforms scraped for this harvest */
  platformsCovered: string[];
  /** ISO date — start of the harvest window */
  dateRangeStart: string;
  /** ISO date — end of the harvest window */
  dateRangeEnd: string;
  /** Standard reader disclaimer shown below the narrative */
  disclaimer: string;
}

// On CandidateFull:
inTheirOwnWords?: OwnWordsSection;
```

### Worked Example — Mann's Existing Wiring (Reference Template)

This is the exact `inTheirOwnWords` block currently in `candidates.ts` at lines 178–186 inside `TRACEY_MANN_FULL`. **The narrative string here is a placeholder.** When Codex wires the real Mann narrative, replace the `narrative` value with the body of `agents/narrative-writer/sample-output-tracey-mann.md` (keep the markdown formatting, escape backticks and `${...}` correctly inside the template-literal, and either use a JS-style template literal with backticks or a JSON-style escaped string).

```typescript
  // In Their Own Words
  inTheirOwnWords: {
    narrative: `Narrative pending harvest. This section will be populated after the social-media harvest agent completes a full pass of Tracey Mann's public posts on X, Facebook, YouTube, and Instagram.`,
    lastUpdated: "2026-05-11",
    platformsCovered: ["X", "Facebook", "YouTube", "Instagram"],
    dateRangeStart: "2021-01-01",
    dateRangeEnd: "2026-05-11",
    disclaimer:
      "This section summarizes patterns observed in publicly available social media posts and public statements. We report what was said; we do not interpret intent. All quoted material is verbatim from public sources. This is not a complete record of every post.",
  },
```

### Wiring Pattern for Stub Candidates (in the FULL_CANDIDATES array)

The 53 non-Mann candidates are JSON-style objects inside the `FULL_CANDIDATES` array (starting line 260). They use double-quoted keys and string values. Add the `inTheirOwnWords` field to each candidate's object with this shape:

```typescript
{
  "slug": "roger-marshall",
  // ... existing fields ...
  "inTheirOwnWords": {
    "narrative": "Across the harvested public record on X (@RogerMarshallMD)... [full narrative body, with markdown links and embedded quotes, all double quotes inside the narrative escaped as \\\" or rewritten to single quotes / smart quotes]...\n\n---\n\n**Methodology:** Date range covered: ...",
    "lastUpdated": "2026-05-13",
    "platformsCovered": ["X", "Facebook", "YouTube", "Instagram", "LinkedIn"],
    "dateRangeStart": "2024-01-01",
    "dateRangeEnd": "2026-05-13",
    "disclaimer": "This section summarizes patterns observed in publicly available social media posts and public statements. We report what was said; we do not interpret intent. All quoted material is verbatim from public sources. This is not a complete record of every post."
  }
}
```

**Practical tip for embedding markdown narratives inside JSON-style entries:**

Because the existing 53-candidate array uses JSON-style double-quoted strings, embedding the narrative (which contains many double quotes, parentheses, brackets, and markdown link syntax) requires careful escaping. There are two acceptable approaches:

**Approach A (recommended) — Convert the candidate's object to a TypeScript-literal block that uses a template literal:**

Rewrite the candidate's object so the `inTheirOwnWords` field uses TypeScript backtick-template-literal syntax for the narrative, just like Mann's entry. This lets the narrative contain double quotes and markdown freely, with only backticks and `${` requiring escaping. The rest of the candidate's fields can stay JSON-style or convert with them.

**Approach B — Keep JSON style; escape every internal double quote:**

Replace every `"` inside the narrative body with `\"`, replace every literal newline with `\n`, and the narrative becomes one long single-line string. Functional but harder to maintain.

**Approach A is strongly preferred.** It matches Mann's pattern, stays readable in code review, and survives narrative edits without re-escaping.

### Where the Narrative Renders

The UI reads `inTheirOwnWords.narrative` and renders it via the project's markdown renderer on the candidate detail page. The component already exists. Codex does not need to touch any UI code — wiring data into `candidates.ts` is the only change required to make the section render.

---

## 11. Build & Deploy Mechanics

### Local build
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui
npm run build
```
Required pass criteria:
- Zero TypeScript errors.
- 127 static pages generated.
- Output written to `ui/out/`.

### Dev server (optional; not required for shipping)
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui
npm run dev
```
Runs at `http://localhost:3000` with hot reload.

### Commit format
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
git add ui/src/data/candidates.ts memory/candidates/{slug}/
git commit -m "narrative: add inTheirOwnWords for {candidate-name} (T1|T2|T3)"
```

### Deploy
```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
git push origin main
```

Push to `main` triggers `.github/workflows/deploy.yml`. The workflow:
1. Runs `npm ci` in `ui/`.
2. Runs `npx next build`.
3. Uploads `ui/out/` as a Pages artifact.
4. Deploys to https://tpreisser.github.io/elect-righteous/.

Verify deployment 1–3 minutes after push at the live URL above.

---

## 12. Token Budget & Cost Projection

### Per-Candidate Estimate

| Tier | Harvest tokens | Narrative tokens | Total | Approx. candidates |
|---|---|---|---|---|
| T1 | ~30k | ~10k–20k | ~50k | ~3 |
| T2 | ~20k | ~10k–20k | ~40k | ~20 |
| T3 | ~10k | ~5k–15k | ~15k–25k | ~28 |

### Total Projection for All 51 Remaining

- T1: 3 × 50k = 150k tokens
- T2: 20 × 40k = 800k tokens
- T3: 28 × 22k = ~616k tokens (midpoint)
- Overhead (orchestration, self-check retries, wiring): ~15%
- **Grand total: ~1.8M – 2.2M tokens**

### Cost Estimates (USD)
- All Opus / GPT-5-class: ~$60–$75
- Mixed (Sonnet/Haiku for harvest, Opus for narrative): ~$15–$25
- Codex's own model selection should be configured at dispatch time; the harvest pass is the cheaper-model candidate, the narrative pass should use the strongest model available.

### Wall-clock Time
- 4–6 candidates in parallel per batch.
- ~8–10 batches total for the remaining 51.
- ~20–25 minutes per batch.
- **Total wall-clock: ~3–4 hours.**

---

## 13. Remaining 51 Candidates

This list is derived from `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts`. There are 54 total candidates (1 Mann + 53 in the FULL_CANDIDATES array spread). **None of them currently have a real `inTheirOwnWords` narrative wired in.** Mann has a stub, Proctor and Ruder have benchmark narratives in `agents/narrative-writer/` that need to be wired into `candidates.ts`. So the effective work scope is:

- **Drafts already complete (3):** Mann (T1), Proctor (T2), Ruder (T3). For each: wire the existing benchmark narrative into `candidates.ts` as `inTheirOwnWords`. No harvest needed; narrative already written.
- **Full pipeline (51 remaining):** harvest + narrative + wire.

### Tier 1 — Federal incumbent, Governor, U.S. Senate (12 candidates)
*Pre-handoff drafts: Mann (DONE-DRAFT, needs wiring only). All 11 below need full pipeline.*

| Slug | Display Name | Race |
|---|---|---|
| `roger-marshall` | Roger Marshall | U.S. Senate (R, incumbent) |
| `jason-hart` | Jason Hart | U.S. Senate (D) |
| `patrick-schmidt` | Patrick Schmidt | U.S. Senate (D) |
| `christy-cauble-davis` | Christy Cauble Davis | U.S. Senate (D) |
| `sandy-spidel-neumann` | Sandy Spidel Neumann | U.S. Senate (D) |
| `erik-murray` | Erik Murray | U.S. Senate (D) |
| `anne-parelkar` | Anne Parelkar | U.S. Senate (D) |
| `michael-soetaert` | Michael Soetaert | U.S. Senate (D) |
| `chase-laporte` | Chase LaPorte | U.S. Senate (R) |
| `colin-mcroberts` | Colin McRoberts | KS-01 U.S. House (D) |
| `lauren-reinhold` | Lauren Reinhold | KS-01 U.S. House (D) |
| `craig-musser` | Craig Musser | KS-01 U.S. House (I) |

**Governor (Tier 1 by office level — 11 candidates):**

| Slug | Display Name | Race |
|---|---|---|
| `scott-schwab` | Scott Schwab | Kansas Governor (R) |
| `vicki-schmidt` | Vicki Schmidt | Kansas Governor (R) |
| `ty-masterson` | Ty Masterson | Kansas Governor (R) |
| `jeff-colyer` | Jeff Colyer | Kansas Governor (R) |
| `ethan-corson` | Ethan Corson | Kansas Governor (D) |
| `cindy-holscher` | Cindy Holscher | Kansas Governor (D) |
| `marty-tuley` | Marty Tuley | Kansas Governor (D) |
| `charlotte-ohara` | Charlotte O'Hara | Kansas Governor (R) |
| `stacy-rogers` | Stacy Rogers | Kansas Governor (R) |
| `joy-eakins` | Joy Eakins | Kansas Governor (R) |
| `philip-sarnecki` | Philip Sarnecki | Kansas Governor (R) |

### Tier 2 — Statewide office (non-Governor), State legislature, County-wide, City Mayor (16 candidates)
*Pre-handoff drafts: Proctor (DONE-DRAFT, needs wiring only). All 15 below need full pipeline.*

| Slug | Display Name | Race |
|---|---|---|
| `kris-kobach` | Kris Kobach | Kansas Attorney General (R, incumbent) |
| `chris-mann` | Chris Mann | Kansas Attorney General (D) |
| `ken-rahjes` | Ken Rahjes | Kansas Secretary of State (R) |
| `jennifer-day` | Jennifer Day | Kansas Secretary of State (D) |
| `sam-lane` | Sam Lane | Kansas Secretary of State (D) |
| `daniel-hawkins` | Daniel Hawkins | Kansas Insurance Commissioner (R) |
| `dinah-sykes` | Dinah Sykes | Kansas Insurance Commissioner (D) |
| `barb-wasinger` | Barb Wasinger | KS House District 111 (R, incumbent) |
| `mason-ruder` | Mason Ruder | Hays Mayor (NP, incumbent) |
| `scott-braun` | Scott Braun | Ellis County Sheriff |
| `aaron-cunningham` | Aaron Cunningham | Ellis County Attorney |
| `bobbi-dreiling` | Bobbi Dreiling | Ellis County Clerk / Election Officer |
| `vernon-ruder-jr` | Vernon Ruder Jr | Ellis County Treasurer |
| `rebecca-herzog` | Rebecca Herzog | Ellis County Register of Deeds |
| `toby-dougherty` | Toby Dougherty | Hays City Manager |

### Tier 3 — Township / School Board / Smaller Municipal (15 candidates)
*Pre-handoff drafts: Ruder (DONE-DRAFT, needs wiring only). All 14 below need full pipeline.*

| Slug | Display Name | Race |
|---|---|---|
| `alaina-cunningham` | Alaina Cunningham | Hays Vice Mayor (NP, incumbent) |
| `shaun-musil` | Shaun Musil | Hays Commissioner (NP, incumbent) |
| `sandy-jacobs` | Sandy Jacobs | Hays Commissioner (NP, incumbent) |
| `david-vilaysing` | David Vilaysing | Hays Commissioner (NP, incumbent) |
| `michael-berges` | (NOTE: not present in candidates.ts; verify with project owner before processing) |
| `neal-younger` | Neal Younger | Ellis County Commissioner |
| `nathan-leiker` | Nathan Leiker | Ellis County Commissioner |
| `ken-brooks` | Ken Brooks | USD 489 Board President |
| `curt-vajnar` | Curt Vajnar | USD 489 Board Vice President |
| `derek-yarmer` | Derek Yarmer | USD 489 Board Member |
| `allen-park` | Allen Park | USD 489 Board Member |
| `jayme-goetz` | Jayme Goetz | USD 489 Board Member |
| `craig-pallister` | Craig Pallister | USD 489 Board Member |
| `ron-wilson` | Ron Wilson | USD 489 Superintendent |

> **Discrepancy note:** CLAUDE.md lists `michael-berges` (Ellis County Commissioner D1) on the roster. A grep of `candidates.ts` for `"slug": "michael-berges"` returns no matches at handoff time. Codex should verify this candidate's presence in `candidates.ts` before attempting to wire a narrative. If the slug is genuinely missing, flag in the commit message; do not silently insert.

### Authoritative Tier Assignment

If Codex is uncertain about a tier, use the following decision tree:

1. **Federal seat?** → T1.
2. **Governor of any state?** → T1.
3. **Statewide office (AG, SoS, Insurance Comm, Treasurer)?** → T2.
4. **State legislature seat?** → T2.
5. **County-wide elected office?** → T2.
6. **City mayor?** → T2.
7. **City commissioner, county commissioner sub-district, school board, township?** → T3.

### Re-Derivation Instructions

If this list is ever out of sync with `candidates.ts`, re-derive it by running:

```bash
grep -nE '^\s+"slug":\s+"' /Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts
```

Then cross-reference each slug's `position` and `electionSlug` to assign the tier per the decision tree above. The Mann entry is the lone TypeScript-literal-style entry (line 92) and uses `slug: "tracey-mann"` (unquoted key); the other 53 are JSON-style inside the FULL_CANDIDATES array spread.

---

## 14. Quality Bar References

Codex's writer agents **must read at least the benchmark matching the candidate's tier** before writing.

| Reference | Tier | Path |
|---|---|---|
| Tracey Mann (federal incumbent) | T1 | `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/sample-output-tracey-mann.md` |
| Pat Proctor (statewide candidate) | T2 | `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/benchmark-pat-proctor.md` |
| Ruth Ruder (school board, low signal) | T3 | `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/benchmark-ruth-ruder.md` |

**Authoritative agent spec:**
- `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/PROMPT.md` — protocol, rules, structural template, self-check
- `/Users/tylerpreisser/Desktop/elect-righteous/agents/narrative-writer/soul.md` — identity, worldview foundation, the eight reference verses, things-I-will-never-do list

**Master project reference (read before anything else):**
- `/Users/tylerpreisser/Desktop/elect-righteous/CLAUDE.md`

---

## 15. Failure Modes & Recovery

| Failure mode | Symptom | Recovery |
|---|---|---|
| Build fails on TypeScript error after wiring | `npm run build` fails with type error | Check `inTheirOwnWords` shape — all six fields present; `platformsCovered` is `string[]`; dates are ISO `YYYY-MM-DD` strings. Check string escaping in the narrative (backticks, `${...}`, unescaped `\`). If the narrative is JSON-style, every internal `"` must be `\"` and every literal newline must be `\n`. |
| Permission denied on `git push origin main` | Push prompts for password or fails authentication | The orchestrator (Codex) must run the push, not a sub-agent. If a sub-agent is blocked from pushing, surface to the orchestrator. If push still fails, ask the user (Tyler) to approve or add a permission rule. Never use `--force` on `main`. |
| Harvest returns thin signal | Presence-detector finds nothing or near-nothing | That's the narrative. Don't pad. Write the truth in a single 200-word paragraph: *At time of harvest, [name] does not maintain a detectable public social media presence.* Pivot to local-news / candidate-questionnaire quotes if available (T3 model). If no harvested record exists at all, write the absence narrative and ship it. The Ruth Ruder benchmark is the exact model. |
| Candidate dropped out / race changed | Candidate is no longer running, or moved to different race | Flag in the commit message: `narrative: SKIP for {candidate-name} — dropped out per [source URL]`. Do not delete the entry from `candidates.ts`. Leave `inTheirOwnWords` undefined for that candidate and add a note to the candidate's `whoTheyAre` field if appropriate. Report the skip in the batch summary. |
| Writer produces banned vocabulary | Self-check question 2 returns no | Reject the output. Re-run the writer with explicit reminder of the banned-vocabulary list. Never ship a narrative that fails the symmetry test or the banned-vocabulary check. |
| Quote does not appear in harvest | Self-check question 6 returns no | Reject the narrative; the writer is fabricating. Re-run with the explicit instruction that every quote must trace to a real captured post URL in the harvest. |
| Asymmetric framing detected on review | Symmetry test fails — paragraph reads differently than it would for the opposite party | Rewrite the paragraph. Repeat for every other paragraph in the same narrative. Re-check after rewrite. |
| Build passes but page renders blank section | UI not picking up the new field | Confirm the field is named exactly `inTheirOwnWords` (camelCase, plural "Their"). Confirm all six required sub-fields are present. Confirm narrative string is non-empty. |
| GitHub Actions deployment fails | Workflow shows failure in repo Actions tab | Inspect the `deploy.yml` run log. Most common cause: TypeScript error not caught in local build (rare; usually means out-of-sync `package-lock.json`). Re-run `npm install` in `ui/`, rebuild locally, commit lockfile, push. |

---

## 16. Definition of Done

### Per Candidate

- [ ] Harvest file exists at `memory/candidates/{slug}/social-harvest.md` (optional intermediate; required for T1, recommended for T2, optional for T3 zero-presence cases).
- [ ] Narrative file exists at `memory/candidates/{slug}/in-their-own-words.md`.
- [ ] `candidates.ts` entry for `{slug}` has `inTheirOwnWords` field populated with all six required sub-fields (`narrative`, `lastUpdated`, `platformsCovered`, `dateRangeStart`, `dateRangeEnd`, `disclaimer`).
- [ ] Narrative passes the 9-question self-check (all yes).
- [ ] Symmetry test passed.
- [ ] No banned vocabulary anywhere in the narrative.
- [ ] Every quote is verbatim with a markdown link to source.
- [ ] Every engagement number cites its capture date.
- [ ] Methodology footer present with date range, platforms, post counts, and the fixed disclaimer line.
- [ ] Build passes locally with 127/127 pages.

### Overall

- [ ] All 54 candidates (including Mann, Proctor, Ruder) have `inTheirOwnWords` populated.
- [ ] Mann/Proctor/Ruder existing benchmark narratives preserved verbatim (do not overwrite or paraphrase).
- [ ] Build passes with 127 static pages generated.
- [ ] Final push to `origin/main` succeeded.
- [ ] Live site verified at https://tpreisser.github.io/elect-righteous/ — spot-check 3 candidate pages (one of each tier) to confirm narratives render.
- [ ] No banned vocabulary anywhere in any committed narrative (run a grep sweep before final push).
- [ ] No scripture quotes anywhere in any committed narrative (grep for common verse references and book names).
- [ ] Commit history clean: one commit per candidate (or one commit per batch is acceptable if individual candidates are easy to identify in the diff).

---

## 17. Operating Model

Codex mirrors the orchestrator-only operating model Tyler uses with Claude:

1. **Codex orchestrator delegates; it does not execute directly.** The orchestrator dispatches sub-agents for harvest, for narrative writing, and for wiring. The orchestrator itself runs only: file reads (to assess state), the build command, git stage/commit/push, and batch-level coordination.

2. **Parallel sub-agents for independent work.** Dispatch 4–6 candidates in parallel per batch. Each candidate's harvest and narrative are independent of all others.

3. **Sub-agents reach a clear definition of done per candidate.** The harvest agent saves its file and reports tokens used. The narrative writer agent saves its file, runs the 9-question self-check, and reports all-nine-yes.

4. **Orchestrator handles git push.** Sub-agents may be blocked from network egress / git push. The orchestrator owns the push and confirms the deploy.

5. **After every batch, run the build to verify.** Do not let three batches stack up without a build pass. If a build fails, isolate the offending candidate's wiring, fix, rebuild, then continue.

6. **Commit message format:**
   ```
   narrative: add inTheirOwnWords for {candidate-name} ({tier})
   ```
   For batch commits:
   ```
   narrative: add inTheirOwnWords for batch {N} — {N candidates} (T1: {n}, T2: {n}, T3: {n})
   ```

7. **Never auto-merge a narrative that fails the self-check or symmetry test.** Re-run the writer. If a second pass also fails, escalate to the user before shipping.

8. **Cadence:** Push every 5–10 candidates. This keeps GitHub Actions queue manageable and lets the user verify intermediate state on the live site.

---

## 18. Christian Worldview Operational Examples

These examples show how the worldview affects **what** is surfaced without affecting **how** it is written. In each case, the lens applies equally to every candidate in every race, regardless of party.

### Example 1 — Self-Contradiction
A candidate publicly states on March 1 that they oppose foreign-money influence in Kansas elections, then on May 10 their campaign acknowledges receipt of out-of-state funding. The narrative surfaces both posts with verbatim quotes and source links. The paragraph ends without commentary. The reader concludes.

> **How it reads:** *On March 1, 2026, [candidate] posted, "Kansas elections should be decided by Kansas dollars, not Wall Street and the coasts" ([source](https://...)). On May 10, 2026, the campaign acknowledged receipt of $X in contributions from donors with addresses in [state list] ([source](https://...)).*

No words like "hypocrite," "flip-flop," "contradicts themselves." Just the two facts with sources.

### Example 2 — Treatment of Opponents
A candidate refers to a primary opponent in posts using verbal mockery, name-calling, or dismissive epithets. The narrative quotes the language verbatim. It applies the same scrutiny to every opponent's feed — if a Democratic opponent has mocked a Republican opponent in the same way, the same paragraph construction is used for both.

> **How it reads:** *On April 14, 2026, [candidate] posted, "[verbatim mocking quote]" ([source](https://...)). The captured period contains three additional posts addressing [opponent name] in similar terms ([1](https://...), [2](https://...), [3](https://...)).*

No words like "vicious," "personal attacks," "bullying." Just the count and the links.

### Example 3 — Care for the Vulnerable
A candidate's feed contains substantial posting on one vulnerable category (e.g., border enforcement and unauthorized immigration) and no posts on another (e.g., maternal mortality, hospital closures, foster-care reform). The narrative surfaces both — the topic share that *is* posted on, and the conspicuous absences. Every candidate in the same race gets the same audit.

> **How it reads:** *Mann's feed contains 23 posts addressing border security between October 2024 and April 2026 (12 percent of original posts). Across the same period the feed contains no posts addressing maternal mortality, rural hospital closures, foster care, or opioid response.*

### Example 4 — Marriage and Family on the Public Record
If a candidate publicly cites their family as a campaign asset, mentions a spouse by name in posts, or speaks publicly about parenting, the narrative reports what was said and links sources. The narrative does not speculate about anything not on the public record — no rumors, no unverified claims, no inferences about marital state from absence of mention.

> **How it reads:** *[Candidate]'s public posts mention [spouse name] by name on five occasions across the captured period ([1, 2, 3, 4, 5]). The campaign biography lists [number] children. The captured period contains no public posts addressing [topic specifically related to family policy].*

No words like "values-driven," "family-first," "principled." Just the mention count and the absence count.

### Example 5 — Humility vs. Self-Aggrandizement Pattern
The lens watches for posting patterns that consistently center the candidate's own credit ("I delivered," "I fought," "I won") versus patterns that center constituents or co-actors ("Kansas farmers led on," "we passed," "thanks to"). The narrative reports the ratio with examples. It does not assign character labels.

> **How it reads:** *Across the 1,247 captured posts, 412 (33 percent) lead with first-person constructions ("I delivered," "I fought," "I introduced"). 198 (16 percent) lead with collective constructions ("Kansas farmers," "we," "our team"). The remainder are policy statements or reposts without a leading subject.*

---

## 19. Critical Don'ts (One-Page Summary)

Codex must never do any of the following, in any narrative, about any candidate, in any commit, in any batch.

### Voice
- ❌ Use any banned-vocabulary word (full list in Section 4) in the writer's own prose
- ❌ Use loaded verbs (claimed, alleged, ranted, demanded, blasted, slammed, attacked, lashed out, shrieked, fumed, doubled down, walked back, smeared)
- ❌ Use ironic quote marks anywhere
- ❌ End paragraphs with editorial commentary ("troubling," "encouraging," "raises questions," "one wonders")
- ❌ Apply emotion-loaded adjectives to one side that wouldn't apply equally to the other
- ❌ Use partisan shorthand (MAGA, woke, RINO, far-left, far-right, radical, extreme, Christian nationalist, communist, fascist, regime, cabal)

### Substance
- ❌ Predict intent ("he wants to," "she plans to," "is positioning")
- ❌ Assign motive ("because he believes," "driven by," "in order to")
- ❌ Call any candidate Christian, not-Christian, sincere, fake, performative, genuine, true believer
- ❌ Call a statement a "lie" (write "this contradicts [fact] reported by [source] on [date]" and let voter judge)
- ❌ Paraphrase and present as a verbatim quote
- ❌ Cite engagement numbers without a capture date
- ❌ Cite percentages or post counts without linking to the harvest file or platform

### Worldview
- ❌ Quote scripture anywhere in any narrative — not as quote, not as allusion, not as closing flourish
- ❌ Mention God, Jesus, the Bible, or any specific verse anywhere in the narrative prose
- ❌ Excuse a documented biblical violation by a self-professed Christian candidate
- ❌ Treat a non-Christian candidate as automatically opposed or suspect
- ❌ Praise "our team" or criticize "their team" — there is no team
- ❌ Let the worldview lens reach the page in any sentence

### Process
- ❌ Skip the 9-question self-check before saving any narrative
- ❌ Skip the symmetry test before shipping
- ❌ Ship a narrative that uses different word choices for opposing-party candidates with identical patterns
- ❌ Push to `main` without a clean local build
- ❌ Use `git push --force` on `main`
- ❌ Modify any project file outside `candidates.ts` and `memory/candidates/{slug}/` during this work
- ❌ Overwrite or paraphrase the existing Mann, Proctor, or Ruder benchmark narratives — preserve them verbatim and wire them in as-is
- ❌ Insert a candidate slug that does not already exist in `candidates.ts` without first flagging the discrepancy
- ❌ Commit `.env`, credentials, or any secrets

### Identity Anchor
- ❌ If a reader can guess from word choices alone which side the writer is on, the narrative has failed. Rewrite. Do not ship.

---

**END OF HANDOFF DOCUMENT**

*This file is the single source of truth for executing the "In Their Own Words" narrative pipeline on the 51 remaining Elect Righteous candidates. If anything in this document conflicts with the actual state of the project files at `/Users/tylerpreisser/Desktop/elect-righteous/`, the project files are authoritative; report the discrepancy to the user and proceed with the file-state as truth.*
