# AGENTS.md — UI Directory (Next.js Website)

## Quick Start

```bash
npm install && npm run build
```

## Stack

Next.js 16.2.1, React 19, Tailwind v4, Framer Motion 12, Lucide React, TypeScript strict mode, static export to GitHub Pages.

## Key Constraint

`generateStaticParams()` CANNOT coexist with `"use client"` in the same file. Split into:
- `page.tsx` — server component with generateStaticParams + data fetching
- `client.tsx` — client component with useState/interactivity

## Design System (globals.css)

Colors: `--color-navy: #10405D`, `--color-teal: #1cc3af`, `--color-gold: #C4922A`, `--color-charcoal: #1b1c1c`
Fonts: Montserrat (headings), Lato (body), Source Serif 4 (quotes)
Article width: `max-w-2xl` (672px) centered
Body text: 18px, line-height 1.75

CSS utility classes: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.section-navy`, `.section-light`, `.card`, `.container-main`, `.hero-overlay`

## NO grading components

Do NOT use or import: `values-badge.tsx`, `consistency-badge.tsx`, `flag-alert.tsx`, `values-alignment-chart.tsx`, `comparison-table.tsx`. These are deprecated and should be deleted.

## Data Files

- `src/data/candidates.ts` — ALL candidate data. Tracey Mann is the template. See `CandidateFull` interface.
- `src/data/elections.ts` — ALL election data with `plainEnglish` and `whyItMatters` fields.

## Article Page Pattern

`src/app/candidates/[slug]/page.tsx` (server) → fetches data → passes to `client.tsx` (client) → renders editorial article with:
1. Navy header (name, party, position)
2. Key Facts box (gray bg, two-column grid)
3. Who They Are (narrative)
4. Their Record (narrative)
5. In Their Own Words (pull quotes with teal left border)
6. Follow the Money (narrative + donor table)
7. What You Should Know (numbered observations)
8. Where They Worship (narrative + church card with website link)
9. Sources (numbered footnotes — ALL URLs from investigation)

## Build Output

`next.config.ts`: `output: "export"`, `basePath: "/elect-righteous"` (production), `trailingSlash: true`, `images: { unoptimized: true }`

Output goes to `out/` directory, deployed via GitHub Actions.
