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
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "80px" }} className="grid-cols-2 md:grid-cols-4">

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "28px" }}>
              <Image
                src="/logo-transparent.png"
                alt="Xelvant Logo"
                width={200}
                height={60}
                className="w-auto object-contain"
                style={{ height: "48px" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#A0A0A0",
                lineHeight: 1.7,
                maxWidth: "280px",
                marginBottom: "28px",
              }}
            >
              We turn your raw data into predictable revenue. Stop guessing, fix your revenue leaks, and scale your brand with absolute confidence.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://linkedin.com/company/xelvant"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#555", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E0B84D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <Globe size={20} />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                style={{ color: "#555", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E0B84D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Intelligence */}
          <div>
            <h5
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Intelligence
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Churn Prediction", "Customer Segmentation", "Custom Dashboards", "LTV Modeling"].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "#A0A0A0", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E0B84D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Company
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "How We Work", href: "/#how-it-works" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "#A0A0A0", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E0B84D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Legal
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "#A0A0A0", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E0B84D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "12px",
              color: "#444",
              margin: 0,
            }}
          >
            © {currentYear} Xelvant. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "12px",
              color: "#333",
              margin: 0,
            }}
          >
            Revenue Intelligence for Shopify & DTC Brands
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
