"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck, FileX2, Store, DollarSign,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});



/* ── 3.3  Core values ── */
const values = [
  {
    title: "Revenue over vanity metrics",
    body: "Every agency loves impressions and click-through rates. We measure one thing: did this put more money in your account? If a recommendation does not move revenue, it does not make our report.",
  },
  {
    title: "Clarity over complexity",
    body: "Most analytics tools give you 50 dashboards and zero answers. We give you a short document that tells you what is broken, what to fix first, and what it will cost you if you do nothing.",
  },
  {
    title: "Partnership, not vendor",
    body: "We do not send invoices and disappear. We work alongside your team, explain every finding in plain language, and stay available until you are confident executing the plan on your own.",
  },
];

/* ── 3.4  Differentiators ── */
const differentiators = [
  {
    Icon: Store,
    title: "E-commerce only focus",
    body: "We do not serve SaaS companies, restaurants, or local businesses. Every benchmark, pattern, and playbook we use comes from real e-commerce stores doing $2M to $30M.",
  },
  {
    Icon: DollarSign,
    title: "Dollar-denominated findings",
    body: "We do not hand you a chart and say 'looks interesting.' Every finding in our audit shows the estimated dollar impact so you can prioritize by what moves the needle most.",
  },
  {
    Icon: ShieldCheck,
    title: "Read-only access, zero risk",
    body: "We connect through official read-only API tokens. We cannot change your settings, products, prices, or customer data. Your store runs exactly the same during the entire process.",
  },
  {
    Icon: FileX2,
    title: "No long-term contracts",
    body: "Work with us month-to-month. If the value is not obvious, you stop. We earn continued work by delivering results, not by trapping you in a 12-month retainer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ─── Hero ─── */}
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
                About Xelvant
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
              The people behind{" "}
              <span className="text-gradient-gold italic">your next growth lever</span>
            </motion.h1>
          </div>
        </section>

        {/* ─── 3.1  Origin Story ─── */}
        <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <h2
                className="font-display tracking-tight mb-8"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                Why we{" "}
                <span className="text-gradient-gold italic">built this</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              <p>
                We kept seeing the same pattern. Shopify and Amazon brands spending heavily on ads, hiring agencies for more traffic, and pouring money into tools they barely used. Meanwhile, the answers were already sitting inside their own data. Customers leaving without anyone noticing. Revenue leaking from abandoned carts, bad bundles, and mismatched pricing. Reports that took hours to build and still missed the point.
              </p>
              <p>
                We started Xelvant because we believed one simple thing: most e-commerce brands do not have a traffic problem. They have a visibility problem. They cannot see where money is going, why customers are not returning, or which products are quietly dragging down margins. We built this company to give founders that clarity, in plain language, with dollar signs attached to every finding.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.14)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { name: "Ali Zain", role: "Founder & Lead Strategist" },
                { name: "Abdul Rehman", role: "Data Science Lead" },
                { name: "Noman Niaz", role: "Operations & Automation" },
              ].map((m, i) => (
                <span key={i} className="text-sm" style={{ color: "rgba(250,250,250,0.75)" }}>
                  <span className="font-medium text-white">{m.name}</span>
                  <span className="mx-1.5" style={{ color: "var(--primary)" }}>/</span>
                  {m.role}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 3.3  Core Values ─── */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
              <h2
                className="font-display tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                What we{" "}
                <span className="text-gradient-gold italic">stand for</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div key={i} {...fadeUp(0.08 * (i + 1))}>
                  <div className="card-premium h-full p-6 md:p-8">
                    <div
                      className="h-1 w-10 rounded-full mb-6"
                      style={{ background: "var(--primary)" }}
                    />
                    <h3
                      className="font-display leading-tight mb-3"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(18px, 2vw, 24px)",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {v.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3.4  Differentiators ─── */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
              <h2
                className="font-display tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                What makes us{" "}
                <span className="text-gradient-gold italic">different</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => (
                <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
                  <div
                    className="card-premium h-full p-6 md:p-8"
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
                      <d.Icon size={20} aria-hidden />
                    </div>
                    <h3
                      className="font-display leading-tight mb-2"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(18px, 2vw, 24px)",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {d.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...fadeUp(0)}>
              <h2
                className="font-display tracking-tight mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(28px, 5vw, 56px)",
                }}
              >
                Ready to work with a team that{" "}
                <span className="text-gradient-gold italic">gets e-commerce</span>?
              </h2>
              <p className="text-base md:text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
                Free Revenue Audit. No obligation. No contracts.
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
                Book Your Free Audit
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
