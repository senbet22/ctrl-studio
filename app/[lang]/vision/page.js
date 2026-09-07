/**
 * Renders the dedicated Vision page.
 * It fetches the language dictionary and displays the main `Vision` component.
 *
 * @param {object} params - The route parameters, containing the `lang`.
 */
import Vision from "@/components/Vision";
import { getDictionary } from "../../dictionaries";
import { buildMetadata } from "@/utils/seo";
import { getSeo } from "../../dictionaries/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const seo = getSeo(lang);

  return buildMetadata({
    lang,
    path: "vision",
    title: seo.vision.title,
    description: seo.vision.description,
  });
}

export default async function VisionPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Vision dict={dict} />
    </div>
  );
}
