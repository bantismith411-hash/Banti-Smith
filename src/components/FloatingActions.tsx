import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

export const FloatingActions: React.FC = () => {
  return (
    <div
      id="floating-conversion-widget"
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end print:hidden"
    >
      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-200"
        aria-label="Chat with Skylark Property on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0D172A] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(13,23,42,0.35)] hover:bg-[#1E293B] hover:scale-105 transition-all duration-200 border border-[#E7D294]/40"
        aria-label="Call Skylark Property Now"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Phone className="w-4 h-4 text-[#D8BD63]" />
        <span>Call Now</span>
      </a>
    </div>
  );
};
