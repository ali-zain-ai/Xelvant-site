"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const testimonials = [
  {
    quote:
      "We uncovered three major revenue leaks that increased our repeat purchase rate by 14% in 60 days. We had no idea this money was sitting there.",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "Wildcraft Botanicals",
    result: "+14% repeat purchases in 60 days",
  },
  {
    quote:
      "The audit showed us that 41% of our highest-spend customers were churning after their second order because of a product sequence issue. Fixing it added $22k/month to our revenue.",
    name: "James Okafor",
    role: "Head of E-commerce",
    company: "Forme Nutrition",
    result: "+$22k/month from one fix",
  },
  {
    quote:
      "I was skeptical, but within two weeks I had a complete picture of where our revenue was leaking and exactly what to do about it. The ROI on the audit paid for itself in the first month.",
    name: "Priya Sharma",
    role: "Co-Founder",
    company: "Clarity Skincare",
    result: "Audit ROI recovered in month one",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Client results
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            What Brands Say After{" "}
            <span className="text-gradient-gold italic">Their Audit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <div
                className="card-premium h-full p-7 flex flex-col"
                style={{
                  boxShadow: i === 1 ? "0 0 0 1px rgba(238,188,74,0.2)" : undefined,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "var(--primary)", fontSize: "14px" }}>★</span>
                  ))}
                </div>

                {/* Result pill */}
                <div
                  className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium mb-5"
                  style={{
                    background: "rgba(238,188,74,0.1)",
                    border: "1px solid rgba(238,188,74,0.2)",
                    color: "var(--primary)",
                  }}
                >
                  {t.result}
                </div>

                {/* Quote */}
                <blockquote
                  className="font-display leading-snug flex-1 mb-7"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(16px, 2vw, 19px)",
                    color: "rgba(250,250,250,0.9)",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  {/* Avatar initials */}
                  <div
                    className="grid place-items-center h-9 w-9 rounded-full text-xs font-semibold shrink-0"
                    style={{
                      background: "rgba(238,188,74,0.15)",
                      color: "var(--primary)",
                    }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
