import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import spanishTranslations from "./translations/es-ES";
import englishTranslations from "./translations/en-US";

const VALID_LANGUAGES = ["es-ES", "en-US"];
const FALLBACK_LANGUAGE = "es-ES";

i18next.use(initReactI18next).init({
  lng: VALID_LANGUAGES.includes(navigator.language)
    ? navigator.language
    : FALLBACK_LANGUAGE,
  resources: {
    "es-ES": { translation: spanishTranslations },
    "en-US": { translation: englishTranslations },
  },
});
