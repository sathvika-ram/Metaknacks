"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Cloud, 
  ShieldCheck, 
  Megaphone, 
  Headset,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "SAP Staffing & Global Resourcing",
    description: "S/4HANA, SuccessFactors, BTP, ABAP, Functional/Technical Consultants.",
    icon: Database,
    image: "/staffingp.jfif",
    highlight: true,
    slug: "sap-staffing",
  },
  {
    title: "IT & Cloud Solutions",
    description: "Cloud migration, architecture, serverless infrastructure.",
    icon: Cloud,
    image: "/IT.jfif",
    highlight: false,
    slug: "it-cloud-solutions",
  },
  {
    title: "Compliance & Security",
    description: "ISO, CMMI, SOC, DPDP, GDPR review frameworks.",
    icon: ShieldCheck,
    image: "/PRIVACY.jfif",
    highlight: false,
    slug: "compliance-security",
  },
  {
    title: "Digital Marketing & Growth",
    description: "Data-driven marketing and user acquisition strategies.",
    icon: Megaphone,
    image: "/digital.jfif",
    highlight: false,
    slug: "digital-marketing",
  },
  {
    title: "BPO & Customer Experience Operations",
    description: "Scalable customer support and operations management.",
    icon: Headset,
    image: "/BPO.jfif",
    highlight: false,
    slug: "bpo-customer-experience",
  },
  {
    title: "Political Consulting",
    description: "Research-led advisory, campaign strategy, and stakeholder engagement.",
    icon: Briefcase,
    image: "/political (1).jfif",
    highlight: false,
    slug: "political-consulting",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="relative overflow-hidden py-24 bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(140, 82, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />
      <div aria-hidden="true" className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-brand tracking-widest uppercase mb-3">
            <span className="h-px w-8 bg-brand" />
            Capabilities
            <span className="h-px w-8 bg-brand" />
          </span>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">WHAT WE OFFER</h3>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            From strategy to implementation, our multidisciplinary teams deliver solutions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <Link key={cap.slug} href={`/services/${cap.slug}`} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  cap.highlight
                    ? "bg-gradient-to-br from-card to-card/50 border-brand/50 shadow-glow hover:shadow-glow"
                    : "bg-card border-border hover:border-brand/30 hover:bg-card/80"
                }`}
              >
                <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden rounded-t-2xl">
                  <Image
                    src={cap.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>
                {cap.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-2xl rounded-full"></div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  cap.highlight ? "bg-brand/20 text-brand" : "bg-muted/10 text-foreground"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{cap.title}</h4>
                <p className="text-muted leading-relaxed">{cap.description}</p>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-brand opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <span className="ml-2">→</span>
                </div>
              </motion.div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
