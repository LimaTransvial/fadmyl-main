import { HouseModel, TeamMember } from './types';

export const COMPANY_PHONE = "3835400199";
export const COMPANY_LOCATION = "Catamarca Capital, Argentina";
export const COMPANY_EMAIL = "fadmyl79@gmail.com";
export const SOCIAL_INSTAGRAM = "https://www.instagram.com/fadmyl79";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/FadmylHolding";

export const TEAM: TeamMember[] = [
  {
    name: "Esteban Colombo",
    role: "Gerente de Ventas",
    phone: "3835400199"
  },
  {
    name: "Mariano Paz",
    role: "Gerente de Importación y Logística",
    phone: "3518076847"
  }
];

export const MODELS: HouseModel[] = [
  {
    id: "expandible",
    name: "Modelo Contenedor Expandible",
    category: "Industrial",
    description: "Módulos reubicables ideales para campamentos, minería, agricultura u oficinas técnicas. Estructuras cómodas, aisladas y listas para habitar.",
    size: "Expandible",
    features: [
      "Compatible con paneles solares",
      "Instalación rápida en cualquier terreno nivelado",
      "Aislación térmica superior",
      "Opciones de mobiliario adicional"
    ],
    // New working image for Container Expandible (Solar/Wood accent style)
    imageUrl: "https://m.media-amazon.com/images/I/61XgMaxpTgL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: "plegable",
    name: "Modelo Tipo Plegable",
    category: "Industrial",
    description: "Diseño limpio y eficiencia total. Estructura inteligente que permite un montaje veloz y reducción de costos logísticos.",
    size: "14 m²",
    features: [
      "Disponible en Tipo C o Tipo Z",
      "Ideal para obradores y depósitos rápidos",
      "Alta durabilidad estructural",
      "Sistema de cierre hermético"
    ],
    // Updated image for Plegable (Clean white modular structure)
    imageUrl: "https://dacrico.com.ar/wp-content/uploads/2023/08/Modulo-1-e1693234128631-1024x707.jpeg"
  },
  {
    id: "dormis",
    name: "Dormis y Complejos",
    category: "Industrial",
    description: "Estructuras expandibles y reubicables, diseñadas para campamentos mineros o programas de vivienda rápida. Hasta 3 pisos apilables.",
    size: "Modular Apilable",
    features: [
      "Montaje en 48 hs",
      "Hasta 3 pisos apilables",
      "Mantenimiento mínimo",
      "Opción Full House con equipamiento completo"
    ],
    // Updated image for Dormis (Complex/Stacked units)
    imageUrl: "https://sc01.alicdn.com/kf/H6248dcdcdc824292a5b86a1a502bff1eo/240035625/H6248dcdcdc824292a5b86a1a502bff1eo.jpg"
  },
  {
    id: "cabañas",
    name: "Modelo Tipo Cabaña",
    category: "Residencial",
    description: "Diseño moderno con terminaciones premium. Una solución habitacional elegante y luminosa.",
    size: "12.5 m² y 25 m²",
    features: [
      "Grandes ventanales de vidrio",
      "Baño y cocina equipados",
      "Diseño minimalista",
      "Opción de 1 o 2 dormitorios"
    ],
    imageUrl: "https://dacrico.com.ar/wp-content/uploads/elementor/thumbs/modelo2-1-qbkz176rphguqoa60bby0zvfzn8t4wi4dxqsxnzt6w.jpg"
  },
  {
    id: "capsula",
    name: "Modelo Tipo Cápsula",
    category: "Turismo",
    description: "Vivienda móvil de lujo con diseño futurista. Ideal para glamping, turismo de alta gama o vivienda ejecutiva.",
    size: "28 m² y 38 m²",
    features: [
      "Diseño inteligente con confort premium",
      "Cocina integrada",
      "Opción de piso radiante",
      "Energía solar opcional"
    ],
    imageUrl: "https://s.alicdn.com/@sc04/kf/Hc025231ccb2042b180ad3a27ff1100dba.jpg?avif=close&webp=close"
  },
  {
    id: "domo",
    name: "Domos Premium",
    category: "Turismo",
    description: "Turismo premium en contacto directo con la naturaleza. Duerma bajo las estrellas con servicios tipo hotel.",
    size: "13.6 m² y 28 m²",
    features: [
      "Experiencia inmersiva 360°",
      "Alta eficiencia térmica",
      "Ideal para complejos turísticos",
      "Conexión con el entorno"
    ],
    imageUrl: "https://cdn.shopify.com/s/files/1/0868/6675/5862/files/mb_banner_one.png?v=1761879379"
  }
];

