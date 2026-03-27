'use client';

import { CheckCircle2, Zap, Lock } from 'lucide-react';
import { getPriceRange } from '@/lib/utils';

interface RequestFormProps {
  equipmentName: string;
  cityName: string;
  minPrice: number;
  isWaitlist?: boolean;
}

export default function RequestForm({ equipmentName, cityName, minPrice, isWaitlist }: RequestFormProps) {
  const maxPrice = getPriceRange(minPrice);

  return (
    <div className="bg-white rounded-[32px] border border-neutral-200 p-1 px-1 pb-1 shadow-2xl overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* Visual Header */}
      <div className={`p-8 pt-10 pb-12 rounded-[30px] text-white transition-colors ${isWaitlist ? 'bg-neutral-800' : 'bg-neutral-900'}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full animate-pulse ${isWaitlist ? 'bg-amber-400' : 'bg-success'}`}></span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            {isWaitlist ? 'Próxima Apertura' : 'Disponibilidad Inmediata'}
          </span>
        </div>
        <h3 className="text-2xl font-black leading-tight mb-6">
          Solicitar Presupuesto
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-neutral-400 text-sm font-bold">Desde</span>
          <span className="text-4xl font-black text-primary">{minPrice}€</span>
          <span className="text-neutral-400 text-lg font-bold"> - {maxPrice}€</span>
          <span className="text-neutral-500 text-sm font-medium ml-1">/ día*</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-7 pt-8 space-y-6">
        <form
          name="contact"
          method="POST"
          action="/__forms.html"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            try {
              await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
              });
              window.location.href = "/success";
            } catch (error) {
              alert("Error al enviar el formulario");
            }
          }}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* Maquinaria */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Maquinaria
            </label>
            <input
              type="text"
              name="maquinaria"
              defaultValue={equipmentName}
              required
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 h-14 text-sm font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Ciudad */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              defaultValue={cityName}
              required
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 h-14 text-sm font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Nombre */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Tu Nombre
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 h-14 text-sm font-bold text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              placeholder="600 000 000"
              required
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 h-14 text-sm font-bold text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              required
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 h-14 text-sm font-bold text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Mensaje */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">
              Mensaje (Opcional)
            </label>
            <textarea
              name="mensaje"
              rows={3}
              placeholder="Cuéntanos más sobre tu proyecto..."
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-3 text-sm font-bold text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-primary hover:bg-primary-hover text-white font-black text-[17px] rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group mt-4"
          >
            Solicitar Presupuesto
            <Zap size={18} className="transition-transform group-hover:scale-125" />
          </button>
        </form>

        {/* Security Footer */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-success font-bold text-[11px] uppercase tracking-wider">
              <Lock size={12} strokeWidth={3} />
              Datos Seguros
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-200"></div>
            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Sin compromiso
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
