import { getDictionary } from "../dictionaries";

import Header from "@/components/Header";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Lore from "@/components/Lore";
import Team from "@/components/Team";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import BackToTopButton from "@/components/routing/BackToTopButton";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <BackToTopButton />
      <Header dict={dict} lang={lang} />
      <About dict={dict} lang={lang} />
      <Lore dict={dict} lang={lang} />
      <Vision dict={dict} lang={lang} />
      <Team dict={dict} lang={lang} />
      <Support dict={dict} lang={lang} />
      <Contact dict={dict} lang={lang} />
    </>
  );
}
