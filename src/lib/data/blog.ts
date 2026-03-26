export type BlogCategory =
  | 'guias-maquinaria'
  | 'precios-alquiler'
  | 'consejos-obra'
  | 'malaga-andalucia';

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishDate: string;
  readTime: number;
  image: string;
  ogImage: string;
  featured: boolean;
  relatedEquipment: string[];
  relatedArticles: string[];
  content: string; // HTML or Markdown
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'guias-maquinaria': 'Guías de maquinaria',
  'precios-alquiler': 'Precios y alquiler',
  'consejos-obra': 'Consejos de obra',
  'malaga-andalucia': 'Málaga y Andalucía',
};

// Placeholder content for the body
const defaultContent = `
<h2>¿Por qué esto es importante para tu obra?</h2>
<p>
  En la construcción moderna, elegir el equipo adecuado no solo ahorra tiempo sino también dinero. 
  La maquinaria que selecciones dependerá del tipo de terreno, el volumen de trabajo y las limitaciones de acceso en tu obra.
  Es fundamental entender las capacidades reales del equipo antes de alquilarlo.
</p>
<h3>Factores clave a considerar</h3>
<ul>
  <li>Capacidad de carga y alcance operativo.</li>
  <li>Dimensiones de la máquina y espacio disponible.</li>
  <li>Tipos de accesorios o implementos necesarios.</li>
</ul>
<p>
  Asegúrate de consultar con tu proveedor local para verificar que la máquina cuenta con todo el mantenimiento al día y los seguros correspondientes.
</p>
`;

