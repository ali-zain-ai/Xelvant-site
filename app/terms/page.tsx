"use client";

import { motion } from "framer-motion";
import { FileText, Ban, Database, AlertTriangle, Scale, RefreshCw, Globe, Mail } from "lucide-react";
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
    Icon: FileText,
    title: "1. Agreement to Terms",
    content: "By accessing or using Xelvant's services, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.",
  },
  {
    Icon: Scale,
    title: "2. Intellectual Property",
    content: "All methodologies, reports, dashboards, and proprietary models created by Xelvant remain our intellectual property. You are granted a license to use deliverables for your internal business operations only.",
  },
  {
    Icon: Ban,
    title: "3. Restrictions",
    items: [
      "Publishing or redistributing any Xelvant materials without permission.",
      "Reselling, sublicensing, or commercializing any deliverables or models.",
      "Reverse-engineering our methodologies or analytical frameworks.",
      "Using our services in any way that could damage or disrupt operations.",
    ],
  },
  {
    Icon: Database,
    title: "4. Client Responsibilities",
    content: "The accuracy of our analysis depends on the quality of data provided. You are responsible for ensuring that data shared with Xelvant is accurate, legally obtained, and compliant with applicable data protection regulations (GDPR, CCPA).",
  },
  {
    Icon: AlertTriangle,
    title: "5. Limitation of Liability",
    content: "Xelvant provides revenue intelligence and recommendations based on data analysis. We are not liable for business decisions made based on our findings. Our liability is limited to the fees paid for the specific service in question.",
  },
  {
    Icon: RefreshCw,
    title: "6. Changes to Terms",
    content: "We may update these Terms periodically. Continued use of our services after changes constitutes acceptance of the revised Terms. Material changes will be communicated via email.",
  },
  {
    Icon: Globe,
    title: "7. Governing Law",
    content: "These Terms are governed by the laws of our operating jurisdiction. Any disputes will be resolved through good-faith negotiation before pursuing formal legal channels.",
  },
];

export default function TermsPage() {
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
              Terms of <span className="text-gradient-gold italic">Service</span>
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Last updated: May 17, 2026
            </motion.p>
            <motion.p {...fadeUp(0.14)} className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Clear terms for a transparent working relationship. Please read these carefully before using our services.
            </motion.p>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-20 px-5 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl space-y-6">
            {sections.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.05 * (i + 1))}>
                <div className="card-premium p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
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

                  {"content" in s && s.content && (
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {s.content}
                    </p>
                  )}

                  {"items" in s && s.items && (
                    <div className="space-y-3">
                      <p className="text-sm mb-1" style={{ color: "var(--muted-foreground)" }}>
                        You are restricted from:
                      </p>
                      {s.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-1 w-1 rounded-full shrink-0"
                            style={{ background: "var(--primary)" }}
                          />
                          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Contact */}
            <motion.div {...fadeUp(0.45)}>
              <div
                className="card-premium p-6 md:p-8"
                style={{ borderColor: "rgba(238,188,74,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
                    style={{
                      background: "rgba(238,188,74,0.1)",
                      boxShadow: "0 0 0 1px rgba(238,188,74,0.2)",
                      color: "var(--primary)",
                    }}
                  >
                    <Mail size={18} aria-hidden />
                  </div>
                  <h2
                    className="font-display"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 700,
                    }}
                  >
                    Questions?
                  </h2>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  For questions about these Terms, contact us at{" "}
                  <a href="mailto:legal@xelvant.com" className="font-medium" style={{ color: "var(--primary)" }}>
                    legal@xelvant.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
