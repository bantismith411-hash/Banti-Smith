/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SAMPLE_PROPERTIES } from './data/properties';
import { Property, ListingType, PropertyCategoryType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyModal } from './components/PropertyModal';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PropertyCategories } from './components/PropertyCategories';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [propertyFilter, setPropertyFilter] = useState('all');
  const [prefilledInterest, setPrefilledInterest] = useState('Buying Property');
  const [prefilledProperty, setPrefilledProperty] = useState('');

  // Active section tracker via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'properties', 'about', 'services', 'why-choose-us', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Hero Search Box submit handler
  const handleHeroSearch = (params: {
    listingType: ListingType;
    propertyType: string;
    location: string;
  }) => {
    // Map to active filter
    if (params.propertyType !== 'All') {
      setPropertyFilter(params.propertyType.toLowerCase());
    } else {
      setPropertyFilter(params.listingType);
    }

    scrollToSection('properties');
  };

  // Filter properties according to activeFilter
  const filteredProperties = SAMPLE_PROPERTIES.filter((prop) => {
    if (propertyFilter === 'all') return true;
    if (propertyFilter === 'buy' && prop.listingType === 'buy') return true;
    if (propertyFilter === 'rent' && prop.listingType === 'rent') return true;
    if (propertyFilter === 'commercial' && (prop.listingType === 'commercial' || prop.type === 'Commercial'))
      return true;
    if (propertyFilter === 'villa' && prop.type === 'Villa') return true;
    if (propertyFilter === 'apartment' && prop.type === 'Apartment') return true;
    if (propertyFilter === 'house' && prop.type === 'House') return true;
    if (propertyFilter === 'plot' && prop.type === 'Plot') return true;
    return true;
  });

  // Category click handler
  const handleCategorySelect = (categoryType: PropertyCategoryType | string) => {
    setPropertyFilter(categoryType.toLowerCase());
    scrollToSection('properties');
  };

  // Service click handler
  const handleServiceSelect = (serviceTitle: string) => {
    if (serviceTitle.includes('Buying')) setPrefilledInterest('Buying Property');
    else if (serviceTitle.includes('Selling')) setPrefilledInterest('Selling Property');
    else if (serviceTitle.includes('Rental')) setPrefilledInterest('Renting Property');
    else if (serviceTitle.includes('Commercial')) setPrefilledInterest('Commercial Property');
    else if (serviceTitle.includes('Investment')) setPrefilledInterest('Investment');
    else setPrefilledInterest('Buying Property');

    scrollToSection('contact');
  };

  // Modal contact agent handler
  const handleOpenEnquiryForProperty = (prop: Property) => {
    setPrefilledProperty(prop.name);
    if (prop.listingType === 'rent') {
      setPrefilledInterest('Renting Property');
    } else if (prop.listingType === 'commercial') {
      setPrefilledInterest('Commercial Property');
    } else {
      setPrefilledInterest('Buying Property');
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1E2530] selection:bg-[#D4AF37]/20">
      {/* Sticky Top Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('properties')}
          onContactClick={() => scrollToSection('contact')}
          onSearchSubmit={handleHeroSearch}
        />

        {/* Featured Properties Portfolio */}
        <FeaturedProperties
          properties={filteredProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          activeFilter={propertyFilter}
          onFilterChange={(f) => setPropertyFilter(f)}
          onCallAgent={(prop) => {
            setPrefilledProperty(prop.name);
          }}
        />

        {/* About Skylark Property with Animated Stats */}
        <AboutUs onLearnMoreClick={() => scrollToSection('contact')} />

        {/* 6 Core Services */}
        <Services onSelectService={handleServiceSelect} />

        {/* Why Choose Skylark Property */}
        <WhyChooseUs />

        {/* Visual Property Categories */}
        <PropertyCategories onSelectCategory={handleCategorySelect} />

        {/* How It Works 4-Step Process */}
        <HowItWorks />

        {/* Client Testimonials */}
        <Testimonials />

        {/* High-Impact Call To Action */}
        <CallToAction onSendEnquiryClick={() => scrollToSection('contact')} />

        {/* Contact Section & Interactive Enquiry Form */}
        <ContactSection
          prefilledInterest={prefilledInterest}
          prefilledProperty={prefilledProperty}
        />
      </main>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenEnquiry={handleOpenEnquiryForProperty}
      />

      {/* Floating Quick Action Widget (WhatsApp & Call Now) */}
      <FloatingActions />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
