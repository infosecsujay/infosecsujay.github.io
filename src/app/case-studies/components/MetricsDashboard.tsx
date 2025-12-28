import Icon from '@/components/ui/AppIcon';

interface MetricsDashboardProps {
  metrics: {
    label: string;
    value: string;
    icon: string;
    trend: string;
  }[];
}

const MetricsDashboard = ({ metrics }: MetricsDashboardProps) => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">
        Aggregate Impact Across All Engagements
      </h2>
      <p className="text-white/80 text-center mb-8">
        Quantified results demonstrating measurable security improvements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name={metric.icon as any} size={24} className="text-white" />
              </div>
              <span className="text-sm font-medium text-white/80">{metric.trend}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <div className="text-sm text-white/80">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsDashboard;