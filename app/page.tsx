"use client";
import { useState } from "react";import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, UserX, Users, SearchX, FileBarChart, Map, Cog, ArrowLeft } from "lucide-react";
import { HandDrawnNote } from "@/components/ui/HandDrawnNote";

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
  const [formData, setFormData] = useState({ name: "", email: "", store: "", revenue: "", challenge: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      
      setStatus("success");
      // Intentionally not clearing formData here so we can display their email in the success message.
      // It clears when they click "Send Another Inquiry".
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

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
        <div className="hidden md:flex items-center gap-6">
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

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            Contact Us
          </Link>
          <Link href="/services" className="btn-secondary w-full sm:w-auto">
            View Services
          </Link>
        </motion.div>
      </section>

      {/* ─── 2. Services Grid ─── */}
      <section className="section px-6" style={{ background: "rgba(0, 70, 67, 0.03)" }}>
        <div className="container">
          <motion.div {...fadeUp(0)} className="text-center mb-16 relative max-w-3xl mx-auto">
            <h2 className="font-display tracking-tight mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--primary)", fontWeight: 700 }}>
              Six Ways to Grow
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto">
              Everything you need to stop losing money and start scaling profitably.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-0 mt-8">
              {services.map((s, i) => (
                <div key={i} className="relative h-full">
                  {/* The Hand-Drawn Annotation exactly above the first card */}
                  {i === 0 && (
                    <div className="absolute z-30 pointer-events-none w-full" style={{ bottom: "100%", left: "0px", paddingBottom: "10px" }}>
                      <HandDrawnNote text="Click any card to see Case Studies!" />
                    </div>
                  )}
                  <motion.div {...fadeUp(0.1 * (i + 1))} className="h-full">
                    <Link href="#" className="block h-full group">
                      <div className="card-premium p-8 h-full flex flex-col items-start text-left transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,70,67,0.15)] group-hover:border-[var(--primary)]">
                        <div className="mb-6 transition-transform duration-300 group-hover:scale-110" style={{ color: "var(--primary)" }}>
                          <s.Icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-lg mb-3" style={{ fontWeight: 600, color: "var(--foreground)" }}>{s.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
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

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                className="card-premium p-10 md:p-14 text-center relative overflow-hidden"
                style={{ 
                  backgroundColor: "var(--foreground)", 
                  borderColor: "var(--primary)", 
                  boxShadow: "0 25px 50px -12px rgba(0, 70, 67, 0.3)" 
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none" 
                  style={{ background: "radial-gradient(ellipse at top, rgba(0, 70, 67, 0.3), transparent 70%)" }}
                />
                
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                  className="mx-auto flex items-center justify-center shadow-lg"
                  style={{ width: "5rem", height: "5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", marginBottom: "2rem", borderRadius: "50%" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </motion.div>
                
                <h3 className="font-display text-3xl font-bold mb-4 tracking-tight" style={{ color: "var(--primary-foreground)" }}>
                  Inquiry Received
                </h3>
                
                <p className="text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "rgba(240, 237, 229, 0.8)" }}>
                  Thank you for reaching out. We have sent a confirmation email to <strong style={{ color: "var(--primary-foreground)", fontWeight: 600 }}>{formData.email || "your inbox"}</strong>. Our intelligence team will review your details and respond within 24 hours.
                </p>

                <button 
                  onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", store: "", revenue: "", challenge: "" }); }}
                  className="text-sm font-semibold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center mx-auto gap-2"
                  style={{ color: "var(--primary-foreground)", backgroundColor: "var(--primary)", padding: "0.75rem 1.5rem", borderRadius: "9999px", border: "1px solid rgba(240, 237, 229, 0.2)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 70, 67, 0.8)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--primary)"}
                >
                  <ArrowLeft size={16} /> Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-premium">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" className="input-premium" required disabled={status === "loading"} />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-premium">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" className="input-premium" required disabled={status === "loading"} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="store" className="label-premium">Website URL</label>
                    <input type="url" id="store" value={formData.store} onChange={(e) => setFormData({...formData, store: e.target.value})} placeholder="https://yourstore.com" className="input-premium" required disabled={status === "loading"} />
                  </div>
                  <div>
                    <label htmlFor="revenue" className="label-premium">Monthly Revenue</label>
                    <select id="revenue" value={formData.revenue} onChange={(e) => setFormData({...formData, revenue: e.target.value})} className="input-premium" required disabled={status === "loading"} style={{ appearance: "none", cursor: "pointer" }}>
                      <option value="" disabled>Select revenue range</option>
                      <option value="Under $10k">Under $10k</option>
                      <option value="$10k - $50k">$10k - $50k</option>
                      <option value="$50k - $250k">$50k - $250k</option>
                      <option value="$250k+">$250k+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="challenge" className="label-premium">Biggest Challenge (Optional)</label>
                  <textarea id="challenge" value={formData.challenge} onChange={(e) => setFormData({...formData, challenge: e.target.value})} rows={4} placeholder="What is the biggest hurdle preventing your growth?" className="input-premium resize-none" disabled={status === "loading"}></textarea>
                </div>
                
                {status === "error" && (
                  <div style={{ padding: "1rem", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "var(--radius)", color: "#b91c1c", fontSize: "0.875rem" }}>
                    {errorMessage}
                  </div>
                )}

                <button type="submit" className="btn-primary mt-2" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", width: "100%", height: "4rem", opacity: status === "loading" ? 0.7 : 1 }} disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
