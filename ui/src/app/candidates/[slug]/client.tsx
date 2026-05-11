"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  FileText,
  MapPin,
  MessageSquare,
  Radio,
  Users,
} from "lucide-react";
import type { CandidateFull, OwnWordsSection as OwnWordsData } from "@/data/candidates";

// ─── Pull Quote ───────────────────────────────────────────────────────────────

function PullQuote({
  text,
  source,
  date,
  url,
  topic,
}: {
  text: string;
  source: string;
  date?: string;
  url?: string;
  topic?: string;
}) {
  const formattedDate =
    date
      ? new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
          new Date(date + "T12:00:00")
        )
      : null;

  return (
    <figure
      className="my-10"
      style={{ borderLeft: "4px solid var(--color-teal)" }}
    >
      <blockquote className="pl-6 pr-2">
        {/* Large decorative quotation mark */}
        <span
          className="block font-serif leading-none select-none"
          style={{
            fontSize: "4rem",
            lineHeight: 1,
            color: "var(--color-teal)",
            marginBottom: "-0.5rem",
            opacity: 0.4,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p
          className="font-serif text-xl leading-relaxed"
          style={{ color: "var(--color-charcoal)", fontStyle: "italic" }}
        >
          {text}
        </p>
      </blockquote>
      <figcaption className="pl-6 mt-4 text-sm" style={{ color: "var(--color-slate)" }}>
        {topic && (
          <span
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1"
            style={{ color: "var(--color-teal-dark)" }}
          >
            {topic}
          </span>
        )}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--color-slate)" }}
          >
            {source}
          </a>
        ) : (
          <span>{source}</span>
        )}
        {formattedDate && (
          <time dateTime={date} className="ml-2" style={{ color: "var(--color-slate)", opacity: 0.7 }}>
            &mdash; {formattedDate}
          </time>
        )}
      </figcaption>
    </figure>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="border-t my-12" style={{ borderColor: "#e2e8f0" }} />;
}

// ─── Article Section Heading ─────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-heading font-bold mt-12 mb-4"
      style={{
        fontSize: "1.375rem",
        color: "var(--color-navy)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

// ─── Body Paragraph ──────────────────────────────────────────────────────────

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body leading-relaxed mb-5"
      style={{ fontSize: "1.125rem", color: "var(--color-charcoal)" }}
    >
      {children}
    </p>
  );
}

// ─── In Their Own Words Reader ──────────────────────────────────────────────

type OwnWordsTopic =
  | "main"
  | "alignment"
  | "response"
  | "national"
  | "local"
  | "absence"
  | "platform"
  | "record";

interface NarrativeCard {
  title: string;
  topic: OwnWordsTopic;
  text: string;
}

const TOPIC_STYLES: Record<
  OwnWordsTopic,
  {
    label: string;
    icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
    accent: string;
    bg: string;
  }
> = {
  main: {
    label: "Main Pattern",
    icon: BarChart3,
    accent: "var(--color-navy)",
    bg: "rgba(16, 64, 93, 0.06)",
  },
  alignment: {
    label: "Signals & Alignments",
    icon: Users,
    accent: "var(--color-gold)",
    bg: "rgba(196, 146, 42, 0.10)",
  },
  response: {
    label: "Audience Response",
    icon: MessageSquare,
    accent: "var(--color-teal-dark)",
    bg: "rgba(28, 195, 175, 0.10)",
  },
  national: {
    label: "National Issues",
    icon: ClipboardList,
    accent: "#6d5bd0",
    bg: "rgba(109, 91, 208, 0.10)",
  },
  local: {
    label: "Kansas & District",
    icon: MapPin,
    accent: "var(--color-green-flag)",
    bg: "rgba(45, 106, 79, 0.10)",
  },
  absence: {
    label: "Not Found in Public Record",
    icon: AlertTriangle,
    accent: "var(--color-red-flag)",
    bg: "rgba(155, 34, 38, 0.08)",
  },
  platform: {
    label: "Platform Footprint",
    icon: Radio,
    accent: "var(--color-slate)",
    bg: "rgba(74, 74, 74, 0.08)",
  },
  record: {
    label: "Public Record",
    icon: FileText,
    accent: "var(--color-navy-light)",
    bg: "rgba(16, 64, 93, 0.05)",
  },
};

