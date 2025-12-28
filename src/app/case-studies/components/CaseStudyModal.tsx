'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudyModalProps {
  study: {
    id: number;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      label: string;
      value: string;
    }[];
    image: string;
    alt: string;
    logo: string;
    logoAlt: string;
    duration: string;
    services: string[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
      avatar: string;
      avatarAlt: string;
    };
    timeline: {
      phase: string;
      duration: string;
      activities: string[];
    }[];
    technologies: string[];
    pdfUrl: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal = ({ study, isOpen, onClose }: CaseStudyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-text-primary">Case Study Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-md transition-smooth"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-primary" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative h-80 rounded-lg overflow-hidden mb-6">
            <AppImage
              src={study.image}
              alt={study.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <AppImage
                      src={study.logo}
                      alt={study.logoAlt}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <p className="text-white/80">{study.client} • {study.industry}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {study.metrics.map((metric, index) => (
              <div key={index} className="bg-surface rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning mr-2" />
                The Challenge
              </h4>
              <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <Icon name="LightBulbIcon" size={20} className="text-secondary mr-2" />
                Our Solution
              </h4>
              <p className="text-text-secondary leading-relaxed mb-4">{study.solution}</p>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <Icon name="ChartBarIcon" size={20} className="text-success mr-2" />
                Measurable Results
              </h4>
              <ul className="space-y-2">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center">
                <Icon name="ClockIcon" size={20} className="text-primary mr-2" />
                Implementation Timeline
              </h4>
              <div className="space-y-4">
                {study.timeline.map((phase, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-text-primary">{phase.phase}</h5>
                      <span className="text-sm text-text-secondary">{phase.duration}</span>
                    </div>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-text-secondary flex items-start">
                          <span className="mr-2">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center">
                <Icon name="CpuChipIcon" size={20} className="text-secondary mr-2" />
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface border border-border text-text-primary text-sm font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6">
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center">
                <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-accent mr-2" />
                Client Testimonial
              </h4>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={study.testimonial.avatar}
                    alt={study.testimonial.avatarAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary italic mb-4">"{study.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-text-primary">{study.testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{study.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={study.pdfUrl}
                download
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-md transition-smooth font-semibold text-center flex items-center justify-center"
              >
                <Icon name="ArrowDownTrayIcon" size={20} className="mr-2" />
                Download Full Case Study
              </a>
              <a
                href="/contact"
                className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:shadow-md transition-smooth font-semibold text-center flex items-center justify-center"
              >
                <Icon name="ChatBubbleLeftEllipsisIcon" size={20} className="mr-2" />
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;