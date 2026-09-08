import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About METAKNACKS",
  description: "Meet METAKNACKS, a multidisciplinary partner for SAP staffing, technology delivery, compliance, growth, and customer operations.",
  alternates: {
    canonical: "/about",
  },
};

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
