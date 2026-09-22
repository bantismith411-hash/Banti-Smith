import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileText,
  HeartHandshake,
  Target
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C5A238]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#C5A238]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C5A238]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#C5A238]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C5A238]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#C5A238]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C5A238]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
            The Skylark Advantage
          </span>
          <h2
            id="why-choose-us-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
          >
            Why Choose Skylark Property?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We hold ourselves to the highest standards of integrity, due diligence, and dedicated customer care. Here is why discerning clients place their trust in us.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              id={`why-choose-card-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-[#E7D294] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] flex items-center justify-center shrink-0 border border-[#E7D294]/60">
                  {getPillarIcon(item.icon)}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#0D172A] mb-1.5 flex items-center gap-1.5">
                    <span className="text-[#C5A238] font-bold">✓</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
