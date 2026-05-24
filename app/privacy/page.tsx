import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 relative min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <header className="mb-16 border-b border-white/5 pb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
              Privacy <span className="text-gradient-gold italic">Policy</span>
            </h1>
            <p className="text-muted text-lg">Last updated: May 17, 2026</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-cabinet prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark">
            <p>
              At Xelvant, accessible from our platform, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Xelvant and how we use it.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information to provide better intelligence services to all our users. The types of personal information we collect include:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and professional details.</li>
              <li><strong>Business Architecture Data:</strong> Information provided during the audit process regarding your tech stack, revenue, and data challenges.</li>
              <li><strong>Usage Data:</strong> Information on how the platform is accessed and used, including diagnostic data and analytics.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide, operate, and maintain our intelligence platform.</li>
              <li>To improve, personalize, and expand our services.</li>
              <li>To develop new proprietary models, dashboards, and features.</li>
              <li>To communicate with you, either directly or through one of our partners, for customer service and updates.</li>
              <li>To find and prevent fraud.</li>
            </ul>

            <h2>3. Log Files</h2>
            <p>
              Xelvant follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2>4. Security of Data</h2>
            <p>
              The security of your data is of paramount importance to us. We utilize 256-bit encryption for all data transfers and maintain enterprise-grade security protocols. However, remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@xelvant.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
