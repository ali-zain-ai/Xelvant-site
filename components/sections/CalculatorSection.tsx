"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ArrowRight, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CalculatorSection() {
  const [revenue, setRevenue] = useState(250000);
  const [churn, setChurn] = useState(15);

  const annualRevenue = revenue * 12;
  const yearlyChurnLoss = annualRevenue * (churn / 100);
  const projectedRecovery = yearlyChurnLoss * 0.18;
  const timeSaved = 14;
  const ltvIncrease = annualRevenue * 0.082;

  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <section className="section-padding bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4 inline-block">
            ROI Projection
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            Calculate Churn <span className="text-gradient-gold italic">Recovery Potential.</span>
          </h2>
          <p className="text-muted text-lg">
            Drag the sliders below representing your current business metrics to estimate the annual financial impact of deploying a custom Xelvant intelligence model.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 glass-card rounded-[32px] p-8 md:p-12 border-gold-subtle flex flex-col justify-between space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" /> Store Parameters
              </h3>
              <p className="text-muted text-sm mb-10">Input your operational metrics. We benchmark these values against similar verticals.</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-widest font-black text-muted">Monthly Revenue</label>
                <span className="text-xl font-bold text-white">{formatCurrency(revenue)}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={2000000}
                step={10000}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-primary border border-white/5 outline-none transition-all duration-300"
              />
              <div className="flex justify-between text-[10px] text-muted font-bold">
                <span>$20K</span>
                <span>$500K</span>
                <span>$1M</span>
                <span>$2M</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-widest font-black text-muted">Estimated Churn / Drop-Off</label>
                <span className="text-xl font-bold text-white">{churn}%</span>
              </div>
              <input
                type="range"
                min={5}
                max={45}
                step={1}
                value={churn}
                onChange={(e) => setChurn(Number(e.target.value))}
                className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-primary border border-white/5 outline-none transition-all duration-300"
              />
              <div className="flex justify-between text-[10px] text-muted font-bold">
                <span>5% (Healthy)</span>
                <span>20% (High Risk)</span>
                <span>45% (Critical)</span>
              </div>
            </div>

            <p className="text-xs text-muted/60 leading-relaxed pt-6 border-t border-white/5">
              * Calculations are based on Xelvant brand case-study averages (14% - 22% churn reclamation rates observed in fashion, cosmetics, and electronics sectors).
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 bg-surface border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-primary/20 transition-colors duration-700 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                  Projected Yearly Impact
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-muted">Recoverable Revenue</span>
                <div className="flex items-baseline gap-2">
                  <motion.span
                    key={projectedRecovery}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="text-4xl md:text-5xl font-black text-white text-gradient-gold"
                  >
                    {formatCurrency(projectedRecovery)}
                  </motion.span>
                  <span className="text-xs text-muted">/ yr</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Revenue saved from unmodeled cohort drops and static Klaviyo messaging lags.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted">LTV Increase</span>
                  <div className="text-lg font-bold text-white flex items-center gap-1.5">
                    <TrendingUp className="text-green" size={16} />
                    {formatCurrency(ltvIncrease)}
                  </div>
                  <p className="text-[10px] text-muted leading-relaxed">Via predictive segment clusters.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted">Weekly Time Saved</span>
                  <div className="text-lg font-bold text-white flex items-center gap-1.5">
                    <Clock className="text-primary" size={16} />
                    {timeSaved} Hours
                  </div>
                  <p className="text-[10px] text-muted leading-relaxed">Through automated pipeline tools.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <Link
                href="/audit"
                className="w-full py-4 bg-primary hover:bg-primary-dark text-black font-black text-md rounded-full transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transform hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Claim Recoverable Revenue
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
