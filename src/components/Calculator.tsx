"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

const modules = ["FI/CO", "MM/SD", "PP", "S/4HANA", "ABAP", "Basis"];
const models = ["Contract", "Contract-to-Hire", "Permanent Placement"];
const seniority = ["Consultant", "Senior Consultant", "Lead / Architect", "Programme or Project Lead"];

export default function Calculator() {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("Contract");
  const [selectedSeniority, setSelectedSeniority] = useState<string>("Senior Consultant");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModule = (mod: string) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const modules = selectedModules.length > 0 ? selectedModules.join(", ") : "No specific modules selected";
    window.location.href = `mailto:hr@metaknacks.com?subject=${encodeURIComponent("SAP staffing enquiry")}&body=${encodeURIComponent(`Modules: ${modules}\nSeniority: ${selectedSeniority}\nEngagement model: ${selectedModel}\nLocation or time-zone: Singapore / APAC\n\nPlease share availability, start date, budget range, and role description in your reply.`)}`;
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="sap-staffing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Plan your SAP capability with a trusted delivery partner</h2>
          <p className="text-base text-muted sm:text-lg">
            Share your priorities with us. We will clarify the brief, align the right SAP expertise, and come back with a practical next step.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl relative"
        >
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Modules Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand/20 text-brand text-xs">1</span>
                Select SAP Modules
              </h3>
              <div className="flex flex-wrap gap-3">
                {modules.map((mod) => {
                  const isSelected = selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => toggleModule(mod)}
                      className={`px-5 py-2.5 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? "bg-brand border-brand text-white shadow-glow"
                          : "bg-background border-border text-muted hover:border-brand/50 hover:text-foreground"
                      }`}
                    >
                      {isSelected && <Check size={16} className="text-white" />}
                      {mod}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand/20 text-brand text-xs">2</span>
                Seniority or delivery responsibility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {seniority.map((level) => (
                  <button key={level} type="button" onClick={() => setSelectedSeniority(level)} className={`p-3 rounded-xl border text-sm text-center transition-all duration-200 ${selectedSeniority === level ? "bg-brand/10 border-brand text-brand shadow-glow" : "bg-background border-border text-muted hover:border-brand/30"}`}>
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Engagement Model */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand/20 text-brand text-xs">3</span>
                Engagement Model
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {models.map((model) => {
                  const isSelected = selectedModel === model;
                  return (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setSelectedModel(model)}
                      className={`p-4 rounded-xl border text-center transition-all duration-200 ${
                        isSelected
                          ? "bg-brand/10 border-brand text-brand shadow-glow"
                          : "bg-background border-border text-muted hover:border-brand/30"
                      }`}
                    >
                      <div className="font-medium">{model}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col items-stretch justify-between gap-5 border-t border-border pt-4 sm:flex-row sm:items-center">
              <div className="text-sm text-muted sm:max-w-[55%]">
                {selectedModules.length} module(s) • {selectedSeniority} • {selectedModel}
              </div>
              <button
                type="submit"
                disabled={selectedModules.length === 0 || isSubmitted}
                className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-all duration-300 sm:w-auto sm:px-8 ${
                  selectedModules.length === 0
                    ? "bg-muted/20 text-muted cursor-not-allowed"
                    : isSubmitted
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "bg-brand-gradient text-white hover:shadow-glow transform hover:-translate-y-1"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} /> Request Sent
                  </>
                ) : (
                  <>
                    Get Resource Profiles <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
