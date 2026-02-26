"use client";
import { motion } from "motion/react";

export function LogoMarquee() {
  // 10 minimalist, abstract enterprise logos - Geometric Tech Style
  const logos = [
    // Logo 1 - Nested Squares
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="15"
        y="15"
        width="50"
        height="50"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="25"
        y="25"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>,

    // Logo 2 - Circle with Cross
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M 40 20 L 40 60 M 20 40 L 60 40"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>,

    // Logo 3 - Pentagon with Dot
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M 40 15 L 65 35 L 55 65 L 25 65 L 15 35 Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="40" cy="40" r="8" fill="currentColor" />
    </svg>,

    // Logo 4 - Hexagon Horizontal
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M 25 20 L 55 20 L 65 40 L 55 60 L 25 60 L 15 40 Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>,

    // Logo 5 - Hexagon with Circle
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M 40 15 L 60 30 L 60 50 L 40 65 L 20 50 L 20 30 Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2.5" />
    </svg>,

    // Logo 6 - Rounded Square with Check
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="20"
        y="20"
        width="40"
        height="40"
        rx="8"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M 30 40 L 40 50 L 55 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,

    // Logo 7 - Triangle with Line
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M 40 15 L 65 65 L 15 65 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M 28 50 L 52 50" stroke="currentColor" strokeWidth="2.5" />
    </svg>,

    // Logo 8 - Concentric Circles
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="5" fill="currentColor" />
    </svg>,

    // Logo 9 - Rectangle with Lines
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="15"
        y="20"
        width="50"
        height="40"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M 30 35 L 50 35 M 30 45 L 50 45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>,

    // Logo 10 - Square with X
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M 25 25 L 55 25 L 55 55 L 25 55 Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M 25 25 L 55 55 M 55 25 L 25 55"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>,
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
        className="relative h-16 md:h-20 overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Animated Logo Track */}
        <motion.div
          className="flex items-center gap-12 md:gap-16 lg:gap-20 absolute"
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
              className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16"
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
