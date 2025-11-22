"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: [] as string[],
    budget: '',
    timeline: '',
    propertySize: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const capeTownSuburbs = [
    "Select Location",
    "Bantry Bay",
    "Bishopscourt",
    "Camps Bay",
    "Clifton",
    "Constantia",
    "Fresnaye",
    "Green Point",
    "Hout Bay",
    "Newlands",
    "Rondebosch",
    "Sea Point",
    "Other"
  ];

  const projectTypes = [
    "New Landscape Design",
    "Garden Renovation",
    "Pool & Water Features",
    "Indigenous Plant Consultation",
    "Outdoor Entertainment Area",
    "Maintenance & Care"
  ];

  const budgetRanges = [
    "R50,000 - R100,000",
    "R100,000 - R250,000",
    "R250,000 - R500,000",
    "R500,000+"
  ];

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter(t => t !== value)
        : [...prev.projectType, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        projectType: [],
        budget: '',
        timeline: '',
        propertySize: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[hsl(var(--sage-green))] to-[hsl(var(--sage-green))]/80 text-white">
          <div className="container-custom text-center">
            <h1 className="text-white mb-6">Book Your Consultation</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-95">
              Let's discuss your vision and create a customized landscape design proposal for your Cape Town property
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--sage-green))]/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[hsl(var(--sage-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mb-4 text-3xl">Thank You!</h2>
                <p className="text-gray-600 text-lg">
                  Your consultation request has been received. We'll contact you within 24 hours to schedule your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="mb-6 pb-4 border-b border-gray-200">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full"
                        placeholder="+27"
                      />
                    </div>

                    <div>
                      <label htmlFor="location">Property Location *</label>
                      <select
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full"
                      >
                        {capeTownSuburbs.map((suburb) => (
                          <option key={suburb} value={suburb === "Select Location" ? "" : suburb}>
                            {suburb}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="mb-6 pb-4 border-b border-gray-200">Project Details</h3>

                  <div className="space-y-6">
                    {/* Project Type */}
                    <div>
                      <label className="mb-3">Project Type (Select all that apply) *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projectTypes.map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer normal-case">
                            <input
                              type="checkbox"
                              checked={formData.projectType.includes(type)}
                              onChange={() => handleCheckboxChange(type)}
                              className="w-5 h-5 rounded border-gray-300"
                            />
                            <span className="text-base font-normal">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="budget">Budget Range *</label>
                      <select
                        id="budget"
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full"
                      >
                        <option value="">Select Budget Range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Timeline */}
                      <div>
                        <label htmlFor="timeline">Preferred Timeline</label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full"
                        >
                          <option value="">Select Timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6months+">6+ months</option>
                        </select>
                      </div>

                      {/* Property Size */}
                      <div>
                        <label htmlFor="propertySize">Approximate Garden Size (sqm)</label>
                        <input
                          type="text"
                          id="propertySize"
                          value={formData.propertySize}
                          onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                          className="w-full"
                          placeholder="e.g., 500"
                        />
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label htmlFor="message">Tell us about your vision</label>
                      <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none"
                        placeholder="Share details about your outdoor space, design preferences, and any specific requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button type="submit" variant="cta" className="px-16">
                    Submit Consultation Request
                  </Button>
                </div>

                <p className="text-sm text-center text-gray-500">
                  We'll review your information and contact you within 24 hours to schedule your consultation.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--sage-green))]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[hsl(var(--charcoal))]">1</span>
                  </div>
                  <h4 className="mb-2">Initial Consultation</h4>
                  <p className="text-sm text-gray-600">
                    We'll visit your property to assess the space, discuss your vision, and understand your requirements
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--sage-green))]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[hsl(var(--charcoal))]">2</span>
                  </div>
                  <h4 className="mb-2">Custom Design</h4>
                  <p className="text-sm text-gray-600">
                    Receive a detailed design proposal with plant selections, layout plans, and budget breakdown
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--sage-green))]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[hsl(var(--charcoal))]">3</span>
                  </div>
                  <h4 className="mb-2">Implementation</h4>
                  <p className="text-sm text-gray-600">
                    Our team manages the full project from permits to planting, ensuring quality at every step
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
