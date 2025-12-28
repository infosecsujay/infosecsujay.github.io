import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  image: string;
  imageAlt: string;
}

interface FeaturedCaseStudySectionProps {
  className?: string;
}

const FeaturedCaseStudySection = ({ className = '' }: FeaturedCaseStudySectionProps) => {
  const featuredCase: CaseStudy = {
    id: 1,
    title: 'Complete OT Security Transformation',
    client: 'Global Manufacturing Leader',
    industry: 'Industrial Manufacturing',
    challenge: 'Legacy OT infrastructure with zero visibility into security posture, multiple compliance gaps, and increasing cyber threats targeting industrial control systems.',
    solution: 'Implemented comprehensive Claroty platform deployment with NIST framework alignment, IEC 62443 compliance roadmap, and 24/7 monitoring capabilities.',
    results: [
    { metric: 'Threat Detection', value: '95% Improvement' },
    { metric: 'Compliance Score', value: '100% Achieved' },
    { metric: 'Response Time', value: '80% Faster' },
    { metric: 'ROI Timeline', value: '6 Months' }],

    image: "/site_images/img_038.png",
    imageAlt: 'Modern industrial manufacturing facility with automated production lines and advanced control systems'
  };

  return (
    <section className={`bg-surface py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Featured Success Story
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real-world transformation delivering measurable security improvements and ROI
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-auto">
              <AppImage
                src={featuredCase.image}
                alt={featuredCase.imageAlt}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name="BuildingOfficeIcon" size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-text-primary">{featuredCase.industry}</span>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">
                  {featuredCase.title}
                </h3>
                <p className="text-lg text-text-secondary">{featuredCase.client}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="ExclamationTriangleIcon" size={16} className="text-warning mr-2" />
                    Challenge
                  </h4>
                  <p className="text-text-secondary">{featuredCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="LightBulbIcon" size={16} className="text-accent mr-2" />
                    Solution
                  </h4>
                  <p className="text-text-secondary">{featuredCase.solution}</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Key Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {featuredCase.results.map((result, index) =>
                  <div key={index} className="bg-surface rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-sm text-text-secondary">{result.metric}</div>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/case-studies"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-smooth">

                View Full Case Study
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth font-semibold text-lg shadow-lg">

            Explore All Case Studies
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedCaseStudySection;