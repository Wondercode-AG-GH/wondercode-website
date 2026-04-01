"use client";
import { motion } from "motion/react";

export function LogoMarquee() {
  // 10 minimalist, abstract enterprise logos - Geometric Tech Style
  const logos = [
    <img
      key="1"
      src="/logos/21G_transparent.png"
      alt="21G"
      className="w-full h-full object-contain "
    />,
    <img
      key="2"
      src="/logos/Heim_Logo_1B_RGB_schwarz_26.png"
      alt="Heim"
      className="w-full h-full object-contain "
    />,
    <img
      key="3"
      src="/logos/SwissQuant_transparent.png"
      alt="SwissQuant"
      className="w-full h-full object-contain "
    />,
    <img
      key="4"
      src="/logos/autofox_26.svg"
      alt="Autofox"
      className="w-full h-full object-contain "
    />,
    <img
      key="5"
      src="/logos/chimpy-logo_26.svg"
      alt="Chimpy"
      className="w-full h-full object-contain "
    />,
    <img
      key="6"
      src="/logos/ec-promo_26.png"
      alt="EC Promo"
      className="w-full h-full object-contain "
    />,
    <img
      key="7"
      src="/logos/histocom_26.svg"
      alt="Histocom"
      className="w-full h-full object-contain "
    />,
    <img
      key="8"
      src="/logos/logo-blumer-partner_26.svg"
      alt="Blumer Partner"
      className="w-full h-full object-contain "
    />,
    <img
      key="9"
      src="/logos/logo-sah-zuerich-cropped-small_26.svg"
      alt="SAH Zuerich"
      className="w-full h-full object-contain "
    />,
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full py-8 md:py-10">
      {/* Label - White for prominence */}
      <div className="text-center mb-8 md:mb-10">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-white">
          Trusted by Innovators
        </p>
      </div>

      {/* Marquee Container - No filters or overlays */}
      <div className="relative h-20 md:h-28 overflow-hidden">
        {/* Animated Logo Track */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 lg:gap-28 absolute inset-y-0"
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
              className="shrink-0 w-16 h-16 md:w-24 md:h-24 relative flex items-center justify-center"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
