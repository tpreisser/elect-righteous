import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import CandidateDetailClient from "./client";

export function generateStaticParams() {
  return getAllCandidateSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidate = getFullCandidateBySlug(slug);
  if (!candidate) return {};

  const party =
    candidate.party === "R" ? "Republican" : candidate.party === "D" ? "Democrat" : "Independent";

  return {
    title: `${candidate.name} — ${party} ${candidate.position}`,
    description: `Complete research profile for ${candidate.name} (${party}), candidate for ${candidate.position}. Includes voting record, issue positions, campaign finance, church affiliation, and ${candidate.sources.length}+ public sources.`,
    openGraph: {
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} candidate for ${candidate.position}. Full profile with ${candidate.sources.length}+ sourced citations.`,
    },
  };
}

export default async function CandidateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const candidate = getFullCandidateBySlug(slug);

  if (!candidate) {
    notFound();
  }

  return <CandidateDetailClient candidate={candidate} />;
}
