"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Mail, Clock, ShieldCheck, Lock } from "lucide-react";
import { useState, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Revenue range options ── */
const revenueRanges = [
  "Under $50k/mo",
  "$50k – $150k/mo",
  "$150k – $500k/mo",
  "$500k – $1M/mo",
  "$1M+/mo",
];

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isFocused = (id: string) => focusedField === id;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-5 sm:px-6 lg:px-10">

        {/* Top ambient glow */}
        <div
          className="fixed inset-x-0 top-0 pointer-events-none -z-10"
          style={{
            height: "600px",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(238,188,74,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-6xl">

          {/* ─── Header ─── */}
          <div className="text-center mb-14 md:mb-20">
            <FadeUp>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
                style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
                Book your audit
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <h1
                className="font-display tracking-tight"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "clamp(32px, 6vw, 72px)",
                  lineHeight: 1.02,
                }}
              >
                Get Your Free{" "}
                <span className="text-gradient-gold italic">Revenue Audit</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.12}>
              <p
                className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                Tell us about your store. We&apos;ll analyze your data and show you
                exactly where revenue is hiding — no contracts, no commitment.
              </p>
            </FadeUp>
          </div>

          {/* ─── Two-column layout ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* ── Left: Form (3 cols) ── */}
            <FadeUp delay={0.18} className="lg:col-span-3 order-1">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="card-premium p-10 md:p-14 text-center"
                >
                  <div
                    className="mx-auto mb-6 grid place-items-center h-16 w-16 rounded-2xl"
                    style={{ background: "rgba(238,188,74,0.12)" }}
                  >
                    <Mail size={28} style={{ color: "var(--primary)" }} />
                  </div>
                  <h2
                    className="font-display text-2xl md:text-3xl mb-3"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    We&apos;ve received your request
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
                    Our team will review your details and reach out within 24 hours
                    to schedule your free revenue audit.
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="card-premium p-6 md:p-10"
                  style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field
                      id="name"
                      label="Full Name"
                      placeholder="Ali Ahmed"
                      type="text"
                      focused={isFocused("name")}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <Field
                      id="email"
                      label="Work Email"
                      placeholder="ali@yourstore.com"
                      type="email"
                      focused={isFocused("email")}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  {/* Row 2: Store URL + Revenue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field
                      id="store"
                      label="Shopify Store URL"
                      placeholder="yourstore.myshopify.com"
                      type="url"
                      focused={isFocused("store")}
                      onFocus={() => setFocusedField("store")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <div>
                      <label
                        htmlFor="revenue"
                        className="block text-[11px] uppercase tracking-[0.15em] font-semibold mb-2"
                        style={{ color: isFocused("revenue") ? "var(--primary)" : "var(--muted-foreground)" }}
                      >
                        Monthly Revenue
                      </label>
                      <select
                        id="revenue"
                        className="w-full rounded-xl border bg-transparent px-4 py-3.5 text-sm text-white outline-none appearance-none cursor-pointer transition-colors duration-300"
                        style={{
                          borderColor: isFocused("revenue") ? "rgba(238,188,74,0.4)" : "rgba(255,255,255,0.08)",
                          background: isFocused("revenue") ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.25)",
                        }}
                        onFocus={() => setFocusedField("revenue")}
                        onBlur={() => setFocusedField(null)}
                        defaultValue=""
                        required
                      >
                        <option value="" disabled style={{ color: "#555" }}>
                          Select range
                        </option>
                        {revenueRanges.map((r) => (
                          <option key={r} value={r} style={{ background: "#111", color: "#fff" }}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Biggest challenge */}
                  <div className="mb-6">
                    <label
                      htmlFor="challenge"
                      className="block text-[11px] uppercase tracking-[0.15em] font-semibold mb-2"
                      style={{ color: isFocused("challenge") ? "var(--primary)" : "var(--muted-foreground)" }}
                    >
                      Biggest Revenue Challenge{" "}
                      <span style={{ color: "var(--muted-foreground)", fontWeight: 400, textTransform: "none" }}>(optional)</span>
                    </label>
                    <textarea
                      id="challenge"
                      rows={3}
                      className="w-full rounded-xl border bg-transparent px-4 py-3.5 text-sm text-white outline-none resize-none transition-colors duration-300"
                      placeholder="e.g. Customers aren't coming back for a second purchase..."
                      style={{
                        borderColor: isFocused("challenge") ? "rgba(238,188,74,0.4)" : "rgba(255,255,255,0.08)",
                        background: isFocused("challenge") ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.25)",
                        color: "#fff",
                      }}
                      onFocus={() => setFocusedField("challenge")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-300"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      boxShadow: "0 10px 40px -10px rgba(238,188,74,0.45)",
                    }}
                  >
                    Request My Free Revenue Audit
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </button>

                  {/* Privacy note */}
                  <p className="mt-4 text-center text-[11px] flex items-center justify-center gap-1.5" style={{ color: "var(--muted-foreground)" }}>
                    <Lock size={11} aria-hidden />
                    Your data is encrypted and never shared. Read-only access only.
                  </p>
                </form>
              )}
            </FadeUp>

            {/* ── Right: Trust signals (2 cols) ── */}
            <FadeUp delay={0.24} className="lg:col-span-2 order-2">
              <div className="space-y-6">

                {/* What happens next */}
                <div className="card-premium p-6">
                  <h3
                    className="font-display text-lg mb-5"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    What happens after you submit
                  </h3>
                  <ol className="space-y-4">
                    {[
                      { step: "01", text: "We review your store details within 24 hours" },
                      { step: "02", text: "We connect to your Shopify data (read-only)" },
                      { step: "03", text: "You receive your revenue audit in 14 days" },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <span
                          className="shrink-0 text-[10px] font-mono font-bold rounded-md px-2 py-1"
                          style={{ background: "rgba(238,188,74,0.1)", color: "var(--primary)" }}
                        >
                          {item.step}
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: "rgba(250,250,250,0.8)" }}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Trust points */}
                <div className="card-premium p-6">
                  <div className="space-y-4">
                    {[
                      { Icon: Clock, text: "Response within 24 hours" },
                      { Icon: ShieldCheck, text: "Read-only access — we never touch your store" },
                      { Icon: Lock, text: "Your data stays private and encrypted" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="shrink-0 grid place-items-center h-8 w-8 rounded-lg"
                          style={{ background: "rgba(238,188,74,0.08)", color: "var(--primary)" }}
                        >
                          <item.Icon size={15} aria-hidden />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(250,250,250,0.7)" }}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct contact */}
                <div className="card-premium p-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] font-semibold mb-3" style={{ color: "var(--muted-foreground)" }}>
                    Prefer email?
                  </p>
                  <a
                    href="mailto:ops@xelvant.ai"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[var(--primary)]"
                    style={{ color: "rgba(250,250,250,0.8)" }}
                  >
                    <Mail size={14} style={{ color: "var(--primary)" }} aria-hidden />
                    ops@xelvant.ai
                  </a>
                </div>

              </div>
            </FadeUp>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── Reusable input field ── */
function Field({
  id,
  label,
  placeholder,
  type,
  focused,
  onFocus,
  onBlur,
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-[0.15em] font-semibold mb-2 transition-colors duration-300"
        style={{ color: focused ? "var(--primary)" : "var(--muted-foreground)" }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full rounded-xl border bg-transparent px-4 py-3.5 text-sm text-white outline-none transition-colors duration-300"
        placeholder={placeholder}
        style={{
          borderColor: focused ? "rgba(238,188,74,0.4)" : "rgba(255,255,255,0.08)",
          background: focused ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.25)",
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
      />
    </div>
  );
}
