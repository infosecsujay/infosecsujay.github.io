import React from 'react';
import Icon from '@/components/ui/AppIcon';


interface TrustIndicatorsProps {
  className?: string;
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ className = '' }) => {
  const certifications = [
    { name: 'NIST Certified', icon: 'ShieldCheckIcon' },
    { name: 'IEC 62443 Expert', icon: 'DocumentCheckIcon' },
    { name: 'Claroty Specialist', icon: 'CpuChipIcon' },
    { name: 'ISO 27001', icon: 'LockClosedIcon' }
  ];

  const responseMetrics = [
    { label: 'Average Response Time', value: '< 24 Hours', icon: 'ClockIcon' },
    { label: 'Client Satisfaction', value: '98%', icon: 'StarIcon' },
    { label: 'Projects Completed', value: '150+', icon: 'CheckBadgeIcon' },
    { label: 'Industries Served', value: '12+', icon: 'BuildingOfficeIcon' }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
          <h3 className="text-xl font-semibold text-text-primary">Trust & Security</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/50 rounded-lg p-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={cert.icon as any} size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-text-primary">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6">Our Commitment to You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {responseMetrics.map((metric, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={metric.icon as any} size={20} className="text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm text-text-secondary">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Trusted By Industry Leaders</h3>
        <div className="grid grid-cols-3 gap-6 opacity-60">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="aspect-video bg-surface rounded-lg flex items-center justify-center">
              <span className="text-xs text-text-secondary font-medium">Client Logo</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-success/10 border border-success/20 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Icon name="LockClosedIcon" size={24} className="text-success flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-success mb-2">Enterprise-Grade Security</h4>
            <p className="text-sm text-text-secondary">
              All communications are encrypted end-to-end. Your data is protected with military-grade security protocols. We maintain strict confidentiality and can work under your existing NDA or provide our standard confidentiality agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;