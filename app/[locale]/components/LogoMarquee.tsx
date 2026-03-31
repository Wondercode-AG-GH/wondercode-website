"use client";
import { motion } from "motion/react";

export function LogoMarquee() {
  // 10 minimalist, abstract enterprise logos - Geometric Tech Style
  const logos = [
    <img
      key="1"
      src="/logos/21G_26.jpg"
      alt="21G"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="2"
      src="/logos/Heim_Logo_1B_RGB_schwarz_26.png"
      alt="Heim"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="3"
      src="/logos/Logo_SwissQuant_Large_26.jpg"
      alt="SwissQuant"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="4"
      src="/logos/autofox_26.svg"
      alt="Autofox"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="5"
      src="/logos/chimpy-logo_26.svg"
      alt="Chimpy"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="6"
      src="/logos/ec-promo_26.png"
      alt="EC Promo"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="7"
      src="/logos/histocom_26.svg"
      alt="Histocom"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="8"
      src="/logos/logo-blumer-partner_26.svg"
      alt="Blumer Partner"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
    <img
      key="9"
      src="/logos/logo-sah-zuerich-cropped-small_26.svg"
      alt="SAH Zuerich"
      className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 hover:opacity-100 transition-opacity"
    />,
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full py-8 md:py-10">
      {/* Label - Low Contrast Grey */}
      <div className="text-center mb-8 md:mb-10">
        <p
          className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium"
          style={{ color: "#888888" }}
        >
          Trusted by Innovators
        </p>
      </div>

      {/* Marquee Container - TRANSPARENT BACKGROUND */}
      <div
        className="relative h-20 md:h-28 overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Animated Logo Track */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 lg:gap-28 absolute"
          style={{ position: "absolute" }}
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 w-16 h-16 md:w-24 md:h-24"
              style={{
                color: "rgba(255, 255, 255, 0.4)",
                position: "relative",
              }}
            >
              {logo}
            </div>
          ))}
        </motion.div>

        {/* Left Gradient Alpha Mask - Fade to Transparent (NOT Black) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[20%] pointer-events-none z-10"
          style={{
            position: "absolute",
            background:
              "linear-gradient(to right, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0.6) 40%, transparent 100%)",
          }}
        />

        {/* Right Gradient Alpha Mask - Fade to Transparent (NOT Black) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[20%] pointer-events-none z-10"
          style={{
            position: "absolute",
            background:
              "linear-gradient(to left, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0.6) 40%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
