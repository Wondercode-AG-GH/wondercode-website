"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState<"DE" | "EN">("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const lang = (
      localStorage.getItem("preferredLanguage") ||
      i18n.language ||
      "de"
    ).toUpperCase();
    setActiveLanguage(lang as "DE" | "EN");
  }, [i18n.language]);

  const handleLanguageChange = (lang: "DE" | "EN") => {
    setActiveLanguage(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem("preferredLanguage", lang.toLowerCase());
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="relative inline-flex items-center gap-0.5 rounded-full border backdrop-blur-xl"
      style={{
        position: "relative",
        background: "rgba(26, 26, 26, 0.6)",
        borderColor: "rgba(0, 204, 102, 0.2)",
        boxShadow:
          "0 0 20px rgba(0, 204, 102, 0.1), inset 0 1px 1px rgba(0, 204, 102, 0.1)",
        padding: "3px",
      }}
    >
      {/* Active indicator background with glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          position: "absolute",
          background: "rgba(0, 204, 102, 0.15)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(0, 204, 102, 0.4)",
          boxShadow:
            "0 0 12px rgba(0, 204, 102, 0.3), inset 0 0 8px rgba(0, 204, 102, 0.2)",
          height: "calc(100% - 6px)",
          top: "3px",
        }}
        initial={false}
        animate={{
          left: activeLanguage === "DE" ? "3px" : "calc(50% - 0.25px)",
          width: "30px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* DE Button */}
      <button
        onClick={() => handleLanguageChange("DE")}
        className="relative z-10 text-xs font-semibold transition-all duration-300"
        style={{
          position: "relative",
          color: activeLanguage === "DE" ? "#00CC66" : "#888888",
          textShadow:
            activeLanguage === "DE" ? "0 0 8px rgba(0, 204, 102, 0.5)" : "none",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          letterSpacing: "0.025em",
          padding: "4px 10px",
        }}
      >
        DE
      </button>

      {/* Divider */}
      <div
        className="w-px"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          height: "14px",
        }}
      />

      {/* EN Button */}
      <button
        onClick={() => handleLanguageChange("EN")}
        className="relative z-10 text-xs font-semibold transition-all duration-300"
        style={{
          position: "relative",
          color: activeLanguage === "EN" ? "#00CC66" : "#888888",
          textShadow:
            activeLanguage === "EN" ? "0 0 8px rgba(0, 204, 102, 0.5)" : "none",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          letterSpacing: "0.025em",
          padding: "4px 10px",
        }}
      >
        EN
      </button>
    </motion.div>
  );
}
