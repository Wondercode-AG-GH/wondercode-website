import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import {
  serviceBySlugQuery,
  allServiceSlugsQuery,
} from "@/sanity/lib/sanity.queries";
import { Service } from "@/sanity/lib/types";
import { notFound } from "next/navigation";
import ServiceDetailLive from "./ServiceDetailLive";

export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Fetch Service
   Uses sanityFetch (not client.fetch) so the result is tagged for the
   Live Content API — when an editor changes any field on this service
   in the Studio, <SanityLive /> revalidates this page and the iframe
   re-renders with the updated content.
========================= */
async function getService(slug: string): Promise<any | null> {
  if (!slug) return null;
  const { data } = await sanityFetch({
    query: serviceBySlugQuery,
    params: { slug },
  });
  return data;
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isGerman = locale === "de";
  const service = await getService(slug);

  if (!service) return {};

  const title = isGerman
    ? service.seoTitleDe || `${service.titleDe || service.title} | Wondercode`
    : service.seoTitle || `${service.title} | Wondercode`;

  const description = isGerman
    ? service.seoDescriptionDe ||
      service.definitionTextDe ||
      service.heroSublineDe
    : service.seoDescription || service.definitionText || service.heroSubline;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        en: `/en/services/${slug}`,
        de: `/de/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/services/${slug}`,
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
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return notFound();
  // Hand the raw doc to a client wrapper that runs useOptimistic and
  // re-renders without a router refresh on Studio edits.
  return <ServiceDetailLive service={service} />;
}
