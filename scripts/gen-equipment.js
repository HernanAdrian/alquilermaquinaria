const fs = require('fs');

const categories = [
  { name: 'Movimiento de tierras', items: ['miniexcavadora', 'excavadora de cadenas', 'retroexcavadora mixta', 'minicargadora', 'pala cargadora', 'dumper', 'cañón nebulizador'] },
  { name: 'Plataformas elevadoras', items: ['tijera eléctrica', 'articulada eléctrica', 'articulada diesel', 'telescópica', 'mástil vertical', 'unipersonal', 'sobre camión'] },
  { name: 'Manipulación de cargas', items: ['manipulador telescópico', 'carretilla elevadora industrial', 'carretilla 4x4 obra', 'apilador eléctrico', 'transpaleta eléctrica', 'maquinillo', 'grúa hidráulica'] },
  { name: 'Energía y climatización', items: ['grupo electrógeno', 'torre de iluminación LED', 'soldadora', 'cañón de calor', 'deshumidificador', 'ventilador industrial'] },
  { name: 'Aire comprimido', items: ['compresor portátil', 'compresor de tornillo remolcable', 'martillo neumático', 'herramientas neumáticas'] },
  { name: 'Compactación', items: ['bandeja vibrante', 'pisón compactador', 'rodillo tándem', 'rodillo vibrante de suelo'] },
  { name: 'Maquinaria de hormigón', items: ['hormigonera', 'vibrador de hormigón', 'regla vibrante', 'fratasadora', 'bomba de hormigón'] },
  { name: 'Corte y perforación', items: ['tronzadora', 'cortadora de pavimento', 'perforadora de hormigón', 'cortadora de azulejo', 'amoladora', 'sierra de calar', 'sierra circular', 'fresadora de madera', 'ranurador'] },
  { name: 'Herramientas eléctricas', items: ['martillo picador', 'taladro percutor', 'atornillador', 'lijadora orbital', 'lijadora cuello largo', 'llave de impacto', 'nivel láser'] },
  { name: 'Bombas de agua', items: ['bomba de achique', 'bomba a gasolina', 'bomba neumática', 'bomba aguas sucias', 'depósito 1000L'] },
  { name: 'Limpieza industrial', items: ['hidrolimpiadora agua fría', 'hidrolimpiadora agua caliente', 'fregasuelos industrial', 'barredora industrial', 'aspirador industrial'] },
  { name: 'Pintura y tratamiento', items: ['pistola airless', 'equipo de proyección', 'batidora de pintura'] },
  { name: 'Jardinería', items: ['motosierra', 'desbrozadora', 'cortasetos', 'soplador', 'triturador de ramas'] },
  { name: 'Andamios y altura', items: ['andamio aluminio', 'andamio tubular fachada', 'escalera de obra', 'borriqueta'] },
  { name: 'Medios auxiliares', items: ['valla de obra', 'barrera New Jersey', 'señalización vial', 'contenedor escombros', 'contenedor marítimo'] },
  { name: 'Módulos prefabricados', items: ['caseta de obra', 'módulo vestuario', 'WC portátil', 'módulo sanitario', 'garita de vigilancia'] }
];

