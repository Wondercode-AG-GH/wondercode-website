import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEN from "../public/locales/en/common.json";
import commonDE from "../public/locales/de/common.json";

export const resources = {
  en: {
    common: commonEN,
  },
  de: {
    common: commonDE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    defaultNS: "common",
    ns: ["common"],
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
