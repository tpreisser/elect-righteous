# Beehiiv Newsletter Article Design Patterns
## Forensic Extraction for Elect Righteous Candidate Dossier Presentation
### Extracted: 2026-03-31

---

# PURPOSE

Transform 500-900 line candidate dossiers into beautiful, readable, editorial-quality web articles. The goal is the reading experience of a well-designed newsletter or magazine piece -- NOT a database, report card, or grading system.

**No scores. No badges. No grades. Just clean, authoritative, beautiful information.**

---

# TABLE OF CONTENTS

1. [Beehiiv Platform Technical Foundation](#1-beehiiv-platform-technical-foundation)
2. [Typography System](#2-typography-system)
3. [Content Width & Reading Column](#3-content-width--reading-column)
4. [Heading Hierarchy](#4-heading-hierarchy)
5. [Body Text & Paragraphs](#5-body-text--paragraphs)
6. [Blockquotes & Pull Quotes](#6-blockquotes--pull-quotes)
7. [Callout Boxes](#7-callout-boxes)
8. [Section Dividers & Content Breaks](#8-section-dividers--content-breaks)
9. [Lists (Bullet & Numbered)](#9-lists-bullet--numbered)
10. [Links & Source Citations](#10-links--source-citations)
11. [Images & Visual Elements](#11-images--visual-elements)
12. [Color System](#12-color-system)
13. [Spacing & White Space](#13-spacing--white-space)
14. [Mobile Responsive Patterns](#14-mobile-responsive-patterns)
15. [Newsletter Design Exemplars](#15-newsletter-design-exemplars)
16. [Application to Candidate Dossiers](#16-application-to-candidate-dossiers)

---

# 1. Beehiiv Platform Technical Foundation

## Tech Stack (Extracted from Source)
- **Framework**: Next.js (React-based SSR with client hydration)
- **CSS**: Tailwind CSS utility classes + CSS custom properties
- **Fonts loaded**: Satoshi (variable weight) and Clash Grotesk (variable weight) -- used for the beehiiv.com blog/marketing site itself
- **Post content fonts**: Inter as default body/heading font (configurable per publication)
- **Image CDN**: Cloudflare image optimization (`media.beehiiv.com/cdn-cgi/image/`)
- **Responsive images**: `srcSet` with 640w / 1080w breakpoints

## CSS Custom Properties System (Extracted from Actual Source)
```css
:root {
  --wt-background-color: #FFFFFF;
  --wt-primary-color: #2F39BA;           /* Brand accent */
  --wt-secondary-color: #ffffff;
  --wt-tertiary-color: #FFFFFF;
  --wt-text-on-background-color: #060419; /* Near-black body text */
  --wt-text-on-primary-color: #060419;
  --wt-text-on-secondary-color: #060419;
  --wt-text-on-tertiary-color: #222222;
  --wt-border-radius: 6px;

  /* Font stacks (CSS var-based, configurable per publication) */
  --wt-body-font: "Inter", ui-sans-serif, system-ui, -apple-system,
                  BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                  Arial, "Noto Sans", sans-serif;
  --wt-header-font: "Inter", ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                    Arial, "Noto Sans", sans-serif;
  --wt-button-font: "Inter", ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                    Arial, "Noto Sans", sans-serif;
}
```

## Utility Classes (Extracted from Source)
```css
.wt-body-font   { font-family: var(--wt-body-font); }
.wt-header-font { font-family: var(--wt-header-font); }
.wt-button-font { font-family: var(--wt-button-font); }
.bg-wt-background { background-color: var(--wt-background-color); }
.text-wt-text-on-background { color: var(--wt-text-on-background-color); }
.border-wt-primary { border-color: var(--wt-primary-color); }
.rounded-wt { border-radius: var(--wt-border-radius); }
```

---

# 2. Typography System

## Font Selection Philosophy

Beehiiv defaults to **Inter** -- the gold standard for screen readability. It's a geometric sans-serif designed specifically for computer screens with:
- Open apertures for small-size legibility
- Tall x-height for readability at body sizes
- Tabular and proportional numeral options
- Superb weight range (100-900)

The beehiiv marketing site itself uses **Satoshi** (geometric sans, Indian Type Foundry) and **Clash Grotesk** (contrast grotesque) for differentiation. But the actual newsletter article content defaults to Inter.

## Font Stack Priority
```
"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
```

## Type Scale (Extracted from Beehiiv Post Content)
| Element | Font Size | Line Height | Weight | Notes |
|---------|-----------|-------------|--------|-------|
| H1 (Post Title) | 36px | 2.5rem (40px) | 700 (Bold) | Used only for the article title |
| H2 (Section Head) | 20px-24px | 1.75rem (28px) | 700 (Bold) | Primary section divider |
| H3 | 18px | 1.5rem (24px) | 600 (Semi-bold) | Subsection |
| Body text | 16px | 1.6 (25.6px) | 400 (Regular) | Base paragraph size |
| Small text / meta | 14px (0.875rem) | 1.25rem (20px) | 400-500 | Bylines, dates, captions |
| Caption text | 12px-14px | 1.25rem | 400 | Image captions, footnotes |

## Critical Line Height Rule
Beehiiv enforces this in its rendered posts:
```css
p span[style*="font-size"] { line-height: 1.6; }
```
This means ALL paragraph text, regardless of inline font-size overrides, maintains a 1.6 line-height ratio. This is the single most important readability rule -- it prevents cramped text and ensures comfortable reading.

## General Typography Best Practice Ranges
- **Headlines**: line-height of 1.0-1.15 (tight -- headlines don't need breathing room between lines)
- **Body copy**: line-height of 1.5-1.6 (generous -- lets the eye return comfortably to the next line)
- **Small text**: line-height of 1.4-1.5 (smaller text needs relatively more space between lines)

---

# 3. Content Width & Reading Column

## Beehiiv Blog/Web Article Container (Extracted from Source)
```html
<div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
```

This translates to:
- **max-width: 768px** (Tailwind's `max-w-screen-md`)
- **Centered**: `mx-auto`
- **Horizontal padding**: 16px mobile, 24px tablet, 32px desktop
- **Top/bottom padding**: 32px

## Beehiiv Email Content Width
- **Recommended**: 600px (industry standard, all clients render correctly)
- **Beehiiv default**: 670px (slightly wider than standard)
- **Embedded content blocks**: `max-width: 520px` (narrower for visual focus)

## Reading Column Theory
The optimal reading column is 45-85 characters per line, with 65-75 characters being the "comfort zone." At 16px body text:
- 600px container = ~65-70 characters/line (ideal)
- 680px container = ~75-80 characters/line (still good)
- 768px container (with 32px padding each side) = ~704px actual content = ~78 chars (good)

## For Candidate Dossiers: Recommended Width
```css
/* Primary reading column */
.article-content {
  max-width: 720px;      /* Slightly narrower than screen-md for optimal reading */
  margin: 0 auto;
  padding: 0 24px;       /* 24px side padding minimum */
}

/* On mobile */
@media (max-width: 640px) {
  .article-content {
    padding: 0 16px;     /* Tighter on mobile but still breathable */
  }
}

/* Wide elements (images, comparison tables) can break out */
.article-content .wide {
  max-width: 900px;
  margin-left: -90px;    /* Break out of reading column */
  margin-right: -90px;
}
```

---

# 4. Heading Hierarchy

## Beehiiv's Approach
Beehiiv follows a strict heading hierarchy:
- **H1**: Reserved for the post title ONLY (one H1 per page, SEO best practice)
- **H2**: Primary section headers (the main structural dividers of the article)
- **H3-H6**: Available for sub-sections

In the editor, H1 is NOT available as a content heading -- only H2 and below are offered. This enforces proper document structure.

## Extracted Heading Styles

### H1 (Article Title Only)
```css
h1 {
  font-size: 36px;
  line-height: 2.5rem;     /* 40px */
  font-weight: 700;
  padding-bottom: 2rem;    /* 32px space below title */
  color: var(--wt-text-on-background-color); /* #060419 */
}
```

### H2 (Primary Section Headers)
```css
h2 {
  font-size: 20px;         /* Some publications use 24px */
  line-height: 1.75rem;    /* 28px */
  font-weight: 700;
  /* Generous space above, moderate below */
  margin-top: 2rem;        /* 32px */
  margin-bottom: 0.75rem;  /* 12px */
}
```

Morning Brew style variant: H2 sections use **ALL CAPS**, different color, and distinct heading sizes to create visual scanning anchors.

### H3 (Sub-sections)
```css
h3 {
  font-size: 18px;
  line-height: 1.5rem;     /* 24px */
  font-weight: 600;
  margin-top: 1.5rem;      /* 24px */
  margin-bottom: 0.5rem;   /* 8px */
}
```

## For Candidate Dossiers: Recommended Heading Treatment

The dossiers need a heading hierarchy that creates scannable "chapters" in a long document:

```css
/* Article title: candidate name */
.dossier-title {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

/* Subtitle: position they're running for */
.dossier-subtitle {
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 400;
  color: #6b7280;          /* Muted gray */
  line-height: 1.4;
  margin-bottom: 32px;
}

/* Major sections: "Background", "Voting Record", "Financial Connections" */
.section-heading {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-top: 48px;        /* Big gap above = clear section break */
  margin-bottom: 16px;
  padding-top: 24px;       /* Extra breathing room after divider */
}

/* Sub-sections within a section */
.subsection-heading {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 600;
  line-height: 1.3;
  margin-top: 32px;
  margin-bottom: 12px;
}
```

---

# 5. Body Text & Paragraphs

## Beehiiv Body Text (Extracted)
```css
body {
  font-family: var(--wt-body-font);
  font-size: 16px;
  line-height: 1.6;
  color: var(--wt-text-on-background-color); /* #060419 near-black */
}

/* Paragraph spacing */
p {
  margin-bottom: 1rem;     /* 16px between paragraphs */
}
```

## Key Body Text Observations

1. **Color is near-black, not pure black**: `#060419` (extremely dark navy) instead of `#000000`. This reduces eye strain while maintaining strong contrast. Other common choices:
   - `#1a1a2e` (dark navy-black)
   - `#222222` (used for tertiary text)
   - `#333333` (common editorial gray-black)

2. **Paragraph spacing is 1rem (16px)**: Enough to visually separate paragraphs without creating a "listicle" feel. NOT double-spaced.

3. **No first-line indent**: Modern web editorial uses paragraph spacing (margin-bottom) instead of indentation. This is universal across Beehiiv, Substack, Medium, and all modern platforms.

4. **Short paragraphs are king**: Newsletter writing style favors 2-4 sentence paragraphs. One-sentence paragraphs are used for emphasis. This is critical for mobile readability where a 5-line desktop paragraph becomes a 12-line wall of text.

## For Candidate Dossiers: Paragraph Style
```css
.dossier-content p {
  font-size: 17px;         /* Slightly larger than default for long reads */
  line-height: 1.7;        /* Extra generous for long-form */
  color: #1a1a2e;          /* Dark but not pure black */
  margin-bottom: 1.25rem;  /* 20px -- bit more space for dense content */
  max-width: 65ch;         /* Character-based width limit for readability */
}
```

---

# 6. Blockquotes & Pull Quotes

## Beehiiv Quote System

Beehiiv provides **3 distinct blockquote variants**:

### Variant 1: Classic Blockquote (Default)
The original blockquote -- a simple visual offset for quoted text.
```css
blockquote.classic {
  font-family: var(--wt-body-font);
  font-style: italic;
  padding: 16px 24px;
  margin: 24px 0;
  border-left: none;
  background: transparent;
  color: inherit;
}
```

### Variant 2: Left Border Blockquote
The most common editorial style -- a thick left border signals "this is quoted."
```css
blockquote.left-border {
  border-left: 3px solid var(--wt-secondary-color);  /* Or --wt-primary-color */
  padding-left: 20px;
  margin: 24px 0;
  font-style: italic;
  color: inherit;
}
```

### Variant 3: Fancy/Styled Quote
Large decorative quote marks, centered text, prominent background.
```css
blockquote.fancy {
  background-color: var(--wt-primary-color);  /* Or subtle tint */
  padding: 32px;
  border-radius: var(--wt-border-radius);
  text-align: center;
  font-size: 1.125rem;    /* 18px -- slightly larger */
  font-weight: 500;
  margin: 32px 0;
}
```

## Beehiiv Quote Customization Options
For each variant, the Style Panel allows customization of:
- Font family, weight, size, color for quote text
- Text alignment (left, center, right)
- Background color
- Border color (secondary color controls blockquote borders)

## Pull Quote Pattern (Editorial Best Practice)

Pull quotes are different from blockquotes. A blockquote is a direct citation. A pull quote is an excerpt FROM THE ARTICLE ITSELF, pulled out and displayed prominently to break up long text and highlight key points.

```css
.pull-quote {
  font-size: 1.5rem;       /* 24px -- significantly larger */
  line-height: 1.4;
  font-weight: 500;
  color: #1a1a2e;
  text-align: center;
  padding: 40px 32px;
  margin: 48px 0;
  border-top: 2px solid #e5e7eb;
  border-bottom: 2px solid #e5e7eb;
  font-style: normal;      /* Pull quotes are NOT italic */
}
```

## For Candidate Dossiers: Quote Treatment

Two types of quotes will appear in dossiers:

### Direct Candidate Quotes (What they actually said)
```css
.candidate-quote {
  font-size: 1.125rem;     /* 18px */
  line-height: 1.6;
  font-style: italic;
  color: #374151;
  border-left: 4px solid #10405D;  /* CelebrateJesus navy */
  padding: 16px 24px;
  margin: 32px 0;
  background-color: #f8fafc;       /* Very subtle gray background */
  border-radius: 0 6px 6px 0;
}

.candidate-quote .attribution {
  font-style: normal;
  font-size: 0.875rem;    /* 14px */
  color: #6b7280;
  margin-top: 8px;
  display: block;
}
```

### Key Finding Pull Quotes (Highlighting important discoveries)
```css
.key-finding {
  font-size: 1.25rem;      /* 20px */
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  padding: 32px 24px;
  margin: 40px 0;
  border-top: 1px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
  color: #1f2937;
}
```

---

# 7. Callout Boxes

## Beehiiv Callout Patterns

Beehiiv uses **colored backgrounds** as the primary callout mechanism. From their design guide: "Whenever there's a call to action, a key promotion, or other news that you want to stand out, putting it on a colored background will draw the eye."

### Background Highlight Block
```css
.callout-box {
  background-color: #f0f4ff;   /* Very light blue tint */
  padding: 24px;
  border-radius: 6px;          /* --wt-border-radius */
  margin: 24px 0;
}

.callout-box p {
  margin-bottom: 8px;
}

.callout-box p:last-child {
  margin-bottom: 0;
}
```

### Bordered Callout (Alternative)
```css
.callout-bordered {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 24px;
  margin: 24px 0;
}
```

## For Candidate Dossiers: Information Callout Types

### "At a Glance" Summary Box (Top of each section)
```css
.at-a-glance {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px 28px;
  margin: 24px 0 32px 0;
}

.at-a-glance h4 {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9ca3af;
  margin-bottom: 12px;
}

.at-a-glance ul {
  list-style: none;
  padding: 0;
}

.at-a-glance li {
  padding: 4px 0;
  font-size: 0.9375rem;
  color: #374151;
}
```

### "Source Note" Callout (For important sourcing context)
```css
.source-note {
  background-color: #fffbeb;   /* Warm cream/amber tint */
  border-left: 3px solid #d97706;
  padding: 16px 20px;
  margin: 24px 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #92400e;
  border-radius: 0 6px 6px 0;
}
```

### "Context" Callout (Background information that helps understand the main text)
```css
.context-box {
  background-color: #f0f9ff;   /* Light blue */
  border-radius: 8px;
  padding: 20px 24px;
  margin: 24px 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #1e3a5f;
}

.context-box .context-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #3b82f6;
  margin-bottom: 8px;
}
```

---

# 8. Section Dividers & Content Breaks

## Beehiiv Divider System

Beehiiv offers customizable content breaks with these properties:
- **Color**: Controlled by Secondary color
- **Style**: Solid, dashed, dotted, or custom image
- **Thickness**: Adjustable in pixels
- **Width**: Percentage of container width
- **Gap**: Space above and below the divider

### Default Divider
```css
.content-break {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 32px 0;
  width: 100%;
}
```

### Centered Short Divider (More Editorial)
```css
.content-break-short {
  border: none;
  border-top: 2px solid #d1d5db;
  width: 60px;
  margin: 40px auto;
}
```

## Newsletter Divider Patterns from Exemplars

### Morning Brew: Section breaks with ALL-CAPS colored headings
```
──────────────────────────
MARKETS
──────────────────────────
```

### Milk Road: Custom mascot images as dividers
They replace standard `<hr>` with branded illustration images of their milk carton mascot, creating personality and brand recognition.

### Editorial standard: Three-dot divider or fleuron
```css
.divider-dots::after {
  content: "* * *";
  display: block;
  text-align: center;
  font-size: 1.25rem;
  color: #9ca3af;
  letter-spacing: 1em;
  margin: 40px 0;
}
```

## For Candidate Dossiers: Section Break Treatment
```css
/* Major section break (between "Background" and "Voting Record") */
.section-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 56px 0 0 0;     /* Large gap above, heading provides gap below */
  width: 100%;
}

/* Minor section break (between subsections) */
.subsection-divider {
  border: none;
  border-top: 1px solid #f3f4f6;  /* Very subtle */
  width: 40%;
  margin: 32px auto;
}
```

---

# 9. Lists (Bullet & Numbered)

## Beehiiv List Styling (Extracted)
```css
/* Ordered lists */
ol {
  color: var(--wt-text-on-background-color) !important;
  padding-top: 12px;
}

/* List item spacing */
li {
  margin: 5px 0px 0px 0px;
}

/* Table cells in lists */
.table-h { padding: 5px; }
.table-c { padding: 5px; }
```

## Best Practice List Styling for Long-Form

### Bullet Lists
```css
ul {
  padding-left: 1.5rem;
  margin: 16px 0;
}

ul li {
  margin-bottom: 8px;
  line-height: 1.6;
  padding-left: 4px;
}

ul li::marker {
  color: #9ca3af;          /* Muted bullet color */
}
```

### Numbered Lists
```css
ol {
  padding-left: 1.5rem;
  margin: 16px 0;
}

ol li {
  margin-bottom: 8px;
  line-height: 1.6;
  padding-left: 4px;
}

ol li::marker {
  color: #6b7280;
  font-weight: 600;
}
```

## For Candidate Dossiers: List Treatment

Dossiers will have many lists (endorsements, donors, voting records). They need to be scannable but not cluttered.

```css
/* Standard information list */
.dossier-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f3f4f6;  /* Subtle separator between items */
  font-size: 0.9375rem;
  line-height: 1.5;
}

.dossier-list li:last-child {
  border-bottom: none;
}

/* Donor/endorsement list with meta info */
.detail-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
  border-bottom: 1px solid #f3f4f6;
}

.detail-list .label {
  font-weight: 500;
  color: #1f2937;
}

.detail-list .value {
  color: #6b7280;
  font-size: 0.875rem;
}
```

---

# 10. Links & Source Citations

## Beehiiv Link Styling
From Morning Brew pattern analysis: links are **underlined and colorized** to stand out clearly against body text. Default settings adjusted in design lab.

```css
a {
  color: var(--wt-primary-color);    /* #2F39BA for beehiiv default */
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  opacity: 0.8;
}
```

## For Candidate Dossiers: Source Citation System

Sources are critical to credibility but must not clutter the reading experience. Three approaches to combine:

### Inline Source Links (For key claims)
```css
.source-link {
  color: #2563eb;               /* Blue, clearly a link */
  text-decoration: none;
  border-bottom: 1px dotted #93c5fd;
  font-size: inherit;
  transition: border-color 0.15s;
}

.source-link:hover {
  border-bottom-color: #2563eb;
  border-bottom-style: solid;
}
```

### Superscript Reference Numbers (For dense factual passages)
```css
.source-ref {
  font-size: 0.7em;
  vertical-align: super;
  line-height: 0;              /* Prevent line height disruption */
  color: #2563eb;
  cursor: pointer;
  font-weight: 500;
}

.source-ref:hover {
  text-decoration: underline;
}
```

### End-of-Section Source Block (Collapsible)
```css
.sources-block {
  background-color: #f9fafb;
  border-radius: 6px;
  padding: 16px 20px;
  margin: 24px 0 40px 0;
  font-size: 0.8125rem;        /* 13px */
  line-height: 1.5;
}

.sources-block summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
  margin-bottom: 8px;
}

.sources-block a {
  color: #6b7280;
  word-break: break-all;
}

.sources-block li {
  margin-bottom: 4px;
}
```

---

# 11. Images & Visual Elements

## Beehiiv Image Handling

### Email Dimensions
- **Recommended image width**: 600-650px
- **Beehiiv default content**: 670px wide
- **Image CDN**: Cloudflare with auto-format (WebP/AVIF) and quality optimization
- **Responsive srcSet**: 640w and 1080w versions generated automatically

### Image Captioning
```css
.image-caption {
  font-family: var(--wt-body-font);
  font-size: 12px-14px;
  color: #6b7280;
  text-align: center;
  padding-top: 8px;
  font-style: italic;
}
```

### Image Padding
Beehiiv allows customization of image padding and gap in pixels -- the space between the image and surrounding content.

## For Candidate Dossiers: Image Treatment

### Candidate Photo (Hero)
```css
.candidate-hero-image {
  width: 100%;
  max-width: 720px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
}
```

### Inline Evidence Image (Screenshots, documents)
```css
.evidence-image {
  max-width: 100%;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  margin: 24px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.evidence-caption {
  font-size: 0.8125rem;
  color: #9ca3af;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}
```

---

# 12. Color System

## Beehiiv Default Palette (Extracted)
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FFFFFF` | Page background |
| Primary | `#2F39BA` | Brand accent, links, buttons |
| Text on Background | `#060419` | Body text (near-black) |
| Text on Tertiary | `#222222` | Secondary text |
| Border Radius | `6px` | Consistent rounding |

## Beehiiv Marketing Site Colors (from Tailwind classes)
| Name | Usage |
|------|-------|
| `cyber-ink` | Dark text (`#060419`) |
| `fusion-blue` | Brand blue (icons, links) |
| `slate-50` | Hover backgrounds |
| `gray-500` | Muted text |
| `gray-400` | Borders, chevrons |

## For Candidate Dossiers: Color Palette

Merge the CelebrateJesus palette with newsletter editorial standards:

```css
:root {
  /* Primary palette (from CelebrateJesus) */
  --color-navy: #10405D;
  --color-charcoal: #2a2929;

  /* Editorial text colors */
  --color-text-primary: #1a1a2e;     /* Body text */
  --color-text-secondary: #4b5563;   /* Less prominent text */
  --color-text-muted: #9ca3af;       /* Captions, meta, labels */

  /* Background tints */
  --color-bg-page: #FFFFFF;
  --color-bg-subtle: #f9fafb;        /* Callout backgrounds */
  --color-bg-warm: #fffbeb;          /* Warning/note backgrounds */
  --color-bg-cool: #f0f9ff;          /* Info/context backgrounds */

  /* Borders & dividers */
  --color-border-default: #e5e7eb;
  --color-border-subtle: #f3f4f6;

  /* Accent (use sparingly) */
  --color-accent: #10405D;           /* Navy for key accents */
  --color-link: #2563eb;             /* Standard web blue for links */
}
```

### Color Usage Rules
1. **Background is white.** Period. No dark mode for public voter information. Maximum accessibility.
2. **Body text is near-black** (`#1a1a2e`), never pure `#000000`.
3. **Color is used for structure, not decoration.** A left-border on a quote, a tinted callout background, a colored section label. Never colored body text.
4. **Links are blue** (`#2563eb`). Don't reinvent this. Everyone knows blue = clickable.
5. **Muted gray** (`#9ca3af`) for meta information: dates, source labels, captions, bylines.
6. **Accent navy** (`#10405D`) only for: section heading accents, blockquote borders, key structural elements. Maximum 3-4 uses per screen.

---

# 13. Spacing & White Space

## Beehiiv Spacing System (Extracted)

### Container Spacing
```css
/* Article wrapper */
padding: 32px (py-8);            /* Top/bottom */
padding: 16px / 24px / 32px;     /* Left/right at mobile/tablet/desktop */
```

### Content Element Spacing
```css
/* Between paragraphs */
margin-bottom: 16px;             /* 1rem */

/* Below H1 title */
padding-bottom: 32px;            /* 2rem */

/* List items */
margin: 5px 0 0 0;              /* Tight list spacing */

/* Section padding in content blocks */
padding: 16px;                   /* p-4 utility class */

/* Embedded blocks margin */
padding-bottom: 12px;            /* Between stacked blocks */
padding-bottom: 4px;             /* Between tight blocks */
```

### Content Break Gaps
From beehiiv's divider system: adjustable "gap" property controls space above and below dividers. The default is approximately 32px above and below.

## White Space Philosophy

The key insight from all high-performing newsletters: **white space is not wasted space -- it is the single most important design element for readability.**

Key principles:
1. **Section gaps should be 2-3x paragraph gaps**: If paragraphs have 16px between them, sections should have 40-56px.
2. **Headings need asymmetric spacing**: More space ABOVE (separating from previous section) than BELOW (connecting to their content). Ratio: ~2:1.
3. **Callout boxes need breathing room**: At least 24px margin on all sides.
4. **Images need generous surrounding space**: 32-40px above and below.

## For Candidate Dossiers: Spacing Scale

```css
/* Consistent spacing scale */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;

/* Semantic spacing */
--space-paragraph: 20px;          /* Between paragraphs */
--space-section: 56px;            /* Between major sections */
--space-subsection: 32px;         /* Between subsections */
--space-heading-above: 40px;      /* Space above a heading */
--space-heading-below: 16px;      /* Space below a heading */
--space-callout: 32px;            /* Around callout boxes */
--space-image: 32px;              /* Around images */
--space-quote: 32px;              /* Around blockquotes */
```

---

# 14. Mobile Responsive Patterns

## Beehiiv Responsive Approach (Extracted)
```css
/* Mobile breakpoint */
@media only screen and (max-width: 667px) {
  .mob-stack {
    display: block !important;    /* Stack columns vertically */
  }
}

/* Tailwind responsive classes used */
sm:px-6                           /* 24px padding at 640px+ */
lg:px-8                           /* 32px padding at 1024px+ */
sm:left-4 sm:right-[unset]       /* Repositioning on tablet */
sm:gap-2 sm:p-2 sm:pr-3          /* Spacing adjustments */
```

## Mobile Design Principles for Long-Form

1. **Font size stays at 16px minimum** on mobile. Never go smaller. iOS Safari zooms the page if input fields are smaller than 16px, and body text should be equally readable.

2. **Line height increases slightly** on mobile: 1.6 minimum, 1.7 preferred for smaller screens.

3. **Paragraph length matters more on mobile**: A 5-line desktop paragraph becomes a 10-12 line wall on mobile. Keep paragraphs SHORT (2-4 sentences max).

4. **Side padding**: Minimum 16px on mobile. 12px is too cramped. 24px is luxurious if you can spare it.

5. **Images go full-width** on mobile: `width: 100%; height: auto;`

6. **Callout boxes reduce padding** on mobile: from 24px to 16px.

7. **Tables become stacked cards** on mobile: horizontal scrolling is acceptable for data tables, but consider stacking for comparison data.

## For Candidate Dossiers: Responsive Strategy
```css
@media (max-width: 640px) {
  .dossier-title {
    font-size: 28px;
  }

  .section-heading {
    font-size: 20px;
    margin-top: 40px;
  }

  .dossier-content p {
    font-size: 16px;
    line-height: 1.7;
  }

  .candidate-quote {
    padding: 12px 16px;
    font-size: 1rem;
  }

  .callout-box,
  .at-a-glance,
  .context-box {
    padding: 16px;
    margin: 16px 0;
  }

  .sources-block {
    padding: 12px 16px;
  }

  .detail-list li {
    flex-direction: column;
    gap: 2px;
  }
}
```

---

# 15. Newsletter Design Exemplars

## Newsletters Referenced for Design Patterns

### Morning Brew (morningbrew.com)
- **Fonts**: Sohne (Kraftig 500 weight) -- custom, premium geometric sans
- **Style**: Clean, scannable, ALL-CAPS section headers in brand color
- **Dividers**: Full-width lines between sections with colored category labels
- **Tone**: Professional-casual, business-forward
- **Key Pattern**: Section-based architecture with strong visual anchors at each transition

### Milk Road (milkroad.com, on beehiiv)
- **Style**: Fun, branded, blue border around content
- **Dividers**: Custom mascot illustrations instead of standard `<hr>` lines
- **Key Pattern**: Tight sectioning that makes long emails feel short. Clear mascot/logo dividers between sections with bold titles.
- **Takeaway**: Breaking content into labeled sections with visual dividers dramatically reduces cognitive load

### Big Desk Energy (bigdeskenergy.com, on beehiiv)
- **Style**: Retro Windows 98 aesthetic -- highly custom, boundary-pushing
- **Key Pattern**: Custom Canva-designed headers per edition, branded callout sections, GIF-based interactive elements
- **Takeaway**: Custom header images per article/section create immediate visual interest

### The Hustle (thehustle.co)
- **Style**: Bold, direct, data-driven
- **Key Pattern**: Data visualization inline with editorial text, chart-like callouts
- **Takeaway**: Numbers and data presented visually (not just as text) create engagement

### Payload (payloadspace.com, on beehiiv)
- **Style**: Magazine-like, changing visuals as you scroll
- **Key Pattern**: Visual variety throughout the article -- not just text/text/text but text/image/text/callout/text/data
- **Takeaway**: Vary the visual texture every 3-4 paragraphs to prevent reader fatigue

## Universal Pattern: The "3-4 Paragraph Rule"
Every high-performing newsletter breaks up content every 3-4 paragraphs with one of:
- A heading
- An image
- A pull quote
- A callout box
- A content divider
- A list
- A data point or statistic highlight

This is CRITICAL for 500-900 line candidate dossiers. A wall of text will not be read.

---

# 16. Application to Candidate Dossiers

## The Design Challenge

A candidate dossier contains:
- Biographical information
- Professional history
- Voting record (if incumbent)
- Campaign finance data (donors, amounts, patterns)
- Public statements and quotes
- Social media analysis
- Community involvement
- Endorsements received and given
- Legal/court records
- News coverage summary
- Analysis of consistency/contradictions
- Source citations (dozens to hundreds)

This is 500-900 lines of dense, factual, heavily-sourced content. Making this READABLE and BEAUTIFUL is the core challenge.

## Proposed Article Architecture

### Structure: "Magazine Feature" Format

```
[HERO IMAGE / CANDIDATE PHOTO]

[CANDIDATE NAME - H1]
[Subtitle: Position + Election + Date]
[Byline: "Elect Righteous Research Team | Published March 2026"]

[EXECUTIVE SUMMARY - 2-3 paragraph narrative hook]
  -- Who is this person in 30 seconds? Written like the opening of a
     magazine profile, not a bullet list. Draw the reader in.

---

[TABLE OF CONTENTS - Optional, linked]
  For 500+ line dossiers, a sticky or collapsible TOC helps navigation.

===========================
SECTION 1: BACKGROUND
===========================

[At-a-Glance box: key facts in a clean list]
  Born / Education / Career / Family / Party / Years in Office

[Narrative paragraphs with inline source links]
  Written in editorial third person. Factual but readable.
  Short paragraphs. One idea per paragraph.

[PULL QUOTE from an interview or speech]

[More narrative]

[Sources block: collapsible list of all sources for this section]

===========================
SECTION 2: WHAT THEY'VE DONE
===========================

[Voting record highlights - NOT a raw table dump]
  Narrative: "In 2023, Smith voted against HB 1234, the Small Business
  Relief Act, which would have..." -- tell the STORY of the vote.

[Callout box: Key Vote]
  A single important vote highlighted with context

[Campaign promises vs. actual record comparison]
  Written as narrative with pull quotes

[Sources block]

===========================
SECTION 3: FOLLOW THE MONEY
===========================

[Top donors list - clean, scannable]
[Donor pattern analysis - narrative]
[Callout box: Notable donor connection]
[Sources block]

===========================
SECTION 4: IN THEIR OWN WORDS
===========================

[Key quotes with full context]
[Social media statements]
[Interview excerpts]
[Sources block]

===========================
SECTION 5: COMMUNITY & CHARACTER
===========================

[Community involvement narrative]
[Endorsements received]
[How they treat people - sourced anecdotes]
[Sources block]

===========================
SECTION 6: THE FULL PICTURE
===========================

[Summary of consistency/contradictions found]
[Open questions that couldn't be answered]
[Transparency note about what sources were used]

===========================
COMPLETE SOURCE INDEX
===========================

[Every source used, numbered, with URLs and access dates]
```

## Key Design Principles for Dossiers

1. **NARRATIVE FIRST**: Write like a journalist, not a database admin. Every section should read like a magazine article, not a bulleted report.

2. **VISUAL RHYTHM**: Never go more than 3-4 paragraphs without a visual break (heading, quote, callout, image, list, or divider).

3. **PROGRESSIVE DISCLOSURE**: Don't dump everything at once. Use collapsible sections for dense data (full voting records, complete donor lists). Show highlights inline, details on demand.

4. **SOURCES ARE ACCESSIBLE BUT NOT INTRUSIVE**: Use superscript numbers for inline citations. Collapsible source blocks at end of each section. Full source index at the bottom.

5. **MOBILE IS PRIMARY**: Assume most readers will view on their phone. Short paragraphs, generous spacing, no horizontal scrolling.

6. **NO OPINION MASQUERADING AS DESIGN**: Do not use color coding that implies "good" (green) or "bad" (red). Do not use icons that suggest approval/disapproval. Present information cleanly. Let readers form their own conclusions.

7. **TYPOGRAPHY DOES THE HEAVY LIFTING**: With no scores or badges, the only tools for hierarchy are font size, weight, spacing, and position. Master these four levers.

## Complete CSS Foundation

```css
/* ========================================
   ELECT RIGHTEOUS: CANDIDATE DOSSIER
   Beehiiv-Inspired Editorial Article Styles
   ======================================== */

/* Base */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Root variables */
:root {
  /* Typography */
  --font-body: "Inter", ui-sans-serif, system-ui, -apple-system,
               BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
               Arial, sans-serif;
  --font-heading: var(--font-body);
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* Colors */
  --color-text: #1a1a2e;
  --color-text-secondary: #4b5563;
  --color-text-muted: #9ca3af;
  --color-bg: #ffffff;
  --color-bg-subtle: #f9fafb;
  --color-bg-warm: #fffbeb;
  --color-bg-cool: #f0f9ff;
  --color-border: #e5e7eb;
  --color-border-subtle: #f3f4f6;
  --color-accent: #10405D;
  --color-link: #2563eb;

  /* Spacing */
  --space-paragraph: 1.25rem;
  --space-section: 3.5rem;
  --space-subsection: 2rem;

  /* Layout */
  --content-width: 720px;
  --content-padding: 24px;
}

/* Article container */
.dossier {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--content-padding);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
.dossier h1 {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.dossier h2 {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-top: var(--space-section);
  margin-bottom: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
}

.dossier h3 {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 600;
  line-height: 1.3;
  margin-top: var(--space-subsection);
  margin-bottom: 12px;
}

/* Paragraphs */
.dossier p {
  margin-bottom: var(--space-paragraph);
}

/* Blockquotes */
.dossier blockquote {
  font-size: 1.0625rem;
  font-style: italic;
  color: #374151;
  border-left: 4px solid var(--color-accent);
  padding: 16px 24px;
  margin: 32px 0;
  background-color: var(--color-bg-subtle);
  border-radius: 0 6px 6px 0;
}

.dossier blockquote cite {
  display: block;
  font-style: normal;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-top: 8px;
}

/* Pull quotes */
.dossier .pull-quote {
  font-size: 1.375rem;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
  padding: 40px 24px;
  margin: 48px 0;
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
  font-style: normal;
  color: var(--color-text);
}

/* Lists */
.dossier ul,
.dossier ol {
  padding-left: 1.5rem;
  margin: 16px 0;
}

.dossier li {
  margin-bottom: 8px;
  line-height: 1.6;
}

.dossier li::marker {
  color: var(--color-text-muted);
}

/* Links */
.dossier a {
  color: var(--color-link);
  text-decoration: none;
  border-bottom: 1px dotted #93c5fd;
  transition: border-color 0.15s;
}

.dossier a:hover {
  border-bottom-color: var(--color-link);
  border-bottom-style: solid;
}

/* Callout boxes */
.dossier .callout {
  background-color: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
}

.dossier .callout-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

/* Source references */
.dossier .source-ref {
  font-size: 0.7em;
  vertical-align: super;
  line-height: 0;
  color: var(--color-link);
  cursor: pointer;
  font-weight: 500;
}

/* Source blocks */
.dossier details.sources {
  background-color: var(--color-bg-subtle);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 24px 0 40px 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}

.dossier details.sources summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.dossier details.sources a {
  color: #6b7280;
  font-size: 0.8125rem;
  word-break: break-all;
  border-bottom: none;
}

/* Dividers */
.dossier hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--space-section) 0 0 0;
}

/* Images */
.dossier img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 32px 0;
}

.dossier figcaption {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

/* Meta info (byline, date, etc.) */
.dossier .meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  margin-bottom: 32px;
}

/* Responsive */
@media (max-width: 640px) {
  :root {
    --content-padding: 16px;
  }

  .dossier {
    font-size: 16px;
  }

  .dossier h1 {
    font-size: 28px;
  }

  .dossier h2 {
    font-size: 20px;
    margin-top: 40px;
  }

  .dossier blockquote {
    padding: 12px 16px;
    font-size: 1rem;
  }

  .dossier .pull-quote {
    font-size: 1.125rem;
    padding: 24px 16px;
    margin: 32px 0;
  }

  .dossier .callout {
    padding: 16px;
    margin: 24px 0;
  }
}
```

---

# SOURCES

- [Beehiiv Post Customization Options - Style Panel](https://www.beehiiv.com/support/article/31258673154455-post-customization-options-in-the-style-panel)
- [11 Easy Ways To Upgrade Your Newsletter Design Today - Beehiiv Blog](https://blog.beehiiv.com/p/inspiring-newsletters-to-spark-your-dream-design)
- [Best Email Designs of 2025 - Beehiiv Blog](https://www.beehiiv.com/blog/best-email-designs-2025)
- [How To Design Your Newsletter Inside Beehiiv](https://www.beehiiv.com/blog/how-to-design-your-newsletter-inside-beehiiv)
- [Email Newsletter Design Ideas for Conversion - Beehiiv Blog](https://blog.beehiiv.com/p/email-newsletter-design-ideas-conversion-ultimate-guide)
- [Morning Brew Newsletter Deep Dive - Audiencers](https://theaudiencers.com/deep-dive-into-the-morning-brew-newsletter-andy-griffiths/)
- [Morning Brew Style Sections in Beehiiv - Newsletter Examples](https://www.newsletterexamples.co/p/want-to-design-a-morning-brew-style-email-here-s-a-cheat-sheet)
- [Big Desk Energy Breakdown - Pixels on Beehiiv](https://readpixels.beehiiv.com/p/big-desk-energy-breakdown-tyler-denk)
- [10 Principles of Good Newsletter Design - Kristi.Digital](https://blog.kristi.digital/p/10-principles-of-good-newsletter-design)
- [Milk Road Newsletter Acquisition Story - Beehiiv](https://www.beehiiv.com/blog/milk-road-newsletter-acquisition)
- [Your 2025 Guide to Email Newsletter Dimensions - Beehiiv](https://www.beehiiv.com/blog/best-email-image-size)
- [Introducing the New Editor Experience - Beehiiv Product](https://product.beehiiv.com/p/meet-new-text-editor)
- [Options on the Compose Page - Beehiiv Help](https://www.beehiiv.com/support/article/31326914767639-options-on-the-compose-page-drafting-your-post-content)
- [Typography in Web Design: 7 Key Choices for 2025](https://www.studioubique.com/typography-in-web-design/)
- [Optimal Typography For Web Design in 2025 - Elegant Themes](https://www.elegantthemes.com/blog/design/optimal-typography-for-web-design)
- [Designing for Long-Form Articles - CSS-Tricks](https://css-tricks.com/designing-for-long-form-articles/)
- [Block Quotes and Pull Quotes: Examples and Good Practices - Smashing Magazine](https://www.smashingmagazine.com/2008/06/block-quotes-and-pull-quotes-examples-and-good-practices/)
- [Font Size Guidelines for Responsive Websites - Learn UI Design](https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
- [Beehiiv Blog HTML Source](https://blog.beehiiv.com/) (direct CSS variable extraction, March 2026)
- [Morning Brew HTML Source](https://www.morningbrew.com/) (direct font stack extraction, March 2026)
