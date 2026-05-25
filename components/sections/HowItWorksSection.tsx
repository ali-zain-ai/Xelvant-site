"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative section-padding bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-24"
        >
          <span className="text-xs font-mono text-purple uppercase tracking-[0.2em]">Operational Deployment</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-text mt-4 mb-6">
            From Raw Data to Intelligence in <span className="gradient-text">7 Days</span>
          </h2>
          <p className="text-muted text-lg font-satoshi max-w-2xl mx-auto leading-relaxed">
            A structured, engineering-led implementation process designed for speed and technical clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIMELINE.map((step, i) => (
            <motion.div
              key={step.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="relative group"
            >
              <div className="glass-card p-10 h-full flex flex-col justify-between border-border/5 transition-all duration-500 group-hover:border-primary/20">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-purple font-bold tracking-widest uppercase">
                      {step.day}
                    </span>
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-purple/20 group-hover:bg-purple/60 transition-colors duration-500"
                    />
                  </div>

                  <h3 className="font-clash font-semibold text-xl text-text tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-muted text-sm font-satoshi leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/5">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green" />
                    <span className="text-[10px] text-muted/60 font-mono uppercase tracking-widest">
                      Task Verified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="mt-20 p-8 rounded-2xl border border-border/10 bg-navy/20 text-center"
        >
          <p className="text-muted font-satoshi text-sm max-w-3xl mx-auto leading-relaxed">
            <span className="text-text font-semibold">Important:</span> This is not a rented SaaS platform. On Day 7, we hand over the custom-built logic and system architecture to you. You maintain 100% ownership of your data and intelligence infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
