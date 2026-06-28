"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, UserX, Users, SearchX, FileBarChart, Map, Cog } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const services = [
  {
    Icon: UserX,
    title: "Stop Losing Customers",
    desc: "Know who's about to leave and what to do to keep them.",
    deliverables: [
      "Identify high-risk segments",
      "Win-back email sequences",
      "Churn prevention strategy"
    ]
  },
  {
    Icon: Users,
    title: "Know Your Best Buyers",
    desc: "See exactly which customers drive the most revenue and why.",
    deliverables: [
      "VIP customer identification",
      "Customer lifetime value modeling",
      "Lookalike audience profiles"
    ]
  },
  {
    Icon: SearchX,
    title: "Find Lost Revenue",
    desc: "Find where money is quietly disappearing every month.",
    deliverables: [
      "Checkout flow friction analysis",
      "Abandoned cart optimization",
      "Hidden fee/margin analysis"
    ]
  },
  {
    Icon: FileBarChart,
    title: "Performance at a Glance",
    desc: "Get clear performance reports delivered no spreadsheets needed.",
    deliverables: [
      "Automated daily dashboards",
      "KPI tracking alerts",
      "Executive summary reports"
    ]
  },
  {
    Icon: Map,
    title: "Find Your Next Growth Move",
    desc: "We find the fastest way to increase your revenue.",
    deliverables: [
      "Market expansion analysis",
      "Product-line profitability",
      "Actionable 90-day roadmap"
    ]
  },
  {
    Icon: Cog,
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks so your team focuses on growth.",
    deliverables: [
      "Data entry automation",
      "Inventory alerts setup",
      "Marketing stack integration"
    ]
  },
];

export default function ServicesPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Navbar Placeholder */}
      <nav className="navbar flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
        <Link href="/">
          <Image 
            src="/xelvant-logo-transparent.png" 
            alt="Xelvant Logo" 
            width={180} 
            height={37} 
            style={{ objectFit: 'contain' }} 
            priority
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-display text-muted" style={{ transition: "color 0.2s", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <h1 className="font-display tracking-tight mb-6" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, color: "var(--foreground)", fontWeight: 700 }}>
            Our Services
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We turn your store&apos;s data into a clear plan for growth. Explore exactly how we stop revenue leaks and increase your bottom line.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="section px-6 pt-0">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.1 * (i + 1))}>
                <div className="card-premium p-8 h-full flex flex-col">
                  <div className="mb-6" style={{ color: "var(--primary)" }}>
                    <s.Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl mb-3" style={{ fontWeight: 700, color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-base text-muted leading-relaxed mb-8">{s.desc}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-display mb-4" style={{ color: "var(--foreground)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      What You Get
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                          <div style={{ color: "var(--primary)", marginTop: "2px" }}>•</div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact CTA */}
      <section className="relative section px-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container max-w-2xl">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display tracking-tight mb-6" style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, color: "var(--foreground)", fontWeight: 700 }}>
              Ready to plug your <br />
              <span style={{ color: "var(--primary)", fontStyle: "italic" }}>revenue leaks?</span>
            </h2>
            <Link href="/#contact" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1rem" }}>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
