import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import spanishTranslations from "./translations/es-ES";
import englishTranslations from "./translations/en-US";

i18next.use(initReactI18next).init({
  lng: navigator.language || "es-ES",
  resources: {
    "es-ES": { translation: spanishTranslations },
    "en-US": { translation: englishTranslations },
  },
});
