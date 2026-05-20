import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import {
  caseStudyBySlugQuery,
  allCaseStudySlugsQuery,
} from "@/sanity/lib/sanity.queries";
import { notFound } from "next/navigation";
import CaseStudyDetailLive from "./CaseStudyDetailLive";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Case Study
   Uses sanityFetch so the result is tagged for the Live Content API —
   draft edits trigger <SanityLive /> revalidation and the iframe
   re-renders with the new content.
========================= */
async function getCaseStudy(slug: string): Promise<any | null> {
  if (!slug) return null;
  const { data } = await sanityFetch({
    query: caseStudyBySlugQuery,
    params: { slug },
  });
  return data;
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isGerman = locale === "de";
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return {};

  const title = isGerman
    ? caseStudy.seoTitleDe ||
      `${caseStudy.titleDe || caseStudy.title} | Wondercode`
    : caseStudy.seoTitle || `${caseStudy.title} | Wondercode`;

  const description = isGerman
    ? caseStudy.seoDescriptionDe ||
      caseStudy.heroSublineDe ||
      caseStudy.heroHeadlineDe
    : caseStudy.seoDescription ||
      caseStudy.heroSubline ||
      caseStudy.heroHeadline;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/case-studies/${slug}`,
      languages: {
        en: `/en/case-studies/${slug}`,
        de: `/de/case-studies/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/case-studies/${slug}`,
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
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) return notFound();
  // Hand the raw doc to a client wrapper that runs useOptimistic and
  // re-renders without a router refresh on Studio edits.
  return <CaseStudyDetailLive caseStudy={caseStudy} />;
}
