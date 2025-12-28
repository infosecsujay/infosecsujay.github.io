import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-navy to-secondary text-white overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="ShieldCheckIcon" size={20} className="text-accent" variant="solid" />
              <span className="text-sm font-medium">Trusted by Fortune 500 Companies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Solving Complex Security Problems with{' '}
              <span className="text-accent">Clarity, Speed & Expertise</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Enterprise-grade OT/IT cybersecurity solutions from India's premier Claroty expert. Transform your industrial security posture with bulletproof strategies and unmatched technical mastery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-smooth font-semibold text-lg shadow-xl hover:shadow-2xl"
              >
                Get Strategic Consultation
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-smooth font-semibold text-lg border border-white/30"
              >
                Explore Services
                <Icon name="ChevronRightIcon" size={20} className="ml-2" />
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                <span className="text-sm font-medium">NIST Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                <span className="text-sm font-medium">IEC 62443 Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                <span className="text-sm font-medium">Claroty Master</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/30">
                  <Icon name="ShieldCheckIcon" size={80} className="text-accent mx-auto" variant="solid" />
                  <p className="text-2xl font-bold">Enterprise Security Excellence</p>
                  <p className="text-white/80">Protecting Critical Infrastructure Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;