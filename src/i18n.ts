import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import {localStorage} from "@/utils";
import {LANG} from "@/utils/constant";
import vi from "@/locales/vi.json";
import en from "@/locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: "v3",
  lng: localStorage.getItem(LANG) || "en",
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lang: "vi" | "en") => {
  localStorage.setItem(LANG, lang);
  return i18n.changeLanguage(lang);
};

export default i18n;
