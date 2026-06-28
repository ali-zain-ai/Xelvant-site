import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Patrick_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xelvant | E-Commerce Intelligence",
  description: "We turn e-commerce data into a clear plan for growth. Find hidden leaks, stop losing customers, and increase your bottom line.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${plusJakartaSans.variable} ${patrickHand.variable}`}>
        {children}
      </body>
    </html>
  );
}
