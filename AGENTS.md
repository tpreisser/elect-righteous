# AGENTS.md — Elect Righteous Project Instructions

> Election intelligence platform for Hays, Kansas. Live at https://tpreisser.github.io/elect-righteous/
> Repo: https://github.com/tpreisser/elect-righteous

## Build & Test

```bash
cd ui
npm install
npm run build        # Next.js static export → out/
npm run dev          # Dev server at localhost:3000
```

Build MUST pass with zero TypeScript errors before committing. Static export mode (`output: "export"` in next.config.ts).

## Deploy

Push to `main` → GitHub Actions auto-deploys to GitHub Pages. No custom domain. basePath is `/elect-righteous` in production.

```bash
git add -A && git commit -m "description" && git push
```

## Code Conventions

- TypeScript strict mode, Next.js 16 App Router
- Tailwind v4 with custom theme in `ui/src/app/globals.css`
- `"use client"` only where needed (useState, onClick, etc.)
- `generateStaticParams` CANNOT be in a `"use client"` file — split into server page.tsx + client.tsx
- Path aliases: `@/*` → `./src/*`
- Fonts: Montserrat (headings via `font-heading`), Lato (body via `font-body`), Source Serif 4 (quotes via `font-serif`)
- Colors: navy `#10405D`, teal `#1cc3af`, gold `#C4922A`, charcoal `#1b1c1c`

## Critical Rules — READ THESE

1. **NO GRADING SYSTEM** — No badges, no Strong/Moderate/Weak ratings, no red/green flag color coding, no consistency scores. Present raw information only.
2. **EVERY CANDIDATE GETS EQUAL TREATMENT** — Long-shot Democrat gets same research depth as incumbent Republican.
3. **DONOR TABLE** — Campaign finance shows narrative paragraph + clean table (Name | Amount) + undisclosed notes.
4. **CHURCH WEBSITES LINKED** — Always link to the church's website in the "Where They Worship" section.
5. **ALL SOURCES** — Every URL from investigation goes in sources array. Not just 8-10; ALL of them.
6. **PLAIN ENGLISH** — 8th-grade reading level. No political jargon.
7. **THEOLOGICAL LENS** — Conservative Protestant, Baptist-leaning, 2-3 point Calvinist. For recommendations section ONLY, not main articles.
8. **STATIC EXPORT** — No API routes, no server runtime. All data baked at build time in `candidates.ts` and `elections.ts`.
9. **SEPARATE OPPOSITION PHASE** — Broad profile research and adverse public-record research are different tasks. Every candidate should eventually have both `raw-dump.md` and `opposition-research.md`.

## Project Structure

```
├── CLAUDE.md              # Full project manual (400+ lines)
├── HANDOFF.md             # Step-by-step pickup guide
├── AGENTS.md              # THIS FILE
├── agents/                # 7-agent pipeline (PROMPT.md + soul.md each)
├── memory/candidates/     # 54 folders, each has raw-dump.md; adverse findings live in opposition-research.md
├── reports/               # 28 formatted dossiers (14,000+ lines)
├── plans/                 # Implementation plans
├── scripts/               # launch.command, consolidate-intel.sh
└── ui/                    # Next.js website
    ├── src/app/           # Pages (home, about, elections, candidates)
    ├── src/components/    # Layout + UI components
    └── src/data/          # candidates.ts + elections.ts (THE data layer)
```

## What Needs To Be Done (Priority Order)

Read `HANDOFF.md` for full details. Summary:

1. **Run both research lanes** — broad profile research into `raw-dump.md`, adverse public-record research into `opposition-research.md`
2. **Build `scripts/transform-dossiers.mjs`** — parse reports plus candidate-side notes into `candidates.ts` TypeScript data for all 54 candidates
3. **Populate ALL candidates per election** — KS-01 needs 4 candidates, Senate needs 9, Governor needs 11, etc.
4. **Restructure elections page** — categories: Federal → State → Local → Ballot Measures (not ballot measures first)
5. **Church recommendations page** — separate section with faith-based guidance (conservative Protestant lens)
6. **Delete unused grading components** — values-badge.tsx, consistency-badge.tsx, flag-alert.tsx, values-alignment-chart.tsx, comparison-table.tsx
7. **Source completeness** — extract ALL URLs from `raw-dump.md` and `opposition-research.md` into sources arrays
8. **Mobile optimization**

## Data Model

The template candidate is Tracey Mann in `ui/src/data/candidates.ts`. Every candidate uses this same interface:

```typescript
interface CandidateFull {
  slug, name, party, position, electionSlug, incumbent, occupation,
  born?, hometown?, religion?, education?, family?, district?, margin2024?, campaignWebsite?,
  whoTheyAre: string,              // Narrative bio
  theirRecord: string,             // Political record
  whatYouShouldKnow: string[],     // Key facts (numbered, neutral)
  whereTheyWorship: string,        // Faith narrative
  church?: { name, denomination?, url?, details? },
  quotes: Quote[],                 // { text, source, date?, url?, topic? }
  campaignFinance?: { totalRaised, narrative, donors: Donor[], undisclosed?, reportingPeriod, source },
  sources: Source[]                // { title, url, publication, date }
}
```

## Report Files → Candidate Data Mapping

| Candidate | Report File | Lines |
|-----------|------------|-------|
| tracey-mann | TRACEY-MANN-DOSSIER.md | 557 |
| roger-marshall | reports/roger-marshall-complete-dossier.md | 811 |
| scott-schwab | reports/scott-schwab-complete-dossier.md | 887 |
| vicki-schmidt | reports/vicki-schmidt-complete-dossier.md | 751 |
| ty-masterson | reports/ty-masterson-complete-dossier.md | 730 |
| jeff-colyer | reports/jeff-colyer-complete-dossier.md | 940 |
| kris-kobach | reports/Kris-Kobach-Complete-Dossier.md | 705 |
| chris-mann | reports/chris-mann-complete-dossier.md | 573 |
| barb-wasinger | reports/barb-wasinger-complete-dossier.md | 276 |
| mason-ruder | reports/mason-ruder-complete-dossier.md | 245 |
| ken-brooks | reports/ken-brooks-complete-dossier.md | 216 |

Multi-candidate reports (parse per candidate):
- reports/governor-2026-all-remaining-candidates-complete.md (805 lines)
- reports/senate-challengers-local-officials-complete.md (991 lines)
- reports/sos-insurance-ks01-all-candidates-complete.md (785 lines)
- reports/hays-city-commission-deep-investigation-2026-03-30.md (480 lines)
- reports/ellis-county-elected-officials-deep-investigation.md (717 lines)
- reports/usd489-board-deep-investigation-2026-03-30.md (494 lines)

Every candidate also has `memory/candidates/{slug}/raw-dump.md` as a fallback data source. New adverse-public-record work should be written to `memory/candidates/{slug}/opposition-research.md` so the site can balance biography and criticism.
