import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden border-b border-border pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,82,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(140,82,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <Link href="/#services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
              <span aria-hidden="true">←</span> Back to services
            </Link>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary">{service.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{service.summary}</p>
            <Link href="/about#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-glow transition-transform hover:-translate-y-1">
              Talk to our team <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <Image src={service.image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/25 via-transparent to-white/10" />
          </div>
        </div>
      </section>

      {service.slug === "sap-staffing" ? (
        <>
          <section className="bg-white py-20 text-slate-950 md:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src="/struggling.jfif" alt="Teams navigating SAP delivery challenges" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand">01 / The starting point</p>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">SAP transformation is too important for guesswork.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">A missed role, an unclear scope, or a weak handover can slow an entire programme. We begin by understanding the delivery stage, module landscape, outcomes, and working model before we search.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Programme stage", "SAP module fit", "Location and time zone", "Start date and availability"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="text-brand" size={18} />{item}</div>)}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-950 py-20 text-white md:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-secondary">02 / The right capability</p>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">People who understand the work behind the title.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">We connect clients with functional, technical, and leadership talent across S/4HANA, SuccessFactors, BTP, ABAP, Fiori, integration, Basis, and core business functions.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.capabilities.map((capability) => <div key={capability} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-200">{capability}</div>)}
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"><Image src="/sap.jfif" alt="SAP enterprise technology and delivery" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
            </div>
          </section>

          <section className="bg-white py-20 text-slate-950 md:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl"><Image src="/rytcandiadte.jfif" alt="SAP consultant ready for an engagement" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand">03 / The confidence to move</p>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">A shortlist built for a decision, not just a download.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Role calibration, experience review, technical screening, references, and availability checks create a clearer basis for selection. Once the fit is confirmed, we support onboarding and delivery cadence.</p>
                <ul className="mt-8 space-y-4">{service.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm font-semibold text-slate-700"><CheckCircle2 className="shrink-0 text-brand" size={19} />{outcome}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="bg-brand-gradient py-16 text-white md:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
              <div><p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-white/70">04 / The next move</p><h2 className="text-3xl font-bold md:text-4xl">Bring us the brief. We will help shape the route.</h2></div>
              <Link href="/about#contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-brand transition-transform hover:-translate-y-1">Discuss your SAP requirement <ArrowRight size={18} className="ml-2" /></Link>
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">How we help</p>
            <div className="space-y-6 text-lg leading-relaxed text-muted">{service.details.map((detail) => <p key={detail}>{detail}</p>)}</div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">{service.capabilities.map((capability) => <div key={capability} className="flex gap-3 rounded-xl border border-border bg-card p-4"><CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} /><span className="text-sm font-medium leading-relaxed">{capability}</span></div>)}</div>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-card p-7 shadow-xl"><p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-secondary">What good looks like</p><ul className="space-y-5">{service.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-muted"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{outcome}</li>)}</ul><Link href="/about#contact" className="mt-8 block rounded-full border border-border px-5 py-3 text-center text-sm font-semibold transition-colors hover:border-brand hover:text-brand">Start a conversation</Link></aside>
        </section>
      )}
      <Footer />
    </main>
  );
}
