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

interface ProjectScopeSelectorProps {
  onScopeSelect: (scope: ProjectScope) => void;
  selectedScope: ProjectScope | null;
}

const ProjectScopeSelector: React.FC<ProjectScopeSelectorProps> = ({ onScopeSelect, selectedScope }) => {
  const projectScopes: ProjectScope[] = [
    {
      id: 'quick-consultation',
      title: 'Quick Consultation',
      description: 'One-time expert advice on specific security challenges',
      icon: 'ChatBubbleLeftEllipsisIcon',
      timeline: '1-2 hours',
      investment: '$500 - $1,500'
    },
    {
      id: 'security-assessment',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      icon: 'ClipboardDocumentCheckIcon',
      timeline: '1-2 weeks',
      investment: '$5,000 - $15,000'
    },
    {
      id: 'implementation-project',
      title: 'Implementation Project',
      description: 'Full deployment of security solutions and frameworks',
      icon: 'CogIcon',
      timeline: '1-3 months',
      investment: '$25,000 - $100,000'
    },
    {
      id: 'retainer-agreement',
      title: 'Retainer Agreement',
      description: 'Ongoing virtual CISO services and strategic guidance',
      icon: 'CalendarDaysIcon',
      timeline: 'Monthly/Quarterly',
      investment: '$10,000+ /month'
    },
    {
      id: 'enterprise-transformation',
      title: 'Enterprise Transformation',
      description: 'Complete cybersecurity program overhaul and optimization',
      icon: 'BuildingOfficeIcon',
      timeline: '6-12 months',
      investment: '$250,000+'
    },
    {
      id: 'training-workshop',
      title: 'Training & Workshop',
      description: 'Team upskilling and knowledge transfer sessions',
      icon: 'AcademicCapIcon',
      timeline: '1-5 days',
      investment: '$3,000 - $20,000'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="BriefcaseIcon" size={24} className="text-primary" />
        <h3 className="text-xl font-semibold text-text-primary">Select Your Project Scope</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectScopes.map((scope) => (
          <button
            key={scope.id}
            onClick={() => onScopeSelect(scope)}
            className={`text-left p-5 rounded-lg border-2 transition-smooth ${
              selectedScope?.id === scope.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-card'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                selectedScope?.id === scope.id ? 'bg-primary text-white' : 'bg-surface text-primary'
              }`}>
                <Icon name={scope.icon as any} size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary mb-1">{scope.title}</h4>
                <p className="text-sm text-text-secondary">{scope.description}</p>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="ClockIcon" size={14} />
                <span>{scope.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="CurrencyDollarIcon" size={14} />
                <span>{scope.investment}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectScopeSelector;