import Link from 'next/link';
import { Clock } from 'lucide-react';
import { CITIES } from '@/lib/data/cities';

export default function CitySection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2 font-semibold text-neutral-900">
          Alquiler de maquinaria en toda España
        </h2>
        <p className="text-neutral-600 text-base mt-2">
          Empezamos en Málaga. Estamos llegando al resto.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {CITIES.map((city) =>
            city.status === 'active' ? (
              <Link
                key={city.id}
                href={`/ciudades/${city.slug}/`}
                className="bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors"
              >
                {city.name}
              </Link>
            ) : (
              <span
                key={city.id}
                className="bg-neutral-100 text-neutral-500 text-sm px-5 py-2.5 rounded-full cursor-default flex items-center gap-1.5"
              >
                {city.name} <Clock className="w-3 h-3" /> Pronto
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
