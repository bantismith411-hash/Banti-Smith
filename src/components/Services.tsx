import React from 'react';
import { SERVICES } from '../data/content';
import {
  Home,
  TrendingUp,
  Key,
  Building2,
  LineChart,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#C5A238]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#C5A238]" />;
      case 'Key':
        return <Key className="w-6 h-6 text-[#C5A238]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#C5A238]" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-[#C5A238]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#C5A238]" />;
      default:
        return <Home className="w-6 h-6 text-[#C5A238]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
            Tailored Real Estate Solutions
          </span>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
          >
            Comprehensive Real Estate Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From initial property discovery to final registry and portfolio wealth management, our advisory covers every stage of your real estate journey.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#FAFAFA] hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#E7D294] shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#E7D294] transition-all">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3
                  id={`service-title-${service.id}`}
                  className="font-serif text-xl font-semibold text-[#0D172A] group-hover:text-[#A98322] transition-colors mb-3"
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2 mb-6 border-t border-slate-200/60 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A238] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action */}
              <button
                id={`service-inquire-btn-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D172A] hover:text-[#C5A238] group-hover:translate-x-1 transition-all pt-2"
              >
                <span>Enquire about {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A238]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
