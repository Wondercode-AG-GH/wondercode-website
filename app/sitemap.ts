import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import {
  allServiceSlugsQuery,
  allIndustrySlugsQuery,
  allCaseStudySlugsQuery,
} from "@/sanity/lib/sanity.queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use env or fallback to a default (Update this with your domain!)
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://wondercode.agency";

  // Fetch all slugs for dynamic paths
  const [services, industries, caseStudies] = await Promise.all([
    client.fetch(allServiceSlugsQuery),
    client.fetch(allIndustrySlugsQuery),
    client.fetch(allCaseStudySlugsQuery),
  ]);

  const locales = ["en", "de"];
  const staticPaths = ["", "/imprint", "/privacy-policy"];

  // Generate sitemap entries
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    }
  }

  // Dynamic Service pages
  for (const locale of locales) {
    for (const s of services) {
      if (s.slug) {
        entries.push({
          url: `${baseUrl}/${locale}/services/${s.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  // Dynamic Industry pages
  for (const locale of locales) {
    for (const i of industries) {
      if (i.slug) {
        entries.push({
          url: `${baseUrl}/${locale}/industries/${i.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  // Dynamic Case Study pages
  for (const locale of locales) {
    for (const cs of caseStudies) {
      if (cs.slug) {
        entries.push({
          url: `${baseUrl}/${locale}/case-studies/${cs.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return entries;
}
