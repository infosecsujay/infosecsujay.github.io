import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-navy to-secondary text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Icon name="BoltIcon" size={20} className="text-accent" variant="solid" />
            <span className="text-sm font-medium">Ready to Transform Your Security?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Let's Build an Unbreakable Security Foundation for Your Enterprise
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Schedule a strategic consultation to discuss your OT/IT security challenges and discover how world-class expertise can deliver measurable results in weeks, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-smooth font-semibold text-lg shadow-2xl hover:shadow-accent/50"
            >
              Schedule Free Consultation
              <Icon name="CalendarIcon" size={20} className="ml-2" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-smooth font-semibold text-lg border border-white/30"
            >
              Explore Services
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
                <Icon name="ClockIcon" size={24} className="text-accent" />
              </div>
              <p className="text-white/90 font-medium">24/7 Global Support</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
                <Icon name="ShieldCheckIcon" size={24} className="text-accent" />
              </div>
              <p className="text-white/90 font-medium">Enterprise-Grade Security</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
                <Icon name="ChartBarIcon" size={24} className="text-accent" />
              </div>
              <p className="text-white/90 font-medium">Measurable ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;