import { Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-12 overflow-hidden border-t border-slate-800 bg-slate-950 pt-20 pb-10 text-slate-100">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 h-[200px] w-[800px] -translate-x-1/2 bg-brand/20 blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <div className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-6 inline-block">
              METAKNACKS
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              METAKNACKS, a multidisciplinary solutions partner turning ambitious ideas into measurable, executed outcomes.
            </p>
            <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
              <ShieldCheck className="text-secondary" size={20} />
              <span>ISO & SOC Compliant</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://www.linkedin.com/company/metaknacks/" target="_blank" rel="noreferrer" aria-label="METAKNACKS on LinkedIn" className="transition-colors hover:text-white">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="https://www.instagram.com/metaknacks/" target="_blank" rel="noreferrer" aria-label="METAKNACKS on Instagram" className="transition-colors hover:text-white">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="https://twitter.com/metaknacks" target="_blank" rel="noreferrer" aria-label="METAKNACKS on Twitter" className="transition-colors hover:text-white">
                <span className="text-sm font-bold">X</span>
              </a>
              <a href="https://www.facebook.com/metaknacks" target="_blank" rel="noreferrer" aria-label="METAKNACKS on Facebook" className="transition-colors hover:text-white">
                <span className="text-sm font-bold">f</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#home" className="text-sm text-slate-400 transition-colors hover:text-brand">Home</Link></li>
              <li><Link href="/services/sap-staffing" className="text-sm text-slate-400 transition-colors hover:text-brand">SAP Staffing</Link></li>
              <li><Link href="/#services" className="text-sm text-slate-400 transition-colors hover:text-brand">Services</Link></li>
              <li><Link href="/#portfolio" className="text-sm text-slate-400 transition-colors hover:text-brand">Portfolio</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 transition-colors hover:text-brand">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/sap-staffing" className="text-sm text-slate-400 transition-colors hover:text-white">SAP Staffing & Global Resourcing</Link></li>
              <li><Link href="/services/it-cloud-solutions" className="text-sm text-slate-400 transition-colors hover:text-white">IT & Cloud Solutions</Link></li>
              <li><Link href="/services/compliance-security" className="text-sm text-slate-400 transition-colors hover:text-white">Compliance & Security</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm text-slate-400 transition-colors hover:text-white">Digital Marketing & Growth</Link></li>
              <li><Link href="/services/bpo-customer-experience" className="text-sm text-slate-400 transition-colors hover:text-white">BPO & Customer Experience</Link></li>
              <li><Link href="/services/political-consulting" className="text-sm text-slate-400 transition-colors hover:text-white">Political Consulting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-brand mt-0.5 flex-shrink-0" />
                <span>Warangal, Telangana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-brand flex-shrink-0" />
                <a href="mailto:hr@metaknacks.com" className="transition-colors hover:text-white">hr@metaknacks.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center md:flex-row md:text-left">
          <div className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} METAKNACKS. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 md:justify-end">
            <a href="#" className="transition-colors hover:text-brand">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-brand">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
