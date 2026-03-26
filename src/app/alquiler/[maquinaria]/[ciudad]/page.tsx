import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getEquipmentBySlug } from '@/lib/data/equipment';
import { getCityBySlug, getCityName } from '@/lib/data/cities';
import { FAQ_DATA, USE_CASES, PRICE_TABLE_INTROS } from '@/lib/data/content';
import { generateProductMetadata } from '@/lib/seo/metadata';
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';
import Breadcrumb from '@/components/product/Breadcrumb';
import PageHero from '@/components/product/PageHero';
import EquipmentTypeSelector from '@/components/product/EquipmentTypeSelector';
import PriceTable from '@/components/product/PriceTable';
import UseCaseSections from '@/components/product/UseCaseSections';
import ZoneCoverage from '@/components/product/ZoneCoverage';
import FAQAccordion from '@/components/product/FAQAccordion';
import RelatedEquipment from '@/components/product/RelatedEquipment';
import CityLinks from '@/components/product/CityLinks';
import RequestForm from '@/components/product/RequestForm';
import JsonLd from '@/components/seo/JsonLd';

type Props = {
  params: Promise<{ maquinaria: string; ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { maquinaria, ciudad } = await params;
  return generateProductMetadata(maquinaria, ciudad);
}

export async function generateStaticParams() {
  const { EQUIPMENT_CATEGORIES } = await import('@/lib/data/equipment');
  const { CITIES } = await import('@/lib/data/cities');

  const params: { maquinaria: string; ciudad: string }[] = [];

  for (const equipment of EQUIPMENT_CATEGORIES) {
    for (const city of CITIES) {
      params.push({
        maquinaria: equipment.slug,
        ciudad: city.slug,
      });
    }
  }

  return params;
}

export default async function ProductPage({ params }: Props) {
  const { maquinaria, ciudad } = await params;
  const equipment = getEquipmentBySlug(maquinaria);
  const city = getCityBySlug(ciudad);
  const cityName = getCityName(ciudad);

  if (!equipment) {
    notFound();
  }

  const faqs = FAQ_DATA[maquinaria]?.[ciudad] ?? FAQ_DATA[maquinaria]?.malaga ?? [];
  const useCases = USE_CASES[maquinaria]?.[ciudad] ?? USE_CASES[maquinaria]?.malaga ?? [];
  const priceIntro = PRICE_TABLE_INTROS[maquinaria]?.[ciudad] ?? PRICE_TABLE_INTROS[maquinaria]?.malaga ?? '';

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Alquiler de maquinaria', href: '/' },
    { label: equipment.name, href: `/alquiler/${maquinaria}/` },
    { label: cityName },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={generateProductSchema(equipment, cityName)} />
      {faqs.length > 0 && <JsonLd data={generateFAQSchema(faqs)} />}
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.label, url: b.href || `/alquiler/${maquinaria}/${ciudad}/` })))} />

      <Breadcrumb items={breadcrumbItems} />
      <PageHero
        equipment={equipment}
        cityName={cityName}
        citySlug={ciudad}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Left column */}
          <div className="flex-1">
            <EquipmentTypeSelector 
              types={equipment.types} 
              isEstimated={city?.status === 'coming'} 
            />
            <PriceTable
              equipmentName={equipment.name}
              cityName={cityName}
              intro={priceIntro}
              rows={equipment.pricingTable}
            />
            {useCases.length > 0 && (
              <UseCaseSections equipmentName={equipment.name} sections={useCases} />
            )}
            {city?.status === 'active' && city.zones && city.zones.length > 0 && (
              <ZoneCoverage cityName={cityName} zones={city.zones} />
            )}
            {faqs.length > 0 && (
              <FAQAccordion
                equipmentName={equipment.name}
                cityName={cityName}
                items={faqs}
              />
            )}
            <RelatedEquipment
              cityName={cityName}
              citySlug={ciudad}
              relatedSlugs={equipment.relatedEquipment}
            />
            <CityLinks
              equipmentName={equipment.name}
              equipmentSlug={maquinaria}
              currentCity={ciudad}
            />
          </div>

          {/* Right column — sticky form */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="lg:sticky lg:top-24">
              <RequestForm
                equipmentName={equipment.name}
                cityName={cityName}
                minPrice={equipment.minPrice}
                isWaitlist={city?.status === 'coming'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
