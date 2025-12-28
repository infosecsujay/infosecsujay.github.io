'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelinePhase {
  id: number;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}

const timelinePhases: TimelinePhase[] = [
  {
    id: 1,
    phase: "Discovery & Assessment",
    duration: "Week 1-2",
    description: "Comprehensive analysis of existing OT/ICS infrastructure, security posture evaluation, and Claroty deployment planning",
    deliverables: [
      "Network topology mapping",
      "Asset inventory documentation",
      "Risk assessment report",
      "Deployment roadmap"
    ],
    icon: "MagnifyingGlassIcon"
  },
  {
    id: 2,
    phase: "Architecture Design",
    duration: "Week 3-4",
    description: "Custom Claroty architecture design tailored to organizational requirements, compliance needs, and operational constraints",
    deliverables: [
      "Architecture blueprint",
      "Integration specifications",
      "Security policy framework",
      "Scalability plan"
    ],
    icon: "CubeTransparentIcon"
  },
  {
    id: 3,
    phase: "Platform Deployment",
    duration: "Week 5-8",
    description: "Systematic Claroty platform installation, configuration, and integration with existing security infrastructure",
    deliverables: [
      "Platform installation",
      "Sensor deployment",
      "Network integration",
      "Initial configuration"
    ],
    icon: "ServerIcon"
  },
  {
    id: 4,
    phase: "Testing & Validation",
    duration: "Week 9-10",
    description: "Rigorous testing protocols ensuring platform functionality, accuracy, and performance optimization",
    deliverables: [
      "Functionality testing",
      "Performance validation",
      "Security verification",
      "User acceptance testing"
    ],
    icon: "BeakerIcon"
  },
  {
    id: 5,
    phase: "Training & Handover",
    duration: "Week 11-12",
    description: "Comprehensive team training, documentation delivery, and operational transition support",
    deliverables: [
      "Team training sessions",
      "Operations manual",
      "Playbook documentation",
      "Support transition"
    ],
    icon: "AcademicCapIcon"
  },
  {
    id: 6,
    phase: "Ongoing Support",
    duration: "Continuous",
    description: "24/7 expert support, platform optimization, threat intelligence updates, and continuous improvement",
    deliverables: [
      "24/7 support access",
      "Monthly optimization",
      "Quarterly reviews",
      "Threat intelligence"
    ],
    icon: "LifebuoyIcon"
  }
];

const DeploymentTimelineSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activePhase, setActivePhase] = useState(1);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Deployment Timeline
            </h2>
          </div>
          <div className="space-y-8">
            {timelinePhases.map((phase) => (
              <div key={phase.id} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={phase.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{phase.phase}</h3>
                    <p className="text-text-secondary">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ClockIcon" size={20} className="text-secondary" variant="solid" />
            <span className="text-secondary text-sm font-semibold">Proven Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Claroty Deployment Timeline
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Systematic 12-week deployment process ensuring seamless integration, comprehensive training, and measurable security improvements
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
          
          <div className="space-y-12">
            {timelinePhases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}
              >
                <div
                  className={`bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth border-2 cursor-pointer ${
                    activePhase === phase.id ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                        activePhase === phase.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        <Icon name={phase.icon as any} size={28} variant={activePhase === phase.id ? 'solid' : 'outline'} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-text-primary">{phase.phase}</h3>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                    
                    {activePhase === phase.id && (
                      <div className="pt-6 border-t border-border">
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
                          <Icon name="DocumentCheckIcon" size={18} className="text-success" />
                          <span>Key Deliverables</span>
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="CheckCircleIcon" size={18} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                              <span className="text-sm text-text-secondary">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-cta transition-smooth inline-flex items-center space-x-2">
            <span>Download Detailed Timeline</span>
            <Icon name="ArrowDownTrayIcon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimelineSection;