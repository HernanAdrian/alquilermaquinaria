import { BlogArticle } from '@/lib/data/blog';
import BlogCard from './BlogCard';

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  // Show max 3 articles, responsive to 2 on mobile via CSS
  const displayArticles = articles.slice(0, 3);

  return (
    <section className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-neutral-900 mb-8">Artículos relacionados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayArticles.map((article, index) => (
            <div key={article.slug} className={index === 2 ? 'hidden md:block' : 'block'}>
              <BlogCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
