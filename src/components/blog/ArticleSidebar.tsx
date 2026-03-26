import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { BlogArticle, CATEGORY_LABELS } from '@/lib/data/blog';
import { getEquipmentBySlug } from '@/lib/data/equipment';

interface ArticleSidebarProps {
  relatedArticles: BlogArticle[];
  equipmentSlug?: string;
}

export default function ArticleSidebar({ relatedArticles, equipmentSlug }: ArticleSidebarProps) {
  const equipment = equipmentSlug ? getEquipmentBySlug(equipmentSlug) : null;
  
  const allCategories = Object.entries(CATEGORY_LABELS).map(([id, label]) => ({
    id,
    label,
  }));

  return (
    <aside className="w-full xl:w-80 flex-shrink-0 space-y-4 hidden lg:block sticky top-24 self-start">
      {/* CARD 1 — MAIN CTA */}
      {equipment && (
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
            ¿Necesitas {equipment.name.toLowerCase()}?
          </h3>
          <p className="text-lg font-bold text-neutral-900 mb-1">{equipment.name}</p>
          <div className="text-primary text-2xl font-bold">Desde {equipment.minPrice}€<span className="text-sm font-medium">/día</span></div>
          <p className="text-neutral-500 text-xs mt-1">En Málaga · Disponible en 24h</p>

          <Link
            href={`/alquiler/${equipment.slug}/malaga/`}
            className="mt-5 block w-full bg-primary hover:bg-primary-hover text-white font-bold text-sm text-center py-3 rounded-xl transition-colors"
          >
            Solicitar disponibilidad →
          </Link>

          <div className="space-y-2 mt-4">
            {['Sin pago por adelantado', 'Confirmamos en 2 horas', 'Sin compromiso'].map((text) => (
              <div key={text} className="text-xs text-neutral-500 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CARD 2 — RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-700 mb-4">Artículos relacionados</h3>
          <div className="space-y-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}/`}
                className="flex items-start gap-3 group hover:opacity-80 transition-opacity"
              >
                <div className="w-14 h-14 relative rounded-lg overflow-hidden flex-shrink-0 bg-neutral-200">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-800 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">{article.readTime} min</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CARD 3 — ALL CATEGORIES */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-neutral-700 mb-4">Explorar por categoría</h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog/?categoria=${cat.id}`}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors text-sm text-neutral-600 hover:text-primary"
            >
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
