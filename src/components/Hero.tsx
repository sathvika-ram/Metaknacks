"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight, Globe, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    id: "sap",
    eyebrow: "SAP STAFFING & GLOBAL RESOURCING",
    title: "Global SAP Resourcing.",
    highlight: "Vision Meets Execution.",
    description: "Deploy elite SAP S/4HANA experts and functional consultants who move transformation projects forward.",
    primaryCta: "Explore SAP Talent",
    secondaryCta: "Our Capabilities",
    primaryHref: "/services/sap-staffing",
    stat: "500+",
    statLabel: "Placed SAP Consultants",
    badgeTitle: "Global",
    badgeDetail: "SAP Talent Pool",
    proofValue: "100%",
    proofLabel: "Delivery Ready",
    duration: 8000,
  },
  {
    id: "cloud",
    eyebrow: "IT & CLOUD SOLUTIONS",
    title: "Cloud Solutions That Scale.",
    highlight: "Build Without Limits.",
    description: "Connect with cloud architects and engineering teams ready to modernize infrastructure and accelerate delivery.",
    primaryCta: "Explore Cloud Teams",
    secondaryCta: "View Services",
    primaryHref: "/services/it-cloud-solutions",
    stat: "24/7",
    statLabel: "Cloud Operations",
    badgeTitle: "Cloud",
    badgeDetail: "Architecture Experts",
    proofValue: "99.9%",
    proofLabel: "Platform Focus",
    duration: 5000,
  },
  {
    id: "growth",
    eyebrow: "MULTIDISCIPLINARY DELIVERY",
    title: "Specialist Teams On-Demand.",
    highlight: "Turn Ambition Into Impact.",
    description: "Bring focused expertise across technology, compliance, digital growth, and operations to your next big move.",
    primaryCta: "Find Your Team",
    secondaryCta: "See Our Expertise",
    primaryHref: "/about#contact",
    stat: "6+",
    statLabel: "Specialist Practices",
    badgeTitle: "Multi-Sector",
    badgeDetail: "Execution Teams",
    proofValue: "360°",
    proofLabel: "Delivery Support",
    duration: 5000,
  },
  {
    id: "security",
    eyebrow: "COMPLIANCE & SECURITY",
    title: "Trust Built Into Delivery.",
    highlight: "Operate With Confidence.",
    description: "Strengthen controls, governance, and evidence with practical compliance and security support for modern organisations.",
    primaryCta: "Strengthen Your Controls",
    secondaryCta: "Explore Compliance",
    primaryHref: "/services/compliance-security",
    stat: "ISO",
    statLabel: "Readiness Support",
    badgeTitle: "Secure",
    badgeDetail: "Governance Ready",
    proofValue: "DPDP",
    proofLabel: "Privacy Focus",
    duration: 5000,
  },
  {
    id: "operations",
    eyebrow: "BPO & CUSTOMER EXPERIENCE",
    title: "Operations That Scale.",
    highlight: "Every Interaction Matters.",
    description: "Build dependable customer operations with trained teams, clear workflows, and performance-led service delivery.",
    primaryCta: "Build Your Operations Team",
    secondaryCta: "View BPO Solutions",
    primaryHref: "/services/bpo-customer-experience",
    stat: "CX",
    statLabel: "Built Around People",
    badgeTitle: "Customer",
    badgeDetail: "Experience Teams",
    proofValue: "SLA",
    proofLabel: "Focused Delivery",
    duration: 5000,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);

  useEffect(() => {
    let slideTimer: number;

    const scheduleNextSlide = () => {
      slideTimer = window.setTimeout(() => {
        const nextSlide = (activeSlideRef.current + 1) % heroSlides.length;
        activeSlideRef.current = nextSlide;
        setActiveSlide(nextSlide);
        scheduleNextSlide();
      }, heroSlides[activeSlideRef.current].duration);
    };

    scheduleNextSlide();

    return () => window.clearTimeout(slideTimer);
  }, []);

  const slide = heroSlides[activeSlide];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/hero.jpg)' }} 
      >
        <div className="absolute inset-0 bg-white/82"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] z-[1]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div className="text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="inline-block mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold tracking-wider text-muted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                {slide.eyebrow}
              </span>
            </motion.div>

            <div className="relative min-h-[390px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    <span className="text-transparent bg-clip-text bg-brand-gradient">{slide.highlight}</span>
                    <br />
                    <span className="text-4xl md:text-5xl text-foreground/90">{slide.title}</span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.primaryHref} className="flex items-center gap-2 bg-brand-gradient text-white px-8 py-4 rounded-full font-semibold shadow-glow hover:shadow-glow transition-all transform hover:-translate-y-1">
                      {slide.primaryCta}
                      <ArrowRight size={20} />
                    </Link>
                    <Link href="#services" className="flex items-center gap-2 border border-border bg-card/50 hover:bg-card px-8 py-4 rounded-full font-semibold text-foreground transition-all">
                      {slide.secondaryCta}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Dynamic Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-full flex flex-col justify-center"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-gradient-soft rounded-full animate-[spin_10s_linear_infinite] border border-border/50 backdrop-blur-sm"></div>
              <div className="absolute inset-8 bg-card rounded-full shadow-2xl flex items-center justify-center border border-border flex-col p-8 text-center overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
                <Users size={48} className="text-brand mb-4" />
                <h3 className="text-4xl font-bold text-foreground mb-2">{slide.stat}</h3>
                <p className="text-muted text-sm uppercase tracking-widest">{slide.statLabel}</p>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-card border border-border px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <Globe className="text-brand" size={24} />
                <div>
                  <div className="text-sm font-bold">{slide.badgeTitle}</div>
                  <div className="text-xs text-muted">{slide.badgeDetail}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-4 bg-card border border-border px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <CheckCircle className="text-secondary" size={24} />
                <div>
                  <div className="text-sm font-bold">{slide.proofValue}</div>
                  <div className="text-xs text-muted">{slide.proofLabel}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
