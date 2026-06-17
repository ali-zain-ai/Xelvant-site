"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "What data access is required?",
    a: "We need read-only API access to your Shopify store (orders, customers, products), your email platform (Klaviyo, Mailchimp, etc.), and optionally your ad accounts. Setup takes under 30 minutes on your end. We never modify, export, or share your data.",
  },
  {
    q: "How secure is the process?",
    a: "All connections use official read-only API tokens. We have zero ability to change any settings, orders, or customer records. Your data is used solely to perform the analysis and is never stored beyond the engagement or shared with third parties.",
  },
  {
    q: "How long does the audit take?",
    a: "From access to delivery is 14 days. Day 1–2 is connection setup. Day 3–10 is deep analysis. Day 11–14 is audit writing and delivery. Most clients see their first data findings within 72 hours of access.",
  },
  {
    q: "Who is this designed for?",
    a: "Shopify and DTC brands doing between $2M and $30M per year with at least 12 months of customer data. If you're earlier-stage, the audit may not surface enough patterns to be actionable. We'll let you know on a call if it's not the right fit.",
  },
  {
    q: "Do you implement the recommendations?",
    a: "The audit itself focuses on analysis and the action plan. Implementation support is available as an ongoing engagement for clients who want us to work alongside their team. We can discuss scope after your audit delivery.",
  },
  {
    q: "What happens after the audit?",
    a: "You receive your four deliverables and a 60-minute walkthrough call. You're free to implement independently. The documents are yours to keep. Ongoing support is optional, not required.",
  },
  {
    q: "What does an engagement typically cost?",
    a: "The revenue audit is free. If you continue with an ongoing engagement (monthly analysis, forecasting, and strategy), pricing starts at $3,500/month with no long-term commitment. We'll discuss what's right for your stage after the audit.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (i: number) => setActiveIndex((p) => (p === i ? null : i));

  return (
    <section id="faq" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Common questions
          </div>

          <h2
            className="font-display tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 60px)",
              lineHeight: 1.02,
            }}
          >
            Frequently Asked{" "}
            <span className="text-gradient-gold italic">Questions</span>
          </h2>

          <p
            className="mt-5 text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Answers to the questions we hear most often before a brand books their audit.
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {FAQS.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                className="border-b border-white/5"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span
                    className="font-display text-base md:text-lg leading-snug"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      color: isOpen ? "var(--foreground)" : "rgba(250,250,250,0.8)",
                      transition: "color 0.3s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 grid place-items-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? "rgba(238,188,74,0.4)" : "rgba(255,255,255,0.12)"}`,
                      background: isOpen ? "rgba(238,188,74,0.08)" : "transparent",
                      color: isOpen ? "var(--primary)" : "rgba(255,255,255,0.4)",
                      transition: "all 0.3s",
                    }}
                  >
                    <Plus size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6 max-w-3xl"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {faq.a}
                      </p>
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
