import Link from "next/link";
import { Globe, MessageSquare, Mail } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl font-bold uppercase tracking-widest text-white">Xelvant</span>
            </div>
            <p className="text-muted text-sm max-w-xs mb-8 leading-relaxed">
              Architecting the future of e-commerce intelligence. Custom AI systems for the modern digital brand.
            </p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/company/xelvant" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Globe size={24} />
              </a>
              <a href={`mailto:${BRAND.email}`} className="text-muted hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Links: Intelligence */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Intelligence</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/#solutions" className="hover:text-primary transition-colors cursor-scale">Churn Prediction</Link></li>
              <li><Link href="/#solutions" className="hover:text-primary transition-colors cursor-scale">Segmentation</Link></li>
              <li><Link href="/#solutions" className="hover:text-primary transition-colors cursor-scale">Custom Dashboards</Link></li>
              <li><Link href="/#solutions" className="hover:text-primary transition-colors cursor-scale">LTV Growth</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Company</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/#methodology" className="hover:text-primary transition-colors cursor-scale">Methodology</Link></li>
              <li><Link href="/audit" className="hover:text-primary transition-colors cursor-scale">Request Audit</Link></li>
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Support</h5>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/#contact" className="hover:text-primary transition-colors cursor-scale">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors cursor-scale">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors cursor-scale">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
          <div className="text-muted text-[10px] uppercase tracking-widest font-bold mb-4 md:mb-0">
            © {currentYear} XELVANT INTELLIGENCE AGENCY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
