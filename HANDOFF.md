# HANDOFF DOCUMENT — Pick Up Where We Left Off

> **Generated**: 2026-04-01
> **For**: Any AI assistant (Claude, Codex, GPT) continuing this project
> **Read CLAUDE.md first**, then this document for tactical next steps.

---

## IMMEDIATE CONTEXT

Tyler built an election intelligence website for Hays, Kansas. 54 candidates across 12+ races. 150,000+ lines of raw intel collected. One candidate (Tracey Mann) has a complete editorial article on the live website. The other 53 are showing "Research In Progress" placeholders. The raw data EXISTS in the repo — it just needs to be parsed and wired into the website.

Important editorial correction: the research workflow now needs TWO lanes per candidate:
- broad public-profile research (`raw-dump.md`)
- adverse public-record / opposition research (`opposition-research.md`)

**The single most important task is: transform the markdown dossier reports into the TypeScript data file so all 54 candidates have real content on the website.**

---

## STEP-BY-STEP: WHAT TO DO NEXT

### Step 1: Build the Data Transform Script

Create `ui/scripts/transform-dossiers.mjs` that:

1. Reads each file in `reports/*-complete-dossier.md` and `reports/*-investigation.md`
2. Parses the markdown sections (they follow consistent `## SECTION` heading patterns)
3. Extracts into the `CandidateFull` interface fields:
   - `whoTheyAre` ← from "## Background" or "## Full Bio" or "## Personal" sections
   - `theirRecord` ← from "## Political Record" or "## Legislative Record" or "## Voting Record"
   - `whatYouShouldKnow` ← from "## Key Findings" or "## Controversies" or "## Red Flags" / "## Green Flags" (now presented neutrally, not color-coded)
   - `whereTheyWorship` ← from "## Church" or "## Faith" sections
   - `church` ← structured ChurchInfo object from faith investigation report
   - `quotes` ← from `> "quote text"` blockquotes with source lines
   - `campaignFinance` ← from "## Campaign Finance" sections
   - `sources` ← ALL URLs found in the file (grep for https?://)
4. Falls back to `memory/candidates/{slug}/raw-dump.md` for candidates without dedicated dossiers
5. Also reads `memory/candidates/{slug}/opposition-research.md` so "what you should know" pulls from a deliberate adverse-research pass rather than only positive/profile material
5. Outputs updated `candidates.ts` with all 54 candidates populated

### Step 1A: Run The Separate Opposition Pass

Before trusting any candidate page as balanced, make sure there is a candidate-specific adverse-public-record file:

`memory/candidates/{slug}/opposition-research.md`

That file should contain verified:
- controversies
- litigation / complaints / investigations
- conflicts of interest
- contradictions / reversals
- deleted or changed content
- public criticism

If nothing significant surfaced, the file should still exist and say:

`No verified adverse public-record findings surfaced in this pass.`

### Step 2: Populate ALL Candidates in Elections

Update `ui/src/data/elections.ts` so every election lists ALL its candidates:
- KS-01: Mann, McRoberts, Reinhold, Musser
- US Senate: Marshall, Hart, Schmidt, Cauble Davis, Neumann, Murray, Parelkar, Soetaert, LaPorte
- Governor: All 11 candidates (Schwab, Schmidt, Masterson, Colyer, Sarnecki, O'Hara, Rogers, Eakins, Corson, Holscher, Tuley)
- AG: Kobach, Mann (Chris)
- SoS: Proctor, Rahjes, Day, Lane
- Insurance: Hawkins, Sykes
- KS House 111: Wasinger (+ any challengers)
- SBOE D5: Hopkins (+ any challengers)

### Step 3: Restructure Elections Page

Current problem: ballot measures show first, confusing. Needs categories:

```
/elections/
├── Federal Elections
│   ├── U.S. Senate (Marshall vs. 8 challengers)
│   └── U.S. House KS-01 (Mann vs. 3 challengers)
├── State Elections
│   ├── Governor (Open Seat — 11 candidates)
│   ├── Attorney General (Kobach vs. Mann)
│   ├── Secretary of State (Open Seat — 4 candidates)
│   ├── Insurance Commissioner (Open Seat — 2 candidates)
│   ├── KS House District 111 (Wasinger)
│   └── State Board of Education District 5
├── Ballot Measures
│   ├── Supreme Court Election Amendment (Aug 4)
│   └── Citizenship Voting Requirement (Nov 3)
└── Judicial
    └── Retention Elections
```

Each category is a collapsible section. People's elections come FIRST. Ballot measures last.

### Step 4: Church Recommendations Page

Create `/recommendations/` or a section on the About page:
- Title: "Faith-Based Voter Guide" or "Church Recommendations"
- Disclaimer: "These recommendations reflect a conservative Protestant, non-denominational perspective. We strongly encourage you to read the full candidate profiles and make your own prayerful decisions."
- For each race, provide a recommendation based on:
  - Public faith involvement (church attendance, leadership, ministry)
  - Voting record on life issues (sanctity of life, family protection)
  - Honesty and integrity track record
  - Care for the vulnerable
  - Stewardship of public resources
- Format as brief paragraphs, NOT a grading matrix
- Reference specific data points from the candidate articles

### Step 5: Delete Unused Grading Components

Remove these files entirely — they are from the old grading system:
- `ui/src/components/ui/values-badge.tsx`
- `ui/src/components/ui/consistency-badge.tsx`
- `ui/src/components/ui/flag-alert.tsx`
- `ui/src/components/ui/values-alignment-chart.tsx`
- `ui/src/components/ui/comparison-table.tsx`

Remove all imports of these from other files (check `index.ts` barrel export).

### Step 6: Source Completeness

Every candidate's `sources` array must include EVERY URL found during investigation, including opposition research URLs. To extract:
```bash
grep -oE 'https?://[^ )\]\"]+' memory/candidates/{slug}/raw-dump.md | sed 's/[)\]",]$//' | sort -u
```
And repeat for:
```bash
grep -oE 'https?://[^ )\]\"]+' memory/candidates/{slug}/opposition-research.md | sed 's/[)\]",]$//' | sort -u
```

### Step 7: Mobile Optimization

Run the ui-mobile agent or manually verify:
- Homepage renders correctly on iPhone Safari
- Candidate articles are readable on mobile (narrow column already helps)
- Donor tables are scrollable on small screens
- Navigation hamburger works
- Key Facts box stacks properly

### Step 8: Push & Verify

```bash
cd ui && npm run build   # Must succeed with 0 errors
cd .. && git add -A && git commit -m "Wire all candidate data" && git push
```

GitHub Actions will auto-deploy to https://tpreisser.github.io/elect-righteous/

---

## KEY FILES TO READ FIRST

1. `CLAUDE.md` — Complete project manual (you're reading the companion to this)
2. `ui/src/data/candidates.ts` — Data model + current candidate data (Tracey Mann is the template)
3. `ui/src/app/candidates/[slug]/client.tsx` — The editorial article component
4. `ui/src/data/elections.ts` — Election data with plainEnglish descriptions
5. `reports/plain-english-voter-guide.md` — Every race explained simply
6. `reports/faith-church-investigation-2026-03-31.md` — Church affiliations for all officials
7. `ui/design-extraction/beehiiv-article-patterns.md` — Editorial design specs

---

## TYLER'S DESIGN PREFERENCES

- **celebratejesus.org aesthetic** — navy, teal, clean, professional, faith-forward but not churchy
- **Beehiiv newsletter article style** — narrow reading column, generous whitespace, pull quotes
- **NO grading system** — no badges, no Strong/Moderate/Weak, no red/green flags
- **Donor tables** — clean Name | Amount layout with undisclosed row
- **Church websites linked** — always link to the church's website under "Where They Worship"
- **ALL sources** — every URL the agents found, not just 8-10
- **Plain English** — 8th-grade reading level, no jargon
- **Equal treatment** — every candidate gets the same depth, regardless of party or viability
- **Separate adverse pass** — every candidate should have both positive/profile research and a distinct opposition-research file
- **Conservative Protestant perspective** — for the recommendations section only, not the main articles

---

## REPORT FILES BY CANDIDATE

| Candidate | Primary Report File | Lines |
|-----------|-------------------|-------|
| Tracey Mann | TRACEY-MANN-DOSSIER.md | 557 |
| Roger Marshall | reports/roger-marshall-complete-dossier.md | 811 |
| Scott Schwab | reports/scott-schwab-complete-dossier.md | 887 |
| Vicki Schmidt | reports/vicki-schmidt-complete-dossier.md | 751 |
| Ty Masterson | reports/ty-masterson-complete-dossier.md | 730 |
| Jeff Colyer | reports/jeff-colyer-complete-dossier.md | 940 |
| Kris Kobach | reports/Kris-Kobach-Complete-Dossier.md | 705 |
| Chris Mann | reports/chris-mann-complete-dossier.md | 573 |
| Barb Wasinger | reports/barb-wasinger-complete-dossier.md | 276 |
| Mason Ruder | reports/mason-ruder-complete-dossier.md | 245 |
| Ken Brooks | reports/ken-brooks-complete-dossier.md | 216 |
| Gov remaining | reports/governor-2026-all-remaining-candidates-complete.md | 805 |
| Senate challengers | reports/senate-challengers-local-officials-complete.md | 991 |
| SoS/Insurance/KS01 | reports/sos-insurance-ks01-all-candidates-complete.md | 785 |
| Hays City | reports/hays-city-commission-deep-investigation-2026-03-30.md | 480 |
| Ellis County | reports/ellis-county-elected-officials-deep-investigation.md | 717 |
| USD 489 | reports/usd489-board-deep-investigation-2026-03-30.md | 494 |
| Faith/Church | reports/faith-church-investigation-2026-03-31.md | 920 |
| Plain English | reports/plain-english-voter-guide.md | 479 |
| Ballot Measures | reports/2026-kansas-ballot-measures-investigation.md | 473 |

Every candidate also has `memory/candidates/{slug}/raw-dump.md` with ALL consolidated intel. Adverse public-record work should live beside it in `memory/candidates/{slug}/opposition-research.md`.

---

## THINGS THAT ARE WORKING

- GitHub Pages deployment (push → auto-deploy)
- Next.js static export builds successfully
- Tracey Mann editorial article renders beautifully with donor table + church link
- 29 static pages generate
- Design system (navy/teal/Montserrat/Lato) is consistent
- Mobile hamburger nav works
- All investigation data is stored in the repo

## THINGS THAT ARE BROKEN / INCOMPLETE

- 53 of 54 candidate pages show "Research In Progress" (data exists but isn't wired)
- Elections pages don't show all candidates per race
- Ballot measures appear before people's elections
- No church recommendations section
- Unused grading components still in codebase
- Sources on Tracey Mann page only show ~8 (should be 40+)
- No search functionality (Fuse.js installed but not implemented)
- About page still references values framework grading language in some places
