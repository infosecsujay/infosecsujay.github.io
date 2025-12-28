import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your OT Security?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Schedule a consultation to discuss your Claroty deployment needs and discover how world-class expertise can elevate your industrial cybersecurity posture
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-xl transition-smooth inline-flex items-center space-x-2">
              <Icon name="CalendarIcon" size={20} />
              <span>Schedule Consultation</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-smooth inline-flex items-center space-x-2">
              <Icon name="DocumentTextIcon" size={20} />
              <span>Download Claroty Guide</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="ClockIcon" size={32} className="text-white mx-auto mb-4" variant="solid" />
              <h3 className="text-white font-bold mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">Round-the-clock expert assistance for all Claroty deployments</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="ShieldCheckIcon" size={32} className="text-white mx-auto mb-4" variant="solid" />
              <h3 className="text-white font-bold mb-2">Proven Track Record</h3>
              <p className="text-white/80 text-sm">50+ successful enterprise deployments with 100% satisfaction</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="LaunchIcon" size={32} className="text-white mx-auto mb-4" variant="solid" />
              <h3 className="text-white font-bold mb-2">Rapid Deployment</h3>
              <p className="text-white/80 text-sm">Average 12-week timeline from assessment to full operation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;