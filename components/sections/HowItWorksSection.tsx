"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Link2, Search, FileText, Rocket, ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const steps = [
  { Icon: Link2,    step: "01", title: "Connect Your Data",     desc: "We get read-only access to your platform. You don't need to do anything technical." },
  { Icon: Search,   step: "02", title: "We Analyze Everything",  desc: "We dig into your customers, revenue, and operations to find what's not working." },
  { Icon: FileText, step: "03", title: "Get Your Report",        desc: "You receive a clear breakdown of problems and exactly what to fix." },
  { Icon: Rocket,   step: "04", title: "Take Action",            desc: "A ranked list of changes — biggest revenue impact first." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header — left-aligned, badge pill, matching other sections */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            The Process
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Connect. Analyze. Report.{" "}
            <span className="text-gradient-gold italic">Grow.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            From connecting your data to getting a clear plan. The whole process takes 14 days.
          </p>
        </motion.div>

        {/* Steps — 2×2 grid, same card-premium style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp(0.05 * (i + 1))}>
              <div
                className="card-premium h-full p-6"
                style={{ transition: "border-color 0.4s" }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
                    style={{
                      background: "rgba(238,188,74,0.1)",
                      boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                      color: "var(--primary)",
                    }}
                  >
                    <s.Icon size={18} aria-hidden />
                  </div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Step {s.step}
                  </p>
                </div>
                <h3
                  className="font-display leading-tight mb-1.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div {...fadeUp(0.3)} className="mt-10">
          <div
            className="card-premium py-10 px-8 text-center"
            style={{
              borderColor: "rgba(238,188,74,0.15)",
              background: "rgba(238,188,74,0.03)",
            }}
          >
            <p
              className="font-display tracking-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: "clamp(18px, 3vw, 28px)",
                fontWeight: 700,
              }}
            >
               See what&apos;s holding your revenue back.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                boxShadow: "0 8px 32px -8px rgba(238,188,74,0.45)",
              }}
            >
              Get My Revenue Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
