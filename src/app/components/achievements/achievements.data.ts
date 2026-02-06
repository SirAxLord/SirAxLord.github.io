export type AchievementLang = 'es' | 'en';

export type AchievementKind =
  | 'certification'
  | 'event'
  | 'award'
  | 'recognition'
  | 'talk'
  | 'other';

export interface AchievementItem {
  id: number;
  date: string;
  kind: AchievementKind;
  title: Record<AchievementLang, string>;
  org?: Record<AchievementLang, string>;
  description: Record<AchievementLang, string>;
  image?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 1,
    date: '2020-08',
    kind: 'event',
    title: {
      es: 'Inicio de la carrera en Ingeniería en Sistemas Inteligentes',
      en: 'Started Intelligent Systems Engineering degree'
    },
    org: {
      es: 'Universidad Autónoma de San Luis Potosí (UASLP)',
      en: 'Universidad Autónoma de San Luis Potosí (UASLP)'
    },
    description: {
      es: 'Comencé mi formación universitaria enfocada en software, datos e ingeniería aplicada.',
      en: 'Began university training focused on software, data, and applied engineering.'
    },
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770360941/UASLP-logo_llkid4.webp'

  },
  {
    id: 2,
    date: '2024-12',
    kind: 'recognition',
    title: {
      es: 'Participación en Hackathon Magna',
      en: 'Participated in Magna Hackathon'
    },
    description: {
      es: 'Desarrollé soluciones innovadoras en un entorno colaborativo con enfoque en entrega rápida y trabajo en equipo.',
      en: 'Built innovative solutions in a collaborative environment, focused on fast delivery and teamwork.'
    },
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770361205/Hackathon_Magna-evento_rdjcxj.png'
  },
  {
    id: 3,
    date: '2025-10',
    kind: 'recognition',
    title: {
      es: 'Competencia Capture The Flag (CTF)',
      en: 'Capture The Flag (CTF) competition'
    },
    description: {
      es: 'Fortalecí habilidades en ciberseguridad y resolución de retos técnicos.',
      en: 'Strengthened cybersecurity skills and technical challenge-solving.'
    },
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770360916/CTF-evento_ps8i9j.png'
  },
  {
    id: 4,
    date: '2025-12',
    kind: 'event',
    title: {
      es: 'Finalización de estudios universitarios',
      en: 'Completed university coursework'
    },
    description: {
      es: 'Consolidé conocimientos en desarrollo de software, web, móvil, inteligencia artificial, ciberseguridad, redes y videojuegos.',
      en: 'Consolidated knowledge in software development, web, mobile, AI, cybersecurity, networks, and game development.'
    },
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770360941/UASLP-logo_llkid4.webp'    
  }
//   {
//     id: 5,
//     date: '2026-01',
//     kind: 'other',
//     title: {
//       es: 'Inicio de trayectoria profesional en tecnología',
//       en: 'Started professional path in tech'
//     },
//     description: {
//       es: 'Comencé a aplicar mis conocimientos en proyectos reales dentro del sector tecnológico.',
//       en: 'Started applying my skills in real-world projects within the tech sector.'
//     },
//     image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352320/angular-client_xnq3sj.png'
//   },
//   {
//     id: 6,
//     date: '2026-02',
//     kind: 'certification',
//     title: {
//       es: 'Certificación: Analista de Datos (Coursera)',
//       en: 'Certification: Data Analyst (Coursera)'
//     },
//     org: {
//       es: 'Coursera',
//       en: 'Coursera'
//     },
//     description: {
//       es: 'Certificación enfocada en fundamentos y práctica de análisis de datos.',
//       en: 'Certification focused on data analysis foundations and practice.'
//     },
//     image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352332/cine-1_uqksox.png'
//   },
//   {
//     id: 7,
//     date: '2026-08',
//     kind: 'award',
//     title: {
//       es: 'Obtención del título en Ingeniería en Sistemas Inteligentes',
//       en: 'Earned Intelligent Systems Engineering degree'
//     },
//     description: {
//       es: 'Cierre de la etapa académica e inicio formal de mi carrera profesional.',
//       en: 'Closed the academic stage and formally started my professional career.'
//     },
//     image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352312/alquimista-1_gholwc.png'
//   }
];
