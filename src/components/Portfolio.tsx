"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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

          <div className="flex gap-8 border-t border-border pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <div>
              <div className="text-2xl font-bold text-foreground">06</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Client brands</div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-brand-gradient-soft p-6 md:p-8">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand/5 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-white px-3 shadow-sm">
                <Image
                  src="/manimeta.png"
                  alt="ManiMeta Technologies logo"
                  width={120}
                  height={64}
                  className="h-12 w-20 object-contain"
                />
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">MetaKnacks affiliated entity</div>
                <h3 className="text-xl font-bold text-foreground md:text-2xl">ManiMeta Technologies Pte. Ltd.</h3>
                <p className="mt-1 text-sm text-muted">Singapore | SAP, cloud integration, and enterprise transformation</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-wrap gap-3">
              <a
                href="https://manimeta.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Visit ManiMeta <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7503422500341714945"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-white/70 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-white"
              >
                LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
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
