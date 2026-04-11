import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITIES } from '@/lib/data/cities';
import { ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return EQUIPMENT_CATEGORIES.map((equipment) => ({
    maquinaria: equipment.slug,
  }));
}

interface PageProps {
  params: Promise<{ maquinaria: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { maquinaria } = await params;
  const equipment = EQUIPMENT_CATEGORIES.find(e => e.slug === maquinaria);
  if (!equipment) return {};

  return {
    title: `Precios de alquiler de ${equipment.name.toLowerCase()} en España | Maqon`,
    description: `Consulta los precios orientativos para alquilar ${equipment.name.toLowerCase()} en España. Compara tarifas por día, semana y mes en diferentes proveedores.`,
  };
}

export default async function PreciosPage({ params }: PageProps) {
  const { maquinaria } = await params;
  const equipment = EQUIPMENT_CATEGORIES.find(e => e.slug === maquinaria);

  if (!equipment) {
    notFound();
  }

  const activeCities = CITIES.filter(c => c.status === 'active');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 py-12 md:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-neutral-900">Precios alquiler {equipment.name.toLowerCase()}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Precios de alquiler de {equipment.name.toLowerCase()}
          </h1>
          <p className="text-neutral-600 text-lg mt-6 max-w-3xl leading-relaxed">
            Descubre los precios orientativos para alquilar {equipment.name.toLowerCase()} en España. Nuestras tarifas de referencia te ayudarán a presupuestar tu obra correctamente. Los proveedores facturan tarifas que se sitúan en estos rangos dependiendo de la necesidad logística.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border text-left border-neutral-200 rounded-2xl shadow-sm overflow-hidden mb-16">
            <div className="p-6 md:p-8 border-b border-neutral-200 bg-neutral-50/50">
              <h2 className="text-2xl font-bold text-neutral-900">Tabla de tarifas orientativas</h2>
              <p className="text-neutral-600 mt-2">Valores medios en el mercado español excluyendo IVA y transporte.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-900 text-white text-sm">
                    <th className="px-6 py-4 font-semibold">Tipo / Modelo</th>
                    <th className="px-6 py-4 font-semibold">Precio / Día</th>
                    <th className="px-6 py-4 font-semibold">Precio / Semana</th>
                    <th className="px-6 py-4 font-semibold">Precio / Mes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {equipment.pricingTable.map((row) => (
                    <tr key={row.model} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-neutral-900">{row.model}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{row.day}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{row.week}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{row.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
             <div>
               <h3 className="text-2xl font-bold text-neutral-900 mb-6">Alquila en tu zona</h3>
               <p className="text-neutral-600 mb-6 leading-relaxed">
                 Selecciona tu provincia para ver disponibilidad real y comparar precios exactos entre múltiples proveedores locales. 
               </p>
               <div className="flex flex-wrap gap-3">
                 {activeCities.map((city) => (
                   <Link 
                     key={city.slug} 
                     href={`/alquiler/${equipment.slug}/${city.slug}/`}
                     className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium rounded-full transition-colors border border-neutral-200"
                   >
                     {city.name}
                   </Link>
                 ))}
               </div>
             </div>
             <div>
               <h3 className="text-2xl font-bold text-neutral-900 mb-6">Sobre el precio de alquiler</h3>
               <div className="space-y-6">
                 <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Transporte</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">El coste de entrega y recogida no suele estar incluido en la tarifa diaria. Varía en función de la distancia del almacén a la obra y del camión de plataforma necesario.</p>
                 </div>
                 <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Combustible</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">Las máquinas se suelen entregar llenas o a un nivel específico de diésel y deben devolverse en el mismo nivel para evitar cargos extra.</p>
                 </div>
                 <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Fianza temporal</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">La mayoría de proveedores solicitarán una fianza técnica reembolsable antes del inicio del alquiler para cubrir posibles malos usos de la máquina en el periodo.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
