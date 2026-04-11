import { CITIES } from './cities';

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    icon: 'Search',
    title: 'Busca y compara',
    body: 'Encuentra la máquina que necesitas. Filtra por ciudad, tipo y precio. Ve disponibilidad real de todos los proveedores de Málaga en un solo lugar.',
  },
  {
    number: '02',
    icon: 'ClipboardCheck',
    title: 'Solicita sin compromiso',
    body: 'Rellena el formulario en menos de 2 minutos. Te confirmamos disponibilidad y precio exacto en menos de 2 horas. Sin pago por adelantado.',
  },
  {
    number: '03',
    icon: 'Truck',
    title: 'Recibe en obra',
    body: 'Coordinamos la entrega directamente con el proveedor. Tú solo te preocupas de la obra. Factura directa, sin sorpresas.',
  },
];

export const TESTIMONIALS = [
  {
    initials: 'JM',
    name: 'José Martínez',
    role: 'Jefe de obra · Constructora Sur',
    quote: '"Solicité una miniexcavadora a las 9 de la mañana y la tenía en obra a las 11. Increíble."',
  },
  {
    initials: 'AP',
    name: 'Ana Pérez',
    role: 'Encargada de compras · Reformas Costa',
    quote: '"Por fin un sitio donde comparar precios sin llamar a cinco empresas diferentes."',
  },
  {
    initials: 'CR',
    name: 'Carlos Ruiz',
    role: 'Autónomo · Málaga',
    quote: '"Llevo tres obras seguidas alquilando aquí. El proceso es muy sencillo y el precio justo."',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<string, Record<string, FAQItem[]>> = {
  miniexcavadora: {
    malaga: [
      {
        question: '¿Cuánto cuesta alquilar una miniexcavadora en Málaga?',
        answer: 'El precio de alquiler de una miniexcavadora en Málaga oscila entre 95€ y 220€ por día según el tonelaje del modelo. Por semana, el coste está entre 450€ y 950€. El transporte y entrega se presupuesta aparte según la distancia a la obra. Los precios incluyen IVA.',
      },
      {
        question: '¿Con cuánta antelación debo reservar la miniexcavadora?',
        answer: 'La mayoría de proveedores en Málaga tienen disponibilidad en 24 a 48 horas. En temporada alta —primavera y verano— recomendamos solicitar con al menos 3 a 5 días de antelación, especialmente para modelos grandes o si necesitas operario incluido.',
      },
      {
        question: '¿Necesito carnet especial para operar una miniexcavadora en España?',
        answer: 'En España no existe un carnet específico obligatorio para operar miniexcavadoras de menos de 6 toneladas en obra privada. Sin embargo, la normativa de prevención de riesgos laborales exige que el operador tenga formación específica acreditada. Si necesitas operario incluido, indícalo al solicitar.',
      },
      {
        question: '¿Hacen entrega en Marbella, Mijas y la Costa del Sol?',
        answer: 'Sí. Nuestros proveedores cubren toda la provincia de Málaga, incluyendo Marbella, Mijas, Fuengirola, Torremolinos, Nerja, Ronda y la Axarquía. El coste de transporte varía según la distancia desde el almacén del proveedor hasta tu obra.',
      },
      {
        question: '¿Puedo alquilar la miniexcavadora con o sin operario?',
        answer: 'Sí, ofrecemos las dos modalidades. El alquiler sin operario (solo la máquina) es más económico y es la opción preferida cuando la empresa ya tiene personal formado. El alquiler con operario incluye un conductor cualificado con toda la documentación de PRL en regla. Indícalo en el formulario.',
      },
      {
        question: '¿Qué incluye el precio del alquiler de la miniexcavadora?',
        answer: 'El precio base incluye la máquina en perfecto estado de funcionamiento, el seguro básico de responsabilidad civil, y asistencia técnica en caso de avería. El transporte (carga, descarga y entrega en obra), el combustible y el operario se presupuestan aparte si los necesitas.',
      },
    ],
  },
};

Object.keys(FAQ_DATA).forEach(equipSlug => {
  CITIES.forEach(city => {
    if (city.status === 'active' && !FAQ_DATA[equipSlug][city.slug]) {
      FAQ_DATA[equipSlug][city.slug] = FAQ_DATA[equipSlug].malaga.map(q => ({
        question: q.question.replace(/Málaga/g, city.name),
        answer: q.answer.replace(/Málaga/g, city.name)
      }));
    }
  });
});

export interface UseCaseSection {
  title: string;
  body: string;
}

export const USE_CASES: Record<string, Record<string, UseCaseSection[]>> = {
  miniexcavadora: {
    malaga: [
      {
        title: 'Alquiler de miniexcavadora para reforma y jardín en Málaga',
        body: 'Para trabajos de reforma, acondicionamiento de jardines y espacios reducidos en Málaga, los modelos de 1 a 2 toneladas son los más solicitados. Su tamaño compacto les permite acceder por puertas estándar y trabajar en patios y zonas urbanas del centro de Málaga sin dificultad. Son ideales para apertura de zanjas, movimiento de tierra y demolición menor. Disponibles con entrega en Málaga capital y toda la Costa del Sol en menos de 24 horas.',
      },
      {
        title: 'Alquiler de miniexcavadora para obra nueva en Málaga',
        body: 'Para cimentaciones, apertura de zanjas de instalaciones y movimiento de tierras en solar, los modelos de 2 a 4 toneladas ofrecen el equilibrio perfecto entre potencia y maniobrabilidad en parcelas urbanas de Málaga. Son la opción más alquilada por constructoras y promotoras activas en la nueva construcción residencial del área metropolitana de Málaga y la Costa del Sol.',
      },
      {
        title: 'Alquiler de miniexcavadora con operario en Málaga',
        body: 'Si tu obra requiere la máquina con conductor cualificado, varios de nuestros proveedores en Málaga ofrecen el servicio completo de alquiler con operario. El operario viene homologado, con toda la documentación de prevención de riesgos en regla. Indica en el formulario que necesitas operario y te presupuestamos sin compromiso.',
      },
    ],
  },
};

Object.keys(USE_CASES).forEach(equipSlug => {
  CITIES.forEach(city => {
    if (city.status === 'active' && !USE_CASES[equipSlug][city.slug]) {
      USE_CASES[equipSlug][city.slug] = USE_CASES[equipSlug].malaga.map(q => ({
         title: q.title.replace(/Málaga/g, city.name),
         body: q.body.replace(/Málaga/g, city.name)
      }));
    }
  });
});

export const PRICE_TABLE_INTROS: Record<string, Record<string, string>> = {
  miniexcavadora: {
    malaga: 'El precio de alquiler de una miniexcavadora en Málaga depende fundamentalmente del tonelaje del modelo y la duración del alquiler. Los modelos más compactos (1–2 toneladas) son ideales para reformas y jardines, mientras que los de mayor tonelaje (4–6T) se solicitan para excavaciones de cimentación y obra civil. Los precios que te mostramos son orientativos e incluyen IVA. El coste final puede variar según disponibilidad, temporada y transporte a tu obra en la provincia de Málaga.',
  },
};

Object.keys(PRICE_TABLE_INTROS).forEach(equipSlug => {
  CITIES.forEach(city => {
    if (city.status === 'active' && !PRICE_TABLE_INTROS[equipSlug][city.slug]) {
      PRICE_TABLE_INTROS[equipSlug][city.slug] = PRICE_TABLE_INTROS[equipSlug].malaga.replace(/Málaga/g, city.name);
    }
  });
});

// --- SUPPLIER PAGE DATA ---

export const SUPPLIER_PAIN_POINTS = [
  {
    icon: 'PackageOpen' as const,
    title: 'Maquinaria parada sin alquilar',
    body: 'Tienes máquinas en el almacén días o semanas sin mover. Cada día parado es dinero perdido.',
  },
  {
    icon: 'Phone' as const,
    title: 'Solo llegan clientes del boca a boca',
    body: 'Dependes de que te llamen los de siempre. No tienes forma de llegar a nuevas obras en Málaga.',
  },
  {
    icon: 'Clock' as const,
    title: 'Gestión manual que consume tiempo',
    body: 'Llamadas, WhatsApps, Excel. Demasiado tiempo en gestión y poco tiempo para lo que importa.',
  },
];

export const SUPPLIER_BENEFITS = [
  {
    icon: 'TrendingUp' as const,
    title: 'Más alquileres, sin esfuerzo comercial',
    body: 'Recibe solicitudes de obras activas en Málaga directamente en tu móvil. Tú decides si aceptas o no. Sin vendedores, sin llamadas frías.',
  },
  {
    icon: 'Euro' as const,
    title: 'Sin comisión fija ni cuota mensual',
    body: 'Solo pagas cuando alquilas a través de la plataforma. Si un mes no recibes pedidos, no pagas nada. Sin riesgo.',
  },
  {
    icon: 'Smartphone' as const,
    title: 'Gestión completa desde el móvil',
    body: 'Actualiza tu disponibilidad, acepta solicitudes y contacta clientes desde cualquier lugar. Sin ordenador, sin complicaciones.',
  },
  {
    icon: 'Shield' as const,
    title: 'Tú decides siempre',
    body: 'Sin exclusividad. Puedes seguir alquilando a tus clientes directos como siempre. La plataforma es un canal más, no el único.',
  },
  {
    icon: 'Users' as const,
    title: 'Clientes que ya saben lo que quieren',
    body: 'Las solicitudes que recibes vienen de obras reales con una necesidad concreta. No son curiosos — son clientes listos para alquilar.',
  },
  {
    icon: 'BarChart3' as const,
    title: 'Visibilidad online que no tenías',
    body: 'Tu maquinaria aparece en búsquedas de Google de clientes en Málaga. Sin necesidad de tener web ni invertir en publicidad.',
  },
];

export const SUPPLIER_HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Regístrate gratis en 5 minutos',
    body: 'Rellena el formulario con los datos de tu empresa y el tipo de maquinaria que tienes disponible. Sin papeleo. Sin visita comercial.',
    detail: 'Nombre de empresa · Tipo de flota · Zona de cobertura · Teléfono',
  },
  {
    number: '02',
    title: 'Publicamos tu maquinaria en la plataforma',
    body: 'Nuestro equipo sube las fichas de tu maquinaria con fotos, especificaciones y precios orientativos. Tú revisas y apruebas antes de publicar.',
    detail: 'Lo hacemos nosotros · Tarda menos de 48 horas',
  },
  {
    number: '03',
    title: 'Recibes solicitudes de obras en Málaga',
    body: 'Cuando un cliente solicita tu tipo de maquinaria en tu zona, te avisamos inmediatamente por WhatsApp y email con todos los detalles de la obra.',
    detail: 'Notificación instantánea · Datos completos del pedido',
  },
  {
    number: '04',
    title: 'Tú decides si aceptas',
    body: 'Revisas la solicitud, confirmas disponibilidad y precio, y contactas al cliente. Solo pagas comisión si el alquiler se cierra.',
    detail: 'Sin obligación de aceptar · Comisión solo si alquilas',
  },
];

