export async function generateStaticParams() {
  const { EQUIPMENT_CATEGORIES } = await import('@/lib/data/equipment');

  return EQUIPMENT_CATEGORIES.map((equipment) => ({
    maquinaria: equipment.slug,
  }));
}

export default function PreciosPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-h1 font-bold text-neutral-900">Precios de alquiler de maquinaria</h1>
        <p className="text-neutral-600 text-lg mt-4 max-w-2xl">
          Consulta precios orientativos para el alquiler de maquinaria de construcción en España.
        </p>
      </div>
    </section>
  );
}
