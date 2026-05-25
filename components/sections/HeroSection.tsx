"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Activity, Zap, ShieldAlert, BarChart3, Fingerprint, Layers, TrendingUp, Users, Network } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const rotatingLabels = [
  "Churn Prediction",
  "Customer Intelligence",
  "Predictive Analytics",
  "Revenue Forecasting",
  "Segmentation Engine",
  "AI Automation",
  "Growth Analytics",
  "Business Intelligence"
];

export default function HeroSection() {
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % rotatingLabels.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center overflow-hidden" id="home">
      {/* Premium Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[#020202] -z-20"></div>
      
      {/* Soft Radial Glow behind dashboard */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/15 via-transparent to-transparent -z-10 blur-[120px] opacity-70 rounded-full translate-x-1/4 -translate-y-1/4 animate-pulse-slow"></div>
      
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/3"></div>
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025] mix-blend-overlay -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="text-left flex flex-col justify-center items-start pt-10 lg:pt-0">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-[#0A0A0A]/50 backdrop-blur-xl mb-8 shadow-[0_0_15px_rgba(197,160,89,0.1)] group cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-primary group-hover:text-primary-light transition-colors">
                Intelligent E-commerce Engine
              </span>
            </motion.div>
            
            {/* Main Headline - Clash Display */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[5rem] lg:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05] max-w-[95%]"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              <span className="block text-white mb-1">Custom AI Built</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2C792] to-[#C5A059]">
                For Serious Growth.
              </span>
            </motion.h1>
            
            {/* Subheadline & Supporting Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-xl"
            >
              <p className="text-[#A1A1AA] text-xl md:text-2xl font-medium leading-relaxed mb-3">
                AI systems engineered for brands that move ahead of the market.
              </p>
              <p className="text-[#666666] text-sm md:text-md uppercase tracking-wider font-semibold">
                Predict faster, automate smarter, and scale with precision.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <Link 
                href="/audit" 
                className="group relative w-full sm:w-auto px-9 py-4 bg-gradient-to-br from-[#E2C792] to-[#C5A059] text-[#050505] font-black rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative z-10 tracking-wide text-[15px]">Get an Audit</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#solutions" 
                className="group w-full sm:w-auto px-9 py-4 bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:bg-[#111] text-white font-semibold rounded-full transition-all duration-500 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span className="text-[15px] tracking-wide">View Architecture</span>
                <ChevronRight size={18} className="text-primary/70 group-hover:text-primary transition-colors group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Animated AI Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] lg:h-[700px] w-full hidden lg:block perspective-1000"
          >
            {/* Holographic Center Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-primary/5 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-primary/10 rounded-full animate-spin-reverse-slow pointer-events-none border-dashed"></div>
            
            {/* Ambient Golden Particles */}
            <motion.div 
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-primary blur-[1px]"
            />
            <motion.div 
              animate={{ y: [0, 30, 0], opacity: [0.1, 0.5, 0.1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-primary blur-[2px]"
            />
            
            {/* MAIN DASHBOARD WIDGET: Business Intelligence & Forecasting */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[460px] bg-[#070707]/85 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20 ring-1 ring-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="h-10 border-b border-white/5 bg-[#0A0A0A] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333] hover:bg-red-500 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333] hover:bg-amber-500 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333] hover:bg-green-500 transition-colors"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[9px] text-[#666] font-mono tracking-widest uppercase flex items-center justify-center gap-2">
                    <TrendingUp size={10} className="text-primary" /> Predictive Revenue Engine
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div>
                    <div className="text-[10px] uppercase text-[#666] font-bold tracking-widest mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span> Q4 Forecast
                    </div>
                    <div className="text-3xl font-light text-white flex items-baseline gap-1" style={{ fontFamily: "var(--font-clash)" }}>
                      $12.4<span className="text-lg text-primary">M</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#666] font-bold tracking-widest mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span> Conversion Uplift
                    </div>
                    <div className="text-3xl font-light text-white flex items-baseline gap-1" style={{ fontFamily: "var(--font-clash)" }}>
                      +28<span className="text-lg text-green-500">%</span>
                    </div>
                  </div>
                </div>
                
                {/* Live Animated Chart (Historical + Predictive Dotted) */}
                <div className="h-32 w-full relative z-10 mt-4">
                  <div className="absolute inset-0 flex justify-between items-end pb-1 px-1 text-[8px] text-[#444] font-mono">
                    <span>AUG</span><span>SEP</span><span>OCT</span><span className="text-primary/70">NOV (PRED)</span><span className="text-primary/70">DEC (PRED)</span>
                  </div>
                  <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                    {/* Grid lines */}
                    <path d="M0,20 L200,20 M0,40 L200,40 M0,60 L200,60" className="stroke-[#222] stroke-1" strokeDasharray="2 4" />
                    
                    {/* Historical Data Line */}
                    <motion.path 
                      d="M0,70 Q25,65 50,45 T100,50" 
                      fill="none"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    
                    {/* Predictive Future Line */}
                    <motion.path 
                      d="M100,50 T150,20 T200,5" 
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
                      style={{ filter: 'drop-shadow(0px 4px 8px rgba(197,160,89,0.4))' }}
                    />
                    
                    {/* Current Node */}
                    <motion.circle 
                      cx="100" cy="50" r="3" 
                      className="fill-[#0A0A0A] stroke-white stroke-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                    {/* Future Node */}
                    <motion.circle 
                      cx="200" cy="5" r="4" 
                      className="fill-primary stroke-none"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ delay: 3, duration: 2, repeat: Infinity }}
                      style={{ filter: 'drop-shadow(0px 0px 6px rgba(197,160,89,0.8))' }}
                    />

                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C5A059" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#E2C792" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
            
            {/* FLOATING WIDGET 1: Customer Segmentation (Top Left) */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -5, 0], rotate: [0, -1, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-10 -left-6 w-52 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 rounded-xl p-4 shadow-2xl z-30 ring-1 ring-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Users size={12} className="text-indigo-400" />
                  </div>
                  <div className="text-[9px] uppercase text-[#888] font-bold tracking-widest">Segmentation</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-white font-medium">VIP Buyers</span>
                    <span className="text-indigo-400">42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "42%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-indigo-500"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-white font-medium">Window Shoppers</span>
                    <span className="text-[#888]">35%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "35%" }} transition={{ duration: 1.5, delay: 0.7 }} className="h-full bg-[#555]"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-white font-medium">Churn Risk</span>
                    <span className="text-red-500">23%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "23%" }} transition={{ duration: 1.5, delay: 0.9 }} className="h-full bg-red-500"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING WIDGET 2: Churn Prediction (Top Right) */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 -right-8 w-48 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-red-500/10 rounded-xl p-4 shadow-2xl z-30 ring-1 ring-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <ShieldAlert size={12} className="text-red-500" />
                </div>
                <div className="text-[9px] uppercase text-[#888] font-bold tracking-widest">Churn Alert</div>
              </div>
              <div className="text-2xl font-light text-white mb-1">94.2<span className="text-xs text-[#666] tracking-wider uppercase ml-1">% Accuracy</span></div>
              <div className="text-[10px] text-red-400 mb-3 font-medium">High risk cohort identified</div>
              
              {/* Alert Graph */}
              <div className="flex items-end gap-1 h-8">
                {[30, 40, 35, 60, 85, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                    className={`flex-1 rounded-t-sm ${i >= 4 ? 'bg-red-500' : 'bg-[#333]'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* FLOATING WIDGET 3: AI Automation Nodes (Bottom Right) */}
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-28 -right-4 w-40 bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 rounded-xl p-4 shadow-xl z-10 ring-1 ring-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Network size={12} className="text-primary" />
                <div className="text-[9px] uppercase text-[#888] font-bold tracking-widest">Automation</div>
              </div>
              {/* Mini Node Graph */}
              <div className="relative h-16 w-full">
                <svg className="absolute inset-0 w-full h-full stroke-[#333] stroke-1">
                  <path d="M20,10 L70,30 L120,10" fill="none" />
                  <path d="M70,30 L70,60" fill="none" />
                  
                  {/* Animated data pulses */}
                  <motion.circle cx="20" cy="10" r="1.5" className="fill-primary"
                    animate={{ cx: [20, 70], cy: [10, 30], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  <motion.circle cx="120" cy="10" r="1.5" className="fill-primary"
                    animate={{ cx: [120, 70], cy: [10, 30], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                  <motion.circle cx="70" cy="30" r="1.5" className="fill-primary"
                    animate={{ cx: [70, 70], cy: [30, 60], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
                </svg>
                <div className="absolute top-1 left-3 w-3 h-3 bg-[#222] border border-[#444] rounded-full"></div>
                <div className="absolute top-1 right-3 w-3 h-3 bg-[#222] border border-[#444] rounded-full"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#222] border border-[#444] rounded-md"></div>
              </div>
            </motion.div>

            {/* FLOATING WIDGET 4: Rotating Analytics Label (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-2 w-64 bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-primary/20 rounded-xl p-5 shadow-[0_15px_40px_rgba(197,160,89,0.15)] z-30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <span className="animate-spin-slow absolute inline-flex h-full w-full rounded-full border border-primary/30 border-t-primary border-l-primary"></span>
                    <Activity size={14} className="text-primary" />
                  </div>
                  <div className="text-[10px] uppercase text-[#888] font-bold tracking-widest">Active Module</div>
                </div>
                <div className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[8px] font-bold uppercase rounded border border-green-500/20">Running</div>
              </div>
              
              <div className="h-7 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={labelIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-[16px] font-semibold text-white absolute inset-0 tracking-wide"
                  >
                    {rotatingLabels[labelIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-2 w-full bg-[#222] h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent w-1/2"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
