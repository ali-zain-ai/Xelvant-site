import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import PageLoader from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "Xelvant | Find the hidden profit inside your e-commerce business",
  description: "Xelvant helps e-commerce brands uncover churn, weak cohorts, and missed repeat purchases, then turns it into a simple action plan that increases profit. Book a Revenue Audit.",
  keywords: "e-commerce analytics, revenue intelligence, DTC revenue optimization, churn prediction, customer LTV, revenue audit",
  openGraph: {
    title: "Xelvant | Find the hidden profit inside your e-commerce business",
    description: "We do the analysis and tell you what to fix. A simple, ranked plan to grow profit for e-commerce and DTC brands.",
    url: "https://xelvant.dev",
    siteName: "Xelvant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelvant | Your Revenue Intelligence Partner",
    description: "Xelvant finds the hidden revenue leaks costing your e-commerce business thousands.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xelvant",
              url: "https://xelvant.dev",
              description: "E-commerce revenue intelligence for online brands.",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/*
          Static overlay injected directly into HTML — renders BEFORE any JS loads.
          This prevents the logo/navbar flash that occurs during React hydration.
          The PageLoader component removes this overlay once the app is ready.
        */}
        <div
          id="page-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            background: "#09090b",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            transition: "opacity 0.5s ease",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-transparent.png"
            alt="Xelvant"
            style={{
              height: "72px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 24px rgba(238,188,74,0.5))",
              animation: "xv-pulse 2s ease-in-out infinite",
            }}
          />
          {/* Progress bar — pure CSS animation, no JS needed */}
          <div
            style={{
              width: "160px",
              height: "3px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              id="page-overlay-bar"
              style={{
                height: "100%",
                width: "100%",
                background: "#eebc4a",
                borderRadius: "2px",
                transformOrigin: "left center",
                animation: "xv-bar 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            />
          </div>
          <style>{`
            @keyframes xv-pulse {
              0%, 100% { opacity: 0.85; transform: scale(1); }
              50%       { opacity: 1;    transform: scale(1.04); }
            }
            @keyframes xv-bar {
              from { transform: scaleX(0); }
              to   { transform: scaleX(1); }
            }
          `}</style>
        </div>

        {/* NOTE: Static overlay above is intentionally rendered before JS loads */}

        <PageLoader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
