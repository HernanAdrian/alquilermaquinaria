import { Info } from 'lucide-react';
import { SUPPLIER_HOW_IT_WORKS } from '@/lib/data/content';

export default function HowItWorksSupplier() {
  return (
    <section id="como-funciona" className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">¿Cómo funciona para ti como proveedor?</h2>
          <p className="text-neutral-600 text-base mt-3">
            En menos de 10 minutos ya estás recibiendo solicitudes.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 max-w-3xl mx-auto">
          {SUPPLIER_HOW_IT_WORKS.map((step, idx) => (
            <div key={step.number}>
              <div className="flex gap-6 md:gap-8 items-start">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center flex-shrink-0 mt-1">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.body}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-500 text-xs px-3 py-1.5 rounded-full">
                    <Info className="w-3 h-3" />
                    {step.detail}
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {idx < SUPPLIER_HOW_IT_WORKS.length - 1 && (
                <div className="ml-6 h-8 border-l-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
