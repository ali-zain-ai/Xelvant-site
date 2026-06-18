"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAVIGATION } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? "bg-[#09090b] border-white/5" : "bg-[#09090b] border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={(e) => handleClick(e, "/")} className="flex items-center gap-2.5">
            <Image
              src="/xelNOBG.jpeg"
              alt="Xelvant Logo"
              width={220}
              height={56}
              className="h-14 w-auto object-contain"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop nav — gap-9, text-sm, muted */}
          <nav className="hidden md:flex items-center gap-9 text-sm"
            style={{ color: "var(--muted-foreground)" }}>
            {NAVIGATION.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA — rounded-full, bg-primary */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              Book a Revenue Audit
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(9,9,11,0.97)", backdropFilter: "blur(20px)" }}
          >
            {NAVIGATION.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.07, ease: EASE, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-4xl text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Book a Revenue Audit
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