const altMapping = {
  'miniexcavadora': 'Miniexcavadora compacta trabajando en obra urbana en Málaga',
  'excavadora-de-cadenas': 'Excavadora de cadenas para alquiler en obras civiles e infraestructuras',
  'retroexcavadora-mixta': 'Retroexcavadora mixta JCB de alquiler para obras de construcción',
  'minicargadora': 'Minicargadora compacta de alquiler para construcción y movimiento de tierras',
  'pala-cargadora': 'Pala cargadora de alquiler para grandes movimientos de tierra y obra pública',
  'dumper': 'Dumper de obra articulado de alquiler para transporte de materiales',
  'canon-nebulizador': 'Cañón nebulizador de alquiler para control de polvo en demoliciones y obras',
  'tijera-electrica': 'Plataforma elevadora de tijera eléctrica de alquiler para trabajos en altura',
  'articulada-electrica': 'Plataforma articulada eléctrica de alquiler para obras en interiores',
  'articulada-diesel': 'Plataforma articulada diesel de alquiler para exteriores y todo terreno',
  'telescopica': 'Plataforma telescópica de alquiler para trabajos en grandes alturas',
  'mastil-vertical': 'Plataforma de mástil vertical de alquiler para interiores y pasillos estrechos',
  'unipersonal': 'Plataforma elevadora unipersonal de alquiler para trabajos puntuales en altura',
  'sobre-camion': 'Camión cesta de alquiler para trabajos en altura en fachadas and calles',
  'manipulador-telescopico': 'Manipulador telescópico telehandler de alquiler para obra nueva and estructuras',
  'carretilla-elevadora-industrial': 'Carretilla elevadora eléctrica de alquiler para almacén e industria',
  'carretilla-4x4-obra': 'Carretilla elevadora 4x4 todo terreno de alquiler para obras exteriores',
  'apilador-electrico': 'Apilador eléctrico de alquiler para almacenes y logística industrial',
  'transpaleta-electrica': 'Transpaleta eléctrica de alquiler para movimiento de palés en almacén',
  'maquinillo': 'Maquinillo eléctrico de ventana de alquiler para subida de materiales en obra',
  'grua-hidraulica': 'Grúa hidráulica móvil de alquiler para elevación de grandes cargas en obra',
  'grupo-electrogeno': 'Grupo electrógeno diesel de alquiler para suministro eléctrico en obras',
  'torre-iluminacion-led': 'Torre de iluminación LED de alquiler para obras nocturnas y eventos',
  'soldadora': 'Soldadora eléctrica de alquiler para trabajos de metal en construcción',
  'canon-de-calor': 'Cañón de calor industrial de alquiler para calefacción de obras en invierno',
  'deshumidificador': 'Deshumidificador industrial de alquiler para secado de obras y reformas',
  'ventilador-industrial': 'Ventilador industrial de alquiler para ventilación de obras and naves',
  'compresor-portatil': 'Compresor de aire portátil de alquiler para herramientas neumáticas en obra',
  'compresor-de-tornillo-remolcable': 'Compresor de tornillo remolcable de alquiler para obra civil e infraestructuras',
  'martillo-neumatico': 'Martillo neumático de alquiler para demolición and rotura de pavimentos',
  'herramientas-neumaticas': 'Herramientas neumáticas de alquiler para taller y obra profesional',
  'bandeja-vibrante': 'Bandeja vibrante compactadora de alquiler para compactación de suelos en obra',
  'pison-compactador': 'Pisón compactador de alquiler para zanjas and suelos en obras de construcción',
  'rodillo-tandem': 'Rodillo compactador tándem de alquiler para compactación de asfalto',
  'rodillo-vibrante-de-suelo': 'Rodillo vibrante de suelo de alquiler para obra civil and compactación de tierras',
  'hormigonera': 'Hormigonera eléctrica portátil de alquiler para mezcla de hormigón en obra',
  'vibrador-de-hormigon': 'Vibrador de hormigón eléctrico de alquiler para consolidación de estructuras',
  'regla-vibrante': 'Regla vibrante de alquiler para nivelación de soleras and losas de hormigón',
  'fratasadora': 'Fratasadora de hormigón de alquiler para acabado de pavimentos industriales',
  'bomba-de-hormigon': 'Bomba de hormigón de alquiler para bombeo en obras de gran altura y volumen',
  'tronzadora': 'Tronzadora de materiales de alquiler para corte de metal en obra',
  'cortadora-de-pavimento': 'Cortadora de pavimento de alquiler para corte de hormigón and asfalto',
  'perforadora-de-hormigon': 'Perforadora de hormigón de alquiler para instalaciones and pasatubos en obra',
  'cortadora-de-azulejo': 'Cortadora de azulejo eléctrica de alquiler para reformas and alicatados',
  'amoladora': 'Amoladora radial eléctrica de alquiler para corte and desbaste en construcción',
  'sierra-de-calar': 'Sierra de calar eléctrica de alquiler para corte de madera en obras',
  'sierra-circular': 'Sierra circular eléctrica de alquiler para corte de madera en construcción',
  'fresadora-de-madera': 'Fresadora de madera de alquiler para carpintería fina en obras and reformas',
  'ranurador': 'Ranurador de hormigón de alquiler para instalaciones empotradas en paredes',
  'martillo-picador': 'Martillo picador demoledor eléctrico de alquiler para demolición en obras',
  'taladro-percutor': 'Taladro percutor eléctrico de alquiler para perforación in obra and reformas',
  'atornillador': 'Atornillador a batería de alquiler para montaje and reformas en construcción',
  'lijadora-orbital': 'Lijadora orbital eléctrica de alquiler para acabados en madera and reformas',
  'lijadora-cuello-largo': 'Lijadora de cuello largo de alquiler para paredes and techos en reformas',
  'llave-de-impacto': 'Llave de impacto eléctrica de alquiler para montaje and desmontaje en obra',
  'nivel-laser': 'Nivel láser de alquiler para nivelación and alineación profesional en obra',
  'bomba-de-achique': 'Bomba de achique sumergible de alquiler para desagüe de excavaciones en obra',
  'bomba-a-gasolina': 'Bomba de agua a gasolina de alquiler para obras sin suministro eléctrico',
  'bomba-neumatica': 'Bomba neumática de alquiler para trasvase de líquidos en obras e industria',
  'bomba-aguas-sucias': 'Bomba de aguas sucias de alquiler para saneamiento and drenaje en obras',
  'deposito-1000l': 'Depósito de agua de 1000 litros de alquiler para obras sin suministro fijo',
  'hidrolimpiadora-agua-fria': 'Hidrolimpiadora de agua fría de alquiler para limpieza de obras and superficies',
  'hidrolimpiadora-agua-caliente': 'Hidrolimpiadora de agua caliente de alquiler para desengrase and limpieza'
};

