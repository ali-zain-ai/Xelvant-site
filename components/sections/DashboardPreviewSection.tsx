"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TriangleAlert, Users, Sparkles } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  // once:false → re-animates every time section enters viewport
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: EASE, delay },
});

// ── Count-up hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // Reset immediately when out of view
    if (!active) {
      setValue(0);
      return;
    }
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

// ── Animated bar ───────────────────────────────────────────────────
function AnimatedBar({ pct, delay, active }: { pct: number; delay: number; active: boolean }) {
  return (
    <motion.div
      className="h-full rounded-full"
      style={{
        background: "linear-gradient(to right, rgba(238,188,74,0.6), #eebc4a)",
      }}
      initial={{ width: "0%" }}
      animate={active ? { width: `${pct}%` } : { width: "0%" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    />
  );
}

// ── Segments card ──────────────────────────────────────────────────
function SegmentsCard({ active }: { active: boolean }) {
  const segments = [
    { name: "VIP Repeat", val: "$612k", pct: 85 },
    { name: "Loyal",      val: "$284k", pct: 52 },
    { name: "One-time",   val: "$148k", pct: 28 },
    { name: "At-risk",    val: "$62k",  pct: 13 },
  ];
  return (
    <div className="rounded-xl border border-white/5 p-5" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>Customer Segments</p>
        <Users size={16} style={{ color: "var(--primary)" }} aria-hidden />
      </div>
      {segments.map((s, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>{s.name}</span>
            <span className="font-mono" style={{ color: "var(--muted-foreground)" }}>{s.val}</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
            <AnimatedBar pct={s.pct} delay={0.4 + i * 0.1} active={active} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Revenue metric with count-up ───────────────────────────────────
function RevenueMetric({ active }: { active: boolean }) {
  // count from 0 → 184 then display as "$1.{n}M"
  const raw = useCountUp(184, 1400, active);
  const pct = useCountUp(234, 1400, active);
  const display = raw < 100 ? `$0.${String(raw).padStart(2, "0")}M` : `$1.${String(raw - 100).padStart(2, "0").slice(0, 2)}M`;
  const pctDisplay = (pct / 10).toFixed(1);

  return (
    <p className="font-display text-3xl md:text-4xl mt-1" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
      {active ? display : "$0.00M"}{" "}
      <span className="text-lg align-middle" style={{ color: "var(--primary)" }}>
        ↑ {active ? pctDisplay : "0.0"}%
      </span>
    </p>
  );
}

// ── Main component ─────────────────────────────────────────────────
export default function DashboardPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // once:false → animations replay every time the section scrolls into view
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section className="relative px-5 sm:px-6 lg:px-10 pb-16" ref={sectionRef}>

      {/* Label */}
      <motion.p
        {...fadeUp(0)}
        className="mt-16 mb-3 text-center text-[11px] uppercase tracking-[0.22em]"
        style={{ color: "var(--muted-foreground)" }}
      >
        A sample of what you&apos;ll see
      </motion.p>

      {/* Dashboard panel */}
      <motion.div
        {...fadeUp(0.08)}
        className="relative mx-auto mt-4 max-w-6xl"
      >
        {/*
          Gold glow — very soft ambient light, dissolves into background.
          Reduced to 6% opacity max so it’s imperceptible as a shape.
        */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-80px -60px auto",
            height: "320px",
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(238,188,74,0.06) 0%, rgba(238,188,74,0.02) 50%, transparent 80%)",
          }}
        />

        <div
          className="relative card-premium p-4 md:p-6 shadow-2xl"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.6)" }}
        >
          {/* Chrome bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              {[0, 1, 2].map(i => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />
              ))}
            </div>
            <span className="text-xs font-mono" style={{ color: "var(--muted-foreground)" }}>
              xelvant.app / overview
            </span>
            <span className="text-xs font-mono" style={{ color: "var(--primary)" }}>● live</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-5">

            {/* Revenue Forecast — 2 cols */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 rounded-xl border border-white/5 p-4 md:p-5"
              style={{ background: "rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                    Revenue Forecast · 90d
                  </p>
                  <RevenueMetric active={isInView} />
                </div>
                <TrendingUp size={20} style={{ color: "var(--primary)" }} aria-hidden />
              </div>

              {/* Chart */}
              <svg viewBox="0 0 600 200" className="mt-4 w-full h-44">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#eebc4a" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#eebc4a" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="chart-clip">
                    <motion.rect
                      x="40" y="0" height="170"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 560 } : { width: 0 }}
                      transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
                    />
                  </clipPath>
                </defs>

                {/* Y-axis labels */}
                {[
                  { y: 30,  label: "$2.0M" },
                  { y: 60,  label: "$1.8M" },
                  { y: 90,  label: "$1.6M" },
                  { y: 120, label: "$1.4M" },
                  { y: 150, label: "$1.2M" },
                ].map((tick) => (
                  <g key={tick.y}>
                    <text x="35" y={tick.y + 3} textAnchor="end" fill="white" fillOpacity="0.25" fontSize="9" fontFamily="monospace">
                      {tick.label}
                    </text>
                    <line x1="40" x2="600" y1={tick.y} y2={tick.y} stroke="white" strokeOpacity="0.04" />
                  </g>
                ))}

                {/* X-axis month labels */}
                {[
                  { x: 40,  label: "Apr" },
                  { x: 132, label: "May" },
                  { x: 224, label: "Jun" },
                  { x: 316, label: "Jul" },
                  { x: 408, label: "Aug" },
                  { x: 540, label: "Sep" },
                ].map((tick) => (
                  <text key={tick.label} x={tick.x} y={190} textAnchor="middle" fill="white" fillOpacity="0.25" fontSize="9" fontFamily="monospace">
                    {tick.label}
                  </text>
                ))}

                {/* Gradient fill — clipped to animate left-to-right */}
                <g clipPath="url(#chart-clip)">
                  <motion.path
                    d="M40,150 C90,135 130,140 175,125 C230,108 270,115 320,98 C370,80 410,86 450,72 L450,170 L40,170 Z"
                    fill="url(#g1)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
                  />
                </g>

                {/* Historical line — draws left-to-right via pathLength */}
                <motion.path
                  d="M40,150 C90,135 130,140 175,125 C230,108 270,115 320,98 C370,80 410,86 450,72"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
                />

                {/* Forecast dashed line */}
                <motion.path
                  d="M450,72 C490,62 530,48 590,32"
                  fill="none"
                  stroke="#eebc4a"
                  strokeWidth="2.5"
                  strokeDasharray="5,4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: EASE, delay: 1.5 }}
                />

                {/* Now marker dot */}
                <motion.circle
                  cx="450" cy="72" r="4" fill="#eebc4a"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: EASE, delay: 1.65 }}
                  style={{ transformOrigin: "450px 72px" }}
                />

                {/* "Today" label */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, ease: EASE, delay: 1.7 }}
                >
                  <line x1="450" x2="450" y1="72" y2="170" stroke="#eebc4a" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3,3" />
                  <rect x="430" y="162" width="40" height="16" rx="3" fill="rgba(238,188,74,0.15)" />
                  <text x="450" y="173" textAnchor="middle" fill="#eebc4a" fontSize="8" fontFamily="monospace" fontWeight="600">
                    Today
                  </text>
                </motion.g>

                {/* Mini legend */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, ease: EASE, delay: 1.8 }}
                >
                  {/* Historical */}
                  <line x1="490" x2="510" y1="15" y2="15" stroke="white" strokeOpacity="0.7" strokeWidth="2" />
                  <text x="515" y="18" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="sans-serif">Historical</text>
                  {/* Forecast */}
                  <line x1="490" x2="510" y1="28" y2="28" stroke="#eebc4a" strokeWidth="2" strokeDasharray="4,3" />
                  <text x="515" y="31" fill="#eebc4a" fillOpacity="0.6" fontSize="8" fontFamily="sans-serif">Forecast</text>
                </motion.g>
              </svg>
            </motion.div>

            {/* Churn alerts — 1 col */}
            <motion.div
              className="rounded-xl border border-white/5 p-5"
              style={{ background: "rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>Churn Alerts</p>
                <TriangleAlert size={16} style={{ color: "var(--primary)" }} aria-hidden />
              </div>
              {[
                { name: "VIP cohort — Q2", val: "$48k" },
                { name: "First-time buyers", val: "$22k" },
                { name: "Subscription lapses", val: "$17k" },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between py-2 border-t border-white/5 first:border-t-0"
                  initial={{ opacity: 0, x: 8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.1 }}
                >
                  <div>
                    <p className="text-sm">{a.name}</p>
                    <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>at-risk revenue</p>
                  </div>
                  <p className="text-sm font-mono" style={{ color: "var(--primary)" }}>{a.val}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Customer Segments — 1 col */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            >
              <SegmentsCard active={isInView} />
            </motion.div>

            {/* Growth Opportunities — 2 col */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 rounded-xl border border-white/5 p-4 md:p-5"
              style={{ background: "rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>Growth Opportunities</p>
                <Sparkles size={16} style={{ color: "var(--primary)" }} aria-hidden />
              </div>
              <ul className="divide-y divide-white/5">
                {[
                  { title: "Win-back flow for lapsed VIPs", conf: "High confidence", val: "+$84k / 60d" },
                  { title: "Bundle: hero SKU + refill (cohort A)", conf: "High confidence", val: "+$41k / 30d" },
                  { title: "Subscription upsell at order 2", conf: "Medium confidence", val: "+$29k / 90d" },
                ].map((o, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center justify-between py-3"
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.55 + i * 0.1 }}
                  >
                    <div>
                      <p className="text-sm">{o.title}</p>
                      <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>{o.conf}</p>
                    </div>
                    <p className="text-sm font-mono" style={{ color: "var(--primary)" }}>{o.val}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
