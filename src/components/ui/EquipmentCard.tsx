'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Shovel } from 'lucide-react';
import Badge from './Badge';
import type { FeaturedListing } from '@/lib/data/equipment';

export default function EquipmentCard({ item }: { item: FeaturedListing }) {
  const [imageError, setImageError] = useState(false);
  
  // Standardize image path based on slug if it doesn't already match the pattern
  const imagePath = item.image.includes('/images/') && item.image.endsWith('.webp') 
    ? item.image 
    : `/images/${item.slug}.webp`;

  return (
    <Link
      href={`/alquiler/${item.slug}/${item.city}/`}
      className="bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-all duration-200 overflow-hidden group flex flex-col"
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100 flex items-center justify-center">
        <div className="absolute top-3 left-3 z-10">
          <Badge variant={item.badge} />
        </div>
        {!imageError ? (
          <Image
            src={imagePath}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-neutral-300">
            <Shovel className="w-12 h-12 mb-2 opacity-20" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Maqon</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-neutral-900 mb-1">{item.name}</h3>
        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
          {item.specs.split('·').map((spec, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-neutral-300">·</span>}
              {spec.trim()}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
          <MapPin className="w-3 h-3" />
          {item.location}
        </div>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-neutral-500 text-sm">Desde </span>
          <span className="text-primary text-2xl font-bold">{item.priceDay}€</span>
          <span className="text-neutral-500 text-sm">/día</span>
        </div>
        <p className="text-xs text-neutral-400 mt-0.5">/semana desde {item.priceWeek}€</p>

        {/* CTA */}
        <button className="mt-4 w-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm py-2.5 rounded-lg transition-colors duration-200">
          Solicitar disponibilidad
        </button>
      </div>
    </Link>
  );
}
