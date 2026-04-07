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

      {/* Marquee Container with Outlined Blur Background */}
      <div className="relative h-32 md:h-40 py-2 overflow-hidden flex items-center">
        {/* Animated Logo Track */}
        <motion.div
          className="flex items-center gap-6 md:gap-10 lg:gap-12 absolute inset-y-0"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="group overflow-hidden shrink-0 w-32 h-16 md:w-44 md:h-24 p-2 md:p-4 relative flex items-center justify-center bg-transparent border border-transparent rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:backdrop-blur-lg hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] z-10"
            >
              <div className="w-full h-full flex items-center justify-center transition-transform duration-300 [&_img]:transition-all [&_img]:duration-500 [&_img]:grayscale [&_img]:invert [&_img]:opacity-60 group-hover:[&_img]:grayscale-0 group-hover:[&_img]:invert-0 group-hover:[&_img]:opacity-100">
                {logo}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
