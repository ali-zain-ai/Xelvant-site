"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const findings = [
  "37% of customers never made a second purchase",
  "Email automations were underperforming by 4× versus benchmark",
  "A best-selling product was attracting low-LTV buyers who never returned",
];

const actions = [
  "Retention sequence targeting customers at their natural repurchase window",
  "Lifecycle email optimization with behavior-based triggers",
  "Product-level customer journey fixes to attract higher-LTV buyers",
];

const results = [
  { metric: "18%", label: "Increase in repeat purchases" },
  { metric: "11%", label: "Increase in customer lifetime value" },
  { metric: "90 days", label: "Time to results" },
];

export default function CaseStudySection() {
  return (
    <section id="results" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Proof of work
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            What We Found For{" "}
            <span className="text-gradient-gold italic">One E-Commerce Brand</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">

          {/* Left: story */}
          <motion.div {...fadeUp(0.08)} className="lg:col-span-3 space-y-4">

            {/* Challenge */}
            <div className="card-premium p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] mb-4" style={{ color: "var(--muted-foreground)" }}>
                The challenge
              </p>
              <p
                className="font-display leading-snug"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                }}
              >
                Growth had stalled despite increasing ad spend. The owner knew something was wrong but couldn&apos;t identify where.
              </p>
            </div>

            {/* Findings */}
            <div className="card-premium p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "var(--primary)" }}>
                What we found
              </p>
              <ul className="space-y-3">
                {findings.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "var(--primary)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="card-premium p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "var(--muted-foreground)" }}>
                What we recommended
              </p>
              <ul className="space-y-3">
                {actions.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: "var(--muted-foreground)" }}>
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "rgba(238,188,74,0.5)" }}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

          {/* Right: results */}
          <motion.div {...fadeUp(0.16)} className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">

            {results.map((r, i) => (
              <div
                key={i}
                className="card-premium p-4 md:p-7 flex flex-col items-center justify-center text-center"
                style={{ boxShadow: i === 0 ? "0 0 0 1px rgba(238,188,74,0.2)" : undefined }}
              >
                <p
                  className="font-display leading-none mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "clamp(28px, 5vw, 60px)",
                    color: "var(--primary)",
                  }}
                >
                  {r.metric}
                </p>
                <p className="text-sm md:text-base" style={{ color: "rgba(250,250,250,0.8)" }}>
                  {r.label}
                </p>
              </div>
            ))}

            {/* Footer note */}
            <div
              className="rounded-2xl border border-white/5 p-5 text-center"
              style={{ background: "rgba(238,188,74,0.04)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Results are from a real client engagement.
                Individual results vary based on store size, category, and data quality.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
