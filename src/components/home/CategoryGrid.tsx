import Image from 'next/image';
import Link from 'next/link';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';

export default function CategoryGrid() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-semibold text-neutral-900 mb-2">
          Alquila por tipo de maquinaria
        </h2>
        <p className="text-neutral-600 text-base">
          Disponibilidad confirmada en toda la provincia de Málaga
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/alquiler/${cat.slug}/malaga/`}
              className="bg-white rounded-xl border border-neutral-200 hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer group overflow-hidden"
            >
              <div className="aspect-square w-full bg-neutral-100 overflow-hidden relative">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <p className="text-xs md:text-sm font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                  {cat.name}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Desde {cat.minPrice}€/día
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="#" className="text-primary font-semibold text-sm hover:underline inline-block">
            Ver todo el catálogo →
          </Link>
        </div>
      </div>
    </section>
  );
}
