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
