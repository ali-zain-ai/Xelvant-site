"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UserX, Users, SearchX, FileBarChart, Map, Cog,
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

/* ── 2.2  Six service cards ── */
const services = [
  {
    Icon: UserX,
    title: "Churn Prediction",
    desc: "Spot exit signals before customers leave. Act early to retain revenue you already earned.",
    deliverables: [
      "At-risk customer list with churn probability scores",
      "Behavioral trigger map (what predicts churn in your business)",
      "Retention playbook with timing recommendations",
      "Monthly churn trend dashboard",
    ],
  },
  {
    Icon: Users,
    title: "Customer Segmentation",
    desc: "Group buyers by real behavior, not guesswork. Know who your best buyers are and what makes them different.",
    deliverables: [
      "RFM-based customer segments with dollar values",
      "High-LTV buyer profile and acquisition source breakdown",
      "Segment migration analysis (who's upgrading or downgrading)",
      "Targeted campaign recommendations per segment",
    ],
  },
  {
    Icon: SearchX,
    title: "Find Lost Revenue",
    desc: "Find where money quietly disappears. Prioritized by dollar impact so you fix the biggest leaks first.",
    deliverables: [
      "Full-funnel revenue leak audit with dollar estimates",
      "Cart abandonment pattern analysis",
      "Underperforming product identification",
      "Discount and promotion ROI breakdown",
    ],
  },
  {
    Icon: FileBarChart,
    title: "Automated Business Insights",
    desc: "Clear performance reports without manual work. See what matters without digging through spreadsheets.",
    deliverables: [
      "Custom daily/weekly KPI dashboard",
      "Automated email digest with key metrics",
      "Cohort retention tracking (auto-updated)",
      "Ad spend vs. revenue attribution report",
    ],
  },
  {
    Icon: Map,
    title: "Find Your Next Growth Move",
    desc: "Discover the highest-impact opportunities to grow revenue. Know exactly where your next dollar of profit is coming from.",
    deliverables: [
      "Ranked growth opportunity matrix with projected ROI",
      "Cross-sell and upsell opportunity identification",
      "Repeat purchase window analysis",
      "Underserved customer segment recommendations",
    ],
  },
  {
    Icon: Cog,
    title: "AI-Powered Automation",
    desc: "Replace repetitive tasks with intelligent workflows. Systems that run without you watching.",
    deliverables: [
      "Inventory reorder alert system",
      "Customer lifecycle email automation setup",
      "Return/refund pattern detection and alerts",
      "Custom workflow automations for your stack",
    ],
  },
];

/* ── 2.3  Platforms ── */
const platforms = [
  "Shopify", "Shopify Plus", "Amazon", "WooCommerce", "Klaviyo",
  "Meta Ads", "Google Ads", "Triple Whale", "Recharge",
];


export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ─── 2.1  Hero ─── */}
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
                Our Services
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
              We build the intelligence layer that shows you{" "}
              <span className="text-gradient-gold italic">where revenue is going</span>{" "}
              and why.
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              From churn prediction to automated reporting, every service is designed to turn your raw data into clear, revenue-focused action.
            </motion.p>
          </div>
        </section>

        {/* ─── 2.2  Service Cards (2-col grid) ─── */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
                  <div
                    className="card-premium h-full p-6 md:p-8 group cursor-default"
                    style={{ transition: "border-color 0.4s" }}
                  >
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="grid place-items-center h-11 w-11 rounded-xl shrink-0"
                        style={{
                          background: "rgba(238,188,74,0.1)",
                          boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                          color: "var(--primary)",
                        }}
                      >
                        <s.Icon size={20} aria-hidden />
                      </div>
                      <div>
                        <h3
                          className="font-display leading-tight"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                            fontSize: "clamp(20px, 2.5vw, 26px)",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed mt-1"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <ul className="space-y-2.5 ml-[60px]">
                      {s.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(250,250,250,0.75)" }}>
                          <span
                            className="mt-2 h-1 w-1 rounded-full shrink-0"
                            style={{ background: "var(--primary)" }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2.3  Platforms ─── */}
        <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div {...fadeUp(0)}>
              <h2
                className="font-display tracking-tight mb-10"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                Platforms We{" "}
                <span className="text-gradient-gold italic">Work With</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium"
                  style={{ background: "rgba(255,255,255,0.03)", color: "rgba(250,250,250,0.8)" }}
                >
                  {p}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 2.4  Premium CTA ─── */}
        <section className="py-24 md:py-32 px-5 sm:px-6 lg:px-10 border-t border-white/5 relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle at 50% 100%, rgba(238,188,74,0.05) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...fadeUp(0)}>
              <h2
                className="font-display tracking-tight mb-6"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: 1.05,
                }}
              >
                Ready to Grow Your{" "}
                <span className="text-gradient-gold italic">E-Commerce Business?</span>
              </h2>
              <p
                className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tell us about your business, and we&apos;ll show you where your biggest growth opportunities are.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  boxShadow: "0 10px 40px -10px rgba(238,188,74,0.4)",
                }}
              >
                Contact Us
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
