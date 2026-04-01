# STARTING PROMPT — Copy and paste this entire document into Codex

## Project Location
`/Users/tylerpreisser/Desktop/elect-righteous/`

## Read These Files First (in this order)
1. `/Users/tylerpreisser/Desktop/elect-righteous/AGENTS.md` — project rules, build commands, data model
2. `/Users/tylerpreisser/Desktop/elect-righteous/HANDOFF.md` — step-by-step what to do next
3. `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts` — current data model + Tracey Mann template
4. `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/elections.ts` — election data
5. `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/app/candidates/[slug]/client.tsx` — the editorial article component

## What You Are Building
An election intelligence website for Hays, Kansas deployed to GitHub Pages. 54 candidates across 12+ races. The website is live at https://tpreisser.github.io/elect-righteous/ but only ONE candidate (Tracey Mann) has real data. The other 53 show "Research In Progress." The raw data for all 54 candidates EXISTS in this repo — it just needs to be parsed from markdown reports and wired into the TypeScript data files.

## Your Job — Do These In Order

### Task 1: Parse all report markdown files into candidate data

Read every file in `/Users/tylerpreisser/Desktop/elect-righteous/reports/` — there are 28 markdown files totaling 14,000+ lines. These contain complete dossiers on candidates. The key files are:

