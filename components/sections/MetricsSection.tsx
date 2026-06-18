"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { value: "$84M+",         label: "Extra revenue surfaced for clients" },
  { value: "120+",          label: "Shopify & DTC brands analyzed" },
  { value: "14 days",       label: "From kickoff to your first action plan" },
  { value: "Month-to-month", label: "No long-term lock-in" },
];

export default function MetricsSection() {
  return (
    <section className="border-y border-white/5 py-10" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            className="text-center md:px-6"
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <p
              className="text-gradient-gold leading-none"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
              }}
            >
              {m.value}
            </p>
            <p
              className="mt-3 text-xs md:text-sm leading-snug"
              style={{ color: "var(--muted-foreground)" }}
            >
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
