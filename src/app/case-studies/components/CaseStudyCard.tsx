import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudyCardProps {
  study: {
    id: number;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      label: string;
      value: string;
    }[];
    image: string;
    alt: string;
    logo: string;
    logoAlt: string;
    duration: string;
    services: string[];
  };
  onViewDetails: (id: number) => void;
}

const CaseStudyCard = ({ study, onViewDetails }: CaseStudyCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-smooth">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={study.image}
          alt={study.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md">
          <span className="text-sm font-semibold text-text-primary">{study.industry}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center overflow-hidden">
            <AppImage
              src={study.logo}
              alt={study.logoAlt}
              className="w-12 h-12 object-contain"
            />
          </div>
          <span className="text-sm text-text-secondary">{study.duration}</span>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-2">{study.title}</h3>
        <p className="text-sm text-text-secondary mb-4">{study.client}</p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
              <Icon name="ExclamationTriangleIcon" size={16} className="text-warning mr-2" />
              Challenge
            </h4>
            <p className="text-sm text-text-secondary line-clamp-2">{study.challenge}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
              <Icon name="LightBulbIcon" size={16} className="text-secondary mr-2" />
              Solution
            </h4>
            <p className="text-sm text-text-secondary line-clamp-2">{study.solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {study.metrics.map((metric, index) => (
            <div key={index} className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-xs text-text-secondary">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {study.services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
            >
              {service}
            </span>
          ))}
          {study.services.length > 3 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              +{study.services.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(study.id)}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-md transition-smooth font-semibold text-sm flex items-center justify-center"
        >
          View Full Case Study
          <Icon name="ArrowRightIcon" size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;