import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import {
  industryBySlugQuery,
  allIndustrySlugsQuery,
} from "@/sanity/lib/sanity.queries";
import { notFound } from "next/navigation";
import IndustryDetailLive from "./IndustryDetailLive";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Industry
   Uses sanityFetch so the result is tagged for the Live Content API —
   draft edits trigger <SanityLive /> revalidation and the iframe
   re-renders with the new content.
========================= */
async function getIndustry(slug: string): Promise<any | null> {
  if (!slug) return null;
  const { data } = await sanityFetch({
    query: industryBySlugQuery,
    params: { slug },
  });
  return data;
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isGerman = locale === "de";
  const industry = await getIndustry(slug);

  if (!industry) return {};

  const title = isGerman
    ? industry.seoTitleDe ||
      `${industry.titleDe || industry.title} | Wondercode`
    : industry.seoTitle || `${industry.title} | Wondercode`;

  const description = isGerman
    ? industry.seoDescriptionDe ||
      industry.contextParagraph1De ||
      industry.heroSublineDe
    : industry.seoDescription ||
      industry.contextParagraph1 ||
      industry.heroSubline;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/industries/${slug}`,
      languages: {
        en: `/en/industries/${slug}`,
        de: `/de/industries/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/industries/${slug}`,
      siteName: "Wondercode",
      locale: isGerman ? "de_DE" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* =========================
   Page
========================= */
export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return notFound();
  // Hand the raw doc to a client wrapper that runs useOptimistic and
  // re-renders without a router refresh on Studio edits.
  return <IndustryDetailLive industry={industry} />;
}
