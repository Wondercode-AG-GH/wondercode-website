import { defineField, defineType } from "sanity";

export default defineType({
  name: "agenticExpertise",
  title: "Agentic Expertise Section",
  type: "document",
  fields: [
    // Section Header
    defineField({
      name: "title",
      title: "Main Title (EN)",
      type: "string",
    }),
    defineField({
      name: "titleDe",
      title: "Main Title (DE)",
      type: "string",
    }),
    defineField({
      name: "titleHighlight",
      title: "Title Highlight (EN)",
      type: "string",
    }),
    defineField({
      name: "titleHighlightDe",
      title: "Title Highlight (DE)",
      type: "string",
    }),
    defineField({
      name: "description1",
      title: "Description 1 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description1De",
      title: "Description 1 (DE)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description2",
      title: "Description 2 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description2De",
      title: "Description 2 (DE)",
      type: "text",
      rows: 3,
    }),

    // Roadmap Section
    defineField({
      name: "roadmapTitle",
      title: "Roadmap Title (EN)",
      type: "string",
    }),
    defineField({
      name: "roadmapTitleDe",
      title: "Roadmap Title (DE)",
      type: "string",
    }),
    defineField({
      name: "roadmapSubline",
      title: "Roadmap Subline (EN)",
      type: "string",
    }),
    defineField({
      name: "roadmapSublineDe",
      title: "Roadmap Subline (DE)",
      type: "string",
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (Lucide name)", type: "string" },
            { name: "title", title: "Title (EN)", type: "string" },
            { name: "titleDe", title: "Title (DE)", type: "string" },
            {
              name: "description",
              title: "Description (EN)",
              type: "text",
              rows: 2,
            },
            {
              name: "descriptionDe",
              title: "Description (DE)",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    }),

    // Tech Specs Section
    defineField({
      name: "techSpecsLabel",
      title: "Tech Specs Label (EN)",
      type: "string",
    }),
    defineField({
      name: "techSpecsLabelDe",
      title: "Tech Specs Label (DE)",
      type: "string",
    }),
    defineField({
      name: "techSpecsSubline",
      title: "Tech Specs Subline (EN)",
      type: "string",
    }),
    defineField({
      name: "techSpecsSublineDe",
      title: "Tech Specs Subline (DE)",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (Lucide name)", type: "string" },
            { name: "label", title: "Tab Label (EN)", type: "string" },
            { name: "labelDe", title: "Tab Label (DE)", type: "string" },
            { name: "title", title: "Feature Title (EN)", type: "string" },
            { name: "titleDe", title: "Feature Title (DE)", type: "string" },
            {
              name: "description",
              title: "Feature Description (EN)",
              type: "text",
              rows: 3,
            },
            {
              name: "descriptionDe",
              title: "Feature Description (DE)",
              type: "text",
              rows: 3,
            },
            {
              name: "badge",
              title: "Badge Text (e.g., PRODUCTION READY)",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
