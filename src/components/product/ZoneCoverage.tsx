import { MapPin, CheckCircle2 } from 'lucide-react';

interface Zone {
  name: string;
  supplierCount: number;
}

export default function ZoneCoverage({ cityName, zones }: { cityName: string; zones: Zone[] }) {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-2">
        <MapPin className="text-primary w-6 h-6" />
        <h2 className="text-[28px] font-bold text-neutral-900 leading-tight">
          Cobertura confirmada en {cityName}
        </h2>
      </div>
      <p className="text-neutral-500 text-lg mb-8">
        Red de proveedores verificados operando en toda la provincia.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {zones.map((zone) => (
          <div 
            key={zone.name} 
            className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm hover:border-primary/30 transition-all flex flex-col justify-between"
          >
            <div>
              <p className="text-[17px] font-bold text-neutral-900 mb-1">{zone.name}</p>
              <div className="flex items-center gap-2 text-success">
                <CheckCircle2 size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Disponible</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-4 pt-3 border-t border-neutral-50">
              {zone.supplierCount} bases logísticas
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
