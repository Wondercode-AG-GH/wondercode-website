import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  serviceBySlugQuery,
  allServiceSlugsQuery,
} from "@/sanity/lib/sanity.queries";
import { Service } from "@/sanity/lib/types";
import ServiceDetailPage from "@/app/[locale]/components/ServiceDetailPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Service
========================= */
async function getService(slug: string): Promise<any | null> {
  if (!slug) return null;
  return client.fetch(serviceBySlugQuery, { slug });
}

/* =========================
   Static Paths
========================= */
export async function generateStaticParams() {
  const slugs = await client.fetch(allServiceSlugsQuery);

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* =========================
   SEO Metadata
========================= */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) return {};

  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.definitionText,
  };
}

/* =========================
   Page
========================= */
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) return notFound();

  // Pass icon names as strings — the Client Component resolves them internally
  const scopeCardsWithIcons =
    service.scopeCards?.map((card: any) => ({
      ...card,
      icon: card.icon ?? "Settings", // keep as string
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
      targetAudience={service.targetAudience || []}
      faqItems={service.faqItems || []}
      heroImage={service.heroImage}
      caseStudyMetrics={service.caseStudyMetrics || {}}
    />
  );
}
