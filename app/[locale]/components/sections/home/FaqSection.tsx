"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FAQItem {
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

export default function FAQSection() {
  const { i18n } = useTranslation("common");
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs");
        const data = await response.json();
        setFaqItems(data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 backdrop-blur-xl mb-8">
            <motion.div
              className="w-2.5 h-2.5 bg-[#00CC66] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#00CC66]">FAQ</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {i18n.language === "en"
              ? "Questions & Answers"
              : "Fragen & Antworten"}
          </h2>
          <p className="text-lg text-gray-400">
            {i18n.language === "en"
              ? "Expert insights on Agentforce & Data Privacy."
              : "Expertenwissen zu Agentforce & Datenschutz."}
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
          <p className="text-gray-400 mb-6">
            {i18n.language === "en"
              ? "Have more questions? Our experts are ready to help."
              : "Weitere Fragen? Unsere Experten helfen gerne weiter."}
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 204, 102, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-base transition-all"
          >
            {i18n.language === "en"
              ? "Schedule a Consultation"
              : "Beratungsgespräch vereinbaren"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