const slugify = (str) => {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const allSlugs = categories.flatMap(c => c.items.map(i => slugify(i)));

const generateItems = () => {
  let items = [];
  categories.forEach((cat) => {
    cat.items.forEach((item) => {
      const slug = slugify(item);
      const name = item.charAt(0).toUpperCase() + item.slice(1);
      const minPrice = Math.floor(Math.random() * 80) + 20;
      const supplierCount = Math.floor(Math.random() * 13) + 3;
      
      const relatedSlugs = allSlugs.filter(s => s !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);
      
      let filename = "alquiler-" + slug + ".webp";
      
      if (['tijera-electrica', 'articulada-electrica', 'articulada-diesel', 'telescopica', 'mastil-vertical', 'unipersonal'].includes(slug)) {
        filename = "alquiler-plataforma-" + slug + ".webp";
      }
      
      if (slug === 'excavadora-de-cadenas') filename = 'alquiler-excavadora-cadenas.webp';
      if (slug === 'dumper') filename = 'alquiler-dumper-obra.webp';
      if (slug === 'carretilla-elevadora-industrial') filename = 'alquiler-carretilla-elevadora.webp';
      if (slug === 'carretilla-4x4-obra') filename = 'alquiler-carretilla-elevadora-4x4.webp';
      if (slug === 'maquinillo') filename = 'alquiler-maquinillo-ventana.webp';
      if (slug === 'grua-hidraulica') filename = 'alquiler-grua-hidraulica-movil.webp';
      if (slug === 'torre-de-iluminacion-led') filename = 'alquiler-torre-iluminacion-led.webp';
      if (slug === 'soldadora') filename = 'alquiler-soldadora-electrica.webp';
      if (slug === 'canon-de-calor') filename = 'alquiler-canon-de-calor.webp';
      if (slug === 'deshumidificador') filename = 'alquiler-deshumidificador-industrial.webp';
      if (slug === 'ventilador-industrial') filename = 'alquiler-ventilador-industrial.webp';
      if (slug === 'compresor-portatil') filename = 'alquiler-compresor-de-aire.webp';
      if (slug === 'compresor-de-tornillo-remolcable') filename = 'alquiler-compresor-tornillo-remolcable.webp';
      if (slug === 'rodillo-tandem') filename = 'alquiler-rodillo-compactador-tandem.webp';
      if (slug === 'rodillo-vibrante-de-suelo') filename = 'alquiler-rodillo-vibrante-suelo.webp';
      if (slug === 'vibrador-de-hormigon') filename = 'alquiler-vibrador-de-hormigon.webp';
      if (slug === 'regla-vibrante') filename = 'alquiler-regla-vibrante-hormigon.webp';
      if (slug === 'fratasadora') filename = 'alquiler-fratasadora-hormigon.webp';
      if (slug === 'amoladora') filename = 'alquiler-amoladora-radial.webp';
      if (slug === 'tronzadora') filename = 'alquiler-tronzadora-materiales.webp';
      if (slug === 'ranurador') filename = 'alquiler-ranurador-hormigon.webp';
      if (slug === 'atornillador') filename = 'alquiler-atornillador-bateria.webp';
      if (slug === 'martillo-picador') filename = 'alquiler-martillo-picador-demoledor.webp';
      if (slug === 'bomba-a-gasolina') filename = 'alquiler-bomba-agua-gasolina.webp';
      if (slug === 'deposito-1000l') filename = 'alquiler-deposito-agua-1000l.webp';
      if (slug === 'hormigonera') filename = 'alquiler-hormigonera-electrica.webp';
      if (slug === 'andamio-aluminio') filename = 'alquiler-andamio-aluminio-ruedas.webp';
      if (slug === 'pistola-airless') filename = 'alquiler-pistola-pintura-airless.webp';
      if (slug === 'equipo-de-proyeccion') filename = 'alquiler-equipo-proyeccion-mortero.webp';
      if (slug === 'batidora-de-pintura') filename = 'alquiler-batidora-pintura-mortero.webp';
      if (slug === 'motosierra') filename = 'alquiler-motosierra-gasolina.webp';
      if (slug === 'soplador') filename = 'alquiler-soplador-hojas.webp';
      if (slug === 'valla-de-obra') filename = 'alquiler-valla-de-obra-metalica.webp';
      if (slug === 'barrera-new-jersey') filename = 'alquiler-barrera-new-jersey.webp';
      if (slug === 'senalizacion-vial') filename = 'alquiler-senalizacion-vial-obra.webp';
      if (slug === 'contenedor-maritimo') filename = 'alquiler-contenedor-maritimo-almacenaje.webp';
      if (slug === 'caseta-de-obra') filename = 'alquiler-caseta-de-obra-oficina.webp';
      if (slug === 'modulo-vestuario') filename = 'alquiler-modulo-vestuario-obra.webp';
      if (slug === 'wc-portatil') filename = 'alquiler-wc-portatil-obra.webp';
      if (slug === 'modulo-sanitario') filename = 'alquiler-modulo-sanitario.webp';
      if (slug === 'borriqueta') filename = 'alquiler-borriqueta-caballetes.webp';
      if (slug === 'sobre-camion') filename = 'alquiler-camion-cesta-plataforma.webp';

      const alt = altMapping[slug] || ("Alquiler de " + item.toLowerCase() + " al mejor precio.");

      items.push({
        id: slug,
        name: name,
        slug: slug,
        minPrice: minPrice,
        supplierCount: supplierCount,
        description: "Alquila " + item.toLowerCase() + " al mejor precio. Proveedores verificados.",
        image: "/images/" + filename,
        imageAlt: alt,
        ogImage: "/images/og-default.webp",
        ogImageAlt: "Plataforma de alquiler de " + item.toLowerCase() + " en España",
        types: [
          { label: 'Estándar', useCase: 'Uso general', priceDay: minPrice + "€ - " + (minPrice + 10) + "€", default: true },
          { label: 'Profesional', useCase: 'Alto rendimiento', priceDay: Math.floor(minPrice * 1.5) + "€ - " + Math.floor(minPrice * 1.8) + "€" },
        ],
        pricingTable: [
          { model: 'Gama básica', day: minPrice + "€ - " + (minPrice + 10) + "€", week: (minPrice * 4) + "€ - " + (minPrice * 5) + "€", month: (minPrice * 12) + "€ - " + (minPrice * 15) + "€" },
          { model: 'Gama alta', day: Math.floor(minPrice * 1.5) + "€ - " + Math.floor(minPrice * 1.8) + "€", week: Math.floor(minPrice * 6) + "€ - " + Math.floor(minPrice * 7) + "€", month: Math.floor(minPrice * 18) + "€ - " + Math.floor(minPrice * 22) + "€" },
        ],
        relatedEquipment: relatedSlugs,
        faqKey: slug
      });
    });
  });
  return items;
};

const equipmentData = generateItems();

const fileContent = "export interface EquipmentCategory {\n" +
"  id: string;\n" +
"  name: string;\n" +
"  slug: string;\n" +
"  minPrice: number;\n" +
"  supplierCount: number;\n" +
"  description: string;\n" +
"  image: string;\n" +
"  imageAlt: string;\n" +
"  ogImage: string;\n" +
"  ogImageAlt: string;\n" +
"  types: { label: string; useCase: string; priceDay: string; default?: boolean }[];\n" +
"  pricingTable: { model: string; day: string; week: string; month: string }[];\n" +
"  relatedEquipment: string[];\n" +
"  faqKey: string;\n" +
"}\n\n" +
"export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = " + JSON.stringify(equipmentData, null, 2) + ";\n\n" +
"export interface FeaturedListing {\n" +
"  id: number;\n" +
"  name: string;\n" +
"  specs: string;\n" +
"  priceDay: number;\n" +
"  priceWeek: number;\n" +
"  location: string;\n" +
"  badge: 'available' | 'high-demand' | 'unavailable' | 'consult';\n" +
"  image: string;\n" +
"  imageAlt: string;\n" +
"  slug: string;\n" +
"  city: string;\n" +
"  rating: number;\n" +
"  rentals: number;\n" +
"}\n\n" +
"export const FEATURED_LISTINGS: FeaturedListing[] = [\n" +
"  {\n" +
"    id: 1,\n" +
"    name: 'Miniexcavadora 2–4T',\n" +
"    specs: '3T · Diesel · 2022',\n" +
"    priceDay: 140,\n" +
"    priceWeek: 650,\n" +
"    location: 'Málaga capital',\n" +
"    badge: 'available',\n" +
"    image: '/images/alquiler-miniexcavadora.webp',\n" +
"    imageAlt: 'Miniexcavadora compacta trabajando en obra urbana en Málaga',\n" +
"    slug: 'miniexcavadora',\n" +
"    city: 'malaga',\n" +
"    rating: 4.9,\n" +
"    rentals: 47,\n" +
"  },\n" +
"  {\n" +
"    id: 2,\n" +
"    name: 'Plataforma tijera eléctrica 12m',\n" +
"    specs: '12m · Eléctrica · 2023',\n" +
"    priceDay: 120,\n" +
"    priceWeek: 550,\n" +
"    location: 'Málaga capital',\n" +
"    badge: 'high-demand',\n" +
"    image: '/images/alquiler-plataforma-tijera-electrica.webp',\n" +
"    imageAlt: 'Plataforma elevadora de tijera eléctrica de alquiler para trabajos en altura',\n" +
"    slug: 'tijera-electrica',\n" +
"    city: 'malaga',\n" +
"    rating: 4.8,\n" +
"    rentals: 31,\n" +
"  },\n" +
"  {\n" +
"    id: 3,\n" +
"    name: 'Dumper descarga frontal 1.5T',\n" +
"    specs: '1.5T · Gasolina · 2021',\n" +
"    priceDay: 85,\n" +
"    priceWeek: 390,\n" +
"    location: 'Torremolinos',\n" +
"    badge: 'available',\n" +
"    image: '/images/alquiler-dumper-obra.webp',\n" +
"    imageAlt: 'Dumper de obra articulado de alquiler para transporte de materiales',\n" +
"    slug: 'dumper',\n" +
"    city: 'malaga',\n" +
"    rating: 4.7,\n" +
"    rentals: 23,\n" +
"  },\n" +
"];\n\n" +
"export function getEquipmentBySlug(slug: string): EquipmentCategory | undefined {\n" +
"  return EQUIPMENT_CATEGORIES.find((e) => e.slug === slug);\n" +
"}\n";

fs.writeFileSync('/Users/hernanadrian/Desktop/IDEAS NEGOCIOS/ALQUILER-MAQUINARIA/alquiler-maquinaria/src/lib/data/equipment.ts', fileContent);
console.log('Successfully updated equipment.ts with final mappings.');
