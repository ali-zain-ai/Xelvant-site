import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xelvant | Custom AI Intelligence for E-commerce",
  description:
    "Custom AI systems built specifically for high-growth e-commerce brands. Predict churn, segment customers, and scale with precision using your own data.",
  keywords:
    "ecommerce AI, custom intelligence, churn prediction, ML automation, data science ecommerce",
  openGraph: {
    title: "Xelvant | Custom AI Intelligence for E-commerce",
    description:
      "Custom AI systems built specifically for high-growth e-commerce brands.",
    url: "https://xelvant.com",
    siteName: "Xelvant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelvant | Custom AI Intelligence for E-commerce",
    description:
      "Custom AI systems built specifically for high-growth e-commerce brands.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fontshare Fonts for Obsidian & Gold Theme */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@600,500,400&f[]=satoshi@700,500,400,300&display=swap" rel="stylesheet" />
        {/* Custom Xelvant Favicon (SVG) - Gold Theme */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23C5A059%22/><text y=%22.9em%22 x=%2250%%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-weight=%22bold%22 font-size=%2270%22 fill=%22%23050505%22>X</text></svg>"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xelvant Intelligence",
              url: "https://xelvant.com",
              description:
                "AI-powered e-commerce intelligence and automation company",
              foundingDate: "2026",
              areaServed: ["Pakistan", "United Arab Emirates"],
              serviceType: [
                "AI/ML Consulting",
                "E-Commerce Analytics",
                "Business Intelligence",
                "Automation",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background">
        {children}
      </body>
    </html>
  );
}