function cleanNarrativeText(text: string) {
  return text
    .replace(/^#+\s.*\n+/, "")
    .replace(/^\s*[-]{3,}\s*$/gm, "")
    .trim();
}

function cleanParagraph(text: string) {
  return text
    .replace(/^\*\*(Methodology:)\*\*\s*/i, "$1 ")
    .replace(/^\*([\s\S]+)\*$/, "$1")
    .replace(/^_([\s\S]+)_$/, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\\\$/g, "$")
    .trim();
}

function getTopicForParagraph(paragraph: string, index: number): OwnWordsTopic {
  const text = paragraph.toLowerCase();

  if (index === 0) {
    return "main";
  }

  if (
    text.includes("contains no") ||
    text.includes("no posts about") ||
    text.includes("no reviewed item") ||
    text.includes("not visible") ||
    text.includes("visible absences")
  ) {
    return "absence";
  }
  if (
    text.includes("platform footprint") ||
    text.includes("facebook") ||
    text.includes("instagram") ||
    text.includes("bluesky") ||
    text.includes("x presence") ||
    text.includes("truth social") ||
    text.includes("linkedin")
  ) {
    return "platform";
  }
  if (
    text.includes("audience") ||
    text.includes("engagement") ||
    text.includes("likes") ||
    text.includes("views") ||
    text.includes("highest-response") ||
    text.includes("highest-viewed")
  ) {
    return "response";
  }
  if (
    text.includes("alignment") ||
    text.includes("amplification") ||
    text.includes("reposted") ||
    text.includes("reposts") ||
    text.includes("endorsed") ||
    text.includes("tagged")
  ) {
    return "alignment";
  }
  if (
    text.includes("ks-") ||
    text.includes("district") ||
    text.includes("kansas-specific") ||
    text.includes("local") ||
    text.includes("rural") ||
    text.includes("hays") ||
    text.includes("county")
  ) {
    return "local";
  }
  if (
    text.includes("national") ||
    text.includes("foreign") ||
    text.includes("federal") ||
    text.includes("congress") ||
    text.includes("president") ||
    text.includes("trump")
  ) {
    return "national";
  }
  return "record";
}

function getNarrativeCards(narrative: string): {
  summary: string | null;
  cards: NarrativeCard[];
  methodNotes: string[];
} {
  const paragraphs = cleanNarrativeText(narrative)
    .split(/\n{2,}/)
    .map(cleanParagraph)
    .filter(Boolean);

  let summary: string | null = null;
  const methodNotes: string[] = [];
  const body: string[] = [];

  for (const paragraph of paragraphs) {
    if (/^methodology:/i.test(paragraph) || /^date range covered:/i.test(paragraph)) {
      methodNotes.push(paragraph);
    } else if (!summary && /summary of what/i.test(paragraph)) {
      summary = paragraph;
    } else if (!/^we report patterns/i.test(paragraph)) {
      body.push(paragraph);
    }
  }

  return {
    summary,
    methodNotes,
    cards: body.map((text, index) => {
      const topic = getTopicForParagraph(text, index);
      return {
        topic,
        title: TOPIC_STYLES[topic].label,
        text,
      };
    }),
  };
}

function hostLabel(href: string) {
  if (!href.startsWith("http")) return "Harvest";

  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "Source";
  }
}

