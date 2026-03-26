import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getEquipmentBySlug } from '@/lib/data/equipment';

interface RelatedEquipmentProps {
  cityName: string;
  citySlug: string;
  relatedSlugs: string[];
}

export default function RelatedEquipment({ cityName, citySlug, relatedSlugs }: RelatedEquipmentProps) {
  const relatedItems = relatedSlugs
    .map((slug) => getEquipmentBySlug(slug))
    .filter(Boolean);

  return (
    <div className="mt-20">
      <h2 className="text-[28px] font-bold text-neutral-900 mb-8 leading-tight">
        También disponible en {cityName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedItems.map((item) => (
          <Link
            key={item!.id}
            href={`/alquiler/${item!.slug}/${citySlug}/`}
            className="group block bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100">
              <Image
                src={item!.image}
                alt={item!.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 industrial-glass flex items-center justify-center text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[18px] font-bold text-neutral-900 mb-2">{item!.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-primary">Desde {item!.minPrice}€/día*</p>
                <span className="text-xs font-semibold text-neutral-400 capitalize">{cityName}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
