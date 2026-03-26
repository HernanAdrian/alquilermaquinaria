import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import { BlogArticle, CATEGORY_LABELS } from '@/lib/data/blog';

interface BlogCardProps {
  article: BlogArticle;
}

export default function BlogCard({ article }: BlogCardProps) {
  // Format date to local string e.g "15 mar 2026"
  const formattedDate = new Date(article.publishDate).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Category badge colors
  const badgeColors = {
    'guias-maquinaria': 'bg-blue-50 text-blue-700',
    'precios-alquiler': 'bg-amber-50 text-amber-700',
    'consejos-obra': 'bg-green-50 text-green-700',
    'malaga-andalucia': 'bg-primary/10 text-primary',
  };

  return (
    <Link
      href={`/blog/${article.slug}/`}
      className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-200 group flex flex-col h-full"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={article.image}
          alt={article.primaryKeyword}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <span
          className={`inline-block self-start mb-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[article.category]}`}
        >
          {CATEGORY_LABELS[article.category]}
        </span>

        <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 md:line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>{article.readTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
