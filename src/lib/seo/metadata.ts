import { Metadata } from 'next';
import { getEquipmentBySlug } from '@/lib/data/equipment';
import { getCityName } from '@/lib/data/cities';

export function generateProductMetadata(maquinaria: string, ciudad: string): Metadata {
  const equipment = getEquipmentBySlug(maquinaria);
  const cityName = getCityName(ciudad);

  if (!equipment) {
    return { title: 'Maqon | Alquiler de maquinaria' };
  }

  const title = `Alquiler de ${equipment.name} en ${cityName} | Desde ${equipment.minPrice}€/día`;
  const description = `Alquila una ${equipment.name} en ${cityName} desde ${equipment.minPrice}€/día. ${equipment.supplierCount} proveedores locales, disponibilidad en 24h. Compara precios y solicita gratis.`;

  return {
    title,
    description,
    keywords: [
      `alquiler ${equipment.name} ${cityName}`,
      `${equipment.name} alquiler ${cityName}`,
      `precio alquiler ${equipment.name} ${cityName}`,
      `alquilar ${equipment.name} ${cityName}`,
    ],
    openGraph: {
      title: `Alquiler ${equipment.name} ${cityName} — desde ${equipment.minPrice}€/día`,
      description: `${equipment.supplierCount} proveedores en ${cityName}. Disponibilidad en 24h.`,
      images: [{ url: equipment.ogImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `/alquiler/${maquinaria}/${ciudad}/`,
    },
  };
}
