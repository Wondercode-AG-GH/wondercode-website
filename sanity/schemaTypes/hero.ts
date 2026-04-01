import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    // Headline Fields
    defineField({
      name: "line1",
      title: "Headline Line 1 (EN)",
      type: "string",
    }),
    defineField({
      name: "line1De",
      title: "Headline Line 1 (DE)",
      type: "string",
    }),
    defineField({
      name: "line2Highlight",
      title: "Headline Line 2 - Highlight (EN)",
      type: "string",
    }),
    defineField({
      name: "line2HighlightDe",
      title: "Headline Line 2 - Highlight (DE)",
      type: "string",
    }),
    defineField({
      name: "line3",
      title: "Headline Line 3 (EN)",
      type: "string",
    }),
    defineField({
      name: "line3De",
      title: "Headline Line 3 (DE)",
      type: "string",
    }),
    defineField({
      name: "line4Highlight",
      title: "Headline Line 4 - Highlight (EN)",
      type: "string",
    }),
    defineField({
      name: "line4HighlightDe",
      title: "Headline Line 4 - Highlight (DE)",
      type: "string",
    }),

    // Tagline Fields
    defineField({
      name: "subtagline",
      title: "Sub-tagline (EN)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "subtaglineDe",
      title: "Sub-tagline (DE)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "tagline",
      title: "Tagline (EN)",
      type: "string",
    }),
    defineField({
      name: "taglineDe",
      title: "Tagline (DE)",
      type: "string",
    }),
    defineField({
      name: "subtaglineHighlight",
      title: "Tagline Highlight (EN)",
      type: "string",
    }),
    defineField({
      name: "subtaglineHighlightDe",
      title: "Tagline Highlight (DE)",
      type: "string",
    }),

    // CTA Fields
    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Label (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaPrimaryDe",
      title: "Primary CTA Label (DE)",
      type: "string",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Label (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryDe",
      title: "Secondary CTA Label (DE)",
      type: "string",
    }),
    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title (EN)",
      type: "string",
    }),
    defineField({
      name: "seoTitleDe",
      title: "SEO Title (DE)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description (EN)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "seoDescriptionDe",
      title: "SEO Description (DE)",
      type: "text",
      rows: 2,
    }),
  ],
});
