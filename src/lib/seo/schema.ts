import { EquipmentCategory } from '@/lib/data/equipment';
import { FAQItem } from '@/lib/data/content';

export function generateProductSchema(equipment: EquipmentCategory, cityName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Alquiler de ${equipment.name} en ${cityName}`,
    description: equipment.description,
    image: equipment.ogImage,
    brand: { '@type': 'Brand', name: 'Maqon' },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: equipment.minPrice,
      highPrice: equipment.pricingTable[equipment.pricingTable.length - 1]?.day.split('–')[1]?.trim().replace('€', '') || equipment.minPrice * 3,
      priceCurrency: 'EUR',
      offerCount: equipment.supplierCount,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://maqon.es${item.url}`,
    })),
  };
}
