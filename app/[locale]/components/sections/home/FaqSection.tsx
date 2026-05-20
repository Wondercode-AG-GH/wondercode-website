"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useOptimistic } from "@sanity/visual-editing/react";

interface FAQItem {
  _id: string;
  _type?: string;
  question: {
    en: string;
    de: string;
  };
  answer: {
    en: string;
    de: string;
  };
}

interface FAQHeader {
  title?: string;
  titleDe?: string;
  description?: string;
  descriptionDe?: string;
  ctaText?: string;
  ctaTextDe?: string;
  buttonText?: string;
  buttonTextDe?: string;
}

export default function FAQSection({
  headerData: serverHeader,
  faqs: serverFaqs,
}: {
  headerData?: FAQHeader | null;
  faqs?: FAQItem[] | null;
} = {}) {
  const { i18n } = useTranslation("common");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  // Studio edits patch in place via postMessage (no router refresh).
  const headerData = useOptimistic<FAQHeader | null>(
    serverHeader ?? null,
    (current, action) => {
      if (action.type !== "mutate") return current;
      const doc = action.document as { _type?: string } & FAQHeader;
      if (doc._type !== "faqHeader") return current;
      return { ...(current ?? {}), ...doc };
    },
  );
  // Raw `faq` documents have flat `question`/`questionDe`/`answer`/
  // `answerDe` fields, but the component renders the nested
  // `{ en, de }` shape produced by page.tsx's transform. So the
  // reducer applies the same transform to incoming mutation events.
  const faqItems = useOptimistic<FAQItem[]>(
    serverFaqs ?? [],
    (current, action) => {
      if (action.type !== "mutate") return current;
      const raw = action.document as unknown as {
        _type?: string;
        _id?: string;
        question?: string;
        questionDe?: string;
        answer?: string;
        answerDe?: string;
      };
      if (raw._type !== "faq") return current;
      const stripDraft = (id: string) =>
        id.startsWith("drafts.") ? id.slice(7) : id;
      const docId = stripDraft(raw._id ?? action.id ?? "");
      const idx = current.findIndex((item) => stripDraft(item._id) === docId);
      if (idx === -1) return current;
      const next = current.slice();
      next[idx] = {
        ...next[idx],
        question: {
          en: raw.question ?? next[idx].question.en,
          de: raw.questionDe ?? next[idx].question.de,
        },
        answer: {
          en: raw.answer ?? next[idx].answer.en,
          de: raw.answerDe ?? next[idx].answer.de,
        },
      };
      return next;
    },
  );
  const loading = false;

  const isGerman = i18n.language === "de";

  const title = isGerman
    ? headerData?.titleDe || "Fragen & Antworten"
    : headerData?.title || "Questions & Answers";

  const description = isGerman
    ? headerData?.descriptionDe || "Expertenwissen zu Agentforce & Datenschutz."
    : headerData?.description ||
      "Expert insights on Agentforce & Data Privacy.";

  const ctaText = isGerman
    ? headerData?.ctaTextDe ||
      "Weitere Fragen? Unsere Experten helfen gerne weiter."
    : headerData?.ctaText ||
      "Have more questions? Our experts are ready to help.";

  const buttonText = isGerman
    ? headerData?.buttonTextDe || "Beratungsgespräch vereinbaren"
    : headerData?.buttonText || "Schedule a Consultation";

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
      style={{ position: "relative" }}
    >
      <div className="max-w-[800px] mx-auto" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{ position: "relative" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            {title}
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0 text-left md:text-center"
            style={{ color: "#999999" }}
          >
            {description}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-400">FAQs laden...</p>
          </div>
        )}

        {/* Accordion Stack */}
        {!loading && (
          <div className="space-y-0" style={{ position: "relative" }}>
            {faqItems.map((item, index) => {
              const isOpen = openItems.has(index);

              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/10 last:border-b-0"
                  style={{ position: "relative" }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-6 flex items-start justify-between gap-6 text-left group hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-lg font-medium text-white leading-relaxed group-hover:text-[#00CC66] transition-colors flex-1">
                      {i18n.language === "en"
                        ? item.question.en
                        : item.question.de}
                    </span>

                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00CC66]/50 transition-colors"
                      style={{
                        backgroundColor: isOpen
                          ? "rgba(0, 204, 102, 0.1)"
                          : "transparent",
                        borderColor: isOpen
                          ? "rgba(0, 204, 102, 0.5)"
                          : undefined,
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#00CC66]" />
                      ) : (
                        <Plus className="w-4 h-4 text-white group-hover:text-[#00CC66] transition-colors" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer (Animated) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0.25, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-14">
                          <p
                            className="text-[#B0B0B0] leading-relaxed"
                            style={{ lineHeight: "160%" }}
                          >
                            {i18n.language === "en"
                              ? item.answer.en
                              : item.answer.de}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
          style={{ position: "relative" }}
        >
          <p className="text-gray-400 mb-6">{ctaText}</p>
          <Link
            href="https://calendar.app.google/mz1GZTzKW9rmSCY26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 204, 102, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-base transition-all"
            >
              {buttonText}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
