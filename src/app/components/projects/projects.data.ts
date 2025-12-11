export type Category = 'API' | 'WEB' | 'APP' | 'GAME';

export interface ProjectI18n {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: Category;
  tags: string[];
  image?: string;
  githubLink: string;
  demoLink?: string;
  longDescription?: { es: string; en: string };
  gallery?: string[];
}

export const PROJECTS: ProjectI18n[] = [
  {
    id: 1,
    title: { es: 'Chatbot Académico (Rasa)', en: 'Academic Chatbot (Rasa)' },
    description: {
      es: 'Asistente virtual conteinerizado con Docker capaz de resolver dudas sobre el plan de estudios de Ingeniería. Utiliza NLU para procesamiento de lenguaje natural y acciones personalizadas en Python para consultas de datos estructurados.',
      en: 'Dockerized virtual assistant capable of resolving queries about the Engineering curriculum. Uses NLU for natural language processing and custom Python actions for structured data queries.'
    },
    // // longDescription: {
    //   es: 'Este proyecto consiste en un chatbot desarrollado con Rasa, diseñado para asistir a estudiantes de ingeniería con información sobre el plan de estudios, asignaturas y requisitos académicos. El chatbot está conteinerizado utilizando Docker, lo que facilita su despliegue y escalabilidad.\n\nEl sistema utiliza técnicas de procesamiento de lenguaje natural (NLU) para comprender las consultas de los usuarios y proporcionar respuestas precisas. Además, se implementan acciones personalizadas en Python que permiten al chatbot acceder a datos estructurados, como horarios de clases y descripciones de cursos, para ofrecer información detallada y relevante.',
    //   en: 'This project is a chatbot developed with Rasa, designed to assist engineering students with information about the curriculum, subjects, and academic requirements. The chatbot is containerized using Docker, which facilitates its deployment and scalability.\n\nThe system uses natural language processing (NLU) techniques to understand user queries and provide accurate responses. Additionally, custom actions in Python are implemented that allow the chatbot to access structured data, such as class schedules and course descriptions, to offer detailed and relevant information.'
    // },
    category: 'APP',
    tags: ['Rasa', 'Python', 'Docker', 'NLP'],
    githubLink: 'https://github.com/SirAxLord/Chatbot',
    image: '/assets/projects/rasa-chatbot.png',
    // gallery: ['/assets/projects/rasa-1.png', '/assets/projects/rasa-2.png']
  },
  {
    id: 2,
    title: { es: 'API REST E-Commerce', en: 'E-Commerce REST API' },
    description: {
      es: 'Motor backend completo para comercio electrónico. Gestiona catálogos de productos y servicios con autenticación segura (Sanctum), control de roles (RBAC), filtros avanzados y documentación OpenAPI.',
      en: 'Complete backend engine for e-commerce. Manages product and service catalogs with secure authentication (Sanctum), Role-Based Access Control (RBAC), advanced filters, and OpenAPI documentation.'
    },
    category: 'API',
    tags: ['Laravel', 'Sanctum', 'MySQL', 'OpenAPI'],
    githubLink: 'https://github.com/SirAxLord/api-ventas-pc',
    image: '/assets/projects/laravel-api.png',
    demoLink: 'https://api-ventas-pc-production-6b47.up.railway.app/'
  },
  {
    id: 3,
    title: { es: 'Cliente Web E-Commerce (Flux)', en: 'E-Commerce Web Client (Flux)' },
    description: {
      es: 'Frontend reactivo desarrollado con Laravel 12 y Livewire (Flux/Volt). Consume la API externa para gestionar ventas, inventario y usuarios. Incluye carrito de compras, facturación PDF (Dompdf), paneles administrativos y autenticación 2FA con Fortify.',
      en: 'Reactive frontend built with Laravel 12 and Livewire (Flux/Volt). Consumes the external API to manage sales, inventory, and users. Includes shopping cart, PDF invoicing (Dompdf), admin panels, and 2FA authentication using Fortify.'
    },
    category: 'WEB',
    tags: ['Laravel', 'Flux', 'Tailwind', 'Dompdf'],
    githubLink: 'https://github.com/SirAxLord/Ventas-PC',
    image: '/assets/projects/flux-client.png',
    demoLink: 'https://ventas-pc-production.up.railway.app/'
  },
  {
    id: 4,
    title: { es: 'API E-Commerce (Node.js)', en: 'E-Commerce API (Node.js)' },
    description: {
      es: 'Backend RESTful escalable construido con Express 5 y Mongoose. Gestiona autenticación segura mediante JWT, control de roles y operaciones CRUD sobre una base de datos NoSQL (MongoDB).',
      en: 'Scalable RESTful backend built with Express 5 and Mongoose. Manages secure authentication via JWT, role-based access control, and CRUD operations on a NoSQL database (MongoDB).'
    },
    longDescription: {
      es: 'Esta API de comercio electrónico está desarrollada utilizando Node.js con el framework Express 5, proporcionando una arquitectura escalable y eficiente para manejar solicitudes HTTP. La base de datos utilizada es MongoDB, gestionada a través de Mongoose, lo que permite una fácil manipulación de datos NoSQL.\n\nLa API implementa autenticación segura mediante JSON Web Tokens (JWT), asegurando que solo los usuarios autorizados puedan acceder a ciertos recursos. Además, cuenta con un sistema de control de roles que define diferentes niveles de acceso para administradores y usuarios regulares. Las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) están disponibles para gestionar productos, usuarios y pedidos dentro del sistema de comercio electrónico.',
      en: 'This e-commerce API is developed using Node.js with the Express 5 framework, providing a scalable and efficient architecture to handle HTTP requests. The database used is MongoDB, managed through Mongoose, allowing for easy manipulation of NoSQL data.\n\nThe API implements secure authentication using JSON Web Tokens (JWT), ensuring that only authorized users can access certain resources. Additionally, it features a role-based access control system that defines different access levels for administrators and regular users. CRUD (Create, Read, Update, Delete) operations are available to manage products, users, and orders within the e-commerce system.'
    },
    category: 'API',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/SirAxLord/Server-Valenzos-PC',
    image: '/assets/projects/node-api.png',
    gallery: [
      '/assets/projects/api-node-js/api-node-1.png', 
      '/assets/projects/api-node-js/api-node-2.png',
      '/assets/projects/api-node-js/api-node-3.png',
      '/assets/projects/api-node-js/api-node-4.png']
  },
  {
    id: 5,
    title: { es: 'Cliente E-Commerce (Angular 19)', en: 'E-Commerce Client (Angular 19)' },
    description: {
      es: 'Frontend de alto rendimiento construido con Angular 19 y Angular Material. Implementa SSR para SEO, gestión de estado con RxJS, carrito y paneles protegidos.',
      en: 'High-performance frontend built with Angular 19 and Angular Material. Implements SSR for SEO, state management with RxJS, cart and protected admin panels.'
    },
    longDescription: {
      es: 'Este proyecto es un cliente de comercio electrónico desarrollado con Angular 19, que ofrece una experiencia de usuario fluida y receptiva. Utiliza Angular Material para una interfaz moderna y atractiva, y aprovecha el renderizado del lado del servidor (SSR) para mejorar el SEO y los tiempos de carga iniciales.\n\nLa aplicación implementa la gestión de estado utilizando RxJS, lo que permite un manejo eficiente de datos reactivos en toda la aplicación. Incluye funcionalidades clave como un carrito de compras dinámico y paneles administrativos protegidos mediante autenticación, garantizando la seguridad y privacidad de los datos del usuario.',
      en: 'This project is an e-commerce client developed with Angular 19, providing a smooth and responsive user experience. It uses Angular Material for a modern and attractive interface, and leverages Server-Side Rendering (SSR) to enhance SEO and initial load times.\n\nThe application implements state management using RxJS, allowing for efficient handling of reactive data throughout the app. It includes key features such as a dynamic shopping cart and protected admin panels through authentication, ensuring user data security and privacy.'
    },
    category: 'WEB',
    tags: ['Angular 19', 'SSR', 'Material', 'RxJS'],
    githubLink: 'https://github.com/SirAxLord/Ventas-PC-Front',
    image: '/assets/projects/angular-client.png',
    // demoLink: 'https://siraxlord.github.io/Ventas-PC-Front/'
    gallery: [
      '/assets/projects/angular-client/angular-1.png',
      '/assets/projects/angular-client/angular-2.png',
      '/assets/projects/angular-client/angular-3.png',
      '/assets/projects/angular-client/angular-4.png',
      '/assets/projects/angular-client/angular-5.png',
      '/assets/projects/angular-client/angular-6.png'
    ]
  },
  {
    id: 6,
    title: { es: 'Sistema de Gestión de Cine', en: 'Cinema Management System' },
    description: {
      es: 'Plataforma administrativa para cadenas de cine construida con Laravel 12 y Livewire. Importación masiva (Excel/CSV), reportes PDF y notificaciones por correo.',
      en: 'Admin platform for cinema chains built with Laravel 12 and Livewire. Bulk import (Excel/CSV), PDF reports, and email notifications.'
    },
    category: 'WEB',
    tags: ['Laravel', 'Livewire', 'Excel Import', 'Dompdf'],
    githubLink: 'https://github.com/SirAxLord/Cine',
    image: '/assets/projects/cine-admin.jpg'
  },
  {
    id: 7,
    title: { es: 'El Último Alquimista', en: 'The Last Alchemist' },
    description: {
      es: 'Videojuego de acción y plataformas desarrollado en Godot Engine con arquitectura de estados, HUD e inventario.',
      en: 'Action-platformer game in Godot Engine with state architecture, HUD and inventory.'
    },
    category: 'GAME',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    githubLink: 'https://github.com/SirAxLord/ElUltimoAlquimista',
    image: '/assets/projects/godot-alchemist.jpg'
  },
  {
    id: 8,
    title: { es: 'Juego de Lógica "Queen"', en: '"Queen" Logic Puzzle Game' },
    description: {
      es: 'Minijuego de estrategia en Godot 4.3. Coloca 9 coronas en un tablero 9x9 cumpliendo reglas estrictas.',
      en: 'Strategy puzzle game in Godot 4.3. Place 9 crowns on a 9x9 board following strict rules.'
    },
    category: 'GAME',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    githubLink: 'https://github.com/SirAxLord/QueenVideogame',
    image: '/assets/projects/godot-queen.jpg'
  },
  {
    id: 9,
    title: { es: 'Sistema de Biblioteca', en: 'Library Management System' },
    description: {
      es: 'Aplicación web para la gestión de inventario, administración de usuarios, préstamos y devoluciones.',
      en: 'Web app for inventory management, user administration, loans and returns.'
    },
    category: 'WEB',
    tags: ['Laravel', 'TailwindCSS', 'Vite'],
    githubLink: 'https://github.com/SirAxLord/Biblioteca',
    image: '/assets/projects/library.jpg'
  }
];
