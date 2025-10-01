import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ENUS } from "./locales/en/en-us";
import { PTBR } from "./locales/pt/pt-br";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: ENUS,
    },
    "pt-BR": {
      translation: PTBR,
    },
  },
  lng: ["pt-BR", "pt-PT"].includes(navigator.language) ? "pt-BR" : "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
