'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Phone, ChevronRight, 
  Shovel, ArrowUpCircle, Tractor, Truck, 
  Construction, HardHat, Hammer, Settings 
} from 'lucide-react';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { Logo } from '@/components/ui/Logo';

const CATEGORY_ICONS: Record<string, any> = {
  'miniexcavadora': Shovel,
  'excavadora-de-cadenas': Construction,
  'retroexcavadora-mixta': Construction,
  'minicargadora': Tractor,
  'pala-cargadora': Tractor,
  'dumper': Truck,
  'tijera-electrica': ArrowUpCircle,
  'articulada-electrica': ArrowUpCircle,
  'articulada-diesel': ArrowUpCircle,
  'telescopica': ArrowUpCircle,
  'mastil-vertical': ArrowUpCircle,
  'unipersonal': ArrowUpCircle,
  'sobre-camion': Truck,
  'manipulador-telescopico': Tractor,
  'carretilla-elevadora-industrial': Truck,
  'carretilla-4x4-obra': Truck,
  'default': HardHat
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMaquinariaOpen, setMobileMaquinariaOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-dark transition-all duration-200 ${scrolled ? 'border-b border-white/10' : ''}`}>
      {/* Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Logo />

        {/* Center nav */}
        <div className="flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="text-white/80 text-sm font-medium hover:text-white transition-colors relative pb-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:w-0 after:transition-all">
              Maquinaria
            </button>

            {/* Mega Menu */}
            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-dark border-t border-white/10 shadow-xl rounded-b-xl mt-0 p-8">
                <div className="flex gap-8">
                  {/* Left — Categories */}
                  <div className="flex-[3]">
                    <div className="grid grid-cols-2 gap-1">
                      {EQUIPMENT_CATEGORIES.map((cat) => {
                        const Icon = CATEGORY_ICONS[cat.id] || CATEGORY_ICONS.default;
                        return (
                          <Link
                            key={cat.id}
                            href={`/alquiler/${cat.slug}/malaga/`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-white text-sm font-semibold block">{cat.name}</span>
                              <span className="text-white/50 text-xs">Desde {cat.minPrice}€/día</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right — Featured */}
                  <div className="flex-[2] bg-dark-light rounded-xl p-5 border border-white/5">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                      Más solicitado
                    </span>
                    <div className="mt-4 rounded-lg overflow-hidden aspect-[16/10] bg-white/10 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                        Miniexcavadora
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mt-3">Miniexcavadora en Málaga</h4>
                    <p className="text-white/50 text-xs mt-1">Disponibilidad confirmada en 2 horas</p>
                    <Link
                      href="/alquiler/miniexcavadora/malaga/"
                      className="mt-3 inline-flex items-center gap-1 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Ver disponibilidad <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/ciudades/malaga/" className="text-white/80 text-sm font-medium hover:text-white transition-colors relative pb-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:w-0 after:transition-all">
            Ciudades
          </Link>
          <Link href="/precios/miniexcavadora/" className="text-white/80 text-sm font-medium hover:text-white transition-colors relative pb-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:w-0 after:transition-all">
            Precios
          </Link>
          <Link href="/blog/" className="text-white/80 text-sm font-medium hover:text-white transition-colors relative pb-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:w-0 after:transition-all">
            Blog
          </Link>
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Link href="/proveedores/" className="border border-white/30 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
            Soy proveedor
          </Link>
          <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
            Solicitar equipo
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between px-4 h-16">
        <Link href="/" className="text-white font-bold text-xl tracking-tighter">
          Maqon
        </Link>
        <button onClick={() => setMobileOpen(true)} className="text-white p-2" aria-label="Abrir menú">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-dark z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
            <Logo onClick={() => setMobileOpen(false)} />
            <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="Cerrar menú">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Maquinaria Collapsible */}
            <div>
              <button 
                onClick={() => setMobileMaquinariaOpen(!mobileMaquinariaOpen)}
                className="flex items-center justify-between w-full px-6 h-14 text-white text-lg border-b border-white/10 hover:bg-white/5 transition-colors"
                aria-expanded={mobileMaquinariaOpen}
              >
                Maquinaria 
                <ChevronRight className={`w-5 h-5 text-white/40 transition-transform duration-200 ${mobileMaquinariaOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {mobileMaquinariaOpen && (
                <div className="bg-white/5 grid grid-cols-1 divide-y divide-white/5">
                  {EQUIPMENT_CATEGORIES.map((cat) => {
                    const Icon = CATEGORY_ICONS[cat.id] || CATEGORY_ICONS.default;
                    return (
                      <Link
                        key={cat.id}
                        href={`/alquiler/${cat.slug}/malaga/`}
                        className="flex items-center gap-3 px-8 py-3 hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-primary flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-white/80 text-sm font-medium">{cat.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {['Ciudades', 'Precios', 'Blog'].map((label) => (
              <Link
                key={label}
                href={label === 'Ciudades' ? '/ciudades/malaga/' : label === 'Precios' ? '/precios/miniexcavadora/' : '/blog/'}
                className="flex items-center justify-between px-6 h-14 text-white text-lg border-b border-white/10 hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label} <ChevronRight className="w-5 h-5 text-white/40" />
              </Link>
            ))}
          </div>
          <div className="p-4 space-y-3 border-t border-white/10">
            <Link href="/proveedores/" className="block w-full text-center border border-white/30 text-white font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMobileOpen(false)}>
              Soy proveedor
            </Link>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors">
              Solicitar equipo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
