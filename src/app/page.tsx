import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ManifestTable from "@/components/ManifestTable";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ManifestTable />
      <Spotlight />
      <About />
      <Footer />
    </main>
  );
}
