'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterPanelProps {
  industries: FilterOption[];
  serviceTypes: FilterOption[];
  urgencyLevels: FilterOption[];
  onFilterChange: (filters: {
    industry: string;
    serviceType: string;
    urgency: string;
  }) => void;
}

export default function FilterPanel({
  industries,
  serviceTypes,
  urgencyLevels,
  onFilterChange
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('All');
  const [selectedUrgency, setSelectedUrgency] = useState('All');

  const handleFilterChange = (type: string, value: string) => {
    let newIndustry = selectedIndustry;
    let newServiceType = selectedServiceType;
    let newUrgency = selectedUrgency;

    if (type === 'industry') newIndustry = value;
    if (type === 'serviceType') newServiceType = value;
    if (type === 'urgency') newUrgency = value;

    setSelectedIndustry(newIndustry);
    setSelectedServiceType(newServiceType);
    setSelectedUrgency(newUrgency);

    onFilterChange({
      industry: newIndustry,
      serviceType: newServiceType,
      urgency: newUrgency
    });
  };

  const handleReset = () => {
    setSelectedIndustry('All');
    setSelectedServiceType('All');
    setSelectedUrgency('All');
    onFilterChange({
      industry: 'All',
      serviceType: 'All',
      urgency: 'All'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-surface transition-smooth"
      >
        <div className="flex items-center gap-2">
          <Icon name="FunnelIcon" size={20} className="text-text-secondary" />
          <span className="font-semibold text-text-primary">Advanced Filters</span>
        </div>
        <Icon
          name={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={20}
          className="text-text-secondary"
        />
      </button>

      {isOpen && (
        <div className="p-4 pt-0 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-md text-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              <option value="All">All Industries</option>
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Service Type
            </label>
            <select
              value={selectedServiceType}
              onChange={(e) => handleFilterChange('serviceType', e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-md text-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              <option value="All">All Types</option>
              {serviceTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Urgency Level
            </label>
            <select
              value={selectedUrgency}
              onChange={(e) => handleFilterChange('urgency', e.target.value)}
              className="w-full px-3 py-2 bg-surface border border-border rounded-md text-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              <option value="All">All Levels</option>
              {urgencyLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleReset}
            className="w-full px-4 py-2 bg-surface text-text-primary rounded-md hover:bg-muted transition-smooth text-sm font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}