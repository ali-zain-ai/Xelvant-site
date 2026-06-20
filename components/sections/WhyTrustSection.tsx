"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileX2, Store, DollarSign } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const differentiators = [
  {
    Icon: ShieldCheck,
    title: "Read-only access",
    body: "We never touch your settings, products, or customer records. View-only API access means zero risk to your operations.",
  },
  {
    Icon: FileX2,
    title: "No long-term contracts",
    body: "Work with us month-to-month. We earn continued work by delivering results, not by locking you into a 12-month retainer.",
  },
  {
    Icon: Store,
    title: "E-commerce only",
    body: "We work exclusively with e-commerce brands. Our benchmarks, patterns, and playbooks are built from businesses in your space.",
  },
  {
    Icon: DollarSign,
    title: "Revenue-focused",
    body: "Every recommendation is tied to a measurable revenue outcome. No vanity metrics, no fluff. Just what moves the needle.",
  },
];

export default function WhyTrustSection() {
  return (
    <section id="why-xelv" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
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
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            Why Brands Choose{" "}
            <span className="text-gradient-gold italic">Xelvant</span>
          </h2>
        </motion.div>

        {/* 4-box grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {differentiators.map((item, i) => (
            <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
              <div
                className="card-premium h-full p-6 md:p-8 group cursor-default"
                style={{ transition: "border-color 0.4s" }}
              >
                <div
                  className="grid place-items-center h-11 w-11 rounded-xl mb-6"
                  style={{
                    background: "rgba(238,188,74,0.1)",
                    boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                    color: "var(--primary)",
                  }}
                >
                  <item.Icon size={20} aria-hidden />
                </div>

                <h3
                  className="font-display leading-tight mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
