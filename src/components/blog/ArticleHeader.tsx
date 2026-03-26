import Image from 'next/image';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogArticle, CATEGORY_LABELS } from '@/lib/data/blog';

interface ArticleHeaderProps {
  article: BlogArticle;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  // Format dates text
  const formattedDate = new Date(article.publishDate).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const badgeColors = {
    'guias-maquinaria': 'bg-blue-50 text-blue-700',
    'precios-alquiler': 'bg-amber-50 text-amber-700',
    'consejos-obra': 'bg-green-50 text-green-700',
    'malaga-andalucia': 'bg-primary/10 text-primary',
  };

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6">
        <span
          className={`inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[article.category]}`}
        >
          {CATEGORY_LABELS[article.category]}
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight md:leading-tight tracking-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed mt-4 max-w-3xl">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neutral-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-neutral-400" />
            <span>{article.readTime} min de lectura</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-neutral-400" />
            <span>{CATEGORY_LABELS[article.category]}</span>
          </div>
        </div>

        <div className="mt-8 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
