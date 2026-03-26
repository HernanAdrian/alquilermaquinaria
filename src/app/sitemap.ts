import { MetadataRoute } from 'next';
import { BLOG_ARTICLES } from '@/lib/data/blog';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITIES } from '@/lib/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maqon.es';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/alquiler',
    '/blog',
    '/ciudades',
    '/precios',
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

  // 3. Dynamic Equipment Category Routes
  const equipmentRoutes: MetadataRoute.Sitemap = EQUIPMENT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/alquiler/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. Dynamic City Routes
  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/ciudades/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 5. Dynamic Pricing Routes
  const pricingRoutes: MetadataRoute.Sitemap = EQUIPMENT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/precios/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 6. Nested Dynamic Routes: Equipment + City (e.g., /alquiler/miniexcavadora/malaga)
  // Limited to active cities for better focus, but here we include all combinations for SEO coverage
  const nestedRoutes: MetadataRoute.Sitemap = [];
  EQUIPMENT_CATEGORIES.forEach((category) => {
    CITIES.filter(city => city.status === 'active').forEach((city) => {
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
    ...equipmentRoutes,
    ...cityRoutes,
    ...pricingRoutes,
    ...nestedRoutes,
  ];
}
