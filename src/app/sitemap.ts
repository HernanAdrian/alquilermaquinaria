import { MetadataRoute } from 'next';
import { BLOG_ARTICLES } from '@/lib/data/blog';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITIES } from '@/lib/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maqon.es';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/proveedores',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Routes
  const blogRoutes: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Dynamic City Routes (Only active cities)
  const activeCities = CITIES.filter((city) => city.status === 'active');
  const cityRoutes: MetadataRoute.Sitemap = activeCities.map((city) => ({
    url: `${baseUrl}/ciudades/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Dynamic Pricing Routes
  const pricingRoutes: MetadataRoute.Sitemap = EQUIPMENT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/precios/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 5. Nested Dynamic Routes: Equipment + Active City (e.g., /alquiler/miniexcavadora/malaga)
  const nestedRoutes: MetadataRoute.Sitemap = [];
  EQUIPMENT_CATEGORIES.forEach((category) => {
    activeCities.forEach((city) => {
      nestedRoutes.push({
        url: `${baseUrl}/alquiler/${category.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    });
  });

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...cityRoutes,
    ...pricingRoutes,
    ...nestedRoutes,
  ];
}
