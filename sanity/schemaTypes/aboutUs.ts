import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us Section",
  type: "document",
  fields: [
    // Section Header
    defineField({
      name: "aboutText",
      title: "About Text (e.g., 'About') (EN)",
      type: "string",
    }),
    defineField({
      name: "aboutTextDe",
      title: "About Text (e.g., 'Über') (DE)",
      type: "string",
    }),
    defineField({
      name: "usText",
      title: "Us Text (e.g., 'Us') (EN)",
      type: "string",
    }),
    defineField({
      name: "usTextDe",
      title: "Us Text (e.g., 'Uns') (DE)",
      type: "string",
    }),

    // Badge
    defineField({
      name: "badge",
      title: "Badge Text (EN)",
      type: "string",
    }),
    defineField({
      name: "badgeDe",
      title: "Badge Text (DE)",
      type: "string",
    }),

    // Mission Title
    defineField({
      name: "title",
      title: "Mission Title (EN)",
      type: "string",
    }),
    defineField({
      name: "titleDe",
      title: "Mission Title (DE)",
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

    // Descriptions
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
    defineField({
      name: "description3",
      title: "Description 3 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description3De",
      title: "Description 3 (DE)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description4",
      title: "Description 4 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description4De",
      title: "Description 4 (DE)",
      type: "text",
      rows: 3,
    }),

    // Founders Section
    defineField({
      name: "foundersImage",
      title: "Founders Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "foundersLabel",
      title: "Founders Label (EN)",
      type: "string",
      initialValue: "THE FOUNDERS",
    }),
    defineField({
      name: "foundersLabelDe",
      title: "Founders Label (DE)",
      type: "string",
      initialValue: "DIE GRÜNDER",
    }),
    defineField({
      name: "foundersTitle",
      title: "Founders Title (EN)",
      type: "string",
    }),
    defineField({
      name: "foundersTitleDe",
      title: "Founders Title (DE)",
      type: "string",
    }),
    defineField({
      name: "foundersDescription",
      title: "Founders Description (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "foundersDescriptionDe",
      title: "Founders Description (DE)",
      type: "text",
      rows: 3,
    }),

    // Core Values Section
    defineField({
      name: "valuesTitle",
      title: "Core Values Section Title (EN)",
      type: "string",
      initialValue: "Core Values",
    }),
    defineField({
      name: "valuesTitleDe",
      title: "Core Values Section Title (DE)",
      type: "string",
      initialValue: "Unsere Werte",
    }),
    defineField({
      name: "coreValues",
      title: "Core Values List",
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
  ],
});
