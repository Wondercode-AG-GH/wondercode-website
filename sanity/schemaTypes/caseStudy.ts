import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    // Basic Info
    defineField({
      name: "title",
      title: "Case Study Title (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleDe",
      title: "Case Study Title (DE)",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "e.g., Healthcare, Finance, Retail, Manufacturing",
      validation: (Rule) => Rule.required(),
    }),

    // Hero Section
    defineField({
      name: "heroHeadline",
      title: "Hero Headline (EN)",
      type: "text",
      description: "Main headline for the hero section",
    }),

    defineField({
      name: "heroHeadlineDe",
      title: "Hero Headline (DE)",
      type: "text",
    }),

    defineField({
      name: "heroSubline",
      title: "Hero Subline (EN)",
      type: "string",
      description: "Subtitle below the main headline",
    }),

    defineField({
      name: "heroSublineDe",
      title: "Hero Subline (DE)",
      type: "string",
    }),

    defineField({
      name: "timelineMetric",
      title: "Timeline Metric (e.g., 4 MONTHS)",
      type: "string",
    }),

    defineField({
      name: "timelineLabel",
      title: "Timeline Label (EN)",
      type: "string",
      description: "e.g., Timeline",
    }),

    defineField({
      name: "timelineLabelDe",
      title: "Timeline Label (DE)",
      type: "string",
    }),

    // Gallery Display Metric
    defineField({
      name: "galleryMetric",
      title: "Gallery Metric (EN)",
      type: "string",
      description: "Main metric for gallery display (e.g., '+215%', '-68%')",
    }),

    defineField({
      name: "galleryMetricDe",
      title: "Gallery Metric (DE)",
      type: "string",
      description: "Main metric for gallery display (DE)",
    }),

    defineField({
      name: "galleryMetricLabel",
      title: "Gallery Metric Label (EN)",
      type: "string",
      description: "Label for the gallery metric (e.g., 'Patient Engagement')",
    }),

    defineField({
      name: "galleryMetricLabelDe",
      title: "Gallery Metric Label (DE)",
      type: "string",
      description: "Label for the gallery metric (DE)",
    }),

    // Executive Summary
    defineField({
      name: "executiveSummary",
      title: "Executive Summary (EN)",
      type: "array",
      of: [{ type: "string" }],
      description: "Array of paragraphs for executive summary",
    }),

    defineField({
      name: "executiveSummaryDe",
      title: "Executive Summary (DE)",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Customer Information
    defineField({
      name: "customer",
      title: "Customer Information",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Customer Name",
          type: "string",
        },
        {
          name: "headline",
          title: "Customer Headline (EN)",
          type: "string",
          description: "e.g., 'Der Kunde: SAH Zürich'",
        },
        {
          name: "headlineDe",
          title: "Customer Headline (DE)",
          type: "string",
        },
        {
          name: "description",
          title: "Customer Description (EN)",
          type: "text",
        },
        {
          name: "descriptionDe",
          title: "Customer Description (DE)",
          type: "text",
        },
        {
          name: "highlights",
          title: "Customer Highlights",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Highlight Title (EN)",
                  type: "string",
                },
                {
                  name: "titleDe",
                  title: "Highlight Title (DE)",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Highlight Description (EN)",
                  type: "text",
                },
                {
                  name: "descriptionDe",
                  title: "Highlight Description (DE)",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    }),

    // Challenge Information
    defineField({
      name: "challenge",
      title: "Challenge Information",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Challenge Headline (EN)",
          type: "string",
          description: "e.g., 'Die Herausforderung'",
        },
        {
          name: "headlineDe",
          title: "Challenge Headline (DE)",
          type: "string",
        },
        {
          name: "intro",
          title: "Challenge Intro/Description (EN)",
          type: "text",
        },
        {
          name: "introDe",
          title: "Challenge Intro/Description (DE)",
          type: "text",
        },
        {
          name: "issues",
          title: "Challenge Issues",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Issue Title (EN)",
                  type: "string",
                },
                {
                  name: "titleDe",
                  title: "Issue Title (DE)",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Issue Description (EN)",
                  type: "text",
                },
                {
                  name: "descriptionDe",
                  title: "Issue Description (DE)",
                  type: "text",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  description:
                    "Use icon name like: Database, Lock, Zap, Cloud, Code, Activity",
                },
              ],
            },
          ],
        },
      ],
    }),

    // Solution (Architecture)
    defineField({
      name: "solution",
      title: "Solution & Architecture",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Solution Headline (EN)",
          type: "string",
          description: "e.g., 'Die Lösung: Skalierbare Architektur'",
        },
        {
          name: "headlineDe",
          title: "Solution Headline (DE)",
          type: "string",
        },
        {
          name: "intro",
          title: "Solution Description (EN)",
          type: "text",
        },
        {
          name: "introDe",
          title: "Solution Description (DE)",
          type: "text",
        },
        {
          name: "techStacks",
          title: "Technology Stack",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Technology Name",
                  type: "string",
                  description: "e.g., 'Salesforce Nonprofit Cloud'",
                },
                {
                  name: "category",
                  title: "Category",
                  type: "string",
                  description: "e.g., Backend, Frontend, Auth/DB, Storage, Infrastructure",
                },
                {
                  name: "categoryDe",
                  title: "Category (DE)",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description (EN)",
                  type: "text",
                },
                {
                  name: "descriptionDe",
                  title: "Description (DE)",
                  type: "text",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  description:
                    "Use icon name like: Cloud, Code, Database, Lock, Activity",
                },
              ],
            },
          ],
        },
      ],
    }),

    // Results & Value
    defineField({
      name: "results",
      title: "Results & Value",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Results Headline (EN)",
          type: "string",
          description: "e.g., 'Ergebnisse & Mehrwert'",
        },
        {
          name: "headlineDe",
          title: "Results Headline (DE)",
          type: "string",
        },
        {
          name: "pillars",
          title: "Result Pillars (3 columns)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Pillar Title (EN)",
                  type: "string",
                },
                {
                  name: "titleDe",
                  title: "Pillar Title (DE)",
                  type: "string",
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  description: "Use icon name like: Zap, Code, Lock",
                },
                {
                  name: "items",
                  title: "Result Items",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "text",
                          title: "Item Text (EN)",
                          type: "string",
                        },
                        {
                          name: "textDe",
                          title: "Item Text (DE)",
                          type: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    // Testimonial
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "object",
      fields: [
        {
          name: "quote",
          title: "Quote (EN)",
          type: "text",
          description: "The testimonial quote",
        },
        {
          name: "quoteDe",
          title: "Quote (DE)",
          type: "text",
        },
        {
          name: "author",
          title: "Author Name",
          type: "string",
        },
        {
          name: "role",
          title: "Author Role (EN)",
          type: "string",
        },
        {
          name: "roleDe",
          title: "Author Role (DE)",
          type: "string",
        },
      ],
    }),

    // CTA Section
    defineField({
      name: "cta",
      title: "Call-to-Action",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "CTA Headline (EN)",
          type: "string",
          description: "e.g., 'Facing a similar legacy challenge?'",
        },
        {
          name: "headlineDe",
          title: "CTA Headline (DE)",
          type: "string",
        },
        {
          name: "description",
          title: "CTA Description (EN)",
          type: "text",
        },
        {
          name: "descriptionDe",
          title: "CTA Description (DE)",
          type: "text",
        },
        {
          name: "buttonText",
          title: "Button Text (EN)",
          type: "string",
          description: "e.g., 'Book Architecture Audit'",
        },
        {
          name: "buttonTextDe",
          title: "Button Text (DE)",
          type: "string",
        },
      ],
    }),

    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],
});
