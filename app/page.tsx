import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

// Sections — ordered by conversion psychology
import HeroSection            from "@/components/sections/HeroSection";
import ProblemSection         from "@/components/sections/ProblemSection";
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


        {/* 3. Problem agitation — Make visitor realize they have a problem */}
        <ProblemSection />


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
