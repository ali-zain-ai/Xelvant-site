"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Clock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-20 md:py-36 px-5 sm:px-6 lg:px-10 border-t border-white/5 overflow-hidden"
    >
      {/* Gold ambient glow — heavily feathered so it dissolves into the black */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(238,188,74,0.07) 0%, rgba(238,188,74,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">

        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em]"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
            Revenue Audit. No Obligation
          </div>
        </motion.div>

        <motion.h2
          {...fadeUp(0.06)}
          className="font-display tracking-tight"
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "clamp(28px, 6vw, 72px)",
            lineHeight: 1.02,
          }}
        >
          Your Next Growth Opportunity Might Already Be{" "}
          <span className="text-gradient-gold italic">Hidden In Your Data</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.12)}
          className="mt-7 text-base md:text-lg mx-auto max-w-2xl leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          Get a revenue audit and uncover the highest-impact opportunities
          inside your business before your competitors find them first.
        </motion.p>

        <motion.div {...fadeUp(0.18)}>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold transition"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              boxShadow: "0 12px 40px -10px rgba(238,188,74,0.55)",
            }}
          >
            Get My Revenue Audit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </motion.div>

        {/* Supporting guarantees */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { Icon: Lock,         text: "Read-only access" },
            { Icon: ShieldCheck,  text: "No obligation" },
            { Icon: Clock,        text: "Fast turnaround" },
          ].map(({ Icon, text }, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs md:text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Icon size={14} style={{ color: "var(--primary)" }} aria-hidden />
              {text}
            </span>
          ))}
        </motion.div>

        {/* Capacity note */}
        <motion.p
          {...fadeUp(0.30)}
          className="mt-8 text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          We take on a limited number of new audits each month. Replies within 24 hours.
        </motion.p>

      </div>
    </section>
  );
}
