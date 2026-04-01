# Elect Righteous — Complete Project Manual

> **Last updated**: 2026-04-01
> **Location**: `/Users/tylerpreisser/Desktop/elect-righteous/`
> **Live site**: https://tpreisser.github.io/elect-righteous/
> **Repo**: https://github.com/tpreisser/elect-righteous
> **Owner**: Tyler Preisser, Hays, Kansas

---

## WHAT THIS IS

A multi-agent election intelligence system + editorial website for Hays, Kansas voters. Given a location, the system discovers every upcoming election, identifies ALL candidates, scrubs the entire internet for every piece of public information about each one, and presents it as beautiful editorial articles on a GitHub Pages website themed after celebratejesus.org (Celebration Community Church, Hays, KS).

**Theological perspective**: Conservative Protestant, non-denominational, Baptist-leaning, 2-3 point Calvinist. Not the "flippen method." Think Celebration Community Church in Hays — that's the home church and the design inspiration.

**Core philosophy**: Present ALL the raw information. Let voters read and decide. For busy people, provide church-based recommendations as a SEPARATE section, not the main content. No grading system, no badges, no Strong/Moderate/Weak ratings. Just facts, beautifully presented.

---

## CURRENT STATE (2026-04-01)

### What's Done
- [x] 7-agent pipeline framework (PROMPT.md + soul.md for each agent, including a separate opposition-research phase)
- [x] 54 candidate folders with raw intelligence dumps (127,074 total lines)
- [x] 28 formatted investigation reports (14,000+ lines)
- [x] 24 election files covering every 2026 race relevant to Hays
- [x] Complete dossiers for 15 major candidates
- [x] Faith/church investigation for 32 officials (15 confirmed church affiliations)
- [x] Plain English voter guide for all races + ballot measures
- [x] Next.js 16 + Tailwind v4 website deployed to GitHub Pages
- [x] 29 static pages (home, about, elections, candidates with detail pages)
- [x] Editorial article design (Beehiiv-inspired, no grading system)
- [x] Tracey Mann full editorial article with donor table, church link, sources

### What's Pending (IN ORDER OF PRIORITY)

#### P0: DATA WIRING (biggest lift)
1. Build `scripts/transform-dossiers.mjs` — parse all 28 report markdown files into structured JSON matching the `CandidateFull` TypeScript interface
2. Populate `candidates.ts` with real data for ALL 54 candidates (currently only Tracey Mann has real data)
3. Every candidate page needs: whoTheyAre, theirRecord, whatYouShouldKnow, whereTheyWorship, church (with website URL), campaignFinance (with donor table), quotes, and ALL sources (every URL the agents found)
4. Run consolidation script again after wiring: `bash scripts/consolidate-intel.sh`
5. Keep broad profile research and adverse public-record research in separate files: `raw-dump.md` and `opposition-research.md`

#### P1: ELECTIONS PAGE RESTRUCTURE
5. Reorganize elections page into categories: **Federal Elections**, **State Elections**, **Local Elections**, **Ballot Measures** — each as an expandable folder/section
6. Ballot measures should NOT be the first thing shown — put people's elections first
7. Each election must list ALL candidates (currently KS-01 only shows Mann, AG only shows 1, SoS shows nobody)
8. Supreme Court Amendment needs plain-English breakdown from conservative Protestant perspective
9. All amendments need simple "what this means for you" language

#### P2: CHURCH RECOMMENDATIONS SECTION
10. Create a separate section/page: "Church Recommendations" or "Faith-Based Guide"
11. Based on conservative Protestant / Baptist-leaning / 2-3 point Calvinist worldview
12. Cross-reference each candidate's record against this theological framework
13. Make clear this is an OPINION section separate from the raw data articles
14. Encourage readers to read the full profiles and make their own decisions

