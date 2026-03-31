"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuroraBackground } from "../../AuroraBackground";
import { LogoMarquee } from "../../LogoMarquee";

interface HeroData {
  line1?: string;
  line1De?: string;
  line2Highlight?: string;
  line2HighlightDe?: string;
  line3?: string;
  line3De?: string;
  line4Highlight?: string;
  line4HighlightDe?: string;
  subtagline?: string;
  subtaglineDe?: string;
  tagline?: string;
  taglineDe?: string;
  subtaglineHighlight?: string;
  subtaglineHighlightDe?: string;
  ctaPrimary?: string;
  ctaPrimaryDe?: string;
  ctaSecondary?: string;
  ctaSecondaryDe?: string;
}

export function HeroSection() {
  const { t, i18n } = useTranslation("common");
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch("/api/hero");
        if (res.ok) {
          const data = await res.json();
          setHeroData(data);
        }
      } catch (error) {
        console.error("Error fetching hero:", error);
      }
    }
    fetchHero();
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const pathname = usePathname();
  const isGerman = i18n.language === "de";
  const locale = pathname?.split("/")?.[1] ?? "en";

  // Deep linking logic for #success-stories
  const successStoriesHref =
    pathname === `/${locale}` || pathname === `/${locale}/`
      ? "#success-stories"
      : `/${locale}/#success-stories`;

  const hLine1 = isGerman
    ? heroData?.line1De ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[0]
    : heroData?.line1 ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[0];

  const hLine2 = isGerman
    ? heroData?.line2HighlightDe ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[1]
    : heroData?.line2Highlight ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[1];

  const hLine3 = isGerman
    ? heroData?.line3De ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[2]
    : heroData?.line3 ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[2];

  const hLine4 = isGerman
    ? heroData?.line4HighlightDe ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[3]
    : heroData?.line4Highlight ||
      (t("hero.headlineMultiline", { returnObjects: true }) as string[])[3];

  const subtaglineText = isGerman
    ? heroData?.subtaglineDe || t("hero.subtagline")
    : heroData?.subtagline || t("hero.subtagline");

  const taglineText = isGerman
    ? heroData?.taglineDe || t("hero.tagline")
    : heroData?.tagline || t("hero.tagline");

  const taglineHighlightText = isGerman
    ? heroData?.subtaglineHighlightDe || t("hero.subtaglineHighlight")
    : heroData?.subtaglineHighlight || t("hero.subtaglineHighlight");

  const ctaPrimaryText = isGerman
    ? heroData?.ctaPrimaryDe || t("hero.cta")
    : heroData?.ctaPrimary || t("hero.cta");

  const ctaSecondaryText = isGerman
    ? heroData?.ctaSecondaryDe || t("hero.ctaSecondary")
    : heroData?.ctaSecondary || t("hero.ctaSecondary");

  return (
    <motion.section
      ref={heroRef}
      style={{
        position: "relative",
        opacity: heroOpacity,
        scale: heroScale,
      }}
      className="min-h-screen flex flex-col pt-20 overflow-hidden relative"
    >
      {/* Aurora Mesh Gradient Background */}
      <div className="absolute inset-0" style={{ position: "absolute" }}>
        <AuroraBackground />
      </div>

      {/* Subtle Text Shadow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          position: "absolute",
          background:
            "radial-gradient(ellipse 900px 700px at center 35%, rgba(5, 5, 5, 0.5) 0%, transparent 65%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-8 text-center py-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold mb-4 md:mb-6 leading-[0.95] tracking-tight text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl break-words max-w-5xl mx-auto shrink-0"
          >
            {hLine1}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {hLine2}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] pointer-events-none glow-pulse"
                style={{ position: "absolute", opacity: 0.3 }}
              />
            </span>
            <br />
            {hLine3}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {hLine4}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] pointer-events-none glow-pulse-delayed"
                style={{ position: "absolute", opacity: 0.3 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-7 md:mb-10 max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0"
            style={{ color: "#999999" }}
          >
            {subtaglineText} <br />
            <br />
            <div>{taglineText} </div>
            <span style={{ color: "#00CC66" }}>{taglineHighlightText}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0"
            style={{ position: "relative" }}
          >
            <Link
              href="https://calendar.app.google/mz1GZTzKW9rmSCY26"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(0,204,102,0.6)]"
                style={{
                  backgroundColor: "#00CC66",
                  color: "#0A0A0A",
                  position: "relative",
                }}
              >
                <span className="relative z-10">{ctaPrimaryText}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00CC66] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                />
              </motion.button>
            </Link>

            <a href={successStoriesHref} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base transition-all backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  position: "relative",
                }}
              >
                {ctaSecondaryText}
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 shrink-0 pb-8 md:pb-12 pt-4"
        >
          <LogoMarquee />
        </motion.div>
      </div>

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.5; }
        }
        .glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
        .glow-pulse-delayed {
          animation: glowPulse 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </motion.section>
  );
}
