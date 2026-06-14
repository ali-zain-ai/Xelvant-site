"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const trustItems = [
  "$84M+ Revenue Opportunities Found",
  "120+ Shopify Brands Analyzed",
  "$400M+ Revenue Reviewed",
  "No Long-Term Contracts",
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-5 sm:px-6 lg:px-10" id="top">
      {/* Grid fade mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />

      {/* Gold ambient glow */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "600px",
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(238,188,74,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl text-center">

        {/* Badge */}
        <FadeUp delay={0} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em]"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
            Revenue Intelligence for Shopify &amp; DTC Brands
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.06}>
          <h1
            className="font-display tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 6.5vw, 80px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Discover Exactly What&apos;s
            <br />
            <span className="text-gradient-gold italic">Stopping Your Store</span>
            <br />
            From Growing
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.12}>
          <p
            className="mx-auto mt-7 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            We analyze your customer and revenue data to uncover hidden growth
            opportunities, revenue leaks, and profit-draining issues. Then we
            give you a clear action plan to fix them.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.18}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 10px 40px -10px rgba(238,188,74,0.5)",
              }}
            >
              Get My Free Revenue Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium hover:bg-white/5 transition"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              See how it works
            </Link>
          </div>
        </FadeUp>

        {/* Trust bar */}
        <FadeUp delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustItems.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-xs md:text-sm"
                style={{ color: "rgba(250,250,250,0.7)" }}
              >
                <CheckCircle size={14} style={{ color: "var(--primary)" }} aria-hidden />
                {item}
              </span>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
