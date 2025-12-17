/**
 * This module manages the application's translation dictionaries.
 * It imports the JSON dictionary files, aggregates them, and provides a function
 * to retrieve the correct dictionary based on a given locale.
 */

import en from "./en.json";
import no from "./no.json";

const dictionaries = {
  en,
  no,
};

/**
 * Retrieves the dictionary for a given locale.
 * If the requested locale does not have a corresponding dictionary, it falls back to the English ('en') dictionary.
 * @param {string} locale - The desired locale (e.g., 'en', 'no').
 * @returns {object} The dictionary object for the given locale or the default English dictionary.
 */
export const getDictionary = (locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};

export const locales = ["en", "no"];
export const defaultLocale = "en";
