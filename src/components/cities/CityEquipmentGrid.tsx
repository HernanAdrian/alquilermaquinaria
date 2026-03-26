import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import type { FeaturedListing } from '@/lib/data/equipment';
import type { CityData } from '@/lib/data/cities';
import EquipmentCard from '@/components/ui/EquipmentCard';

interface CityEquipmentGridProps {
  city: CityData;
}

export default function CityEquipmentGrid({ city }: CityEquipmentGridProps) {
  // Order by popularEquipment if available, else use default order
  const orderedEquipment = city.popularEquipment.length > 0
    ? city.popularEquipment
        .map((slug) => EQUIPMENT_CATEGORIES.find((e) => e.slug === slug))
        .filter(Boolean)
    : EQUIPMENT_CATEGORIES;

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-neutral-900">
          Maquinaria disponible para alquiler en {city.name}
        </h2>
        <p className="text-neutral-600 text-sm mt-2">
          Selecciona un equipo para ver disponibilidad y precios en {city.name}.
        </p>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {orderedEquipment.map((equip) => {
            if (!equip) return null;
            
            // Adapt EquipmentCategory to FeaturedListing structure for the card
            const adaptedItem: FeaturedListing = {
              id: Math.random(), // Needs a number
              name: equip.name,
              slug: equip.slug,
              image: equip.image,
              imageAlt: equip.imageAlt,
              priceDay: equip.minPrice,
              priceWeek: equip.minPrice * 4, // Estimate
              location: city.name,
              city: city.slug,
              badge: 'available',
              specs: equip.description,
              rating: 4.8, // Default
              rentals: 12 // Default
            };

            return (
              <EquipmentCard key={equip.id} item={adaptedItem} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
