import en from "./en.json";
import no from "./no.json";

const dictionaries = {
  en,
  no,
};

export const getDictionary = (locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};

export const locales = ["en", "no"];
export const defaultLocale = "en";
