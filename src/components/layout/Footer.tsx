import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';
import { EQUIPMENT_CATEGORIES } from '@/lib/data/equipment';
import { CITIES } from '@/lib/data/cities';

import { Logo } from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Logo size="large" />
            <p className="text-white/50 text-sm mt-2 leading-relaxed max-w-xs">
              La forma más rápida de alquilar maquinaria de obra en España.
            </p>
            

            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Maquinaria */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Maquinaria</h4>
            <ul className="space-y-2">
              {EQUIPMENT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/precios/${cat.slug}/`} className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ciudades */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Ciudades</h4>
            <ul className="space-y-2">
              {CITIES.map((city) => (
                <li key={city.id}>
                  {city.status === 'active' ? (
                    <Link href={`/ciudades/${city.slug}/`} className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
                      {city.name}
                    </Link>
                  ) : (
                    <span className="text-white/50 text-sm">
                      {city.name} <span className="text-white/30">· Pronto</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre nosotros', href: '/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Soy proveedor', href: '/proveedores/' },
                { label: 'Contacto', href: '/' },
                { label: 'Aviso legal', href: '/' },
                { label: 'Política de privacidad', href: '/' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2026 Maqon. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-white/40 text-xs">
            <a href="mailto:info@maqon.es" className="hover:text-white transition-colors">info@maqon.es</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
