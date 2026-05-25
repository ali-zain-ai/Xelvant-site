"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
      className="pt-20 pb-10 border-t border-white/5 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3 mb-8"
            >
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-transparent.png" 
                  alt="Xelvant Logo" 
                  width={240} 
                  height={80} 
                  className="w-auto h-14 md:h-16 object-contain" 
                />
              </Link>
            </motion.div>
            <p className="text-muted text-sm max-w-xs mb-8 leading-relaxed">
              AI & Data Science agency helping e-commerce brands grow through predictive analytics, machine learning, and intelligent automation.
            </p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/company/xelvant" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors duration-300">
                <Globe size={24} />
              </a>
              <a href={`mailto:${BRAND.email}`} className="text-muted hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Intelligence</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/services" className="hover:text-primary transition-colors duration-300">Churn Prediction</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-300">Segmentation</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-300">Custom Dashboards</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-300">LTV Growth</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Company</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/#methodology" className="hover:text-primary transition-colors duration-300">Methodology</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Support</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5"
        >
          <div className="text-muted text-[10px] uppercase tracking-widest font-bold mb-4 md:mb-0">
            &copy; {currentYear} XELVANT INTELLIGENCE AGENCY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
