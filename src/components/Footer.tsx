import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070D18] text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D8BD63] border border-white/10">
                <Compass className="w-5 h-5 text-[#D8BD63]" />
              </div>
              <div>
                <span className="block font-brand text-xl font-bold tracking-wider text-white">
                  SKYLARK PROPERTY
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C5A238] -mt-1">
                  LUXURY REAL ESTATE
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping you discover better property opportunities with ethical advisory, verified title assurances, and high-yield insights.
            </p>

            <div className="pt-2">
              <a
                id="footer-call-btn"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8BD63] hover:text-[#FAF5E5] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D8BD63]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-properties"
                  onClick={() => onNavigate('properties')}
                  className="hover:text-white transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D8BD63]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A238] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-white">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A238] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A238] shrink-0 mt-0.5" />
                <span>Skylark Towers, Financial District</span>
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Mon – Sat: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Social Media & Instant Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D8BD63]">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400">
              Follow our latest property launches & market intelligence.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {/* WhatsApp */}
              <a
                id="footer-social-whatsapp"
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366]/20 text-slate-300 hover:text-[#25D366] flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              {/* LinkedIn */}
              <a
                id="footer-social-linkedin"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              {/* Instagram */}
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
              {/* Facebook */}
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">fb</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="copyright-text">
            © 2026 Skylark Property. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-600">RERA Registered Real Estate Consultant</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
