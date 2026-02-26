"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  LucideIcon,
  CheckCircle,
  ChevronDown,
  Settings,
  Database,
  Zap,
  Users,
  Clock,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { iconMap } from "@/sanity/lib/iconMap";

interface ScopeCard {
  title: string;
  titleDe?: string;
  description?: string;
  descriptionDe?: string;
  icon?: string;
}

interface TimelineStep {
  week: string;
  weekDe: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
}

interface ServiceDetailProps {
  icon: string;
  serviceName: string;
  serviceNameDe: string;
  heroSubline: string;
  heroSublineDe: string;
  heroDescription?: string;
  heroDescriptionDe?: string;
  definitionHeadline?: string;
  definitionHeadlineDe?: string;
  definitionText: string;
  definitionTextDe: string;
  scopeHeadline?: string;
  scopeHeadlineDe?: string;
  scopeCards: ScopeCard[];
  timelineHeadline?: string;
  timelineHeadlineDe?: string;
  timelineSubline?: string;
  timelineSublineDe?: string;
  timelineSteps?: TimelineStep[];
  targetAudience: { text: string; textDe?: string }[];
  faqItems: {
    question: string;
    questionDe?: string;
    answer?: string;
    answerDe?: string;
  }[];
  ctaHeadline?: string;
  ctaHeadlineDe?: string;
  ctaText?: string;
  ctaTextDe?: string;
  ctaButtonPrimary?: string;
  ctaButtonPrimaryDe?: string;
  ctaButtonSecondary?: string;
  ctaButtonSecondaryDe?: string;
  heroImage?: {
    asset?: { url: string; _id?: string };
    alt?: string;
    hotspot?: any;
    crop?: any;
  };
  caseStudyMetrics?: {
    timeToValue?: string;
    timeToValueDe?: string;
    timeToValueLabel?: string;
    timeToValueLabelDe?: string;
    userAdoption?: string;
    userAdoptionLabel?: string;
    userAdoptionLabelDe?: string;
    efficiency?: string;
    efficiencyLabel?: string;
    efficiencyLabelDe?: string;
  };
}

