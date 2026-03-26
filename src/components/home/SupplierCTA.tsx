import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function SupplierCTA() {
  const benefits = [
    'Sin comisión fija hasta que alquilas',
    'Control total de tu disponibilidad',
    'Gestión completa desde el móvil',
  ];

  return (
    <section className="bg-primary-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-primary uppercase tracking-widest text-xs font-semibold">
              Para empresas alquiladoras
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-2">
              ¿Tienes maquinaria parada? Ponla a trabajar.
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mt-4">
              Conectamos tu flota con obras activas en Málaga. Sin exclusividad. Sin compromiso. Tú pones las condiciones.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/proveedores/"
              className="mt-8 inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Quiero ser proveedor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 relative">
            <Image
              src="/images/supplier-cta-photo.webp"
              alt="Proveedor de maquinaria de construcción gestionando su flota en Málaga"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
