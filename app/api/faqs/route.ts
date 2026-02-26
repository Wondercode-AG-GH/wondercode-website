import { client } from "@/sanity/lib/client";
import { allFaqsQuery } from "@/sanity/lib/sanity.queries";

interface FAQ {
  _id: string;
  question: string;
  questionDe: string;
  answer: string;
  answerDe: string;
  order?: number;
}

interface FormattedFAQ {
  _id: string;
  question: {
    en: string;
    de: string;
  };
  answer: {
    en: string;
    de: string;
  };
}

export async function GET() {
  try {
    const faqs = (await client.fetch(allFaqsQuery)) as FAQ[];

    const formatted: FormattedFAQ[] = faqs.map((faq) => ({
      _id: faq._id,
      question: {
        en: faq.question,
        de: faq.questionDe,
      },
      answer: {
        en: faq.answer,
        de: faq.answerDe,
      },
    }));

    return Response.json(formatted);
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return Response.json({ error: "Failed to fetch FAQs" }, { status: 500 });
  }
}
