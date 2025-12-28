'use client';

import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import ComparisonMatrix from './ComparisonMatrix';
import ServiceBuilder from './ServiceBuilder';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  badges: string[];
  pricing?: string;
  deliveryTime?: string;
  industry: string;
  serviceType: string;
  urgency: string;
}

interface ServicesInteractiveProps {
  services: Service[];
  categories: string[];
  industries: Array<{ label: string; value: string }>;
  serviceTypes: Array<{ label: string; value: string }>;
  urgencyLevels: Array<{ label: string; value: string }>;
  builderSteps: Array<{ id: string; title: string; options: string[] }>;
}

export default function ServicesInteractive({
  services,
  categories,
  industries,
  serviceTypes,
  urgencyLevels,
  builderSteps
}: ServicesInteractiveProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: 'All',
    serviceType: 'All',
    urgency: 'All'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 md:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-surface rounded-lg w-3/4" />
            <div className="h-64 bg-surface rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = filters.industry === 'All' || service.industry === filters.industry;
    const matchesServiceType = filters.serviceType === 'All' || service.serviceType === filters.serviceType;
    const matchesUrgency = filters.urgency === 'All' || service.urgency === filters.urgency;

    return matchesCategory && matchesSearch && matchesIndustry && matchesServiceType && matchesUrgency;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <SearchBar onSearch={setSearchQuery} placeholder="Search services by name or description..." />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <FilterPanel
            industries={industries}
            serviceTypes={serviceTypes}
            urgencyLevels={urgencyLevels}
            onFilterChange={setFilters}
          />
          <ServiceBuilder steps={builderSteps} />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <ComparisonMatrix services={services} />

          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                category={service.category}
                badges={service.badges}
                pricing={service.pricing}
                deliveryTime={service.deliveryTime}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary mb-4">No services found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setFilters({ industry: 'All', serviceType: 'All', urgency: 'All' });
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:shadow-md transition-smooth font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}