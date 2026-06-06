"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do I need a data team or technical staff to work with you?",
    answer: "Not at all. We act as your entire data and engineering team. You just need to grant us access to your existing platforms, and we handle the pipeline architecture, machine learning models, and deployment end-to-end.",
  },
  {
    question: "Do we have to change any of our existing tools like Shopify or Klaviyo?",
    answer: "No. Xelvant acts as an intelligence overlay, not a replacement. We connect directly to your existing platforms (Shopify Plus, Klaviyo, Meta, Salesforce, etc.) via secure API channels, compute predictive behaviors in our models, and pipe the actionable intelligence back into your current tools dynamically.",
  },
  {
    question: "How long before we see actual results from the model?",
    answer: "Our standard integration lifecycle takes 2 to 4 weeks. Week 1 is dedicated to data stack auditing and secure pipeline mapping. Week 2-3 involves training the machine learning models on your custom datasets. Week 4 focuses on deploying live trigger systems and syncing them with Klaviyo/Meta Ads, at which point you will start seeing actionable insights.",
  },
  {
    question: "What data do you need from us to get started?",
    answer: "We primarily need access to your transactional data, customer behavior logs, and marketing platforms (e.g. Shopify, Klaviyo, Meta). We utilize read-only tokens to sync behavioral schemas, conform to SOC2 guidelines, and never store, share, or monetize any of your brand's unique customer intelligence data.",
  },
  {
    question: "How is this different from just using a Shopify analytics app?",
    answer: "Standard SaaS apps use generic rules and statistical averages that apply to everyone. Xelvant builds custom machine learning models trained exclusively on your brand's historical customer journeys. This allows us to predict behaviors (like exit intent or churn) with high precision, tailored specifically to your audience vertical.",
  },
  {
    question: "What happens after the model is built — do you disappear or stay involved?",
    answer: "We stay fully involved. We charge a flat monthly engineering retainer based on the scale of your active customer models. This ensures your models are continuously monitored, retrained with new data, and optimized for performance. We act as your ongoing operational intelligence partner.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="faq">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            Client Queries <span className="text-gradient-gold italic">Answered.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to know about integrating custom intelligence into your e-commerce organization.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-500 hover:border-primary/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-md md:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary/70 shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 ${
                      isOpen ? "text-primary border-primary/20" : "text-white/50"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-muted text-sm md:text-md leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
