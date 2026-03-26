export interface EquipmentCategory {
  id: string;
  name: string;
  slug: string;
  minPrice: number;
  supplierCount: number;
  description: string;
  image: string;
  imageAlt: string;
  ogImage: string;
  ogImageAlt: string;
  types: { label: string; useCase: string; priceDay: string; default?: boolean }[];
  pricingTable: { model: string; day: string; week: string; month: string }[];
  relatedEquipment: string[];
  faqKey: string;
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    "id": "miniexcavadora",
    "name": "Miniexcavadora",
    "slug": "miniexcavadora",
    "minPrice": 88,
    "supplierCount": 14,
    "description": "Alquila miniexcavadora al mejor precio. Proveedores verificados.",
    "image": "/images/miniexcavadora.webp",
    "imageAlt": "Miniexcavadora compacta trabajando en obra urbana en Málaga",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de miniexcavadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "88€ - 110€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "132€ - 165€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "88€ - 110€",
        "week": "352€ - 440€",
        "month": "1056€ - 1320€"
      },
      {
        "model": "Gama alta",
        "day": "132€ - 165€",
        "week": "528€ - 660€",
        "month": "1584€ - 1980€"
      }
    ],
    "relatedEquipment": [
      "soplador",
      "bomba-de-achique",
      "bomba-aguas-sucias"
    ],
    "faqKey": "miniexcavadora"
  },
  {
    "id": "excavadora-de-cadenas",
    "name": "Excavadora de cadenas",
    "slug": "excavadora-de-cadenas",
    "minPrice": 99,
    "supplierCount": 10,
    "description": "Alquila excavadora de cadenas al mejor precio. Proveedores verificados.",
    "image": "/images/excavadora-cadenas.webp",
    "imageAlt": "Excavadora de cadenas para alquiler en obras civiles e infraestructuras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de excavadora de cadenas en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "99€ - 124€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "148€ - 185€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "99€ - 124€",
        "week": "396€ - 495€",
        "month": "1188€ - 1485€"
      },
      {
        "model": "Gama alta",
        "day": "148€ - 185€",
        "week": "594€ - 743€",
        "month": "1782€ - 2228€"
      }
    ],
    "relatedEquipment": [
      "ranurador",
      "minicargadora",
      "llave-de-impacto"
    ],
    "faqKey": "excavadora-de-cadenas"
  },
  {
    "id": "retroexcavadora-mixta",
    "name": "Retroexcavadora mixta",
    "slug": "retroexcavadora-mixta",
    "minPrice": 68,
    "supplierCount": 4,
    "description": "Alquila retroexcavadora mixta al mejor precio. Proveedores verificados.",
    "image": "/images/retroexcavadora-mixta.webp",
    "imageAlt": "Retroexcavadora mixta JCB de alquiler para obras de construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de retroexcavadora mixta en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "68€ - 85€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "102€ - 128€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "68€ - 85€",
        "week": "272€ - 340€",
        "month": "816€ - 1020€"
      },
      {
        "model": "Gama alta",
        "day": "102€ - 128€",
        "week": "408€ - 510€",
        "month": "1224€ - 1530€"
      }
    ],
    "relatedEquipment": [
      "compresor-portatil",
      "contenedor-escombros",
      "canon-nebulizador"
    ],
    "faqKey": "retroexcavadora-mixta"
  },
  {
    "id": "minicargadora",
    "name": "Minicargadora",
    "slug": "minicargadora",
    "minPrice": 50,
    "supplierCount": 9,
    "description": "Alquila minicargadora al mejor precio. Proveedores verificados.",
    "image": "/images/minicargadora.webp",
    "imageAlt": "Minicargadora compacta de alquiler para construcción y movimiento de tierras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de minicargadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "50€ - 65€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "75€ - 94€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "50€ - 65€",
        "week": "200€ - 250€",
        "month": "600€ - 750€"
      },
      {
        "model": "Gama alta",
        "day": "75€ - 94€",
        "week": "300€ - 375€",
        "month": "900€ - 1125€"
      }
    ],
    "relatedEquipment": [
      "cortadora-de-azulejo",
      "bomba-a-gasolina",
      "tijera-electrica"
    ],
    "faqKey": "minicargadora"
  },
  {
    "id": "pala-cargadora",
    "name": "Pala cargadora",
    "slug": "pala-cargadora",
    "minPrice": 56,
    "supplierCount": 4,
    "description": "Alquila pala cargadora al mejor precio. Proveedores verificados.",
    "image": "/images/pala-cargadora.webp",
    "imageAlt": "Pala cargadora de alquiler para grandes movimientos de tierra y obra pública",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de pala cargadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "56€ - 71€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "84€ - 105€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "56€ - 71€",
        "week": "224€ - 280€",
        "month": "672€ - 840€"
      },
      {
        "model": "Gama alta",
        "day": "84€ - 105€",
        "week": "336€ - 420€",
        "month": "1008€ - 1260€"
      }
    ],
    "relatedEquipment": [
      "modulo-vestuario",
      "bomba-a-gasolina",
      "unipersonal"
    ],
    "faqKey": "pala-cargadora"
  },
  {
    "id": "dumper",
    "name": "Dumper",
    "slug": "dumper",
    "minPrice": 65,
    "supplierCount": 14,
    "description": "Alquila dumper al mejor precio. Proveedores verificados.",
    "image": "/images/dumper-obra.webp",
    "imageAlt": "Dumper de obra articulado de alquiler para transporte de materiales",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de dumper en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "65€ - 81€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "97€ - 121€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "65€ - 81€",
        "week": "260€ - 325€",
        "month": "780€ - 975€"
      },
      {
        "model": "Gama alta",
        "day": "97€ - 121€",
        "week": "390€ - 488€",
        "month": "1170€ - 1463€"
      }
    ],
    "relatedEquipment": [
      "carretilla-elevadora-industrial",
      "sierra-de-calar",
      "cortasetos"
    ],
    "faqKey": "dumper"
  },
  {
    "id": "canon-nebulizador",
    "name": "Cañón nebulizador",
    "slug": "canon-nebulizador",
    "minPrice": 77,
    "supplierCount": 14,
    "description": "Alquila cañón nebulizador al mejor precio. Proveedores verificados.",
    "image": "/images/canon-nebulizador.webp",
    "imageAlt": "Cañón nebulizador de alquiler para control de polvo en demoliciones y obras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de cañón nebulizador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "77€ - 96€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "115€ - 144€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "77€ - 96€",
        "week": "308€ - 385€",
        "month": "924€ - 1155€"
      },
      {
        "model": "Gama alta",
        "day": "115€ - 144€",
        "week": "462€ - 578€",
        "month": "1386€ - 1733€"
      }
    ],
    "relatedEquipment": [
      "telescopica",
      "tronzadora",
      "unipersonal"
    ],
    "faqKey": "canon-nebulizador"
  },
  {
    "id": "tijera-electrica",
    "name": "Tijera eléctrica",
    "slug": "tijera-electrica",
    "minPrice": 63,
    "supplierCount": 4,
    "description": "Alquila tijera eléctrica al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-tijera-electrica.webp",
    "imageAlt": "Plataforma elevadora de tijera eléctrica de alquiler para trabajos en altura",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de tijera eléctrica en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "63€ - 79€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "94€ - 118€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      },
      {
        "model": "Gama alta",
        "day": "94€ - 118€",
        "week": "378€ - 473€",
        "month": "1134€ - 1418€"
      }
    ],
    "relatedEquipment": [
      "miniexcavadora",
      "ventilador-industrial",
      "cortadora-de-pavimento"
    ],
    "faqKey": "tijera-electrica"
  },
  {
    "id": "articulada-electrica",
    "name": "Articulada eléctrica",
    "slug": "articulada-electrica",
    "minPrice": 79,
    "supplierCount": 8,
    "description": "Alquila articulada eléctrica al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-articulada-electrica.webp",
    "imageAlt": "Plataforma articulada eléctrica de alquiler para obras en interiores",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de articulada eléctrica en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "79€ - 99€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "118€ - 148€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "79€ - 99€",
        "week": "316€ - 395€",
        "month": "948€ - 1185€"
      },
      {
        "model": "Gama alta",
        "day": "118€ - 148€",
        "week": "474€ - 593€",
        "month": "1422€ - 1778€"
      }
    ],
    "relatedEquipment": [
      "garita-de-vigilancia",
      "bomba-de-hormigon",
      "miniexcavadora"
    ],
    "faqKey": "articulada-electrica"
  },
  {
    "id": "articulada-diesel",
    "name": "Articulada diesel",
    "slug": "articulada-diesel",
    "minPrice": 95,
    "supplierCount": 9,
    "description": "Alquila articulada diesel al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-articulada-diesel.webp",
    "imageAlt": "Plataforma articulada diesel de alquiler para exteriores y todo terreno",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de articulada diesel en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "95€ - 119€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "142€ - 178€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "95€ - 119€",
        "week": "380€ - 475€",
        "month": "1140€ - 1425€"
      },
      {
        "model": "Gama alta",
        "day": "142€ - 178€",
        "week": "570€ - 713€",
        "month": "1710€ - 2138€"
      }
    ],
    "relatedEquipment": [
      "rodillo-tandem",
      "modulo-vestuario",
      "sierra-de-calar"
    ],
    "faqKey": "articulada-diesel"
  },
  {
    "id": "telescopica",
    "name": "Telescópica",
    "slug": "telescopica",
    "minPrice": 42,
    "supplierCount": 10,
    "description": "Alquila telescópica al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-telescopica.webp",
    "imageAlt": "Plataforma telescópica de alquiler para trabajos en grandes alturas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de telescópica en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "42€ - 57€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "63€ - 79€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "42€ - 57€",
        "week": "168€ - 210€",
        "month": "504€ - 630€"
      },
      {
        "model": "Gama alta",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      }
    ],
    "relatedEquipment": [
      "nivel-laser",
      "modulo-sanitario",
      "desbrozadora"
    ],
    "faqKey": "telescopica"
  },
  {
    "id": "mastil-vertical",
    "name": "Mástil vertical",
    "slug": "mastil-vertical",
    "minPrice": 57,
    "supplierCount": 9,
    "description": "Alquila mástil vertical al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-mastil-vertical.webp",
    "imageAlt": "Plataforma de mástil vertical de alquiler para interiores y pasillos estrechos",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de mástil vertical en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "57€ - 72€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "85€ - 106€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "57€ - 72€",
        "week": "228€ - 285€",
        "month": "684€ - 855€"
      },
      {
        "model": "Gama alta",
        "day": "85€ - 106€",
        "week": "342€ - 428€",
        "month": "1026€ - 1283€"
      }
    ],
    "relatedEquipment": [
      "ventilador-industrial",
      "bomba-aguas-sucias",
      "lijadora-orbital"
    ],
    "faqKey": "mastil-vertical"
  },
  {
    "id": "unipersonal",
    "name": "Unipersonal",
    "slug": "unipersonal",
    "minPrice": 37,
    "supplierCount": 7,
    "description": "Alquila unipersonal al mejor precio. Proveedores verificados.",
    "image": "/images/plataforma-unipersonal.webp",
    "imageAlt": "Plataforma elevadora unipersonal de alquiler para trabajos puntuales en altura",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de unipersonal en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "37€ - 52€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "55€ - 70€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "37€ - 52€",
        "week": "148€ - 185€",
        "month": "444€ - 555€"
      },
      {
        "model": "Gama alta",
        "day": "55€ - 70€",
        "week": "222€ - 278€",
        "month": "666€ - 833€"
      }
    ],
    "relatedEquipment": [
      "telescopica",
      "taladro-percutor",
      "andamio-aluminio"
    ],
    "faqKey": "unipersonal"
  },
  {
    "id": "sobre-camion",
    "name": "Sobre camión",
    "slug": "sobre-camion",
    "minPrice": 56,
    "supplierCount": 14,
    "description": "Alquila sobre camión al mejor precio. Proveedores verificados.",
    "image": "/images/camion-cesta-plataforma.webp",
    "imageAlt": "Camión cesta de alquiler para trabajos en altura en fachadas and calles",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de sobre camión en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "56€ - 71€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "84€ - 105€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "56€ - 71€",
        "week": "224€ - 280€",
        "month": "672€ - 840€"
      },
      {
        "model": "Gama alta",
        "day": "84€ - 105€",
        "week": "336€ - 420€",
        "month": "1008€ - 1260€"
      }
    ],
    "relatedEquipment": [
      "martillo-picador",
      "amoladora",
      "deshumidificador"
    ],
    "faqKey": "sobre-camion"
  },
  {
    "id": "manipulador-telescopico",
    "name": "Manipulador telescópico",
    "slug": "manipulador-telescopico",
    "minPrice": 93,
    "supplierCount": 13,
    "description": "Alquila manipulador telescópico al mejor precio. Proveedores verificados.",
    "image": "/images/manipulador-telescopico.webp",
    "imageAlt": "Manipulador telescópico telehandler de alquiler para obra nueva and estructuras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de manipulador telescópico en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "93€ - 116€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "139€ - 174€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "93€ - 116€",
        "week": "372€ - 465€",
        "month": "1116€ - 1395€"
      },
      {
        "model": "Gama alta",
        "day": "139€ - 174€",
        "week": "558€ - 698€",
        "month": "1674€ - 2093€"
      }
    ],
    "relatedEquipment": [
      "tijera-electrica",
      "caseta-de-obra",
      "ranurador"
    ],
    "faqKey": "manipulador-telescopico"
  },
  {
    "id": "carretilla-elevadora-industrial",
    "name": "Carretilla elevadora industrial",
    "slug": "carretilla-elevadora-industrial",
    "minPrice": 77,
    "supplierCount": 4,
    "description": "Alquila carretilla elevadora industrial al mejor precio. Proveedores verificados.",
    "image": "/images/carretilla-elevadora.webp",
    "imageAlt": "Carretilla elevadora eléctrica de alquiler para almacén e industria",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de carretilla elevadora industrial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "77€ - 96€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "115€ - 144€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "77€ - 96€",
        "week": "308€ - 385€",
        "month": "924€ - 1155€"
      },
      {
        "model": "Gama alta",
        "day": "115€ - 144€",
        "week": "462€ - 578€",
        "month": "1386€ - 1733€"
      }
    ],
    "relatedEquipment": [
      "compresor-portatil",
      "carretilla-4x4-obra",
      "articulada-diesel"
    ],
    "faqKey": "carretilla-elevadora-industrial"
  },
  {
    "id": "carretilla-4x4-obra",
    "name": "Carretilla 4x4 obra",
    "slug": "carretilla-4x4-obra",
    "minPrice": 22,
    "supplierCount": 10,
    "description": "Alquila carretilla 4x4 obra al mejor precio. Proveedores verificados.",
    "image": "/images/carretilla-elevadora-4x4.webp",
    "imageAlt": "Carretilla elevadora 4x4 todo terreno de alquiler para obras exteriores",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de carretilla 4x4 obra en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "22€ - 37€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "33€ - 48€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "22€ - 37€",
        "week": "88€ - 110€",
        "month": "264€ - 330€"
      },
      {
        "model": "Gama alta",
        "day": "33€ - 48€",
        "week": "132€ - 165€",
        "month": "396€ - 495€"
      }
    ],
    "relatedEquipment": [
      "sierra-de-calar",
      "sobre-camion",
      "miniexcavadora"
    ],
    "faqKey": "carretilla-4x4-obra"
  },
  {
    "id": "apilador-electrico",
    "name": "Apilador eléctrico",
    "slug": "apilador-electrico",
    "minPrice": 79,
    "supplierCount": 6,
    "description": "Alquila apilador eléctrico al mejor precio. Proveedores verificados.",
    "image": "/images/apilador-electrico.webp",
    "imageAlt": "Apilador eléctrico de alquiler para almacenes y logística industrial",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de apilador eléctrico en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "79€ - 99€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "118€ - 148€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "79€ - 99€",
        "week": "316€ - 395€",
        "month": "948€ - 1185€"
      },
      {
        "model": "Gama alta",
        "day": "118€ - 148€",
        "week": "474€ - 593€",
        "month": "1422€ - 1778€"
      }
    ],
    "relatedEquipment": [
      "sierra-de-calar",
      "canon-nebulizador",
      "transpaleta-electrica"
    ],
    "faqKey": "apilador-electrico"
  },
  {
    "id": "transpaleta-electrica",
    "name": "Transpaleta eléctrica",
    "slug": "transpaleta-electrica",
    "minPrice": 27,
    "supplierCount": 15,
    "description": "Alquila transpaleta eléctrica al mejor precio. Proveedores verificados.",
    "image": "/images/transpaleta-electrica.webp",
    "imageAlt": "Transpaleta eléctrica de alquiler para movimiento de palés en almacén",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de transpaleta eléctrica en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "27€ - 42€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "40€ - 55€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "27€ - 42€",
        "week": "108€ - 135€",
        "month": "324€ - 405€"
      },
      {
        "model": "Gama alta",
        "day": "40€ - 55€",
        "week": "162€ - 203€",
        "month": "486€ - 608€"
      }
    ],
    "relatedEquipment": [
      "minicargadora",
      "carretilla-elevadora-industrial",
      "grupo-electrogeno"
    ],
    "faqKey": "transpaleta-electrica"
  },
  {
    "id": "maquinillo",
    "name": "Maquinillo",
    "slug": "maquinillo",
    "minPrice": 58,
    "supplierCount": 10,
    "description": "Alquila maquinillo al mejor precio. Proveedores verificados.",
    "image": "/images/maquinillo-ventana.webp",
    "imageAlt": "Maquinillo eléctrico de ventana de alquiler para subida de materiales en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de maquinillo en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "58€ - 73€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "87€ - 109€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "58€ - 73€",
        "week": "232€ - 290€",
        "month": "696€ - 870€"
      },
      {
        "model": "Gama alta",
        "day": "87€ - 109€",
        "week": "348€ - 435€",
        "month": "1044€ - 1305€"
      }
    ],
    "relatedEquipment": [
      "taladro-percutor",
      "miniexcavadora",
      "manipulador-telescopico"
    ],
    "faqKey": "maquinillo"
  },
  {
    "id": "grua-hidraulica",
    "name": "Grúa hidráulica",
    "slug": "grua-hidraulica",
    "minPrice": 50,
    "supplierCount": 8,
    "description": "Alquila grúa hidráulica al mejor precio. Proveedores verificados.",
    "image": "/images/grua-hidraulica-movil.webp",
    "imageAlt": "Grúa hidráulica móvil de alquiler para elevación de grandes cargas en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de grúa hidráulica en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "50€ - 65€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "75€ - 94€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "50€ - 65€",
        "week": "200€ - 250€",
        "month": "600€ - 750€"
      },
      {
        "model": "Gama alta",
        "day": "75€ - 94€",
        "week": "300€ - 375€",
        "month": "900€ - 1125€"
      }
    ],
    "relatedEquipment": [
      "contenedor-maritimo",
      "ranurador",
      "andamio-tubular-fachada"
    ],
    "faqKey": "grua-hidraulica"
  },
  {
    "id": "grupo-electrogeno",
    "name": "Grupo electrógeno",
    "slug": "grupo-electrogeno",
    "minPrice": 37,
    "supplierCount": 8,
    "description": "Alquila grupo electrógeno al mejor precio. Proveedores verificados.",
    "image": "/images/grupo-electrogeno.webp",
    "imageAlt": "Grupo electrógeno diesel de alquiler para suministro eléctrico en obras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de grupo electrógeno en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "37€ - 52€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "55€ - 70€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "37€ - 52€",
        "week": "148€ - 185€",
        "month": "444€ - 555€"
      },
      {
        "model": "Gama alta",
        "day": "55€ - 70€",
        "week": "222€ - 278€",
        "month": "666€ - 833€"
      }
    ],
    "relatedEquipment": [
      "taladro-percutor",
      "bomba-de-achique",
      "caseta-de-obra"
    ],
    "faqKey": "grupo-electrogeno"
  },
  {
    "id": "torre-de-iluminacion-led",
    "name": "Torre de iluminación LED",
    "slug": "torre-de-iluminacion-led",
    "minPrice": 79,
    "supplierCount": 9,
    "description": "Alquila torre de iluminación led al mejor precio. Proveedores verificados.",
    "image": "/images/torre-iluminacion-led.webp",
    "imageAlt": "Alquiler de torre de iluminación led al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de torre de iluminación led en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "79€ - 99€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "118€ - 148€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "79€ - 99€",
        "week": "316€ - 395€",
        "month": "948€ - 1185€"
      },
      {
        "model": "Gama alta",
        "day": "118€ - 148€",
        "week": "474€ - 593€",
        "month": "1422€ - 1778€"
      }
    ],
    "relatedEquipment": [
      "apilador-electrico",
      "borriqueta",
      "bomba-aguas-sucias"
    ],
    "faqKey": "torre-de-iluminacion-led"
  },
  {
    "id": "soldadora",
    "name": "Soldadora",
    "slug": "soldadora",
    "minPrice": 40,
    "supplierCount": 4,
    "description": "Alquila soldadora al mejor precio. Proveedores verificados.",
    "image": "/images/soldadora-electrica.webp",
    "imageAlt": "Soldadora eléctrica de alquiler para trabajos de metal en construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de soldadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "40€ - 55€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "60€ - 75€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "40€ - 55€",
        "week": "160€ - 200€",
        "month": "480€ - 600€"
      },
      {
        "model": "Gama alta",
        "day": "60€ - 75€",
        "week": "240€ - 300€",
        "month": "720€ - 900€"
      }
    ],
    "relatedEquipment": [
      "pala-cargadora",
      "mastil-vertical",
      "hormigonera"
    ],
    "faqKey": "soldadora"
  },
  {
    "id": "canon-de-calor",
    "name": "Cañón de calor",
    "slug": "canon-de-calor",
    "minPrice": 88,
    "supplierCount": 4,
    "description": "Alquila cañón de calor al mejor precio. Proveedores verificados.",
    "image": "/images/canon-de-calor.webp",
    "imageAlt": "Cañón de calor industrial de alquiler para calefacción de obras en invierno",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de cañón de calor en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "88€ - 110€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "132€ - 165€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "88€ - 110€",
        "week": "352€ - 440€",
        "month": "1056€ - 1320€"
      },
      {
        "model": "Gama alta",
        "day": "132€ - 165€",
        "week": "528€ - 660€",
        "month": "1584€ - 1980€"
      }
    ],
    "relatedEquipment": [
      "tijera-electrica",
      "cortadora-de-azulejo",
      "minicargadora"
    ],
    "faqKey": "canon-de-calor"
  },
  {
    "id": "deshumidificador",
    "name": "Deshumidificador",
    "slug": "deshumidificador",
    "minPrice": 45,
    "supplierCount": 13,
    "description": "Alquila deshumidificador al mejor precio. Proveedores verificados.",
    "image": "/images/deshumidificador-industrial.webp",
    "imageAlt": "Deshumidificador industrial de alquiler para secado de obras y reformas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de deshumidificador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "45€ - 60€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "67€ - 84€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "45€ - 60€",
        "week": "180€ - 225€",
        "month": "540€ - 675€"
      },
      {
        "model": "Gama alta",
        "day": "67€ - 84€",
        "week": "270€ - 338€",
        "month": "810€ - 1013€"
      }
    ],
    "relatedEquipment": [
      "bomba-de-achique",
      "escalera-de-obra",
      "borriqueta"
    ],
    "faqKey": "deshumidificador"
  },
  {
    "id": "ventilador-industrial",
    "name": "Ventilador industrial",
    "slug": "ventilador-industrial",
    "minPrice": 22,
    "supplierCount": 3,
    "description": "Alquila ventilador industrial al mejor precio. Proveedores verificados.",
    "image": "/images/ventilador-industrial.webp",
    "imageAlt": "Ventilador industrial de alquiler para ventilación de obras and naves",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de ventilador industrial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "22€ - 37€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "33€ - 48€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "22€ - 37€",
        "week": "88€ - 110€",
        "month": "264€ - 330€"
      },
      {
        "model": "Gama alta",
        "day": "33€ - 48€",
        "week": "132€ - 165€",
        "month": "396€ - 495€"
      }
    ],
    "relatedEquipment": [
      "perforadora-de-hormigon",
      "martillo-neumatico",
      "miniexcavadora"
    ],
    "faqKey": "ventilador-industrial"
  },
  {
    "id": "compresor-portatil",
    "name": "Compresor portátil",
    "slug": "compresor-portatil",
    "minPrice": 69,
    "supplierCount": 3,
    "description": "Alquila compresor portátil al mejor precio. Proveedores verificados.",
    "image": "/images/compresor-de-aire.webp",
    "imageAlt": "Compresor de aire portátil de alquiler para herramientas neumáticas en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de compresor portátil en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "69€ - 86€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "103€ - 129€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "69€ - 86€",
        "week": "276€ - 345€",
        "month": "828€ - 1035€"
      },
      {
        "model": "Gama alta",
        "day": "103€ - 129€",
        "week": "414€ - 518€",
        "month": "1242€ - 1553€"
      }
    ],
    "relatedEquipment": [
      "aspirador-industrial",
      "carretilla-elevadora-industrial",
      "maquinillo"
    ],
    "faqKey": "compresor-portatil"
  },
  {
    "id": "compresor-de-tornillo-remolcable",
    "name": "Compresor de tornillo remolcable",
    "slug": "compresor-de-tornillo-remolcable",
    "minPrice": 95,
    "supplierCount": 14,
    "description": "Alquila compresor de tornillo remolcable al mejor precio. Proveedores verificados.",
    "image": "/images/compresor-tornillo-remolcable.webp",
    "imageAlt": "Compresor de tornillo remolcable de alquiler para obra civil e infraestructuras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de compresor de tornillo remolcable en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "95€ - 119€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "142€ - 178€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "95€ - 119€",
        "week": "380€ - 475€",
        "month": "1140€ - 1425€"
      },
      {
        "model": "Gama alta",
        "day": "142€ - 178€",
        "week": "570€ - 713€",
        "month": "1710€ - 2138€"
      }
    ],
    "relatedEquipment": [
      "sierra-de-calar",
      "miniexcavadora",
      "pison-compactador"
    ],
    "faqKey": "compresor-de-tornillo-remolcable"
  },
  {
    "id": "martillo-neumatico",
    "name": "Martillo neumático",
    "slug": "martillo-neumatico",
    "minPrice": 72,
    "supplierCount": 5,
    "description": "Alquila martillo neumático al mejor precio. Proveedores verificados.",
    "image": "/images/martillo-neumatico.webp",
    "imageAlt": "Martillo neumático de alquiler para demolición and rotura de pavimentos",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de martillo neumático en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "72€ - 90€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "108€ - 135€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "72€ - 90€",
        "week": "288€ - 360€",
        "month": "864€ - 1080€"
      },
      {
        "model": "Gama alta",
        "day": "108€ - 135€",
        "week": "432€ - 540€",
        "month": "1296€ - 1620€"
      }
    ],
    "relatedEquipment": [
      "bomba-a-gasolina",
      "hidrolimpiadora-agua-caliente",
      "caseta-de-obra"
    ],
    "faqKey": "martillo-neumatico"
  },
  {
    "id": "herramientas-neumaticas",
    "name": "Herramientas neumáticas",
    "slug": "herramientas-neumaticas",
    "minPrice": 42,
    "supplierCount": 5,
    "description": "Alquila herramientas neumáticas al mejor precio. Proveedores verificados.",
    "image": "/images/herramientas-neumaticas.webp",
    "imageAlt": "Herramientas neumáticas de alquiler para taller y obra profesional",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de herramientas neumáticas en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "42€ - 57€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "63€ - 79€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "42€ - 57€",
        "week": "168€ - 210€",
        "month": "504€ - 630€"
      },
      {
        "model": "Gama alta",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      }
    ],
    "relatedEquipment": [
      "canon-nebulizador",
      "transpaleta-electrica",
      "bomba-de-hormigon"
    ],
    "faqKey": "herramientas-neumaticas"
  },
  {
    "id": "bandeja-vibrante",
    "name": "Bandeja vibrante",
    "slug": "bandeja-vibrante",
    "minPrice": 87,
    "supplierCount": 5,
    "description": "Alquila bandeja vibrante al mejor precio. Proveedores verificados.",
    "image": "/images/bandeja-vibrante.webp",
    "imageAlt": "Bandeja vibrante compactadora de alquiler para compactación de suelos en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bandeja vibrante en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "87€ - 109€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "130€ - 163€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "87€ - 109€",
        "week": "348€ - 435€",
        "month": "1044€ - 1305€"
      },
      {
        "model": "Gama alta",
        "day": "130€ - 163€",
        "week": "522€ - 653€",
        "month": "1566€ - 1958€"
      }
    ],
    "relatedEquipment": [
      "excavadora-de-cadenas",
      "ventilador-industrial",
      "canon-nebulizador"
    ],
    "faqKey": "bandeja-vibrante"
  },
  {
    "id": "pison-compactador",
    "name": "Pisón compactador",
    "slug": "pison-compactador",
    "minPrice": 51,
    "supplierCount": 13,
    "description": "Alquila pisón compactador al mejor precio. Proveedores verificados.",
    "image": "/images/pison-compactador.webp",
    "imageAlt": "Pisón compactador de alquiler para zanjas and suelos en obras de construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de pisón compactador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "51€ - 66€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "76€ - 95€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "51€ - 66€",
        "week": "204€ - 255€",
        "month": "612€ - 765€"
      },
      {
        "model": "Gama alta",
        "day": "76€ - 95€",
        "week": "306€ - 383€",
        "month": "918€ - 1148€"
      }
    ],
    "relatedEquipment": [
      "cortasetos",
      "cortadora-de-azulejo",
      "bandeja-vibrante"
    ],
    "faqKey": "pison-compactador"
  },
  {
    "id": "rodillo-tandem",
    "name": "Rodillo tándem",
    "slug": "rodillo-tandem",
    "minPrice": 63,
    "supplierCount": 15,
    "description": "Alquila rodillo tándem al mejor precio. Proveedores verificados.",
    "image": "/images/rodillo-compactador-tandem.webp",
    "imageAlt": "Rodillo compactador tándem de alquiler para compactación de asfalto",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de rodillo tándem en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "63€ - 79€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "94€ - 118€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      },
      {
        "model": "Gama alta",
        "day": "94€ - 118€",
        "week": "378€ - 473€",
        "month": "1134€ - 1418€"
      }
    ],
    "relatedEquipment": [
      "tijera-electrica",
      "motosierra",
      "caseta-de-obra"
    ],
    "faqKey": "rodillo-tandem"
  },
  {
    "id": "rodillo-vibrante-de-suelo",
    "name": "Rodillo vibrante de suelo",
    "slug": "rodillo-vibrante-de-suelo",
    "minPrice": 77,
    "supplierCount": 4,
    "description": "Alquila rodillo vibrante de suelo al mejor precio. Proveedores verificados.",
    "image": "/images/rodillo-vibrante-suelo.webp",
    "imageAlt": "Rodillo vibrante de suelo de alquiler para obra civil and compactación de tierras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de rodillo vibrante de suelo en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "77€ - 96€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "115€ - 144€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "77€ - 96€",
        "week": "308€ - 385€",
        "month": "924€ - 1155€"
      },
      {
        "model": "Gama alta",
        "day": "115€ - 144€",
        "week": "462€ - 578€",
        "month": "1386€ - 1733€"
      }
    ],
    "relatedEquipment": [
      "equipo-de-proyeccion",
      "borriqueta",
      "amoladora"
    ],
    "faqKey": "rodillo-vibrante-de-suelo"
  },
  {
    "id": "hormigonera",
    "name": "Hormigonera",
    "slug": "hormigonera",
    "minPrice": 47,
    "supplierCount": 6,
    "description": "Alquila hormigonera al mejor precio. Proveedores verificados.",
    "image": "/images/hormigonera-electrica.webp",
    "imageAlt": "Hormigonera eléctrica portátil de alquiler para mezcla de hormigón en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de hormigonera en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "47€ - 62€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "70€ - 88€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "47€ - 62€",
        "week": "188€ - 235€",
        "month": "564€ - 705€"
      },
      {
        "model": "Gama alta",
        "day": "70€ - 88€",
        "week": "282€ - 353€",
        "month": "846€ - 1058€"
      }
    ],
    "relatedEquipment": [
      "escalera-de-obra",
      "batidora-de-pintura",
      "andamio-tubular-fachada"
    ],
    "faqKey": "hormigonera"
  },
  {
    "id": "vibrador-de-hormigon",
    "name": "Vibrador de hormigón",
    "slug": "vibrador-de-hormigon",
    "minPrice": 21,
    "supplierCount": 13,
    "description": "Alquila vibrador de hormigón al mejor precio. Proveedores verificados.",
    "image": "/images/vibrador-de-hormigon.webp",
    "imageAlt": "Vibrador de hormigón eléctrico de alquiler para consolidación de estructuras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de vibrador de hormigón en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "21€ - 36€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "31€ - 46€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "21€ - 36€",
        "week": "84€ - 105€",
        "month": "252€ - 315€"
      },
      {
        "model": "Gama alta",
        "day": "31€ - 46€",
        "week": "126€ - 158€",
        "month": "378€ - 473€"
      }
    ],
    "relatedEquipment": [
      "bomba-de-achique",
      "valla-de-obra",
      "contenedor-maritimo"
    ],
    "faqKey": "vibrador-de-hormigon"
  },
  {
    "id": "regla-vibrante",
    "name": "Regla vibrante",
    "slug": "regla-vibrante",
    "minPrice": 43,
    "supplierCount": 15,
    "description": "Alquila regla vibrante al mejor precio. Proveedores verificados.",
    "image": "/images/regla-vibrante-hormigon.webp",
    "imageAlt": "Regla vibrante de alquiler para nivelación de soleras and losas de hormigón",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de regla vibrante en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "43€ - 58€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "64€ - 80€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "43€ - 58€",
        "week": "172€ - 215€",
        "month": "516€ - 645€"
      },
      {
        "model": "Gama alta",
        "day": "64€ - 80€",
        "week": "258€ - 323€",
        "month": "774€ - 968€"
      }
    ],
    "relatedEquipment": [
      "torre-de-iluminacion-led",
      "modulo-sanitario",
      "contenedor-escombros"
    ],
    "faqKey": "regla-vibrante"
  },
  {
    "id": "fratasadora",
    "name": "Fratasadora",
    "slug": "fratasadora",
    "minPrice": 97,
    "supplierCount": 12,
    "description": "Alquila fratasadora al mejor precio. Proveedores verificados.",
    "image": "/images/fratasadora-hormigon.webp",
    "imageAlt": "Fratasadora de hormigón de alquiler para acabado de pavimentos industriales",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de fratasadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "97€ - 121€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "145€ - 181€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "97€ - 121€",
        "week": "388€ - 485€",
        "month": "1164€ - 1455€"
      },
      {
        "model": "Gama alta",
        "day": "145€ - 181€",
        "week": "582€ - 728€",
        "month": "1746€ - 2183€"
      }
    ],
    "relatedEquipment": [
      "cortasetos",
      "excavadora-de-cadenas",
      "sobre-camion"
    ],
    "faqKey": "fratasadora"
  },
  {
    "id": "bomba-de-hormigon",
    "name": "Bomba de hormigón",
    "slug": "bomba-de-hormigon",
    "minPrice": 82,
    "supplierCount": 6,
    "description": "Alquila bomba de hormigón al mejor precio. Proveedores verificados.",
    "image": "/images/bomba-de-hormigon.webp",
    "imageAlt": "Bomba de hormigón de alquiler para bombeo en obras de gran altura y volumen",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bomba de hormigón en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "82€ - 103€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "123€ - 154€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "82€ - 103€",
        "week": "328€ - 410€",
        "month": "984€ - 1230€"
      },
      {
        "model": "Gama alta",
        "day": "123€ - 154€",
        "week": "492€ - 615€",
        "month": "1476€ - 1845€"
      }
    ],
    "relatedEquipment": [
      "carretilla-elevadora-industrial",
      "bomba-de-achique",
      "barredora-industrial"
    ],
    "faqKey": "bomba-de-hormigon"
  },
  {
    "id": "tronzadora",
    "name": "Tronzadora",
    "slug": "tronzadora",
    "minPrice": 41,
    "supplierCount": 8,
    "description": "Alquila tronzadora al mejor precio. Proveedores verificados.",
    "image": "/images/tronzadora-materiales.webp",
    "imageAlt": "Tronzadora de materiales de alquiler para corte de metal en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de tronzadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "41€ - 56€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "61€ - 76€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "41€ - 56€",
        "week": "164€ - 205€",
        "month": "492€ - 615€"
      },
      {
        "model": "Gama alta",
        "day": "61€ - 76€",
        "week": "246€ - 308€",
        "month": "738€ - 923€"
      }
    ],
    "relatedEquipment": [
      "caseta-de-obra",
      "compresor-de-tornillo-remolcable",
      "cortadora-de-azulejo"
    ],
    "faqKey": "tronzadora"
  },
  {
    "id": "cortadora-de-pavimento",
    "name": "Cortadora de pavimento",
    "slug": "cortadora-de-pavimento",
    "minPrice": 46,
    "supplierCount": 8,
    "description": "Alquila cortadora de pavimento al mejor precio. Proveedores verificados.",
    "image": "/images/cortadora-de-pavimento.webp",
    "imageAlt": "Cortadora de pavimento de alquiler para corte de hormigón and asfalto",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de cortadora de pavimento en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "46€ - 61€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "69€ - 86€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "46€ - 61€",
        "week": "184€ - 230€",
        "month": "552€ - 690€"
      },
      {
        "model": "Gama alta",
        "day": "69€ - 86€",
        "week": "276€ - 345€",
        "month": "828€ - 1035€"
      }
    ],
    "relatedEquipment": [
      "senalizacion-vial",
      "herramientas-neumaticas",
      "bandeja-vibrante"
    ],
    "faqKey": "cortadora-de-pavimento"
  },
  {
    "id": "perforadora-de-hormigon",
    "name": "Perforadora de hormigón",
    "slug": "perforadora-de-hormigon",
    "minPrice": 97,
    "supplierCount": 9,
    "description": "Alquila perforadora de hormigón al mejor precio. Proveedores verificados.",
    "image": "/images/perforadora-de-hormigon.webp",
    "imageAlt": "Perforadora de hormigón de alquiler para instalaciones and pasatubos en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de perforadora de hormigón en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "97€ - 121€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "145€ - 181€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "97€ - 121€",
        "week": "388€ - 485€",
        "month": "1164€ - 1455€"
      },
      {
        "model": "Gama alta",
        "day": "145€ - 181€",
        "week": "582€ - 728€",
        "month": "1746€ - 2183€"
      }
    ],
    "relatedEquipment": [
      "soldadora",
      "fresadora-de-madera",
      "lijadora-orbital"
    ],
    "faqKey": "perforadora-de-hormigon"
  },
  {
    "id": "cortadora-de-azulejo",
    "name": "Cortadora de azulejo",
    "slug": "cortadora-de-azulejo",
    "minPrice": 57,
    "supplierCount": 4,
    "description": "Alquila cortadora de azulejo al mejor precio. Proveedores verificados.",
    "image": "/images/cortadora-de-azulejo.webp",
    "imageAlt": "Cortadora de azulejo eléctrica de alquiler para reformas and alicatados",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de cortadora de azulejo en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "57€ - 72€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "85€ - 106€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "57€ - 72€",
        "week": "228€ - 285€",
        "month": "684€ - 855€"
      },
      {
        "model": "Gama alta",
        "day": "85€ - 106€",
        "week": "342€ - 428€",
        "month": "1026€ - 1283€"
      }
    ],
    "relatedEquipment": [
      "desbrozadora",
      "ranurador",
      "contenedor-maritimo"
    ],
    "faqKey": "cortadora-de-azulejo"
  },
  {
    "id": "amoladora",
    "name": "Amoladora",
    "slug": "amoladora",
    "minPrice": 75,
    "supplierCount": 7,
    "description": "Alquila amoladora al mejor precio. Proveedores verificados.",
    "image": "/images/amoladora-radial.webp",
    "imageAlt": "Amoladora radial eléctrica de alquiler para corte and desbaste en construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de amoladora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "75€ - 94€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "112€ - 140€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "75€ - 94€",
        "week": "300€ - 375€",
        "month": "900€ - 1125€"
      },
      {
        "model": "Gama alta",
        "day": "112€ - 140€",
        "week": "450€ - 563€",
        "month": "1350€ - 1688€"
      }
    ],
    "relatedEquipment": [
      "sobre-camion",
      "articulada-diesel",
      "deposito-1000l"
    ],
    "faqKey": "amoladora"
  },
  {
    "id": "sierra-de-calar",
    "name": "Sierra de calar",
    "slug": "sierra-de-calar",
    "minPrice": 64,
    "supplierCount": 15,
    "description": "Alquila sierra de calar al mejor precio. Proveedores verificados.",
    "image": "/images/sierra-de-calar.webp",
    "imageAlt": "Sierra de calar eléctrica de alquiler para corte de madera en obras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de sierra de calar en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "64€ - 80€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "96€ - 120€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "64€ - 80€",
        "week": "256€ - 320€",
        "month": "768€ - 960€"
      },
      {
        "model": "Gama alta",
        "day": "96€ - 120€",
        "week": "384€ - 480€",
        "month": "1152€ - 1440€"
      }
    ],
    "relatedEquipment": [
      "cortasetos",
      "bomba-de-achique",
      "barredora-industrial"
    ],
    "faqKey": "sierra-de-calar"
  },
  {
    "id": "sierra-circular",
    "name": "Sierra circular",
    "slug": "sierra-circular",
    "minPrice": 25,
    "supplierCount": 4,
    "description": "Alquila sierra circular al mejor precio. Proveedores verificados.",
    "image": "/images/sierra-circular.webp",
    "imageAlt": "Sierra circular eléctrica de alquiler para corte de madera en construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de sierra circular en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "25€ - 40€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "37€ - 52€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "25€ - 40€",
        "week": "100€ - 125€",
        "month": "300€ - 375€"
      },
      {
        "model": "Gama alta",
        "day": "37€ - 52€",
        "week": "150€ - 188€",
        "month": "450€ - 563€"
      }
    ],
    "relatedEquipment": [
      "carretilla-elevadora-industrial",
      "andamio-aluminio",
      "bomba-neumatica"
    ],
    "faqKey": "sierra-circular"
  },
  {
    "id": "fresadora-de-madera",
    "name": "Fresadora de madera",
    "slug": "fresadora-de-madera",
    "minPrice": 84,
    "supplierCount": 4,
    "description": "Alquila fresadora de madera al mejor precio. Proveedores verificados.",
    "image": "/images/fresadora-de-madera.webp",
    "imageAlt": "Fresadora de madera de alquiler para carpintería fina en obras and reformas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de fresadora de madera en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "84€ - 105€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "126€ - 158€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "84€ - 105€",
        "week": "336€ - 420€",
        "month": "1008€ - 1260€"
      },
      {
        "model": "Gama alta",
        "day": "126€ - 158€",
        "week": "504€ - 630€",
        "month": "1512€ - 1890€"
      }
    ],
    "relatedEquipment": [
      "desbrozadora",
      "vibrador-de-hormigon",
      "perforadora-de-hormigon"
    ],
    "faqKey": "fresadora-de-madera"
  },
  {
    "id": "ranurador",
    "name": "Ranurador",
    "slug": "ranurador",
    "minPrice": 42,
    "supplierCount": 3,
    "description": "Alquila ranurador al mejor precio. Proveedores verificados.",
    "image": "/images/ranurador-hormigon.webp",
    "imageAlt": "Ranurador de hormigón de alquiler para instalaciones empotradas en paredes",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de ranurador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "42€ - 57€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "63€ - 79€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "42€ - 57€",
        "week": "168€ - 210€",
        "month": "504€ - 630€"
      },
      {
        "model": "Gama alta",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      }
    ],
    "relatedEquipment": [
      "mastil-vertical",
      "unipersonal",
      "miniexcavadora"
    ],
    "faqKey": "ranurador"
  },
  {
    "id": "martillo-picador",
    "name": "Martillo picador",
    "slug": "martillo-picador",
    "minPrice": 92,
    "supplierCount": 7,
    "description": "Alquila martillo picador al mejor precio. Proveedores verificados.",
    "image": "/images/martillo-picador-demoledor.webp",
    "imageAlt": "Martillo picador demoledor eléctrico de alquiler para demolición en obras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de martillo picador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "92€ - 115€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "138€ - 173€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "92€ - 115€",
        "week": "368€ - 460€",
        "month": "1104€ - 1380€"
      },
      {
        "model": "Gama alta",
        "day": "138€ - 173€",
        "week": "552€ - 690€",
        "month": "1656€ - 2070€"
      }
    ],
    "relatedEquipment": [
      "ranurador",
      "bomba-neumatica",
      "hidrolimpiadora-agua-fria"
    ],
    "faqKey": "martillo-picador"
  },
  {
    "id": "taladro-percutor",
    "name": "Taladro percutor",
    "slug": "taladro-percutor",
    "minPrice": 20,
    "supplierCount": 9,
    "description": "Alquila taladro percutor al mejor precio. Proveedores verificados.",
    "image": "/images/taladro-percutor.webp",
    "imageAlt": "Taladro percutor eléctrico de alquiler para perforación in obra and reformas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de taladro percutor en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "20€ - 35€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "30€ - 45€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "20€ - 35€",
        "week": "80€ - 100€",
        "month": "240€ - 300€"
      },
      {
        "model": "Gama alta",
        "day": "30€ - 45€",
        "week": "120€ - 150€",
        "month": "360€ - 450€"
      }
    ],
    "relatedEquipment": [
      "canon-de-calor",
      "fregasuelos-industrial",
      "pison-compactador"
    ],
    "faqKey": "taladro-percutor"
  },
  {
    "id": "atornillador",
    "name": "Atornillador",
    "slug": "atornillador",
    "minPrice": 53,
    "supplierCount": 11,
    "description": "Alquila atornillador al mejor precio. Proveedores verificados.",
    "image": "/images/atornillador-bateria.webp",
    "imageAlt": "Atornillador a batería de alquiler para montaje and reformas en construcción",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de atornillador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "53€ - 68€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "79€ - 99€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "53€ - 68€",
        "week": "212€ - 265€",
        "month": "636€ - 795€"
      },
      {
        "model": "Gama alta",
        "day": "79€ - 99€",
        "week": "318€ - 398€",
        "month": "954€ - 1193€"
      }
    ],
    "relatedEquipment": [
      "soldadora",
      "bomba-aguas-sucias",
      "amoladora"
    ],
    "faqKey": "atornillador"
  },
  {
    "id": "lijadora-orbital",
    "name": "Lijadora orbital",
    "slug": "lijadora-orbital",
    "minPrice": 97,
    "supplierCount": 12,
    "description": "Alquila lijadora orbital al mejor precio. Proveedores verificados.",
    "image": "/images/lijadora-orbital.webp",
    "imageAlt": "Lijadora orbital eléctrica de alquiler para acabados en madera and reformas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de lijadora orbital en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "97€ - 121€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "145€ - 181€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "97€ - 121€",
        "week": "388€ - 485€",
        "month": "1164€ - 1455€"
      },
      {
        "model": "Gama alta",
        "day": "145€ - 181€",
        "week": "582€ - 728€",
        "month": "1746€ - 2183€"
      }
    ],
    "relatedEquipment": [
      "deposito-1000l",
      "andamio-aluminio",
      "compresor-de-tornillo-remolcable"
    ],
    "faqKey": "lijadora-orbital"
  },
  {
    "id": "lijadora-cuello-largo",
    "name": "Lijadora cuello largo",
    "slug": "lijadora-cuello-largo",
    "minPrice": 96,
    "supplierCount": 8,
    "description": "Alquila lijadora cuello largo al mejor precio. Proveedores verificados.",
    "image": "/images/lijadora-cuello-largo.webp",
    "imageAlt": "Lijadora de cuello largo de alquiler para paredes and techos en reformas",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de lijadora cuello largo en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "96€ - 120€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "144€ - 180€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "96€ - 120€",
        "week": "384€ - 480€",
        "month": "1152€ - 1440€"
      },
      {
        "model": "Gama alta",
        "day": "144€ - 180€",
        "week": "576€ - 720€",
        "month": "1728€ - 2160€"
      }
    ],
    "relatedEquipment": [
      "mastil-vertical",
      "cortadora-de-azulejo",
      "carretilla-elevadora-industrial"
    ],
    "faqKey": "lijadora-cuello-largo"
  },
  {
    "id": "llave-de-impacto",
    "name": "Llave de impacto",
    "slug": "llave-de-impacto",
    "minPrice": 91,
    "supplierCount": 5,
    "description": "Alquila llave de impacto al mejor precio. Proveedores verificados.",
    "image": "/images/llave-de-impacto.webp",
    "imageAlt": "Llave de impacto eléctrica de alquiler para montaje and desmontaje en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de llave de impacto en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "91€ - 114€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "136€ - 170€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "91€ - 114€",
        "week": "364€ - 455€",
        "month": "1092€ - 1365€"
      },
      {
        "model": "Gama alta",
        "day": "136€ - 170€",
        "week": "546€ - 683€",
        "month": "1638€ - 2048€"
      }
    ],
    "relatedEquipment": [
      "manipulador-telescopico",
      "deposito-1000l",
      "miniexcavadora"
    ],
    "faqKey": "llave-de-impacto"
  },
  {
    "id": "nivel-laser",
    "name": "Nivel láser",
    "slug": "nivel-laser",
    "minPrice": 48,
    "supplierCount": 9,
    "description": "Alquila nivel láser al mejor precio. Proveedores verificados.",
    "image": "/images/nivel-laser.webp",
    "imageAlt": "Nivel láser de alquiler para nivelación and alineación profesional en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de nivel láser en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "48€ - 63€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "72€ - 90€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "48€ - 63€",
        "week": "192€ - 240€",
        "month": "576€ - 720€"
      },
      {
        "model": "Gama alta",
        "day": "72€ - 90€",
        "week": "288€ - 360€",
        "month": "864€ - 1080€"
      }
    ],
    "relatedEquipment": [
      "aspirador-industrial",
      "articulada-electrica",
      "soldadora"
    ],
    "faqKey": "nivel-laser"
  },
  {
    "id": "bomba-de-achique",
    "name": "Bomba de achique",
    "slug": "bomba-de-achique",
    "minPrice": 92,
    "supplierCount": 11,
    "description": "Alquila bomba de achique al mejor precio. Proveedores verificados.",
    "image": "/images/bomba-de-achique.webp",
    "imageAlt": "Bomba de achique sumergible de alquiler para desagüe de excavaciones en obra",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bomba de achique en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "92€ - 115€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "138€ - 173€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "92€ - 115€",
        "week": "368€ - 460€",
        "month": "1104€ - 1380€"
      },
      {
        "model": "Gama alta",
        "day": "138€ - 173€",
        "week": "552€ - 690€",
        "month": "1656€ - 2070€"
      }
    ],
    "relatedEquipment": [
      "caseta-de-obra",
      "grua-hidraulica",
      "manipulador-telescopico"
    ],
    "faqKey": "bomba-de-achique"
  },
  {
    "id": "bomba-a-gasolina",
    "name": "Bomba a gasolina",
    "slug": "bomba-a-gasolina",
    "minPrice": 76,
    "supplierCount": 12,
    "description": "Alquila bomba a gasolina al mejor precio. Proveedores verificados.",
    "image": "/images/bomba-agua-gasolina.webp",
    "imageAlt": "Bomba de agua a gasolina de alquiler para obras sin suministro eléctrico",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bomba a gasolina en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "76€ - 95€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "114€ - 143€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "76€ - 95€",
        "week": "304€ - 380€",
        "month": "912€ - 1140€"
      },
      {
        "model": "Gama alta",
        "day": "114€ - 143€",
        "week": "456€ - 570€",
        "month": "1368€ - 1710€"
      }
    ],
    "relatedEquipment": [
      "llave-de-impacto",
      "andamio-aluminio",
      "nivel-laser"
    ],
    "faqKey": "bomba-a-gasolina"
  },
  {
    "id": "bomba-neumatica",
    "name": "Bomba neumática",
    "slug": "bomba-neumatica",
    "minPrice": 96,
    "supplierCount": 13,
    "description": "Alquila bomba neumática al mejor precio. Proveedores verificados.",
    "image": "/images/bomba-neumatica.webp",
    "imageAlt": "Bomba neumática de alquiler para trasvase de líquidos en obras e industria",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bomba neumática en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "96€ - 120€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "144€ - 180€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "96€ - 120€",
        "week": "384€ - 480€",
        "month": "1152€ - 1440€"
      },
      {
        "model": "Gama alta",
        "day": "144€ - 180€",
        "week": "576€ - 720€",
        "month": "1728€ - 2160€"
      }
    ],
    "relatedEquipment": [
      "miniexcavadora",
      "excavadora-de-cadenas",
      "deshumidificador"
    ],
    "faqKey": "bomba-neumatica"
  },
  {
    "id": "bomba-aguas-sucias",
    "name": "Bomba aguas sucias",
    "slug": "bomba-aguas-sucias",
    "minPrice": 58,
    "supplierCount": 5,
    "description": "Alquila bomba aguas sucias al mejor precio. Proveedores verificados.",
    "image": "/images/bomba-aguas-sucias.webp",
    "imageAlt": "Bomba de aguas sucias de alquiler para saneamiento and drenaje en obras",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de bomba aguas sucias en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "58€ - 73€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "87€ - 109€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "58€ - 73€",
        "week": "232€ - 290€",
        "month": "696€ - 870€"
      },
      {
        "model": "Gama alta",
        "day": "87€ - 109€",
        "week": "348€ - 435€",
        "month": "1044€ - 1305€"
      }
    ],
    "relatedEquipment": [
      "deposito-1000l",
      "fregasuelos-industrial",
      "borriqueta"
    ],
    "faqKey": "bomba-aguas-sucias"
  },
  {
    "id": "deposito-1000l",
    "name": "Depósito 1000L",
    "slug": "deposito-1000l",
    "minPrice": 57,
    "supplierCount": 10,
    "description": "Alquila depósito 1000l al mejor precio. Proveedores verificados.",
    "image": "/images/deposito-agua-1000l.webp",
    "imageAlt": "Depósito de agua de 1000 litros de alquiler para obras sin suministro fijo",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de depósito 1000l en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "57€ - 72€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "85€ - 106€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "57€ - 72€",
        "week": "228€ - 285€",
        "month": "684€ - 855€"
      },
      {
        "model": "Gama alta",
        "day": "85€ - 106€",
        "week": "342€ - 428€",
        "month": "1026€ - 1283€"
      }
    ],
    "relatedEquipment": [
      "minicargadora",
      "manipulador-telescopico",
      "vibrador-de-hormigon"
    ],
    "faqKey": "deposito-1000l"
  },
  {
    "id": "hidrolimpiadora-agua-fria",
    "name": "Hidrolimpiadora agua fría",
    "slug": "hidrolimpiadora-agua-fria",
    "minPrice": 93,
    "supplierCount": 8,
    "description": "Alquila hidrolimpiadora agua fría al mejor precio. Proveedores verificados.",
    "image": "/images/hidrolimpiadora-agua-fria.webp",
    "imageAlt": "Hidrolimpiadora de agua fría de alquiler para limpieza de obras and superficies",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de hidrolimpiadora agua fría en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "93€ - 116€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "139€ - 174€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "93€ - 116€",
        "week": "372€ - 465€",
        "month": "1116€ - 1395€"
      },
      {
        "model": "Gama alta",
        "day": "139€ - 174€",
        "week": "558€ - 698€",
        "month": "1674€ - 2093€"
      }
    ],
    "relatedEquipment": [
      "bandeja-vibrante",
      "carretilla-elevadora-industrial",
      "barredora-industrial"
    ],
    "faqKey": "hidrolimpiadora-agua-fria"
  },
  {
    "id": "hidrolimpiadora-agua-caliente",
    "name": "Hidrolimpiadora agua caliente",
    "slug": "hidrolimpiadora-agua-caliente",
    "minPrice": 42,
    "supplierCount": 7,
    "description": "Alquila hidrolimpiadora agua caliente al mejor precio. Proveedores verificados.",
    "image": "/images/hidrolimpiadora-agua-caliente.webp",
    "imageAlt": "Hidrolimpiadora de agua caliente de alquiler para desengrase and limpieza",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de hidrolimpiadora agua caliente en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "42€ - 57€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "63€ - 79€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "42€ - 57€",
        "week": "168€ - 210€",
        "month": "504€ - 630€"
      },
      {
        "model": "Gama alta",
        "day": "63€ - 79€",
        "week": "252€ - 315€",
        "month": "756€ - 945€"
      }
    ],
    "relatedEquipment": [
      "telescopica",
      "tronzadora",
      "garita-de-vigilancia"
    ],
    "faqKey": "hidrolimpiadora-agua-caliente"
  },
  {
    "id": "fregasuelos-industrial",
    "name": "Fregasuelos industrial",
    "slug": "fregasuelos-industrial",
    "minPrice": 31,
    "supplierCount": 14,
    "description": "Alquila fregasuelos industrial al mejor precio. Proveedores verificados.",
    "image": "/images/fregasuelos-industrial.webp",
    "imageAlt": "Alquiler de fregasuelos industrial al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de fregasuelos industrial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "31€ - 46€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "46€ - 61€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "31€ - 46€",
        "week": "124€ - 155€",
        "month": "372€ - 465€"
      },
      {
        "model": "Gama alta",
        "day": "46€ - 61€",
        "week": "186€ - 233€",
        "month": "558€ - 698€"
      }
    ],
    "relatedEquipment": [
      "barredora-industrial",
      "unipersonal",
      "canon-nebulizador"
    ],
    "faqKey": "fregasuelos-industrial"
  },
  {
    "id": "barredora-industrial",
    "name": "Barredora industrial",
    "slug": "barredora-industrial",
    "minPrice": 88,
    "supplierCount": 11,
    "description": "Alquila barredora industrial al mejor precio. Proveedores verificados.",
    "image": "/images/barredora-industrial.webp",
    "imageAlt": "Alquiler de barredora industrial al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de barredora industrial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "88€ - 110€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "132€ - 165€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "88€ - 110€",
        "week": "352€ - 440€",
        "month": "1056€ - 1320€"
      },
      {
        "model": "Gama alta",
        "day": "132€ - 165€",
        "week": "528€ - 660€",
        "month": "1584€ - 1980€"
      }
    ],
    "relatedEquipment": [
      "retroexcavadora-mixta",
      "contenedor-maritimo",
      "carretilla-elevadora-industrial"
    ],
    "faqKey": "barredora-industrial"
  },
  {
    "id": "aspirador-industrial",
    "name": "Aspirador industrial",
    "slug": "aspirador-industrial",
    "minPrice": 91,
    "supplierCount": 7,
    "description": "Alquila aspirador industrial al mejor precio. Proveedores verificados.",
    "image": "/images/aspirador-industrial.webp",
    "imageAlt": "Alquiler de aspirador industrial al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de aspirador industrial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "91€ - 114€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "136€ - 170€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "91€ - 114€",
        "week": "364€ - 455€",
        "month": "1092€ - 1365€"
      },
      {
        "model": "Gama alta",
        "day": "136€ - 170€",
        "week": "546€ - 683€",
        "month": "1638€ - 2048€"
      }
    ],
    "relatedEquipment": [
      "contenedor-escombros",
      "sobre-camion",
      "carretilla-elevadora-industrial"
    ],
    "faqKey": "aspirador-industrial"
  },
  {
    "id": "pistola-airless",
    "name": "Pistola airless",
    "slug": "pistola-airless",
    "minPrice": 92,
    "supplierCount": 14,
    "description": "Alquila pistola airless al mejor precio. Proveedores verificados.",
    "image": "/images/pistola-pintura-airless.webp",
    "imageAlt": "Alquiler de pistola airless al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de pistola airless en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "92€ - 115€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "138€ - 173€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "92€ - 115€",
        "week": "368€ - 460€",
        "month": "1104€ - 1380€"
      },
      {
        "model": "Gama alta",
        "day": "138€ - 173€",
        "week": "552€ - 690€",
        "month": "1656€ - 2070€"
      }
    ],
    "relatedEquipment": [
      "llave-de-impacto",
      "fresadora-de-madera",
      "lijadora-cuello-largo"
    ],
    "faqKey": "pistola-airless"
  },
  {
    "id": "equipo-de-proyeccion",
    "name": "Equipo de proyección",
    "slug": "equipo-de-proyeccion",
    "minPrice": 27,
    "supplierCount": 3,
    "description": "Alquila equipo de proyección al mejor precio. Proveedores verificados.",
    "image": "/images/equipo-proyeccion-mortero.webp",
    "imageAlt": "Alquiler de equipo de proyección al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de equipo de proyección en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "27€ - 42€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "40€ - 55€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "27€ - 42€",
        "week": "108€ - 135€",
        "month": "324€ - 405€"
      },
      {
        "model": "Gama alta",
        "day": "40€ - 55€",
        "week": "162€ - 203€",
        "month": "486€ - 608€"
      }
    ],
    "relatedEquipment": [
      "sierra-circular",
      "martillo-picador",
      "deposito-1000l"
    ],
    "faqKey": "equipo-de-proyeccion"
  },
  {
    "id": "batidora-de-pintura",
    "name": "Batidora de pintura",
    "slug": "batidora-de-pintura",
    "minPrice": 27,
    "supplierCount": 12,
    "description": "Alquila batidora de pintura al mejor precio. Proveedores verificados.",
    "image": "/images/batidora-pintura-mortero.webp",
    "imageAlt": "Alquiler de batidora de pintura al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de batidora de pintura en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "27€ - 42€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "40€ - 55€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "27€ - 42€",
        "week": "108€ - 135€",
        "month": "324€ - 405€"
      },
      {
        "model": "Gama alta",
        "day": "40€ - 55€",
        "week": "162€ - 203€",
        "month": "486€ - 608€"
      }
    ],
    "relatedEquipment": [
      "fratasadora",
      "pala-cargadora",
      "cortadora-de-pavimento"
    ],
    "faqKey": "batidora-de-pintura"
  },
  {
    "id": "motosierra",
    "name": "Motosierra",
    "slug": "motosierra",
    "minPrice": 78,
    "supplierCount": 7,
    "description": "Alquila motosierra al mejor precio. Proveedores verificados.",
    "image": "/images/motosierra-gasolina.webp",
    "imageAlt": "Alquiler de motosierra al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de motosierra en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "78€ - 98€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "117€ - 146€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "78€ - 98€",
        "week": "312€ - 390€",
        "month": "936€ - 1170€"
      },
      {
        "model": "Gama alta",
        "day": "117€ - 146€",
        "week": "468€ - 585€",
        "month": "1404€ - 1755€"
      }
    ],
    "relatedEquipment": [
      "bomba-de-hormigon",
      "bomba-de-achique",
      "equipo-de-proyeccion"
    ],
    "faqKey": "motosierra"
  },
  {
    "id": "desbrozadora",
    "name": "Desbrozadora",
    "slug": "desbrozadora",
    "minPrice": 35,
    "supplierCount": 5,
    "description": "Alquila desbrozadora al mejor precio. Proveedores verificados.",
    "image": "/images/desbrozadora.webp",
    "imageAlt": "Alquiler de desbrozadora al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de desbrozadora en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "35€ - 50€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "52€ - 67€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "35€ - 50€",
        "week": "140€ - 175€",
        "month": "420€ - 525€"
      },
      {
        "model": "Gama alta",
        "day": "52€ - 67€",
        "week": "210€ - 263€",
        "month": "630€ - 788€"
      }
    ],
    "relatedEquipment": [
      "triturador-de-ramas",
      "caseta-de-obra",
      "bomba-a-gasolina"
    ],
    "faqKey": "desbrozadora"
  },
  {
    "id": "cortasetos",
    "name": "Cortasetos",
    "slug": "cortasetos",
    "minPrice": 38,
    "supplierCount": 6,
    "description": "Alquila cortasetos al mejor precio. Proveedores verificados.",
    "image": "/images/cortasetos.webp",
    "imageAlt": "Alquiler de cortasetos al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de cortasetos en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "38€ - 53€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "57€ - 72€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "38€ - 53€",
        "week": "152€ - 190€",
        "month": "456€ - 570€"
      },
      {
        "model": "Gama alta",
        "day": "57€ - 72€",
        "week": "228€ - 285€",
        "month": "684€ - 855€"
      }
    ],
    "relatedEquipment": [
      "bomba-de-achique",
      "contenedor-escombros",
      "bomba-a-gasolina"
    ],
    "faqKey": "cortasetos"
  },
  {
    "id": "soplador",
    "name": "Soplador",
    "slug": "soplador",
    "minPrice": 26,
    "supplierCount": 10,
    "description": "Alquila soplador al mejor precio. Proveedores verificados.",
    "image": "/images/soplador-hojas.webp",
    "imageAlt": "Alquiler de soplador al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de soplador en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "26€ - 41€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "39€ - 54€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "26€ - 41€",
        "week": "104€ - 130€",
        "month": "312€ - 390€"
      },
      {
        "model": "Gama alta",
        "day": "39€ - 54€",
        "week": "156€ - 195€",
        "month": "468€ - 585€"
      }
    ],
    "relatedEquipment": [
      "bomba-neumatica",
      "fresadora-de-madera",
      "hidrolimpiadora-agua-caliente"
    ],
    "faqKey": "soplador"
  },
  {
    "id": "triturador-de-ramas",
    "name": "Triturador de ramas",
    "slug": "triturador-de-ramas",
    "minPrice": 91,
    "supplierCount": 4,
    "description": "Alquila triturador de ramas al mejor precio. Proveedores verificados.",
    "image": "/images/triturador-de-ramas.webp",
    "imageAlt": "Alquiler de triturador de ramas al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de triturador de ramas en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "91€ - 114€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "136€ - 170€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "91€ - 114€",
        "week": "364€ - 455€",
        "month": "1092€ - 1365€"
      },
      {
        "model": "Gama alta",
        "day": "136€ - 170€",
        "week": "546€ - 683€",
        "month": "1638€ - 2048€"
      }
    ],
    "relatedEquipment": [
      "bandeja-vibrante",
      "canon-nebulizador",
      "sobre-camion"
    ],
    "faqKey": "triturador-de-ramas"
  },
  {
    "id": "andamio-aluminio",
    "name": "Andamio aluminio",
    "slug": "andamio-aluminio",
    "minPrice": 83,
    "supplierCount": 14,
    "description": "Alquila andamio aluminio al mejor precio. Proveedores verificados.",
    "image": "/images/andamio-aluminio-ruedas.webp",
    "imageAlt": "Alquiler de andamio aluminio al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de andamio aluminio en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "83€ - 104€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "124€ - 155€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "83€ - 104€",
        "week": "332€ - 415€",
        "month": "996€ - 1245€"
      },
      {
        "model": "Gama alta",
        "day": "124€ - 155€",
        "week": "498€ - 623€",
        "month": "1494€ - 1868€"
      }
    ],
    "relatedEquipment": [
      "fresadora-de-madera",
      "grua-hidraulica",
      "rodillo-vibrante-de-suelo"
    ],
    "faqKey": "andamio-aluminio"
  },
  {
    "id": "andamio-tubular-fachada",
    "name": "Andamio tubular fachada",
    "slug": "andamio-tubular-fachada",
    "minPrice": 56,
    "supplierCount": 5,
    "description": "Alquila andamio tubular fachada al mejor precio. Proveedores verificados.",
    "image": "/images/andamio-tubular-fachada.webp",
    "imageAlt": "Alquiler de andamio tubular fachada al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de andamio tubular fachada en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "56€ - 71€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "84€ - 105€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "56€ - 71€",
        "week": "224€ - 280€",
        "month": "672€ - 840€"
      },
      {
        "model": "Gama alta",
        "day": "84€ - 105€",
        "week": "336€ - 420€",
        "month": "1008€ - 1260€"
      }
    ],
    "relatedEquipment": [
      "senalizacion-vial",
      "perforadora-de-hormigon",
      "maquinillo"
    ],
    "faqKey": "andamio-tubular-fachada"
  },
  {
    "id": "escalera-de-obra",
    "name": "Escalera de obra",
    "slug": "escalera-de-obra",
    "minPrice": 69,
    "supplierCount": 15,
    "description": "Alquila escalera de obra al mejor precio. Proveedores verificados.",
    "image": "/images/escalera-de-obra.webp",
    "imageAlt": "Alquiler de escalera de obra al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de escalera de obra en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "69€ - 86€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "103€ - 129€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "69€ - 86€",
        "week": "276€ - 345€",
        "month": "828€ - 1035€"
      },
      {
        "model": "Gama alta",
        "day": "103€ - 129€",
        "week": "414€ - 518€",
        "month": "1242€ - 1553€"
      }
    ],
    "relatedEquipment": [
      "articulada-electrica",
      "martillo-picador",
      "cortadora-de-azulejo"
    ],
    "faqKey": "escalera-de-obra"
  },
  {
    "id": "borriqueta",
    "name": "Borriqueta",
    "slug": "borriqueta",
    "minPrice": 93,
    "supplierCount": 15,
    "description": "Alquila borriqueta al mejor precio. Proveedores verificados.",
    "image": "/images/borriqueta-caballetes.webp",
    "imageAlt": "Alquiler de borriqueta al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de borriqueta en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "93€ - 116€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "139€ - 174€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "93€ - 116€",
        "week": "372€ - 465€",
        "month": "1116€ - 1395€"
      },
      {
        "model": "Gama alta",
        "day": "139€ - 174€",
        "week": "558€ - 698€",
        "month": "1674€ - 2093€"
      }
    ],
    "relatedEquipment": [
      "manipulador-telescopico",
      "maquinillo",
      "rodillo-tandem"
    ],
    "faqKey": "borriqueta"
  },
  {
    "id": "valla-de-obra",
    "name": "Valla de obra",
    "slug": "valla-de-obra",
    "minPrice": 60,
    "supplierCount": 11,
    "description": "Alquila valla de obra al mejor precio. Proveedores verificados.",
    "image": "/images/valla-de-obra-metalica.webp",
    "imageAlt": "Alquiler de valla de obra al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de valla de obra en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "60€ - 75€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "90€ - 113€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "60€ - 75€",
        "week": "240€ - 300€",
        "month": "720€ - 900€"
      },
      {
        "model": "Gama alta",
        "day": "90€ - 113€",
        "week": "360€ - 450€",
        "month": "1080€ - 1350€"
      }
    ],
    "relatedEquipment": [
      "barrera-new-jersey",
      "triturador-de-ramas",
      "canon-nebulizador"
    ],
    "faqKey": "valla-de-obra"
  },
  {
    "id": "barrera-new-jersey",
    "name": "Barrera New Jersey",
    "slug": "barrera-new-jersey",
    "minPrice": 20,
    "supplierCount": 13,
    "description": "Alquila barrera new jersey al mejor precio. Proveedores verificados.",
    "image": "/images/barrera-new-jersey.webp",
    "imageAlt": "Alquiler de barrera new jersey al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de barrera new jersey en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "20€ - 35€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "30€ - 45€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "20€ - 35€",
        "week": "80€ - 100€",
        "month": "240€ - 300€"
      },
      {
        "model": "Gama alta",
        "day": "30€ - 45€",
        "week": "120€ - 150€",
        "month": "360€ - 450€"
      }
    ],
    "relatedEquipment": [
      "dumper",
      "deshumidificador",
      "amoladora"
    ],
    "faqKey": "barrera-new-jersey"
  },
  {
    "id": "senalizacion-vial",
    "name": "Señalización vial",
    "slug": "senalizacion-vial",
    "minPrice": 97,
    "supplierCount": 6,
    "description": "Alquila señalización vial al mejor precio. Proveedores verificados.",
    "image": "/images/senalizacion-vial-obra.webp",
    "imageAlt": "Alquiler de señalización vial al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de señalización vial en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "97€ - 121€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "145€ - 181€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "97€ - 121€",
        "week": "388€ - 485€",
        "month": "1164€ - 1455€"
      },
      {
        "model": "Gama alta",
        "day": "145€ - 181€",
        "week": "582€ - 728€",
        "month": "1746€ - 2183€"
      }
    ],
    "relatedEquipment": [
      "miniexcavadora",
      "equipo-de-proyeccion",
      "retroexcavadora-mixta"
    ],
    "faqKey": "senalizacion-vial"
  },
  {
    "id": "contenedor-escombros",
    "name": "Contenedor escombros",
    "slug": "contenedor-escombros",
    "minPrice": 58,
    "supplierCount": 13,
    "description": "Alquila contenedor escombros al mejor precio. Proveedores verificados.",
    "image": "/images/contenedor-escombros.webp",
    "imageAlt": "Alquiler de contenedor escombros al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de contenedor escombros en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "58€ - 73€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "87€ - 109€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "58€ - 73€",
        "week": "232€ - 290€",
        "month": "696€ - 870€"
      },
      {
        "model": "Gama alta",
        "day": "87€ - 109€",
        "week": "348€ - 435€",
        "month": "1044€ - 1305€"
      }
    ],
    "relatedEquipment": [
      "canon-de-calor",
      "regla-vibrante",
      "andamio-aluminio"
    ],
    "faqKey": "contenedor-escombros"
  },
  {
    "id": "contenedor-maritimo",
    "name": "Contenedor marítimo",
    "slug": "contenedor-maritimo",
    "minPrice": 69,
    "supplierCount": 3,
    "description": "Alquila contenedor marítimo al mejor precio. Proveedores verificados.",
    "image": "/images/contenedor-maritimo-almacenaje.webp",
    "imageAlt": "Alquiler de contenedor marítimo al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de contenedor marítimo en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "69€ - 86€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "103€ - 129€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "69€ - 86€",
        "week": "276€ - 345€",
        "month": "828€ - 1035€"
      },
      {
        "model": "Gama alta",
        "day": "103€ - 129€",
        "week": "414€ - 518€",
        "month": "1242€ - 1553€"
      }
    ],
    "relatedEquipment": [
      "pala-cargadora",
      "vibrador-de-hormigon",
      "cortadora-de-azulejo"
    ],
    "faqKey": "contenedor-maritimo"
  },
  {
    "id": "caseta-de-obra",
    "name": "Caseta de obra",
    "slug": "caseta-de-obra",
    "minPrice": 71,
    "supplierCount": 5,
    "description": "Alquila caseta de obra al mejor precio. Proveedores verificados.",
    "image": "/images/caseta-de-obra-oficina.webp",
    "imageAlt": "Alquiler de caseta de obra al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de caseta de obra en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "71€ - 89€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "106€ - 133€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "71€ - 89€",
        "week": "284€ - 355€",
        "month": "852€ - 1065€"
      },
      {
        "model": "Gama alta",
        "day": "106€ - 133€",
        "week": "426€ - 533€",
        "month": "1278€ - 1598€"
      }
    ],
    "relatedEquipment": [
      "canon-nebulizador",
      "amoladora",
      "bomba-neumatica"
    ],
    "faqKey": "caseta-de-obra"
  },
  {
    "id": "modulo-vestuario",
    "name": "Módulo vestuario",
    "slug": "modulo-vestuario",
    "minPrice": 28,
    "supplierCount": 4,
    "description": "Alquila módulo vestuario al mejor precio. Proveedores verificados.",
    "image": "/images/modulo-vestuario-obra.webp",
    "imageAlt": "Alquiler de módulo vestuario al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de módulo vestuario en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "28€ - 43€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "42€ - 57€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "28€ - 43€",
        "week": "112€ - 140€",
        "month": "336€ - 420€"
      },
      {
        "model": "Gama alta",
        "day": "42€ - 57€",
        "week": "168€ - 210€",
        "month": "504€ - 630€"
      }
    ],
    "relatedEquipment": [
      "lijadora-cuello-largo",
      "apilador-electrico",
      "tijera-electrica"
    ],
    "faqKey": "modulo-vestuario"
  },
  {
    "id": "wc-portatil",
    "name": "WC portátil",
    "slug": "wc-portatil",
    "minPrice": 66,
    "supplierCount": 9,
    "description": "Alquila wc portátil al mejor precio. Proveedores verificados.",
    "image": "/images/wc-portatil-obra.webp",
    "imageAlt": "Alquiler de wc portátil al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de wc portátil en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "66€ - 83€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "99€ - 124€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "66€ - 83€",
        "week": "264€ - 330€",
        "month": "792€ - 990€"
      },
      {
        "model": "Gama alta",
        "day": "99€ - 124€",
        "week": "396€ - 495€",
        "month": "1188€ - 1485€"
      }
    ],
    "relatedEquipment": [
      "soplador",
      "fresadora-de-madera",
      "modulo-vestuario"
    ],
    "faqKey": "wc-portatil"
  },
  {
    "id": "modulo-sanitario",
    "name": "Módulo sanitario",
    "slug": "modulo-sanitario",
    "minPrice": 36,
    "supplierCount": 10,
    "description": "Alquila módulo sanitario al mejor precio. Proveedores verificados.",
    "image": "/images/modulo-sanitario.webp",
    "imageAlt": "Alquiler de módulo sanitario al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de módulo sanitario en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "36€ - 51€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "54€ - 69€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "36€ - 51€",
        "week": "144€ - 180€",
        "month": "432€ - 540€"
      },
      {
        "model": "Gama alta",
        "day": "54€ - 69€",
        "week": "216€ - 270€",
        "month": "648€ - 810€"
      }
    ],
    "relatedEquipment": [
      "batidora-de-pintura",
      "carretilla-4x4-obra",
      "tronzadora"
    ],
    "faqKey": "modulo-sanitario"
  },
  {
    "id": "garita-de-vigilancia",
    "name": "Garita de vigilancia",
    "slug": "garita-de-vigilancia",
    "minPrice": 82,
    "supplierCount": 4,
    "description": "Alquila garita de vigilancia al mejor precio. Proveedores verificados.",
    "image": "/images/garita-de-vigilancia.webp",
    "imageAlt": "Alquiler de garita de vigilancia al mejor precio.",
    "ogImage": "/images/og-default.webp",
    "ogImageAlt": "Plataforma de alquiler de garita de vigilancia en España",
    "types": [
      {
        "label": "Estándar",
        "useCase": "Uso general",
        "priceDay": "82€ - 103€",
        "default": true
      },
      {
        "label": "Profesional",
        "useCase": "Alto rendimiento",
        "priceDay": "123€ - 154€"
      }
    ],
    "pricingTable": [
      {
        "model": "Gama básica",
        "day": "82€ - 103€",
        "week": "328€ - 410€",
        "month": "984€ - 1230€"
      },
      {
        "model": "Gama alta",
        "day": "123€ - 154€",
        "week": "492€ - 615€",
        "month": "1476€ - 1845€"
      }
    ],
    "relatedEquipment": [
      "wc-portatil",
      "maquinillo",
      "torre-de-iluminacion-led"
    ],
    "faqKey": "garita-de-vigilancia"
  }
];