export const SUPPLIER_TESTIMONIALS = [
  {
    initials: 'MG',
    name: 'Manuel García',
    company: 'Alquileres García · Málaga',
    fleet: 'Miniexcavadoras y dumpers',
    quote: '"Llevo 6 meses y ya tengo 3 clientes nuevos que no conocía. La maquinaria que antes estaba parada los lunes ahora casi siempre sale."',
  },
  {
    initials: 'PR',
    name: 'Pedro Ruiz',
    company: 'Maquinaria Ruiz · Torremolinos',
    fleet: 'Plataformas elevadoras',
    quote: '"Me daba miedo perder el control de mis precios. Pero no — yo pongo el precio final y decido si acepto cada pedido. Muy bien."',
  },
  {
    initials: 'AL',
    name: 'Antonio López',
    company: 'Alquimaq · Marbella',
    fleet: 'Maquinaria general de obra',
    quote: '"El registro fue muy fácil. Me llamaron, subieron las fotos ellos mismos, y en dos días ya tenía la primera solicitud. Sin complicaciones."',
  },
];

export const SUPPLIER_FAQ: FAQItem[] = [
  {
    question: '¿Cuánto cuesta registrarme como proveedor?',
    answer: 'El registro es completamente gratuito. No hay cuota mensual ni coste de alta. Solo pagas una comisión cuando cierras un alquiler a través de la plataforma. Si un mes no recibes pedidos o no aceptas ninguno, no pagas nada.',
  },
  {
    question: '¿Tengo que ser exclusivo de vuestra plataforma?',
    answer: 'No. Puedes seguir alquilando a tus clientes directos como siempre. La plataforma es un canal adicional, no un contrato de exclusividad. Tú mantienes el control total de tu negocio.',
  },
  {
    question: '¿Quién habla con el cliente final?',
    answer: 'Cuando recibes una solicitud, tú contactas directamente con el cliente para confirmar disponibilidad, precio exacto y condiciones de entrega. Nosotros te pasamos el lead cualificado, tú cierras el trato.',
  },
  {
    question: '¿Qué tipo de maquinaria puedo publicar?',
    answer: 'Toda la maquinaria de construcción y obra: miniexcavadoras, retroexcavadoras, dumpers, plataformas elevadoras, compactadoras, grupos electrógenos, hormigoneras, compresores, bombas de agua y más. Si tienes dudas sobre algún equipo específico, consúltanos.',
  },
  {
    question: '¿Cómo suben las fotos y fichas de mi maquinaria?',
    answer: 'Nuestro equipo se encarga de crear las fichas de producto. Solo necesitas enviarnos fotos de tus máquinas y los datos básicos (modelo, año, especificaciones). Lo publicamos nosotros en menos de 48 horas.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer: 'Sí. No hay permanencia ni contrato a largo plazo. Si en algún momento decides salir de la plataforma, nos lo comunicas y desactivamos tu perfil sin coste ni penalización.',
  },
  {
    question: '¿En qué zonas de Málaga operáis?',
    answer: 'Cubrimos toda la provincia de Málaga: capital, Costa del Sol (Marbella, Mijas, Fuengirola, Torremolinos, Benalmádena), Axarquía, Ronda y comarca. Si tienes cobertura en más zonas, podemos ampliar tu área de actuación.',
  },
];

