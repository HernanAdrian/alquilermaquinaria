import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITY_PRICING_GUIDE, CITY_PRICE_SUMMARY } from '@/lib/data/content';
import type { CityData } from '@/lib/data/cities';
import { CITIES } from '@/lib/data/cities';

interface CitySEOContentProps {
  city: CityData;
}

export default function CitySEOContent({ city }: CitySEOContentProps) {
  const guide = CITY_PRICING_GUIDE[city.slug];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">
          Alquiler de maquinaria de obra en {city.name} — Guía de precios 2026
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT — Pricing guide */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              ¿Cuánto cuesta alquilar maquinaria en {city.name}?
            </h3>
            {guide && (
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">{guide.intro}</p>
            )}

            {/* Price reference table */}
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-900 text-white text-xs">
                    <th className="px-4 py-3 font-semibold rounded-tl-lg">Tipo de maquinaria</th>
                    <th className="px-4 py-3 font-semibold">Precio/día</th>
                    <th className="px-4 py-3 font-semibold rounded-tr-lg">Precio/semana</th>
                  </tr>
                </thead>
                <tbody>
                  {CITY_PRICE_SUMMARY.map((row, idx) => (
                    <tr key={row.name} className={idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                      <td className="px-4 py-3 text-sm font-medium text-neutral-900">{row.name}</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{row.day}</td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{row.week}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT — Market context */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Empresas de alquiler de maquinaria en {city.name}
            </h3>
            {guide && (
              <p className="text-neutral-600 text-sm leading-relaxed">{guide.marketContext}</p>
            )}
            <p className="text-neutral-600 text-sm leading-relaxed mt-4">
              En Maqon reunimos a {city.supplierCount} empresas de alquiler de maquinaria de construcción en {city.name}, lo que permite comparar precios y disponibilidad en un solo lugar. Todas las empresas alquiladoras de maquinaria en {city.name} están verificadas y operan con seguro de responsabilidad civil.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mt-4">
              Tanto si necesitas maquinaria de obra para una reforma puntual como para un proyecto de larga duración, nuestros proveedores en {city.name} tienen la flota adecuada. Consulta nuestro{' '}
              <Link href="/blog/" className="text-primary hover:underline">
                blog de maquinaria de construcción
              </Link>{' '}
              para guías detalladas de selección de equipos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Nearby cities + equipment links section */
export function CityLinksSection({ city }: CitySEOContentProps) {
  const nearbyCities = city.nearbyCity
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter(Boolean) as typeof CITIES;

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT — Nearby cities */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Alquiler de maquinaria en provincias cercanas
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/ciudades/${c.slug}/`}
                  className="border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 hover:border-primary hover:text-primary transition-all"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — Full equipment catalog links */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Todo el catálogo de maquinaria en {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {EQUIPMENT_CATEGORIES.map((equip) => (
                <Link
                  key={equip.slug}
                  href={`/alquiler/${equip.slug}/${city.slug}/`}
                  className="text-sm text-primary hover:underline flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
                  Alquiler {equip.name.toLowerCase()} {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
