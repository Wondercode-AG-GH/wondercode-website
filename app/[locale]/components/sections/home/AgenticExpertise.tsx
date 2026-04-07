"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Cpu,
  Rocket,
  Brain,
  Shield,
  TrendingUp,
  Zap,
  Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { iconMap } from "@/sanity/lib/iconMap";

interface AgenticExpertiseData {
  title?: string;
  titleDe?: string;
  titleHighlight?: string;
  titleHighlightDe?: string;
  description1?: string;
  description1De?: string;
  description2?: string;
  description2De?: string;
  roadmapTitle?: string;
  roadmapTitleDe?: string;
  roadmapSubline?: string;
  roadmapSublineDe?: string;
  processSteps?: any[];
  techSpecsLabel?: string;
  techSpecsLabelDe?: string;
  techSpecsSubline?: string;
  techSpecsSublineDe?: string;
  features?: any[];
}

export default function AgentforceSplitScreen() {
  const { t, i18n } = useTranslation("common");
  const [activeFeature, setActiveFeature] = useState(0);
  const [data, setData] = useState<AgenticExpertiseData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/agentic-expertise");
        if (res.ok) {
          const fetchedData = await res.json();
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching agentic expertise data:", error);
      }
    }
    fetchData();
  }, []);

  const isGerman = i18n.language === "de";

  const mainTitle = isGerman
    ? data?.titleDe || t("agentforceExpertise.title")
    : data?.title || t("agentforceExpertise.title");

  const titleHighlight = isGerman
    ? data?.titleHighlightDe || t("agentforceExpertise.titleHighlight")
    : data?.titleHighlight || t("agentforceExpertise.titleHighlight");

  const description1 = isGerman
    ? data?.description1De || t("agentforceExpertise.description")
    : data?.description1 || t("agentforceExpertise.description");

  const description2 = isGerman
    ? data?.description2De || t("agentforceExpertise.description2")
    : data?.description2 || t("agentforceExpertise.description2");

  const roadmapTitle = isGerman
    ? data?.roadmapTitleDe || t("agentforceExpertise.roadmapTitle")
    : data?.roadmapTitle || t("agentforceExpertise.roadmapTitle");

  const roadmapSubline = isGerman
    ? data?.roadmapSublineDe || "Wie wir den Sprung sicher machen"
    : data?.roadmapSubline || "How we make the leap safe";

  const techSpecsLabel = isGerman
    ? data?.techSpecsLabelDe || "The Tech Specs"
    : data?.techSpecsLabel || "The Tech Specs";

  const techSpecsSubline = isGerman
    ? data?.techSpecsSublineDe || "Warum es jetzt funktioniert"
    : data?.techSpecsSubline || "Why it works now";

  const processSteps =
    data?.processSteps && data.processSteps.length > 0
      ? data.processSteps.map((step: any) => ({
          icon: iconMap[step.icon] || Settings,
          title: isGerman ? step.titleDe || step.title : step.title,
          description: isGerman
            ? step.descriptionDe || step.description
            : step.description,
        }))
      : [
          {
            icon: Search,
            title: t("agentforceExpertise.processSteps.0.title"),
            description: t("agentforceExpertise.processSteps.0.description"),
          },
          {
            icon: Cpu,
            title: t("agentforceExpertise.processSteps.1.title"),
            description: t("agentforceExpertise.processSteps.1.description"),
          },
          {
            icon: Rocket,
            title: t("agentforceExpertise.processSteps.2.title"),
            description: t("agentforceExpertise.processSteps.2.description"),
          },
        ];

  const features =
    data?.features && data.features.length > 0
      ? data.features.map((f: any) => ({
          icon: iconMap[f.icon] || Zap,
          label: isGerman ? f.labelDe || f.label : f.label,
          title: isGerman ? f.titleDe || f.title : f.title,
          description: isGerman
            ? f.descriptionDe || f.description
            : f.description,
          badge: f.badge || "PRODUCTION READY",
        }))
      : [
          {
            icon: Brain,
            label: t("agentforceExpertise.features.decisionPower"),
            title: t("agentforceExpertise.features.decisionPowerTitle"),
            description: t("agentforceExpertise.features.decisionPowerDesc"),
            badge: "PRODUCTION READY",
          },
          {
            icon: Shield,
            label: t("agentforceExpertise.features.security"),
            title: t("agentforceExpertise.features.securityTitle"),
            description: t("agentforceExpertise.features.securityDesc"),
            badge: "PRODUCTION READY",
          },
          {
            icon: TrendingUp,
            label: t("agentforceExpertise.features.learningCurve"),
            title: t("agentforceExpertise.features.learningCurveTitle"),
            description: t("agentforceExpertise.features.learningCurveDesc"),
            badge: "PRODUCTION READY",
          },
          {
            icon: Zap,
            label: t("agentforceExpertise.features.speed"),
            title: t("agentforceExpertise.features.speedTitle"),
            description: t("agentforceExpertise.features.speedDesc"),
            badge: "PRODUCTION READY",
          },
        ];

  return (
    <section
      id="agentforce"
      className="relative py-20 md:py-32 px-5 md:px-8"
      style={{
        position: "relative",
        backgroundColor: "#0B0C10",
      }}
    >
      <div className="max-w-[1400px] mx-auto" style={{ position: "relative" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
          style={{ position: "relative" }}
        >
          {/* <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-6 md:mb-8"
            style={{
              backgroundColor: "rgba(0, 204, 102, 0.05)",
              borderColor: "rgba(0, 204, 102, 0.2)",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#00CC66" }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: "#00CC66" }}
            >
              {t("agentforceExpertise.badge")}
            </span>
          </div> */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            {mainTitle} <span className="text-[#00CC66]">{titleHighlight}</span>
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0 text-center md:text-center"
            style={{ color: "#999999" }}
          >
            {description1}
          </p>
          <p
            className="max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0 text-left md:text-center"
            style={{ color: "#999999" }}
          >
            {description2}
          </p>
        </motion.div>

        {/* 2-Column Asymmetrical Layout - Responsive */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: The Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
            style={{ position: "relative" }}
          >
            {/* Headline */}
            <div>
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "white" }}
              >
                {roadmapTitle}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(156, 163, 175, 1)" }}
              >
                {roadmapSubline}
              </p>
            </div>

            {/* Timeline-Style Steps */}
            <div
              className="relative space-y-6"
              style={{ position: "relative" }}
            >
              {/* Connecting Line */}
              <div
                className="absolute left-6 top-8 bottom-8 w-px"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              />

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start gap-4"
                  style={{ position: "relative" }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                    style={{
                      backgroundColor: "#0B0C10",
                      border: "1px solid rgba(0, 204, 102, 0.3)",
                    }}
                  >
                    <step.icon
                      className="w-5 h-5"
                      style={{ color: "#00CC66" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "white" }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(156, 163, 175, 1)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Tech Specs (Tab Switcher) */}

          {/* Desktop (lg+): Split-View Feature Switcher */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex gap-6"
            style={{ position: "relative" }}
          >
            {/* Zone A: Tab Menu (Vertical List) */}
            <motion.div
              className="flex flex-col gap-3"
              style={{ position: "relative", minWidth: "160px" }}
            >
              {/* Subheadline */}
              <div className="mb-2 px-4">
                <p
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#666666" }}
                >
                  {techSpecsLabel}
                </p>
                <p className="text-xs mt-1" style={{ color: "#555555" }}>
                  {techSpecsSubline}
                </p>
              </div>

              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className="relative text-left py-3 px-4 transition-colors duration-300"
                  style={{ position: "relative" }}
                  whileHover={{ x: 4 }}
                >
                  {/* Active Indicator Line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                    style={{
                      position: "absolute",
                      backgroundColor: "#00CC66",
                    }}
                    initial={false}
                    animate={{
                      opacity: activeFeature === index ? 1 : 0,
                      scaleY: activeFeature === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Text */}
                  <motion.span
                    className="text-sm font-medium block pl-4"
                    style={{
                      position: "relative",
                      color: activeFeature === index ? "#FFFFFF" : "#666666",
                    }}
                    animate={{
                      fontWeight: activeFeature === index ? 600 : 500,
                    }}
                  >
                    {feature.label}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>

            {/* Zone B: Preview Window */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex-1 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[450px]"
                style={{
                  position: "relative",
                  backgroundColor: "rgba(21, 23, 27, 0.4)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Icon with Glow Effect */}
                <motion.div
                  className="relative mb-8"
                  style={{ position: "relative" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {/* Glow Background */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{
                      position: "absolute",
                      width: "160px",
                      height: "160px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      backgroundColor: [
                        "rgba(0, 204, 102, 0.3)",
                        "rgba(0, 204, 102, 0.5)",
                        "rgba(0, 204, 102, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-32 h-32 rounded-2xl flex items-center justify-center"
                    style={{
                      position: "relative",
                      backgroundColor: "rgba(0, 204, 102, 0.1)",
                      border: "2px solid rgba(0, 204, 102, 0.3)",
                    }}
                  >
                    {(() => {
                      const ActiveIcon = features[activeFeature].icon;
                      return (
                        <ActiveIcon
                          className="w-16 h-16"
                          style={{ color: "#00CC66" }}
                        />
                      );
                    })()}
                  </motion.div>
                </motion.div>

                {/* Feature Title */}
                <motion.h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#FFFFFF" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {features[activeFeature].title}
                </motion.h4>

                {/* Feature Description */}
                <motion.p
                  className="text-base text-left leading-relaxed max-w-md"
                  style={{ color: "rgba(156, 163, 175, 1)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {features[activeFeature].description}
                </motion.p>

                {/* Status Badge */}
                <motion.div
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(0, 204, 102, 0.1)",
                    border: "1px solid rgba(0, 204, 102, 0.3)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#00CC66" }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: "#00CC66" }}
                  >
                    {features[activeFeature].badge}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Mobile & Tablet (below lg): Vertical Stacked Cards — NO horizontal scroll */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden"
            style={{ position: "relative" }}
          >
            {/* Section Label */}
            <div className="mb-6 text-center">
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "#666666" }}
              >
                {techSpecsLabel}
              </p>
              <p className="text-xs mt-1" style={{ color: "#555555" }}>
                {techSpecsSubline}
              </p>
            </div>

            {/* Tab Pill Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeFeature === index
                        ? "rgba(0, 204, 102, 0.15)"
                        : "rgba(255, 255, 255, 0.05)",
                    border:
                      activeFeature === index
                        ? "1px solid rgba(0, 204, 102, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                    color: activeFeature === index ? "#00CC66" : "#666666",
                  }}
                >
                  {feature.label}
                </button>
              ))}
            </div>

            {/* Single Active Card — full width, no scroll */}
            <AnimatePresence mode="wait">
              {features.map((feature, index) => {
                if (index !== activeFeature) return null;
                const FeatureIcon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="w-full rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center"
                    style={{
                      position: "relative",
                      minHeight: "360px",
                      backgroundColor: "rgba(21, 23, 27, 0.6)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0, 204, 102, 0.3)",
                    }}
                  >
                    {/* Icon with Glow */}
                    <motion.div
                      className="relative mb-6"
                      style={{ position: "relative" }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      {/* Glow Background */}
                      <motion.div
                        className="absolute rounded-full blur-2xl"
                        style={{
                          position: "absolute",
                          width: "120px",
                          height: "120px",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          backgroundColor: [
                            "rgba(0, 204, 102, 0.3)",
                            "rgba(0, 204, 102, 0.5)",
                            "rgba(0, 204, 102, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Icon Container */}
                      <div
                        className="relative w-24 h-24 rounded-xl flex items-center justify-center"
                        style={{
                          position: "relative",
                          backgroundColor: "rgba(0, 204, 102, 0.15)",
                          border: "2px solid rgba(0, 204, 102, 0.4)",
                        }}
                      >
                        <FeatureIcon
                          className="w-12 h-12"
                          style={{ color: "#00CC66" }}
                        />
                      </div>
                    </motion.div>

                    {/* Feature Title */}
                    <motion.h4
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "#FFFFFF" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {feature.title}
                    </motion.h4>

                    {/* Feature Description */}
                    <motion.p
                      className="text-sm sm:text-base leading-relaxed max-w-md"
                      style={{ color: "rgba(156, 163, 175, 1)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Status Badge */}
                    <motion.div
                      className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(0, 204, 102, 0.1)",
                        border: "1px solid rgba(0, 204, 102, 0.3)",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#00CC66" }}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span
                        className="text-xs font-medium uppercase tracking-wide"
                        style={{ color: "#00CC66" }}
                      >
                        {feature.badge}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className="transition-all duration-300"
                  style={{
                    width: activeFeature === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      activeFeature === index
                        ? "#00CC66"
                        : "rgba(255, 255, 255, 0.2)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
