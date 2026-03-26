interface PriceRow {
  model: string;
  day: string;
  week: string;
  month: string;
}

interface PriceTableProps {
  equipmentName: string;
  cityName: string;
  intro: string;
  rows: PriceRow[];
}

export default function PriceTable({ equipmentName, cityName, intro, rows }: PriceTableProps) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
        Precios de alquiler de {equipmentName} en {cityName}
      </h2>
      <p className="text-neutral-600 text-sm leading-relaxed mb-6">{intro}</p>

      <div className="rounded-xl overflow-hidden border border-neutral-200">
        {/* Desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-dark text-white">
                {['Modelo', 'Por día*', 'Por semana*', 'Por mes*'].map((h) => (
                  <th key={h} className="text-xs font-semibold uppercase tracking-wider py-3 px-4 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="text-sm text-neutral-700 py-3 px-4 font-medium">{row.model}</td>
                  <td className="text-sm text-neutral-700 py-3 px-4 font-semibold">{row.day}</td>
                  <td className="text-sm text-neutral-700 py-3 px-4 font-semibold">{row.week}</td>
                  <td className="text-sm text-neutral-700 py-3 px-4 font-semibold">{row.month}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-neutral-200">
          {rows.map((row, idx) => (
            <div key={idx} className="p-4">
              <p className="font-semibold text-neutral-900 text-sm mb-2">{row.model}</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div><span className="text-neutral-500 block">Día*</span><span className="font-semibold">{row.day}</span></div>
                <div><span className="text-neutral-500 block">Semana*</span><span className="font-semibold">{row.week}</span></div>
                <div><span className="text-neutral-500 block">Mes*</span><span className="font-semibold">{row.month}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-neutral-400 mt-2 italic leading-relaxed">
        * Precios orientativos sujetos a disponibilidad y duración del alquiler. Consulta con tu proveedor para un presupuesto final.
      </p>
    </div>
  );
}
