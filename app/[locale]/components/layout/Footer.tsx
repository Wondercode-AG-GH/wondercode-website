"use client";

import { motion } from "motion/react";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";

export default function Footer() {
  const { t } = useTranslation("common");

  const services = [
    t("footer.services.salesforceConsulting"),
    t("footer.services.aiStrategy"),
    t("footer.services.customWebApps"),
    t("footer.services.agentforceImplementation"),
  ];

  const company = [
    t("footer.company.aboutUs"),
    t("footer.company.careers"),
    t("footer.company.blog"),
    t("footer.company.contact"),
  ];

  const legal = [
    t("footer.legal.privacyPolicy"),
    t("footer.legal.termsOfService"),
    t("footer.legal.cookiePolicy"),
    t("footer.legal.imprint"),
  ];

  return (
    <footer
      className="relative bg-[#0A0A0A] border-t border-white/10 pt-12 md:pt-20 pb-10 px-5 md:px-8"
      style={{ position: "relative" }}
    >
      <div className="max-w-[1600px] mx-auto" style={{ position: "relative" }}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00CC66] to-[#00aa55] rounded-xl" />
                <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#00CC66]" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white">
                  wondercode
                </div>
                <div className="text-[10px] text-gray-500 tracking-wider">
                  .CH
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            {/* Region Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#00CC66]/30 mb-6"
            >
              <MapPin className="w-5 h-5 text-[#00CC66]" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Zürich (HQ)
                </div>
                <div className="text-xs text-gray-500">
                  {t("footer.region")}
                </div>
              </div>
            </motion.div>

            {/* Language Switcher in Footer */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">
                {t("footer.languageLabel")}
              </p>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {t("footer.headings.services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00CC66] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {t("footer.headings.company")}
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00CC66] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {t("footer.headings.contact")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@wondercode.ch"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00CC66] transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#00CC66] group-hover:scale-110 transition-transform" />
                  hello@wondercode.ch
                </a>
              </li>
              <li>
                <a
                  href="tel:+41445550100"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00CC66] transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 text-[#00CC66] group-hover:scale-110 transition-transform" />
                  +41 44 555 01 00
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#00CC66] flex-shrink-0 mt-0.5" />
                <span>
                  Bahnhofstrasse 100
                  <br />
                  8001 Zürich
                  <br />
                  {t("footer.country")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wondercode AG.{" "}
            {t("footer.allRightsReserved")}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-[#00CC66] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Swiss Flag Badge */}
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span>{t("footer.madeIn")}</span>
            <div className="w-6 h-6 bg-red-600 flex items-center justify-center rounded">
              <div className="text-white text-xs font-bold">🇨🇭</div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
