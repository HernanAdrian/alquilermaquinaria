'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogArticle } from '@/lib/data/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  articles: BlogArticle[];
  activeCategory: string;
}

export default function BlogGrid({ articles, activeCategory }: BlogGridProps) {
  const filteredArticles =
    activeCategory === 'todo'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="bg-white pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-6">
          Todos los artículos
        </h2>

        {/* Framer motion wrapper for smooth list updates */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory} // changing key triggers initial animation
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {filteredArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-neutral-500 text-sm">
            No se encontraron artículos en esta categoría.
          </div>
        )}
      </div>
    </section>
  );
}
