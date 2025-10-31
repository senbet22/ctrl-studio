import Vision from "@/components/Vision";
import { getDictionary } from "../../dictionaries";

export default async function VisionPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h1>Vision Page</h1>
      <Vision dict={dict} />
    </div>
  );
}
