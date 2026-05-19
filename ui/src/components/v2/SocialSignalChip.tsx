"use client";

/**
 * SocialSignalChip — renders one SocialSignal as a pill/chip.
 *
 * IDENTITY.md commitment encoded here: every chip carries the caption
 * "Observed behavior — not a statement of belief." This cannot be removed
 * without editing the component intentionally.
 *
 * No grading, no position inference, no flag coloring.
 */

import { useState } from "react";
import type { SocialSignal, Source } from "@/data/types-v2";
import { ExternalLink } from "lucide-react";

/** Platform icon/label — text fallback if we don't have a known platform icon */
function PlatformLabel({ platform }: { platform: string }) {
  const known: Record<string, string> = {
    facebook: "FB",
    x: "X",
    twitter: "X",
    instagram: "IG",
    youtube: "YT",
    linkedin: "LI",
    tiktok: "TT",
    bluesky: "BS",
    threads: "TH",
  };
  const key = platform.toLowerCase();
  const abbr = known[key] ?? platform.slice(0, 2).toUpperCase();

  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-heading font-bold shrink-0"
      style={{
        backgroundColor: "var(--color-navy)",
        color: "white",
      }}
      aria-label={`Platform: ${platform}`}
      title={platform}
    >
      {abbr}
    </span>
  );
}

interface SocialSignalChipProps {
  signal: SocialSignal;
  /** Full source registry, used to resolve sourceIds for the link chip. */
  sources: Source[];
}

const TRUNCATE_AT = 140;

export default function SocialSignalChip({
  signal,
  sources,
}: SocialSignalChipProps) {
  const [expanded, setExpanded] = useState(false);
  const sourceById = new Map<string, Source>(sources.map((s) => [s.id, s]));

  const needsTruncation = signal.observation.length > TRUNCATE_AT;
  const displayText =
    needsTruncation && !expanded
      ? signal.observation.slice(0, TRUNCATE_AT).trimEnd() + "…"
      : signal.observation;

  const linkedSources = signal.sourceIds
    .map((id) => sourceById.get(id))
    .filter((s): s is Source => Boolean(s));

  return (
    <div
      className="rounded-lg border p-3"
      style={{ borderColor: "rgba(16, 64, 93, 0.10)", backgroundColor: "#fafafa" }}
    >
      {/* Chip row: platform icon + observation text */}
      <div className="flex items-start gap-2">
        <PlatformLabel platform={signal.platform} />

        <div className="min-w-0 flex-1">
          <p
            className="font-body leading-snug"
            style={{ fontSize: "0.9rem", color: "var(--color-charcoal)" }}
          >
            {displayText}
            {needsTruncation && (
              <button
                type="button"
                className="ml-1 font-semibold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                style={{ color: "var(--color-teal-dark)", fontSize: "0.85rem" }}
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
              >
                {expanded ? "less" : "more"}
              </button>
            )}
          </p>

          {/* Source link(s) */}
          {linkedSources.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {linkedSources.map((src) => (
                <a
                  key={src.id}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-body font-semibold transition-colors duration-150 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  style={{
                    backgroundColor: "rgba(16, 64, 93, 0.07)",
                    color: "var(--color-navy-light)",
                  }}
                  aria-label={`Source: ${src.publisher ?? src.title} (opens in new tab)`}
                  title={src.title}
                >
                  {(src.publisher ?? src.title).slice(0, 32)}
                  {(src.publisher ?? src.title).length > 32 ? "…" : ""}
                  <ExternalLink size={10} aria-hidden="true" className="opacity-70 shrink-0" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* IDENTITY.md commitment — always present, literal text */}
      <p
        className="mt-2 font-body text-xs"
        style={{ color: "var(--color-slate)" }}
      >
        Observed behavior — not a statement of belief.
      </p>
    </div>
  );
}
