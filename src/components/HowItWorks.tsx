import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { MessageSquareText, Search, CalendarCheck, CheckSquare2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquareText className="w-5 h-5 text-[#C5A238]" />;
      case 1:
        return <Search className="w-5 h-5 text-[#C5A238]" />;
      case 2:
        return <CalendarCheck className="w-5 h-5 text-[#C5A238]" />;
      case 3:
        return <CheckSquare2 className="w-5 h-5 text-[#C5A238]" />;
      default:
        return <Search className="w-5 h-5 text-[#C5A238]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
            Seamless Experience
          </span>
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
          >
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A transparent and structured 4-step journey designed to save you time and ensure complete peace of mind.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              id={`step-card-${item.step}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-brand text-2xl sm:text-3xl font-bold text-[#A98322]/40 tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] border border-[#E7D294]/60 flex items-center justify-center shadow-xs">
                    {getStepIcon(index)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-[#0D172A] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A238]">
                  Phase {index + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
