"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CommandCenterSection() {
  return (
    <section id="command-center" className="relative section-padding bg-background overflow-hidden">
      <div className="bg-glow bg-glow-purple w-[500px] h-[500px] top-20 left-1/4 absolute opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="text-xs font-mono text-purple uppercase tracking-[0.2em]">Operational Control</span>
              <h2 className="font-outfit font-bold text-4xl md:text-5xl text-text mt-4 mb-6 leading-tight">
                This Isn&apos;t a Report.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                  }}
                >
                  It&apos;s Your Daily Command Center.
                </span>
              </h2>
              <p className="text-muted text-lg font-satoshi leading-relaxed">
                Every morning at 9:00 AM, Xelvant delivers a briefing directly to your WhatsApp:
                what to scale, what to kill, what to restock. No spreadsheets. No guessing. Just operational clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="space-y-6 pt-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-mono font-bold text-xs">01</span>
                </div>
                <div>
                  <h4 className="font-clash font-semibold text-text text-base">7-Day Rolling Forecast</h4>
                  <p className="text-sm text-muted mt-1 font-satoshi">Inventory models that predict stock-outs before they happen based on seasonal variance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy border border-purple/20 flex items-center justify-center shrink-0">
                  <span className="text-purple font-mono font-bold text-xs">02</span>
                </div>
                <div>
                  <h4 className="font-clash font-semibold text-text text-base">Net Profit Attribution</h4>
                  <p className="text-sm text-muted mt-1 font-satoshi">Real-time tracking of contribution margins per ad set, factoring in shipping, COGS, and returns.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-0 overflow-hidden border-border/10 shadow-[0_0_80px_rgba(157,123,255,0.1)]">
              <div className="flex items-center justify-between px-8 py-5 border-b border-border/10 bg-navy/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green/20" />
                  </div>
                  <span className="font-mono text-[10px] text-muted tracking-widest uppercase ml-2">xelvant_intelligence_hub_v2.0</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-green font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                  CONNECTED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 p-6 border-r border-border/10 space-y-4">
                  <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-2">Priority Triggers</p>
                  {[
                    { icon: "✅", text: "Scale: FB Ad #A29", sub: "ROAS 4.2 | 94% Prob", color: "green" },
                    { icon: "❌", text: "Pause: TT Creative V4", sub: "CPC ↑ 28% | Waste High", color: "red" },
                    { icon: "⚠️", text: "Restock: Polo Shirt L", sub: "3 Day Forecast Alert", color: "amber" },
                    { icon: "📈", text: "Winner: SKU-8427", sub: "LTV +40% Forecast", color: "purple" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, ease: EASE }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl bg-dark border border-border/5 transition-all duration-300 hover:border-border/20"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-sm">{item.icon}</span>
                        <div>
                          <p className="text-[11px] font-general font-semibold text-text uppercase tracking-tight">{item.text}</p>
                          <p className="text-[10px] text-muted font-mono mt-1">{item.sub}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="md:col-span-7 p-6 space-y-6">
                  <div className="p-6 rounded-2xl bg-dark border border-border/5">
                    <p className="text-[10px] text-muted font-mono uppercase tracking-widest mb-4">Contribution Margin Trend</p>
                    <svg viewBox="0 0 300 100" className="w-full h-28">
                      <defs>
                        <linearGradient id="chart-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#D946EF" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q30,75 60,65 T120,55 T180,35 T240,25 T300,15"
                        fill="none"
                        stroke="url(#chart-grad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: 500,
                          strokeDashoffset: 500,
                          animation: "chart-draw 3s ease forwards 1s",
                        }}
                      />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {["Net ROAS", "Inventory Risk"].map((label) => (
                      <div key={label} className="p-4 rounded-xl bg-surface border border-white/5">
                        <p className="text-[9px] text-muted font-mono uppercase tracking-widest mb-2">{label}</p>
                        <div className="flex items-end justify-between">
                          <span className="text-sm font-clash font-semibold text-text">
                            {label === "Net ROAS" ? "4.2x" : "Low"}
                          </span>
                          <svg viewBox="0 0 40 15" className="w-10 h-3">
                            <path d="M0,10 Q10,5 20,8 T40,2" fill="none" stroke="#9D7BFF" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 border-t border-border/10 bg-navy/10 flex items-center justify-between">
                <span className="text-[9px] text-muted font-mono tracking-widest uppercase">Kernel Update: 21:04 UTC</span>
                <span className="text-[9px] text-muted/40 font-general uppercase tracking-widest">Build 849.20.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
