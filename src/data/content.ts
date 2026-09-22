import { ServiceItem, WhyChooseItem, CategoryItem, Testimonial } from '../types';

export const COMPANY_DETAILS = {
  name: 'Skylark Property',
  industry: 'Real Estate / Property Consultancy',
  phone: '+91 820 777 7000',
  phoneRaw: '+918207777000',
  email: 'contact@skylarkproperty.com',
  address: 'Level 12, Skylark Towers, Horizon Boulevard, Prime Financial District',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM',
  whatsappUrl: 'https://wa.me/918207777000?text=Hello%20Skylark%20Property,%20I%20am%20interested%20in%20exploring%20properties%20with%20you.',
  headline: 'Find a Place You’ll Love to Call Home.',
  subheadline: 'Discover premium properties, trusted real estate services, and opportunities that match your lifestyle and investment goals.'
};

export const STATS = [
  { value: 10, suffix: '+', label: 'Years of Experience', detail: 'Guiding luxury buyers since 2016' },
  { value: 250, suffix: '+', label: 'Properties', detail: 'Curated high-value inventory' },
  { value: 500, suffix: '+', label: 'Happy Clients', detail: 'Families and investors served' },
  { value: 50, suffix: '+', label: 'Premium Locations', detail: 'Across prime metropolitan zones' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'buying',
    title: 'Property Buying',
    description: 'Bespoke search and acquisition of vetted luxury homes, villas, and high-yield properties with complete legal due diligence.',
    icon: 'Home',
    features: ['Vetted title records', 'End-to-end price negotiation', 'Site inspection coordination', 'Seamless registry assistance']
  },
  {
    id: 'selling',
    title: 'Property Selling',
    description: 'Targeted high-net-worth marketing, premium staging consultation, and vetted buyer matching to maximize property valuation.',
    icon: 'TrendingUp',
    features: ['Market valuation audits', 'Professional architectural visuals', 'Direct qualified buyer network', 'Fast transaction timelines']
  },
  {
    id: 'rental',
    title: 'Property Rental',
    description: 'Comprehensive leasing solutions connecting executive tenants and corporate expatriates with high-end luxury residences.',
    icon: 'Key',
    features: ['Tenant background verification', 'Drafting institutional lease contracts', 'Move-in inspection reports', 'Reliable rental yield advice']
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    description: 'Prime Grade-A office spaces, flagship retail outlets, and institutional commercial real estate tailored for sustainable capital growth.',
    icon: 'Building2',
    features: ['High-footfall retail scouting', 'Corporate office leasing', 'Pre-leased asset sales', 'Cap-rate analysis']
  },
  {
    id: 'investment',
    title: 'Property Investment',
    description: 'Data-driven advisory on high-growth corridors, early-stage builder allocations, and portfolio diversification strategies.',
    icon: 'LineChart',
    features: ['Corridor appreciation forecasts', 'Rental yield optimization', 'Tax-efficient structuring', 'Exit strategy planning']
  },
  {
    id: 'consultation',
    title: 'Real Estate Consultation',
    description: 'Unbiased advisory on zoning norms, legal approvals, financing structures, and master-plan developments from senior advisors.',
    icon: 'Briefcase',
    features: ['Title verification reviews', 'Bank loan liaisons', 'RERA compliance checks', 'Personalized asset roadmaps']
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'Trusted Property Guidance',
    description: 'Over a decade of ethical advisory and deep regional market knowledge guaranteeing reliable decisions.',
    icon: 'ShieldCheck'
  },
  {
    id: 'why-2',
    title: 'Verified Property Options',
    description: 'Every single listing passes strict legal verification, title clearance, and physical quality inspections.',
    icon: 'CheckCircle2'
  },
  {
    id: 'why-3',
    title: 'Professional Consultation',
    description: 'Dedicated senior consultants who take the time to understand your lifestyle, timelines, and financial goals.',
    icon: 'Award'
  },
  {
    id: 'why-4',
    title: 'Transparent Process',
    description: 'Zero hidden fees, upfront pricing, and absolute clarity on documentation at every milestone.',
    icon: 'FileText'
  },
  {
    id: 'why-5',
    title: 'Personalized Service',
    description: 'Tailored property shortlists, private VIP site visits, and personalized support throughout ownership.',
    icon: 'HeartHandshake'
  },
  {
    id: 'why-6',
    title: 'Investment-Focused Approach',
    description: 'Rigorous financial metrics, micro-market trend analytics, and future infrastructure connectivity evaluations.',
    icon: 'Target'
  }
];

