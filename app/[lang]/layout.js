import { locales, getDictionary } from "../dictionaries";
import { ovo, skranji } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import BackToTopButton from "@/components/routing/BackToTopButton";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata = {
  title: "Ctrl - Studio",
  description: "Ctrl Studio is an indie game studio from Norway",
};

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${skranji.variable} ${ovo.variable} font-skranji antialiased leading-8 overflow-x-hidden bg-background`}
      >
        <Navbar dict={dict} lang={lang} />
        <BackToTopButton />
        {children}
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
