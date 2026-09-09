import About from "@/components/About";
import BeyondCode from "@/components/BeyondCode";
import Capabilities from "@/components/Capabilities";
import EstocaWakeUp from "@/components/EstocaWakeUp";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <EstocaWakeUp />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <BeyondCode />
      </main>
      <Footer />
    </>
  );
}