#### P3: REMAINING CANDIDATE DOSSIERS
15. Re-run investigation agents for candidates with incomplete data (several hit rate limits)
16. Run the separate opposition-research pass for candidates whose files are still mostly positive/profile material
17. Candidates needing more data: Pat Proctor, Ken Rahjes, Jennifer Day, Sam Lane, Daniel Hawkins, Dinah Sykes, Colin McRoberts, Lauren Reinhold, Craig Musser, all 8 Senate Democrats, Chase LaPorte
18. All local Hays/Ellis officials need expanded profiles

#### P4: SOURCE COMPLETENESS
18. Every candidate page must include EVERY URL the agents found — not just 8-10
19. Parse all URLs from raw-dump.md files and include in sources array
20. Goal: Tracey Mann has 40+ sources, every other major candidate should too

#### P5: WEBSITE POLISH
21. Delete unused grading components: `values-badge.tsx`, `consistency-badge.tsx`, `flag-alert.tsx`, `values-alignment-chart.tsx`, `comparison-table.tsx`
22. Mobile optimization pass
23. About page update (remove values framework grading language)
24. Print-friendly CSS
25. SEO meta tags per candidate page
26. OG image generation for social sharing

#### P6: DEPLOYMENT & CI/CD
27. GitHub Pages auto-deploys on push to main (already working)
28. No custom domain — using tpreisser.github.io/elect-righteous/

---

## TECH STACK

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 16.2.1 | App Router, static export |
| React | 19.2.4 | |
| Styling | Tailwind CSS v4 | Custom theme in globals.css |
| Animation | Framer Motion 12.38.0 | Collapsible sections |
| Icons | Lucide React | |
| Search | Fuse.js 7.1.0 | Client-side (not yet implemented) |
| Markdown | gray-matter 4.0.3 | For build script |
| Deploy | GitHub Pages | Via GitHub Actions workflow |
| Fonts | Google Fonts | Montserrat (headings), Lato (body), Source Serif 4 (quotes) |

---

## DESIGN SYSTEM

**Derived from celebratejesus.org + Beehiiv newsletter aesthetics**

### Colors
```
--color-navy: #10405D        (primary - headers, backgrounds)
--color-navy-light: #1a5a82
--color-navy-dark: #0a2d42
--color-teal: #1cc3af        (accent - CTAs, links, borders)
--color-teal-dark: #17a594
--color-gold: #C4922A        (warm accent, highlights)
--color-charcoal: #1b1c1c    (body text)
--color-dark: #2a2929        (footer)
--color-slate: #4a4a4a       (secondary text)
--color-light: #f6f6f6       (backgrounds)
```

### Typography
- **Headings**: Montserrat 700/800
- **Body**: Lato 400/700, 18px (text-lg), line-height 1.75
- **Quotes**: Source Serif 4 italic
- **Reading column**: max-w-2xl (672px) centered

### Article Layout (Beehiiv-inspired)
- Narrow reading column for comfort
- Pull quotes with decorative quotation marks + teal left border
- Key Facts box (subtle gray background, two-column grid)
- Section dividers: thin lines with generous spacing
- Sources as numbered footnotes at article end
- NO badges, NO color-coded ratings, NO grading system

---

## FILE STRUCTURE

