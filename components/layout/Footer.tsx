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
      className="border-t border-white/5 pt-16 md:pt-20 pb-10 px-5 sm:px-6 lg:px-10"
      style={{ background: "#050505" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Grid: 1-col mobile → 2-col tablet → 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14 md:mb-20">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-transparent.png"
                alt="Xelvant Logo"
                width={200}
                height={60}
                className="w-auto object-contain"
                style={{ height: "40px" }}
              />
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              We turn your raw data into predictable revenue. Stop guessing, fix your revenue leaks, and scale your brand with absolute confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/xelvant"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: "#555" }}
              >
                <Globe size={20} />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="transition-colors duration-300"
                style={{ color: "#555" }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Intelligence */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white mb-5">
              Intelligence
            </h5>
            <ul className="flex flex-col gap-3">
              {["Churn Prediction", "Customer Segmentation", "Custom Dashboards", "LTV Modeling"].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="text-[13px] transition-colors duration-300 hover:text-[var(--primary)]"
                    style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white mb-5">
              Company
            </h5>
            <ul className="flex flex-col gap-3">
              {[
                { label: "How We Work", href: "/#how-it-works" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors duration-300 hover:text-[var(--primary)]"
                    style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white mb-5">
              Legal
            </h5>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors duration-300 hover:text-[var(--primary)]"
                    style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "#444" }}>
            © {currentYear} Xelvant. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#333" }}>
            Revenue Intelligence for Shopify &amp; DTC Brands
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
