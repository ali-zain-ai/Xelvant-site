"use client";

import { UserMinus, Users, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const solutions = [
  {
    title: "Predictive Churn Detection",
    description: "Identify high-risk customers before they leave. Our models predict exit intent with up to 94% accuracy, allowing for preemptive intervention.",
    icon: <UserMinus className="w-6 h-6" />,
    tag: "Precision Logic",
    translateClass: "md:translate-y-0",
  },
  {
    title: "Hyper-Segmentation",
    description: "Move beyond RFM. We build multi-dimensional segments based on behavioral triggers, browsing velocity, and predictive lifetime value.",
    icon: <Users className="w-6 h-6" />,
    tag: "Dynamic Clusters",
    translateClass: "md:-translate-y-8",
  },
  {
    title: "BI Command Centers",
    description: "Stop hunting for data. We build proprietary dashboards that serve your executive team with the exact KPIs needed to make 8-figure decisions.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    tag: "Real-time Intelligence",
    translateClass: "md:translate-y-0",
  },
];

export default function ServicesSection() {
  return (
    <section id="solutions" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
              Custom systems,<br />not generic tools.
            </h2>
            <p className="text-muted text-lg">
              Off-the-shelf software gives you averages. Xelvant gives you competitive advantages built on your unique data architecture.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            viewport={{ once: true, margin: "-100px" }}
            className="pb-4"
          >
            <Link href="#methodology" className="text-primary font-bold border-b border-primary/20 pb-1 hover:border-primary transition-all duration-300">
              Explore our architecture
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              viewport={{ once: true, margin: "-100px" }}
              className={`group p-8 bg-surface border border-white/5 rounded-3xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] will-change-transform ${item.translateClass}`}
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-transform duration-500 group-hover:scale-110 will-change-transform">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>

              <p className="text-muted leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
