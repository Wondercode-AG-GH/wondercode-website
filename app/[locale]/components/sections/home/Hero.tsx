"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AuroraBackground } from "../../AuroraBackground";
import { LogoMarquee } from "../../LogoMarquee";

export function HeroSection() {
  const { t, i18n } = useTranslation("common");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const headlineLines = t("hero.headlineMultiline", {
    returnObjects: true,
  }) as string[];

  return (
    <motion.section
      ref={heroRef}
      style={{
        position: "relative",
        opacity: heroOpacity,
        scale: heroScale,
      }}
      // FIX 1: Changed h-screen → min-h-screen so taller German text never
      // clips the layout. The section grows to fit content if needed.
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
        {/* Center content — overflow-hidden + py padding keeps it from
            pushing LogoMarquee off screen */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-8 text-center py-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl mb-5 md:mb-7 shrink-0"
            style={{
              backgroundColor: "rgba(0, 204, 102, 0.1)",
              borderColor: "rgba(0, 204, 102, 0.3)",
            }}
          >
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: "#00CC66" }}
            />
            <span
              className="text-xs md:text-sm font-medium"
              style={{ color: "#00CC66" }}
            >
              {t("hero.badge")}
            </span>
          </motion.div> */}

          {/* FIX 2: Removed isEn conditional font sizes — both EN and DE now
              share the same responsive scale. German longer words wrap
              naturally via break-words instead of needing a smaller font.
              This prevents the jarring size difference between languages. */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold mb-4 md:mb-6 leading-[0.95] tracking-tight text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl break-words max-w-5xl mx-auto shrink-0"
          >
            {headlineLines[0]}
            <br />
            {/* FIX 3: Replaced motion.span glow (caused hover blink) with
                plain span + CSS animation */}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {headlineLines[1]}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] pointer-events-none glow-pulse"
                style={{ position: "absolute", opacity: 0.3 }}
              />
            </span>
            <br />
            {headlineLines[2]}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {headlineLines[3]}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] pointer-events-none glow-pulse-delayed"
                style={{ position: "absolute", opacity: 0.3 }}
              />
            </span>
          </motion.h1>

          {/* FIX 4: Subheading also uses unified font size — no isEn branching */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-7 md:mb-10 max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0"
            style={{ color: "#999999" }}
          >
            {t("hero.subtagline")} <br />
            <br />
            <div>{t("hero.tagline")} </div>
            <span style={{ color: "#00CC66" }}>
              {t("hero.subtaglineHighlight")}
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 shrink-0"
            style={{ position: "relative" }}
          >
            {/* FIX 5: Removed nested motion.div whileHover (caused blink).
                Using CSS group-hover instead. Removed conflicting boxShadow
                default "0 0 0px" style. */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(0,204,102,0.6)]"
              style={{
                backgroundColor: "#00CC66",
                color: "#0A0A0A",
                position: "relative",
              }}
            >
              <span className="relative z-10">{t("hero.cta")}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00CC66] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
              />
            </motion.button>

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
              {t("hero.ctaSecondary")}
            </motion.button>
          </motion.div>
        </div>

        {/* FIX 6: shrink-0 on the marquee wrapper means flex will NEVER
            collapse this row regardless of how tall the content above is.
            This guarantees LogoMarquee is always visible in both languages. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 shrink-0 pb-8 md:pb-12 pt-4"
        >
          <LogoMarquee />
        </motion.div>
      </div>

      {/* CSS keyframes for glow pulse — pure CSS avoids Framer hover conflicts */}
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
