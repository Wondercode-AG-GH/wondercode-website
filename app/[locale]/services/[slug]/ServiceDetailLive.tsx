"use client";

import { useOptimistic } from "@sanity/visual-editing/react";
import ServiceDetailPage from "@/app/[locale]/components/ServiceDetailPage";

/**
 * Thin client wrapper that keeps the service-detail page in sync with
 * Studio edits without any router refresh:
 *
 * - The server `page.tsx` fetches the service via `sanityFetch` and
 *   passes the raw document here as `service`.
 * - `useOptimistic` subscribes to the visual-editing comlink. Whenever
 *   the editor mutates this `salesforceEcosystem` document in the
 *   Studio, the reducer merges the patch into the local doc and
 *   re-renders — no `router.refresh()`, no flash, no reload.
 * - The actual `<ServiceDetailPage />` component is rendered with the
 *   same prop set it has always received, so nothing else changes.
 */
export default function ServiceDetailLive({
  service: serverService,
}: {
  service: any;
}) {
  const service = useOptimistic<any>(serverService, (current, action) => {
    if (action.type !== "mutate") return current;
    const doc = action.document as { _type?: string };
    if (doc._type !== "salesforceEcosystem") return current;
    return { ...(current ?? {}), ...doc };
  });

  if (!service) return null;

  const scopeCardsWithIcons =
    service.scopeCards?.map((card: any) => ({
      ...card,
      icon: card.icon ?? "Settings",
    })) || [];

  return (
    <ServiceDetailPage
      icon="Headphones"
      serviceName={service.title}
      serviceNameDe={service.titleDe}
      heroSubline={service.heroSubline}
      heroSublineDe={service.heroSublineDe}
      definitionText={service.definitionText}
      definitionTextDe={service.definitionTextDe}
      scopeCards={scopeCardsWithIcons}
      scopeHeadlineWhite={service.scopeHeadlineWhite}
      scopeHeadlineAccent={service.scopeHeadlineAccent}
      scopeHeadlineWhiteDe={service.scopeHeadlineWhiteDe}
      scopeHeadlineAccentDe={service.scopeHeadlineAccentDe}
      benefitList={service.benefitList || []}
      heroCta={service.heroCta}
      heroCtaDe={service.heroCtaDe}
      targetAudience={service.targetAudience || []}
      faqItems={service.faqItems || []}
      heroImage={service.heroImage}
      caseStudyMetrics={service.caseStudyMetrics || {}}
      caseStudyEyebrow={service.caseStudyEyebrow}
      caseStudyEyebrowDe={service.caseStudyEyebrowDe}
      caseStudyHeadline={service.caseStudyHeadline}
      caseStudyHeadlineDe={service.caseStudyHeadlineDe}
      caseStudySubline={service.caseStudySubline}
      caseStudySublineDe={service.caseStudySublineDe}
      caseStudyProblem={service.caseStudyProblem}
      caseStudyProblemDe={service.caseStudyProblemDe}
      caseStudySolution={service.caseStudySolution}
      caseStudySolutionDe={service.caseStudySolutionDe}
      caseStudyResult={service.caseStudyResult}
      caseStudyResultDe={service.caseStudyResultDe}
      caseStudyQuoteText={service.caseStudyQuoteText}
      caseStudyQuoteTextDe={service.caseStudyQuoteTextDe}
      caseStudyQuoteAuthor={service.caseStudyQuoteAuthor}
      caseStudyQuoteAuthorDe={service.caseStudyQuoteAuthorDe}
      ctaHeadline={service.ctaHeadline}
      ctaHeadlineDe={service.ctaHeadlineDe}
      ctaDescription={service.ctaDescription}
      ctaDescriptionDe={service.ctaDescriptionDe}
      ctaButtonText={service.ctaButtonText}
      ctaButtonTextDe={service.ctaButtonTextDe}
    />
  );
}
