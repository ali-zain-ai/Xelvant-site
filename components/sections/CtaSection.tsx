"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">
          Ready to outperform?
        </h2>
        
        <p className="text-muted text-lg md:text-xl mb-12">
          Stop guessing. Start knowing. Schedule a high-level data audit with our executive team.
        </p>
        
        <Link 
          href="/audit" 
          className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-br from-primary to-primary-dark text-black font-black text-lg rounded-full hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] transition-all transform hover:scale-105 active:scale-95"
        >
          Book Your Audit
          <Calendar size={24} />
        </Link>
        
        <p className="mt-8 text-muted/60 text-xs uppercase tracking-widest">
          Limited to 2 new brand partners per month.
        </p>
      </motion.div>
    </section>
  );
}
