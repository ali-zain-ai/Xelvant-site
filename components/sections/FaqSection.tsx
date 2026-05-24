"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does Xelvant differ from off-the-shelf marketing tools?",
    answer: "Standard SaaS platforms use generic rules and statistical averages that apply to everyone. Xelvant builds custom machine learning models trained exclusively on your brand's historical customer journeys. This allows us to predict behaviors (like exit intent) with up to 94% precision, tailored specifically to your audience vertical."
  },
  {
    question: "Do we have to replace Shopify, Klaviyo, or our active CRM?",
    answer: "No. Xelvant acts as an intelligence overlay, not a replacement. We connect directly to your existing platforms (Shopify Plus, Klaviyo, Meta, Salesforce, etc.) via secure API channels, compute predictive behaviors in our models, and pipe the actionable intelligence back into your current tools dynamically."
  },
  {
    question: "How long does the ingestion and model deployment take?",
    answer: "Our standard integration lifecycle takes 2 to 4 weeks. Week 1 is dedicated to data stack auditing and secure pipeline mapping. Week 2-3 involves training the machine learning models on your custom datasets. Week 4 focuses on deploying live trigger systems and syncing them with Klaviyo/Meta Ads."
  },
  {
    question: "How secure is our customer data with your system?",
    answer: "Data security is our primary architecture pillar. All pipelines use 256-bit encryption in transit and at rest. We utilize read-only tokens to sync behavioral schemas, conform to SOC2 guidelines, and never store, share, or monetize any of your brand's unique customer intelligence data."
  },
  {
    question: "What is your pricing and engagement model?",
    answer: "We charge a transparent, flat monthly engineering retainer based on the scale of your store and active customer models. We do not charge variable commissions or take percentage cuts of your store revenue, meaning 100% of the reclaimed churn revenue remains in your company's accounts."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="faq">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            Client Queries <span className="text-gradient-gold italic">Answered.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to know about integrating custom intelligence into your e-commerce organization.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-300 hover:border-primary/20"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-md md:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary/70 shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/20 transition-all shrink-0 ${isOpen ? "rotate-180 text-primary border-primary/20" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-muted text-sm md:text-md leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
