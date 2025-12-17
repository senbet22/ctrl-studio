/**
 * Renders the dedicated contact page.
 * It fetches the language dictionary and displays the `Contact` component.
 *
 * @param {object} params - The route parameters, containing the `lang`.
 */
import Contact from "@/components/Contact";
import { getDictionary } from "../../dictionaries";

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Contact dict={dict} />
    </div>
  );
}
