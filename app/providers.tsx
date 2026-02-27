"use client";
import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface I18nProviderProps {
  children: ReactNode;
  locale?: string;
}

export default function I18nProvider({ children, locale }: I18nProviderProps) {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    // Priority: URL locale → localStorage → default "de"
    const language = locale || storedLanguage || "de";

    if (i18n.isInitialized) {
      i18n.changeLanguage(language);
    }

    // Keep localStorage in sync with URL locale
    if (locale) {
      localStorage.setItem("preferredLanguage", locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
