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
    desc: "Identify customers showing exit signals before they leave. Act early to retain revenue you already earned.",
    deliverables: [
      "At-risk customer list with churn probability scores",
      "Behavioral trigger map (what predicts churn in your store)",
      "Retention playbook with timing recommendations",
      "Monthly churn trend dashboard",
    ],
  },
  {
    Icon: Users,
    title: "Customer Segmentation",
    desc: "Group your customers by real behavior, not demographics. Know who your best buyers are and what makes them different.",
    deliverables: [
      "RFM-based customer segments with dollar values",
      "High-LTV buyer profile and acquisition source breakdown",
      "Segment migration analysis (who's upgrading or downgrading)",
      "Targeted campaign recommendations per segment",
    ],
  },
  {
    Icon: SearchX,
    title: "Revenue Leak Detection",
    desc: "Find every point in your funnel where money quietly disappears. Prioritized by dollar impact so you fix the biggest leaks first.",
    deliverables: [
      "Full-funnel revenue leak audit with dollar estimates",
      "Cart abandonment pattern analysis",
      "Underperforming product identification",
      "Discount and promotion ROI breakdown",
    ],
  },
  {
    Icon: FileBarChart,
    title: "Automated Reporting",
    desc: "Replace hours of spreadsheet work with automated dashboards that update daily. See what matters without digging.",
    deliverables: [
      "Custom daily/weekly KPI dashboard",
      "Automated email digest with key metrics",
      "Cohort retention tracking (auto-updated)",
      "Ad spend vs. revenue attribution report",
    ],
  },
  {
    Icon: Map,
    title: "Growth Opportunity Mapping",
    desc: "Surface the highest-impact growth levers hiding in your data. Know exactly where your next dollar of profit is coming from.",
    deliverables: [
      "Ranked growth opportunity matrix with projected ROI",
      "Cross-sell and upsell opportunity identification",
      "Repeat purchase window analysis",
      "Underserved customer segment recommendations",
    ],
  },
  {
    Icon: Cog,
    title: "Operational Automation",
    desc: "Automate the repetitive operational tasks that drain your team's time. Systems that run without you watching.",
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
  "Shopify", "Shopify Plus", "Amazon", "Klaviyo",
  "Meta Ads", "Google Ads", "Triple Whale", "Recharge",
];

/* ── 2.4  Engagement options ── */
const engagements = [
  {
    label: "Free Audit",
    type: "One-time",
    scope: [
      "Revenue leak analysis",
      "Customer retention snapshot",
      "Growth opportunity map",
      "Prioritized action plan",
    ],
    cta: "Book Free Audit",
    href: "/contact",
    featured: true,
  },
  {
    label: "Monthly Retainer",
    type: "Ongoing intelligence",
    scope: [
      "Continuous data monitoring",
      "Monthly insight reports",
      "Priority Slack/email support",
      "Strategy calls twice a month",
    ],
    cta: "Get a Quote",
    href: "/contact",
    featured: false,
  },
  {
    label: "Project-Based",
    type: "Custom build",
    scope: [
      "Scoped to your specific challenge",
      "Custom dashboards and automations",
      "Full documentation and handoff",
      "Defined timeline and deliverables",
    ],
    cta: "Get a Quote",
    href: "/contact",
    featured: false,
  },
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

        {/* ─── 2.4  Engagement Options ─── */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-10 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <h2
                className="font-display tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: "clamp(24px, 4vw, 44px)",
                }}
              >
                How to{" "}
                <span className="text-gradient-gold italic">Work With Us</span>
              </h2>
              <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
                Pick the engagement that fits your stage. Start with a free audit, or go straight to ongoing intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {engagements.map((e, i) => (
                <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
                  <div
                    className="card-premium h-full p-6 md:p-8 flex flex-col"
                    style={{
                      borderColor: e.featured ? "rgba(238,188,74,0.3)" : undefined,
                      boxShadow: e.featured ? "0 0 30px -10px rgba(238,188,74,0.15)" : undefined,
                    }}
                  >
                    {/* Type badge */}
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] mb-4"
                      style={{ color: e.featured ? "var(--primary)" : "var(--muted-foreground)" }}
                    >
                      {e.type}
                    </p>

                    <h3
                      className="font-display leading-tight mb-5"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                      }}
                    >
                      {e.label}
                    </h3>

                    {/* Scope list */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {e.scope.map((s, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(250,250,250,0.75)" }}>
                          <span
                            className="mt-2 h-1 w-1 rounded-full shrink-0"
                            style={{ background: "var(--primary)" }}
                          />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={e.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                      style={{
                        background: e.featured ? "var(--primary)" : "rgba(255,255,255,0.06)",
                        color: e.featured ? "var(--primary-foreground)" : "rgba(250,250,250,0.9)",
                        border: e.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {e.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2.5  Bottom CTA ─── */}
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
                Ready to find the{" "}
                <span className="text-gradient-gold italic">hidden revenue</span>?
              </h2>
              <p className="text-base md:text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
                Free Revenue Audit. 14-day delivery. No obligation.
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
