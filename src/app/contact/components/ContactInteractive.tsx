'use client';

import React, { useState } from 'react';
import ContactMethodCard from './ContactMethodCard';
import ProjectScopeSelector from './ProjectScopeSelector';
import ContactForm from './ContactForm';
import CalendarBooking from './CalendarBooking';
import TrustIndicators from './TrustIndicators';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  value: string;
  availability: string;
  action: string;
}

interface ProjectScope {
  id: string;
  title: string;
  description: string;
  icon: string;
  timeline: string;
  investment: string;
}

const ContactInteractive: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<ContactMethod | null>(null);
  const [selectedScope, setSelectedScope] = useState<ProjectScope | null>(null);
  const [showForm, setShowForm] = useState(false);

  const contactMethods: ContactMethod[] = [
    {
      icon: 'EnvelopeIcon',
      title: 'Email Consultation',
      description: 'Detailed written communication for complex requirements',
      value: 'sujay@cybershieldpro.com',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: 'PhoneIcon',
      title: 'Phone Discussion',
      description: 'Direct conversation for urgent security matters',
      value: '+91 98765 43210',
      availability: 'Mon-Fri, 9 AM - 6 PM IST',
      action: 'Schedule Call'
    },
    {
      icon: 'VideoCameraIcon',
      title: 'Video Conference',
      description: 'Face-to-face virtual meeting for strategic planning',
      value: 'Book via calendar',
      availability: 'Flexible scheduling available',
      action: 'Book Meeting'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Live Chat',
      description: 'Quick questions and immediate assistance',
      value: 'Available now',
      availability: 'Business hours: 9 AM - 6 PM IST',
      action: 'Start Chat'
    }
  ];

  const handleMethodSelect = (method: ContactMethod) => {
    setSelectedMethod(method);
    if (method.title === 'Email Consultation') {
      setShowForm(true);
    }
  };

  const handleScopeSelect = (scope: ProjectScope) => {
    setSelectedScope(scope);
    setShowForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Choose Your Contact Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ContactMethodCard
                  key={index}
                  method={method}
                  onSelect={handleMethodSelect}
                />
              ))}
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-6">
            <ProjectScopeSelector
              onScopeSelect={handleScopeSelect}
              selectedScope={selectedScope}
            />
          </section>

          {showForm && (
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Submit Your Inquiry</h2>
              </div>
              <ContactForm selectedScope={selectedScope} />
            </section>
          )}

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Or Book Immediate Consultation</h2>
            </div>
            <CalendarBooking />
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <TrustIndicators />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInteractive;