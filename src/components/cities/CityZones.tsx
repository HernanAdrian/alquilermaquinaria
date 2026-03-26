import type { CityData } from '@/lib/data/cities';

interface CityZonesProps {
  city: CityData;
}

export default function CityZones({ city }: CityZonesProps) {
  if (city.zones.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-neutral-900">
          Zonas de cobertura en la provincia de {city.name}
        </h2>
        <p className="text-neutral-600 text-sm mt-2">
          Entregamos en toda la provincia. El coste de transporte varía según la distancia.
        </p>

        {/* Zones grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {city.zones.map((zone) => (
            <div
              key={zone.slug}
              className="bg-white rounded-xl p-3 sm:p-5 border border-neutral-100 hover:border-primary/30 transition-all"
            >
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">{zone.name}</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs text-neutral-500">{zone.supplierCount} proveedores</span>
              </div>
              {zone.transportCost && (
                <p className="text-xs text-neutral-400 mt-2">Transporte aprox. {zone.transportCost}</p>
              )}
            </div>
          ))}
        </div>

        {/* Coverage note */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          ¿No encuentras tu zona? Consúltanos — probablemente tenemos cobertura igualmente.
        </p>
      </div>
    </section>
  );
}
