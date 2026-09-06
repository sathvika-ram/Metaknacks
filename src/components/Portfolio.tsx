"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Apar Industries", logo: "/apal.png" },
  { name: "Dista", logo: "/dista.png" },
  { name: "Genie", logo: "/genie.jpg" },
  { name: "Rebel Foods", logo: "/rebel.jpg" },
  { name: "Hamswell", logo: "/hamswell.png" },
  { name: "Intellect Bizware", logo: "/inteelect.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-card/40 border-y border-border overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-brand mb-4">
              <span className="w-8 h-px bg-brand" />
              TRUSTED NETWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Built for teams that <span className="text-transparent bg-clip-text bg-brand-gradient">move first.</span>
            </h2>
            <p className="text-muted max-w-2xl text-base md:text-lg">
              Trusted by industry leaders who expect excellence from strategy to execution.
            </p>
          </motion.div>

          <div className="flex gap-8 border-l border-border pl-6">
            <div>
              <div className="text-2xl font-bold text-foreground">06</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Partner brands</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Delivery focus</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group" aria-label="Our clients">
        <div className="animate-[marquee_30s_linear_infinite] flex items-center gap-5 md:gap-7 whitespace-nowrap px-4 md:px-8 group-hover:[animation-play-state:paused]">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group/logo relative shrink-0 bg-card border border-border px-8 py-6 rounded-xl min-w-[220px] h-32 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand/50 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={150}
                height={64}
                className="h-14 w-36 object-contain opacity-100 filter-none transition-transform duration-300 group-hover/logo:scale-105"
              />
              <span className="text-[10px] font-bold tracking-[0.15em] text-black uppercase">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
