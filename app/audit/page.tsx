"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  Calendar, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Server,
  ArrowRight,
  Sparkles,
  Database,
  Search,
  Check,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Industry-specific recommendations mapping
const RECOMMENDATIONS = {
  fashion: {
    title: "Fashion & Apparel Pipeline Audit",
    score: 64,
    vulnerabilities: [
      {
        tag: "Retention Gap",
        title: "Cohort Churn Inefficiency",
        desc: "Significant customer drop-off detected after 2nd seasonal purchase. Lack of real-time prediction model limits reactivation campaigns.",
        metric: "$145K+ Recoverable",
      },
      {
        tag: "Marketing Silo",
        title: "Klaviyo Feed Delay",
        desc: "Engagement signals lag by 24h. Post-purchase transactional flows do not dynamically adjust to immediate behavior changes.",
        metric: "80ms Latency Impact",
      },
      {
        tag: "Ad Efficiency",
        title: "Unoptimized LTV Scaling",
        desc: "Facebook pixel targeting optimization relies on immediate conversions rather than high LTV lifetime prediction vectors.",
        metric: "25% Budget Waste",
      }
    ],
    summary: "Your fashion brand has high transaction frequency, but retention cycles are unmodeled. Custom churn neural networks would recover approximately 14% of lost revenue in active cohorts."
  },
  beauty: {
    title: "Health & Beauty Subscription Audit",
    score: 58,
    vulnerabilities: [
      {
        tag: "Churn Risk",
        title: "Subscription Attrition Lag",
        desc: "Refill cycles are assumed static (30 days). No predictive system detects drop-offs based on usage signals before cancelations occur.",
        metric: "$198K+ Recoverable",
      },
      {
        tag: "Recommender",
        title: "Static Cross-Sell Logic",
        desc: "Product bundles on Shopify checkout are based on hardcoded rules, failing to personalise recommendations using customer historical data.",
        metric: "12% AOV Lift Missed",
      },
      {
        tag: "Integration",
        title: "Meta Conversions API Lag",
        desc: "Web and server event mismatched rates exceed 18%, reducing lookalike quality in highly competitive beauty verticals.",
        metric: "High Mismatch",
      }
    ],
    summary: "Beauty buyers demonstrate high brand loyalty potential, but static subscriptions lead to unnecessary churn. Event-driven predictive loops can stabilize replenishment cycles."
  },
  electronics: {
    title: "Consumer Electronics Pipeline Audit",
    score: 52,
    vulnerabilities: [
      {
        tag: "Buying Cycle",
        title: "Decision Period Drop-off",
        desc: "Average 45-day high-consideration cycle is unsupported by predictive retargeting. No score-based triggers react to mid-funnel stalls.",
        metric: "$320K+ Recoverable",
      },
      {
        tag: "Data Ingestion",
        title: "Disconnected CRM & Analytics",
        desc: "Post-purchase warranty registrations and support tickets are isolated from active pre-purchase marketing platforms.",
        metric: "Complete Data Silo",
      },
      {
        tag: "Pricing",
        title: "Delayed Promotion Signaling",
        desc: "Price drops and stock updates sync overnight to feed channels, causing wasted spend on out-of-stock electronics assets.",
        metric: "15% Spend Overhead",
      }
    ],
    summary: "Electronics purchases have long Consideration Cycles. Linking post-purchase support profiles with marketing intelligence enables surgical retargeting of return buyers."
  },
  home: {
    title: "Home Decor & Furnishing Audit",
    score: 61,
    vulnerabilities: [
      {
        tag: "LTV Optimization",
        title: "Sparsity of Repeat Purchase Model",
        desc: "Customer profiles are treated as one-off buyers. Secondary accessory cross-sell flows are not mapped to room-category affinity models.",
        metric: "$110K+ Recoverable",
      },
      {
        tag: "Sync Delay",
        title: "ERP & Shopify Inventory Lag",
        desc: "Stock levels of heavy furniture items sync slowly from warehouse database systems, causing high cart abandonment due to delivery times.",
        metric: "2.4h Latency",
      },
      {
        tag: "Attribution",
        title: "Fragmented Multi-touch Data",
        desc: "High-ticket sales touchpoints are poorly tracked between web browse, showroom consultation, and final checkout.",
        metric: "Low Attribution Trust",
      }
    ],
    summary: "Home and decor spaces suffer from massive purchase gaps. Affordable accessories must be strategically modeled and recommended to preserve brand salience."
  },
  other: {
    title: "Custom Data Infrastructure Audit",
    score: 63,
    vulnerabilities: [
      {
        tag: "System Friction",
        title: "Unstructured Data Warehouse",
        desc: "Operational customer details exist in raw logs but lack organized feature store pipelines for automated ML modeling.",
        metric: "$120K+ Recoverable",
      },
      {
        tag: "Synchronization",
        title: "Batch Sync Bottlenecks",
        desc: "Data updates run once a day in massive nightly cron jobs instead of streaming real-time event updates.",
        metric: "24h Latency Gap",
      },
      {
        tag: "Decision Loop",
        title: "No Automated Action Triggers",
        desc: "Insights are reviewed manually in BI dashboards rather than piping predictions directly back into live platforms.",
        metric: "Manual Decision Delay",
      }
    ],
    summary: "Standard batch pipelines create a severe information lag. Converting raw event databases into real-time feature queues unlocks active automation capabilities."
  }
};

