import Image from 'next/image';
import { ShieldCheck, Truck, Zap, Clock } from 'lucide-react';
import type { EquipmentCategory } from '@/lib/data/equipment';
import { getCityBySlug } from '@/lib/data/cities';

interface PageHeroProps {
  equipment: EquipmentCategory;
  cityName: string;
  citySlug: string;
}

export default function PageHero({ equipment, cityName, citySlug }: PageHeroProps) {
  const city = getCityBySlug(citySlug);
  const isComingSoon = city?.status === 'coming';

  return (
    <div className="bg-white pt-8 pb-12 px-4 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-center">
        {/* Image Container */}
        <div className="w-full md:w-[45%] aspect-[16/10] relative rounded-[32px] overflow-hidden bg-neutral-100 border border-neutral-200 group flex-shrink-0 shadow-2xl">
          <Image
            src={equipment.image}
            alt={equipment.imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {isComingSoon && (
            <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-white text-neutral-900 font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-xl">
                Próximamente
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-success/10 text-success border border-success/20 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                <ShieldCheck size={14} />
                {isComingSoon ? `Expansión ${cityName}` : 'Proveedor Verificado'}
              </div>
              <div className="flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">
                <Truck size={14} />
                Entrega en obra
              </div>
            </div>

            <h1 className="text-[32px] sm:text-[42px] font-black text-neutral-900 leading-[1.1] tracking-tight">
              {isComingSoon ? 'Próximamente: ' : ''}
              Alquiler de {equipment.name} en <span className="text-primary">{cityName}</span>
            </h1>

            <p className="text-neutral-500 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
              {isComingSoon 
                ? `Estamos ultimando acuerdos con los mejores proveedores de ${cityName} para ofrecerte el mejor servicio de alquiler de maquinaria.`
                : `Accede a la mayor flota de ${equipment.name.toLowerCase()} en ${cityName}. Comparamos los mejores precios locales para ti.`
              }
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-neutral-900 uppercase tracking-wider">Respuesta</p>
                <p className="text-sm text-neutral-500 font-bold">{isComingSoon ? 'Muy pronto' : '< 2 horas'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-neutral-900 uppercase tracking-wider">Sin Registro</p>
                <p className="text-sm text-neutral-500 font-bold">Solicitud Express</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
