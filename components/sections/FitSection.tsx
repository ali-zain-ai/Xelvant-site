"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const goodFit = [
  "You're a Shopify or DTC brand doing $2M–$30M/year",
  "You have real customer and order data (12+ months)",
  "You'd rather have a clear answer than another tool",
  "You're ready to act on a plan once you have it",
];

const notFit = [
  "You're under $1M and just need ads to scale",
  "You want another dashboard to log into",
  "You want done-for-you ad management or creative",
  "You're not open to looking honestly at the numbers",
];

export default function FitSection() {
  return (
    <section id="fit" className="py-24 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em]"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Is this a fit?
          </div>
          <h2
            className="font-display mt-5 leading-[1.02] tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 60px)",
            }}
          >
            Who this is for, and{" "}
            <span className="text-gradient-gold italic">who it isn&apos;t</span>.
          </h2>
          <p
            className="mt-5 text-base md:text-lg max-w-2xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            We&apos;d rather be honest now than waste your time on a call. Here&apos;s how to tell if Xelvant fits where your brand is today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-12 md:mt-14">

          <motion.div {...fadeUp(0.08)}>
            <div className="card-premium p-7 md:p-8 h-full">
              <p
                className="text-[11px] uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--primary)" }}
              >
                A great fit if…
              </p>
              <ul className="space-y-4">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                    <Check size={16} className="mt-1 shrink-0" style={{ color: "var(--primary)" }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.14)}>
            <div className="card-premium p-7 md:p-8 h-full">
              <p
                className="text-[11px] uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--muted-foreground)" }}
              >
                Not a fit if…
              </p>
              <ul className="space-y-4">
                {notFit.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm md:text-base"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <X size={16} className="mt-1 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
