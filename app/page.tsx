import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections ordered per site plan v2
import HeroSection                from "@/components/sections/HeroSection";
import ProblemSection             from "@/components/sections/ProblemSection";
import ServicesPreviewSection     from "@/components/sections/ServicesPreviewSection";
import HowItWorksSection          from "@/components/sections/HowItWorksSection";
import CaseStudiesPreviewSection  from "@/components/sections/CaseStudiesPreviewSection";
import CtaSection                 from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Problem */}
        <ProblemSection />

        {/* Services preview */}
        <ServicesPreviewSection />

        {/* How it works */}
        <HowItWorksSection />

        {/* Case studies preview */}
        <CaseStudiesPreviewSection />

        {/* Final CTA */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