export interface FeaturedListing {
  id: number;
  name: string;
  specs: string;
  priceDay: number;
  priceWeek: number;
  location: string;
  badge: 'available' | 'high-demand' | 'unavailable' | 'consult';
  image: string;
  imageAlt: string;
  slug: string;
  city: string;
  rating: number;
  rentals: number;
}

export const FEATURED_LISTINGS: FeaturedListing[] = [
  {
    id: 1,
    name: 'Miniexcavadora 2–4T',
    specs: '3T · Diesel · 2022',
    priceDay: 140,
    priceWeek: 650,
    location: 'Málaga capital',
    badge: 'available',
    image: '/images/miniexcavadora.webp',
    imageAlt: 'Miniexcavadora compacta trabajando en obra urbana en Málaga',
    slug: 'miniexcavadora',
    city: 'malaga',
    rating: 4.9,
    rentals: 47,
  },
  {
    id: 2,
    name: 'Plataforma tijera eléctrica 12m',
    specs: '12m · Eléctrica · 2023',
    priceDay: 120,
    priceWeek: 550,
    location: 'Málaga capital',
    badge: 'high-demand',
    image: '/images/plataforma-tijera-electrica.webp',
    imageAlt: 'Plataforma elevadora de tijera eléctrica de alquiler para trabajos en altura',
    slug: 'tijera-electrica',
    city: 'malaga',
    rating: 4.8,
    rentals: 31,
  },
  {
    id: 3,
    name: 'Dumper descarga frontal 1.5T',
    specs: '1.5T · Gasolina · 2021',
    priceDay: 85,
    priceWeek: 390,
    location: 'Torremolinos',
    badge: 'available',
    image: '/images/dumper-obra.webp',
    imageAlt: 'Dumper de obra articulado de alquiler para transporte de materiales',
    slug: 'dumper',
    city: 'malaga',
    rating: 4.7,
    rentals: 23,
  },
];

export function getEquipmentBySlug(slug: string): EquipmentCategory | undefined {
  return EQUIPMENT_CATEGORIES.find((e) => e.slug === slug);
}
