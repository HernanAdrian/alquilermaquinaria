import { Search, Building2, Truck, Star, Clock, MapPin } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import type { CityData } from '@/lib/data/cities';

interface CityHeroProps {
  city: CityData;
}

export default function CityHero({ city }: CityHeroProps) {
  return (
    <section className="bg-white py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex-[3]">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-success/10 text-success text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Proveedores locales verificados
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                Entrega en 24-48h
              </span>
              <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                Presupuesto sin compromiso
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Alquiler de maquinaria de construcción en {city.name}
            </h1>

            {/* Subheading */}
            <p className="text-neutral-600 text-base md:text-lg mt-4 leading-relaxed">
              Compara disponibilidad y precios de empresas de alquiler de maquinaria en {city.name}. Confirmamos tu solicitud lo antes posible, normalmente en el mismo día.
            </p>

            {/* SEO intro */}
            {city.description && (
              <p className="text-neutral-600 text-base leading-relaxed mt-5">
                {city.description}
              </p>
            )}

            {/* Unified Search Bar */}
            <div className="mt-8">
              <SearchBar defaultCity={city.slug} />
            </div>
          </div>

          {/* RIGHT COLUMN — Stats card */}
          <div className="w-full lg:flex-[2]">
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
              <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-5">
                {city.name} en números
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Building2, label: 'Proveedores', value: 'Locales verificados' },
                  { icon: Truck, label: 'Entrega habitual', value: '24-48 horas' },
                  { icon: Star, label: 'Servicio', value: 'Presupuesto gratuito' },
                  { icon: Clock, label: 'Respuesta', value: 'Mismo día' },
                  { icon: MapPin, label: 'Zonas cubiertas', value: 'Toda la provincia' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-neutral-600">
                      <stat.icon className="w-4 h-4 text-neutral-400" />
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-neutral-900 text-right">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mt-5 pt-5 border-t border-neutral-200 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-neutral-700">
                  Disponibilidad confirmada en {city.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
