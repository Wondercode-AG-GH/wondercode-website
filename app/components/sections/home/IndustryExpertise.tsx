"use client";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Industry {
  _id: string;
  title: string;
  titleDe: string;
  slug: string;
  heroSubline: string;
  heroSublineDe: string;
}

export default function IndustryExpertise() {
  const { t, i18n } = useTranslation("common");
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First item expanded on mobile

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await fetch("/api/industries");
        const data = await response.json();
        setIndustries(data);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <motion.section
      id="industry-expertise"
      className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
      style={{ position: "relative" }}
    >
      <motion.div
        className="max-w-[1400px] mx-auto"
        style={{ position: "relative" }}
      >
        {/* Section Header */}
        <div className="mb-12 md:mb-20" style={{ position: "relative" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 backdrop-blur-xl mb-8">
            <div className="w-2.5 h-2.5 bg-[#00CC66] rounded-full" />
            <span className="text-sm font-medium text-[#00CC66]">
              {t("industriesSection.badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            {t("industriesSection.title")}{" "}
            <span className="text-[#00CC66]">
              {t("industriesSection.titleHighlight")}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl">
            {t("industriesSection.description")}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-400">{t("common.loadingIndustries")}</p>
          </div>
        )}

        {/* Desktop: Interactive Hover List */}
        {!loading && (
          <motion.div
            className="hidden md:block max-w-5xl"
            style={{ position: "relative" }}
          >
            {industries.map((industry, index) => (
              <div key={industry._id}>
                <Link href={`/industries/${industry.slug}`}>
                  <motion.div
                    className="relative py-8 cursor-pointer group"
                    style={{ position: "relative" }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="flex items-center justify-between"
                      style={{ position: "relative" }}
                    >
                      {/* Left: Industry Title */}
                      <div
                        className="flex items-center gap-6"
                        style={{ position: "relative" }}
                      >
                        <motion.h3
                          className="text-2xl md:text-3xl font-bold transition-colors duration-300"
                          style={{
                            position: "relative",
                            color:
                              hoveredIndex === index ? "#FFFFFF" : "#666666",
                          }}
                        >
                          {i18n.language === "de"
                            ? industry.titleDe || industry.title
                            : industry.title}
                        </motion.h3>

                        {/* Arrow - appears on hover */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            x: hoveredIndex === index ? 0 : -10,
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ position: "relative" }}
                        >
                          <ArrowRight
                            className="w-6 h-6"
                            style={{ color: "#00CC66" }}
                          />
                        </motion.div>
                      </div>

                      {/* Right: Context Text - appears on hover */}
                      <motion.div
                        className="text-base font-bold text-gray-400 max-w-md text-right"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          x: hoveredIndex === index ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ position: "relative" }}
                      >
                        {i18n.language === "de"
                          ? industry.heroSublineDe || industry.heroSubline
                          : industry.heroSubline}
                      </motion.div>
                    </div>

                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 -mx-8 rounded-2xl"
                      style={{
                        position: "absolute",
                        background: "rgba(0, 204, 102, 0.03)",
                        border: "1px solid rgba(0, 204, 102, 0.1)",
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      initial={false}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>

                {/* Divider - don't show after last item */}
                {index < industries.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Mobile: Vertical Accordion Stack */}
        {!loading && (
          <motion.div
            className="md:hidden space-y-3"
            style={{ position: "relative" }}
          >
            {industries.map((industry, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <Link key={industry._id} href={`/industries/${industry.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border overflow-hidden cursor-pointer"
                    style={{
                      position: "relative",
                      background: isExpanded
                        ? "rgba(0, 204, 102, 0.05)"
                        : "rgba(17, 17, 17, 0.5)",
                      borderColor: isExpanded
                        ? "rgba(0, 204, 102, 0.3)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {/* Header - Always visible */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setExpandedIndex(isExpanded ? -1 : index);
                      }}
                      className="w-full p-5 flex items-center justify-between gap-4"
                      style={{ position: "relative" }}
                    >
                      <h3
                        className="text-xl font-bold text-left transition-colors"
                        style={{
                          color: isExpanded ? "#00CC66" : "#FFFFFF",
                        }}
                      >
                        {industry.titleDe}
                      </h3>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className="w-5 h-5"
                          style={{ color: isExpanded ? "#00CC66" : "#666666" }}
                        />
                      </motion.div>
                    </button>

                    {/* Content - Expandable */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="flex items-start gap-3">
                          <ArrowRight
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: "#00CC66" }}
                          />
                          <p className="text-base text-gray-400 leading-relaxed">
                            {industry.heroSublineDe}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}