function renderPlainText(text: string, keyPrefix: string) {
  const parts = text.split(/(\b\d+(?:,\d{3})*(?:\.\d+)?(?:\s+of\s+\d+(?:,\d{3})*)?(?:\s*(?:percent|%|likes|reposts|replies|views|posts|followers|items|pages))?)/g);

  return parts.map((part, index) => {
    if (/^\d/.test(part)) {
      return (
        <strong key={`${keyPrefix}-num-${index}`} className="font-heading font-bold text-navy">
          {part}
        </strong>
      );
    }

    return <span key={`${keyPrefix}-text-${index}`}>{part}</span>;
  });
}

function LinkedNarrativeText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let sourceIndex = 1;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    const before = text.slice(lastIndex, match.index);
    if (before) nodes.push(...renderPlainText(before, `plain-${lastIndex}`));

    const isExternal = href.startsWith("http");
    const chipText = label.toLowerCase() === "source" ? `Source ${sourceIndex++}` : label;

    if (isExternal) {
      nodes.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 align-middle font-heading text-[0.7rem] font-bold uppercase tracking-wider transition-colors hover:bg-teal hover:text-white"
          style={{ borderColor: "rgba(28, 195, 175, 0.35)", color: "var(--color-teal-dark)" }}
          aria-label={`${chipText}: ${hostLabel(href)}`}
          title={hostLabel(href)}
        >
          {chipText}
          <ExternalLink size={10} aria-hidden="true" />
        </a>
      );
    } else {
      nodes.push(
        <span
          key={`note-${match.index}`}
          className="mx-1 inline-flex rounded-full px-2 py-0.5 align-middle font-heading text-[0.7rem] font-bold uppercase tracking-wider"
          style={{ backgroundColor: "rgba(16, 64, 93, 0.08)", color: "var(--color-navy)" }}
        >
          {label}
        </span>
      );
    }

    lastIndex = match.index + fullMatch.length;
  }

  const after = text.slice(lastIndex);
  if (after) nodes.push(...renderPlainText(after, `plain-${lastIndex}`));

  return <>{nodes}</>;
}

function formatOwnWordsDate(date: string, style: "short" | "long" = "short") {
  return new Intl.DateTimeFormat("en-US", {
    month: style === "short" ? "short" : "long",
    day: style === "long" ? "numeric" : undefined,
    year: "numeric",
  }).format(new Date(date + "T12:00:00"));
}

