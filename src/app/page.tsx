import About from "@/components/About";
import BeyondCode from "@/components/BeyondCode";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ManifestTable from "@/components/ManifestTable";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <ManifestTable />
        <Spotlight />
        <Experience />
        <BeyondCode />
      </main>
      <Footer />
    </>
  );
}
