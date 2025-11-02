import Contact from "@/components/Contact";
import { getDictionary } from "../../dictionaries";

export default async function VisionPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Contact dict={dict} />
    </div>
  );
}
