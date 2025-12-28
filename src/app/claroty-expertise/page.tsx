import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CertificationSection from './components/CertificationSection';
import DeploymentTimelineSection from './components/DeploymentTimelineSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import IntegrationCapabilitiesSection from './components/IntegrationCapabilitiesSection';
import ROICalculatorSection from './components/ROICalculatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Claroty Expertise - CyberShield Pro',
  description: 'Premier Claroty consultant delivering enterprise-grade OT/ICS security solutions with proven deployment excellence. Transform your industrial cybersecurity posture with world-class expertise and 100% deployment success rate.',
};

export default function ClarotyExpertisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <CertificationSection />
        <DeploymentTimelineSection />
        <BeforeAfterSection />
        <IntegrationCapabilitiesSection />
        <ROICalculatorSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}