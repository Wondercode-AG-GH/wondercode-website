import { defineField, defineType } from "sanity";

export default defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    // Basic Info
    defineField({
      name: "title",
      title: "Industry Name (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleDe",
      title: "Industry Name (DE)",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    // Hero Section
    defineField({
      name: "heroSubline",
      title: "Hero Subline (EN)",
      type: "text",
    }),

    defineField({
      name: "heroSublineDe",
      title: "Hero Subline (DE)",
      type: "text",
    }),

    defineField({
      name: "heroIcon",
      title: "Hero Icon Name",
      type: "string",
      description:
        "Use icon name like: Shield, Cloud, Database, AlertTriangle, etc.",
    }),

    // Context Section
    defineField({
      name: "contextHeadline",
      title: "Context Headline (EN)",
      type: "string",
    }),

    defineField({
      name: "contextHeadlineDe",
      title: "Context Headline (DE)",
      type: "string",
    }),

    defineField({
      name: "contextParagraph1",
      title: "Context Paragraph 1 (EN)",
      type: "text",
    }),

    defineField({
      name: "contextParagraph1De",
      title: "Context Paragraph 1 (DE)",
      type: "text",
    }),

    defineField({
      name: "contextParagraph2",
      title: "Context Paragraph 2 (EN)",
      type: "text",
    }),

    defineField({
      name: "contextParagraph2De",
      title: "Context Paragraph 2 (DE)",
      type: "text",
    }),

    // Hero Image
    defineField({
      name: "heroImage",
      title: "Hero Section Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Blueprint/Architecture visualization image for the right side of hero section",
    }),

    // Challenges
    defineField({
      name: "challenges",
      title: "Core Challenges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              description: "Icon name like: Database, Lock, AlertTriangle",
            },
            { name: "title", type: "string" },
            { name: "titleDe", type: "string" },
            { name: "description", type: "text" },
            { name: "descriptionDe", type: "text" },
          ],
        },
      ],
    }),

    // Capability Cards
    defineField({
      name: "capabilityCards",
      title: "Capability Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "titleDe", type: "string" },
            { name: "description", type: "text" },
            { name: "descriptionDe", type: "text" },
            { name: "icon", type: "string", description: "Icon name" },
            {
              name: "isAI",
              type: "boolean",
              description: "Mark if this is an AI capability",
            },
          ],
        },
      ],
    }),

    // Use Case / Workflow
    defineField({
      name: "useCaseTitle",
      title: "Use Case Title (EN)",
      type: "string",
    }),

    defineField({
      name: "useCaseTitleDe",
      title: "Use Case Title (DE)",
      type: "string",
    }),

    defineField({
      name: "workflowSteps",
      title: "Workflow Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "labelDe", type: "string" },
            {
              name: "isAI",
              type: "boolean",
              description: "Mark if this is an AI step",
            },
          ],
        },
      ],
    }),

    // FAQ
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "questionDe", type: "string" },
            { name: "answer", type: "text" },
            { name: "answerDe", type: "text" },
          ],
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
      type: "string",
    }),
  ],
});
