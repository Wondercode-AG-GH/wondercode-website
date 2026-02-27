"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AuroraBackground } from "../../AuroraBackground";
import { LogoMarquee } from "../../LogoMarquee";

export function HeroSection() {
  const { t, i18n } = useTranslation("common");
  const isEn = i18n.language === "en";
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
      className="h-screen flex flex-col pt-20 overflow-hidden relative"
    >
      {/* Aurora Mesh Gradient Background - Extends to Bottom */}
      <div className="absolute inset-0" style={{ position: "absolute" }}>
        <AuroraBackground />
      </div>

      {/* Subtle Text Shadow Overlay - for improved readability in center/top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          position: "absolute",
          background:
            "radial-gradient(ellipse 900px 700px at center 35%, rgba(5, 5, 5, 0.5) 0%, transparent 65%)",
        }}
      />

      {/* Hero Content - Vertical Stack */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Headline & Subline - Center-Top */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl mb-6 md:mb-8"
            style={{
              backgroundColor: "rgba(0, 204, 102, 0.1)",
              borderColor: "rgba(0, 204, 102, 0.3)",
            }}
          >
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
              style={{ backgroundColor: "#00CC66" }}
            />
            <span
              className="text-xs md:text-sm font-medium"
              style={{ color: "#00CC66" }}
            >
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-bold mb-4 md:mb-6 leading-[0.95] tracking-tight text-white ${
              isEn
                ? "text-3xl md:text-5xl lg:text-7xl"
                : "text-3xl md:text-5xl lg:text-7xl"
            }`}
          >
            {headlineLines[0]}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {headlineLines[1]}
              </span>
              <motion.span
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66]"
                style={{ opacity: 0.3, position: "absolute" }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            <br />
            {headlineLines[2]}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66] bg-clip-text text-transparent">
                {headlineLines[3]}
              </span>
              <motion.span
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#00CC66] via-[#00ff88] to-[#00CC66]"
                style={{ opacity: 0.3, position: "absolute" }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mb-8 md:mb-12 max-w-5xl mx-auto leading-relaxed ${
              isEn
                ? "text-sm md:text-lg lg:text-xl"
                : "text-base md:text-xl lg:text-2xl"
            }`}
            style={{ color: "#999999" }}
          >
            {t("hero.subtagline")}{" "}
            <span style={{ color: "#00CC66" }}>
              {t("hero.subtaglineHighlight")}
            </span>
          </motion.p>

          {/* CTA Buttons - Center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ position: "relative" }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(0, 204, 102, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all relative overflow-hidden"
              style={{
                backgroundColor: "#00CC66",
                color: "#0A0A0A",
                position: "relative",
                boxShadow: "0 0 0px rgba(0, 204, 102, 0)",
              }}
            >
              <span className="relative z-10">{t("hero.cta")}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00CC66]"
                style={{ position: "absolute" }}
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
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

        {/* Spacer - Breathing Room */}
        <div className={isEn ? "h-6 md:h-10" : "h-12 md:h-20"} />

        {/* Integrated Logo Marquee - Bottom Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 pb-8 md:pb-12"
        >
          <LogoMarquee />
        </motion.div>
      </div>
    </motion.section>
  );
}
