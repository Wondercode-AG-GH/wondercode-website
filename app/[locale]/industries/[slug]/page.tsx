import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  industryBySlugQuery,
  allIndustrySlugsQuery,
} from "@/sanity/lib/sanity.queries";
import IndustrySolutionPage from "@/app/[locale]/components/IndustrySolutionPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Industry
========================= */
async function getIndustry(slug: string): Promise<any | null> {
  if (!slug) return null;
  return client.fetch(industryBySlugQuery, { slug });
}

/* =========================
   Static Paths
========================= */
export async function generateStaticParams() {
  const slugs = await client.fetch(allIndustrySlugsQuery);

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* =========================
   SEO Metadata
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const industry = await getIndustry(slug);

  if (!industry) return {};

  return {
    title: industry.seoTitle || industry.title,
    description: industry.seoDescription || industry.contextParagraph1,
  };
}

/* =========================
   Page
========================= */
export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;

  const industry = await getIndustry(slug);

  if (!industry) return notFound();

  // Parse icon names from strings to ensure they're passed correctly
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
      challenges={challengesWithIcons}
      capabilityCards={capabilityCardsWithIcons}
      useCaseTitle={industry.useCaseTitle}
      useCaseTitleDe={industry.useCaseTitleDe}
      workflowSteps={industry.workflowSteps || []}
      faqItems={industry.faqItems || []}
      accentColor="#00CC66"
    />
  );
}
