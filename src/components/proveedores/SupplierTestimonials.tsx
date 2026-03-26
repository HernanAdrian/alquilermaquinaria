import { Star } from 'lucide-react';
import { SUPPLIER_TESTIMONIALS } from '@/lib/data/content';

export default function SupplierTestimonials() {
  return (
    <section className="bg-dark py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-white text-3xl font-bold text-center">
          Lo que dicen los proveedores que ya trabajan con nosotros
        </h2>

        {/* Testimonials grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {SUPPLIER_TESTIMONIALS.map((t) => (
            <div key={t.initials} className="bg-white/[0.08] border border-white/10 rounded-xl p-6">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed italic mb-5">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.company}</div>
                  <div className="text-primary/70 text-xs mt-0.5">{t.fleet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
