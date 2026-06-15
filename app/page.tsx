import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

// Sections — ordered by conversion psychology
import HeroSection            from "@/components/sections/HeroSection";
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection";
import ProblemSection         from "@/components/sections/ProblemSection";
import ValueDiscoverySection  from "@/components/sections/ValueDiscoverySection";
import DeliverablesSection    from "@/components/sections/DeliverablesSection";
import HowItWorksSection      from "@/components/sections/HowItWorksSection";
import CaseStudySection       from "@/components/sections/CaseStudySection";
import WhyTrustSection        from "@/components/sections/WhyTrustSection";
import FaqSection             from "@/components/sections/FaqSection";
import CtaSection             from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        {/* 1. Hero — What is this? Why should I care? */}
        <HeroSection />

        {/* 2. Dashboard visual — Enterprise credibility proof */}
        <DashboardPreviewSection />

        {/* 3. Problem agitation — Make visitor realize they have a problem */}
        <ProblemSection />

        {/* 4. Value discovery — Show what we uncover */}
        <ValueDiscoverySection />

        {/* 5. Deliverables — What exactly do I get? */}
        <DeliverablesSection />

        {/* 6. Process — Remove uncertainty */}
        <HowItWorksSection />

        {/* 7. Case study — Provide proof */}
        <CaseStudySection />

        {/* 8. Why trust — Why should I trust you? */}
        <WhyTrustSection />

        {/* 10. FAQ — Objection handling */}
        <FaqSection />

        {/* 11. Final CTA — Capture leads */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
