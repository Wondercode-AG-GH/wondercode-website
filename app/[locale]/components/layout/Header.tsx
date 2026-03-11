"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sanityNavData, setSanityNavData] = useState<{
    navItems?: any[];
    ctaLabel?: string;
    ctaLabelDe?: string;
  } | null>(null);

  useEffect(() => {
    async function fetchHeader() {
      try {
        const res = await fetch("/api/header");
        if (res.ok) {
          const data = await res.json();
          setSanityNavData(data);
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    }
    fetchHeader();
  }, []);
  const pathname = usePathname();

  // Extract locale from the pathname (e.g. "/en/services/erp" → "en")
  const locale = pathname?.split("/")?.[1] ?? "en";

  // Strip locale prefix to get normalized path (e.g. "/en/industries/erp" → "/industries/erp")
  const normalizedPath = pathname ? pathname.replace(/^\/[^/]+/, "") : "";

  /**
   * Map each route prefix to the nav key it belongs to.
   * When on a detail page the corresponding nav item is highlighted and
   * its link resolves to the home page section instead of a plain hash.
   */
  const routeNavMap: { prefix: string; navKey: string }[] = [
    { prefix: "/services/", navKey: "services" },
    { prefix: "/industries/", navKey: "industry-expertise" },
    { prefix: "/case-studies/", navKey: "success-stories" },
  ];

  const activeNavKey =
    routeNavMap.find(({ prefix }) => normalizedPath.startsWith(prefix))
      ?.navKey ?? null;

  // True on any detail page (services, industries, case-studies)
  const isOnDetailPage = activeNavKey !== null;

  const navItems =
    sanityNavData?.navItems && sanityNavData.navItems.length > 0
      ? sanityNavData.navItems.map((item: any) => ({
          label:
            i18n.language === "de" ? item.labelDe || item.label : item.label,
          key: item.key,
        }))
      : [
          { label: t("header.nav.services"), key: "services" },
          { label: t("header.nav.agentforce"), key: "agentforce" },
          {
            label: t("header.nav.customEngineering"),
            key: "custom-engineering",
          },
          {
            label: t("header.nav.industryExpertise"),
            key: "industry-expertise",
          },
          { label: t("header.nav.successStories"), key: "success-stories" },
          { label: t("header.nav.about"), key: "about" },
        ];

  const ctaLabel =
    sanityNavData?.ctaLabel || sanityNavData?.ctaLabelDe
      ? i18n.language === "de"
        ? sanityNavData.ctaLabelDe || sanityNavData.ctaLabel
        : sanityNavData.ctaLabel || sanityNavData.ctaLabelDe
      : t("header.cta");

  /**
   * Resolve the correct href for a nav item.
   * - On any detail page (services / industries / case-studies): return a
   *   full locale-aware URL so navigation always goes back to the correct
   *   home-page section.
   * - On the home page: plain hash link for smooth in-page scrolling.
   */
  const getHref = (key: string) => {
    if (isOnDetailPage) {
      return `/${locale}/#${key}`;
    }
    return `#${key}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          background: "rgba(10, 10, 10, 0.75)",
        }}
      >
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-20">
            {/* Logo — clicking always goes back to the locale home page */}
            <Link
              href={`/${locale}`}
              aria-label="Go to home page"
              className="flex-shrink-0"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg
                  width="160"
                  height="28"
                  viewBox="0 0 200 36"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[120px] sm:w-[140px] lg:w-[130px] xl:w-[150px] 2xl:w-[160px] h-auto drop-shadow-lg"
                >
                  <text
                    x="0"
                    y="28"
                    fill="#00CC66"
                    fontFamily="'Nunito', 'Poppins', 'Inter', sans-serif"
                    fontWeight="800"
                    fontSize="30"
                    letterSpacing="-0.5"
                  >
                    wondercode
                  </text>
                </svg>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center min-w-0 gap-3 xl:gap-5 2xl:gap-7 overflow-x-auto flex-nowrap scroll-smooth">
              {navItems.map(({ label, key }, i) => {
                const isActive = key === activeNavKey;
                return (
                  <motion.a
                    key={key}
                    href={getHref(key)}
                    className={`text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-sm transition-colors relative group whitespace-nowrap py-1 overflow-visible ${
                      isActive
                        ? "text-[#00CC66]"
                        : "text-gray-400 hover:text-[#00CC66]"
                    }`}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    {label}
                    {/* Underline: always visible when active, shown on hover otherwise */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#00CC66] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4">
              <div className="scale-90 sm:scale-95 md:scale-100 origin-right">
                <LanguageSwitcher />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 204, 102, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:block px-3 lg:px-4 xl:px-5 2xl:px-6 py-2 md:py-2.5 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-xs lg:text-[13px] xl:text-sm transition-all shadow-md hover:shadow-lg hover:shadow-[#00CC66]/30 whitespace-nowrap"
              >
                {ctaLabel}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 sm:top-[4.5rem] md:top-20 left-0 right-0 z-40 lg:hidden overflow-hidden"
            style={{
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              background: "rgba(10, 10, 10, 0.92)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-5 py-6 space-y-3 sm:space-y-4 max-h-[70vh] overflow-y-auto">
              {navItems.map(({ label, key }, i) => {
                const isActive = key === activeNavKey;
                return (
                  <motion.a
                    key={key}
                    href={getHref(key)}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`block py-3 text-base sm:text-lg transition-colors border-b border-white/5 last:border-b-0 ${
                      isActive
                        ? "text-[#00CC66] font-semibold"
                        : "text-gray-200 hover:text-[#00CC66]"
                    }`}
                  >
                    {label}
                  </motion.a>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-4 py-4 bg-[#00CC66] text-[#0A0A0A] rounded-xl font-semibold text-base sm:text-lg shadow-md whitespace-nowrap"
              >
                {ctaLabel}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
