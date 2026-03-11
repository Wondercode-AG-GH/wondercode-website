import { defineField, defineType } from "sanity";

export default defineType({
  name: "coreExpertiseHeader",
  title: "Core Expertise Section Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (EN)",
      type: "string",
    }),
    defineField({
      name: "titleDe",
      title: "Title (DE)",
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
  ],
});
