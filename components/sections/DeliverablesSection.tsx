"use client";

import { motion } from "framer-motion";
import { FileSearch, UserCheck, Map, ListOrdered } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const deliverables = [
  {
    Icon: FileSearch,
    number: "01",
    title: "Revenue Leak Report",
    desc: "See exactly where revenue is being lost.",
    detail:
      "A clear, visual breakdown of every point in your customer journey where money is leaking, with estimated monthly impact in dollars so you can prioritize by size of the opportunity.",
  },
  {
    Icon: UserCheck,
    number: "02",
    title: "Customer Retention Analysis",
    desc: "Understand why customers stop buying.",
    detail:
      "A deep look at your repeat purchase patterns, cohort drop-off rates, and the specific behavioral signals that predict whether a customer will buy again or disappear.",
  },
  {
    Icon: Map,
    number: "03",
    title: "Growth Opportunity Map",
    desc: "Discover the highest-impact growth opportunities.",
    detail:
      "A ranked list of specific, data-backed opportunities to grow revenue without increasing ad spend, from repeat purchase triggers to underserved customer segments.",
  },
  {
    Icon: ListOrdered,
    number: "04",
    title: "Prioritized Action Plan",
    desc: "Know what to fix first for maximum ROI.",
    detail:
      "Not a list of 40 suggestions. A short, ranked action plan showing exactly what to do first, what to do next, and the expected revenue impact of each step.",
  },
];

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            What you receive
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            Here&apos;s What You&apos;ll{" "}
            <span className="text-gradient-gold italic">Walk Away With</span>
          </h2>

          <p
            className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            This is not a sales call. You leave with four tangible, revenue-focused
            documents built specifically for your store. Yours to keep regardless of
            whether you continue working with us.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map((d, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}>
              <div
                className="card-premium h-full p-5 md:p-8 cursor-default"
                style={{ transition: "border-color 0.4s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(238,188,74,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-7">
                  <div
                    className="grid place-items-center h-11 w-11 rounded-xl"
                    style={{
                      background: "rgba(238,188,74,0.1)",
                      boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                      color: "var(--primary)",
                    }}
                  >
                    <d.Icon size={20} aria-hidden />
                  </div>
                  <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {d.number}
                  </span>
                </div>

                <h3
                  className="font-display leading-tight mb-1"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                  }}
                >
                  {d.title}
                </h3>

                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "var(--primary)" }}
                >
                  {d.desc}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {d.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