export const BLOG_ARTICLES: BlogArticle[] = [
  // --- FEATURED ---
  {
    slug: 'que-es-una-miniexcavadora-tipos-y-usos',
    title: 'Qué es una miniexcavadora: tipos, usos y cuándo alquilarla',
    metaTitle: 'Qué es una miniexcavadora y tipos | Guía de alquiler 2026',
    metaDescription:
      'Descubre qué es una miniexcavadora, los diferentes tipos, capacidades y los principales usos en obra. Guía completa para elegir la mejor máquina.',
    excerpt:
      'Las miniexcavadoras son máquinas versátiles clave en zanjeo, demoliciones y jardinería. Conoce los tipos de tonelaje y cuándo es rentable alquilarlas.',
    category: 'guias-maquinaria',
    primaryKeyword: 'miniexcavadora',
    secondaryKeywords: ['que es una miniexcavadora', 'tipos de miniexcavadoras', 'alquilar miniexcavadora'],
    publishDate: '2026-03-15T10:00:00Z',
    readTime: 7,
    image: '/images/alquiler-miniexcavadora.webp',
    ogImage: '/images/og-miniexcavadora.webp',
    featured: true,
    relatedEquipment: ['miniexcavadora', 'minicargadora'],
    relatedArticles: ['miniexcavadora-vs-retroexcavadora-diferencias', 'como-elegir-miniexcavadora-para-obra'],
    content: defaultContent,
  },
  // --- GUÍAS DE MAQUINARIA ---
  {
    slug: 'tipos-plataformas-elevadoras-guia-completa',
    title: 'Tipos de plataformas elevadoras: tijera, articulada y telescópica',
    metaTitle: 'Tipos de plataformas elevadoras: tijera, articulada y telescópica',
    metaDescription:
      'Guía sobre los tipos de plataformas elevadoras de personal. Cuándo usar tijera eléctrica, articulada o telescópica diésel en tu obra.',
    excerpt:
      'Elige correctamente entre plataformas de tijera para interior, o brazos articulados y telescópicos para trabajos a gran altura en exterior.',
    category: 'guias-maquinaria',
    primaryKeyword: 'tipos plataformas elevadoras',
    secondaryKeywords: ['plataforma elevadora de tijera', 'plataforma articulada', 'plataforma telescopica'],
    publishDate: '2026-03-10T09:00:00Z',
    readTime: 6,
    image: '/images/alquiler-plataforma-tijera-electrica.webp',
    ogImage: '/images/og-plataforma.webp',
    featured: false,
    relatedEquipment: ['plataforma-elevadora'],
    relatedArticles: ['seguridad-plataformas-elevadoras-obra', 'cuanto-cuesta-alquilar-plataforma-elevadora'],
    content: defaultContent,
  },
  {
    slug: 'que-es-un-dumper-y-para-que-sirve',
    title: 'Qué es un dumper: tipos, capacidades y usos en obra',
    metaTitle: 'Qué es un dumper: funcionamiento, tipos y cuándo usarlo',
    metaDescription:
      'Aprende qué es un dumper de obra, la diferencia entre descarga frontal y giratoria, y cómo mejorar el movimiento de tierras en tu proyecto.',
    excerpt:
      'El volquete o dumper es el mejor aliado de la excavadora. Descubre las diferencias entre modelos articulados, rígidos, frontales y giratorios.',
    category: 'guias-maquinaria',
    primaryKeyword: 'que es un dumper',
    secondaryKeywords: ['tipos de dumper', 'dumper articulado', 'dumper descarga giratoria'],
    publishDate: '2026-03-05T08:30:00Z',
    readTime: 5,
    image: '/images/alquiler-dumper-obra.webp',
    ogImage: '/images/og-dumper.webp',
    featured: false,
    relatedEquipment: ['dumper'],
    relatedArticles: ['que-es-una-miniexcavadora-tipos-y-usos', 'como-elegir-miniexcavadora-para-obra'],
    content: defaultContent,
  },
  {
    slug: 'miniexcavadora-vs-retroexcavadora-diferencias',
    title: 'Miniexcavadora vs retroexcavadora: cuál necesitas para tu obra',
    metaTitle: 'Miniexcavadora vs retroexcavadora: diferencias clave',
    metaDescription:
      'Comparamos miniexcavadoras y retroexcavadoras mixtas. Te ayudamos a decidir qué maquinaria rentar según el volumen de trabajo y acceso.',
    excerpt:
      '¿Cadenas de goma o ruedas? ¿Excavación frontal o pala cargadora? Comparamos frente a frente las dos máquinas de movimiento de tierras más populares.',
    category: 'guias-maquinaria',
    primaryKeyword: 'miniexcavadora vs retroexcavadora',
    secondaryKeywords: ['diferencia miniexcavadora y retroexcavadora', 'retroexcavadora mixta'],
    publishDate: '2026-02-28T10:15:00Z',
    readTime: 6,
    image: '/images/alquiler-retroexcavadora-mixta.webp',
    ogImage: '/images/og-retro.webp',
    featured: false,
    relatedEquipment: ['miniexcavadora', 'retroexcavadora'],
    relatedArticles: ['que-es-una-miniexcavadora-tipos-y-usos', 'alquiler-vs-compra-maquinaria-construccion'],
    content: defaultContent,
  },
  {
    slug: 'grupo-electrogeno-alquiler-guia',
    title: 'Grupo electrógeno: qué es, tipos y cuándo alquilar uno',
    metaTitle: 'Qué es un grupo electrógeno y guía para alquilar',
    metaDescription:
      'Todo sobre generadores y grupos electrógenos para obras. Diferencias en kVA, insonorización y cómo calcular la potencia necesaria.',
    excerpt:
      'Suministra energía ininterrumpida a tu obra. Guía práctica para entender potencias en kVA, elegir generadores insonorizados y evitar cortes.',
    category: 'guias-maquinaria',
    primaryKeyword: 'grupo electrogeno alquiler',
    secondaryKeywords: ['que es un grupo electrogeno', 'generador electrico obra', 'kVA generador'],
    publishDate: '2026-02-20T11:00:00Z',
    readTime: 5,
    image: '/images/alquiler-grupo-electrogeno.webp',
    ogImage: '/images/og-generador.webp',
    featured: false,
    relatedEquipment: ['grupo-electrogeno'],
    relatedArticles: ['alquiler-vs-compra-maquinaria-construccion'],
    content: defaultContent,
  },
  // --- PRECIOS Y ALQUILER ---
  {
    slug: 'precio-alquiler-miniexcavadora-espana-2026',
    title: 'Precio alquiler miniexcavadora en España 2026 — guía de tarifas',
    metaTitle: 'Precios de alquiler de miniexcavadoras en España (2026)',
    metaDescription:
      'Tarifas por día, semana y mes para el alquiler de miniexcavadoras de 1 a 8 toneladas en España. Precios reales actualizados en 2026.',
    excerpt:
      'Analizamos los precios de mercado del alquiler de excavadoras compactas. Descubre cuánto cuesta desde 1 hasta 8 toneladas por día y mes.',
    category: 'precios-alquiler',
    primaryKeyword: 'precio alquiler miniexcavadora',
    secondaryKeywords: ['cuanto cuesta alquilar excavadora pequeña', 'tarifas alquiler maquinaria'],
    publishDate: '2026-02-15T09:00:00Z',
    readTime: 5,
    image: '/images/alquiler-miniexcavadora.webp',
    ogImage: '/images/og-miniexcavadora.webp',
    featured: false,
    relatedEquipment: ['miniexcavadora'],
    relatedArticles: ['que-es-una-miniexcavadora-tipos-y-usos', 'alquiler-vs-compra-maquinaria-construccion'],
    content: defaultContent,
  },
  {
    slug: 'alquiler-vs-compra-maquinaria-construccion',
    title: 'Alquilar o comprar maquinaria de construcción: cuándo conviene cada opción',
    metaTitle: 'Alquilar o comprar maquinaria de construcción: Comparativa',
    metaDescription:
      'Análisis financiero sobre alquilar vs comprar maquinaria de obra. Explicamos ROI, mantenimiento, depreciación y qué opción te conviene más.',
    excerpt:
      'La eterna duda del contratista. Te mostramos cómo calcular el punto de equilibrio teniendo en cuenta el mantenimiento, seguros y la depreciación.',
    category: 'precios-alquiler',
    primaryKeyword: 'alquiler vs compra maquinaria construccion',
    secondaryKeywords: ['renting maquinaria obra', 'ventajas alquiler maquinaria'],
    publishDate: '2026-02-10T14:30:00Z',
    readTime: 8,
    image: '/images/alquiler-retroexcavadora-mixta.webp', // placeholder
    ogImage: '/images/og-retro.webp',
    featured: false,
    relatedEquipment: ['miniexcavadora', 'plataforma-elevadora'],
    relatedArticles: ['precio-alquiler-miniexcavadora-espana-2026', 'cuanto-cuesta-alquilar-plataforma-elevadora'],
    content: defaultContent,
  },
  {
    slug: 'cuanto-cuesta-alquilar-plataforma-elevadora',
    title: 'Cuánto cuesta alquilar una plataforma elevadora en España',
    metaTitle: 'Precio alquiler plataforma elevadora tijera y articulada',
    metaDescription:
      'Guía de precios 2026 para el alquiler de plataformas de personal. Desde tijeras eléctricas pequeñas hasta brazos telescópicos de 40 metros.',
    excerpt:
      'Desglose completo de tarifas diarias y mensuales para plataformas elevadoras de tijera y articuladas. ¿Qué influye más en el precio final?',
    category: 'precios-alquiler',
    primaryKeyword: 'cuanto cuesta alquilar plataforma elevadora',
    secondaryKeywords: ['precio elevador tijera', 'precio alquiler plataforma articulada'],
    publishDate: '2026-02-05T08:00:00Z',
    readTime: 5,
    image: '/images/alquiler-plataforma-tijera-electrica.webp',
    ogImage: '/images/og-plataforma.webp',
    featured: false,
    relatedEquipment: ['plataforma-elevadora'],
    relatedArticles: ['tipos-plataformas-elevadoras-guia-completa', 'alquiler-vs-compra-maquinaria-construccion'],
    content: defaultContent,
  },
  // --- CONSEJOS DE OBRA ---
  {
    slug: 'como-elegir-miniexcavadora-para-obra',
    title: 'Cómo elegir la miniexcavadora correcta para tu obra',
    metaTitle: 'Cómo elegir la miniexcavadora adecuada: 5 claves',
    metaDescription:
      'Profundidad de excavación, peso, alcance y caudal hidráulico. Consejos profesionales para alquilar la miniexcavadora perfecta sin equivocarte.',
    excerpt:
      'Evita sobrecostes alquilando una máquina demasiado grande, o perder horas de trabajo con una demasiado pequeña. Claves para acertar a la primera.',
    category: 'consejos-obra',
    primaryKeyword: 'como elegir miniexcavadora',
    secondaryKeywords: ['profundidad excavacion', 'tonelaje miniexcavadora'],
    publishDate: '2026-01-25T12:00:00Z',
    readTime: 6,
    image: '/images/alquiler-miniexcavadora.webp',
    ogImage: '/images/og-miniexcavadora.webp',
    featured: false,
    relatedEquipment: ['miniexcavadora'],
    relatedArticles: ['que-es-una-miniexcavadora-tipos-y-usos', 'precio-alquiler-miniexcavadora-espana-2026'],
    content: defaultContent,
  },
  {
    slug: 'normativa-maquinaria-construccion-espana',
    title: 'Normativa de maquinaria de construcción en España — lo que debes saber',
    metaTitle: 'Normativa CE maquinaria de construcción España (Ley PRL)',
    metaDescription:
      'Guía legal sobre la documentación, marcado CE, seguros obligatorio y título de operador necesario para manejar maquinaria en obras de España.',
    excerpt:
      'Asegúrate de cumplir con la Ley de Prevención de Riesgos Laborales. ¿Qué documentos te debe entregar el proveedor al alquilar?',
    category: 'consejos-obra',
    primaryKeyword: 'normativa maquinaria construccion espana',
    secondaryKeywords: ['RD 1215/97', 'marcado CE maquinaria', 'carnet operador maquinaria'],
    publishDate: '2026-01-18T10:30:00Z',
    readTime: 7,
    image: '/images/alquiler-dumper-obra.webp',
    ogImage: '/images/og-dumper.webp',
    featured: false,
    relatedEquipment: ['plataforma-elevadora', 'miniexcavadora'],
    relatedArticles: ['seguridad-plataformas-elevadoras-obra'],
    content: defaultContent,
  },
  {
    slug: 'seguridad-plataformas-elevadoras-obra',
    title: 'Seguridad en el uso de plataformas elevadoras en obra',
    metaTitle: 'Seguridad en plataformas elevadoras PEMP: Normas clave',
    metaDescription:
      'Medidas de seguridad esenciales para PEMP: arnés, factor de caída, viento límite y estabilizadores. Evita accidentes mortales en la obra.',
    excerpt:
      'Las caídas en altura son el accidente más grave en el sector. Repasamos el factor de caída seguro, arneses y velocidad de viento permitida.',
    category: 'consejos-obra',
    primaryKeyword: 'seguridad plataformas elevadoras',
    secondaryKeywords: ['arnes seguridad PEMP', 'viento limite plataforma elevadora'],
    publishDate: '2026-01-12T09:45:00Z',
    readTime: 6,
    image: '/images/alquiler-plataforma-tijera-electrica.webp',
    ogImage: '/images/og-plataforma.webp',
    featured: false,
    relatedEquipment: ['plataforma-elevadora'],
    relatedArticles: ['tipos-plataformas-elevadoras-guia-completa', 'normativa-maquinaria-construccion-espana'],
    content: defaultContent,
  },
  // --- MÁLAGA Y ANDALUCÍA ---
  {
    slug: 'alquiler-maquinaria-malaga-guia-2026',
    title: 'Guía de alquiler de maquinaria en Málaga 2026 — precios y proveedores',
    metaTitle: 'Alquiler maquinaria Málaga 2026: Precios y zonas',
    metaDescription:
      'Análisis del mercado de alquiler de maquinaria en la provincia de Málaga y Costa del Sol durante 2026. Tiempos de entrega y zonas de mayor demanda.',
    excerpt:
      'El boom de las reformas en la Costa del Sol presiona los stocks. Conoce cuánto cuesta alquilar y qué plazos de entrega manejan los proveedores locales.',
    category: 'malaga-andalucia',
    primaryKeyword: 'alquiler maquinaria malaga',
    secondaryKeywords: ['empresas alquiler maquinaria costa del sol', 'precio excavadora marbella'],
    publishDate: '2026-01-05T08:00:00Z',
    readTime: 7,
    image: '/images/alquiler-miniexcavadora.webp',
    ogImage: '/images/og-miniexcavadora.webp',
    featured: false,
    relatedEquipment: ['miniexcavadora', 'plataforma-elevadora', 'dumper'],
    relatedArticles: ['precio-alquiler-miniexcavadora-espana-2026', 'cuanto-cuesta-alquilar-plataforma-elevadora'],
    content: defaultContent,
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
}

export function getArticlesByCategory(category?: string): BlogArticle[] {
  if (!category || category === 'todo') {
    return BLOG_ARTICLES.filter((a) => !a.featured);
  }
  return BLOG_ARTICLES.filter((a) => a.category === category && !a.featured);
}

export function getRelatedArticles(slugs: string[]): BlogArticle[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean) as BlogArticle[];
}
