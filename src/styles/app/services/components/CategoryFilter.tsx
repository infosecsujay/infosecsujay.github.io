'use client';



interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
          selectedCategory === 'All' ?'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:bg-muted'
        }`}
      >
        All Services
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-surface text-text-secondary hover:bg-muted'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}