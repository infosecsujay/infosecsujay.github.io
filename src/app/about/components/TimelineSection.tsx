import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'achievement' | 'certification' | 'milestone';
}

interface TimelineSectionProps {
  title: string;
  events: TimelineEvent[];
}

export default function TimelineSection({ title, events }: TimelineSectionProps) {
  const getIconName = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'TrophyIcon';
      case 'certification':
        return 'AcademicCapIcon';
      case 'milestone':
        return 'StarIcon';
      default:
        return 'CheckCircleIcon';
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'bg-accent text-white';
      case 'certification':
        return 'bg-secondary text-white';
      case 'milestone':
        return 'bg-primary text-white';
      default:
        return 'bg-muted text-text-primary';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12 text-center">
          {title}
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6 md:space-x-8">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getColorClass(event.type)} flex items-center justify-center shadow-lg z-10`}>
                  <Icon name={getIconName(event.type)} size={28} variant="solid" />
                </div>
                
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-primary">{event.year}</span>
                    <span className="text-xs px-3 py-1 bg-muted rounded-full text-text-secondary capitalize">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{event.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}