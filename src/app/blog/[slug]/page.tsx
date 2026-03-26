import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_ARTICLES, getArticleBySlug, getRelatedArticles } from '@/lib/data/blog';
import { getEquipmentBySlug } from '@/lib/data/equipment';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/product/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import ArticleHeader from '@/components/blog/ArticleHeader';
import ArticleContent from '@/components/blog/ArticleContent';
import ArticleSidebar from '@/components/blog/ArticleSidebar';
import RelatedArticles from '@/components/blog/RelatedArticles';
import MobileCTABar from '@/components/layout/MobileCTABar';

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}/`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [
        {
          url: article.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishDate,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticlesData = getRelatedArticles(article.relatedArticles);
  
  // Get main equipment for the CTAs
  const mainEquipmentSlug = article.relatedEquipment[0] || 'miniexcavadora';
  const mainEquipment = getEquipmentBySlug(mainEquipmentSlug);

  // Generate JSON-LD Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: { '@type': 'Organization', name: 'Maqon' },
    publisher: { '@type': 'Organization', name: 'Maqon' },
    datePublished: article.publishDate,
    image: article.ogImage,
    mainEntityOfPage: `https://maqon.es/blog/${article.slug}/`,
  };

  // Breadcrumb schema
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://maqon.es${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      <Navbar />

      <main className="bg-white min-h-screen">
        <Breadcrumb items={breadcrumbItems} />
        
        <ArticleHeader article={article} />

        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            
            {/* Left Column: Content */}
            <div className="flex-1">
              <ArticleContent content={article.content} equipmentSlugs={article.relatedEquipment} />
            </div>

            {/* Right Column: Sticky Sidebar */}
            <ArticleSidebar relatedArticles={relatedArticlesData} equipmentSlug={mainEquipmentSlug} />
          </div>
        </div>

        {/* Related Articles Strip */}
        {relatedArticlesData.length > 0 && (
          <RelatedArticles articles={relatedArticlesData} />
        )}

        {/* Bottom CTA Block */}
        {mainEquipment && (
          <section className="bg-dark py-10 md:py-16 text-center text-white">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ¿Listo para alquilar {mainEquipment.name.toLowerCase()} en Málaga?
              </h2>
              <p className="text-white/60 text-base md:text-lg">
                Disponibilidad confirmada en menos de 2 horas. Sin pago por adelantado. Sin compromiso.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`/alquiler/${mainEquipment.slug}/malaga/`}
                  className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Ver disponibilidad en Málaga →
                </Link>
                <Link 
                  href={`/alquiler/${mainEquipment.slug}/malaga/`}
                  className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl transition-colors"
                >
                  Ver todos los precios
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
      
      {/* Mobile sticky CTA bar replaces sidebar on mobile */}
      {mainEquipment && (
        <MobileCTABar 
          price={mainEquipment.minPrice} 
          city="Málaga" 
          linkHref={`/alquiler/${mainEquipment.slug}/malaga/`} 
        />
      )}
    </>
  );
}
