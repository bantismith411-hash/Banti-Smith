import React from 'react';
import { PROPERTY_CATEGORIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { PropertyCategoryType } from '../types';

interface PropertyCategoriesProps {
  onSelectCategory: (categoryType: PropertyCategoryType | string) => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
              Curated Segments
            </span>
            <h2
              id="property-categories-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
            >
              Explore by Property Type
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-slate-500 max-w-md">
            Discover handpicked portfolios aligned precisely with your lifestyle needs, space requirements, and investment targets.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat.type)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
            >
              {/* Background Image with Zoom on Hover */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D172A]/90 via-[#0D172A]/40 to-black/10 group-hover:via-[#0D172A]/50 transition-all duration-300" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {cat.count}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#C5A238] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1.5 group-hover:text-[#E7D294] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {cat.description}
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
