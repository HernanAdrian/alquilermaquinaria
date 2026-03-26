import { CheckCircle2, ShieldCheck } from 'lucide-react';

const INCLUDED = [
  'Alta en la plataforma completamente gratis',
  'Ficha de tu maquinaria publicada en 48 horas',
  'Aparición en búsquedas de Google en Málaga',
  'Notificaciones de solicitudes por WhatsApp y email',
  'Panel de gestión de pedidos desde el móvil',
  'Soporte directo por WhatsApp con el equipo',
];

export default function SupplierPricing() {
  return (
    <section className="bg-neutral-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Transparencia total en los precios</h2>
          <p className="text-neutral-600 text-base mt-3">Sin letra pequeña. Sin sorpresas.</p>
        </div>

        {/* Pricing card */}
        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl border-2 border-primary p-8 sm:p-10 text-center shadow-lg relative">
          {/* Top badge */}
          <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full inline-block mb-6 -mt-12 relative z-10">
            Modelo de comisión por éxito
          </span>

          {/* Main price */}
          <div>
            <span className="text-6xl font-bold text-neutral-900">0€</span>
            <span className="text-xl text-neutral-500 font-normal">/mes</span>
          </div>
          <p className="mt-2 text-neutral-600 text-sm">Sin cuota fija. Sin permanencia.</p>

          {/* Divider */}
          <hr className="mt-6 mb-6 border-neutral-100" />

          {/* Included list */}
          <div className="space-y-4 text-left">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr className="mt-6 mb-6 border-neutral-100" />

          {/* Commission */}
          <p className="text-neutral-500 text-sm mb-2">Solo pagas cuando alquilas</p>
          <div className="bg-primary-light border border-primary/20 rounded-xl px-6 py-4 inline-block">
            <div className="text-primary text-3xl font-bold">X% de comisión</div>
            <div className="text-neutral-500 text-xs mt-1">sobre el valor del alquiler cerrado</div>
          </div>
          <p className="text-neutral-400 text-xs mt-3 italic">
            La comisión exacta se define en el acuerdo individual según tipo de maquinaria y volumen.
          </p>

          {/* CTA */}
          <a
            href="#signup"
            className="mt-8 w-full block bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-xl transition-colors"
          >
            Registrarme como proveedor →
          </a>

          {/* Guarantee */}
          <p className="mt-4 text-center text-neutral-500 text-xs flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-success inline" />
            Sin permanencia · Cancela cuando quieras · Sin exclusividad
          </p>
        </div>
      </div>
    </section>
  );
}
