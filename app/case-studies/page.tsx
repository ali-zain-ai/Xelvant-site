"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Link2, Search, FileText, Rocket, ArrowRight,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

/* ── Case Studies ── */
const caseStudies = [
  {
    tag: "Health & Wellness · E-Commerce",
    problem: "Growth had stalled despite increasing ad spend. Repeat purchase rate was declining and the founder could not identify why.",
    found: [
      "37% of first-time buyers never made a second purchase",
      "Email automations were underperforming by 4x versus industry benchmark",
      "Their best-selling product was attracting low-LTV buyers who never returned",
    ],
    recommended: "Retention sequence targeting customers at their natural repurchase window, lifecycle email optimization with behavior-based triggers, and product-level journey fixes to attract higher-LTV buyers.",
    metrics: [
      { value: "+18%", label: "Repeat purchases" },
      { value: "$31K", label: "Monthly leak closed" },
      { value: "90 days", label: "Time to results" },
    ],
  },
  {
    tag: "Fashion & Apparel · DTC Brand",
    problem: "Customer acquisition costs kept rising while revenue stayed flat. The brand had no visibility into which products drove long-term value.",
    found: [
      "Top 3 SKUs by volume were generating the lowest LTV customers",
      "Cart abandonment rate was 22% above category average",
      "Discount-driven buyers had a 73% single-purchase rate",
    ],
    recommended: "Product-level LTV analysis feeding into ad targeting, cart recovery sequence redesign with urgency-based timing, and a loyalty program targeting high-intent repeat buyers.",
    metrics: [
      { value: "+24%", label: "Customer LTV" },
      { value: "$19K", label: "Monthly revenue recovered" },
      { value: "60 days", label: "Time to first results" },
    ],
  },
  {
    tag: "Home & Kitchen · Multi-Channel",
    problem: "Strong Amazon sales but almost zero repeat purchases. DTC channel was underperforming with no clear diagnosis of why.",
    found: [
      "Amazon-to-DTC migration rate was under 2%",
      "Post-purchase email open rates were 11% (benchmark: 35%+)",
      "Bundling strategy was cannibalizing higher-margin individual SKUs",
    ],
    recommended: "Cross-channel customer journey mapping, post-purchase sequence rebuild with product education content, and bundle restructuring based on margin-per-unit analysis.",
    metrics: [
      { value: "+41%", label: "DTC repeat rate" },
      { value: "$27K", label: "Monthly margin improvement" },
      { value: "75 days", label: "Time to measurable impact" },
    ],
  },
];

/* ── Process Steps ── */
const processSteps = [
  { Icon: Link2, step: "01", title: "Connect Data", duration: "Day 1-2" },
  { Icon: Search, step: "02", title: "Analyze", duration: "Day 3-10" },
  { Icon: FileText, step: "03", title: "Deliver Findings", duration: "Day 11-14" },
  { Icon: Rocket, step: "04", title: "Action Plan", duration: "Day 14" },
];

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ─── 4.1  Hero / Intro ─── */}
        <section className="relative pt-32 pb-16 px-5 sm:px-6 lg:px-10">
          <div
            className="absolute inset-x-0 top-0 pointer-events-none -z-10"
            style={{
              height: "600px",
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(238,188,74,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-4xl text-center">
            <motion.div {...fadeUp(0)}>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
                style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                Case Studies
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="font-display tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: "clamp(32px, 5.5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              Real analyses,{" "}
              <span className="text-gradient-gold italic">real results</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              These are demonstration analyses built on real e-commerce data benchmarks. Every finding, metric, and recommendation follows the exact methodology we use with live client stores.
            </motion.p>
          </div>
        </section>

        {/* ─── 4.2 + 4.3  Case Study Cards ─── */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl space-y-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} {...fadeUp(0.08 * (i + 1))}>
                <div className="card-premium overflow-hidden">
                  {/* Metrics strip */}
                  <div
                    className="grid grid-cols-3 border-b border-white/5"
                    style={{ background: "rgba(238,188,74,0.04)" }}
                  >
                    {cs.metrics.map((m, j) => (
                      <div
                        key={j}
                        className="py-5 px-6 text-center"
                        style={{ borderRight: j < 2 ? "1px solid rgba(255,255,255,0.05)" : undefined }}
                      >
                        <p
                          className="font-display leading-none mb-1"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                            fontSize: "clamp(24px, 4vw, 40px)",
                            color: "var(--primary)",
                          }}
                        >
                          {m.value}
                        </p>
                        <p className="text-xs md:text-sm" style={{ color: "rgba(250,250,250,0.7)" }}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-8">
                    {/* Tag */}
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] mb-5"
                      style={{ color: "var(--primary)" }}
                    >
                      {cs.tag}
                    </p>

                    {/* Problem */}
                    <h3
                      className="font-display leading-snug mb-6"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 26px)",
                      }}
                    >
                      {cs.problem}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* What we found */}
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-[0.22em] mb-4"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          What we found
                        </p>
                        <ul className="space-y-2.5">
                          {cs.found.map((f, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(250,250,250,0.8)" }}>
                              <span
                                className="mt-2 h-1 w-1 rounded-full shrink-0"
                                style={{ background: "var(--primary)" }}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What we recommended */}
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-[0.22em] mb-4"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          What we recommended
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(250,250,250,0.7)" }}>
                          {cs.recommended}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ─── 4.5  "Your store could be next" CTA card ─── */}
            <motion.div {...fadeUp(0.35)}>
              <div
                className="card-premium overflow-hidden text-center py-14 px-8"
                style={{
                  borderColor: "rgba(238,188,74,0.25)",
                  background: "rgba(238,188,74,0.03)",
                }}
              >
                <h3
                  className="font-display tracking-tight mb-3"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "clamp(24px, 4vw, 40px)",
                  }}
                >
                  Your business could be{" "}
                  <span className="text-gradient-gold italic">next</span>
                </h3>
                <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
                  We will analyze your data and show you exactly where revenue is hiding. No obligation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition hover:opacity-90"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    boxShadow: "0 10px 40px -10px rgba(238,188,74,0.5)",
                  }}
                >
                  Book Your Audit
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 4.4  Process Strip ─── */}
        <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp(0)} className="text-center mb-12">
              <h2
                className="font-display tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                How would this work{" "}
                <span className="text-gradient-gold italic">for you</span>?
              </h2>
            </motion.div>

            <div className="relative">
              <div
                className="hidden lg:block absolute top-7 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(238,188,74,0.3), transparent)" }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {processSteps.map((s, i) => (
                  <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
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
                          <p
                            className="font-mono text-[10px] uppercase tracking-widest"
                            style={{ color: "var(--primary)" }}
                          >
                            Step {s.step}
                          </p>
                          <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                            {s.duration}
                          </p>
                        </div>
                      </div>
                      <h3
                        className="font-display leading-tight"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                          fontSize: "clamp(18px, 2vw, 22px)",
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
