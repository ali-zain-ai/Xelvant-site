"use client";

import { motion } from "framer-motion";
import { Link2, Search, FileText, Rocket } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const steps = [
  {
    number: "01",
    Icon: Link2,
    title: "Connect Your Shopify Data",
    desc: "Read-only secure access.",
    detail:
      "We connect to your Shopify store, email platform, and ad accounts using read-only API tokens. You grant access in minutes. We never touch your settings, products, or customer data beyond viewing.",
    duration: "Day 1–2",
  },
  {
    number: "02",
    Icon: Search,
    title: "Revenue Intelligence Analysis",
    desc: "Deep investigation into customer behavior and revenue patterns.",
    detail:
      "Our analysis covers purchase frequency, cohort retention, churn indicators, LTV distribution, product performance, and revenue leak points — all mapped to dollar impact.",
    duration: "Day 3–10",
  },
  {
    number: "03",
    Icon: FileText,
    title: "Audit Delivery",
    desc: "Receive findings and growth opportunities.",
    detail:
      "You receive a clear, plain-English presentation of everything we found — revenue leaks, retention patterns, growth opportunities — with supporting data for every finding.",
    duration: "Day 11–14",
  },
  {
    number: "04",
    Icon: Rocket,
    title: "Action Plan",
    desc: "Get clear recommendations prioritized by impact.",
    detail:
      "A short, ranked action plan: what to do first, what to do next, and the projected revenue impact of each action. No filler. No generic advice. Built for your specific store.",
    duration: "Day 14",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            The process
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            How It Works
          </h2>
          <p
            className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            From access to action plan in 14 days. No drawn-out onboarding.
            No months of waiting. Just a clear answer and a clear path forward.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(238,188,74,0.3), transparent)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <div className="relative">
                  {/* Step dot */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="relative z-10 grid place-items-center h-14 w-14 rounded-2xl shrink-0"
                      style={{
                        background: "rgba(238,188,74,0.1)",
                        boxShadow: "0 0 0 1px rgba(238,188,74,0.25)",
                        color: "var(--primary)",
                      }}
                    >
                      <s.Icon size={22} aria-hidden />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--primary)" }}>
                        Step {s.number}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                        {s.duration}
                      </p>
                    </div>
                  </div>

                  <h3
                    className="font-display leading-tight mb-2"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: "clamp(18px, 2vw, 22px)",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--primary)" }}
                  >
                    {s.desc}
                  </p>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {s.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline footer */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-14 rounded-2xl border border-white/5 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(238,188,74,0.04)" }}
        >
          <p className="text-sm text-center sm:text-left" style={{ color: "rgba(250,250,250,0.8)" }}>
            <span className="font-medium" style={{ color: "var(--primary)" }}>14 days</span>{" "}
            from kickoff to your first action plan. Most clients see their first data insights within{" "}
            <span className="font-medium" style={{ color: "var(--primary)" }}>72 hours</span>.
          </p>
          <div className="shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              Start in 14 days →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
