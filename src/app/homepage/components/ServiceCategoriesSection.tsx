'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  services: string[];
  color: string;
}

interface ServiceCategoriesSectionProps {
  className?: string;
}

const ServiceCategoriesSection = ({ className = '' }: ServiceCategoriesSectionProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories: ServiceCategory[] = [
    {
      id: 1,
      title: 'OT Security Assessment',
      description: 'Comprehensive evaluation of operational technology environments',
      icon: 'ShieldCheckIcon',
      services: ['Asset Discovery', 'Vulnerability Assessment', 'Risk Analysis', 'Compliance Audit'],
      color: 'from-primary to-navy'
    },
    {
      id: 2,
      title: 'Claroty Implementation',
      description: 'Expert deployment and optimization of Claroty platform',
      icon: 'CpuChipIcon',
      services: ['Platform Setup', 'Integration', 'Custom Configuration', 'Training'],
      color: 'from-secondary to-teal'
    },
    {
      id: 3,
      title: 'NIST Framework',
      description: 'Implementation of NIST cybersecurity framework standards',
      icon: 'DocumentTextIcon',
      services: ['Gap Analysis', 'Framework Mapping', 'Control Implementation', 'Compliance'],
      color: 'from-accent to-coral'
    },
    {
      id: 4,
      title: 'IEC 62443 Compliance',
      description: 'Industrial automation security standard implementation',
      icon: 'CheckBadgeIcon',
      services: ['Standard Assessment', 'Zone Segmentation', 'Security Levels', 'Certification'],
      color: 'from-success to-trust'
    },
    {
      id: 5,
      title: 'Virtual CISO Services',
      description: 'Fractional CISO expertise for strategic security leadership',
      icon: 'UserGroupIcon',
      services: ['Strategy Development', 'Risk Management', 'Board Reporting', 'Team Guidance'],
      color: 'from-warning to-brand-secondary'
    },
    {
      id: 6,
      title: 'Incident Response',
      description: '24/7 rapid response for security incidents and breaches',
      icon: 'BoltIcon',
      services: ['Threat Containment', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident'],
      color: 'from-destructive to-error'
    }
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Enterprise-grade cybersecurity solutions tailored to your industrial infrastructure needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-smooth border border-border h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={category.icon as any} size={32} className="text-white" variant="solid" />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">{category.title}</h3>
                <p className="text-text-secondary mb-4">{category.description}</p>

                <div className={`space-y-2 transition-all duration-300 ${hoveredCard === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-text-primary mb-2">Key Services:</p>
                    <ul className="space-y-1">
                      {category.services.map((service, index) => (
                        <li key={index} className="flex items-center text-sm text-text-secondary">
                          <Icon name="CheckIcon" size={16} className="text-success mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mt-4 transition-smooth"
                >
                  Learn More
                  <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth font-semibold text-lg shadow-lg"
          >
            View All Services
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;