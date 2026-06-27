"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UserX, Users, SearchX, FileBarChart, Map, Cog, ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const services = [
  {
    Icon: UserX,
    title: "Stop Losing Customers",
    desc: "Know who's about to leave — and what to do to keep them.",
    hoverDetails: [
      "Problem: Customers quietly leave and never return.",
      "Solution: We identify churn signals in your purchase data.",
      "Outcome: Keep more buyers and increase lifetime value.",
    ],
  },
  {
    Icon: Users,
    title: "Know Your Best Buyers",
    desc: "See exactly which customers drive the most revenue and why.",
    hoverDetails: [
      "Problem: Treating all customers the same wastes marketing spend.",
      "Solution: We segment buyers by true behavior and value.",
      "Outcome: Higher ROI on ads and retention campaigns.",
    ],
  },
  {
    Icon: SearchX,
    title: "Find Lost Revenue",
    desc: "Find where money is quietly disappearing every month.",
    hoverDetails: [
      "Problem: Hidden leaks in pricing, carts, and subscriptions.",
      "Solution: We audit your operations to find missing margin.",
      "Outcome: Immediate cash recovered back to your bottom line.",
    ],
  },
  {
    Icon: FileBarChart,
    title: "Performance at a Glance",
    desc: "Get clear performance reports delivered — no spreadsheets needed.",
    hoverDetails: [
      "Problem: Wasting hours building messy, confusing reports.",
      "Solution: We set up automated, easy-to-read dashboards.",
      "Outcome: Make confident decisions faster with clear data.",
    ],
  },
  {
    Icon: Map,
    title: "Find Your Next Growth Move",
    desc: "We find the fastest way to increase your revenue.",
    hoverDetails: [
      "Problem: Unsure what to focus on next to drive growth.",
      "Solution: We analyze your data to find the highest-impact actions.",
      "Outcome: A prioritized roadmap to scale revenue predictably.",
    ],
  },
  {
    Icon: Cog,
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks so your team focuses on growth.",
    hoverDetails: [
      "Problem: Manual tasks slowing down your team and operations.",
      "Solution: We build intelligent workflows to automate the busywork.",
      "Outcome: More time for strategy and less human error.",
    ],
  },
];

export default function ServicesPreviewSection() {
  return (
    <section id="services" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            What we do
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
            Six Services. One Goal:{" "}
            <span className="text-gradient-gold italic">More Revenue.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Six ways we help e-commerce brands sell more, keep more customers, and stop losing money.
          </p>
        </motion.div>

        {/* 3×2 grid of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} {...fadeUp(0.05 * (i + 1))}>
              <Link href="/services" className="block h-full">
                <div
                  className="card-premium relative h-full p-6 group cursor-pointer overflow-hidden"
                  style={{ transition: "border-color 0.4s" }}
                >
                  {/* Default State */}
                  <div className="transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:opacity-0 group-hover:invisible">
                    <div
                      className="grid place-items-center h-10 w-10 rounded-xl mb-5"
                      style={{
                        background: "rgba(238,188,74,0.1)",
                        boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                        color: "var(--primary)",
                      }}
                    >
                      <s.Icon size={18} aria-hidden />
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

                  {/* Hover State */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible pointer-events-none">
                    <h3
                      className="font-display leading-tight mb-4"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(16px, 1.8vw, 20px)",
                        fontWeight: 700,
                      }}
                    >
                      {s.title}
                    </h3>
                    <ul className="space-y-2.5 text-[13px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {s.hoverDetails.map((detail, idx) => {
                        const [bold, ...rest] = detail.split(": ");
                        return (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
                            <span><strong className="text-white font-medium">{bold}:</strong> {rest.join(": ")}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all services button */}
        <motion.div {...fadeUp(0.35)} className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            View all services
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
