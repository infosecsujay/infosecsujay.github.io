import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const testimonials: Testimonial[] = [
{
  id: 1,
  name: "Michael Chen",
  role: "Chief Information Security Officer",
  company: "Global Manufacturing Corp",
  image: "/site_images/img_016.png",
  alt: "Professional headshot of Asian male executive in navy suit with confident smile",
  quote: "Sujay's Claroty expertise transformed our OT security posture completely. His deployment methodology was flawless, and the results exceeded all expectations. We achieved 100% asset visibility within 6 weeks and reduced our incident response time by 95%. This is the level of expertise every enterprise needs.",
  metrics: [
  { label: "Asset Visibility", value: "100%" },
  { label: "Response Time", value: "-95%" }]

},
{
  id: 2,
  name: "Sarah Williams",
  role: "VP of IT Operations",
  company: "Energy Infrastructure Ltd",
  image: "/site_images/img_010.png",
  alt: "Professional portrait of Caucasian female executive with blonde hair in gray blazer",
  quote: "Working with Sujay on our Claroty implementation was a game-changer. His deep understanding of both OT environments and Claroty's capabilities meant zero disruption to our critical operations. The ROI was evident within the first quarter, and his ongoing support has been exceptional.",
  metrics: [
  { label: "Zero Downtime", value: "100%" },
  { label: "First Quarter ROI", value: "285%" }]

},
{
  id: 3,
  name: "David Rodriguez",
  role: "Director of Cybersecurity",
  company: "Pharmaceutical Industries Inc",
  image: "/site_images/img_039.png",
  alt: "Professional headshot of Hispanic male in dark suit with warm smile in modern office",
  quote: "Sujay's Claroty deployment expertise is unmatched. He not only implemented the platform flawlessly but also trained our team to maximize its capabilities. Our compliance scores improved dramatically, and we now have complete confidence in our OT security posture. Highly recommended for any enterprise Claroty project.",
  metrics: [
  { label: "Compliance Score", value: "+42%" },
  { label: "Team Confidence", value: "100%" }]

}];


const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-success" variant="solid" />
            <span className="text-success text-sm font-semibold">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            What Enterprise Leaders Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real testimonials from CISOs and security leaders who have experienced transformative results with Claroty deployments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden border border-border">

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <AppImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                    <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Icon name="ChatBubbleLeftEllipsisIcon" size={32} className="text-primary/20 mb-4" />
                  <p className="text-text-secondary leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  {testimonial.metrics.map((metric, idx) =>
                <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-success">{metric.value}</div>
                      <div className="text-xs text-text-secondary mt-1">{metric.label}</div>
                    </div>
                )}
                </div>
              </div>
              
              <div className="bg-primary/5 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) =>
                <Icon key={star} name="StarIcon" size={16} className="text-warning" variant="solid" />
                )}
                </div>
                <span className="text-xs text-text-secondary font-semibold">Verified Client</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-cta transition-smooth inline-flex items-center space-x-2">
            <span>View All Success Stories</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;