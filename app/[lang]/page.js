import { getDictionary } from "../dictionaries";

import Header from "@/components/Header";
import About from "@/components/About";
import Lore from "@/components/Lore";
import Team from "@/components/Team";
import Support from "@/components/Support";

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
