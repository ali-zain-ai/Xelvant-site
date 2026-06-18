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

        {/* Top row: logo + links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              alt="Xelvant"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm transition-colors hover:text-white"
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
