'use client';

import StarRating from '@/components/ui/StarRating';
import { TESTIMONIALS } from '@/lib/data/content';

export default function TrustMetrics() {
  const metrics = [
    { number: '500+', label: 'máquinas en catálogo' },
    { number: '47', label: 'proveedores en Málaga' },
    { number: '< 2h', label: 'tiempo de respuesta' },
  ];

  return (
    <section className="bg-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center relative">
              {idx > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/15"></div>
              )}
              <span className="text-5xl sm:text-6xl font-bold text-primary">{metric.number}</span>
              <span className="text-base text-white/70 mt-2 block">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white/[0.08] rounded-xl p-6 border border-white/10">
              <div className="mb-3">
                <StarRating rating={5} size={14} />
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic mb-4">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
