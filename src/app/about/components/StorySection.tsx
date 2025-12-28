interface StorySectionProps {
  title: string;
  content: string[];
  mission: string;
  values: string[];
}

export default function StorySection({ title, content, mission, values }: StorySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            {title}
          </h2>
          
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Mission Statement</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">{mission}</p>
            
            <h4 className="text-xl font-bold text-text-primary mb-4">Core Values</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text-secondary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}