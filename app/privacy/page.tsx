"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const sections = [
  {
    Icon: Eye,
    title: "1. Information We Collect",
    items: [
      { label: "Contact Information", desc: "Name, email address, and professional details submitted through our forms." },
      { label: "Business Data", desc: "Information provided during the audit process, including store URL, revenue range, and data challenges." },
      { label: "Usage Data", desc: "Analytics on how our website is accessed, including pages viewed and session duration." },
    ],
  },
  {
    Icon: Server,
    title: "2. How We Use Your Information",
    items: [
      { label: "Service Delivery", desc: "To provide, operate, and deliver our revenue intelligence services." },
      { label: "Communication", desc: "To respond to inquiries and share relevant findings with you." },
      { label: "Improvement", desc: "To improve our methodologies, tools, and overall service quality." },
      { label: "Security", desc: "To detect and prevent fraud or unauthorized access." },
    ],
  },
  {
    Icon: Lock,
    title: "3. Data Security",
    items: [
      { label: "Encryption", desc: "All data transfers use 256-bit SSL encryption." },
      { label: "Read-Only Access", desc: "We connect to your platforms through read-only API tokens. We cannot modify your store data." },
      { label: "Access Control", desc: "Your data is accessible only to team members directly involved in your audit." },
      { label: "No Resale", desc: "We never sell, share, or trade your data with third parties." },
    ],
  },
  {
    Icon: Shield,
    title: "4. Data Retention",
    items: [
      { label: "Active Clients", desc: "We retain your data for the duration of our engagement." },
      { label: "Post-Engagement", desc: "Data is deleted within 90 days of service completion unless you request otherwise." },
      { label: "Right to Delete", desc: "You can request full deletion of your data at any time by contacting us." },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-5 sm:px-6 lg:px-10">
          <div
            className="absolute inset-x-0 top-0 pointer-events-none -z-10"
            style={{
              height: "500px",
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(238,188,74,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeUp(0)}>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
                style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                Legal
              </div>
            </motion.div>
            <motion.h1
              {...fadeUp(0.06)}
              className="font-display tracking-tight mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Privacy <span className="text-gradient-gold italic">Policy</span>
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Last updated: May 17, 2026
            </motion.p>
            <motion.p {...fadeUp(0.14)} className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Your data security is fundamental to how we operate. This policy explains what we collect, how we use it, and how we protect it.
            </motion.p>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-20 px-5 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl space-y-6">
            {sections.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.06 * (i + 1))}>
                <div className="card-premium p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
                      style={{
                        background: "rgba(238,188,74,0.1)",
                        boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                        color: "var(--primary)",
                      }}
                    >
                      <s.Icon size={18} aria-hidden />
                    </div>
                    <h2
                      className="font-display"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 24px)",
                        fontWeight: 700,
                      }}
                    >
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {s.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span
                          className="mt-2.5 h-1 w-1 rounded-full shrink-0"
                          style={{ background: "var(--primary)" }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-sm leading-relaxed mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
