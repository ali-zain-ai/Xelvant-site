"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Clock, Shield, Workflow, Target } from "lucide-react";
import { useState } from "react";

const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

const trustItems = [
  { icon: <Clock size={16} />, title: "Response within 24 hours" },
  { icon: <Workflow size={16} />, title: "Tailored AI solutions" },
  { icon: <Shield size={16} />, title: "Enterprise-focused approach" },
  { icon: <Target size={16} />, title: "Modern e-commerce expertise" }
];

export default function ContactPage() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const InputWrapper = ({ children, id, label }: { children: React.ReactNode, id: string, label: string }) => {
    const active = isFocused === id;
    return (
      <div className="relative mb-6">
        <label 
          htmlFor={id} 
          className={`block text-[11px] uppercase tracking-widest font-bold mb-2 transition-colors duration-300 ${active ? "text-primary" : "text-[#888]"}`}
        >
          {label}
        </label>
        <div className={`relative rounded-xl overflow-hidden transition-all duration-500 ${active ? "bg-[#111]" : "bg-[#0A0A0A]"}`}>
          <div className={`absolute inset-0 border rounded-xl pointer-events-none transition-colors duration-500 ${active ? "border-primary/40" : "border-white/10"}`} />
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#020202] min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-40 pb-20 overflow-hidden relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent -z-10 blur-[120px] opacity-60 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025] mix-blend-overlay -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Text & Trust */}
            <div className="lg:col-span-2 pt-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1]"
              >
                <span className="text-white block">Let’s Build</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2C792] to-[#C5A059]">
                  Smarter Systems.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_CINEMATIC }}
                className="text-[#888888] text-lg font-normal leading-relaxed mb-16"
              >
                Tell us about your business goals and discover how AI intelligence can optimize growth, automation, and decision-making.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE_CINEMATIC }}
                className="space-y-6"
              >
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#555] mb-4">
                  The Xelvant Standard
                </div>
                {trustItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                      {item.icon}
                    </div>
                    <span className="text-[#DDD] text-[15px] font-medium tracking-wide">{item.title}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-3 relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE_CINEMATIC }}
                className="relative bg-[#070707]/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none opacity-50" />
                
                <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputWrapper id="name" label="Name">
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444]"
                        placeholder="Your Name"
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </InputWrapper>
                    
                    <InputWrapper id="email" label="Email">
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444]"
                        placeholder="you@company.com"
                        onFocus={() => setIsFocused('email')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </InputWrapper>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputWrapper id="interest" label="Interest">
                      <input 
                        type="text" 
                        id="interest"
                        className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444]"
                        placeholder="e.g. Predictive Analytics, AI Automation..."
                        onFocus={() => setIsFocused('interest')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </InputWrapper>

                    <InputWrapper id="budget" label="Budget">
                      <input 
                        type="text" 
                        id="budget"
                        className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444]"
                        placeholder="e.g. $5k - $10k"
                        onFocus={() => setIsFocused('budget')}
                        onBlur={() => setIsFocused(null)}
                      />
                    </InputWrapper>
                  </div>

                  <InputWrapper id="problem" label="Problem">
                    <input 
                      type="text" 
                      id="problem"
                      className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444]"
                      placeholder="What is the main challenge you are facing right now?"
                      onFocus={() => setIsFocused('problem')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </InputWrapper>

                  <InputWrapper id="message" label="Message">
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full bg-transparent px-5 py-4 text-white text-[15px] outline-none placeholder-[#444] resize-none"
                      placeholder="Tell us more about your current architecture and goals..."
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                    />
                  </InputWrapper>

                  <button 
                    type="button"
                    className="group relative w-full px-8 py-4 bg-gradient-to-br from-[#E2C792] to-[#C5A059] text-[#050505] font-black rounded-xl overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] active:scale-[0.98] mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <span className="relative z-10 tracking-wide text-[15px] flex items-center justify-center gap-2">
                      Request Strategy Call
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
