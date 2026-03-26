import { PackageOpen, Phone, Clock, TrendingUp, Euro, Smartphone, Shield, Users, BarChart3, ArrowDown } from 'lucide-react';
import { SUPPLIER_PAIN_POINTS, SUPPLIER_BENEFITS } from '@/lib/data/content';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  PackageOpen, Phone, Clock, TrendingUp, Euro, Smartphone, Shield, Users, BarChart3,
};

export default function SupplierBenefits() {
  return (
    <>
      {/* PAIN POINTS */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900">¿Reconoces alguna de estas situaciones?</h2>
            <p className="text-neutral-600 text-base mt-3">
              Son los problemas más comunes que nos cuentan los alquiladores de Málaga.
            </p>
          </div>

          {/* Pain cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {SUPPLIER_PAIN_POINTS.map((pain) => {
              const Icon = ICONS[pain.icon];
              return (
                <div key={pain.title} className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                  {Icon && <Icon className="w-7 h-7 text-primary mb-4" />}
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{pain.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{pain.body}</p>
                </div>
              );
            })}
          </div>

          {/* Transition */}
          <div className="mt-16 text-center">
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
            <p className="text-base font-semibold text-neutral-700 mt-3">Así lo resolvemos</p>
          </div>
        </div>
      </section>

      {/* BENEFITS / SOLUTION */}
      <section className="bg-primary-light py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 block">
              Ventajas para proveedores
            </span>
            <h2 className="text-3xl font-bold text-neutral-900">Todo lo que ganas trabajando con nosotros</h2>
          </div>

          {/* Benefits grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {SUPPLIER_BENEFITS.map((benefit) => {
              const Icon = ICONS[benefit.icon];
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl p-6 border border-neutral-100 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{benefit.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
