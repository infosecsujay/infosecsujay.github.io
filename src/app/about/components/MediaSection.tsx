import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MediaMention {
  title: string;
  publication: string;
  date: string;
  type: 'article' | 'speaking' | 'interview';
  image: string;
  imageAlt: string;
  link: string;
}

interface MediaSectionProps {
  title: string;
  mentions: MediaMention[];
}

export default function MediaSection({ title, mentions }: MediaSectionProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return 'DocumentTextIcon';
      case 'speaking':
        return 'MicrophoneIcon';
      case 'interview':
        return 'VideoCameraIcon';
      default:
        return 'NewspaperIcon';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-primary/10 text-primary';
      case 'speaking':
        return 'bg-accent/10 text-accent';
      case 'interview':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentions.map((mention, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48 bg-muted">
                <AppImage
                  src={mention.image}
                  alt={mention.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${getTypeBadge(mention.type)}`}>
                  <Icon name={getTypeIcon(mention.type) as any} size={14} />
                  <span className="capitalize">{mention.type}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
                  {mention.title}
                </h3>
                <p className="text-text-secondary text-sm mb-1">{mention.publication}</p>
                <p className="text-text-secondary text-xs mb-4">{mention.date}</p>
                
                <a
                  href={mention.link}
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors text-sm font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Read More</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}