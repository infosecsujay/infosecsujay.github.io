'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SecurityMetric {
  id: number;
  metric: string;
  before: string;
  after: string;
  improvement: string;
  icon: string;
}

const securityMetrics: SecurityMetric[] = [
  {
    id: 1,
    metric: "Asset Visibility",
    before: "42%",
    after: "100%",
    improvement: "+58%",
    icon: "EyeIcon"
  },
  {
    id: 2,
    metric: "Threat Detection Time",
    before: "72 hours",
    after: "< 5 minutes",
    improvement: "99.5% faster",
    icon: "BoltIcon"
  },
  {
    id: 3,
    metric: "Vulnerability Coverage",
    before: "38%",
    after: "97%",
    improvement: "+59%",
    icon: "ShieldCheckIcon"
  },
  {
    id: 4,
    metric: "Network Segmentation",
    before: "Limited",
    after: "Comprehensive",
    improvement: "100% coverage",
    icon: "ServerStackIcon"
  },
  {
    id: 5,
    metric: "Compliance Score",
    before: "61%",
    after: "98%",
    improvement: "+37%",
    icon: "DocumentCheckIcon"
  },
  {
    id: 6,
    metric: "Incident Response",
    before: "Manual",
    after: "Automated",
    improvement: "85% reduction",
    icon: "CommandLineIcon"
  }
];

const BeforeAfterSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeView, setActiveView] = useState<'before' | 'after'>('before');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-surface to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Security Transformation Metrics
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMetrics.map((metric) => (
              <div key={metric.id} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={metric.icon as any} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{metric.metric}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Before:</span>
                    <span className="font-semibold text-text-primary">{metric.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">After:</span>
                    <span className="font-semibold text-success">{metric.after}</span>
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
    <section className="py-20 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ChartBarIcon" size={20} className="text-success" variant="solid" />
            <span className="text-success text-sm font-semibold">Measurable Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Before & After Security Posture
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Real transformation metrics from enterprise Claroty deployments showing dramatic improvements in visibility, detection, and response capabilities
          </p>
          
          <div className="inline-flex items-center bg-card rounded-lg p-1 border border-border">
            <button
              onClick={() => setActiveView('before')}
              className={`px-6 py-2 rounded-md font-semibold transition-smooth ${
                activeView === 'before'
                  ? 'bg-error text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Before Claroty
            </button>
            <button
              onClick={() => setActiveView('after')}
              className={`px-6 py-2 rounded-md font-semibold transition-smooth ${
                activeView === 'after' ?'bg-success text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              After Claroty
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden border border-border"
            >
              <div className={`h-2 ${activeView === 'before' ? 'bg-error' : 'bg-success'}`} />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeView === 'before' ? 'bg-error/10' : 'bg-success/10'
                  }`}>
                    <Icon
                      name={metric.icon as any}
                      size={24}
                      className={activeView === 'before' ? 'text-error' : 'text-success'}
                      variant="solid"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{metric.metric}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${
                    activeView === 'before' ? 'bg-error/5 border-2 border-error/20' : 'bg-muted'
                  }`}>
                    <div className="text-xs text-text-secondary mb-1">Before Deployment</div>
                    <div className={`text-2xl font-bold ${
                      activeView === 'before' ? 'text-error' : 'text-text-primary'
                    }`}>
                      {metric.before}
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    activeView === 'after' ? 'bg-success/5 border-2 border-success/20' : 'bg-muted'
                  }`}>
                    <div className="text-xs text-text-secondary mb-1">After Deployment</div>
                    <div className={`text-2xl font-bold ${
                      activeView === 'after' ? 'text-success' : 'text-text-primary'
                    }`}>
                      {metric.after}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <Icon name="ArrowTrendingUpIcon" size={18} className="text-success" />
                    <span className="text-sm font-semibold text-success">{metric.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Security Posture?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive security assessment to discover your transformation potential with Claroty
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl transition-smooth inline-flex items-center space-x-2">
            <span>Request Security Assessment</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;