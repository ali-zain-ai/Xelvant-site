"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_SPRING = { type: "spring" as const, stiffness: 300, damping: 30 };

const navLinks = [
  { name: "Home", href: "/", id: "home" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Case Studies", href: "/case-studies", id: "case-studies" },
  { name: "Contact", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: 0.1 + i * 0.05, ease: EASE, duration: 0.6 }
    }),
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 will-change-transform ${
        isScrolled
          ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavLinkClick(e, "/")}
          className="flex items-center gap-3 group relative z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative flex items-center"
          >
            <Image 
              src="/logo.png" 
              alt="Xelvant Logo" 
              width={140} 
              height={40} 
              className="w-auto h-6 md:h-8 object-contain" 
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav - Premium Pill */}
        <div className="hidden md:flex items-center gap-2 bg-[#0A0A0A]/40 border border-white/[0.04] rounded-full px-3 py-1.5 backdrop-blur-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 text-[13px] tracking-wide font-normal transition-colors duration-500 rounded-full group"
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    color: isActive ? "#C5A059" : isHovered ? "#ffffff" : "#9CA3AF",
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {link.name}
                </motion.span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary/[0.08] border border-primary/[0.15]"
                    transition={EASE_SPRING}
                  />
                )}

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/[0.03]"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: isHovered && !isActive ? 1 : 0,
                    scale: isHovered && !isActive ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                />

                {/* Bottom line on hover */}
                <motion.div
                  className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scaleX: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA removed as requested */}

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, ease: EASE, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavLinkClick(e, link.href);
                    }}
                    className={`text-3xl font-extrabold tracking-tight transition-colors duration-500 ${
                      isActive ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: EASE, duration: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-12 py-4 bg-primary text-black text-lg font-black rounded-full hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transition-all active:scale-95"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
