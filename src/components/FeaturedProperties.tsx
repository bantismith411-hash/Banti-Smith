import React, { useState } from 'react';
import { Property, ListingType } from '../types';
import { Bed, Bath, Maximize, MapPin, Eye, Phone, ArrowUpRight, Check } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onCallAgent: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  activeFilter,
  onFilterChange,
  onCallAgent
}) => {
  const filterTabs = [
    { id: 'all', label: 'All Properties' },
    { id: 'buy', label: 'For Sale' },
    { id: 'rent', label: 'For Rent' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'villa', label: 'Villas' },
    { id: 'apartment', label: 'Apartments' }
  ];

  return (
    <section id="properties" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
              Exclusive Portfolio
            </span>
            <h2
              id="featured-properties-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
            >
              Featured Properties
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Explore carefully selected properties for modern living and smart investment.
            </p>
          </div>

          {/* Quick Telephone conversion badge */}
          <div className="flex items-center gap-3">
            <a
              id="featured-call-banner"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294] text-xs sm:text-sm font-semibold hover:bg-[#F2E5BF] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Consult: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`property-filter-${tab.id}`}
                onClick={() => onFilterChange(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0D172A] text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-[#0D172A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Property Cards Grid */}
        {properties.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-base text-slate-600 font-medium">
              No properties matched your current filter criteria.
            </p>
            <button
              onClick={() => onFilterChange('all')}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#0D172A] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => (
              <article
                key={property.id}
                id={`property-card-${property.id}`}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#E7D294] transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient bottom shadow for image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#0D172A]/90 text-white backdrop-blur-sm shadow-sm">
                      {property.listingType === 'buy'
                        ? 'For Sale'
                        : property.listingType === 'rent'
                        ? 'For Rent'
                        : 'Commercial'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#A98322] border border-[#E7D294] backdrop-blur-sm shadow-sm">
                      {property.type}
                    </span>
                  </div>

                  {/* Price Tag Overlay on bottom left */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium text-white/90 block">Price</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A238] shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    {/* Title */}
                    <h3
                      id={`property-title-${property.id}`}
                      className="font-serif text-lg sm:text-xl font-semibold text-[#0D172A] group-hover:text-[#A98322] transition-colors line-clamp-1 mb-2"
                    >
                      {property.name}
                    </h3>

                    {/* Tagline / Subtitle */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {property.tagline}
                    </p>

                    {/* Specs / Meta */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-700 mb-4">
                      {property.bedrooms > 0 ? (
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-3.5 h-3.5 text-[#C5A238]" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Check className="w-3.5 h-3.5 text-[#C5A238]" />
                          <span>Clear Title</span>
                        </div>
                      )}

                      {property.bathrooms > 0 ? (
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-3.5 h-3.5 text-[#C5A238]" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Check className="w-3.5 h-3.5 text-[#C5A238]" />
                          <span>Approved</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-3.5 h-3.5 text-[#C5A238]" />
                        <span className="truncate">{property.area}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      id={`view-details-btn-${property.id}`}
                      onClick={() => onSelectProperty(property)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0D172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 active:scale-[0.98]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <a
                      id={`card-call-btn-${property.id}`}
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onCallAgent(property);
                      }}
                      className="p-2.5 rounded-xl bg-[#FAF5E5] hover:bg-[#F2E5BF] text-[#A98322] border border-[#E7D294] transition-colors"
                      title={`Call for ${property.name}`}
                      aria-label={`Call agent for ${property.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
