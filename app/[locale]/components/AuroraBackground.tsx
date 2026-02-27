import { motion } from "motion/react";

export function AuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* 
        FIX: Removed `scale` from ALL blob animations.
        `scale` on elements with filter:blur() forces the browser to
        re-rasterize the blur every frame on the CPU → full-page blink.
        Only `opacity` and x/y translations are GPU-compositable.
        Added will-change: opacity and translateZ(0) to each blob to
        promote them to isolated GPU compositing layers.
      */}

      {/* Primary Glow - Malachite Green (Top Center) */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(0, 204, 102, 0.8) 0%, rgba(0, 204, 102, 0.4) 30%, rgba(0, 204, 102, 0) 70%)",
          filter: "blur(120px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
          x: [-50, -30, -50],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Glow - Electric Blue (Bottom Left) */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "15%",
          width: "700px",
          height: "700px",
          transform: "translate(-50%, 50%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(0, 119, 255, 0.7) 0%, rgba(0, 119, 255, 0.35) 30%, rgba(0, 119, 255, 0) 70%)",
          filter: "blur(140px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent Glow - Teal/Mint (Top Right) */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          transform: "translate(50%, -50%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(112, 255, 181, 0.6) 0%, rgba(112, 255, 181, 0.3) 30%, rgba(112, 255, 181, 0) 70%)",
          filter: "blur(110px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Highlight (Center Right) */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: "20%",
          width: "400px",
          height: "400px",
          transform: "translate(30%, -50%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(0, 255, 221, 0.5) 0%, rgba(0, 255, 221, 0.25) 30%, rgba(0, 255, 221, 0) 70%)",
          filter: "blur(100px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple/Violet Accent (Bottom Right) */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "550px",
          height: "550px",
          transform: "translate(40%, 40%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0.2) 30%, rgba(138, 43, 226, 0) 70%)",
          filter: "blur(130px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Extra Green Glow (Left Side) */}
      <motion.div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          width: "450px",
          height: "450px",
          transform: "translate(-30%, -30%) translateZ(0)",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.5) 0%, rgba(0, 255, 136, 0.25) 30%, rgba(0, 255, 136, 0) 70%)",
          filter: "blur(115px)",
          borderRadius: "50%",
          willChange: "opacity, transform",
        }}
        animate={{
          opacity: [0.5, 0.75, 0.5],
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          position: "absolute",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          position: "absolute",
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 5, 0.4) 100%)",
        }}
      />
    </div>
  );
}
