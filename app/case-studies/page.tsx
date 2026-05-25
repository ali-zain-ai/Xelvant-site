"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, TrendingUp, Activity, BarChart3 } from "lucide-react";
import Link from "next/link";

const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

const caseStudies = [
  {
    type: "Fashion E-Commerce Brand",
    results: [
      "28% increase in retention",
      "AI churn prediction implementation",
      "Customer segmentation optimization",
      "Automated reporting workflows"
    ],
    highlightMetric: "+28%",
    highlightLabel: "Retention Uplift",
    chartColor: "from-indigo-500/20 to-transparent",
    lineColor: "stroke-indigo-400"
  },
  {
    type: "Health & Wellness Store",
    results: [
      "34% operational efficiency improvement",
      "Predictive inventory insights",
      "Automated analytics dashboards",
      "AI workflow automation"
    ],
    highlightMetric: "+34%",
    highlightLabel: "Efficiency Gain",
    chartColor: "from-primary/20 to-transparent",
    lineColor: "stroke-primary"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#020202] min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-transparent -z-10 blur-[80px] md:blur-[120px] opacity-50 rounded-full -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025] mix-blend-overlay -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight mb-8 leading-[1.1]"
            >
              <span className="text-white">Real Intelligence. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2C792] to-[#C5A059]">
                Real Business Impact.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_CINEMATIC }}
              className="text-[#888888] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
            >
              See how AI-driven systems help brands automate, optimize, and scale smarter.
            </motion.p>
          </div>

          {/* Case Studies Container */}
          <div className="space-y-12 md:space-y-24 mb-24 md:mb-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-[#070707]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 lg:p-12 hover:bg-[#0a0a0a]/80 hover:border-primary/20 transition-all duration-700"
              >
                {/* Visual Dashboard Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-2xl" />
                  
                  {/* Abstract Dashboard Card */}
                  <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 ring-1 ring-white/5 group-hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-shadow duration-700">
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                      <div className="text-[10px] uppercase text-[#666] font-bold tracking-widest flex items-center gap-2">
                        <Activity size={12} className={study.lineColor.replace('stroke-', 'text-')} />
                        Performance Metrics
                      </div>
                      <div className="px-2 py-0.5 bg-[#111] rounded text-[9px] text-[#888] font-mono">Q4 DATA</div>
                    </div>
                    
                    {/* Big Metric */}
                    <div className="mb-8">
                      <div className="text-[11px] text-[#888] uppercase tracking-wider font-semibold mb-2">{study.highlightLabel}</div>
                      <div className="text-5xl font-light text-white tracking-tight flex items-baseline gap-2">
                        {study.highlightMetric}
                        <TrendingUp size={24} className={study.lineColor.replace('stroke-', 'text-')} />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-32 w-full relative">
                      <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                        <path d="M0,20 L200,20 M0,40 L200,40 M0,60 L200,60" className="stroke-[#222] stroke-1" strokeDasharray="2 4" />
                        <motion.path 
                          d="M0,70 Q50,60 100,40 T200,10" 
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className={study.lineColor}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: EASE_CINEMATIC }}
                        />
                        <motion.circle 
                          cx="200" cy="10" r="4" 
                          className={`fill-[#0A0A0A] stroke-2 ${study.lineColor}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                        />
                      </svg>
                      <div className={`absolute inset-0 bg-gradient-to-t ${study.chartColor} pointer-events-none opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 top-10 bg-[#111] border border-white/10 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 ${study.lineColor.replace('stroke-', 'text-')}`}>
                      <BarChart3 size={14} />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-[#666] font-bold">Status</div>
                      <div className="text-xs text-white font-medium">Optimized</div>
                    </div>
                  </motion.div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#111] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#888]">Client Profile</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight">
                    {study.type}
                  </h2>

                  <div className="space-y-4 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-white/5 border border-white/10 ${study.lineColor.replace('stroke-', 'text-')}`}>
                          <ArrowUpRight size={12} />
                        </div>
                        <p className="text-[#A1A1AA] text-[15px] leading-relaxed">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-bold text-primary hover:text-primary-light transition-colors group/btn">
                    Read Full Case Study
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Label */}
          <div className="text-center pb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/5 bg-[#050505]">
              <span className="text-xs text-[#666] font-medium tracking-wide">
                More case studies coming soon.
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
