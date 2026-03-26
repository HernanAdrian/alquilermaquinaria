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
            
            <div className="mt-8">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">Únete al lanzamiento</p>
              <form 
                name="general-waitlist"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="flex gap-2"
              >
                <input type="hidden" name="form-name" value="general-waitlist" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Tu email" 
                  required
                  className="bg-white/10 border-none rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:ring-1 focus:ring-primary w-full"
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors flex-shrink-0"
                >
                  Ok
                </button>
              </form>
            </div>

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
                  <Link href={`/alquiler/${cat.slug}/malaga/`} className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
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
                  <Link href={city.status === 'active' ? `/ciudades/${city.slug}/` : '#'} className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
                    {city.name} {city.status === 'coming' && <span className="text-white/30">· Pronto</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre nosotros', 'Blog', 'Soy proveedor', 'Contacto', 'Aviso legal', 'Política de privacidad'].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-white/50 text-sm hover:text-white hover:text-primary transition-colors">
                    {label}
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
