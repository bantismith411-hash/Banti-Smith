import React, { useState } from 'react';
import { Search, MapPin, Building, ChevronDown, Check } from 'lucide-react';
import { ListingType, PropertyCategoryType } from '../types';

interface SearchBoxProps {
  onSearch: (params: {
    listingType: ListingType;
    propertyType: string;
    location: string;
  }) => void;
  initialListingType?: ListingType;
  initialPropertyType?: string;
  initialLocation?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  initialListingType = 'buy',
  initialPropertyType = 'All',
  initialLocation = ''
}) => {
  const [listingType, setListingType] = useState<ListingType>(initialListingType);
  const [propertyType, setPropertyType] = useState<string>(initialPropertyType);
  const [location, setLocation] = useState<string>(initialLocation);

  const listingTabs: { id: ListingType; label: string }[] = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const propertyTypes = ['All', 'Apartment', 'Villa', 'House', 'Plot', 'Commercial'];

  const popularLocations = [
    'Golf Course Extension',
    'Palm Enclave',
    'Financial District',
    'Heritage Greens',
    'Greenwood Valley',
    'Cyber City'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      listingType,
      propertyType,
      location: location.trim()
    });
  };

  return (
    <div
      id="hero-search-box-container"
      className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-slate-100 p-3 sm:p-5 transition-all duration-300"
    >
      {/* Looking For: Buy | Rent | Commercial segmented tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 hidden sm:inline-block">
          Looking For:
        </span>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl" role="tablist">
          {listingTabs.map((tab) => {
            const active = listingType === tab.id;
            return (
              <button
                key={tab.id}
                id={`search-tab-${tab.id}`}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setListingType(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#0D172A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0D172A] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Search Controls */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Property Type Dropdown */}
        <div className="sm:col-span-4">
          <label htmlFor="search-property-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Property Type
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Building className="w-4 h-4 text-[#C5A238]" />
            </div>
            <select
              id="search-property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors appearance-none cursor-pointer"
            >
              <option value="All">All Types</option>
              {propertyTypes.filter((t) => t !== 'All').map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Location Input */}
        <div className="sm:col-span-5">
          <label htmlFor="search-location-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-4 h-4 text-[#C5A238]" />
            </div>
            <input
              id="search-location-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location (e.g. Golf Course Ext, Sector 65)"
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-[#0D172A] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors"
            />
          </div>
        </div>

        {/* Search Property Button */}
        <div className="sm:col-span-3 sm:self-end">
          <button
            id="search-property-submit-btn"
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C5A238] hover:bg-[#A98322] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <Search className="w-4 h-4" />
            <span>Search Property</span>
          </button>
        </div>
      </form>

      {/* Popular locations quick tags */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-slate-400 font-medium">Popular:</span>
        {popularLocations.slice(0, 4).map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => {
              setLocation(loc);
              onSearch({ listingType, propertyType, location: loc });
            }}
            className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#FAF5E5] hover:text-[#A98322] text-slate-600 transition-colors text-[11px] font-medium"
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
};
