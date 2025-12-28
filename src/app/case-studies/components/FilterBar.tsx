'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  industries: string[];
  challengeTypes: string[];
  solutionCategories: string[];
  selectedIndustry: string;
  selectedChallenge: string;
  selectedSolution: string;
  searchQuery: string;
  onIndustryChange: (industry: string) => void;
  onChallengeChange: (challenge: string) => void;
  onSolutionChange: (solution: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar = ({
  industries,
  challengeTypes,
  solutionCategories,
  selectedIndustry,
  selectedChallenge,
  selectedSolution,
  searchQuery,
  onIndustryChange,
  onChallengeChange,
  onSolutionChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) => {
  const hasActiveFilters = selectedIndustry !== 'all' || selectedChallenge !== 'all' || selectedSolution !== 'all' || searchQuery !== '';

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-primary flex items-center">
          <Icon name="FunnelIcon" size={20} className="text-primary mr-2" />
          Filter Case Studies
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-secondary hover:text-secondary/80 transition-smooth font-medium flex items-center"
          >
            <Icon name="XMarkIcon" size={16} className="mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            <option value="all">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Challenge Type
          </label>
          <select
            value={selectedChallenge}
            onChange={(e) => onChallengeChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            <option value="all">All Challenges</option>
            {challengeTypes.map((challenge) => (
              <option key={challenge} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Solution Category
          </label>
          <select
            value={selectedSolution}
            onChange={(e) => onSolutionChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          >
            <option value="all">All Solutions</option>
            {solutionCategories.map((solution) => (
              <option key={solution} value={solution}>
                {solution}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Search
          </label>
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search case studies..."
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-md text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;