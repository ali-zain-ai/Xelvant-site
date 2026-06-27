"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
      className="border-t border-white/5 py-10 px-5 sm:px-6 lg:px-10"
      style={{ background: "#050505" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Top row: logo/intro + links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-transparent.png"
                alt="Xelvant"
                width={160}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              We turn e-commerce data into a clear plan for growth. Find hidden leaks, stop losing customers, and increase your bottom line.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8 pt-2">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: "var(--muted-foreground)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "#555" }}>
            © {currentYear} Xelvant. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "#555" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