export default function ServiceDetailPage({
  icon: iconName,
  serviceName,
  serviceNameDe,
  heroSubline,
  heroSublineDe,
  heroDescription,
  heroDescriptionDe,
  definitionHeadline,
  definitionHeadlineDe,
  definitionText,
  definitionTextDe,
  scopeHeadline,
  scopeHeadlineDe,
  scopeCards,
  timelineHeadline,
  timelineHeadlineDe,
  timelineSubline,
  timelineSublineDe,
  timelineSteps,
  targetAudience,
  faqItems,
  ctaHeadline,
  ctaHeadlineDe,
  ctaText,
  ctaTextDe,
  ctaButtonPrimary,
  ctaButtonPrimaryDe,
  ctaButtonSecondary,
  ctaButtonSecondaryDe,
  heroImage,
  caseStudyMetrics,
}: ServiceDetailProps) {
  const { t, i18n } = useTranslation("common");
  const accentColor = "#00CC66";
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const lang = i18n.language?.split("-")[0] ?? "en";
  // Resolve icon string to actual component (safe: only strings cross server/client boundary)
  const Icon = (iconMap[iconName] ?? Settings) as LucideIcon;

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Back Navigation */}
      <div className="fixed top-24 left-8 z-50">
        <Link href={`/${lang}`}>
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-sm"
            style={{
              backgroundColor: "#111111",
              borderColor: "#333333",
            }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>{t("detailPages.backToHome")}</span>
          </motion.button>
        </Link>
      </div>

      {/* 1. COMPACT HERO - Left/Right Split */}
      <section
        className="relative pt-40 pb-20 px-8 overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Aurora Mesh Gradient Background */}
        <div className="absolute inset-0" style={{ position: "absolute" }}>
          {/* Base Dark Layer */}
          <div
            className="absolute inset-0"
            style={{
              position: "absolute",
              backgroundColor: "#050505",
            }}
          />

          {/* Primary Glow - Malachite Green (Top-Center) */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle, rgba(0, 204, 102, 0.4) 0%, rgba(0, 204, 102, 0.2) 30%, rgba(0, 204, 102, 0) 70%)",
              filter: "blur(120px)",
              transform: "translateX(-50%)",
            }}
          />

          {/* Secondary Glow - Electric Blue (Bottom-Left) */}
          <div
            className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle, rgba(0, 119, 255, 0.35) 0%, rgba(0, 119, 255, 0.15) 40%, rgba(0, 119, 255, 0) 70%)",
              filter: "blur(100px)",
            }}
          />

          {/* Accent Glow - Soft Teal (Right Side) */}
          <div
            className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle, rgba(112, 255, 181, 0.25) 0%, rgba(112, 255, 181, 0.1) 35%, rgba(112, 255, 181, 0) 65%)",
              filter: "blur(110px)",
            }}
          />

          {/* Additional Floating Orbs for "Living Intelligence" Effect */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle, rgba(0, 204, 102, 0.2) 0%, rgba(0, 204, 102, 0) 60%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle, rgba(0, 119, 255, 0.2) 0%, rgba(0, 119, 255, 0) 60%)",
              filter: "blur(90px)",
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Subtle Gradient Overlay for Depth */}
          <div
            className="absolute inset-0"
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at 50% 20%, rgba(0, 204, 102, 0.08) 0%, rgba(0, 0, 0, 0) 50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          className="relative max-w-[1400px] mx-auto"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badges Row */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#CCCCCC",
                  }}
                >
                  {t("serviceDetail.swissMade")}
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#CCCCCC",
                  }}
                >
                  {t("serviceDetail.certifiedPartner")}
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {i18n.language === "de" ? serviceNameDe : serviceName}
              </h1>

              {/* Subline */}
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8"
                style={{ color: "#E5E5E5" }}
              >
                {i18n.language === "en" ? heroSubline : heroSublineDe}
              </p>

              {/* Benefit List with Green Checkmarks */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                        stroke={accentColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#CCCCCC" }}
                  >
                    Strikter Bauplan statt "agilem" Chaos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                        stroke={accentColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#CCCCCC" }}
                  >
                    Skalierbare Datenmodelle ab Tag 1
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                        stroke={accentColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#CCCCCC" }}
                  >
                    Keine technischen Schulden
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 30px ${accentColor}50`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2"
                  style={{
                    backgroundColor: accentColor,
                    color: "#050505",
                  }}
                >
                  Strategie-Gespräch buchen
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Hero Image or Glassmorphism Blueprint Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div
                className="relative w-full max-w-[500px] h-[500px]"
                style={{ position: "relative" }}
              >
                {heroImage?.asset?.url ? (
                  /* Hero Image from Sanity */
                  <motion.div
                    className="absolute inset-0"
                    style={{ position: "absolute" }}
                    animate={{
                      y: [0, -10, 0],
                      rotateX: [0, 2, 0],
                      rotateY: [0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={heroImage.asset.url}
                      alt={heroImage.alt || "Service hero visualization"}
                      className="w-full h-full object-cover rounded-3xl"
                      style={{
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                      }}
                    />
                  </motion.div>
                ) : (
                  /* Fallback: Default Blueprint Visualization */
                  <motion.div
                    className="absolute inset-0"
                    style={{ position: "absolute" }}
                    animate={{
                      y: [0, -10, 0],
                      rotateX: [0, 2, 0],
                      rotateY: [0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Main Blueprint Card */}
                    <div
                      className="relative w-full h-full rounded-3xl p-8"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        position: "relative",
                      }}
                    >
                      {/* Grid Pattern Background */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-20"
                        style={{
                          position: "absolute",
                          backgroundImage:
                            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                          backgroundSize: "30px 30px",
                        }}
                      />

                      {/* Isometric Architecture Visualization */}
                      <div
                        className="relative z-10 h-full flex flex-col justify-between"
                        style={{ position: "relative" }}
                      >
                        {/* Header Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: accentColor }}
                            />
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "#0077FF" }}
                            />
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: accentColor }}
                            />
                          </div>
                          <div
                            className="text-xs font-mono tracking-wider uppercase mb-2"
                            style={{ color: "#999999" }}
                          >
                            System Architecture
                          </div>
                          <div
                            className="h-px w-20"
                            style={{ backgroundColor: accentColor }}
                          />
                        </div>

                        {/* Isometric Blocks */}
                        <div
                          className="relative flex items-center justify-center"
                          style={{ position: "relative", height: "300px" }}
                        >
                          {/* Database Layer (Bottom) */}
                          <motion.div
                            className="absolute"
                            style={{
                              position: "absolute",
                              bottom: "20px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "120px",
                              height: "80px",
                              background:
                                "linear-gradient(135deg, rgba(0, 204, 102, 0.15) 0%, rgba(0, 204, 102, 0.05) 100%)",
                              border: `1px solid ${accentColor}40`,
                              borderRadius: "8px",
                              backdropFilter: "blur(10px)",
                            }}
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Database
                                className="w-8 h-8"
                                style={{ color: accentColor }}
                              />
                            </div>
                            {/* Glowing dot */}
                            <div
                              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: accentColor,
                                boxShadow: `0 0 10px ${accentColor}`,
                              }}
                            />
                          </motion.div>

                          {/* Logic Layer (Middle Left) */}
                          <motion.div
                            className="absolute"
                            style={{
                              position: "absolute",
                              top: "100px",
                              left: "80px",
                              width: "100px",
                              height: "70px",
                              background:
                                "linear-gradient(135deg, rgba(0, 119, 255, 0.15) 0%, rgba(0, 119, 255, 0.05) 100%)",
                              border: "1px solid rgba(0, 119, 255, 0.4)",
                              borderRadius: "8px",
                              backdropFilter: "blur(10px)",
                            }}
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Zap
                                className="w-7 h-7"
                                style={{ color: "#0077FF" }}
                              />
                            </div>
                            <div
                              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: "#0077FF",
                                boxShadow: "0 0 10px #0077FF",
                              }}
                            />
                          </motion.div>

                          {/* UI Layer (Middle Right) */}
                          <motion.div
                            className="absolute"
                            style={{
                              position: "absolute",
                              top: "100px",
                              right: "80px",
                              width: "100px",
                              height: "70px",
                              background:
                                "linear-gradient(135deg, rgba(112, 255, 181, 0.15) 0%, rgba(112, 255, 181, 0.05) 100%)",
                              border: "1px solid rgba(112, 255, 181, 0.4)",
                              borderRadius: "8px",
                              backdropFilter: "blur(10px)",
                            }}
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Settings
                                className="w-7 h-7"
                                style={{ color: accentColor }}
                              />
                            </div>
                            <div
                              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: accentColor,
                                boxShadow: `0 0 10px ${accentColor}`,
                              }}
                            />
                          </motion.div>

                          {/* Connection Lines */}
                          <svg
                            className="absolute inset-0"
                            style={{ position: "absolute" }}
                            width="100%"
                            height="100%"
                          >
                            {/* Line from Database to Logic */}
                            <motion.line
                              x1="50%"
                              y1="65%"
                              x2="35%"
                              y2="45%"
                              stroke={accentColor}
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.5 }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            {/* Line from Database to UI */}
                            <motion.line
                              x1="50%"
                              y1="65%"
                              x2="65%"
                              y2="45%"
                              stroke="#0077FF"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.5 }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5,
                              }}
                            />
                          </svg>
                        </div>

                        {/* Footer Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div
                              className="text-xs mb-1"
                              style={{ color: "#666666" }}
                            >
                              Uptime
                            </div>
                            <div
                              className="text-lg font-bold"
                              style={{ color: accentColor }}
                            >
                              99.9%
                            </div>
                          </div>
                          <div>
                            <div
                              className="text-xs mb-1"
                              style={{ color: "#666666" }}
                            >
                              Deploy
                            </div>
                            <div
                              className="text-lg font-bold"
                              style={{ color: "#0077FF" }}
                            >
                              4 Wochen
                            </div>
                          </div>
                          <div>
                            <div
                              className="text-xs mb-1"
                              style={{ color: "#666666" }}
                            >
                              Users
                            </div>
                            <div
                              className="text-lg font-bold"
                              style={{ color: accentColor }}
                            >
                              50+
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Background Glow Effects */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
                  style={{
                    position: "absolute",
                    background: `radial-gradient(circle, ${accentColor}40 0%, rgba(0, 204, 102, 0) 70%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE SCOPE - Bento Grid with Icons & Descriptions */}
      <section className="relative py-24 px-8" style={{ position: "relative" }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            style={{ position: "relative" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {i18n.language === "en" ? "Included in the " : "Im "}
              <span style={{ color: accentColor }}>
                {i18n.language === "en" ? "Package" : "Paket enthalten"}
              </span>
            </h2>
          </motion.div>

          {/* 2x2 Bento Grid */}
          <div
            className="grid md:grid-cols-2 gap-4"
            style={{ position: "relative" }}
          >
            {scopeCards.map((card, index) => {
              const CardIcon = (
                card.icon ? (iconMap[card.icon] ?? Settings) : Settings
              ) as LucideIcon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl overflow-hidden p-8"
                  style={{
                    backgroundColor: "#0D0D0D",
                    border: "1px solid #222222",
                    position: "relative",
                  }}
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}08 0%, rgba(0, 204, 102, 0) 100%)`,
                      position: "absolute",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="relative z-10"
                    style={{ position: "relative" }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        border: `1px solid ${accentColor}30`,
                      }}
                    >
                      <CardIcon
                        className="w-7 h-7"
                        style={{ color: accentColor }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {i18n.language === "en" ? card.title : card.titleDe}
                    </h3>

                    {/* Description - 2 lines */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#999999" }}
                    >
                      {i18n.language === "en"
                        ? card.description
                        : card.descriptionDe}
                    </p>
                  </div>

                  {/* Corner accent light */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${accentColor}20 0%, rgba(0, 204, 102, 0) 70%)`,
                      position: "absolute",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE DEPLOYMENT CYCLE - 4-Week Timeline */}
      <section className="relative py-24 px-8" style={{ position: "relative" }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
            style={{ position: "relative" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: accentColor }}>4-Week</span>{" "}
              {i18n.language === "en"
                ? "Implementation Process"
                : "Implementierungsprozess"}
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative" style={{ position: "relative" }}>
            {/* Connection Line */}
            <div
              className="absolute top-20 left-0 right-0 h-[2px] hidden md:block"
              style={{
                background: `linear-gradient(90deg, rgba(0, 204, 102, 0) 0%, ${accentColor}40 50%, rgba(0, 204, 102, 0) 100%)`,
                position: "absolute",
              }}
            />

            <div className="grid md:grid-cols-4 gap-8">
              {timelineSteps?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                  style={{ position: "relative" }}
                >
                  {/* Week Node */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-40 h-40 mx-auto mb-6 rounded-full border-2 flex flex-col items-center justify-center"
                    style={{
                      backgroundColor: "#050505",
                      borderColor: accentColor,
                      position: "relative",
                      boxShadow: `0 0 40px ${accentColor}40`,
                    }}
                  >
                    {/* Glowing ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${accentColor}`,
                        position: "absolute",
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    {/* Week Label */}
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "#999999" }}
                    >
                      {i18n.language === "en" ? "Week" : "Woche"}
                    </div>
                    <div
                      className="text-4xl font-bold"
                      style={{ color: accentColor }}
                    >
                      {item.week}
                    </div>
                  </motion.div>

                  {/* Phase Label */}
                  <h3 className="text-xl font-bold">
                    {i18n.language === "en" ? item.title : item.titleDe}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. PROOF OF EXECUTION - Success Story (Case Study) */}
      <section className="relative py-24 px-8" style={{ position: "relative" }}>
        {/* Subtle divider line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px]"
          style={{
            position: "absolute",
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
            transform: "translateX(-50%)",
          }}
        />

        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Context & Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative" }}
            >
              {/* Eyebrow Badge */}
              <div
                className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{
                  backgroundColor: "rgba(0, 204, 102, 0.1)",
                  border: `1px solid ${accentColor}40`,
                  color: accentColor,
                }}
              >
                CASE STUDY
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Proof of Execution.
              </h2>

              {/* Subline */}
              <p
                className="text-2xl mb-8 leading-relaxed"
                style={{ color: "#CCCCCC" }}
              >
                Wie SwissMedTech Solutions in 28 Tagen skalierte.
              </p>

              {/* Story Content Block */}
              <div className="space-y-4 mb-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#999999" }}
                >
                  <strong style={{ color: "#E5E5E5" }}>Das Problem:</strong> Ein
                  schnell wachsendes Schweizer MedTech-Unternehmen verlor die
                  Übersicht über Leads und Opportunities. Excel-Sheets wurden
                  zum Flaschenhals, Sales-Daten waren inkonsistent, und Reports
                  dauerten Tage statt Minuten.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#999999" }}
                >
                  <strong style={{ color: "#E5E5E5" }}>Die Lösung:</strong> Mit
                  dem Sales Cloud Quick Start Package implementierten wir in
                  genau 4 Wochen ein vollständig funktionales Salesforce-System
                  – inklusive Custom Objects, Automatisierungen, Reports und
                  User-Training.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#999999" }}
                >
                  <strong style={{ color: "#E5E5E5" }}>Das Ergebnis:</strong>{" "}
                  Innerhalb eines Monats konnte das gesamte Sales-Team nahtlos
                  arbeiten. Keine Datensilos mehr, keine manuellen Workarounds –
                  nur ein skalierbares System, das mit dem Unternehmen wächst.
                </p>
              </div>

              {/* Quote Block */}
              <div
                className="relative pl-6 py-4 border-l-4"
                style={{
                  borderColor: accentColor,
                  backgroundColor: "rgba(0, 204, 102, 0.03)",
                }}
              >
                <p
                  className="text-lg italic mb-3 leading-relaxed"
                  style={{ color: "#FFFFFF" }}
                >
                  "Wondercode hat uns gezeigt, dass es nur eine Frage der
                  Architektur ist. Wir waren pünktlich und im Budget live."
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#999999" }}
                >
                  — COO, SwissMedTech Solutions
                </p>
              </div>
            </motion.div>

            {/* Right Side: Metrics Grid (Bento-Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              style={{ position: "relative" }}
            >
              {/* Background Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
                style={{
                  position: "absolute",
                  background: `radial-gradient(circle, ${accentColor}40 0%, rgba(0, 204, 102, 0) 70%)`,
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Metrics Grid Container */}
              <div
                className="relative grid grid-rows-2 gap-4"
                style={{ position: "relative" }}
              >
                {/* Top Card - Full Width (Time-to-Value) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative rounded-2xl p-8 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px ${accentColor}15`,
                    position: "relative",
                  }}
                >
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      position: "absolute",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="relative z-10 flex items-center justify-between"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock
                          className="w-5 h-5"
                          style={{ color: accentColor }}
                        />
                        <p
                          className="text-sm font-semibold tracking-wide uppercase"
                          style={{ color: "#999999" }}
                        >
                          {i18n.language === "en"
                            ? "Time-to-Value"
                            : "Zeit-bis-Wert"}
                        </p>
                      </div>
                      <div
                        className="text-7xl md:text-8xl font-black tracking-tight"
                        style={{ color: accentColor }}
                      >
                        {i18n.language === "en"
                          ? caseStudyMetrics?.timeToValue
                          : caseStudyMetrics?.timeToValueDe}
                      </div>
                      <p
                        className="text-xl font-medium mt-2"
                        style={{ color: "#CCCCCC" }}
                      >
                        {i18n.language === "en"
                          ? caseStudyMetrics?.timeToValueLabel
                          : caseStudyMetrics?.timeToValueLabelDe}
                      </p>
                    </div>

                    {/* Decorative node */}
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: accentColor,
                        boxShadow: `0 0 20px ${accentColor}`,
                      }}
                    />
                  </div>

                  {/* Glow effect */}
                  <div
                    className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-2xl opacity-30"
                    style={{
                      position: "absolute",
                      background: `radial-gradient(circle, ${accentColor}40 0%, rgba(0, 204, 102, 0) 70%)`,
                    }}
                  />
                </motion.div>

                {/* Bottom Row - Two Cards Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Card 2 - User Adoption */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative rounded-2xl p-6 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 119, 255, 0.15)`,
                      position: "relative",
                    }}
                  >
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        position: "absolute",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Content */}
                    <div
                      className="relative z-10"
                      style={{ position: "relative" }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Users
                          className="w-4 h-4"
                          style={{ color: "#0077FF" }}
                        />
                        <p
                          className="text-xs font-semibold tracking-wide uppercase"
                          style={{ color: "#999999" }}
                        >
                          {i18n.language === "en"
                            ? "User Adoption"
                            : "Nutzer-Adoption"}
                        </p>
                      </div>
                      <div
                        className="text-6xl font-black tracking-tight mb-2"
                        style={{ color: "#0077FF" }}
                      >
                        {caseStudyMetrics?.userAdoption}
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#CCCCCC" }}
                      >
                        {i18n.language === "en"
                          ? caseStudyMetrics?.userAdoptionLabel
                          : caseStudyMetrics?.userAdoptionLabelDe}
                      </p>
                    </div>

                    {/* Node */}
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#0077FF",
                        boxShadow: `0 0 15px #0077FF`,
                      }}
                    />

                    {/* Glow */}
                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-xl opacity-30"
                      style={{
                        position: "absolute",
                        background:
                          "radial-gradient(circle, rgba(0, 119, 255, 0.4) 0%, rgba(0, 119, 255, 0) 70%)",
                      }}
                    />
                  </motion.div>

                  {/* Card 3 - Time Saved */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative rounded-2xl p-6 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(112, 255, 181, 0.15)`,
                      position: "relative",
                    }}
                  >
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        position: "absolute",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Content */}
                    <div
                      className="relative z-10"
                      style={{ position: "relative" }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingDown
                          className="w-4 h-4"
                          style={{ color: "#70FFB5" }}
                        />
                        <p
                          className="text-xs font-semibold tracking-wide uppercase"
                          style={{ color: "#999999" }}
                        >
                          {i18n.language === "en" ? "Efficiency" : "Effizienz"}
                        </p>
                      </div>
                      <div
                        className="text-6xl font-black tracking-tight mb-2"
                        style={{ color: "#70FFB5" }}
                      >
                        {caseStudyMetrics?.efficiency}
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#CCCCCC" }}
                      >
                        {i18n.language === "en"
                          ? caseStudyMetrics?.efficiencyLabel
                          : caseStudyMetrics?.efficiencyLabelDe}
                      </p>
                    </div>

                    {/* Node */}
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: "#70FFB5",
                        boxShadow: `0 0 15px #70FFB5`,
                      }}
                    />

                    {/* Glow */}
                    <div
                      className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-xl opacity-30"
                      style={{
                        position: "absolute",
                        background:
                          "radial-gradient(circle, rgba(112, 255, 181, 0.4) 0%, rgba(112, 255, 181, 0) 70%)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Technical Connection Lines (SVG) */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  style={{ position: "absolute" }}
                  width="100%"
                  height="100%"
                >
                  {/* Line from top card to bottom left */}
                  <motion.line
                    x1="95%"
                    y1="48%"
                    x2="25%"
                    y2="75%"
                    stroke={accentColor}
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
                  {/* Line from top card to bottom right */}
                  <motion.line
                    x1="95%"
                    y1="48%"
                    x2="75%"
                    y2="75%"
                    stroke="#0077FF"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FAQ & AUDIENCE - Split Section */}
      <section className="relative py-24 px-8" style={{ position: "relative" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Target Group */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <h3 className="text-3xl font-bold mb-8">
                {i18n.language === "en" ? "Ideal for..." : "Ideal für..."}
              </h3>

              <div className="space-y-4">
                {targetAudience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                    style={{ position: "relative" }}
                  >
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0 mt-1"
                      style={{ color: accentColor }}
                    />
                    <p className="text-lg" style={{ color: "#CCCCCC" }}>
                      {i18n.language === "en" ? item.text : item.textDe}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <h3 className="text-3xl font-bold mb-8">
                {i18n.language === "en"
                  ? "Frequently Asked"
                  : "Häufig gestellte Fragen"}
              </h3>

              <div className="space-y-1">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <motion.button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      className="w-full py-5 flex items-center justify-between gap-4 text-left"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-lg font-medium">
                        {i18n.language === "en"
                          ? item.question
                          : item.questionDe}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className="w-5 h-5"
                          style={{
                            color:
                              expandedFaq === index ? accentColor : "#666666",
                          }}
                        />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="pb-5 pr-8 text-base leading-relaxed"
                            style={{ color: "#999999" }}
                          >
                            {i18n.language === "en"
                              ? item.answer
                              : item.answerDe}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Divider */}
                    {index < faqItems.length - 1 && (
                      <div
                        className="w-full h-[1px]"
                        style={{ backgroundColor: "#222222" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section at Bottom */}
      <section className="relative py-24 px-8" style={{ position: "relative" }}>
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
            style={{
              backgroundColor: "#0D0D0D",
              border: `1px solid ${accentColor}30`,
              position: "relative",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${accentColor}10 0%, rgba(0, 204, 102, 0) 70%)`,
                position: "absolute",
              }}
            />

            {/* Content */}
            <div className="relative z-10" style={{ position: "relative" }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {i18n.language === "en"
                  ? "Ready to Start?"
                  : "Bereit zu starten?"}
              </h2>
              <p
                className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ color: "#CCCCCC" }}
              >
                {i18n.language === "en"
                  ? "Let's discuss your requirements and create a tailored implementation plan."
                  : "Lassen Sie uns Ihre Anforderungen besprechen und einen maßgeschneiderten Implementierungsplan erstellen."}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 40px ${accentColor}50`,
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto"
                style={{
                  backgroundColor: accentColor,
                  color: "#050505",
                }}
              >
                {i18n.language === "en"
                  ? "Book Strategy Call"
                  : "Strategie-Gespräch buchen"}
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
