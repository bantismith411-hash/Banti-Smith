import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Building, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3 border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Skylark Property Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0D172A] to-[#1E293B] flex items-center justify-center text-[#D8BD63] shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-[#D8BD63]" />
            </div>
            <div>
              <span className="block font-brand text-lg sm:text-xl font-bold tracking-wider text-[#0D172A]">
                SKYLARK
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C5A238] -mt-1">
                PROPERTY
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-150 rounded-md relative ${
                    isActive
                      ? 'text-[#0D172A] font-semibold'
                      : 'text-slate-600 hover:text-[#0D172A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C5A238] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Phone & Contact Button */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <a
              id="header-phone-link"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-[#0D172A] hover:text-[#C5A238] px-3 py-2 rounded-lg transition-colors duration-150 group"
              title="Call Skylark Property"
            >
              <div className="w-7 h-7 rounded-full bg-[#FAF5E5] text-[#A98322] flex items-center justify-center group-hover:bg-[#C5A238] group-hover:text-white transition-colors duration-150">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-tight whitespace-nowrap">{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              id="header-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-[#0D172A] hover:bg-[#1E293B] rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-call-header"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="p-2 rounded-lg bg-[#FAF5E5] text-[#A98322]"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FAF5E5] text-[#A98322] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A238]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              id="mobile-menu-call-btn"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FAF5E5] text-[#A98322] font-semibold text-sm hover:bg-[#F2E5BF] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>

            <button
              id="mobile-menu-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 px-4 rounded-lg bg-[#0D172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-colors flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
