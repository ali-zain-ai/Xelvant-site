/* ═══════════════════════════════════════════════
   XELVANT — Brand Constants & Content
   (Single Source of Truth for All Pages)
   ═══════════════════════════════════════════════ */

import type { ReactNode } from "react";

export const BRAND = {
  name: "Xelvant",
  tagline: "E-commerce Operational Intelligence",
  description: "Custom AI workflows, automation systems, and operational intelligence for Shopify, Amazon, and Daraz brands.",
  whatsappNumber: "923123456789", // Placeholder
  whatsappMessage: "Hi Xelvant, I'm interested in an operational audit for my store.",
  email: "ops@xelvant.ai",
  calendlyUrl: "https://calendly.com/xelvant",
};

export const NAVIGATION = [
  { name: "Problem",      href: "/#problem",       id: "problem" },
  { name: "How it works", href: "/#how-it-works",  id: "how-it-works" },
  { name: "Results",      href: "/#results",        id: "results" },
  { name: "Why Xelv",    href: "/#why-xelv",       id: "why-xelv" },
  { name: "FAQ",          href: "/#faq",            id: "faq" },
];

export const HERO_METRICS = [
  { label: "Implementation", value: "7 Days" },
  { label: "Systems", value: "Custom Built" },
  { label: "Support", value: "Ops-First" },
];

export const TRUST_INDICATORS = [
  "🇵🇰 Pakistan & UAE Specialized",
  "⚡ 7-Day Implementation",
  "🛠️ Custom-Built Systems",
  "🚫 No Monthly SaaS Dependency",
];

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
  delay: number;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Revenue Forecasting",
    description: "Know exactly what your revenue will look like next month based on actual customer buying patterns, not guesswork.",
    iconName: "LineChart",
    iconColor: "text-primary",
    delay: 0.1,
  },
  {
    title: "High-Value Customer Targeting",
    description: "Identify your most profitable buyers and understand exactly when and what they are most likely to buy next.",
    iconName: "Users",
    iconColor: "text-indigo-400",
    delay: 0.2,
  },
  {
    title: "Churn Prevention",
    description: "Identify which customers are about to leave for a competitor and automatically trigger actions to keep them.",
    iconName: "ShieldAlert",
    iconColor: "text-red-500",
    delay: 0.3,
  },
  {
    title: "Executive Dashboards",
    description: "See the exact health of your entire business in one place. Real-time numbers without the spreadsheets.",
    iconName: "BarChart3",
    iconColor: "text-primary",
    delay: 0.4,
  },
  {
    title: "Automated Operations",
    description: "Replace repetitive manual work with automated systems that run your business flawlessly 24/7.",
    iconName: "Network",
    iconColor: "text-primary",
    delay: 0.5,
  },
  {
    title: "Inventory Insights",
    description: "Always know exactly what to stock, when to restock, and how to avoid costly dead inventory.",
    iconName: "Zap",
    iconColor: "text-amber-400",
    delay: 0.6,
  },
];

export const SERVICE_FEATURES = [
  "Revenue-first approach",
  "Actionable insights",
  "Time-saving automation",
  "Scalable systems",
  "Clear ROI focus",
  "E-commerce specialization",
];

export interface CaseStudyItem {
  type: string;
  results: string[];
  highlightMetric: string;
  highlightLabel: string;
  chartColor: string;
  lineColor: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    type: "Fashion E-Commerce Brand",
    results: [
      "28% increase in retention",
      "AI churn prediction implementation",
      "Customer segmentation optimization",
      "Automated reporting workflows",
    ],
    highlightMetric: "+28%",
    highlightLabel: "Retention Uplift",
    chartColor: "from-indigo-500/20 to-transparent",
    lineColor: "stroke-indigo-400",
  },
  {
    type: "Health & Wellness Store",
    results: [
      "34% operational efficiency improvement",
      "Predictive inventory insights",
      "Automated analytics dashboards",
      "AI workflow automation",
    ],
    highlightMetric: "+34%",
    highlightLabel: "Efficiency Gain",
    chartColor: "from-primary/20 to-transparent",
    lineColor: "stroke-primary",
  },
];

export const TIMELINE = [
  {
    day: "Day 1-2",
    title: "Data Audit & Mapping",
    description: "We connect to your Shopify, Meta, and Google APIs to map the flow of your store data.",
  },
  {
    day: "Day 3-4",
    title: "Logic Development",
    description: "Developing the custom Python models and automation logic specific to your business rules.",
  },
  {
    day: "Day 5-6",
    title: "System Integration",
    description: "Deploying the intelligence hub and connecting WhatsApp/Email operational alerts.",
  },
  {
    day: "Day 7",
    title: "Operational Handover",
    description: "Full system walkthrough and training. No monthly SaaS dependency. You own the logic.",
  },
];

/* Founders — kept for future About/Team page */
export const FOUNDERS = [
  {
    name: "Aman Siddiqui",
    title: "AI/ML Engineer",
    role: "Technical Architecture",
    quote: "Most agencies give you a dashboard. We give you a system that makes decisions so you don't have to.",
    badges: ["Python", "PyTorch", "Data Pipelines"],
    image: "/founder_1_portrait_1778685041925.png",
  },
  {
    name: "Zain Ahmed",
    title: "Data Scientist",
    role: "Operational Intelligence",
    quote: "The value isn't in the data; it's in the delta between data and action. We bridge that gap.",
    badges: ["R", "SQL", "Predictive Modeling"],
    image: "", // Placeholder
  },
];

export const TRUST_TAGS = [
  "Select Intake Only",
  "No Monthly SaaS Dependency",
  "7-Day Deployment Cycle",
];
