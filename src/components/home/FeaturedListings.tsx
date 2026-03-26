import Link from 'next/link';
import EquipmentCard from '@/components/ui/EquipmentCard';
import { FEATURED_LISTINGS } from '@/lib/data/equipment';

export default function FeaturedListings() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-h2 font-semibold text-neutral-900">
              Maquinaria disponible en Málaga ahora
            </h2>
          </div>
          <Link href="#" className="hidden md:block text-primary text-sm font-medium hover:underline">
            Ver todo →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {FEATURED_LISTINGS.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <Link href="#" className="text-primary font-semibold text-sm hover:underline">
            Ver todo →
          </Link>
        </div>
      </div>
    </section>
  );
}
