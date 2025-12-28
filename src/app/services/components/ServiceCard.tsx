'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  category: string;
  badges: string[];
  pricing?: string;
  deliveryTime?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  category,
  badges,
  pricing,
  deliveryTime
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-smooth">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
              {category}
            </span>
            {badges.map((badge, index) => (
              <span
                key={index}
                className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
              >
                {badge}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-body text-text-secondary">{description}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 p-2 hover:bg-surface rounded-md transition-smooth"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            className="text-text-secondary"
          />
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon
                    name="CheckCircleIcon"
                    size={16}
                    variant="solid"
                    className="text-success mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-4">
              {pricing && (
                <div className="flex items-center gap-1 text-sm text-text-secondary">
                  <Icon name="CurrencyDollarIcon" size={16} />
                  <span>{pricing}</span>
                </div>
              )}
              {deliveryTime && (
                <div className="flex items-center gap-1 text-sm text-text-secondary">
                  <Icon name="ClockIcon" size={16} />
                  <span>{deliveryTime}</span>
                </div>
              )}
            </div>
            <button className="px-4 py-2 bg-cta text-cta-foreground rounded-md hover:shadow-cta transition-smooth text-sm font-semibold">
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}