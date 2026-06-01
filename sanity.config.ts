"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {
  defineDocuments,
  defineLocations,
  presentationTool,
} from "sanity/presentation";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { BackToHomePageAction } from "./sanity/actions/BackToHomePageAction";
import { PublishAllHomeSectionsAction } from "./sanity/actions/PublishAllHomeSectionsAction";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

/**
 * Section document types that compose the home page. When any of these
 * is being edited, we add a "Back to Home Page" action so editors can
 * return to the wrapper `homePage` document and its full list of
 * sections from inside the Presentation Tool's right pane.
 */
const HOME_PAGE_SECTION_TYPES = new Set([
  "hero",
  "header",
  "footer",
  "coreExpertiseHeader",
  "agenticExpertise",
  "customEngineering",
  "industryExpertiseHeader",
  "caseStudiesGalleryHeader",
  "aboutUs",
  "faqHeader",
]);

/**
 * Origin the Presentation Tool will use to render the preview iframe.
 *
 * The Studio is mounted on `/studio` inside this same Next.js app, so the
 * preview front-end always lives on the same origin the Studio is served
 * from. Deriving the origin from `window.location` at runtime keeps it in
 * sync everywhere — local dev, Vercel preview deployments (each on a unique
 * `*.vercel.app` URL), and production — without depending on a build-time
 * `NEXT_PUBLIC_BASE_URL` value being inlined into the client bundle.
 *
 * Note: this file is a client component (`"use client"`), but the config is
 * also imported during SSR/build of the Studio page, hence the `typeof`
 * guard. The SSR fallback is never actually used by the iframe (Presentation
 * resolves the origin in the browser); it only needs to be a valid string.
 */
const previewOrigin =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Helper for singleton document types that are all rendered on the home
 * page (hero, header, footer, aboutUs, etc.). Declares both locale
 * variants of the home URL so editors see them in the document panel.
 */
const homeLocations = defineLocations({
  locations: [
    { title: "Home (EN)", href: "/en" },
    { title: "Home (DE)", href: "/de" },
  ],
  message: "This document is shown on the home page.",
});

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    /**
     * Customise the document action menu:
     *   - On the `homePage` wrapper: replace the default Publish (which
     *     is always disabled because the wrapper has no content of its
     *     own) with PublishAllHomeSectionsAction, which atomically
     *     publishes every section draft.
     *   - On any home-page section: prepend a "Back to Home Page" action
     *     so editors can return to the wrapper from inside Presentation.
     *   - Every other document type keeps its default action menu.
     */
    actions: (prev, context) => {
      if (context.schemaType === "homePage") {
        const withoutDefaultPublish = prev.filter(
          (action) => action.action !== "publish",
        );
        return [PublishAllHomeSectionsAction, ...withoutDefaultPublish];
      }
      if (HOME_PAGE_SECTION_TYPES.has(context.schemaType)) {
        return [BackToHomePageAction, ...prev];
      }
      return prev;
    },
  },
  plugins: [
    structureTool({ structure }),
    /**
     * Presentation Tool — adds a "Presentation" workspace to the Studio
     * that renders the live site inside an iframe with click-to-edit
     * overlays. It hits `/api/draft-mode/enable` to flip Next.js into
     * draft mode (which is what allows draft content + the
     * <VisualEditing /> overlay to render in the front-end).
     *
     * `resolve.mainDocuments` maps front-end URLs back to their backing
     * Sanity document so the left-hand editor panel knows what to open
     * when the iframe navigates. `resolve.locations` does the inverse:
     * given a document, declares which URLs render it so editors can
     * jump from a document to its preview.
     */
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      resolve: {
        mainDocuments: defineDocuments([
          // Home — the home page is composed of many per-section singleton
          // documents. Presentation's main-document API only opens ONE
          // document per route, so we point at a thin wrapper singleton
          // ("homePage") whose sole purpose is to list references to all
          // the section documents. The right-hand panel then renders that
          // wrapper, showing every section as a clickable reference the
          // editor can drill into without leaving Presentation.
          {
            route: "/:locale",
            filter: `_type == "homePage"`,
          },
          // Service detail
          {
            route: "/:locale/services/:slug",
            filter: `_type == "salesforceEcosystem" && slug.current == $slug`,
          },
          // Industry detail
          {
            route: "/:locale/industries/:slug",
            filter: `_type == "industry" && slug.current == $slug`,
          },
          // Case study detail
          {
            route: "/:locale/case-studies/:slug",
            filter: `_type == "caseStudy" && slug.current == $slug`,
          },
        ]),
        locations: {
          // Editorial wrapper doc that aggregates the home-page sections.
          homePage: homeLocations,
          // Home-page singletons — all map to the same home URLs.
          hero: homeLocations,
          header: homeLocations,
          footer: homeLocations,
          aboutUs: homeLocations,
          agenticExpertise: homeLocations,
          customEngineering: homeLocations,
          coreExpertiseHeader: homeLocations,
          industryExpertiseHeader: homeLocations,
          caseStudiesGalleryHeader: homeLocations,
          faqHeader: homeLocations,
          faq: homeLocations,

          // Routed list documents (each has its own slug-based detail page).
          salesforceEcosystem: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [
                    {
                      title: `${doc.title ?? "Service"} (EN)`,
                      href: `/en/services/${doc.slug}`,
                    },
                    {
                      title: `${doc.title ?? "Service"} (DE)`,
                      href: `/de/services/${doc.slug}`,
                    },
                  ]
                : [],
            }),
          }),
          industry: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [
                    {
                      title: `${doc.title ?? "Industry"} (EN)`,
                      href: `/en/industries/${doc.slug}`,
                    },
                    {
                      title: `${doc.title ?? "Industry"} (DE)`,
                      href: `/de/industries/${doc.slug}`,
                    },
                  ]
                : [],
            }),
          }),
          caseStudy: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: doc?.slug
                ? [
                    {
                      title: `${doc.title ?? "Case study"} (EN)`,
                      href: `/en/case-studies/${doc.slug}`,
                    },
                    {
                      title: `${doc.title ?? "Case study"} (DE)`,
                      href: `/de/case-studies/${doc.slug}`,
                    },
                  ]
                : [],
            }),
          }),
        },
      },
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
