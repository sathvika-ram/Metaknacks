"use client";

import { FormEvent, useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      `Full Name: ${formData.get("fullName") ?? ""}`,
      `Company Name: ${formData.get("companyName") ?? "Not provided"}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Phone: ${formData.get("phone") ?? ""}`,
      `Service Interested In: ${formData.get("service") ?? ""}`,
      `Message: ${formData.get("message") ?? ""}`,
    ].join("\n");

    setIsSent(true);
    window.location.href = `mailto:hr@metaknacks.com?subject=${encodeURIComponent("New enquiry for METAKNACKS")}&body=${encodeURIComponent(details)}`;
  };

  return (
    <section id="contact" className="border-t border-border bg-gradient-to-br from-brand/5 via-background to-secondary/10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Contact Us</p>
          <h2 className="text-3xl font-bold md:text-5xl">Let&apos;s turn your next idea into action.</h2>
          <p className="mt-4 text-lg text-muted">Send us a message and our team will get back to you shortly.</p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="METAKNACKS location in Warangal, Telangana"
                src="https://www.google.com/maps?q=15-1-237%2C%20Mulugu%20X%20Road%2C%20Vidya%20Nagar%2C%20Warangal%2C%20Telangana%20506007&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex gap-3 text-sm text-muted">
              <MapPin className="mt-0.5 shrink-0 text-brand" size={19} />
              <span>Metaknacks Pvt Ltd, Center, 15-1-237, Mulugu X Road, Vidya Nagar, Warangal, Telangana 506007.</span>
            </div>
            <div className="mt-5 flex gap-3 text-sm text-muted">
              <Clock3 className="mt-0.5 shrink-0 text-brand" size={19} />
              <span>Monday–Friday: 9:00 AM–6:00 PM<br />Saturday: 10:00 AM–2:00 PM<br />Sunday: Closed</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <a href="mailto:hr@metaknacks.com" className="flex items-center gap-2 text-brand hover:text-brand-dark"><Mail size={17} /> hr@metaknacks.com</a>
              <a href="https://www.google.com/maps/search/?api=1&query=15-1-237%2C+Mulugu+X+Road%2C+Vidya+Nagar%2C+Warangal%2C+Telangana+506007" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand hover:text-brand-dark"><Phone size={17} /> Get directions</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="h-full rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
            <h3 className="text-2xl font-bold">Send Us a Message</h3>
            <p className="mt-2 text-sm text-muted">Fill out the form below and our team will get back to you shortly.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium">Full Name *<input required name="fullName" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand" /></label>
              <label className="text-sm font-medium">Company Name (optional)<input name="companyName" type="text" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand" /></label>
              <label className="text-sm font-medium">Email Address *<input required name="email" type="email" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand" /></label>
              <label className="text-sm font-medium">Phone Number *<input required name="phone" type="tel" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand" /></label>
              <label className="text-sm font-medium md:col-span-2">Service Interested In *<select required name="service" defaultValue="" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand"><option value="" disabled>Select an option</option><option>Software Development</option><option>Web Application Development</option><option>Mobile App Development</option><option>Cloud & DevOps Solutions</option><option>API Integration</option><option>SAP Staffing & Global Resourcing</option><option>Other</option></select></label>
              <label className="text-sm font-medium md:col-span-2">Message *<textarea required name="message" rows={5} className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-brand" /></label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-white shadow-glow transition-transform hover:-translate-y-1"><Send size={17} /> {isSent ? "Opening Mail" : "Send Mail"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
