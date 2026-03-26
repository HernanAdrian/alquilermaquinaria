import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { CityData } from '@/lib/data/cities';

interface CitySupplierCTAProps {
  city: CityData;
}

export default function CitySupplierCTA({ city }: CitySupplierCTAProps) {
  return (
    <section className="bg-primary-light py-10 md:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-neutral-900">
          ¿Tienes maquinaria en {city.name}?
        </h2>
        <p className="text-neutral-600 text-base mt-3">
          Únete a los {city.supplierCount} proveedores que ya trabajan con nosotros en {city.name}.
        </p>

        {/* Benefit pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {['Sin cuota mensual', 'Sin exclusividad', 'Gestión desde el móvil'].map((pill) => (
            <span
              key={pill}
              className="bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-success" />
              {pill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/proveedores/#signup"
            className="inline-flex bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Registrarme como proveedor →
          </Link>
        </div>
      </div>
    </section>
  );
}
