import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface MethodologySectionProps {
  title: string;
  subtitle: string;
  steps: MethodologyStep[];
}

export default function MethodologySection({ title, subtitle, steps }: MethodologySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <div className="mb-4 pt-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={step.icon as any} size={32} className="text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}