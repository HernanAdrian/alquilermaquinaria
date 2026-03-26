'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface EquipmentType {
  label: string;
  useCase: string;
  priceDay: string;
  default?: boolean;
}

interface EquipmentTypeSelectorProps {
  types: EquipmentType[];
  isEstimated?: boolean;
}

export default function EquipmentTypeSelector({ types, isEstimated }: EquipmentTypeSelectorProps) {
  const defaultIdx = types.findIndex((t) => t.default) ?? 0;
  const [selected, setSelected] = useState(defaultIdx >= 0 ? defaultIdx : 0);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[20px] font-bold text-neutral-900">
          Selecciona la capacidad o modelo
        </h3>
        {isEstimated && (
          <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider border border-amber-200">
            Precios Estimados
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {types.map((type, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={cn(
                'relative flex flex-col p-5 rounded-2xl transition-all text-left group border-2',
                isSelected
                  ? 'border-primary bg-primary-light ring-4 ring-primary/5 shadow-md'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
              )}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 text-primary">
                  <Check size={18} />
                </div>
              )}
              <div className="mb-4">
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">{type.label}</p>
                <p className="text-neutral-900 text-lg font-bold leading-tight">{type.useCase}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-100 flex items-baseline gap-1">
                <span className="text-2xl font-black text-neutral-900">{type.priceDay.split(' ')[0]}</span>
                <span className="text-sm font-semibold text-neutral-500 tracking-tight">/ día*</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
