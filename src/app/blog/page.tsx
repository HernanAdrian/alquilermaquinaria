import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_ARTICLES, getFeaturedArticle } from '@/lib/data/blog';
import BlogHero from '@/components/blog/BlogHero';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { CATEGORY_LABELS } from '@/lib/data/blog';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Blog de alquiler de maquinaria de construcción | Maqon',
  description: 'Guías, precios y consejos sobre maquinaria de construcción en España. Todo lo que necesitas saber antes de alquilar tu próximo equipo.',
  alternates: {
    canonical: '/blog/',
  },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.categoria || 'todo';
  const featuredArticle = getFeaturedArticle();
  
  // Articles excluding the featured one
  const gridArticles = BLOG_ARTICLES.filter(a => a.slug !== featuredArticle?.slug);

  const formattedFeaturedDate = featuredArticle 
    ? new Date(featuredArticle.publishDate).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '';

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-neutral-50">
        <BlogHero />
        
        {/* Category filter handles navigation via Link to update URL parameter */}
        <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar whitespace-nowrap">
              {['todo', ...Object.keys(CATEGORY_LABELS)].map((catId) => {
                const count = catId === 'todo' ? BLOG_ARTICLES.length : BLOG_ARTICLES.filter(a => a.category === catId).length;
                if (count === 0 && catId !== 'todo') return null;
                const isActive = activeCategory === catId;
                
                return (
                  <Link
                    key={catId}
                    href={catId === 'todo' ? '/blog/' : `/blog/?categoria=${catId}`}
                    scroll={false}
                    className={`relative px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all flex-shrink-0 ${
                      isActive
                        ? 'text-white bg-primary'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                    }`}
                  >
                    {catId === 'todo' ? 'Todo' : CATEGORY_LABELS[catId as keyof typeof CATEGORY_LABELS]} ({count})
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'todo' && (
          <section className="bg-white pt-8 pb-4 md:pt-12 md:pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                Artículo destacado
              </span>
              
              <Link 
                href={`/blog/${featuredArticle.slug}/`}
                className="group flex flex-col md:flex-row gap-0 md:gap-8 bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="w-full md:w-1/2 aspect-[16/9] relative md:aspect-auto md:min-h-[300px]">
                  <Image 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-5 md:p-8 flex flex-col justify-center flex-1">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4 self-start">
                    {CATEGORY_LABELS[featuredArticle.category]}
                  </span>
                  
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight mb-3 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed hidden md:block line-clamp-3 mb-5">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="mt-auto md:mt-0 flex items-center gap-4 text-xs text-neutral-400 mb-5 md:mb-0">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime} min de lectura</span>
                    </div>
                    <div className="flex items-center gap-1.5 hidden sm:flex">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formattedFeaturedDate}</span>
                    </div>
                  </div>
                  
                  <div className="text-primary font-semibold text-sm flex items-center gap-1 hidden md:flex mt-5">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <BlogGrid articles={gridArticles} activeCategory={activeCategory} />
        
        {/* Newsletter / CTA Section */}
        <section className="bg-primary-light py-10 md:py-16">
          <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              Recibe guías de maquinaria en tu email
            </h2>
            <p className="text-neutral-600 text-base mt-3">
              Sin spam. Solo contenido útil sobre alquiler de maquinaria y precios actualizados.
            </p>
            
            <NewsletterSignup />
            
            <p className="text-xs text-neutral-400 mt-3">
              Solo contenido útil. Cancela cuando quieras.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
