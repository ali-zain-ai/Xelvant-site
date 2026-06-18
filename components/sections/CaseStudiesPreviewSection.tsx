"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const highlights = [
  {
    tag: "Health & Wellness · Shopify Plus",
    problem: "Growth stalled despite increasing ad spend.",
    metrics: [
      { value: "+18%", label: "Repeat purchases" },
      { value: "$31K", label: "Leak closed/mo" },
    ],
  },
  {
    tag: "Fashion & Apparel · Shopify",
    problem: "Rising acquisition costs with flat revenue.",
    metrics: [
      { value: "+24%", label: "Customer LTV" },
      { value: "$19K", label: "Revenue recovered/mo" },
    ],
  },
  {
    tag: "Home & Kitchen · Amazon + Shopify",
    problem: "Strong Amazon sales, zero DTC repeat purchases.",
    metrics: [
      { value: "+41%", label: "DTC repeat rate" },
      { value: "$27K", label: "Margin improvement/mo" },
    ],
  },
];

export default function CaseStudiesPreviewSection() {
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
            Results from{" "}
            <span className="text-gradient-gold italic">real analyses</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
              <Link href="/case-studies" className="block h-full">
                <div
                  className="card-premium h-full p-6 group cursor-pointer"
                  style={{ transition: "border-color 0.4s" }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] mb-4"
                    style={{ color: "var(--primary)" }}
                  >
                    {h.tag}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {h.problem}
                  </p>
                  <div className="flex gap-5">
                    {h.metrics.map((m, j) => (
                      <div key={j}>
                        <p
                          className="font-display leading-none mb-0.5"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                            fontSize: "clamp(22px, 3vw, 32px)",
                            color: "var(--primary)",
                          }}
                        >
                          {m.value}
                        </p>
                        <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            View all case studies
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
