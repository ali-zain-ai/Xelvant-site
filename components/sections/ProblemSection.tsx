"use client";

import { motion } from "framer-motion";
import { UserX, RefreshCcw, SearchX, ShieldAlert, Sparkles } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE, delay },
});

const cards = [
  { Icon: UserX,       title: "Customers Leaving",            desc: "Know which customers are about to stop buying — before they do." },
  { Icon: RefreshCcw,  title: "Fewer Repeat Buyers",          desc: "Spot when repeat purchases are dropping and why." },
  { Icon: SearchX,     title: "Revenue Leaks",                desc: "Find where your profit is quietly disappearing every month." },
  { Icon: ShieldAlert, title: "Top Customers at Risk",        desc: "Your best buyers could be leaving. We flag them early." },
  { Icon: Sparkles,    title: "Missed Growth",                desc: "Revenue opportunities hiding in data you already have." },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-28 px-5 sm:px-6 lg:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Header — left-aligned, same as Services Preview */}
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(255,255,255,0.03)", color: "var(--muted-foreground)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
            Hidden Revenue Opportunities
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
            Revenue Leaks <span className="text-gradient-gold italic">Hide in Plain Sight</span>
          </h2>
          <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Most brands have the data. Very few know how to use it.
          </p>
        </motion.div>

        {/* Cards — same card-premium style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div key={i} {...fadeUp(0.05 * (i + 1))}>
              <div
                className="card-premium h-full p-6"
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
                  <c.Icon size={18} aria-hidden />
                </div>
                <h3
                  className="font-display leading-tight mb-1.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