```
elect-righteous/
├── CLAUDE.md                          # THIS FILE — master reference
├── .github/workflows/deploy.yml       # GitHub Pages auto-deploy
│
├── agents/                            # 7-agent pipeline definitions
│   ├── election-finder/PROMPT.md + soul.md
│   ├── candidate-profiler/PROMPT.md + soul.md
│   ├── deep-scraper/PROMPT.md + soul.md
│   ├── opposition-research/PROMPT.md + soul.md
│   ├── media-extractor/PROMPT.md + soul.md
│   ├── integrity-analyzer/PROMPT.md + soul.md
│   └── report-generator/PROMPT.md + soul.md
│
├── memory/
│   ├── elections/                      # 24 election files
│   │   ├── SUMMARY-2026-hays-kansas.md
│   │   └── 2026-*.md (one per election/amendment)
│   ├── candidates/                    # 54 candidate folders
│   │   └── {slug}/
│   │       ├── raw-dump.md            # MASTER file — ALL intel consolidated
│   │       ├── profile.md             # Initial profile (some candidates)
│   │       ├── opposition-research.md # Separate adverse public-record findings
│   │       └── raw-intel.md           # Deep scraper output (some candidates)
│   └── knowledge/
│       ├── judeo-christian-framework.md
│       ├── kansas-election-law.md
│       ├── source-reliability.md
│       └── ruder-family-network.md
│
├── reports/                           # 28 formatted investigation reports
│   ├── *-complete-dossier.md          # Per-candidate deep dossiers
│   ├── *-investigation.md            # Multi-candidate investigations
│   ├── plain-english-voter-guide.md   # All races explained simply
│   ├── faith-church-investigation-2026-03-31.md
│   └── templates/                     # Report templates (legacy)
│
├── plans/
│   ├── PLAN.md                        # Master implementation plan
│   ├── ui-plan.md                     # Original UI design plan
│   ├── agent-development.md           # Agent dev sequence
│   └── website-build-plan.md          # Detailed website architecture
│
├── scripts/
│   ├── launch.command                 # One-click pipeline runner
│   └── consolidate-intel.sh           # Merge reports into raw-dump.md files
│
├── ui/                                # Next.js website
│   ├── package.json
│   ├── next.config.ts                 # Static export + GitHub Pages basePath
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── .gitignore
│   ├── design-extraction/
│   │   ├── celebratejesus-analysis.md # Full design extraction
│   │   └── beehiiv-article-patterns.md # Editorial design patterns
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx             # Root layout (fonts, header, footer)
│   │   │   ├── globals.css            # Tailwind + design tokens
│   │   │   ├── page.tsx               # Homepage
│   │   │   ├── about/page.tsx
│   │   │   ├── elections/page.tsx      # Elections listing
│   │   │   ├── elections/[slug]/page.tsx # Election detail
│   │   │   ├── candidates/page.tsx     # Candidates listing
│   │   │   └── candidates/[slug]/
│   │   │       ├── page.tsx           # Server wrapper (generateStaticParams)
│   │   │       └── client.tsx         # Client article component
│   │   ├── components/
│   │   │   ├── layout/ (site-header, site-footer, container)
│   │   │   └── ui/ (badge, candidate-card, election-card, quote-block, etc.)
│   │   └── data/
│   │       ├── candidates.ts          # ALL candidate data (TypeScript)
│   │       └── elections.ts           # ALL election data (TypeScript)
│   └── out/                           # Built static site (gitignored)
│
├── data/                              # Raw data directories
│   ├── sources/
│   ├── transcripts/
│   └── quotes/
│
└── Kansas-2026-*.md                   # Top-level investigation reports
```

---

## DATA MODEL (TypeScript)

```typescript
interface CandidateFull {
  slug: string;
  name: string;
  party: "R" | "D" | "I" | "NP";
  position: string;
  electionSlug: string;
  incumbent: boolean;
  occupation: string;

  // At A Glance
  born?: string;
  hometown?: string;
  religion?: string;
  education?: string;
  family?: string;
  district?: string;
  margin2024?: string;
  campaignWebsite?: string;

  // Editorial article sections
  whoTheyAre: string;           // Narrative bio
  theirRecord: string;          // Political record narrative
  whatYouShouldKnow: string[];  // Key facts as numbered items
  whereTheyWorship: string;     // Church/faith narrative
  church?: ChurchInfo;          // Structured church data with website URL

  // Quotes
  quotes: Quote[];              // Verbatim quotes with source/date/url/topic

  // Campaign Finance
  campaignFinance?: {
    totalRaised: string;
    narrative: string;          // Prose summary
    donors: Donor[];            // Name + Amount table
    undisclosed?: string;       // Note about unknown donors
    reportingPeriod: string;
    source: string;
  };

  // Sources — EVERY URL the agents found
  sources: Source[];            // title, url, publication, date
}
```

---

## COMPLETE CANDIDATE ROSTER (54 candidates)

