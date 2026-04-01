import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://wondercode.agency";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/studio/",
        "/api/",
        "/*_next/",
        "/*.json/",
        "/de/api/",
        "/en/api/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
