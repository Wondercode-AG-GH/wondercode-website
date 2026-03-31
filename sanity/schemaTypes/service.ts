import { defineField, defineType } from "sanity";

export default defineType({
  name: "salesforceEcosystem",
  title: "Salesforce Ecosystem",
  type: "document",
  fields: [
    // Basic Info
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which services appear (lower numbers appear first)",
    }),

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

    // Listing Page Info (Landing Page)
    defineField({
      name: "listTitle",
      title: "Listing Title (EN)",
      type: "string",
      description: "Title shown on the services listing/landing page",
    }),
    defineField({
      name: "listTitleDe",
      title: "Listing Title (DE)",
      type: "string",
      description: "Titel auf der Service-Übersichtsseite",
    }),
    defineField({
      name: "listDescription",
      title: "Listing Description (EN)",
      type: "text",
      description: "Description shown on the services listing/landing page",
    }),
    defineField({
      name: "listDescriptionDe",
      title: "Listing Description (DE)",
      type: "text",
      description: "Beschreibung auf der Service-Übersichtsseite",
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

    // Section Headlines
    defineField({
      name: "scopeHeadlineWhite",
      title: "Scope Section Headline - White Part (EN)",
      type: "string",
      description: "e.g. 'Included in the '",
    }),
    defineField({
      name: "scopeHeadlineAccent",
      title: "Scope Section Headline - Green Part (EN)",
      type: "string",
      description: "e.g. 'Package'",
    }),
    defineField({
      name: "scopeHeadlineWhiteDe",
      title: "Scope Section Headline - White Part (DE)",
      type: "string",
      description: "e.g. 'Im '",
    }),
    defineField({
      name: "scopeHeadlineAccentDe",
      title: "Scope Section Headline - Green Part (DE)",
      type: "string",
      description: "e.g. 'Paket enthalten'",
    }),

    // Hero Benefit List
    defineField({
      name: "benefitList",
      title: "Hero Benefit List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", title: "Text (EN)", type: "string" },
            { name: "textDe", title: "Text (DE)", type: "string" },
          ],
        },
      ],
    }),

    // Hero CTA
    defineField({
      name: "heroCta",
      title: "Hero CTA Button (EN)",
      type: "string",
    }),

    defineField({
      name: "heroCtaDe",
      title: "Hero CTA Button (DE)",
      type: "string",
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

    // Case Study Text Content
    defineField({
      name: "caseStudyEyebrow",
      title: "Case Study Eyebrow Badge (EN)",
      type: "string",
    }),
    defineField({
      name: "caseStudyEyebrowDe",
      title: "Case Study Eyebrow Badge (DE)",
      type: "string",
    }),
    defineField({
      name: "caseStudyHeadline",
      title: "Case Study Headline (EN)",
      type: "string",
    }),
    defineField({
      name: "caseStudyHeadlineDe",
      title: "Case Study Headline (DE)",
      type: "string",
    }),
    defineField({
      name: "caseStudySubline",
      title: "Case Study Subline (EN)",
      type: "text",
    }),
    defineField({
      name: "caseStudySublineDe",
      title: "Case Study Subline (DE)",
      type: "text",
    }),
    defineField({
      name: "caseStudyProblem",
      title: "Case Study Problem (EN)",
      type: "text",
    }),
    defineField({
      name: "caseStudyProblemDe",
      title: "Case Study Problem (DE)",
      type: "text",
    }),
    defineField({
      name: "caseStudySolution",
      title: "Case Study Solution (EN)",
      type: "text",
    }),
    defineField({
      name: "caseStudySolutionDe",
      title: "Case Study Solution (DE)",
      type: "text",
    }),
    defineField({
      name: "caseStudyResult",
      title: "Case Study Result (EN)",
      type: "text",
    }),
    defineField({
      name: "caseStudyResultDe",
      title: "Case Study Result (DE)",
      type: "text",
    }),
    defineField({
      name: "caseStudyQuoteText",
      title: "Case Study Quote Text (EN)",
      type: "text",
    }),
    defineField({
      name: "caseStudyQuoteTextDe",
      title: "Case Study Quote Text (DE)",
      type: "text",
    }),
    defineField({
      name: "caseStudyQuoteAuthor",
      title: "Case Study Quote Author (EN)",
      type: "string",
    }),
    defineField({
      name: "caseStudyQuoteAuthorDe",
      title: "Case Study Quote Author (DE)",
      type: "string",
    }),

    // Case Study Metrics
    defineField({
      name: "caseStudyMetrics",
      title: "Case Study Metrics",
      type: "object",
      fields: [
        {
          name: "timeToValueHeading",
          title: "Time to Value Heading (EN)",
          type: "string",
          description: "e.g., Time-to-Value",
        },
        {
          name: "timeToValueHeadingDe",
          title: "Time to Value Heading (DE)",
          type: "string",
          description: "e.g., Zeit-bis-Wert",
        },
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
          name: "userAdoptionHeading",
          title: "User Adoption Heading (EN)",
          type: "string",
          description: "e.g., User Adoption",
        },
        {
          name: "userAdoptionHeadingDe",
          title: "User Adoption Heading (DE)",
          type: "string",
          description: "e.g., Nutzer-Adoption",
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
          name: "efficiencyHeading",
          title: "Efficiency Heading (EN)",
          type: "string",
          description: "e.g., Efficiency",
        },
        {
          name: "efficiencyHeadingDe",
          title: "Efficiency Heading (DE)",
          type: "string",
          description: "e.g., Effizienz",
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

    // Bottom CTA Section
    defineField({
      name: "ctaHeadline",
      title: "Bottom CTA Headline (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaHeadlineDe",
      title: "Bottom CTA Headline (DE)",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "Bottom CTA Description (EN)",
      type: "text",
    }),
    defineField({
      name: "ctaDescriptionDe",
      title: "Bottom CTA Description (DE)",
      type: "text",
    }),
    defineField({
      name: "ctaButtonText",
      title: "Bottom CTA Button Text (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaButtonTextDe",
      title: "Bottom CTA Button Text (DE)",
      type: "string",
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
