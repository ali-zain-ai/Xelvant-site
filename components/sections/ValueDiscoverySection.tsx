"use client";

import { motion } from "framer-motion";
import { DollarSign, Heart, BarChart2, Repeat, TrendingUp, AlertCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const discoveries = [
  {
    Icon: DollarSign,
    title: "Revenue Leaks",
    impact: "Where is money leaving your store unnoticed?",
    body: "We map every point where potential revenue disappears — cart abandonment patterns, pricing friction, underperforming SKUs silently dragging margins.",
  },
  {
    Icon: Heart,
    title: "Retention Problems",
    impact: "Why do customers buy once and vanish?",
    body: "We pinpoint exactly where the post-purchase experience breaks down and which retention levers will bring customers back reliably.",
  },
  {
    Icon: BarChart2,
    title: "Customer Segments",
    impact: "Who are your most and least valuable buyers?",
    body: "We identify your high-LTV customer profiles, what they have in common, and how to acquire more of them — while spending less on customers who don't return.",
  },
  {
    Icon: Repeat,
    title: "Repeat Purchase Opportunities",
    impact: "Which customers are ready to buy again — right now?",
    body: "Using purchase timing patterns, we surface which customers are in their natural repurchase window so you can reach them at exactly the right moment.",
  },
  {
    Icon: TrendingUp,
    title: "Profit Drivers",
    impact: "Which products actually build long-term profit?",
    body: "Some products look strong in revenue but attract low-LTV buyers. We show you which products truly drive retention, repeat purchases, and margin.",
  },
  {
    Icon: AlertCircle,
    title: "Churn Risks",
    impact: "Which customers are about to leave before they do?",
    body: "We identify behavioural exit signals up to 90 days before churn — giving you the window to intervene and retain customers before they're gone.",
  },
];

export default function ValueDiscoverySection() {
  return (
    <section id="value" className="py-24 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            What we uncover
          </div>

          <h2
            className="font-display leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Revenue Opportunities{" "}
            <span className="text-gradient-gold italic">Hidden Inside</span>
            <br />
            Your Store
          </h2>

          <p
            className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Most stores already have significant growth opportunities sitting inside their
            customer data. We help you uncover them — without spending more on ads.
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {discoveries.map((d, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}>
              <div
                className="card-premium h-full p-6 md:p-7 cursor-default"
                style={{ transition: "border-color 0.4s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(238,188,74,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Icon */}
                <div
                  className="grid place-items-center h-10 w-10 rounded-xl mb-5"
                  style={{
                    background: "rgba(238,188,74,0.1)",
                    boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                    color: "var(--primary)",
                  }}
                >
                  <d.Icon size={18} aria-hidden />
                </div>

                <h3
                  className="font-display leading-tight mb-2"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                  }}
                >
                  {d.title}
                </h3>

                {/* Impact question */}
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--primary)" }}
                >
                  {d.impact}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {d.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
