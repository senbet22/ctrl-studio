import Header from "@/components/Header";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Lore from "@/components/Lore";
import TeamSection from "@/components/TeamSection";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Lore />
      <TeamSection />
      <Support />
      <Contact />
      <Footer />
    </>
  );
}
