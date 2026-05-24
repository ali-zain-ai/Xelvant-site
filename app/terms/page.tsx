import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 relative min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <header className="mb-16 border-b border-white/5 pb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
              Terms of <span className="text-gradient-gold italic">Service</span>
            </h1>
            <p className="text-muted text-lg">Last updated: May 17, 2026</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-cabinet prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Xelvant's intelligence platform and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Xelvant and/or its licensors own all the intellectual property rights and materials contained in this Website and Platform. You are granted a limited license only for purposes of viewing the material contained on this Website and utilizing our intelligence dashboards for your internal business operations.
            </p>

            <h2>3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media without explicit permission.</li>
              <li>Selling, sublicensing, and/or otherwise commercializing any Platform material or proprietary models.</li>
              <li>Using this Website or Platform in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
              <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website.</li>
            </ul>

            <h2>4. Data Integrity and Client Responsibilities</h2>
            <p>
              While Xelvant provides predictive models and analytics, the accuracy of our intelligence is highly dependent on the fidelity of the data provided by the client. Clients are responsible for ensuring that the data integrated into Xelvant's systems is accurate, legally obtained, and compliant with local data protection regulations (e.g., GDPR, CCPA).
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Xelvant, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website or our business intelligence recommendations. Xelvant shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2>6. Variation of Terms</h2>
            <p>
              Xelvant is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>

            <h2>7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State/Country of our headquarters, and you submit to the non-exclusive jurisdiction of the state and federal courts located there for the resolution of any disputes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
