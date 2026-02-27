"use client";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";

export default function Header() {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("header.nav.services"), key: "services" },
    { label: t("header.nav.agentforce"), key: "agentforce" },
    { label: t("header.nav.customEngineering"), key: "custom-engineering" },
    { label: t("header.nav.industryExpertise"), key: "industry-expertise" },
    { label: t("header.nav.successStories"), key: "success-stories" },
    { label: t("header.nav.about"), key: "about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        style={{
          position: "fixed",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          background: "rgba(10, 10, 10, 0.8)",
        }}
      >
        <div
          className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-12"
          style={{ position: "relative" }}
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00CC66] to-[#00aa55] rounded-xl" />
                <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#00CC66]" />
                </div>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold tracking-tight text-white">
                  wondercode
                </div>
                <div className="text-[8px] md:text-[9px] text-gray-500 tracking-wider">
                  .CH
                </div>
              </div>
            </motion.div>

            {/* Center Navigation Links - Desktop Only */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map(({ label, key }, i) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className="text-sm text-gray-400 hover:text-[#00CC66] transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00CC66] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Right Side: Language Switcher + CTA (Desktop) / Hamburger (Mobile) */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Language Switcher - Always visible */}
              <div className="scale-90 md:scale-100 origin-right">
                <LanguageSwitcher />
              </div>

              {/* CTA Button - Desktop Only */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 204, 102, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block px-6 py-2.5 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-sm transition-all"
              >
                {t("header.cta")}
              </motion.button>

              {/* Hamburger Menu - Mobile Only */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
                style={{ position: "relative" }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
            style={{
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              background: "rgba(10, 10, 10, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="px-5 py-6 space-y-4">
              {/* Navigation Links */}
              {navItems.map(({ label, key }, i) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block py-3 text-base text-gray-300 hover:text-[#00CC66] transition-colors border-b border-white/5"
                >
                  {label}
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-base"
              >
                {t("header.cta")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
