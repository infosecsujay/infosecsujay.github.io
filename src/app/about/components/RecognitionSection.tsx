import Icon from '@/components/ui/AppIcon';

interface Recognition {
  name: string;
  title: string;
  company: string;
  testimonial: string;
  relationship: string;
}

interface RecognitionSectionProps {
  title: string;
  subtitle: string;
  recognitions: Recognition[];
}

export default function RecognitionSection({ title, subtitle, recognitions }: RecognitionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {recognitions.map((recognition, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="UserCircleIcon" size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary">{recognition.name}</h3>
                  <p className="text-text-secondary text-sm">{recognition.title}</p>
                  <p className="text-primary text-sm font-semibold">{recognition.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <Icon name="ChatBubbleLeftIcon" size={24} className="text-muted-foreground mb-2" />
                <p className="text-text-secondary leading-relaxed italic">
                  &ldquo;{recognition.testimonial}&rdquo;
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="LinkIcon" size={16} />
                <span>{recognition.relationship}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}