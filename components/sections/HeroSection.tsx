"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-subtle bg-[#111] mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse-dot"></span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#F9F1E0]">
            Intelligent E-commerce Engine
          </span>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
        >
          <span className="block text-white">Intelligence Beyond</span>
          <span className="text-gradient-gold italic">Standard Analytics.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 leading-relaxed font-light"
        >
          Custom AI systems built specifically for high-growth e-commerce brands. Predict churn, segment customers, and scale with precision using your own data.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/audit" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            Get an Audit
            <ArrowRight size={20} />
          </Link>
          <Link 
            href="#solutions" 
            className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:border-white/50 text-white font-bold rounded-full transition-all flex items-center justify-center"
          >
            View Architecture
          </Link>
        </motion.div>

        {/* Abstract Data Visualization Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full hidden md:block animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-700/10 blur-[100px] rounded-full hidden md:block animate-pulse"></div>
          
          <div className="relative bg-[#0A0A0A] border-gold-subtle rounded-2xl overflow-hidden gold-glow text-left group">
            {/* Terminal Header */}
            <div className="h-12 bg-[#111] border-b border-white/5 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50 hover:bg-amber-500 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 cursor-pointer transition-colors"></div>
              <div className="ml-4 text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center gap-2">
                Xelvant Intelligence Terminal — v2.4.0
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse-dot"></span>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Metric Box 1 */}
                <div className="bg-[#111] rounded-xl p-6 border border-white/5 relative overflow-hidden">
                  <div className="text-[10px] uppercase text-gray-500 mb-2 font-bold tracking-widest relative z-10">Churn Probability</div>
                  <div className="text-3xl font-bold text-gradient-gold relative z-10">-24.8%</div>
                  <div className="mt-4 h-16 flex items-end gap-1 relative z-10">
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} className="flex-1 bg-amber-500/20 rounded-t-sm"></motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} transition={{ delay: 0.1 }} className="flex-1 bg-amber-500/20 rounded-t-sm"></motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '45%' }} transition={{ delay: 0.2 }} className="flex-1 bg-amber-500/40 rounded-t-sm"></motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} transition={{ delay: 0.3 }} className="flex-1 bg-amber-500/30 rounded-t-sm"></motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '30%' }} transition={{ delay: 0.4 }} className="flex-1 bg-amber-500/60 rounded-t-sm"></motion.div>
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '15%' }} transition={{ delay: 0.5 }} className="flex-1 bg-amber-500 rounded-t-sm"></motion.div>
                  </div>
                  {/* Subtle hover effect on box */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Metric Box 2 (Chart) */}
                <div className="bg-[#111] rounded-xl p-6 border border-white/5 md:col-span-2 relative overflow-hidden">
                  <div className="flex justify-between mb-4 relative z-10">
                    <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">LTV Projection by Segment</div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span className="text-[10px] text-gray-500 font-bold tracking-widest">VIP</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                        <span className="text-[10px] text-gray-500 font-bold tracking-widest">RETAIL</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-24 relative z-10">
                    <svg viewBox="0 0 400 100" className="w-full h-full stroke-amber-500 fill-none stroke-2 overflow-visible">
                      <motion.path 
                        d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,10" 
                        className="opacity-80" 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <circle cx="300" cy="20" r="4" className="fill-amber-500 animate-pulse" />
                    </svg>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 }}
                      className="absolute top-2 right-1/4 bg-white text-black text-[10px] px-2 py-1 rounded font-bold"
                    >
                      +312% Growth
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20 group hidden md:flex"
        onClick={() => {
          document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-primary/70 font-bold group-hover:text-primary transition-colors">Scroll to Explore</span>
        <svg className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7m0 0l-7-7m7 7V6" />
        </svg>
      </motion.div>
    </section>
  );
}
