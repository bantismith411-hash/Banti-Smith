import React, { useState, useEffect, useRef } from 'react';
import { STATS, COMPANY_DETAILS } from '../data/content';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, Award, Users } from 'lucide-react';

interface AboutUsProps {
  onLearnMoreClick: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onLearnMoreClick }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1600; // ms
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts(
              STATS.map((stat) => Math.floor(easeProgress * stat.value))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(STATS.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Story + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=80"
                alt="Skylark Property Luxury Consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary overlapping luxury image badge */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&auto=format&fit=crop&q=80"
                alt="Architectural Interior Detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Trust Seal Floating Badge */}
            <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5E5] text-[#A98322] flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-[#C5A238]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0D172A] block">100% Verified</span>
                <span className="text-[11px] text-slate-500 block">Due Diligence Assured</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
                About Skylark Property
              </span>
              <h2
                id="about-us-heading"
                className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight leading-tight"
              >
                Your Trusted Partner in Real Estate
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At Skylark Property, we believe acquiring a home or commercial asset is one of life’s most significant decisions. We help buyers, sellers, and discerning investors discover suitable property opportunities through an uncompromising standard of professionalism and transparency.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              With over a decade of deep local market knowledge, our senior advisors analyze micro-market capital trends, review title chains, and negotiate fair terms on your behalf. Whether you are seeking a serene family villa, an upscale city apartment, or a high-yield commercial floor, Skylark Property is dedicated to your long-term success.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A238] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700">Zero Legal Ambiguity</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A238] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700">Direct High-Net-Worth Network</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A238] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700">RERA Compliant Projects</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A238] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700">Dedicated Relationship Manager</span>
              </div>
            </div>

            {/* Call Button & Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-contact-btn"
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm active:scale-95"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D8BD63]" />
              </button>

              <a
                id="about-call-btn"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0D172A] hover:text-[#C5A238] transition-colors py-2 px-3"
              >
                <span>Speak to Senior Advisor:</span>
                <span className="underline decoration-[#C5A238]">{COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Statistics Section */}
        <div
          id="animated-stats-section"
          className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} text-center sm:text-left`}>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D172A] tracking-tight text-[#0D172A]">
                  <span>{counts[idx]}</span>
                  <span className="text-[#C5A238]">{stat.suffix}</span>
                </div>
                <div className="text-sm font-bold text-[#0D172A] mt-1.5">{stat.label}</div>
                <p className="text-xs text-slate-500 mt-0.5">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
