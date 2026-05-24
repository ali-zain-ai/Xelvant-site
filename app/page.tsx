import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ProtocolSection from "@/components/sections/ProtocolSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="bg-background">
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <CalculatorSection />
        <ProtocolSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

