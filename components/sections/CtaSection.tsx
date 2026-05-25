"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CtaSection() {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">
          Ready to outperform?
        </h2>

        <p className="text-muted text-lg md:text-xl mb-12">
          Stop guessing. Start knowing. Schedule a high-level data audit with our executive team.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="inline-block"
        >
          <Link
            href="/audit"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-br from-primary to-primary-dark text-black font-black text-lg rounded-full shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] transition-shadow duration-500"
          >
            Book Your Audit
            <Calendar size={24} />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-muted/60 text-xs uppercase tracking-widest"
        >
          Limited to 2 new brand partners per month.
        </motion.p>
      </motion.div>
    </section>
  );
}
