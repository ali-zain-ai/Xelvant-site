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
  { Icon: UserX,        title: "Churn Prediction",           desc: "Spot exit signals before customers leave." },
  { Icon: Users,        title: "Customer Segmentation",      desc: "Group buyers by real behavior, not guesswork." },
  { Icon: SearchX,      title: "Revenue Leak Detection",     desc: "Find where money quietly disappears." },
  { Icon: FileBarChart, title: "Automated Reporting",        desc: "Daily dashboards that replace spreadsheet hours." },
  { Icon: Map,          title: "Growth Opportunity Mapping",  desc: "Surface your highest-impact growth levers." },
  { Icon: Cog,          title: "Operational Automation",     desc: "Systems that run without you watching." },
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
            Built for <span className="text-gradient-gold italic">Revenue Intelligence</span>
          </h2>
          <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Six core services designed to turn your raw store data into clear, revenue-focused decisions.
          </p>
        </motion.div>

        {/* 3×2 grid of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} {...fadeUp(0.05 * (i + 1))}>
              <Link href="/services" className="block h-full">
                <div
                  className="card-premium h-full p-6 group cursor-pointer"
                  style={{ transition: "border-color 0.4s" }}
                >
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
