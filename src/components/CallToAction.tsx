import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface CallToActionProps {
  onSendEnquiryClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onSendEnquiryClick }) => {
  return (
    <section id="cta-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D172A] via-[#152238] to-[#0A1120] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-slate-800">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A238]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D8BD63] block mb-3">
              Take the Next Step
            </span>

            <h2
              id="cta-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-4"
            >
              Ready to Find Your Next Property?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Let Skylark Property help you discover a property that fits your needs and goals. Speak directly with our dedicated real estate advisors today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="cta-call-phone-btn"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C5A238] hover:bg-[#A98322] text-white font-semibold text-sm rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>

              <button
                id="cta-send-enquiry-btn"
                onClick={onSendEnquiryClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-[#D8BD63]" />
                <span>Send Enquiry</span>
              </button>

              <a
                id="cta-whatsapp-btn"
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold text-sm rounded-xl border border-[#25D366]/40 backdrop-blur-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Under-button reassuring disclaimer */}
            <p className="mt-5 text-xs text-slate-400">
              No pressure consultations • Strict confidentiality • Zero spam guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