export const PROPERTY_CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-apartments',
    title: 'Luxury Apartments',
    type: 'Apartment',
    description: 'High-rise sky suites and penthouses with panoramic vistas and private club amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    count: '110+ Properties'
  },
  {
    id: 'cat-villas',
    title: 'Villas',
    type: 'Villa',
    description: 'Exclusive standalone residences featuring private pools, landscaped lawns, and quiet cul-de-sacs.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80',
    count: '45+ Properties'
  },
  {
    id: 'cat-houses',
    title: 'Independent Houses',
    type: 'House',
    description: 'Freehold architectural homes with private courtyards, terraces, and generational charm.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80',
    count: '35+ Properties'
  },
  {
    id: 'cat-plots',
    title: 'Residential Plots',
    type: 'Plot',
    description: 'Gated enclave plots with clear titles and underground utilities ready for custom construction.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    count: '30+ Plots'
  },
  {
    id: 'cat-commercial',
    title: 'Commercial Properties',
    type: 'Commercial',
    description: 'Grade-A office suites, retail corridors, and pre-leased assets yielding robust cash flows.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    count: '25+ Spaces'
  },
  {
    id: 'cat-investment',
    title: 'Investment Properties',
    type: 'Apartment',
    listingType: 'buy',
    description: 'Early-allocation developments along upcoming metro corridors offering superior capital appreciation.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80',
    count: '40+ Opportunities'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your dream lifestyle, preferred locations, space requirements, and budget parameters with our team.'
  },
  {
    step: '02',
    title: 'Explore Suitable Properties',
    description: 'Receive a curated, legally-vetted portfolio of matching homes and investment properties tailored specifically for you.'
  },
  {
    step: '03',
    title: 'Schedule a Visit',
    description: 'Experience private, chauffeured on-site viewings guided by experienced property specialists without any pressure.'
  },
  {
    step: '04',
    title: 'Make Your Decision',
    description: 'We manage price negotiations, documentation, bank liaisons, and registration smoothly until the keys are in your hand.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram & Neha Sengupta',
    role: 'Villa Homeowners',
    location: 'Sylvan Parkways, Phase 2',
    content: 'Finding a spacious villa with genuine privacy and clean documentation felt daunting until we contacted Skylark Property. The team arranged private viewings, explained municipal approvals transparently, and negotiated fair terms. Truly a first-class experience.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    propertyPurchased: 'Modern Family Villa'
  },
  {
    id: 'test-2',
    name: 'Rajeshwari Pillai',
    role: 'Senior Tech Executive',
    location: 'Golf Course Extension',
    content: 'The team at Skylark respects your time. They presented exactly the kind of high-floor, light-filled apartments I was seeking without pushing unnecessary inventory. I closed on my Luxury Skyline Residence within three weeks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    propertyPurchased: 'Luxury Skyline Residence'
  },
  {
    id: 'test-3',
    name: 'Arvind Singhania',
    role: 'Managing Director & Investor',
    location: 'Financial Towers District',
    content: 'For commercial investments, numbers and tenancy stability matter most. Skylark Property provided thorough rental yield comparisons and helped me acquire Grade-A office floor space that is currently generating excellent returns.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    propertyPurchased: 'Commercial Vertex Suite'
  },
  {
    id: 'test-4',
    name: 'Preeti & Tarun Khurana',
    role: 'Independent Homeowners',
    location: 'Heritage Greens',
    content: 'We wanted an independent house with its own courtyard for our parents and children. Skylark located an off-market property in Heritage Greens that checked all our requirements. Transparent paperwork and exceptional courteousness.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    propertyPurchased: 'Heritage Courtyard House'
  }
];
