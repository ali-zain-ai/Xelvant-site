"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LineChart, Users, ShieldAlert, BarChart3, Network, Zap, CheckCircle2 } from "lucide-react";
import { SERVICES, SERVICE_FEATURES } from "@/lib/constants";
import type { ReactNode } from "react";

const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

/* Map icon names from constants to actual Lucide components */
const iconMap: Record<string, ReactNode> = {
  LineChart: <LineChart size={24} className="text-primary" />,
  Users: <Users size={24} className="text-indigo-400" />,
  ShieldAlert: <ShieldAlert size={24} className="text-red-500" />,
  BarChart3: <BarChart3 size={24} className="text-primary" />,
  Network: <Network size={24} className="text-primary" />,
  Zap: <Zap size={24} className="text-amber-400" />,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#020202] min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent -z-10 blur-[80px] md:blur-[120px] opacity-60 rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025] mix-blend-overlay -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-[#0A0A0A]/50 backdrop-blur-xl mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">
                Advanced Capabilities — AI & Data Science
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_CINEMATIC }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight mb-8 leading-[1.1]"
            >
              <span className="text-white">AI & Data Science For </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2C792] to-[#C5A059]">
                Modern E-Commerce.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_CINEMATIC }}
              className="text-[#888888] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Helping brands leverage machine learning, predictive analytics, and intelligent automation to drive measurable growth.
            </motion.p>
          </div>

          {/* Services Grid — driven by constants */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 md:mb-32">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: service.delay, ease: EASE_CINEMATIC }}
                className="group relative bg-[#070707]/80 backdrop-blur-2xl border border-white/5 hover:border-primary/30 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="w-14 h-14 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {iconMap[service.iconName]}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">{service.title}</h3>
                
                <p className="text-[#888] text-[15px] leading-relaxed relative z-10 group-hover:text-[#A1A1AA] transition-colors duration-500">
                  {service.description}
                </p>

                {/* Animated Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
              </motion.div>
            ))}
          </div>

          {/* Why Xelvant Section — features driven by constants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
            className="relative bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/5 rounded-3xl p-10 md:p-16 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Why Xelvant?</h2>
                <p className="text-[#888] text-lg leading-relaxed mb-8">
                  We don't build generic software. We engineer proprietary intelligence systems designed to give e-commerce brands an unfair advantage in the market. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICE_FEATURES.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-[#DDD] text-[15px] tracking-wide">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Premium Dashboard Abstract Visual */}
              <div className="relative h-[300px] bg-[#020202] border border-white/5 rounded-2xl shadow-2xl p-6 overflow-hidden ring-1 ring-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full" />
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="w-20 h-2 bg-[#222] rounded-full" />
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                      </div>
                      <div className="flex-1 h-2 bg-[#111] rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary/40 to-primary/80 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${100 - i * 20}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.2, ease: EASE_CINEMATIC }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Connecting lines abstract */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path 
                    d="M 10 50 Q 50 10 90 50" 
                    fill="none" 
                    stroke="#C5A059" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: EASE_CINEMATIC }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
