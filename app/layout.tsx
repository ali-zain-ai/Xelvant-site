import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
