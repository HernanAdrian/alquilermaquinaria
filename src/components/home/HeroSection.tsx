import Image from 'next/image';
import SearchBar from '@/components/ui/SearchBar';
import { CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-dark">
        <Image
          src="/images/hero-homepage.webp"
          alt="Alquiler de maquinaria de construcción en Málaga con disponibilidad inmediata"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-32 pb-20">
        {/* H1 */}
        <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl mx-auto">
          Alquila maquinaria de obra en Málaga — <span className="text-primary">disponibilidad en 24-48 horas</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/85 font-normal text-base md:text-xl leading-relaxed max-w-2xl mx-auto mt-4">
          Compara presupuestos de proveedores locales verificados. Ahorra tiempo y asegura el mejor precio para tu obra o reforma.
        </p>

        {/* Search Bar */}
        <SearchBar />

        {/* Trust bar */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
          {[
            'Sin compromiso',
            'Presupuesto gratuito',
            'Proveedores verificados',
            'Sin pago por adelantado'
          ].map((text) => (
            <span key={text} className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={14} className="text-primary" /> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