// --- CITY HUB PAGE DATA ---

export const CITY_FAQ: Record<string, FAQItem[]> = {
  malaga: [
    {
      question: '¿Qué maquinaria de construcción se puede alquilar en Málaga?',
      answer: 'En Málaga puedes alquilar toda la maquinaria habitual de obra: miniexcavadoras, retroexcavadoras, plataformas elevadoras de tijera y articuladas, dumpers, minicargadoras, grupos electrógenos, bandejas vibrantes, hormigoneras, compresores y bombas de agua, entre otros equipos. Contamos con 47 proveedores activos que cubren toda la provincia.',
    },
    {
      question: '¿Cuánto tarda en llegar la maquinaria a mi obra en Málaga?',
      answer: 'La mayoría de solicitudes en Málaga capital y la Costa del Sol se confirman en menos de 2 horas y se entregan en 24 horas. Para zonas más alejadas como la Axarquía o la Serranía de Ronda, el plazo puede ser de 48 horas. Siempre te confirmamos fecha y hora exacta antes de formalizar el alquiler.',
    },
    {
      question: '¿Cubren toda la provincia de Málaga o solo la capital?',
      answer: 'Cubrimos toda la provincia: Málaga capital, Marbella, Mijas, Fuengirola, Torremolinos, Benalmádena, Nerja, Vélez-Málaga, Ronda y todos los municipios de la Axarquía. El coste de transporte varía según la distancia desde el almacén del proveedor más cercano a tu obra.',
    },
    {
      question: '¿Puedo alquilar maquinaria solo por un día en Málaga?',
      answer: 'Sí, la mayoría de nuestros proveedores en Málaga aceptan alquileres desde un día. El precio por día en alquileres cortos es algo mayor que en alquileres semanales o mensuales. Para trabajos puntuales de un solo día, los equipos más demandados son bandejas vibrantes, hormigoneras pequeñas y martillos picadores.',
    },
    {
      question: '¿Cómo se gestiona el transporte de la maquinaria en Málaga?',
      answer: 'El transporte (carga, traslado y descarga en obra) lo organiza el proveedor con su propio camión o camión grúa. El coste se presupuesta aparte según la distancia. Puedes recoger la máquina tú mismo en el almacén del proveedor para ahorrar en transporte si tienes el remolque adecuado.',
    },
  ],
};

