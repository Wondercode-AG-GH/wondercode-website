import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudiesGalleryHeader",
  title: "Case Studies Gallery Header",
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
      name: "description",
      title: "Description (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionDe",
      title: "Description (DE)",
      type: "text",
      rows: 3,
    }),
  ],
});
