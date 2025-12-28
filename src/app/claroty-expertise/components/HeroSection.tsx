import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="ShieldCheckIcon" size={20} className="text-white" variant="solid" />
              <span className="text-white text-sm font-semibold">Premier Claroty Consultant</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Claroty Expertise That Transforms Industrial Security
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              As India's leading Claroty specialist, I deliver enterprise-grade OT/ICS security solutions with proven deployment success across critical infrastructure sectors. Transform your industrial cybersecurity posture with world-class expertise.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl transition-smooth flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-smooth">
                View Case Studies
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm mt-1">Claroty Deployments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm mt-1">Expert Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="/site_images/img_044.png"
                alt="Modern industrial control room with multiple monitoring screens displaying cybersecurity dashboards and network topology"
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} className="text-success" variant="solid" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">100%</div>
                  <div className="text-sm text-text-secondary">Deployment Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;