import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  value: string;
  availability: string;
  action: string;
}

interface ContactMethodCardProps {
  method: ContactMethod;
  onSelect: (method: ContactMethod) => void;
}

const ContactMethodCard: React.FC<ContactMethodCardProps> = ({ method, onSelect }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-smooth group cursor-pointer"
         onClick={() => onSelect(method)}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
          <Icon name={method.icon as any} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{method.title}</h3>
          <p className="text-sm text-text-secondary mb-3">{method.description}</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="InformationCircleIcon" size={16} className="text-secondary" />
              <span className="font-medium text-text-primary">{method.value}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="ClockIcon" size={16} className="text-success" />
              <span className="text-text-secondary">{method.availability}</span>
            </div>
          </div>
          <button className="mt-4 text-sm font-semibold text-primary hover:text-secondary transition-smooth flex items-center gap-1">
            {method.action}
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-smooth" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMethodCard;