import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { SearchBox } from './SearchBox';
import { ListingType } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onSearchSubmit: (params: {
    listingType: ListingType;
    propertyType: string;
    location: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onContactClick,
  onSearchSubmit
}) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Background with luxury property photograph & soft subtle gradient veil */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=85"
          alt="Luxury Architectural Estate by Skylark Property"
          className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-1000"
        />
        {/* White-to-soft luxury neutral overlay to preserve white-based aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAFAFA]" />
        {/* Subtle warm gold shimmer glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FAF5E5]/60 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Eyebrow */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E7D294]/60 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A238]" />
            <span className="text-xs font-semibold text-[#0D172A] tracking-wide">
              Premier Real Estate Consultancy & Curated Luxury Homes
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h1
            id="hero-main-headline"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0D172A] tracking-tight leading-[1.15] mb-6"
          >
            Find a Place You’ll Love <br className="hidden sm:inline" />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#0D172A]">to Call Home.</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 bg-[#FAF5E5] -z-0 rounded-sm" />
            </span>
          </h1>

          <p
            id="hero-subheadline"
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {COMPANY_DETAILS.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0D172A] hover:bg-[#1E293B] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 text-[#D8BD63]" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0D172A] border border-slate-200 text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              <span>Contact Us</span>
            </button>

            <a
              id="hero-call-now-btn"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF5E5] hover:bg-[#F2E5BF] text-[#A98322] border border-[#E7D294] text-sm font-semibold rounded-xl transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Floating Property Search Box */}
        <div className="mt-6 sm:mt-10">
          <SearchBox onSearch={onSearchSubmit} />
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/50 max-w-4xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A238]" />
            <span>100% Verified Legal Documents</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A238]" />
            <span>Over ₹500 Cr+ Assets Consulted</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A238]" />
            <span>Transparent & Zero Hidden Brokerage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
