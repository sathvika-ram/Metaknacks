import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Capabilities />
      <WhyChooseUs />
      <Calculator />
      <Footer />
    </main>
  );
}