### Federal Elections
| Candidate | Race | Party | Dossier Status |
|-----------|------|-------|---------------|
| Tracey Mann | KS-01 House | R | COMPLETE (template candidate) |
| Roger Marshall | US Senate | R | COMPLETE (811 lines) |
| Colin McRoberts | KS-01 House | D | Partial |
| Lauren Reinhold | KS-01 House | D | Partial |
| Craig Musser | KS-01 House | I | Partial |
| Jason Hart | US Senate | D | Partial |
| Patrick Schmidt | US Senate | D | Partial |
| Christy Cauble Davis | US Senate | D | Partial |
| Sandy Spidel Neumann | US Senate | D | Partial |
| Erik Murray | US Senate | D | Partial |
| Anne Parelkar | US Senate | D | Partial |
| Michael Soetaert | US Senate | D | Partial |
| Chase LaPorte | US Senate | R | Partial |

### State Elections — Governor (Open Seat)
| Candidate | Party | Dossier Status |
|-----------|-------|---------------|
| Scott Schwab | R | COMPLETE (887 lines) |
| Vicki Schmidt | R | COMPLETE (751 lines) |
| Ty Masterson | R | COMPLETE (730 lines) |
| Jeff Colyer | R | COMPLETE (940 lines) — grew up in Hays |
| Philip Sarnecki | R | Partial (in governor report) |
| Charlotte O'Hara | R | Partial |
| Stacy Rogers | R | Partial |
| Joy Eakins | R | Partial |
| Ethan Corson | D | Partial (in governor report) |
| Cindy Holscher | D | Partial |
| Marty Tuley | D | Partial |

### State Elections — Other
| Candidate | Race | Party | Dossier Status |
|-----------|------|-------|---------------|
| Kris Kobach | Attorney General | R | COMPLETE (705 lines) |
| Chris Mann | Attorney General | D | COMPLETE (573 lines) |
| Barb Wasinger | KS House 111 | R | COMPLETE (276 lines) |
| Pat Proctor | Secretary of State | R | Partial |
| Ken Rahjes | Secretary of State | R | Partial |
| Jennifer Day | Secretary of State | D | Partial |
| Sam Lane | Secretary of State | D | Partial |
| Daniel Hawkins | Insurance Commissioner | R | Partial |
| Dinah Sykes | Insurance Commissioner | D | Partial |

### Local — Hays City Commission
| Official | Position | Dossier Status |
|----------|----------|---------------|
| Mason Ruder | Mayor | COMPLETE (245 lines) |
| Alaina Cunningham | Vice Mayor | Partial |
| Shaun Musil | Commissioner | Partial |
| Sandy Jacobs | Commissioner | Partial |
| David Vilaysing | Commissioner | Partial |
| Toby Dougherty | City Manager | Partial |

### Local — Ellis County
| Official | Position | Dossier Status |
|----------|----------|---------------|
| Scott Braun | Sheriff | Partial |
| Aaron Cunningham | County Attorney | Partial |
| Bobbi Dreiling | Clerk/Election Officer | Partial |
| Neal Younger | Commissioner D2 | Partial |
| Nathan Leiker | Commissioner D3 | Partial |
| Michael Berges | Commissioner D1 | Partial |
| Vernon Ruder Jr | Treasurer | Partial |
| Rebecca Herzog | Register of Deeds | Minimal |

### Local — USD 489 School Board
| Official | Position | Dossier Status |
|----------|----------|---------------|
| Ken Brooks | President | COMPLETE (216 lines) — Celebration Community Church |
| Curt Vajnar | Vice President | Partial |
| Ruth Ruder | Member | Partial |
| Derek Yarmer | Member | Partial |
| Allen Park | Member | Partial |
| Jayme Goetz | Member | Partial |
| Craig Pallister | Member | Partial |
| Ron Wilson | Superintendent | Partial |

---

## KEY DISCOVERIES

