'use client';

import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ServiceCategoriesSection from './ServiceCategoriesSection';
import ClarotyExpertiseSection from './ClarotyExpertiseSection';
import FeaturedCaseStudySection from './FeaturedCaseStudySection';
import ThoughtLeadershipSection from './ThoughtLeadershipSection';
import TestimonialsSection from './TestimonialsSection';
import CertificationsSection from './CertificationsSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';

const HomepageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection />
        <StatsSection />
        <ServiceCategoriesSection />
        <ClarotyExpertiseSection />
        <FeaturedCaseStudySection />
        <ThoughtLeadershipSection />
        <TestimonialsSection />
        <CertificationsSection />
        <CTASection />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ServiceCategoriesSection />
      <ClarotyExpertiseSection />
      <FeaturedCaseStudySection />
      <ThoughtLeadershipSection />
      <TestimonialsSection />
      <CertificationsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default HomepageInteractive;