import { defineField, defineType } from "sanity";

/**
 * Singleton "Home Page" document.
 *
 * This document doesn't drive any rendered content directly — the home
 * page is still composed of the existing per-section singletons (hero,
 * aboutUs, agenticExpertise, etc.) and continues to fetch them as
 * before. Its purpose is purely editorial: it gives the Sanity
 * Presentation Tool's right-hand document panel a single "main" document
 * to open when the iframe is on `/en` or `/de`, with a clickable list of
 * references to every section that composes the home page. Editors can
 * pick any section from that list to drill into and edit live.
 */
export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Home Page",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "sections",
      title: "Sections on this page",
      description:
        "Every section that composes the public home page. Click any item to open it and edit live in the preview.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "hero" },
            { type: "header" },
            { type: "footer" },
            { type: "coreExpertiseHeader" },
            { type: "agenticExpertise" },
            { type: "customEngineering" },
            { type: "industryExpertiseHeader" },
            { type: "caseStudiesGalleryHeader" },
            { type: "aboutUs" },
            { type: "faqHeader" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
