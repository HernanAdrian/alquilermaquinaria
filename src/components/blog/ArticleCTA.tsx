import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getEquipmentBySlug } from '@/lib/data/equipment';

interface ArticleCTAProps {
  equipmentSlug: string;
  citySlug?: string; // Default to 'malaga' if not provided
}

export default function ArticleCTA({ equipmentSlug, citySlug = 'malaga' }: ArticleCTAProps) {
  const equipment = getEquipmentBySlug(equipmentSlug);
  
  if (!equipment) return null;

  const title = `Alquila ahora en ${citySlug === 'malaga' ? 'Málaga' : 'tu zona'}`;

  return (
    <div className="bg-primary-light border border-primary/20 rounded-xl p-4 sm:p-5 my-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <span className="text-primary text-xs font-semibold uppercase tracking-wide mb-1 block">
          {title}
        </span>
        <h4 className="text-neutral-900 text-sm font-semibold m-0">
          {equipment.name} disponible desde {equipment.minPrice}€/día
        </h4>
        <p className="text-neutral-500 text-xs mt-0.5 m-0 font-normal">
          Disponibilidad confirmada en 2 horas
        </p>
      </div>

      <Link
        href={`/alquiler/${equipment.slug}/${citySlug}/`}
        className="w-full sm:w-auto flex-shrink-0 bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
      >
        Ver disponibilidad <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