export const WAREHOUSE_CONTENT = {
  title: "Portafolio de Galpones Industriales",
  subtitle: "Construimos soluciones que mueven el futuro.",
  description: "FADMYL desarrolla y suministra productos que transforman la industria y mejoran la infraestructura. Medidas, forma y uso: vos decidís, nosotros lo hacemos realidad.",
  commitments: [
    {
      title: "Ingeniería y Resistencia",
      description: "Ingeniería certificada y materiales de alta resistencia garantizan durabilidad y seguridad en cada galpón.",
      icon: "engineering"
    },
    {
      title: "Montaje Rápido y Seguro",
      description: "Un proceso de montaje eficiente, seguro y adaptable a las características específicas de cualquier entorno.",
      icon: "assembly"
    },
    {
      title: "Cobertura Nacional",
      description: "Fabricamos con precisión en origen y enviamos a todo el país, llevando nuestras soluciones donde las necesites.",
      icon: "truck"
    }
  ],
  energyOptions: [
    {
      title: "Estándar / No apto",
      description: "Estructura convencional optimizada para conexión a red eléctrica tradicional.",
      highlight: false
    },
    {
      title: "Apta para Paneles Solares",
      description: "Estructura reforzada preparada para instalación futura de sistemas fotovoltaicos.",
      highlight: true
    },
    {
      title: "Con Paneles Solares",
      description: "Sistema de energía solar llave en mano con paneles, inversores y almacenamiento instalados y operativos.",
      highlight: true
    }
  ],
  wallTypes: [
    {
      title: "Sin Paredes",
      description: "Estructura abierta para maquinaria o zonas de carga. Máxima ventilación y fácil acceso."
    },
    {
      title: "Una Pared",
      description: "Cerramiento posterior que protege del viento y lluvia. Ideal para acopio o talleres."
    },
    {
      title: "Tres Paredes",
      description: "Diseño semicerrado con portones. Mayor seguridad y control del entorno."
    },
    {
      title: "Cuatro Paredes",
      description: "Cerrado, con dos puertas para almacenamiento protegido."
    }
  ],
  successCase: {
    location: "Catamarca, Argentina",
    title: "Caso de éxito: Galpón Solar Industrial",
    description: "Un galpón solar industrial de 20x40m con estructura reforzada y sistema fotovoltaico completo. Este proyecto garantiza autonomía energética.",
    highlight: "65% de ahorro comprobado en costos eléctricos.",
    imageUrl: "https://sc04.alicdn.com/kf/H9429599a407f42b79a61ce932a3e2fe6O.jpg"
  }
};

export const GALLERY_IMAGES = [
  {
    url: "https://s.alicdn.com/@sc04/kf/Hc0fc9f8bbc70407291df62460dafb375P.jpg?avif=close&webp=close",
    title: "Arquitectura Modular Premium",
    subtitle: "Diseños que se integran con el entorno"
  },
  {
    url: "https://gestionsindical.com/wp-content/uploads/2025/02/2-1.png",
    title: "Interiores Funcionales",
    subtitle: "Espacios luminosos y confortables"
  },
  {
    url: "https://www.xazent.com/upload/product/1687943137878807.jpg",
    title: "Infraestructura Industrial",
    subtitle: "Soluciones de gran escala y alta resistencia"
  },
  {
    url: "https://holihaus.com/assets/images/showroom4.jpg",
    title: "Complejos Turísticos",
    subtitle: "Experiencias únicas tipo Glamping"
  },
   {
    url: "https://www.parati.com.ar/wp-content/uploads/2025/10/03CASAS-CAPSULA-749x561.jpg.webp",
    title: "Complejos Turísticos",
    subtitle: "Experiencias únicas tipo Glamping full"
  },
  {
    url: "https://s.alicdn.com/@sc04/kf/H9a30f78bc6a1447c95f536afbecda7aaJ/Low-Cost-Iparwa-Prefab-Homes-for-Zambia-Prefab-Capsule-Floding-House-Mobile-Homes-House-2-Bedrooms-Mobile-House.jpg",
    title: "Sustentabilidad",
    subtitle: "Integración con energía solar"
  }
];