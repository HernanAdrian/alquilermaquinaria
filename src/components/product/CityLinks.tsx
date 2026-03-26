import Link from 'next/link';

interface CityLinksProps {
  equipmentName: string;
  equipmentSlug: string;
  currentCity: string;
}

const OTHER_CITIES = [
  { name: 'Sevilla', slug: 'sevilla' },
  { name: 'Granada', slug: 'granada' },
  { name: 'Córdoba', slug: 'cordoba' },
  { name: 'Almería', slug: 'almeria' },
  { name: 'Madrid', slug: 'madrid' },
  { name: 'Barcelona', slug: 'barcelona' },
  { name: 'Valencia', slug: 'valencia' },
  { name: 'Bilbao', slug: 'bilbao' },
];

export default function CityLinks({ equipmentName, equipmentSlug, currentCity }: CityLinksProps) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">
        Alquiler de {equipmentName} en otras ciudades
      </h2>
      <div className="flex flex-wrap gap-2">
        {OTHER_CITIES.filter((c) => c.slug !== currentCity).map((city) => (
          <Link
            key={city.slug}
            href={`/alquiler/${equipmentSlug}/${city.slug}/`}
            className="border border-neutral-200 rounded-full text-sm text-neutral-600 px-4 py-2 hover:border-primary hover:text-primary transition-all"
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
