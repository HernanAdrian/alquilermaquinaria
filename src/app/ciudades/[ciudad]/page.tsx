import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCityBySlug, CITIES } from '@/lib/data/cities';
import { CITY_FAQ } from '@/lib/data/content';
import Breadcrumb from '@/components/product/Breadcrumb';
import CityHero from '@/components/cities/CityHero';
import CityEquipmentGrid from '@/components/cities/CityEquipmentGrid';
import CityZones from '@/components/cities/CityZones';
import CitySEOContent, { CityLinksSection } from '@/components/cities/CitySEOContent';
import CityFAQ from '@/components/cities/CityFAQ';
import CitySupplierCTA from '@/components/cities/CitySupplierCTA';
import JsonLd from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ ciudad: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ciudad } = await params;
  const city = getCityBySlug(ciudad);
  if (!city) return {};

  return {
    title: `Alquiler de maquinaria de construcción en ${city.name} | Maqon`,
    description: `Alquila maquinaria de construcción en ${city.name}. Miniexcavadoras, plataformas elevadoras, dumpers y más. ${city.supplierCount} proveedores locales. Disponibilidad en 24h.`,
    alternates: { canonical: `/ciudades/${city.slug}/` },
    openGraph: {
      title: `Alquiler de maquinaria de construcción en ${city.name} | Maqon`,
      description: `Alquila maquinaria de construcción en ${city.name}. ${city.supplierCount} proveedores locales.`,
      url: `/ciudades/${city.slug}/`,
    },
  };
}

function generateLocalBusinessSchema(city: NonNullable<ReturnType<typeof getCityBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Maqon',
    description: `Plataforma de alquiler de maquinaria de construcción en ${city.name}. ${city.supplierCount} proveedores locales verificados.`,
    url: `https://maqon.es/ciudades/${city.slug}/`,
    areaServed: {
      '@type': 'Province',
      name: city.province,
      containedIn: { '@type': 'Country', name: 'España' },
    },
  };
}

function generateBreadcrumbSchema(city: NonNullable<ReturnType<typeof getCityBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://maqon.es/' },
      { '@type': 'ListItem', position: 2, name: 'Ciudades', item: 'https://maqon.es/ciudades/' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://maqon.es/ciudades/${city.slug}/` },
    ],
  };
}

function generateFAQSchema(citySlug: string) {
  const faqs = CITY_FAQ[citySlug];
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export default async function CiudadPage({ params }: PageProps) {
  const { ciudad } = await params;
  const city = getCityBySlug(ciudad);

  if (!city || city.status === 'coming') {
    notFound();
  }

  const faqItems = CITY_FAQ[city.slug] || [];
  const faqSchema = generateFAQSchema(city.slug);

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Ciudades', href: '#' },
    { label: city.name },
  ];

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(city)} />
      <JsonLd data={generateBreadcrumbSchema(city)} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="pt-16 lg:pt-[72px]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Section 3: Hero */}
        <CityHero city={city} />

        {/* Section 4: Equipment grid */}
        <CityEquipmentGrid city={city} />

        {/* Section 5: Zones */}
        <CityZones city={city} />

        {/* Section 6: SEO content block */}
        <CitySEOContent city={city} />

        {/* Section 7: FAQ */}
        <CityFAQ cityName={city.name} items={faqItems} />

        {/* Section 8: Nearby cities + equipment links */}
        <CityLinksSection city={city} />

        {/* Section 9: Supplier CTA */}
        <CitySupplierCTA city={city} />
      </div>
    </>
  );
}
