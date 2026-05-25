"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_SPRING = { type: "spring" as const, stiffness: 200, damping: 15 };

const steps = [
  {
    num: "01",
    title: "Audit & Integrity",
    desc: "We begin by auditing your current data stack to ensure high-fidelity inputs. No AI can fix broken data collection.",
    circleClass: "bg-white text-black",
  },
  {
    num: "02",
    title: "Custom Engineering",
    desc: "Our data scientists architect proprietary models specifically for your customer behavior patterns and vertical nuances.",
    circleClass: "bg-amber-500 text-black",
  },
  {
    num: "03",
    title: "Deployment & Scale",
    desc: "We integrate intelligence directly into your workflow, providing the training and support to turn insights into profit.",
    circleClass: "bg-white/10 text-white border border-white/20",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.25, ease: EASE },
  }),
};

export default function ProtocolSection() {
  return (
    <section id="methodology" className="section-padding bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.span
            className="inline-block text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6"
          >
            The Protocol
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            How Intelligence is Built.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Three phases from raw data to business dominance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:block absolute top-6 left-0 w-full h-px origin-left"
            style={{ background: "linear-gradient(90deg, rgba(197,160,89,0.4) 0%, rgba(197,160,89,0.15) 50%, rgba(255,255,255,0.05) 100%)" }}
          />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:hidden absolute top-0 left-6 w-px h-full origin-top"
            style={{ background: "linear-gradient(180deg, rgba(197,160,89,0.4) 0%, rgba(197,160,89,0.15) 50%, rgba(255,255,255,0.05) 100%)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-[#080808] p-8 md:p-0 group"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.25, ...EASE_SPRING }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-8 mx-auto md:mx-0 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] will-change-transform ${step.circleClass}`}
                >
                  {step.num}
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.25, ease: EASE }}
                  viewport={{ once: true }}
                  className="text-xl font-bold mb-4 text-white group-hover:text-gradient-gold transition-all duration-500"
                >
                  {step.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + idx * 0.25, ease: EASE }}
                  viewport={{ once: true }}
                  className="text-muted text-sm leading-relaxed max-w-sm mx-auto md:mx-0"
                >
                  {step.desc}
                </motion.p>

                <motion.div
                  className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-primary/40 to-transparent transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
