/**
 * The main home page component for a given language.
 * It fetches the language dictionary and assembles all the major sections
 * of the single-page application (Header, About, Lore, etc.).
 *
 * @param {object} params - The route parameters, containing the `lang`.
 */
import { getDictionary } from "../dictionaries";
import { buildMetadata } from "@/utils/seo";
import { getSeo } from "../dictionaries/seo";

import Header from "@/components/Header";
import About from "@/components/About";
import Lore from "@/components/Lore";
import Team from "@/components/Team";
import Support from "@/components/Support";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const seo = getSeo(lang);

  return buildMetadata({
    lang,
    title: seo.home.title,
    description: seo.home.description,
  });
}

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <About dict={dict} lang={lang} />
      <Lore dict={dict} lang={lang} />
      <Team dict={dict} lang={lang} />
      <Support dict={dict} lang={lang} />
    </>
  );
}
