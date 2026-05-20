"use client";

import { useOptimistic } from "@sanity/visual-editing/react";
import IndustrySolutionPage from "@/app/[locale]/components/IndustrySolutionPage";

/**
 * Client wrapper that keeps the industry detail page in sync with
 * Studio edits via the visual-editing postMessage channel — no
 * `router.refresh()`, so no reload flash inside the Presentation
 * iframe.
 */
export default function IndustryDetailLive({
  industry: serverIndustry,
}: {
  industry: any;
}) {
  const industry = useOptimistic<any>(serverIndustry, (current, action) => {
    if (action.type !== "mutate") return current;
    const doc = action.document as { _type?: string };
    if (doc._type !== "industry") return current;
    return { ...(current ?? {}), ...doc };
  });

  if (!industry) return null;

  const challengesWithIcons =
    industry.challenges?.map((challenge: any) => ({
      ...challenge,
      icon: challenge.icon ?? "Settings",
    })) || [];

  const capabilityCardsWithIcons =
    industry.capabilityCards?.map((card: any) => ({
      ...card,
      icon: card.icon ?? "Settings",
    })) || [];

  return (
    <IndustrySolutionPage
      industryName={industry.title}
      industryNameDe={industry.titleDe}
      heroSubline={industry.heroSubline}
      heroSublineDe={industry.heroSublineDe}
      heroIcon={industry.heroIcon || "Shield"}
      contextHeadline={industry.contextHeadline}
      contextHeadlineDe={industry.contextHeadlineDe}
      contextParagraph1={industry.contextParagraph1}
      contextParagraph1De={industry.contextParagraph1De}
      contextParagraph2={industry.contextParagraph2}
      contextParagraph2De={industry.contextParagraph2De}
      heroImage={industry.heroImage}
      exploreArchitecture={industry.exploreArchitecture}
      exploreArchitectureDe={industry.exploreArchitectureDe}
      challenges={challengesWithIcons}
      challengesHeadlineWhite={industry.challengesHeadlineWhite}
      challengesHeadlineAccent={industry.challengesHeadlineAccent}
      challengesHeadlineWhiteDe={industry.challengesHeadlineWhiteDe}
      challengesHeadlineAccentDe={industry.challengesHeadlineAccentDe}
      capabilityCards={capabilityCardsWithIcons}
      capabilityHeadlineWhite={industry.capabilityHeadlineWhite}
      capabilityHeadlineAccent={industry.capabilityHeadlineAccent}
      capabilityHeadlineWhiteDe={industry.capabilityHeadlineWhiteDe}
      capabilityHeadlineAccentDe={industry.capabilityHeadlineAccentDe}
      useCaseTitle={industry.useCaseTitle}
      useCaseTitleDe={industry.useCaseTitleDe}
      applicationHeadlineWhite={industry.applicationHeadlineWhite}
      applicationHeadlineAccent={industry.applicationHeadlineAccent}
      applicationHeadlineWhiteDe={industry.applicationHeadlineWhiteDe}
      applicationHeadlineAccentDe={industry.applicationHeadlineAccentDe}
      workflowSteps={industry.workflowSteps || []}
      faqItems={industry.faqItems || []}
      faqHeadlineWhite={industry.faqHeadlineWhite}
      faqHeadlineAccent={industry.faqHeadlineAccent}
      faqHeadlineWhiteDe={industry.faqHeadlineWhiteDe}
      faqHeadlineAccentDe={industry.faqHeadlineAccentDe}
      ctaHeadline={industry.ctaHeadline}
      ctaHeadlineDe={industry.ctaHeadlineDe}
      ctaSubtext={industry.ctaSubtext}
      ctaSubtextDe={industry.ctaSubtextDe}
      ctaButtonText={industry.ctaButtonText}
      ctaButtonTextDe={industry.ctaButtonTextDe}
      accentColor="#00CC66"
    />
  );
}
