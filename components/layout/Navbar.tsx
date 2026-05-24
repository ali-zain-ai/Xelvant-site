"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#solutions" },
    { name: "Architecture", href: "/#methodology" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <span className="text-xl font-bold tracking-widest uppercase text-white">
            {BRAND.name}
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/audit"
            className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-dark text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all transform hover:scale-105 active:scale-95 inline-block"
          >
            Get an Audit
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleNavLinkClick(e, link.href);
            }}
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          href="/audit"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-10 py-4 bg-gradient-to-br from-primary to-primary-dark text-black text-lg font-bold rounded-full hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all"
        >
          Get an Audit
        </Link>
      </div>
    </nav>
  );
}
