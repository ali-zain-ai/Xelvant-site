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
  { name: "Home", href: "/", id: "home" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Case Studies", href: "/case-studies", id: "case-studies" },
  { name: "Contact", href: "/contact", id: "contact" },
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
    title: "Predictive Analytics",
    description: "Use AI-powered forecasting models to predict trends, customer behavior, and future business performance.",
    iconName: "LineChart",
    iconColor: "text-primary",
    delay: 0.1,
  },
  {
    title: "Customer Segmentation",
    description: "Identify high-value customer groups and optimize targeting using intelligent segmentation systems.",
    iconName: "Users",
    iconColor: "text-indigo-400",
    delay: 0.2,
  },
  {
    title: "Churn Prediction & Retention",
    description: "Detect customer churn risks early and improve retention using predictive AI systems.",
    iconName: "ShieldAlert",
    iconColor: "text-red-500",
    delay: 0.3,
  },
  {
    title: "Business Intelligence",
    description: "Transform raw business data into actionable insights and decision-making systems.",
    iconName: "BarChart3",
    iconColor: "text-primary",
    delay: 0.4,
  },
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive business operations using intelligent AI-powered workflows.",
    iconName: "Network",
    iconColor: "text-primary",
    delay: 0.5,
  },
  {
    title: "Operational Intelligence",
    description: "Monitor and optimize operations using real-time analytics and automation systems.",
    iconName: "Zap",
    iconColor: "text-amber-400",
    delay: 0.6,
  },
];

export const SERVICE_FEATURES = [
  "AI-first approach",
  "Data-driven systems",
  "Modern automation expertise",
  "Scalable solutions",
  "Enterprise-grade thinking",
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
    description: "Full system walkthrough and training. No monthly SaaS dependency—you own the logic.",
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
