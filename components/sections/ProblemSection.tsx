"use client";

import { motion } from "framer-motion";
import { TrendingDown, Users, AlertTriangle, RefreshCcw, DollarSign } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const problems = [
  {
    Icon: RefreshCcw,
    title: "Customers Not Returning",
    stat: "67%",
    statLabel: "of first-time buyers never return",
    body:
      "You paid to acquire them. They bought once. Then disappeared. And your acquisition costs never got the chance to pay back.",
  },
  {
    Icon: TrendingDown,
    title: "Retention Silently Declining",
    stat: "3×",
    statLabel: "cheaper to retain than acquire",
    body:
      "While you're focused on new customers, your repeat purchase rate is quietly eroding — draining lifetime value you already earned.",
  },
  {
    Icon: DollarSign,
    title: "Revenue Leaking Every Month",
    stat: "$47k",
    statLabel: "average undetected monthly leak",
    body:
      "Abandoned carts, drop-off points, underperforming bundles — these micro-losses add up to a significant number you'll never see in a standard dashboard.",
  },
  {
    Icon: AlertTriangle,
    title: "Churn Risks Going Unnoticed",
    stat: "90 days",
    statLabel: "before most brands notice",
    body:
      "Your highest-value customers are showing exit signals weeks before they leave. By the time it shows in revenue, it's already too late to win them back cheaply.",
  },
  {
    Icon: Users,
    title: "Missed Repeat Purchases",
    stat: "2.8×",
    statLabel: "higher LTV with one more purchase",
    body:
      "Getting a customer to buy twice is the single highest-leverage growth action — yet most brands have no system to make it happen consistently.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            The silent growth problem
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 64px)",
            }}
          >
            Most Shopify Brands Don&apos;t Have
            <br />
            <span className="text-gradient-gold italic">A Traffic Problem</span>
          </h2>

          <p
            className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Many brands spend thousands acquiring customers while silently losing revenue from
            the ones they already have. Growth slows because customer behavior patterns
            remain hidden inside data no one has time to dig through.
          </p>
        </motion.div>

        {/* Cards — 2 col + 2 col + 1 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className={i === 4 ? "md:col-span-2 md:max-w-lg md:mx-auto w-full" : ""}
            >
              <div
                className="card-premium h-full p-6 md:p-7 group cursor-default"
                style={{ transition: "border-color 0.4s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(238,188,74,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
                    style={{
                      background: "rgba(238,188,74,0.1)",
                      boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                      color: "var(--primary)",
                    }}
                  >
                    <p.Icon size={18} aria-hidden />
                  </div>
                  {/* Stat pill */}
                  <div className="text-right">
                    <p
                      className="font-display text-2xl leading-none"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "var(--primary)" }}
                    >
                      {p.stat}
                    </p>
                    <p className="text-[10px] mt-0.5 uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>
                      {p.statLabel}
                    </p>
                  </div>
                </div>

                <h3
                  className="font-display leading-tight mb-3"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
