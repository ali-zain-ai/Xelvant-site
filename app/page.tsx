import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";
import HeroSection from "@/components/sections/HeroSection";
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
        <ProtocolSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

