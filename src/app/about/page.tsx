import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
