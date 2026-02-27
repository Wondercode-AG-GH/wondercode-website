import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "questionDe",
      title: "Question (DE)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "answer",
      title: "Answer (EN)",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "answerDe",
      title: "Answer (DE)",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which FAQs appear (lower numbers appear first)",
    }),
  ],

  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle?.substring(0, 80) + "...",
      };
    },
  },
});
