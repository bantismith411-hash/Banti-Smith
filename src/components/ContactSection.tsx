import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledInterest?: string;
  prefilledProperty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledInterest = 'Buying Property',
  prefilledProperty = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    interest: prefilledInterest,
    message: prefilledProperty
      ? `Hello Skylark Property, I would like to schedule a private viewing and receive comprehensive details for "${prefilledProperty}".`
      : '',
    propertyInterest: prefilledProperty
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const interestOptions = [
    'Buying Property',
    'Selling Property',
    'Renting Property',
    'Commercial Property',
    'Investment'
  ];

  const validatePhone = (phone: string) => {
    return phone.replace(/[^0-9+]/g, '').length >= 10;
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!validatePhone(formData.phoneNumber)) {
      setErrorMessage('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable submission
    setTimeout(() => {
      const generatedRef = `SKP-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      interest: 'Buying Property',
      message: '',
      propertyInterest: ''
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A238] block mb-2">
            Get In Touch
          </span>
          <h2
            id="contact-section-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D172A] tracking-tight"
          >
            Connect with Skylark Property
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our experienced property consultants are available to provide transparent, personalized real estate guidance.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Company Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="mb-6">
                <span className="font-brand text-2xl font-bold tracking-wider text-[#0D172A] block">
                  SKYLARK PROPERTY
                </span>
                <span className="text-xs text-[#A98322] font-semibold tracking-wider uppercase block mt-0.5">
                  {COMPANY_DETAILS.industry}
                </span>
              </div>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294]/60 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct Inquiries
                    </span>
                    <a
                      id="contact-phone-direct"
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="font-semibold text-base text-[#0D172A] hover:text-[#C5A238] transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <span className="text-xs text-slate-500 block">Click to call directly</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Instant WhatsApp
                    </span>
                    <a
                      id="contact-whatsapp-direct"
                      href={COMPANY_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-[#0D172A] hover:text-[#25D366] transition-colors"
                    >
                      Chat on WhatsApp (+91 820 777 7000)
                    </a>
                    <span className="text-xs text-slate-500 block">Instant brochure & location pins</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294]/60 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Communication
                    </span>
                    <a
                      id="contact-email-direct"
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="font-semibold text-sm text-[#0D172A] hover:text-[#C5A238] transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294]/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Headquarters
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294]/60 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Advisory Hours
                    </span>
                    <p className="text-xs text-slate-700">
                      {COMPANY_DETAILS.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Call Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  id="contact-quick-call-cta"
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF5E5] text-[#A98322] border border-[#E7D294] font-semibold text-xs sm:text-sm hover:bg-[#F2E5BF] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-quick-whatsapp-cta"
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 font-semibold text-xs sm:text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              {status === 'success' ? (
                <div
                  id="contact-success-panel"
                  className="text-center py-10 space-y-4 animate-in fade-in duration-300"
                >
                  <div className="w-16 h-16 bg-[#FAF5E5] text-[#A98322] border border-[#E7D294] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A238]" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0D172A]">
                    Enquiry Received Successfully
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0D172A]">{formData.fullName}</strong>. Your enquiry has been routed to our senior advisory desk with Reference ID:{' '}
                    <strong className="text-[#A98322]">{referenceId}</strong>.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-md mx-auto text-xs text-slate-600 text-left space-y-1">
                    <p><strong>Preferred Phone:</strong> {formData.phoneNumber}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Category:</strong> {formData.interest}</p>
                    {formData.propertyInterest && (
                      <p><strong>Property Interest:</strong> {formData.propertyInterest}</p>
                    )}
                  </div>

                  <p className="text-xs text-slate-500">
                    A dedicated relationship advisor will reach out to you within 2 business hours.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      id="submit-another-enquiry-btn"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="px-5 py-2.5 rounded-xl bg-[#0D172A] text-white font-semibold text-xs hover:bg-[#1E293B] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D8BD63]" />
                      <span>Call Us Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D172A] mb-1">
                      Send a Property Enquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill in your specifications below for a confidential response from our senior advisors.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      id="form-validation-error"
                      className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="enquiry-fullname" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-fullname"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors"
                    />
                  </div>

                  {/* Phone & Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aditi@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors"
                      />
                    </div>
                  </div>

                  {/* I'm Interested In */}
                  <div>
                    <label htmlFor="enquiry-interest" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      I'm Interested In: *
                    </label>
                    <select
                      id="enquiry-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred configuration, budget range, and timeline..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0D172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A238]/40 focus:border-[#C5A238] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-enquiry-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0D172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98]"
                  >
                    {status === 'submitting' ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D8BD63]" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By submitting, you agree to receive direct property consultations via phone or WhatsApp from Skylark Property.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
