import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
  description: string;
}

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({ className = '' }: StatsSectionProps) => {
  const stats: Stat[] = [
    {
      id: 1,
      value: '500+',
      label: 'Security Assessments',
      icon: 'DocumentCheckIcon',
      description: 'Comprehensive OT/IT security evaluations completed'
    },
    {
      id: 2,
      value: '98%',
      label: 'Client Satisfaction',
      icon: 'FaceSmileIcon',
      description: 'Enterprise clients rate services as exceptional'
    },
    {
      id: 3,
      value: '15+',
      label: 'Years Experience',
      icon: 'AcademicCapIcon',
      description: 'Deep expertise in industrial cybersecurity'
    },
    {
      id: 4,
      value: '24/7',
      label: 'Global Support',
      icon: 'GlobeAltIcon',
      description: 'Round-the-clock availability for critical issues'
    }
  ];

  return (
    <section className={`bg-surface py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-smooth border border-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Icon name={stat.icon as any} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{stat.label}</h3>
              <p className="text-sm text-text-secondary">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;