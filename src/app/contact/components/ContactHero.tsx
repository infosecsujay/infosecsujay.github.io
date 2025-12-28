import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-secondary to-primary py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Secure Your Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Multiple pathways to connect with India's premier cybersecurity expert. From quick consultations to enterprise-wide transformations, we're ready to solve your most complex security challenges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="ClockIcon" size={20} className="text-white" />
              <span className="text-sm font-medium">24-48 Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GlobeAltIcon" size={20} className="text-white" />
              <span className="text-sm font-medium">Multi-Timezone Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={20} className="text-white" />
              <span className="text-sm font-medium">Confidential & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;