import { Hammer, HardHat, Construction, Building2, Ruler, Shovel } from 'lucide-react';
import type { UseCaseSection } from '@/lib/data/content';

interface Props {
  equipmentName: string;
  sections: UseCaseSection[];
}

const ICON_MAP: Record<number, any> = {
  0: Construction,
  1: Hammer,
  2: Ruler,
  3: Building2,
  4: HardHat,
  5: Shovel,
};

export default function UseCaseSections({ equipmentName, sections }: Props) {
  return (
    <div className="mt-16">
      <h2 className="text-[28px] font-bold text-neutral-900 mb-2 leading-tight">
        ¿Para qué obra necesitas la {equipmentName}?
      </h2>
      <p className="text-neutral-500 text-lg mb-10">
        Soluciones profesionales adaptadas a cada necesidad técnica.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => {
          const Icon = ICON_MAP[idx] || Construction;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-neutral-900 mb-3">{section.title}</h3>
              <p className="text-neutral-600 text-base leading-relaxed">{section.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
