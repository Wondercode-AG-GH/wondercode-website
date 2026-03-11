import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqHeader",
  title: "FAQ Section Header",
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
    defineField({
      name: "ctaText",
      title: "CTA Text (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaTextDe",
      title: "CTA Text (DE)",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text (EN)",
      type: "string",
    }),
    defineField({
      name: "buttonTextDe",
      title: "Button Text (DE)",
      type: "string",
    }),
  ],
});
