import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Phone,
  Calendar,
  Layers,
  Compass,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenEnquiry: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onOpenEnquiry
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div
      id="property-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-property-title"
    >
      <div
        id="property-modal-card"
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col max-h-[90vh]"
      >
        {/* Modal Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/90 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D172A] text-white">
              {property.listingType === 'buy' ? 'For Sale' : property.listingType === 'rent' ? 'For Rent' : 'Commercial'}
            </span>
            <span className="text-xs font-semibold text-[#A98322] px-2.5 py-0.5 rounded-full bg-[#FAF5E5] border border-[#E7D294]">
              {property.type}
            </span>
          </div>

          <button
            id="close-property-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#0D172A] transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={property.images[activeImageIndex]}
                alt={`${property.name} photograph ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#0D172A] flex items-center justify-center shadow-md backdrop-blur-sm transition-transform active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#0D172A] flex items-center justify-center shadow-md backdrop-blur-sm transition-transform active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                {activeImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A238] ring-2 ring-[#C5A238]/30 scale-105'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Location & Price Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                <MapPin className="w-4 h-4 text-[#C5A238]" />
                <span>{property.location}</span>
              </div>
              <h2 id="modal-property-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#0D172A]">
                {property.name}
              </h2>
              <p className="text-sm text-slate-600 mt-1">{property.tagline}</p>
            </div>

            <div className="bg-[#FAF5E5] px-5 py-3 rounded-xl border border-[#E7D294] text-right md:min-w-[200px]">
              <span className="text-xs uppercase tracking-wider text-slate-500 block">Listed Price</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0D172A] text-[#A98322]">
                {property.price}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">{property.priceLabel}</span>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
              Key Property Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-[#C5A238]" /> Bedrooms
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial / Plot'}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Bath className="w-3.5 h-3.5 text-[#C5A238]" /> Bathrooms
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.bathrooms > 0 ? `${property.bathrooms} Baths` : 'Clear Zoning'}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Maximize className="w-3.5 h-3.5 text-[#C5A238]" /> Super Area
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.area}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A238]" /> Possession
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.possession}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#C5A238]" /> Floor Level
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.floorInfo}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#C5A238]" /> Orientation
                </span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1">
                  {property.facing}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                <span className="text-slate-400 text-xs block">Furnishing Status</span>
                <span className="font-semibold text-sm text-[#0D172A] block mt-1 truncate">
                  {property.furnishing}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Property Overview & Highlights
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/60 p-4 rounded-xl border border-slate-100">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
              Curated Amenities & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.amenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAFAFA] border border-slate-100 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A238] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-[#0D172A] text-white flex items-center justify-center font-bold text-xs">
              SP
            </div>
            <div>
              <span className="text-xs font-bold text-[#0D172A] block">Dedicated Skylark Advisor</span>
              <span className="text-[11px] text-slate-500 block">Available for Private Site Visit</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              id="modal-call-now-btn"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294] hover:bg-[#F2E5BF] font-semibold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              id="modal-contact-agent-btn"
              onClick={() => {
                onClose();
                onOpenEnquiry(property);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0D172A] text-white hover:bg-[#1E293B] font-semibold text-xs sm:text-sm shadow-md transition-colors"
            >
              <Send className="w-4 h-4 text-[#D8BD63]" />
              <span>Contact Agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
