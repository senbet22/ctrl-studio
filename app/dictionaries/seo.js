/**
 * Titles and descriptions used only by generateMetadata.
 *
 * These deliberately live outside en.json / no.json. Those dictionaries are
 * passed whole into client components (Navbar, Header, Footer and friends), so
 * everything in them is serialized into the RSC payload and downloaded by every
 * visitor. Metadata strings are consumed at build time and never rendered, so
 * keeping them here means they never reach the browser.
 */

const seo = {
  en: {
    home: {
      title: "Gastahav: The Shadow from Ringholt",
      description:
        "A story-driven RPG woven from Sámi and Norse mythology, made by Ctrl Studio in Norway. Watch the trailer and follow Tyri and Draupne through the fjords of Gastahav.",
    },
    vision: {
      title: "Our Vision",
      description:
        "Why Ctrl Studio is building Gastahav: giving Nordic cultural heritage new forms, new voices and new life, in the tension between heritage and invention.",
    },
    contact: {
      title: "Contact",
      description:
        "Questions about Gastahav: The Shadow from Ringholt, or about working with Ctrl Studio? Send the team a message.",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      description:
        "How Ctrl Studio collects, uses and deletes personal data when you sign up for our mailing list.",
    },
    termsAndConditions: {
      title: "Terms and Conditions",
      description:
        "The terms that apply when you use the Ctrl Studio website and subscribe to our updates.",
    },
  },
  no: {
    home: {
      title: "Gastahav: Skyggen fra Ringholt",
      description:
        "Et historiedrevet RPG smeltet sammen av samisk og norrøn mytologi, laget av Ctrl Studio i Norge. Se traileren og følg Tyri og Draupne gjennom fjordene i Gastahav.",
    },
    vision: {
      title: "Vår Visjon",
      description:
        "Hvorfor Ctrl Studio bygger Gastahav: å gi nordisk kulturarv nye former, nye stemmer og nytt liv, i spennet mellom arv og nyskaping.",
    },
    contact: {
      title: "Ta kontakt",
      description:
        "Spørsmål om Gastahav: Skyggen fra Ringholt, eller om samarbeid med Ctrl Studio? Send oss en melding.",
    },
    privacyPolicy: {
      title: "Personvernerklæring",
      description:
        "Hvordan Ctrl Studio samler inn, bruker og sletter personopplysninger når du melder deg på nyhetsbrevet vårt.",
    },
    termsAndConditions: {
      title: "Vilkår og betingelser",
      description:
        "Vilkårene som gjelder når du bruker nettsiden til Ctrl Studio og abonnerer på oppdateringene våre.",
    },
  },
};

/**
 * Retrieves the metadata strings for a locale, falling back to English.
 *
 * @param {string} locale - The desired locale ('en' or 'no').
 * @returns {object} The metadata strings for that locale.
 */
export const getSeo = (locale) => seo[locale] ?? seo.en;
