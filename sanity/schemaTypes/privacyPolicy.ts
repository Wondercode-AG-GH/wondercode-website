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
    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title (EN)",
      type: "string",
    }),
    defineField({
      name: "seoTitleDe",
      title: "SEO Title (DE)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description (EN)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "seoDescriptionDe",
      title: "SEO Description (DE)",
      type: "text",
      rows: 2,
    }),
  ],
});