function OwnWordsReader({
  candidateName,
  data,
}: {
  candidateName: string;
  data: OwnWordsData;
}) {
  const [view, setView] = useState<"brief" | "deep" | "methods">("brief");
  const { summary, cards, methodNotes } = getNarrativeCards(data.narrative);
  const visibleCards = view === "brief" ? cards.slice(0, 4) : cards;
  const hiddenCount = Math.max(cards.length - visibleCards.length, 0);

  return (
    <section aria-labelledby="own-words-heading" className="my-12">
      <div
        className="overflow-hidden rounded-xl border"
        style={{ borderColor: "rgba(16, 64, 93, 0.14)", backgroundColor: "#ffffff" }}
      >
        <div className="p-5 sm:p-6" style={{ backgroundColor: "var(--color-navy)" }}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p
                className="font-heading text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-teal-light)" }}
              >
                Public-posting readout
              </p>
              <h2
                id="own-words-heading"
                className="mt-2 font-heading text-2xl font-bold text-white"
              >
                In Their Own Words
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-white/75">
                {summary ||
                  `A structured summary of what ${candidateName} has publicly said, posted, and amplified.`}
              </p>
            </div>

            <div className="grid min-w-fit grid-cols-2 gap-2 text-white sm:grid-cols-1">
              <div className="rounded-md bg-white/10 px-3 py-2">
                <span className="block font-heading text-[0.65rem] font-bold uppercase tracking-wider text-white/55">
                  Sources
                </span>
                <span className="font-heading text-sm font-bold">{data.platformsCovered.length} platforms</span>
              </div>
              <div className="rounded-md bg-white/10 px-3 py-2">
                <span className="block font-heading text-[0.65rem] font-bold uppercase tracking-wider text-white/55">
                  Updated
                </span>
                <span className="font-heading text-sm font-bold">
                  {formatOwnWordsDate(data.lastUpdated, "long")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="In Their Own Words view">
            {[
              ["brief", "Brief"],
              ["deep", "Deep Read"],
              ["methods", "Methods"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={view === id}
                onClick={() => setView(id as "brief" | "deep" | "methods")}
                className="rounded-md px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-colors"
                style={{
                  backgroundColor: view === id ? "var(--color-teal)" : "rgba(255, 255, 255, 0.10)",
                  color: "#fff",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {view !== "methods" ? (
          <div className="p-4 sm:p-6">
            <div className="grid gap-4">
              {visibleCards.map((card, index) => {
                const topic = TOPIC_STYLES[card.topic];
                const Icon = topic.icon;

                return (
                  <article
                    key={`${card.title}-${index}`}
                    className="rounded-lg border bg-white p-4 sm:p-5"
                    style={{ borderColor: "rgba(16, 64, 93, 0.12)" }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                        style={{ backgroundColor: topic.bg, color: topic.accent }}
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </span>
                      <h3
                        className="font-heading text-sm font-bold uppercase tracking-widest"
                        style={{ color: topic.accent }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p
                      className="font-body text-base leading-relaxed sm:text-[1.05rem]"
                      style={{ color: "var(--color-charcoal)" }}
                    >
                      <LinkedNarrativeText text={card.text} />
                    </p>
                  </article>
                );
              })}
            </div>

            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setView("deep")}
                className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-light"
                style={{ backgroundColor: "var(--color-navy)" }}
              >
                Show {hiddenCount} more sections
                <ChevronRight size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
            <div className="rounded-lg border p-4" style={{ borderColor: "#e2e8f0" }}>
              <CalendarDays size={20} className="mb-3 text-teal" aria-hidden="true" />
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-navy">
                Date Range
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-charcoal">
                {formatOwnWordsDate(data.dateRangeStart)} to {formatOwnWordsDate(data.dateRangeEnd)}
              </p>
            </div>
            <div className="rounded-lg border p-4 sm:col-span-2" style={{ borderColor: "#e2e8f0" }}>
              <Radio size={20} className="mb-3 text-teal" aria-hidden="true" />
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-navy">
                Platforms Covered
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.platformsCovered.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full px-2.5 py-1 font-heading text-[0.7rem] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border p-4 sm:col-span-3" style={{ borderColor: "#e2e8f0" }}>
              <FileText size={20} className="mb-3 text-teal" aria-hidden="true" />
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-navy">
                Method Notes
              </h3>
              {[...methodNotes, data.disclaimer].map((note, index) => (
                <p
                  key={index}
                  className="mt-2 font-body text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  <LinkedNarrativeText text={note} />
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Correction Form ────────────────────────────────────────────────────────

function CorrectionForm({
  candidateName,
}: {
  candidateName: string;
  candidateSlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", `Elect Righteous — Correction for ${candidateName}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("candidate", candidateName);

    try {
      const res = await fetch("https://formsubmit.co/ajax/tylerpreisser@gmail.com", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success === "true") {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl p-6 sm:p-8 text-center"
        style={{ backgroundColor: "#f0fdf9", border: "1px solid rgba(28, 195, 175, 0.3)" }}
      >
        <p className="font-heading font-bold text-lg mb-1" style={{ color: "var(--color-navy)" }}>
          Thank you!
        </p>
        <p className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
          Your submission has been received. We&apos;ll review it and update this profile if needed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-6 sm:p-8"
      style={{ backgroundColor: "#f8f9fa", border: "1px solid #e2e8f0" }}
    >
      <h2
        className="font-heading font-bold text-lg mb-1"
        style={{ color: "var(--color-navy)" }}
      >
        Is Something Wrong or Missing?
      </h2>
      <p
        className="font-body text-sm mb-6 leading-relaxed"
        style={{ color: "var(--color-slate)" }}
      >
        If you are {candidateName} or represent their campaign, or if you have a correction or
        additional information, let us know. We want to get this right.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label
            htmlFor="correction-name"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Name
          </label>
          <input
            type="text"
            id="correction-name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="correction-email"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Email
          </label>
          <input
            type="email"
            id="correction-email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="you@example.com"
          />
        </div>

        {/* Relationship */}
        <div>
          <label
            htmlFor="correction-relationship"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Your Relationship to This Candidate
          </label>
          <select
            id="correction-relationship"
            name="relationship"
            required
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
          >
            <option value="">Select one...</option>
            <option value="I am this candidate">I am this candidate</option>
            <option value="I represent this candidate's campaign">I represent this candidate&apos;s campaign</option>
            <option value="Local voter with information">I&apos;m a local voter with information</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="correction-message"
            className="block font-heading font-bold text-xs uppercase tracking-widest mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            What Should We Change or Add?
          </label>
          <textarea
            id="correction-message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2.5 rounded-md border font-body text-sm focus:outline-none focus:ring-2 resize-y"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Tell us what's incorrect, missing, or needs to be updated..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="self-start flex items-center gap-2 px-6 py-2.5 rounded-md font-heading font-semibold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          {submitting ? "Sending..." : "Submit Correction"}
        </button>

        {error && (
          <p className="text-sm font-body" style={{ color: "var(--color-red-flag)" }}>
            Something went wrong. Please try again or email us directly at tylerpreisser@gmail.com
          </p>
        )}
      </form>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CandidateDetailClient({
  candidate,
}: {
  candidate: CandidateFull;
}) {
  const partyLabel =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : "Independent";

  // At-a-glance facts for the key facts box
  const glanceFacts = [
    { label: "Age / Born", value: candidate.born },
    { label: "Hometown", value: candidate.hometown },
    { label: "Church / Faith", value: candidate.religion },
    { label: "Education", value: candidate.education },
    { label: "Family", value: candidate.family },
    { label: "Occupation", value: candidate.occupation },
    { label: "District", value: candidate.district },
    { label: "Last Result", value: candidate.margin2024 },
    ...(candidate.campaignWebsite
      ? [{ label: "Campaign Website", value: candidate.campaignWebsite, isLink: true }]
      : []),
  ].filter((f) => f.value);

  // Split into two columns for the grid
  const col1 = glanceFacts.filter((_, i) => i % 2 === 0);
  const col2 = glanceFacts.filter((_, i) => i % 2 !== 0);

  return (
    <article>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div
        className="border-b"
        style={{ backgroundColor: "var(--color-light)", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-3 text-sm font-body flex-wrap"
            style={{ color: "var(--color-slate)" }}
          >
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Home
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <Link
              href="/candidates"
              className="hover:underline"
              style={{ color: "var(--color-teal-dark)" }}
            >
              Candidates
            </Link>
            <ChevronRight size={14} className="opacity-40" aria-hidden="true" />
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>
              {candidate.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Article Header ───────────────────────────────────────────────── */}
      <header className="section-navy" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Party + status line */}
            <p
              className="font-heading font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: "rgba(246,246,246,0.55)" }}
            >
              {partyLabel}
              {" · "}
              {candidate.incumbent ? "Currently in Office" : "Candidate"}
            </p>

            {/* Candidate name */}
            <h1
              className="font-heading font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
            >
              {candidate.name}
            </h1>

            {/* Position */}
            <p
              className="font-heading font-bold text-lg uppercase tracking-wide mb-3"
              style={{ color: "var(--color-teal)" }}
            >
              {candidate.position}
            </p>

            {/* One-liner occupation */}
            <p
              className="font-body text-base"
              style={{ color: "rgba(246,246,246,0.70)" }}
            >
              {candidate.occupation}
              {candidate.hometown ? ` · ${candidate.hometown}` : ""}
            </p>
          </div>
        </div>
      </header>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

          {/* ── Key Facts Box ───────────────────────────────────────────── */}
          {glanceFacts.length > 0 && (
            <aside
              className="rounded-xl mb-12 p-6 sm:p-8"
              style={{ backgroundColor: "#f8f9fa" }}
              aria-label="Key facts at a glance"
            >
              <p
                className="font-heading font-bold text-xs uppercase tracking-widest mb-5"
                style={{ color: "var(--color-navy)" }}
              >
                At a Glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {/* Column 1 */}
                <dl className="flex flex-col gap-4">
                  {col1.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* Column 2 */}
                <dl className="flex flex-col gap-4">
                  {col2.map((fact) => (
                    <div key={fact.label}>
                      <dt
                        className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        className="font-body text-sm leading-snug"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {"isLink" in fact && fact.isLink ? (
                          <a
                            href={fact.value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: "var(--color-teal-dark)" }}
                          >
                            {(fact.value as string).replace(/^https?:\/\//, "")}
                            <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}

          {/* ── Who They Are ────────────────────────────────────────────── */}
          {candidate.whoTheyAre && (
            <>
              <SectionHeading>Who They Are</SectionHeading>
              {candidate.whoTheyAre.split("\n\n").map((paragraph, i) => (
                <BodyText key={i}>{paragraph}</BodyText>
              ))}
            </>
          )}

          {/* ── Their Record ────────────────────────────────────────────── */}
          {candidate.theirRecord && (
            <>
              <SectionDivider />
              <SectionHeading>Their Record</SectionHeading>
              {candidate.theirRecord.split("\n\n").map((paragraph, i) => (
                <BodyText key={i}>{paragraph}</BodyText>
              ))}
            </>
          )}

          {/* ── In Their Own Words (social media narrative) ─────────── */}
          {candidate.inTheirOwnWords && (
            <>
              <SectionDivider />
              <OwnWordsReader
                candidateName={candidate.name}
                data={candidate.inTheirOwnWords}
              />
            </>
          )}

          {/* ── What They Stand For ──────────────────────────────────── */}
          {candidate.whatTheyStandFor && candidate.whatTheyStandFor.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>What They Stand For</SectionHeading>
              <p
                className="font-body text-sm mb-6 leading-relaxed"
                style={{ color: "var(--color-slate)", fontStyle: "italic" }}
              >
                Based on public statements, voting record, and campaign materials.
                When a candidate has not taken a clear public position, we say so.
              </p>
              <dl className="flex flex-col gap-5 mb-5">
                {candidate.whatTheyStandFor.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-4"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <dt
                      className="font-heading font-bold text-sm uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {item.issue}
                    </dt>
                    <dd
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", color: "var(--color-charcoal)" }}
                    >
                      {item.stance}
                    </dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          {/* ── Direct Quotes ───────────────────────────────────────────── */}
          {candidate.quotes.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>Direct Quotes</SectionHeading>
              <div>
                {candidate.quotes.map((q, i) => (
                  <PullQuote
                    key={i}
                    text={q.text}
                    source={q.source}
                    date={q.date}
                    url={q.url}
                    topic={q.topic}
                  />
                ))}
              </div>
            </>
          )}

          {/* ── Follow the Money ────────────────────────────────────────── */}
          {candidate.campaignFinance && (
            <>
              <SectionDivider />
              <SectionHeading>Follow the Money</SectionHeading>
              {candidate.campaignFinance.narrative && (
                <BodyText>{candidate.campaignFinance.narrative}</BodyText>
              )}

              {/* Donor Table */}
              {candidate.campaignFinance.donors && candidate.campaignFinance.donors.length > 0 && (
                <div className="my-8 rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Donor</th>
                        <th className="text-right px-5 py-3 font-heading font-bold text-xs uppercase tracking-widest" style={{ color: "var(--color-navy)" }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.campaignFinance.donors.map((d, i) => (
                        <tr key={i} className="border-t" style={{ borderColor: "#f1f5f9" }}>
                          <td className="px-5 py-3 font-body" style={{ color: "var(--color-charcoal)" }}>{d.name}</td>
                          <td className="px-5 py-3 font-heading font-semibold text-right" style={{ color: "var(--color-navy)" }}>{d.amount}</td>
                        </tr>
                      ))}
                      {candidate.campaignFinance.undisclosed && (
                        <tr className="border-t" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8f9fa" }}>
                          <td colSpan={2} className="px-5 py-3 text-xs font-body italic" style={{ color: "var(--color-slate)" }}>
                            {candidate.campaignFinance.undisclosed}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs mt-4" style={{ color: "var(--color-slate)" }}>
                Source: {candidate.campaignFinance.source} — {candidate.campaignFinance.reportingPeriod}
              </p>
            </>
          )}

          {/* ── What You Should Know ────────────────────────────────────── */}
          {candidate.whatYouShouldKnow.length > 0 && (
            <>
              <SectionDivider />
              <SectionHeading>What You Should Know</SectionHeading>
              <ul className="flex flex-col gap-5 mb-5" role="list">
                {candidate.whatYouShouldKnow.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    style={{ color: "var(--color-charcoal)" }}
                  >
                    {/* Numbered bullet */}
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full font-heading font-bold text-xs mt-0.5"
                      style={{
                        backgroundColor: "var(--color-navy)",
                        color: "white",
                        minWidth: "1.75rem",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: "1.0625rem", paddingTop: "0.125rem" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* ── Where They Worship ──────────────────────────────────────── */}
          {(candidate.whereTheyWorship || candidate.church) && (
            <>
              <SectionDivider />
              <SectionHeading>Where They Worship</SectionHeading>
              {candidate.whereTheyWorship && (
                <BodyText>{candidate.whereTheyWorship}</BodyText>
              )}
              {candidate.church && (
                <div className="my-6 rounded-lg p-5" style={{ backgroundColor: "#f8f9fa" }}>
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                    {candidate.church.name}
                  </p>
                  {candidate.church.denomination && (
                    <p className="text-sm mb-1" style={{ color: "var(--color-slate)" }}>
                      {candidate.church.denomination}
                    </p>
                  )}
                  {candidate.church.url && (
                    <a
                      href={candidate.church.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:underline mt-1"
                      style={{ color: "var(--color-teal-dark)" }}
                    >
                      Visit Church Website <ExternalLink size={12} />
                    </a>
                  )}
                  {candidate.church.details && (
                    <p className="text-sm mt-2" style={{ color: "var(--color-charcoal)" }}>
                      {candidate.church.details}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── Sources Link ──────────────────────────────────────────────── */}
          {candidate.sources.length > 0 && (
            <>
              <SectionDivider />
              <section aria-labelledby="sources-heading">
                <h2
                  id="sources-heading"
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: "1rem", color: "var(--color-navy)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                >
                  Sources
                </h2>
                <p
                  className="font-body text-sm mb-5"
                  style={{ color: "var(--color-slate)" }}
                >
                  All facts and claims in this profile are drawn from {candidate.sources.length} publicly
                  available sources.
                </p>
                <Link
                  href={`/candidates/${candidate.slug}/sources`}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                >
                  View All {candidate.sources.length} Sources
                  <ExternalLink size={14} aria-hidden="true" />
                </Link>
              </section>
            </>
          )}

          {/* ── Candidate Correction Form ─────────────────────────────── */}
          <SectionDivider />
          <CorrectionForm candidateName={candidate.name} candidateSlug={candidate.slug} />

          {/* ── Navigation ──────────────────────────────────────────────── */}
          <div
            className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ borderColor: "#e2e8f0" }}
          >
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75"
              style={{ color: "var(--color-navy)" }}
            >
              <ChevronLeft size={15} aria-hidden="true" />
              All Candidates
            </Link>

            {candidate.electionSlug && (
              <Link
                href={`/elections/${candidate.electionSlug}`}
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-colors duration-200 hover:opacity-75 sm:ml-auto"
                style={{ color: "var(--color-teal-dark)" }}
              >
                View election details
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
