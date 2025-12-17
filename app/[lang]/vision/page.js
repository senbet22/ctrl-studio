/**
 * Renders the dedicated Vision page.
 * It fetches the language dictionary and displays the main `Vision` component.
 *
 * @param {object} params - The route parameters, containing the `lang`.
 */
import Vision from "@/components/Vision";
import { getDictionary } from "../../dictionaries";

export default async function VisionPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Vision dict={dict} />
    </div>
  );
}
