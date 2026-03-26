import { Search, ClipboardCheck, Truck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/lib/data/content';

const ICONS = {
  Search,
  ClipboardCheck,
  Truck,
};

export default function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-h2 font-semibold text-neutral-900">
            Alquilar maquinaria en 3 pasos
          </h2>
          <p className="text-neutral-600 text-base mt-2">Sin llamadas, sin esperas, sin sorpresas</p>
        </div>

        {/* Desktop: 3 columns with connector */}
        <div className="hidden md:grid grid-cols-3 gap-12 mt-16 relative">
          {/* Connector line */}
          <div className="absolute border-t-2 border-dashed border-primary/40 top-[22px] left-[calc(16.66%+22px)] right-[calc(16.66%+22px)]"></div>

          {HOW_IT_WORKS_STEPS.map((step) => {
            const IconComp = ICONS[step.icon as keyof typeof ICONS];
            return (
              <div key={step.number} className="text-center">
                <div className="w-11 h-11 rounded-full bg-white border-4 border-primary flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="text-primary font-bold text-sm">{step.number}</span>
                </div>
                <IconComp className="w-7 h-7 text-neutral-400 mx-auto mb-3" />
                <h3 className="text-h4 font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto">{step.body}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile: single column, horizontal layout */}
        <div className="md:hidden mt-10 space-y-6">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const IconComp = ICONS[step.icon as keyof typeof ICONS];
            return (
              <div key={step.number} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border-4 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-h4 font-semibold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
