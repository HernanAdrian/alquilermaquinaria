'use client';

export default function SupplierHero() {
  const metrics = [
    { number: '500+', label: 'solicitudes mensuales' },
    { number: '47', label: 'proveedores activos' },
    { number: '< 2h', label: 'tiempo de respuesta' },
  ];

  return (
    <section className="bg-dark min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20 md:pt-32 md:pb-20 text-center relative z-10">
        {/* Label */}
        <span className="inline-block bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          Para empresas de alquiler de maquinaria
        </span>

        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
          Consigue más alquileres para tu maquinaria de construcción
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-xl text-white/70 mt-5 max-w-2xl mx-auto leading-relaxed">
          Conectamos tu flota con obras activas en Málaga. Sin exclusividad. Sin comisión fija. Tú decides cuándo y a quién alquilas.
        </p>

        {/* Metrics row */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-16">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-primary text-4xl font-bold">{m.number}</div>
              <div className="text-white/50 text-sm mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Dual CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#signup"
            className="bg-primary hover:bg-primary-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Quiero ser proveedor →
          </a>
          <a
            href="#como-funciona"
            className="border border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-4 rounded-xl transition-colors"
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-white/40 text-sm text-center">
          Sin permanencia · Sin exclusividad · Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}
