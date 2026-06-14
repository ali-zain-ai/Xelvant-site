"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const reasons = [
  {
    title: "Revenue-first mindset",
    body: "Every recommendation we make is tied to a measurable revenue outcome — not marketing metrics or vanity numbers.",
  },
  {
    title: "Read-only data access",
    body: "We never touch your store settings, product listings, or customer records. View-only API access means zero risk to your operations.",
  },
  {
    title: "No long-term contracts",
    body: "Work with us month-to-month. We earn continued work by delivering results — not by locking you into a 12-month retainer.",
  },
  {
    title: "Actionable recommendations",
    body: "We don't hand you a 60-page report and disappear. Every finding comes with a specific action and a projected revenue impact.",
  },
  {
    title: "Shopify specialization",
    body: "We work exclusively with Shopify and DTC brands. Our benchmarks, patterns, and playbooks are built from 120+ stores in your space.",
  },
  {
    title: "Transparent process",
    body: "You know exactly what we're analyzing, when you'll receive it, and what it will cover — before we start.",
  },
];

const comparison = [
  { attribute: "Revenue-focused recommendations",  xelv: true,    agency: false  },
  { attribute: "Shopify specialization",            xelv: true,    agency: "rare" },
  { attribute: "Data-backed every finding",         xelv: true,    agency: false  },
  { attribute: "Read-only access (no risk)",        xelv: true,    agency: false  },
  { attribute: "No long-term contracts",            xelv: true,    agency: false  },
  { attribute: "14-day delivery",                   xelv: true,    agency: false  },
  { attribute: "Results in dollar terms",           xelv: true,    agency: "rare" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)  return <Check size={18} style={{ color: "var(--primary)" }} aria-label="Yes" />;
  if (value === false) return <X    size={16} style={{ color: "rgba(255,255,255,0.25)" }} aria-label="No" />;
  return <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Rarely</span>;
}

export default function WhyTrustSection() {
  return (
    <section id="why-xelv" className="py-24 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Why work with us
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Why Shopify Brands{" "}
            <span className="text-gradient-gold italic">Work With Xelv</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Reasons */}
          <motion.div {...fadeUp(0.08)} className="grid grid-cols-1 gap-4">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0"
              >
                <div
                  className="mt-0.5 grid place-items-center h-5 w-5 rounded-full shrink-0"
                  style={{ background: "rgba(238,188,74,0.15)" }}
                >
                  <Check size={12} style={{ color: "var(--primary)" }} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Comparison table */}
          <motion.div {...fadeUp(0.14)}>
            <div className="card-premium overflow-hidden">
              {/* Table header */}
              <div
                className="grid grid-cols-3 text-[10px] uppercase tracking-[0.18em] px-5 py-3 border-b border-white/5"
                style={{ background: "rgba(255,255,255,0.02)", color: "var(--muted-foreground)" }}
              >
                <span className="col-span-1">Attribute</span>
                <span className="text-center" style={{ color: "var(--primary)" }}>Xelv</span>
                <span className="text-center">Typical Agency</span>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center px-5 py-3.5 border-b border-white/5 last:border-0 text-sm"
                  style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}
                >
                  <span className="text-sm" style={{ color: "rgba(250,250,250,0.8)" }}>
                    {row.attribute}
                  </span>
                  <span className="flex justify-center">
                    <Cell value={row.xelv} />
                  </span>
                  <span className="flex justify-center">
                    <Cell value={row.agency} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
