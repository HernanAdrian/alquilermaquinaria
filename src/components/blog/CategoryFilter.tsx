'use client';

import { motion } from 'framer-motion';
import { CATEGORY_LABELS, BlogCategory, BlogArticle } from '@/lib/data/blog';

interface CategoryFilterProps {
  articles: BlogArticle[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ articles, activeCategory, onSelectCategory }: CategoryFilterProps) {
  // Count articles per category (excluding featured for consistency if needed, but we count all here)
  const countCategory = (cat: string) => {
    if (cat === 'todo') return articles.length;
    return articles.filter((a) => a.category === cat).length;
  };

  const categories: { id: string; label: string }[] = [
    { id: 'todo', label: 'Todo' },
    ...Object.entries(CATEGORY_LABELS).map(([id, label]) => ({ id, label })),
  ];

  return (
    <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          {categories.map((cat) => {
            const count = countCategory(cat.id);
            if (count === 0 && cat.id !== 'todo') return null; // hide empty categories
            
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all flex-shrink-0 ${
                  isActive
                    ? 'text-white bg-primary'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