1. **Ruder Family Dynasty**: Mason Ruder (Mayor) + Ruth Ruder (School Board VP) + Vernon Ruder Jr (County Treasurer) — one family, three government positions
2. **Ken Brooks**: USD 489 Board President, 14-19 year Children's Ministry leader at Celebration Community Church (celebratejesus.org) — the project's home church
3. **Jeff Colyer**: Governor candidate who GREW UP IN HAYS (father was a Hays dentist, TMP-Marian grad)
4. **Kris Kobach**: Held in contempt of court, $26K sanctions, ordered to take remedial law classes, $4M+ taxpayer cost from lost lawsuits
5. **Pat Proctor**: SoS candidate caught on video saying he wants to end early voting, called reporter "partisan hack"
6. **Tracey Mann**: Jan 6 objector (AZ + PA), sole Kansas holdout on ROTOR Act, 56% PAC funded, $1.2M from Crop Production + AIPAC
7. **Roger Marshall**: $1.2M Sarasota house vs. Kansas cabin, walked out of own Oakley town hall, called constituents "paid operatives"
8. **Daniel Hawkins**: Blocked prescription drug bill, overruled 104-17 by own party, 30 years in insurance → wants to regulate insurance
9. **Supreme Court Amendment**: Plan B after 2022 abortion amendment failed 59-41, dark money group spent $802K without disclosing donors
10. **Aaron Cunningham**: Resumed marijuana prosecution his predecessor had paused

---

## CRITICAL RULES

1. **NO GRADING SYSTEM** — No Strong/Moderate/Weak badges. No red/green flags with color coding. No consistency ratings. Just present the facts beautifully.
2. **EVERY CANDIDATE GETS EQUAL TREATMENT** — The long-shot Democrat in KS-01 gets the same level of research as the incumbent. Nobody is skipped.
3. **EVERY SOURCE CITED** — Every claim must trace to a URL. Every URL the agents found goes in the sources section.
4. **VERBATIM QUOTES** — Exact words only. Never paraphrase and present as a quote.
5. **CHURCH WEBSITES LINKED** — If we know where someone worships, link to the church's website.
6. **DONOR TABLE** — Campaign finance shows narrative intro + clean table (Name | Amount) + undisclosed notes.
7. **PLAIN ENGLISH** — Write for an 8th-grade reading level. No jargon. No political insider language.
8. **THEOLOGICAL LENS** — Conservative Protestant, non-denominational, Baptist-leaning, 2-3 point Calvinist. Not preachy. Separate recommendations section from raw data.
9. **GITHUB PAGES** — No custom domain. Deploy to tpreisser.github.io/elect-righteous/ via GitHub Actions.
10. **STATIC EXPORT** — Next.js output: "export". No server runtime. All data baked in at build time.

---

## HOW TO BUILD & DEPLOY

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous/ui
npm install          # First time only
npm run build        # Builds static site to out/
npm run dev          # Local dev server
git add -A && git commit -m "message" && git push   # Auto-deploys via Actions
```

### GitHub Actions Workflow
Push to `main` → `.github/workflows/deploy.yml` → npm ci → next build → deploy to Pages

### basePath
`next.config.ts` sets `basePath: "/elect-righteous"` in production for GitHub Pages subdirectory.

---

## HOW TO RUN THE INVESTIGATION PIPELINE

```bash
cd /Users/tylerpreisser/Desktop/elect-righteous
./scripts/launch.command "Hays, Kansas"
```

Or manually: `claude -p "Investigate all upcoming elections for Hays, Kansas"`

### Re-consolidate after new reports
```bash
bash scripts/consolidate-intel.sh
```

---

## AGENT ARCHITECTURE

Each agent has `PROMPT.md` (protocol) and `soul.md` (learnings that evolve after each run) in `agents/{name}/`.

| Agent | Purpose | Status |
|-------|---------|--------|
| Election Finder | Discover all elections for a location | Complete — soul.md updated |
| Candidate Profiler | Identify all candidates per election | Complete |
| Deep Scraper | 15-pass parallel internet scrub per candidate | Complete |
| Media Extractor | Find/transcribe video, audio, interviews | Not yet run |
| Integrity Analyzer | Analyze record against values framework | Not yet run |
| Report Generator | Compile editorial reports | Not yet run (manual reports used) |
