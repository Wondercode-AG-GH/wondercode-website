"use client";

import { useOptimistic } from "@sanity/visual-editing/react";
import CaseStudySolutionPage from "@/app/[locale]/components/CaseStudySolutionPage";

/**
 * Client wrapper that keeps the case-study detail page in sync with
 * Studio edits via the visual-editing postMessage channel — no
 * `router.refresh()`, so no reload flash inside the Presentation
 * iframe.
 */
export default function CaseStudyDetailLive({
  caseStudy: serverCaseStudy,
}: {
  caseStudy: any;
}) {
  const caseStudy = useOptimistic<any>(serverCaseStudy, (current, action) => {
    if (action.type !== "mutate") return current;
    const doc = action.document as { _type?: string };
    if (doc._type !== "caseStudy") return current;
    return { ...(current ?? {}), ...doc };
  });

  if (!caseStudy) return null;

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