const AVAILABLE_PLATFORMS = [
  "Shopify Plus",
  "Google Analytics 4",
  "Klaviyo",
  "Meta Ads",
  "NetSuite",
  "Amazon",
  "Salesforce",
  "BigQuery"
];

// Helper to generate next 5 business days
const getBusinessDays = () => {
  const days = [];
  let current = new Date();
  
  // Start looking from tomorrow
  current.setDate(current.getDate() + 1);

  while (days.length < 5) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday or Saturday
      days.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
};

export default function AuditPage() {
  // Wizard state: 1 = Form, 2 = Scanning, 3 = Scorecard
  const [step, setStep] = useState(1);
  
  // Form fields
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [revenue, setRevenue] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [painPoints, setPainPoints] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 2: Scanner state
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [showRevealButton, setShowRevealButton] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Step 3: Booking state
  const [businessDays, setBusinessDays] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    setBusinessDays(getBusinessDays());
  }, []);

  // Platform multi-select toggle
  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    );
  };

  // Form submit handler
  const handleInitializeAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!industry) newErrors.industry = "Please select an industry vertical";
    if (!revenue) newErrors.revenue = "Please select your revenue range";
    if (!painPoints.trim()) newErrors.painPoints = "Please explain your core data challenges";
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid professional email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Reset errors, proceed to Step 2
    setErrors({});
    setStep(2);
    startScanningSimulation();
  };

  // Step 2 simulation
  const startScanningSimulation = () => {
    setScanProgress(0);
    setScanLogs([]);
    setShowRevealButton(false);

    const logTemplates = [
      { time: 0, text: "🛰️ ESTABLISHING SECURE 256-BIT SHIELD LINK TO CLIENT SCHEMAS..." },
      { time: 600, text: "🔑 SHIELD LINK SUCCESSFUL. TUNNEL SECURED VIA TLS 1.3 PROTOCOL." },
      { time: 1200, text: `🔍 METADATA HARVESTING INITIALIZED FOR: ${companyName.toUpperCase()}...` },
      { time: 1800, text: `📂 DETECTED ACTIVE PLATFORMS: [ ${selectedPlatforms.length > 0 ? selectedPlatforms.join(" | ").toUpperCase() : "NONE SPECIFIED"} ]` },
      { time: 2400, text: "⚡ INGESTING SCHEMA SCHEDULERS AND PIPELINE FLOW DIAGRAMS..." },
      { time: 3000, text: "🔮 SIMULATING CUSTOM NEURAL NETWORKS (CHURN & RETENTION OPTIMIZATION)..." },
      { time: 3700, text: "📊 DETECTING PIPELINE CONGESTION AND SYNC OVERHEAD LATENCY..." },
      { time: 4300, text: "✓ CRITICAL SILOS AND CONVERSION BOTTLENECKS MAPPED SUCCESSFUL." },
      { time: 4800, text: "📄 AUDIT COMPLETED. COMPILING PERSONALIZED INTELLIGENCE REPORT..." }
    ];

    // Log printer
    logTemplates.forEach((log) => {
      setTimeout(() => {
        setScanLogs(prev => [...prev, log.text]);
      }, log.time);
    });

    // Progress counter
    const duration = 5200; // total animation time
    const intervalTime = 50;
    const stepsCount = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / stepsCount) * 100), 100);
      setScanProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setShowRevealButton(true);
        }, 300);
      }
    }, intervalTime);
  };

  // Scroll to bottom of terminal when logs update
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scanLogs]);

  // Handle meeting booking
  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setBookingConfirmed(true);
    }, 1200);
  };

  // Get recommendations for selected industry
  const currentRecommendation = RECOMMENDATIONS[industry as keyof typeof RECOMMENDATIONS] || RECOMMENDATIONS.other;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 relative min-h-screen bg-background">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Link */}
          {step === 1 && (
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          )}

          {step > 1 && !bookingConfirmed && (
            <button 
              onClick={() => {
                if (step === 3) {
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                } else if (step === 2) {
                  setStep(1);
                }
              }} 
              className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-bold"
            >
              <ArrowLeft size={16} />
              Back to Form
            </button>
          )}

          {/* Header Section */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                {step === 1 && "Step 01 of 03 — Stack Setup"}
                {step === 2 && "Step 02 of 03 — Live Security Scan"}
                {step === 3 && "Step 03 of 03 — Custom Audit Scorecard"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
              {step === 1 && <>Intelligence <span className="text-gradient-gold italic">Begins with an Audit.</span></>}
              {step === 2 && <>Scanning <span className="text-gradient-gold italic">Your Architecture.</span></>}
              {step === 3 && <>Your Systems <span className="text-gradient-gold italic">Intelligence Report.</span></>}
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              {step === 1 && "To build a custom AI system, we first need to understand the architecture of your current data stack. Complete this brief to start the process."}
              {step === 2 && "Xelvant Shield engine is performing high-speed simulation, scanning pipeline structure, measuring latencies, and calculating model optimization potentials."}
              {step === 3 && "Audit successfully generated. Review your data optimization score, major bottlenecks discovered, and schedule your technical feedback deep-dive."}
            </p>
          </header>

          {/* Form Progress Tracker */}
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-3 shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step >= 1 ? "bg-primary text-black" : "bg-white/5 border border-white/10 text-muted"
              }`}>1</div>
              <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                step >= 1 ? "text-primary" : "text-muted"
              }`}>Configuration</span>
            </div>
            <div className={`w-12 h-[1px] shrink-0 transition-colors duration-300 ${step >= 2 ? "bg-primary" : "bg-white/10"}`}></div>
            
            <div className="flex items-center gap-3 shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step >= 2 ? "bg-primary text-black animate-pulse" : "bg-white/5 border border-white/10 text-muted"
              }`}>2</div>
              <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                step >= 2 ? "text-primary" : "text-muted"
              }`}>Analysis</span>
            </div>
            <div className={`w-12 h-[1px] shrink-0 transition-colors duration-300 ${step >= 3 ? "bg-primary" : "bg-white/10"}`}></div>
            
            <div className="flex items-center gap-3 shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step >= 3 ? "bg-primary text-black" : "bg-white/5 border border-white/10 text-muted"
              }`}>3</div>
              <span className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                step >= 3 ? "text-primary" : "text-muted"
              }`}>Insights</span>
            </div>
          </div>

          {/* Dynamic Step Display */}
          <AnimatePresence mode="wait">
            
            {/* STEP 1: CONFIGURATION FORM */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-[32px] p-8 md:p-12 border-gold-subtle"
              >
                <form onSubmit={handleInitializeAudit} className="space-y-10">
                  
                  {/* Section: Company Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Company Architecture
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Company Name */}
                      <div className="space-y-2" id="companyName">
                        <label htmlFor="company_name" className="text-xs uppercase tracking-widest font-bold text-muted flex justify-between">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="company_name" 
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Lumina Global" 
                          className={`w-full p-4 rounded-xl bg-white/5 border text-white focus:border-primary focus:bg-primary/5 transition-all outline-none ${
                            errors.companyName ? "border-red-500/50" : "border-white/10"
                          }`}
                        />
                        {errors.companyName && <p className="text-xs text-red-500 font-medium">{errors.companyName}</p>}
                      </div>

                      {/* Industry Vertical */}
                      <div className="space-y-2" id="industry">
                        <label htmlFor="industry_select" className="text-xs uppercase tracking-widest font-bold text-muted flex justify-between">
                          Industry Vertical <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            id="industry_select" 
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className={`w-full p-4 pr-10 rounded-xl bg-[#0A0A0A] border text-white focus:border-primary focus:bg-primary/5 transition-all outline-none appearance-none cursor-pointer ${
                              errors.industry ? "border-red-500/50" : "border-white/10"
                            }`}
                          >
                            <option value="" className="bg-[#0A0A0A] text-white">Select Sector</option>
                            <option value="fashion" className="bg-[#0A0A0A] text-white">Fashion & Apparel</option>
                            <option value="beauty" className="bg-[#0A0A0A] text-white">Health & Beauty</option>
                            <option value="electronics" className="bg-[#0A0A0A] text-white">Consumer Electronics</option>
                            <option value="home" className="bg-[#0A0A0A] text-white">Home Decor & Furniture</option>
                            <option value="other" className="bg-[#0A0A0A] text-white">Other / Custom SaaS</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
                        </div>
                        {errors.industry && <p className="text-xs text-red-500 font-medium">{errors.industry}</p>}
                      </div>

                      {/* Revenue */}
                      <div className="space-y-2" id="revenue">
                        <label htmlFor="revenue_select" className="text-xs uppercase tracking-widest font-bold text-muted flex justify-between">
                          Annual Revenue (USD) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            id="revenue_select" 
                            value={revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            className={`w-full p-4 pr-10 rounded-xl bg-[#0A0A0A] border text-white focus:border-primary focus:bg-primary/5 transition-all outline-none appearance-none cursor-pointer ${
                              errors.revenue ? "border-red-500/50" : "border-white/10"
                            }`}
                          >
                            <option value="" className="bg-[#0A0A0A] text-white">Select Range</option>
                            <option value="1-5" className="bg-[#0A0A0A] text-white">$1M - $5M</option>
                            <option value="5-20" className="bg-[#0A0A0A] text-white">$5M - $20M</option>
                            <option value="20-100" className="bg-[#0A0A0A] text-white">$20M - $100M</option>
                            <option value="100+" className="bg-[#0A0A0A] text-white">$100M+</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
                        </div>
                        {errors.revenue && <p className="text-xs text-red-500 font-medium">{errors.revenue}</p>}
                      </div>

                      {/* Team Size */}
                      <div className="space-y-2">
                        <label htmlFor="team_size" className="text-xs uppercase tracking-widest font-bold text-muted">Marketing/Data Team Size</label>
                        <input 
                          type="number" 
                          id="team_size" 
                          value={teamSize}
                          onChange={(e) => setTeamSize(e.target.value)}
                          placeholder="e.g. 5" 
                          min="1"
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:bg-primary/5 transition-all outline-none" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section: Data Stack */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Intelligence Foundation
                    </h3>
                    
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-widest font-bold text-muted mb-4">Current Platforms in Use (Select all that apply)</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {AVAILABLE_PLATFORMS.map((platform) => {
                          const isSelected = selectedPlatforms.includes(platform);
                          return (
                            <button
                              type="button"
                              key={platform}
                              onClick={() => togglePlatform(platform)}
                              className={`p-4 rounded-xl border text-left transition-all duration-300 relative group overflow-hidden ${
                                isSelected 
                                  ? "border-primary bg-primary/5 text-white" 
                                  : "border-white/5 bg-white/5 text-muted hover:border-white/20 hover:text-white"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold truncate z-10">{platform}</span>
                                {isSelected ? (
                                  <Check className="text-primary shrink-0 z-10" size={16} />
                                ) : (
                                  <div className="w-4 h-4 rounded border border-white/20 shrink-0 group-hover:border-white/40 transition-colors z-10" />
                                )}
                              </div>
                              {/* Background Glow */}
                              {isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none opacity-50"></div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="space-y-2" id="painPoints">
                      <label htmlFor="pain_points" className="text-xs uppercase tracking-widest font-bold text-muted flex justify-between">
                        Core Data Challenges <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="pain_points" 
                        rows={3} 
                        value={painPoints}
                        onChange={(e) => setPainPoints(e.target.value)}
                        placeholder="e.g. Disconnected cross-channel customer views, incorrect churn predictions, lag in dashboard reporting..." 
                        className={`w-full p-4 rounded-xl bg-white/5 border text-white focus:border-primary focus:bg-primary/5 transition-all outline-none resize-none ${
                          errors.painPoints ? "border-red-500/50" : "border-white/10"
                        }`}
                      ></textarea>
                      {errors.painPoints && <p className="text-xs text-red-500 font-medium">{errors.painPoints}</p>}
                    </div>
                  </div>

                  {/* Section: Contact */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Executive Lead
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div className="space-y-2" id="email">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted flex justify-between">
                          Professional Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com" 
                          className={`w-full p-4 rounded-xl bg-white/5 border text-white focus:border-primary focus:bg-primary/5 transition-all outline-none ${
                            errors.email ? "border-red-500/50" : "border-white/10"
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-muted">Direct Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000" 
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:bg-primary/5 transition-all outline-none" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-widest">
                      <ShieldCheck className="text-primary animate-pulse" size={18} />
                      Secure 256-bit Encrypted Scan
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-dark text-black font-black text-lg rounded-full hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      Initialize Audit
                      <Zap size={20} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 2: SCANNING SIMULATION */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-[32px] p-8 md:p-12 border-gold-subtle relative overflow-hidden"
              >
                {/* Terminal Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Simulated Radar Circles */}
                <div className="flex flex-col items-center justify-center py-10 mb-8 border-b border-white/5">
                  <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-75"></div>
                    <div className="absolute inset-2 rounded-full border border-primary/40 animate-pulse"></div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                      <Database className="animate-bounce" size={24} />
                    </div>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary animate-pulse">Scanning Pipelines...</span>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-muted">Shield Engine Diagnostic</span>
                    <span className="text-md font-black text-primary">{scanProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-primary-dark shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>
                </div>

                {/* Terminal Window */}
                <div className="bg-black/60 border border-white/10 rounded-2xl p-6 font-mono text-sm text-left h-[260px] overflow-y-auto relative custom-scrollbar flex flex-col gap-2">
                  <div className="absolute top-3 left-4 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="h-4"></div> {/* spacer */}

                  {scanLogs.map((log, index) => (
                    <div key={index} className="opacity-90 flex items-start gap-2">
                      <span className="text-primary/75 font-bold shrink-0">$</span>
                      <span className={`${
                        log.startsWith("✓") ? "text-green" : 
                        log.startsWith("❌") ? "text-red" : 
                        log.startsWith("🛰️") || log.startsWith("🔑") ? "text-white" : "text-muted"
                      }`}>{log}</span>
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>

                {/* Action button */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                  <AnimatePresence>
                    {showRevealButton ? (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setStep(3)}
                        className="w-full sm:w-auto px-10 py-4 bg-primary text-black font-black text-md rounded-full hover:shadow-[0_0_40px_rgba(197,160,89,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Reveal Intelligence Insights
                        <ArrowRight size={18} />
                      </motion.button>
                    ) : (
                      <div className="flex items-center gap-3 text-muted text-xs uppercase tracking-widest font-bold">
                        <Loader2 className="animate-spin text-primary" size={16} />
                        Generating Scorecard
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* STEP 3: SCORECARD & SCHEDULER */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Scorecard Box */}
                <div className="glass-card rounded-[32px] p-8 md:p-12 border-gold-subtle relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/5 pb-8 mb-8">
                    {/* Circle Dial */}
                    <div className="flex flex-col items-center justify-center md:border-r border-white/5 pr-0 md:pr-8">
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* SVG Circle */}
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle 
                            cx="50" cy="50" r="42" 
                            className="stroke-white/5 fill-none" 
                            strokeWidth="6"
                          />
                          <motion.circle 
                            cx="50" cy="50" r="42" 
                            className="stroke-primary fill-none" 
                            strokeWidth="6"
                            strokeDasharray="264"
                            initial={{ strokeDashoffset: 264 }}
                            animate={{ strokeDashoffset: 264 - (264 * currentRecommendation.score) / 100 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-4xl font-black text-white">{currentRecommendation.score}</span>
                          <span className="text-[10px] text-muted uppercase tracking-widest font-bold">Score</span>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-[11px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                          Needs Optimization
                        </span>
                      </div>
                    </div>

                    {/* Detailed Score Information */}
                    <div className="col-span-2 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        {currentRecommendation.title}
                      </h2>
                      <p className="text-muted leading-relaxed text-md">
                        {currentRecommendation.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted">
                        <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-primary" /> Encrypted Audit API-902</span>
                        <span className="h-3 w-[1px] bg-white/10"></span>
                        <span className="flex items-center gap-1.5"><Sparkles size={16} className="text-primary" /> Custom AI Potential</span>
                      </div>
                    </div>
                  </div>

                  {/* Vulnerability Grid */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                      <AlertTriangle className="text-primary" size={18} />
                      Critical Vulnerabilities Identified
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {currentRecommendation.vulnerabilities.map((vul, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                                {vul.tag}
                              </span>
                              <span className="text-xs font-bold text-red-500">{vul.metric}</span>
                            </div>
                            <h4 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{vul.title}</h4>
                            <p className="text-xs text-muted leading-relaxed">{vul.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Booking Module */}
                <div className="glass-card rounded-[32px] p-8 md:p-12 border-gold-subtle relative overflow-hidden" id="booking-section">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                  {!bookingConfirmed ? (
                    <>
                      <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                          <Sparkles size={12} className="text-primary animate-pulse" />
                          <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Free Technical Deep-Dive</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                          Book an Architecture Review Session
                        </h3>
                        <p className="text-muted text-sm md:text-md">
                          Select a date and time slot below to schedule a 30-minute system walkthrough with a Xelvant AI Systems Architect. We will design your exact feature queue layout.
                        </p>
                      </div>

                      {/* Scheduler Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/5 pt-8">
                        {/* Calendar Day Picker */}
                        <div className="space-y-4">
                          <label className="text-xs uppercase tracking-widest font-black text-muted flex items-center gap-2">
                            <Calendar size={14} className="text-primary" /> Select Audit Date
                          </label>
                          <div className="grid grid-cols-1 gap-2.5">
                            {businessDays.map((day, idx) => {
                              const isSelected = selectedDate?.toDateString() === day.toDateString();
                              const formattedDate = day.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' });
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedDate(day);
                                    setSelectedTime(null);
                                  }}
                                  className={`p-4 rounded-xl border text-left font-bold transition-all flex items-center justify-between cursor-pointer ${
                                    isSelected 
                                      ? "border-primary bg-primary/5 text-white" 
                                      : "border-white/5 bg-white/5 text-muted hover:border-white/20 hover:text-white"
                                  }`}
                                >
                                  <span>{formattedDate}</span>
                                  {isSelected && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Time Picker */}
                        <div className="space-y-4">
                          <label className="text-xs uppercase tracking-widest font-black text-muted flex items-center gap-2">
                            <Clock size={14} className="text-primary" /> Select Available Slot (Your Timezone)
                          </label>

                          {selectedDate ? (
                            <div className="grid grid-cols-2 gap-3">
                              {["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"].map((time) => {
                                const isSelected = selectedTime === time;
                                return (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-4 rounded-xl border text-center font-bold transition-all text-sm cursor-pointer ${
                                      isSelected 
                                        ? "border-primary bg-primary/5 text-white shadow-[0_0_15px_rgba(197,160,89,0.15)]" 
                                        : "border-white/5 bg-white/5 text-muted hover:border-white/20 hover:text-white"
                                    }`}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="h-[238px] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-muted">
                              <Calendar className="text-white/20 mb-3" size={32} />
                              <p className="text-xs">Please select a date from the calendar first to unlock time slots.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Confirm CTA */}
                      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-muted leading-relaxed max-w-md text-center sm:text-left">
                          By confirming, you will receive an automatic Google Calendar invite and pre-session data questionnaire.
                        </p>
                        
                        <button
                          type="button"
                          onClick={handleConfirmBooking}
                          disabled={!selectedDate || !selectedTime || bookingLoading}
                          className={`w-full sm:w-auto px-10 py-4 font-black text-md rounded-full transition-all transform flex items-center justify-center gap-2 ${
                            selectedDate && selectedTime
                              ? "bg-gradient-to-br from-primary to-primary-dark text-black hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                              : "bg-white/5 border border-white/10 text-muted cursor-not-allowed"
                          }`}
                        >
                          {bookingLoading ? (
                            <>
                              <Loader2 className="animate-spin" size={18} />
                              Reserving Slot...
                            </>
                          ) : (
                            <>
                              Confirm Session Booking
                              <Zap size={18} />
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Booking Success State */
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 max-w-xl mx-auto flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green/10 border border-green text-green flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 size={32} className="animate-pulse" />
                      </div>
                      
                      <h3 className="text-3xl font-extrabold text-white mb-4">
                        Deep-Dive Scheduled!
                      </h3>
                      
                      <p className="text-muted leading-relaxed text-md mb-8">
                        Congratulations! Your custom data audit has been registered under ticket <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded">AD-8092-B</span>. We have scheduled your systems walk-through for:
                      </p>

                      <div className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 mb-8 text-left space-y-4">
                        <div className="flex items-center gap-3 text-white">
                          <Calendar className="text-primary" size={18} />
                          <span className="font-bold">
                            {selectedDate?.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Clock className="text-primary" size={18} />
                          <span className="font-bold">{selectedTime} (Estimated 30 Min)</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <Database className="text-primary" size={18} />
                          <span className="font-bold">Focus: {companyName} AI Optimization Plan</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted">
                        An email confirmation has been sent to <span className="text-white underline">{email}</span>. Please check your inbox (including spam) for the calendar invitation link.
                      </p>
                      
                      <div className="mt-8 flex gap-4">
                        <Link 
                          href="/" 
                          className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors"
                        >
                          Return Home
                        </Link>
                        <button 
                          onClick={() => {
                            setStep(1);
                            setBookingConfirmed(false);
                            setSelectedDate(null);
                            setSelectedTime(null);
                            setCompanyName("");
                            setPainPoints("");
                          }}
                          className="px-8 py-3.5 bg-primary text-black font-black text-sm rounded-full hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          Run New Audit
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
