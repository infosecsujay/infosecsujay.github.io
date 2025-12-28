'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  title: string;
  category: string;
  pricing?: string;
  deliveryTime?: string;
  features: string[];
}

interface ComparisonMatrixProps {
  services: Service[];
}

export default function ComparisonMatrix({ services }: ComparisonMatrixProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 3) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const selectedServiceData = services.filter(s => selectedServices.includes(s.id));

  return (
    <div className="bg-card border border-border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-surface transition-smooth"
      >
        <div className="flex items-center gap-2">
          <Icon name="TableCellsIcon" size={20} className="text-text-secondary" />
          <span className="font-semibold text-text-primary">Service Comparison</span>
          {selectedServices.length > 0 && (
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
              {selectedServices.length} selected
            </span>
          )}
        </div>
        <Icon
          name={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={20}
          className="text-text-secondary"
        />
      </button>

      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-sm text-text-secondary mb-4">
            Select up to 3 services to compare side-by-side
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {services.slice(0, 6).map((service) => (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                disabled={!selectedServices.includes(service.id) && selectedServices.length >= 3}
                className={`p-3 rounded-md border text-left transition-smooth ${
                  selectedServices.includes(service.id)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                } ${
                  !selectedServices.includes(service.id) && selectedServices.length >= 3
                    ? 'opacity-50 cursor-not-allowed' :''
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {service.title}
                    </p>
                    <p className="text-xs text-text-secondary mt-1">{service.category}</p>
                  </div>
                  {selectedServices.includes(service.id) && (
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-primary flex-shrink-0"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {selectedServiceData.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold text-text-primary">
                      Feature
                    </th>
                    {selectedServiceData.map((service) => (
                      <th
                        key={service.id}
                        className="text-left py-3 px-2 font-semibold text-text-primary"
                      >
                        {service.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 text-text-secondary">Category</td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-3 px-2 text-text-primary">
                        {service.category}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 text-text-secondary">Pricing</td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-3 px-2 text-text-primary">
                        {service.pricing || 'Custom'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 text-text-secondary">Delivery Time</td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-3 px-2 text-text-primary">
                        {service.deliveryTime || 'Varies'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-text-secondary align-top">Key Features</td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-3 px-2 align-top">
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <Icon
                                name="CheckIcon"
                                size={14}
                                className="text-success mt-0.5 flex-shrink-0"
                              />
                              <span className="text-text-primary text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}