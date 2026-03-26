import type { Metadata } from 'next';
import SupplierHero from '@/components/proveedores/SupplierHero';
import SupplierBenefits from '@/components/proveedores/SupplierBenefits';
import HowItWorksSupplier from '@/components/proveedores/HowItWorksSupplier';
import SupplierPricing from '@/components/proveedores/SupplierPricing';
import SupplierTestimonials from '@/components/proveedores/SupplierTestimonials';
import SupplierFAQ from '@/components/proveedores/SupplierFAQ';
import SupplierSignupForm from '@/components/proveedores/SupplierSignupForm';
import JsonLd from '@/components/seo/JsonLd';
import { SUPPLIER_FAQ } from '@/lib/data/content';

export const metadata: Metadata = {
  title: 'Alquila tu maquinaria de construcción — Consigue más clientes | Maqon',
  description:
    '¿Tienes maquinaria de construcción parada? Conectamos tu flota con obras activas en Málaga. Sin exclusividad. Sin comisión fija. Gestión desde el móvil.',
  alternates: { canonical: '/proveedores/' },
  openGraph: {
    title: 'Alquila tu maquinaria de construcción — Consigue más clientes | Maqon',
    description:
      '¿Tienes maquinaria de construcción parada? Conectamos tu flota con obras activas en Málaga. Sin exclusividad. Sin comisión fija. Gestión desde el móvil.',
    url: '/proveedores/',
  },
};

function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Maqon',
    description:
      'Plataforma de alquiler de maquinaria de construcción en España. Conectamos a empresas alquiladoras con obras activas.',
    url: 'https://maqon.es',
    areaServed: {
      '@type': 'Province',
      name: 'Málaga',
      containedIn: { '@type': 'Country', name: 'España' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-951-000-000',
      contactType: 'sales',
      availableLanguage: ['Spanish'],
    },
  };
}

function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SUPPLIER_FAQ.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default function ProveedoresPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema()} />

      <SupplierHero />
      <SupplierBenefits />
      <HowItWorksSupplier />
      <SupplierPricing />
      <SupplierTestimonials />
      <SupplierFAQ />
      <SupplierSignupForm />
    </>
  );
}
