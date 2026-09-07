"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "SAP Staffing", href: "/services/sap-staffing" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
  ];

  const serviceLinks = [
    { name: "SAP Staffing & Global Resourcing", slug: "sap-staffing" },
    { name: "IT & Cloud Solutions", slug: "it-cloud-solutions" },
    { name: "Compliance & Security", slug: "compliance-security" },
    { name: "Digital Marketing & Growth", slug: "digital-marketing" },
    { name: "BPO & Customer Experience", slug: "bpo-customer-experience" },
    { name: "Political Consulting", slug: "political-consulting" },
    { name: "Emotional Homes & Infra", slug: "emotional-homes-infra" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative group">
            <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover:bg-brand/40 transition-all duration-300"></div>
            <Image
              src="/logo.png"
              alt="METAKNACKS logo"
              width={42}
              height={42}
              className="relative z-10 h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            <div className="relative z-10 text-lg font-bold bg-brand-gradient bg-clip-text text-transparent sm:text-2xl">
              METAKNACKS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.name === "Services" ? (
                <div key={link.name} className="relative group">
                  <a href={link.href} className="text-sm font-medium text-foreground hover:text-brand transition-colors duration-200">
                    Services
                  </a>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
                      {serviceLinks.map((service) => (
                        <Link key={service.slug} href={`/services/${service.slug}`} className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-background hover:text-brand">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-brand transition-colors duration-200"
              >
                {link.name}
              </a>
              )
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex">
            <a href="/about#contact" className="bg-brand-gradient text-white px-6 py-2 rounded-full font-medium shadow-glow hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-brand p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-foreground hover:bg-background hover:text-brand rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-border pt-3 mt-2">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Services</div>
                {serviceLinks.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-background hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 px-3">
                <a href="/about#contact" className="block w-full bg-brand-gradient text-center text-white px-6 py-3 rounded-full font-medium shadow-glow">
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
