'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProjectScope {
  id: string;
  title: string;
  description: string;
  icon: string;
  timeline: string;
  investment: string;
}

interface ContactFormProps {
  selectedScope: ProjectScope | null;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  message: string;
  urgency: string;
  budget: string;
  preferredContact: string;
  hasNDA: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedScope }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    message: '',
    urgency: 'normal',
    budget: '',
    preferredContact: 'email',
    hasNDA: false
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        industry: '',
        message: '',
        urgency: 'normal',
        budget: '',
        preferredContact: 'email',
        hasNDA: false
      });
      setFileName('');
    }, 3000);
  };

  const industries = [
    'Manufacturing',
    'Energy & Utilities',
    'Oil & Gas',
    'Chemical Processing',
    'Water Treatment',
    'Transportation',
    'Healthcare',
    'Financial Services',
    'Government',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {selectedScope && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
          <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-text-primary">Selected Scope: {selectedScope.title}</p>
            <p className="text-xs text-text-secondary mt-1">{selectedScope.timeline} • {selectedScope.investment}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-2">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
            placeholder="john.doe@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            Company Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
            placeholder="Acme Corporation"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-text-primary mb-2">
            Job Title <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
            placeholder="Chief Information Security Officer"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-text-primary mb-2">
            Industry <span className="text-error">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
          >
            <option value="">Select Industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-text-primary mb-2">
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
          >
            <option value="low">Low - Planning Phase</option>
            <option value="normal">Normal - Within 2-4 Weeks</option>
            <option value="high">High - Within 1 Week</option>
            <option value="critical">Critical - Immediate Attention</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
            Estimated Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary"
          >
            <option value="">Select Budget Range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="over-250k">Over $250,000</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Project Details & Security Challenges <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-surface border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-text-primary resize-none"
          placeholder="Describe your current security challenges, specific requirements, and what you hope to achieve..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Preferred Contact Method
        </label>
        <div className="flex flex-wrap gap-4">
          {['email', 'phone', 'video-call'].map(method => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary focus:ring-2 focus:ring-ring"
              />
              <span className="text-sm text-text-primary capitalize">{method.replace('-', ' ')}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Confidential Project Brief (Optional)
        </label>
        <div className="relative">
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <label
            htmlFor="fileUpload"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-surface border-2 border-dashed border-input rounded-lg cursor-pointer hover:border-primary transition-smooth"
          >
            <Icon name="DocumentArrowUpIcon" size={20} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {fileName || 'Upload PDF or Word document (Max 10MB)'}
            </span>
          </label>
        </div>
        <p className="text-xs text-text-secondary mt-2">All files are encrypted and handled with enterprise-grade security</p>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="hasNDA"
          name="hasNDA"
          checked={formData.hasNDA}
          onChange={handleInputChange}
          className="w-5 h-5 mt-0.5 text-primary focus:ring-2 focus:ring-ring rounded"
        />
        <label htmlFor="hasNDA" className="text-sm text-text-secondary">
          I understand that all communications are confidential and covered under standard NDA terms. For custom NDA requirements, please mention in project details.
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting || submitSuccess}
          className="flex-1 px-8 py-4 bg-cta text-cta-foreground rounded-lg font-semibold hover:shadow-cta transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
              <span>Submitting...</span>
            </>
          ) : submitSuccess ? (
            <>
              <Icon name="CheckCircleIcon" size={20} />
              <span>Submitted Successfully!</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
        <button
          type="button"
          className="px-8 py-4 bg-surface text-text-primary border border-border rounded-lg font-semibold hover:bg-muted transition-smooth"
        >
          Save as Draft
        </button>
      </div>

      {submitSuccess && (
        <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-start gap-3">
          <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-success">Thank you for reaching out!</p>
            <p className="text-xs text-text-secondary mt-1">We'll review your inquiry and respond within 24-48 hours. Check your email for confirmation.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;