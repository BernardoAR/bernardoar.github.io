import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
const savedLanguage = localStorage.getItem("lang") || "en";
i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: "en",
  resources: {
    pt: {
      translation: pt,
    },
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
