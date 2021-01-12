import langEN from "./en.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const lang = () => {
  return "en";
};

i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: lang(),
    resources: {
      en: {
        common: langEN,
      },
    },
  })
  .then(() => {});

export default i18n;
