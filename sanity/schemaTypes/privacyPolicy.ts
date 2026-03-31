import { defineField, defineType } from "sanity";

export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
    }),
    defineField({
      name: "titleDe",
      title: "Title (DE)",
      type: "string",
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (EN)",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "descriptionDe",
      title: "Description (DE)",
      type: "text",
      rows: 10,
    }),
  ],
});
