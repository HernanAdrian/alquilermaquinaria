'use client';

import Link from 'next/link';

interface MobileCTABarProps {
  price?: number;
  city?: string;
  linkHref?: string;
}

export default function MobileCTABar({ 
  price = 95, 
  city = 'Málaga', 
  linkHref = '#' 
}: MobileCTABarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center justify-between">
      <div>
        <span className="text-neutral-500 text-xs">Desde </span>
        <span className="text-primary text-xl font-bold">{price}€</span>
        <span className="text-neutral-500 text-xs">/día</span>
      </div>
      <Link href={linkHref} className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-hover transition-colors">
        Solicitar →
      </Link>
    </div>
  );
}
