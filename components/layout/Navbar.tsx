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
  const [activeSection, setActiveSection] = useState("home");

  // Handle Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ["home", "solutions", "proof", "contact"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top 200px of the viewport
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Services", href: "/#solutions", id: "solutions" },
    { name: "Case Studies", href: "/#proof", id: "proof" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link 
          href="/" 
          onClick={(e) => handleNavLinkClick(e, "/#home", "home")}
          className="flex items-center gap-3 group relative z-50"
        >
          <span className="text-xl font-bold tracking-widest uppercase text-white group-hover:text-primary transition-colors duration-500">
            {BRAND.name}
          </span>
        </Link>

        {/* DESKTOP LINKS - Premium Pill Navbar */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href, link.id)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-500 rounded-full group ${
                  isActive ? "text-primary bg-primary/10" : "text-muted hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Subtle gold glow on hover */}
                <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-0" />
                <div className="absolute inset-x-4 -bottom-0.5 h-px bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 shadow-[0_0_8px_rgba(197,160,89,0.5)] opacity-0 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:block group">
          <Link
            href="/audit"
            className="relative px-7 py-2.5 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-primary/30 text-white text-sm font-bold rounded-full overflow-hidden inline-block transition-all duration-500 shadow-[0_0_15px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:border-primary"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Get an Audit</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white relative z-50 p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleNavLinkClick(e, link.href, link.id);
              }}
              className={`text-3xl font-extrabold tracking-tight transition-all duration-500 hover:scale-105 ${
                isActive ? "text-primary" : "text-white hover:text-primary/80"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          );
        })}
        
        <Link
          href="/audit"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-12 py-4 bg-primary text-black text-lg font-black rounded-full hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-all active:scale-95"
        >
          Get an Audit
        </Link>
      </div>
    </nav>
  );
}
