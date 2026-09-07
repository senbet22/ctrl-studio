/**
 * The primary layout for language-specific pages.
 * It sets up the main HTML structure, applies global fonts, and wraps the content
 * with the Navbar, Footer, and other global components.
 *
 * Page titles and descriptions are declared per route, so this layout sets no
 * metadata of its own beyond what it inherits from the root layout.
 *
 * @param {object} children - The page content to render.
 * @param {object} params - The route parameters, containing the `lang`.
 */
import { locales, getDictionary } from "../dictionaries";
import { ovo, skranji } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import BackToTopButton from "@/components/routing/BackToTopButton";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

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