CITIES.forEach(city => {
  if (city.status === 'active' && !CITY_FAQ[city.slug]) {
    CITY_FAQ[city.slug] = CITY_FAQ.malaga.map(q => ({
      question: q.question.replace(/Málaga/g, city.name),
      answer: q.answer.replace(/Málaga/g, city.name)
    }));
  }
});

export const CITY_PRICING_GUIDE: Record<string, { intro: string; marketContext: string }> = {
  malaga: {
    intro:
      'Los precios de alquiler de maquinaria en Málaga están en línea con la media nacional, aunque en temporada alta —primavera y verano— la demanda sube y conviene reservar con antelación. Las zonas de la Costa del Sol como Marbella y Mijas suelen tener un ligero sobreprecio de transporte por la distancia desde los almacenes principales.',
    marketContext:
      'Málaga es una de las provincias con mayor actividad de obra nueva en España. Los proyectos residenciales activos en el área metropolitana y la Costa del Sol generan una demanda constante de maquinaria de movimiento de tierras, especialmente miniexcavadoras y minicargadoras para obras en solares urbanos de acceso difícil.',
  },
};

export const CITY_PRICE_SUMMARY = [
  { name: 'Miniexcavadora', day: '95€ – 220€', week: '450€ – 950€' },
  { name: 'Plataforma elevadora', day: '120€ – 500€', week: '550€ – 2.200€' },
  { name: 'Dumper', day: '80€ – 260€', week: '380€ – 1.200€' },
  { name: 'Grupo electrógeno', day: '45€ – 200€', week: '220€ – 950€' },
  { name: 'Retroexcavadora', day: '250€ – 380€', week: '1.100€ – 1.700€' },
];

