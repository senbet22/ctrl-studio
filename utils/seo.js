/**
 * Shared SEO helpers for the localized routes.
 *
 * Every page under /[lang] renders the same content in a different language, so
 * each one needs a canonical pointing at itself plus hreflang links to its
 * siblings. Without those, search engines have to guess whether /en and /no are
 * translations or duplicates.
 */

export const SITE_URL = "https://ctrlstudio.no";

/** Open Graph locale codes, keyed by the locale used in the URL. */
const OG_LOCALES = {
  en: "en_US",
  no: "nb_NO",
};

/**
 * The social share card, resolved against `metadataBase` from the root layout.
 *
 * This is set explicitly rather than through the app/opengraph-image.png file
 * convention, because that convention only applies to the segment it sits in
 * and is not inherited by nested routes. Declaring it here gives every page the
 * same card from a single source.
 */
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "A horned Viking longship emerging from the fog in a pine forest, from Gastahav: The Shadow from Ringholt",
};

/**
 * Builds the absolute URL for a localized route.
 *
 * @param {string} lang - The locale segment ('en' or 'no').
 * @param {string} path - The route below the locale segment; '' for the home page.
 * @returns {string} The absolute URL.
 */
function urlFor(lang, path) {
  return `${SITE_URL}/${lang}${path ? `/${path}` : ""}`;
}

/**
 * Builds the metadata for a localized page: a self-referencing canonical,
 * hreflang alternates for every locale, and Open Graph / Twitter tags.
 *
 * `openGraph.title` and `openGraph.description` are deliberately left out so
 * Next derives them from `title` and `description`, with the root layout's
 * title template already applied.
 *
 * @param {object} options
 * @param {string} options.lang - The active locale.
 * @param {string} [options.path] - The route below the locale segment.
 * @param {string} options.title - The page title, without the site name suffix.
 * @param {string} options.description - The meta description.
 * @returns {import('next').Metadata} The metadata object for the page.
 */
export function buildMetadata({ lang, path = "", title, description }) {
  return {
    title,
    description,
    alternates: {
      canonical: urlFor(lang, path),
      languages: {
        en: urlFor("en", path),
        no: urlFor("no", path),
        "x-default": urlFor("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Ctrl Studio",
      url: urlFor(lang, path),
      locale: OG_LOCALES[lang] ?? OG_LOCALES.en,
      alternateLocale: lang === "no" ? OG_LOCALES.en : OG_LOCALES.no,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      images: [OG_IMAGE],
    },
  };
}
