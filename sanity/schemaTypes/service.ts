import { defineField, defineType } from "sanity";

export default defineType({
  name: "salesforceEcosystem",
  title: "Salesforce Ecosystem",
  type: "document",
  fields: [
    // Basic Info
    defineField({
      name: "title",
      title: "Service Name (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleDe",
      title: "Service Name (DE)",
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
      name: "icon",
      title: "Icon Name",
      type: "string",
      description:
        "Use icon name like: TrendingUp, Headphones, Shield, Receipt, Heart, Globe, Radio, Settings, Database, Zap, Users, Trophy, Cpu, BarChart3, Rocket, Lock, Code, Cloud, Activity, etc.",
      validation: (Rule) => Rule.required(),
    }),

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
      name: "definitionText",
      title: "Definition Text (EN)",
      type: "text",
    }),

    defineField({
      name: "definitionTextDe",
      title: "Definition Text (DE)",
      type: "text",
    }),

    // Scope Cards
    defineField({
      name: "scopeCards",
      title: "Scope Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "titleDe", type: "string" },
            { name: "description", type: "text" },
            { name: "descriptionDe", type: "text" },
            {
              name: "icon",
              type: "string",
              description:
                "Use icon name like: Headphones, Settings, Database, Zap, Users",
            },
          ],
        },
      ],
    }),

    // Target Audience
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string" },
            { name: "textDe", type: "string" },
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

    // Hero Section Image
    defineField({
      name: "heroImage",
      title: "Hero Section Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Blueprint/Architecture visualization image for the right side of hero section",
    }),

    // Case Study Metrics
    defineField({
      name: "caseStudyMetrics",
      title: "Case Study Metrics",
      type: "object",
      fields: [
        {
          name: "timeToValue",
          title: "Time to Value (EN)",
          type: "string",
          description: "e.g., 28 or 4 Weeks",
        },
        {
          name: "timeToValueDe",
          title: "Time to Value (DE)",
          type: "string",
          description: "e.g., 28 oder 4 Wochen",
        },
        {
          name: "timeToValueLabel",
          title: "Time to Value Label (EN)",
          type: "string",
          description: "e.g., Tage · Kickoff bis Go-Live",
        },
        {
          name: "timeToValueLabelDe",
          title: "Time to Value Label (DE)",
          type: "string",
        },
        {
          name: "userAdoption",
          title: "User Adoption (EN)",
          type: "string",
          description: "e.g., 100%",
        },
        {
          name: "userAdoptionLabel",
          title: "User Adoption Label (EN)",
          type: "string",
          description: "e.g., Nutzer-Adoption",
        },
        {
          name: "userAdoptionLabelDe",
          title: "User Adoption Label (DE)",
          type: "string",
        },
        {
          name: "efficiency",
          title: "Efficiency (EN)",
          type: "string",
          description: "e.g., -4",
        },
        {
          name: "efficiencyLabel",
          title: "Efficiency Label (EN)",
          type: "string",
          description: "e.g., Std./Woche gespart",
        },
        {
          name: "efficiencyLabelDe",
          title: "Efficiency Label (DE)",
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
