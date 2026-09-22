export type ListingType = 'buy' | 'rent' | 'commercial';

export type PropertyCategoryType = 'Apartment' | 'Villa' | 'House' | 'Plot' | 'Commercial';

export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  cityArea: string;
  type: PropertyCategoryType;
  listingType: ListingType;
  price: string;
  numericPrice: number; // for sorting/filtering
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: string; // e.g. "1,850 Sq.Ft."
  sqft: number;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  possession: string;
  furnishing: string;
  floorInfo: string;
  facing: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
  propertyPurchased?: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  type: PropertyCategoryType;
  listingType?: ListingType;
  description: string;
  image: string;
  count: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  interest: string;
  message: string;
  propertyInterest?: string;
}
