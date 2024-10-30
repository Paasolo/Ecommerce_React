import React from 'react';
import * as LucideIcons from 'lucide-react';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {IconComponent && <IconComponent size={20} />}
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}