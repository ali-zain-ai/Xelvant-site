import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Xelvant",
  description:
    "We help e-commerce brands automate operations, predict customer behavior, and make smarter business decisions using AI, machine learning, and data intelligence.",
  keywords:
    "AI agency, data science, machine learning, predictive analytics, business intelligence, e-commerce AI, churn prediction, customer segmentation, revenue forecasting, AI automation",
  openGraph: {
    title: "Xelvant",
    description:
      "Predictive analytics, machine learning, and intelligent automation for modern e-commerce brands.",
    url: "https://xelvant.com",
    siteName: "Xelvant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelvant | AI & Data Science Agency for E-Commerce Growth",
    description:
      "Predictive analytics, machine learning, and intelligent automation for modern e-commerce brands.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare Fonts for Obsidian & Gold Theme */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@600,500,400&f[]=satoshi@700,500,400,300&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xelvant",
              url: "https://xelvant.com",
              description:
                "AI & Data Science agency specializing in predictive analytics, machine learning, and business intelligence for e-commerce brands",
              foundingDate: "2026",
              areaServed: ["Pakistan", "United Arab Emirates", "Worldwide"],
              serviceType: [
                "AI & Data Science Consulting",
                "Machine Learning Solutions",
                "Predictive Analytics",
                "Business Intelligence",
                "E-Commerce AI Automation",
                "Customer Intelligence",
                "Revenue Forecasting",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

