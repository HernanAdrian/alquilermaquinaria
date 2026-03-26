export interface CityZone {
  name: string;
  slug: string;
  supplierCount: number;
  available: boolean;
  transportCost?: string;
}

export interface CityData {
  id: string;
  name: string;
  slug: string;
  province: string;
  region: string;
  supplierCount: number;
  monthlyRentals: number;
  rating: number;
  responseTime: string;
  status: 'active' | 'coming';
  description: string;
  zones: CityZone[];
  popularEquipment: string[];
  nearbyCity: string[];
}

export const CITIES: CityData[] = [
  {
    id: 'malaga',
    name: 'Málaga',
    slug: 'malaga',
    province: 'Málaga',
    region: 'Andalucía',
    supplierCount: 47,
    monthlyRentals: 127,
    rating: 4.9,
    responseTime: '< 2h',
    status: 'active',
    description:
      'Málaga es una de las provincias con mayor actividad constructora de España, con más de 9.000 viviendas visadas en 2025 y proyectos activos en toda la Costa del Sol. La demanda de maquinaria de alquiler en Málaga es constante durante los 12 meses del año, con picos en primavera y verano coincidiendo con la temporada de obra en zonas turísticas.',
    zones: [
      { name: 'Málaga capital', slug: 'malaga-capital', supplierCount: 3, available: true },
      { name: 'Marbella', slug: 'marbella', supplierCount: 2, available: true },
      { name: 'Torremolinos', slug: 'torremolinos', supplierCount: 2, available: true },
      { name: 'Mijas', slug: 'mijas', supplierCount: 1, available: true },
      { name: 'Fuengirola', slug: 'fuengirola', supplierCount: 2, available: true },
      { name: 'Nerja', slug: 'nerja', supplierCount: 1, available: true, transportCost: '80–120€' },
      { name: 'Ronda', slug: 'ronda', supplierCount: 1, available: true, transportCost: '120–180€' },
      { name: 'Axarquía', slug: 'axarquia', supplierCount: 1, available: true, transportCost: '60–100€' },
    ],
    popularEquipment: [
      'miniexcavadora',
      'plataforma-elevadora',
      'dumper',
      'grupo-electrogeno',
      'retroexcavadora',
      'bandeja-vibrante',
      'minicargadora',
      'hormigonera',
      'compresor',
      'bomba-agua',
    ],
    nearbyCity: ['sevilla', 'granada', 'almeria', 'cordoba', 'jaen'],
  },
  {
    id: 'marbella',
    name: 'Marbella',
    slug: 'marbella',
    province: 'Málaga',
    region: 'Andalucía',
    supplierCount: 18,
    monthlyRentals: 54,
    rating: 4.8,
    responseTime: '< 3h',
    status: 'active',
    description: 'Marbella concentra gran parte de la obra de lujo y turística de la Costa del Sol.',
    zones: [],
    popularEquipment: ['miniexcavadora', 'plataforma-elevadora', 'dumper'],
    nearbyCity: ['malaga'],
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    slug: 'sevilla',
    province: 'Sevilla',
    region: 'Andalucía',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: ['malaga', 'cordoba'],
  },
  {
    id: 'granada',
    name: 'Granada',
    slug: 'granada',
    province: 'Granada',
    region: 'Andalucía',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: ['malaga', 'almeria'],
  },
  {
    id: 'madrid',
    name: 'Madrid',
    slug: 'madrid',
    province: 'Madrid',
    region: 'Comunidad de Madrid',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: [],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    slug: 'barcelona',
    province: 'Barcelona',
    region: 'Cataluña',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: [],
  },
  {
    id: 'valencia',
    name: 'Valencia',
    slug: 'valencia',
    province: 'Valencia',
    region: 'Comunidad Valenciana',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: [],
  },
  {
    id: 'almeria',
    name: 'Almería',
    slug: 'almeria',
    province: 'Almería',
    region: 'Andalucía',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: ['malaga', 'granada'],
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    slug: 'cordoba',
    province: 'Córdoba',
    region: 'Andalucía',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: ['sevilla', 'malaga'],
  },
  {
    id: 'jaen',
    name: 'Jaén',
    slug: 'jaen',
    province: 'Jaén',
    region: 'Andalucía',
    supplierCount: 0,
    monthlyRentals: 0,
    rating: 0,
    responseTime: '-',
    status: 'coming',
    description: '',
    zones: [],
    popularEquipment: [],
    nearbyCity: ['granada', 'cordoba'],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getCityName(slug: string): string {
  return getCityBySlug(slug)?.name ?? slug;
}
