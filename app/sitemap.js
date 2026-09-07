import { SITE_URL } from "@/utils/seo";
import { locales, defaultLocale } from "./dictionaries";

/** Routes below the locale segment; '' is the home page. */
const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "vision", changeFrequency: "monthly", priority: 0.8 },
  { path: "contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

const urlFor = (lang, path) => `${SITE_URL}/${lang}${path ? `/${path}` : ""}`;

/**
 * Generates /sitemap.xml.
 *
 * Each route is listed once per locale, and every entry carries the same
 * hreflang alternates as the page metadata so the two never disagree.
 */
export default function sitemap() {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    const languages = Object.fromEntries([
      ...locales.map((lang) => [lang, urlFor(lang, route.path)]),
      ["x-default", urlFor(defaultLocale, route.path)],
    ]);

    return locales.map((lang) => ({
      url: urlFor(lang, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
