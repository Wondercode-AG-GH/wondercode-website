import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  caseStudyBySlugQuery,
  allCaseStudySlugsQuery,
} from "@/sanity/lib/sanity.queries";
import CaseStudySolutionPage from "@/app/[locale]/components/CaseStudySolutionPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Case Study
========================= */
async function getCaseStudy(slug: string): Promise<any | null> {
  if (!slug) return null;
  return client.fetch(caseStudyBySlugQuery, { slug });
}

/* =========================
   Static Paths
========================= */
export async function generateStaticParams() {
  const slugs = await client.fetch(allCaseStudySlugsQuery);

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* =========================
   SEO Metadata
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return {};

  return {
    title: caseStudy.seoTitle || caseStudy.title,
    description: caseStudy.seoDescription || caseStudy.heroSubline,
  };
}

/* =========================
   Page
========================= */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return notFound();

  return (
    <CaseStudySolutionPage
      // Hero Section
      heroHeadline={caseStudy.heroHeadline || ""}
      heroHeadlineDe={caseStudy.heroHeadlineDe || ""}
      heroSubline={caseStudy.heroSubline || ""}
      heroSublineDe={caseStudy.heroSublineDe || ""}
      timelineMetric={caseStudy.timelineMetric || ""}
      timelineLabel={caseStudy.timelineLabel || "Timeline"}
      timelineLabelDe={caseStudy.timelineLabelDe || "Zeitrahmen"}
      // Executive Summary
      executiveSummary={caseStudy.executiveSummary || []}
      executiveSummaryDe={caseStudy.executiveSummaryDe || []}
      // Customer
      customerName={caseStudy.customer?.name || ""}
      customerHeadline={caseStudy.customer?.headline || "The Customer"}
      customerHeadlineDe={caseStudy.customer?.headlineDe || "Der Kunde"}
      customerDescription={caseStudy.customer?.description || ""}
      customerDescriptionDe={caseStudy.customer?.descriptionDe || ""}
      customerHighlights={caseStudy.customer?.highlights || []}
      // Challenge
      challengeHeadline={caseStudy.challenge?.headline || "The Challenge"}
      challengeHeadlineDe={
        caseStudy.challenge?.headlineDe || "Die Herausforderung"
      }
      challengeIntro={caseStudy.challenge?.intro || ""}
      challengeIntroDe={caseStudy.challenge?.introDe || ""}
      challengeIssues={caseStudy.challenge?.issues || []}
      // Solution
      solutionHeadline={caseStudy.solution?.headline || "The Solution"}
      solutionHeadlineDe={caseStudy.solution?.headlineDe || "Die Lösung"}
      solutionIntro={caseStudy.solution?.intro || ""}
      solutionIntroDe={caseStudy.solution?.introDe || ""}
      techStacks={caseStudy.solution?.techStacks || []}
      // Results
      resultsHeadline={caseStudy.results?.headline || "Results & Value"}
      resultsHeadlineDe={
        caseStudy.results?.headlineDe || "Ergebnisse & Mehrwert"
      }
      resultsPillars={caseStudy.results?.pillars || []}
      // Testimonial
      testimonialQuote={caseStudy.testimonial?.quote || ""}
      testimonialQuoteDe={caseStudy.testimonial?.quoteDe || ""}
      testimonialAuthor={caseStudy.testimonial?.author || ""}
      testimonialRole={caseStudy.testimonial?.role || ""}
      testimonialRoleDe={caseStudy.testimonial?.roleDe || ""}
      // CTA
      ctaHeadline={caseStudy.cta?.headline || ""}
      ctaHeadlineDe={caseStudy.cta?.headlineDe || ""}
      ctaDescription={caseStudy.cta?.description || ""}
      ctaDescriptionDe={caseStudy.cta?.descriptionDe || ""}
      ctaButtonText={caseStudy.cta?.buttonText || "Book Consultation"}
      ctaButtonTextDe={caseStudy.cta?.buttonTextDe || "Beratung buchen"}
    />
  );
}
