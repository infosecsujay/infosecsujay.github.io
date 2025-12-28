import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ClarotyExpertiseSectionProps {
  className?: string;
}

const ClarotyExpertiseSection = ({ className = '' }: ClarotyExpertiseSectionProps) => {
  const achievements = [
  {
    id: 1,
    metric: '200+',
    label: 'Claroty Deployments',
    icon: 'LaunchIcon'
  },
  {
    id: 2,
    metric: '99.9%',
    label: 'Platform Uptime',
    icon: 'ChartBarIcon'
  },
  {
    id: 3,
    metric: '50+',
    label: 'Enterprise Clients',
    icon: 'BuildingOfficeIcon'
  }];


  const capabilities = [
  'Complete platform deployment and configuration',
  'Custom integration with existing security infrastructure',
  'Advanced threat detection and response setup',
  'Comprehensive team training and knowledge transfer',
  'Ongoing optimization and performance tuning',
  '24/7 technical support and incident response'];


  return (
    <section className={`bg-gradient-to-br from-navy to-primary text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="StarIcon" size={20} className="text-accent" variant="solid" />
              <span className="text-sm font-medium">Premier Claroty Expert</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              World-Class Claroty Platform Expertise
            </h2>

            <p className="text-lg text-white/90 leading-relaxed">
              As one of the leading Claroty consultants globally, I bring unparalleled expertise in deploying, optimizing, and managing the Claroty platform for enterprise industrial environments.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement) =>
              <div key={achievement.id} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-2">
                    <Icon name={achievement.icon as any} size={24} className="text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{achievement.metric}</div>
                  <div className="text-sm text-white/80">{achievement.label}</div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-4">Core Capabilities:</h3>
              {capabilities.map((capability, index) =>
              <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success mt-1 flex-shrink-0" variant="solid" />
                  <span className="text-white/90">{capability}</span>
                </div>
              )}
            </div>

            <Link
              href="/claroty-expertise"
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-smooth font-semibold text-lg shadow-xl">

              Explore Claroty Services
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <AppImage
                src="/site_images/img_044.png"
                alt="Modern cybersecurity operations center with multiple monitors displaying network security dashboards and threat detection systems"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <h4 className="text-xl font-bold mb-2">Trusted by Industry Leaders</h4>
                  <p className="text-white/90 text-sm">
                    Delivering enterprise-grade Claroty solutions to Fortune 500 companies worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ClarotyExpertiseSection;