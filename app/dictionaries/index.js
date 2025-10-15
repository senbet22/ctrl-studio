const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  no: () => import("./no.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    return dictionaries["en"](); // Fallback to English
  }
  return dictionaries[locale]();
};

export const locales = ["en", "no"];
export const defaultLocale = "en";
