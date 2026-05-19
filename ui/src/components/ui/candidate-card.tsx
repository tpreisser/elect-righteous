import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

interface CandidateCardProps {
  name: string;
  position: string;
  party: string;
  incumbent: boolean;
  occupation: string;
  slug: string;
  oneSentence?: string;
  className?: string;
}

export default function CandidateCard({
  name,
  position,
  party,
  incumbent,
  occupation,
  slug,
  oneSentence,
  className = "",
}: CandidateCardProps) {
  const partyLabel =
    party === "R"
      ? "Republican"
      : party === "D"
      ? "Democrat"
      : party === "NP"
      ? "Nonpartisan"
      : "Independent";

  return (
    <article className={`card group h-full ${className}`}>
      <div className="flex min-h-[17.5rem] h-full flex-col p-5 sm:p-6">
        <div className="mb-3 flex min-h-6 items-center gap-2">
          <span
            className="inline-flex max-w-full items-center rounded px-2 py-1 text-[0.68rem] font-heading font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(16, 64, 93, 0.07)", color: "var(--color-navy)" }}
          >
            {partyLabel}
          </span>
          {incumbent && (
            <span
              className="inline-flex items-center rounded px-2 py-1 text-[0.68rem] font-heading font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(28, 195, 175, 0.10)", color: "var(--color-teal-dark)" }}
            >
              In office
            </span>
          )}
        </div>

        <h3
          className="mb-2 min-h-[3.25rem] font-heading font-bold text-navy text-xl leading-tight transition-colors duration-200 group-hover:text-teal"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {name}
        </h3>

        <p
          className="mb-3 min-h-[2.25rem] text-sm font-semibold uppercase tracking-wide leading-snug"
          style={{
            color: "var(--color-teal-dark)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {position}
        </p>

        <div
          className="mb-5 flex min-h-[2.75rem] items-start gap-2 text-sm leading-snug"
          style={{ color: "var(--color-slate)" }}
        >
          <Briefcase size={14} className="mt-0.5 shrink-0 opacity-60" aria-hidden="true" />
          <span
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {occupation || "Public office / campaign profile"}
          </span>
        </div>

        {oneSentence ? (
          <p
            className="mb-5 flex-1 text-sm leading-relaxed"
            style={{
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-serif)",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {oneSentence}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        <Link
          href={`/candidates/${slug}`}
          className="btn-primary mt-auto inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm"
          aria-label={`View full dossier for ${name}`}
        >
          Read More
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
