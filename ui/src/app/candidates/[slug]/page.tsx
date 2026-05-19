import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import { getAllCandidateV2Slugs, getFullCandidateV2BySlug } from "@/data/v2";
import { getCandidateResearchSources } from "@/lib/candidate-sources";
import CandidateV2Profile from "@/components/v2/CandidateV2Profile";
import CandidateDetailClient from "./client";

export function generateStaticParams() {
  return Array.from(new Set([...getAllCandidateSlugs(), ...getAllCandidateV2Slugs()]))
    .map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidateV2 = getFullCandidateV2BySlug(slug);
  const candidateV1 = getFullCandidateBySlug(slug);
  const candidate = candidateV2 ?? candidateV1;
  if (!candidate) return {};

  const party =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : candidate.party === "NP"
      ? "Nonpartisan"
      : "Independent";
  const sourceCount = candidateV2
    ? candidateV2.sources.length
    : candidateV1
    ? getCandidateResearchSources(candidateV1).length
    : 0;

  return {
    title: `${candidate.name} — ${party} ${candidate.position}`,
    description: `Complete research profile for ${candidate.name} (${party}), candidate for ${candidate.position}. Includes voting record, issue positions, campaign finance, church affiliation, and ${sourceCount}+ public sources.`,
    alternates: {
      canonical: `/elect-righteous/candidates/${candidate.slug}/`,
    },
    openGraph: {
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} candidate for ${candidate.position}. Full profile with ${sourceCount}+ sourced citations.`,
      url: `/elect-righteous/candidates/${candidate.slug}/`,
      images: [
        {
          url: "/elect-righteous/og-image-v3.png",
          width: 1200,
          height: 630,
          alt: `${candidate.name} profile on Elect Righteous`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} candidate for ${candidate.position}. Full profile with ${sourceCount}+ sourced citations.`,
      images: ["/elect-righteous/og-image-v3.png"],
    },
  };
}

export default async function CandidateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const candidateV2 = getFullCandidateV2BySlug(slug);
  if (candidateV2) {
    return <CandidateV2Profile candidate={candidateV2} />;
  }

  const candidate = getFullCandidateBySlug(slug);
  if (!candidate) {
    notFound();
  }

  return <CandidateDetailClient candidate={candidate} />;
}
