import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
            Client Experiences
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real stories from families, business leaders, and investors who partnered with Skylark Property.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-[#FAFAFA] rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#E7D294] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A238] text-[#C5A238]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A238]/30" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#E7D294]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0D172A] flex items-center gap-1.5">
                      <span>{testimonial.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A238]" />
                    </h4>
                    <p className="text-xs text-slate-500">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>

                {testimonial.propertyPurchased && (
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-[#A98322] px-2.5 py-1 rounded-md bg-[#FAF5E5] border border-[#E7D294]/60">
                    {testimonial.propertyPurchased}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
