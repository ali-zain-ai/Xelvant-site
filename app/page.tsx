"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, UserX, Users, SearchX, FileBarChart, Map, Cog } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: EASE, delay },
});

const services = [
  {
    Icon: UserX,
    title: "Stop Losing Customers",
    desc: "Know who's about to leave — and what to do to keep them.",
  },
  {
    Icon: Users,
    title: "Know Your Best Buyers",
    desc: "See exactly which customers drive the most revenue and why.",
  },
  {
    Icon: SearchX,
    title: "Find Lost Revenue",
    desc: "Find where money is quietly disappearing every month.",
  },
  {
    Icon: FileBarChart,
    title: "Performance at a Glance",
    desc: "Get clear performance reports delivered — no spreadsheets needed.",
  },
  {
    Icon: Map,
    title: "Find Your Next Growth Move",
    desc: "We find the fastest way to increase your revenue.",
  },
  {
    Icon: Cog,
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks so your team focuses on growth.",
  },
];

const testimonials = [
  {
    quote: "Xelvant showed us exactly where we were losing high-value customers. We implemented their retention playbook and increased LTV by 24% in three months.",
    author: "Sarah J.",
    role: "CEO, Premium Apparel",
  },
  {
    quote: "The automated reports give me my mornings back. I finally trust our data, and we've been able to scale ad spend aggressively.",
    author: "Michael T.",
    role: "Founder, DTC Wellness",
  },
  {
    quote: "We thought we needed more traffic, but Xelvant found $40k/month in revenue leaks right in our checkout flow. Incredible ROI.",
    author: "Elena R.",
    role: "Director of E-Commerce",
  },
  {
    quote: "They don't just hand you a dashboard; they give you a clear business plan. We know our best buyers now better than ever.",
    author: "David L.",
    role: "Operations Head",
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Navbar Placeholder */}
      <nav className="flex items-center justify-between" style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)" }}>
        <Link href="/">
          <Image 
            src="/xelvant-logo-transparent.png" 
            alt="Xelvant Logo" 
            width={180} 
            height={37} 
            style={{ objectFit: 'contain', transform: 'scale(2.1)', transformOrigin: 'left center' }} 
            priority
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/services" className="text-sm font-display text-muted" style={{ transition: "color 0.2s" }}>
            Services
          </Link>
          <Link href="#case-studies" className="text-sm font-display text-muted" style={{ transition: "color 0.2s" }}>
            Case Studies
          </Link>
          <Link href="#contact" className="text-sm font-display text-muted" style={{ transition: "color 0.2s" }}>
            Contact
          </Link>
        </div>
      </nav>

      {/* ─── 1. Apple-Style Hero ─── */}
      <section className="relative pt-32 pb-16 flex flex-col items-center text-center px-6">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 70, 67, 0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div {...fadeUp(0)}>
          <div
            className="inline-flex items-center gap-2 mb-8 text-sm"
            style={{ color: "var(--primary)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            E-Commerce Intelligence
          </div>
        </motion.div>
        
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display tracking-tight mb-8"
          style={{ fontSize: "clamp(48px, 8vw, 84px)", lineHeight: 1, maxWidth: "1000px" }}
        >
          Find What&apos;s Costing Your{" "}
          <span style={{ display: "block", color: "var(--primary)", fontWeight: 700 }}>Business Revenue.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg leading-relaxed text-muted max-w-2xl mb-12"
        >
          We turn e-commerce data into a clear plan for growth. Find hidden leaks, stop losing customers, and increase your bottom line.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
          <Link href="#contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </motion.div>
      </section>

      {/* ─── 2. Services Grid ─── */}
      <section className="section px-6" style={{ background: "rgba(0, 70, 67, 0.03)" }}>
        <div className="container">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="font-display tracking-tight mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--primary)", fontWeight: 700 }}>
              Six Ways to Grow
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Everything you need to stop losing money and start scaling profitably.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.1 * (i + 1))}>
                <div className="card-premium p-8 h-full flex flex-col items-start text-left">
                  <div className="mb-6" style={{ color: "var(--primary)" }}>
                    <s.Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg mb-3" style={{ fontWeight: 600, color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="flex justify-center">
            <Link href="/services" className="btn-secondary">
              View All Service Details <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. Testimonials / Case Studies ─── */}
      <section id="case-studies" className="section px-6">
        <div className="container">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="font-display tracking-tight mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--foreground)", fontWeight: 700 }}>
              Trusted by Top Brands
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp(0.1 * (i + 1))}>
                <div className="card-premium p-8 h-full flex flex-col justify-between">
                  <p className="text-base leading-relaxed text-muted mb-8">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--foreground)" }}>{t.author}</div>
                    <div style={{ color: "var(--primary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px", fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Premium Contact CTA & Form ─── */}
      <section id="contact" className="relative section px-6 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0, 70, 67, 0.06) 0%, transparent 80%)",
          }}
        />
        <div className="container max-w-3xl">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display tracking-tight mb-6" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, color: "var(--foreground)", fontWeight: 700 }}>
              Ready to Grow Your <br />
              <span style={{ color: "var(--primary)", fontStyle: "italic" }}>E-Commerce Business?</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-12">
              Tell us about your business, and we&apos;ll show you where your biggest growth opportunities are.
            </p>

            <form className="flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label-premium">Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="input-premium" required />
                </div>
                <div>
                  <label htmlFor="email" className="label-premium">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="input-premium" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="label-premium">Tell us about your store</label>
                <textarea id="message" rows={5} placeholder="What are your current revenue goals?" className="input-premium resize-none" required></textarea>
              </div>
              <button type="submit" className="btn-primary mt-4" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", width: "100%", height: "4rem" }}>
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