- `reports/roger-marshall-complete-dossier.md` (811 lines)
- `reports/scott-schwab-complete-dossier.md` (887 lines)
- `reports/vicki-schmidt-complete-dossier.md` (751 lines)
- `reports/ty-masterson-complete-dossier.md` (730 lines)
- `reports/jeff-colyer-complete-dossier.md` (940 lines)
- `reports/Kris-Kobach-Complete-Dossier.md` (705 lines)
- `reports/chris-mann-complete-dossier.md` (573 lines)
- `reports/barb-wasinger-complete-dossier.md` (276 lines)
- `reports/mason-ruder-complete-dossier.md` (245 lines)
- `reports/ken-brooks-complete-dossier.md` (216 lines)
- `reports/governor-2026-all-remaining-candidates-complete.md` (805 lines — contains Corson, Holscher, Tuley, O'Hara, Rogers, Eakins, Sarnecki)
- `reports/senate-challengers-local-officials-complete.md` (991 lines — contains all 8 Senate Democrats, LaPorte, plus Hays/Ellis officials)
- `reports/sos-insurance-ks01-all-candidates-complete.md` (785 lines — Proctor, Rahjes, Day, Lane, Hawkins, Sykes, McRoberts, Reinhold, Musser)
- `reports/hays-city-commission-deep-investigation-2026-03-30.md` (480 lines — Ruder, Cunningham, Musil, Jacobs, Vilaysing, Dougherty)
- `reports/ellis-county-elected-officials-deep-investigation.md` (717 lines — Braun, A.Cunningham, Dreiling, Younger, Leiker, Berges, Herzog, V.Ruder)
- `reports/usd489-board-deep-investigation-2026-03-30.md` (494 lines — Brooks, Vajnar, R.Ruder, Yarmer, Park, Goetz, Pallister, Wilson)
- `reports/faith-church-investigation-2026-03-31.md` (920 lines — church affiliations for 32 people)
- `TRACEY-MANN-DOSSIER.md` (557 lines — this is the template, already wired in)

For each candidate, extract from their report:
- **whoTheyAre** — pull from biography/background sections, write as narrative paragraphs
- **theirRecord** — pull from political record/voting record/legislative record sections
- **whatYouShouldKnow** — pull key findings, controversies, notable facts as an array of strings
- **whereTheyWorship** — pull from church/faith sections
- **church** — structured object: `{ name, denomination, url, details }` — get church URLs from `reports/faith-church-investigation-2026-03-31.md`
- **quotes** — pull verbatim quotes (look for `> "quote text"` or `**Key Quote**` patterns)
- **campaignFinance** — pull from campaign finance sections: `{ totalRaised, narrative, donors: [{name, amount}], undisclosed, reportingPeriod, source }`
- **sources** — extract EVERY URL found in the report file. Use grep: `grep -oE 'https?://[^ )\]"]+' <file> | sort -u`

Also check `memory/candidates/{slug}/raw-dump.md` for additional data not in the dossier reports.

Write all extracted data into `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/candidates.ts`. Follow the exact same pattern as the existing Tracey Mann entry (`TRACEY_MANN_FULL`). The TypeScript interfaces are already defined at the top of that file.

### Task 2: Add all candidates to elections

Update `/Users/tylerpreisser/Desktop/elect-righteous/ui/src/data/elections.ts` — each election's candidate list must include ALL candidates:

- `ks-01-house-2026`: tracey-mann, colin-mcroberts, lauren-reinhold, craig-musser
- `us-senate-2026`: roger-marshall, jason-hart, patrick-schmidt, christy-cauble-davis, sandy-spidel-neumann, erik-murray, anne-parelkar, michael-soetaert, chase-laporte
- `kansas-governor-2026`: scott-schwab, vicki-schmidt, ty-masterson, jeff-colyer, philip-sarnecki, charlotte-ohara, stacy-rogers, joy-eakins, ethan-corson, cindy-holscher, marty-tuley
- `kansas-ag-2026`: kris-kobach, chris-mann
- `kansas-sos-2026`: pat-proctor, ken-rahjes, jennifer-day, sam-lane
- `kansas-insurance-2026`: daniel-hawkins, dinah-sykes
- `ks-house-111`: barb-wasinger

### Task 3: Restructure elections page

Rewrite `ui/src/app/elections/page.tsx` with these categories (in this order):
1. **Federal Elections** — US Senate, US House KS-01
2. **State Elections** — Governor, AG, Secretary of State, Insurance Commissioner, KS House 111, SBOE D5
3. **Local Elections** — (note: city/county/school not on 2026 ballot, but show the current officeholders)
4. **Ballot Measures** — Supreme Court Amendment (Aug 4), Citizenship Amendment (Nov 3)

Each category is a section with a heading. People's elections come FIRST, ballot measures LAST.

### Task 4: Delete unused grading components

Delete these files — they are from the old grading system that has been removed:
- `ui/src/components/ui/values-badge.tsx`
- `ui/src/components/ui/consistency-badge.tsx`
- `ui/src/components/ui/flag-alert.tsx`
- `ui/src/components/ui/values-alignment-chart.tsx`
- `ui/src/components/ui/comparison-table.tsx`

Remove their exports from `ui/src/components/ui/index.ts` and remove any imports in other files.

### Task 5: Build and deploy

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui
npm run build
```

Must pass with zero errors. Then:

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
git add -A
git commit -m "Wire all 54 candidates with real data, restructure elections, cleanup grading"
git push
```

GitHub Actions auto-deploys to https://tpreisser.github.io/elect-righteous/

## Rules — Do Not Break These

1. **NO GRADING** — No badges, no Strong/Moderate/Weak, no red/green flags. Just present facts.
2. **EVERY CANDIDATE** — All 54 must have content. If a report is thin, use whatever data exists from `memory/candidates/{slug}/raw-dump.md`.
3. **DONOR TABLE** — Campaign finance must show a Name | Amount table, not just a narrative paragraph.
4. **CHURCH WEBSITE** — Link to the church's website in the ChurchInfo object's `url` field.
5. **ALL SOURCES** — Every URL from the reports goes in the sources array. Not 8. ALL of them.
6. **PLAIN ENGLISH** — Write for an 8th-grade reading level.
7. **STATIC EXPORT** — `generateStaticParams` in server page.tsx, NOT in "use client" files.
8. **basePath** — Next.js config has `basePath: "/elect-righteous"` for GitHub Pages.
