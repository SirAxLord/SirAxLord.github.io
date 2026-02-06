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
    longDescription: {
      es: 'Este proyecto consiste en un chatbot desarrollado con Rasa, diseñado para asistir a estudiantes de ingeniería con información sobre el plan de estudios, asignaturas y requisitos académicos. El chatbot está conteinerizado utilizando Docker, lo que facilita su despliegue y escalabilidad.\n\nEl sistema utiliza técnicas de procesamiento de lenguaje natural (NLU) para comprender las consultas de los usuarios y proporcionar respuestas precisas. Además, se implementan acciones personalizadas en Python que permiten al chatbot acceder a datos estructurados, como horarios de clases y descripciones de cursos, para ofrecer información detallada y relevante.',
      en: 'This project is a chatbot developed with Rasa, designed to assist engineering students with information about the curriculum, subjects, and academic requirements. The chatbot is containerized using Docker, which facilitates its deployment and scalability.\n\nThe system uses natural language processing (NLU) techniques to understand user queries and provide accurate responses. Additionally, custom actions in Python are implemented that allow the chatbot to access structured data, such as class schedules and course descriptions, to offer detailed and relevant information.'
    },
    category: 'APP',
    tags: ['Rasa', 'Python', 'Docker', 'NLP'],
    githubLink: 'https://github.com/SirAxLord/Chatbot',
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352331/chatbot_tss1vf.png',
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352327/chatbot-1_lkdndm.png', 
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352328/chatbot-2_i0bbpp.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352329/chatbot-3_lfj5xr.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352329/chatbot-4_ct4omw.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352330/chatbot-5_ey1nwi.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352331/chatbot-6_gmu2vn.png']
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
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352327/api-ventas-laravel_oyxedi.png',
    // demoLink: 'https://api-ventas-pc-production-6b47.up.railway.app/,'
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352324/api-ventas-laravel-1_hlnlko.png', 
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352325/api-ventas-laravel-2_odowql.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352325/api-ventas-laravel-3_x3n8iw.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352326/api-ventas-laravel-4_ylv23s.png']
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
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352367/ventas-front-laravel_ylzjhf.png',
    // demoLink: 'https://ventas-pc-production.up.railway.app/,'
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352353/ventas-front-laravel-1_dty4qp.png', 
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352359/ventas-front-laravel-2_io9poq.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352362/ventas-front-laravel-3_saxdfk.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352363/ventas-front-laravel-4_giz2ps.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352364/ventas-front-laravel-5_ugnngz.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352364/ventas-front-laravel-6_enoglv.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352365/ventas-front-laravel-7_c7gtga.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352365/ventas-front-laravel-8_jfnw7j.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352366/ventas-front-laravel-9_jsuqvq.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352353/ventas-front-laravel-10_wlcfky.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352354/ventas-front-laravel-11_irsh54.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352355/ventas-front-laravel-12_daks9i.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352355/ventas-front-laravel-13_a0doiu.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352356/ventas-front-laravel-14_rpwyjc.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352356/ventas-front-laravel-15_iodjp4.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352357/ventas-front-laravel-16_fj9dzc.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352357/ventas-front-laravel-17_ldy49u.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352358/ventas-front-laravel-18_yp7y36.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352359/ventas-front-laravel-19_ekhn43.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352360/ventas-front-laravel-20_eo3rsa.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352360/ventas-front-laravel-21_urgfns.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352361/ventas-front-laravel-22_no3ykr.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352361/ventas-front-laravel-23_e8jobv.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352362/ventas-front-laravel-24_thiqy8.png']
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
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352323/api-node-js_enb7gj.png',
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352320/api-node-1_mboldj.png', 
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352321/api-node-2_hhybog.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352322/api-node-3_ppqxj3.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352322/api-node-4_viprxl.png']
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
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352320/angular-client_xnq3sj.png',
    // demoLink: 'https://siraxlord.github.io/Ventas-PC-Front/'
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352315/angular-1_ofd5se.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352316/angular-2_vfdov5.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352317/angular-3_pi4be0.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352317/angular-4_ozhzey.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352318/angular-5_wrobv6.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352319/angular-6_pponzp.png'
    ]
  },
  {
    id: 6,
    title: { es: 'Sistema de Gestión de Cine', en: 'Cinema Management System' },
    description: {
      es: 'Plataforma administrativa para cadenas de cine construida con Laravel 12 y Livewire. Importación masiva (Excel/CSV), reportes PDF y notificaciones por correo.',
      en: 'Admin platform for cinema chains built with Laravel 12 and Livewire. Bulk import (Excel/CSV), PDF reports, and email notifications.'
    },
    longDescription: {
      es: 'El Sistema de Gestión de Cine es una plataforma administrativa desarrollada con Laravel 12 y Livewire, diseñada para facilitar la administración de cadenas de cines. La aplicación permite la importación masiva de datos mediante archivos Excel o CSV, lo que agiliza la carga de información sobre películas, horarios y salas.\n\nAdemás, el sistema genera reportes en formato PDF para un análisis detallado de las operaciones del cine, incluyendo ventas y asistencia. También cuenta con un sistema de notificaciones por correo electrónico para mantener informados a los administradores sobre eventos importantes, como actualizaciones de inventario o cambios en la programación.',
      en: 'The Cinema Management System is an administrative platform developed with Laravel 12 and Livewire, designed to facilitate the management of cinema chains. The application allows for bulk data import using Excel or CSV files, streamlining the loading of information about movies, schedules, and theaters.\n\nAdditionally, the system generates reports in PDF format for detailed analysis of cinema operations, including sales and attendance. It also features an email notification system to keep administrators informed about important events, such as inventory updates or schedule changes.'
    },
    category: 'WEB',
    tags: ['Laravel', 'Livewire', 'Excel Import', 'Dompdf'],
    githubLink: 'https://github.com/SirAxLord/Cine',
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352332/cine-1_uqksox.png',
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352337/cine-2_rsbj7u.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352337/cine-3_q89qfu.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352338/cine-4_qvh7af.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352338/cine-5_flfgvn.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352339/cine-6_pisxt2.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352339/cine-7_otmogf.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352340/cine-8_bismlq.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352341/cine-9_tavy5z.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352332/cine-10_fbeiup.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352333/cine-11_faamxw.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352334/cine-12_g7qlej.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352334/cine-13_zmaz0b.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352335/cine-14_ysivo7.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352335/cine-15_mnmnyh.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352336/cine-16_gdtkta.png'
    ]
  },
  {
    id: 7,
    title: { es: 'El Último Alquimista (Beta)', en: 'The Last Alchemist (Beta)' },
    description: {
      es: 'Videojuego de acción y plataformas desarrollado en Godot Engine con arquitectura de estados, HUD e inventario.',
      en: 'Action-platformer game in Godot Engine with state architecture, HUD and inventory.'
    },
    longDescription: {
      es: 'El Último Alquimista es un videojuego de acción y plataformas desarrollado utilizando Godot Engine. El juego presenta una arquitectura de estados que permite una gestión eficiente de las diferentes fases del juego, como menús, niveles y pantallas de pausa.\n\nEl jugador asume el papel de un alquimista que debe navegar a través de diversos niveles llenos de desafíos y enemigos. El juego cuenta con un HUD (Heads-Up Display) que proporciona información vital al jugador, como salud, inventario y objetivos. Además, el sistema de inventario permite al jugador recoger y utilizar diversos objetos y recursos para avanzar en su aventura.',
      en: 'The Last Alchemist is an action-platformer game developed using Godot Engine. The game features a state architecture that allows for efficient management of different game phases, such as menus, levels, and pause screens.\n\nThe player takes on the role of an alchemist who must navigate through various levels filled with challenges and enemies. The game includes a HUD (Heads-Up Display) that provides vital information to the player, such as health, inventory, and objectives. Additionally, the inventory system allows the player to collect and use various items and resources to progress in their adventure.'
    },
    category: 'GAME',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    githubLink: 'https://github.com/SirAxLord/ElUltimoAlquimista',
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352312/alquimista-1_gholwc.png',
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352312/alquimista-2_t3srtj.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352312/alquimista-3_mliopl.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352313/alquimista-4_ncymqs.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352313/alquimista-5_k0urvt.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352314/alquimista-6_xmpyuy.png'
    ]
  },
  {
    id: 8,
    title: { es: 'Juego de Lógica "Queen"', en: '"Queen" Logic Puzzle Game' },
    description: {
      es: 'Minijuego de estrategia en Godot 4.3. Coloca 9 coronas en un tablero 9x9 cumpliendo reglas estrictas.',
      en: 'Strategy puzzle game in Godot 4.3. Place 9 crowns on a 9x9 board following strict rules.'
    },
    longDescription: {
      es: 'El juego de lógica "Queen" es un minijuego desarrollado en Godot 4.3 que desafía a los jugadores a colocar 9 coronas en un tablero de 9x9 casillas. El objetivo es cumplir con una serie de reglas estrictas que limitan la colocación de las coronas, lo que requiere pensamiento estratégico y habilidades de resolución de problemas.\n\nLos jugadores deben asegurarse de que ninguna corona pueda atacar a otra, lo que implica que no pueden compartir la misma fila, columna o diagonal. Este desafío clásico pone a prueba la capacidad del jugador para planificar y anticipar movimientos futuros, ofreciendo una experiencia de juego envolvente y estimulante.',
      en: 'The "Queen" logic puzzle game is a mini-game developed in Godot 4.3 that challenges players to place 9 crowns on a 9x9 board. The objective is to adhere to a set of strict rules that limit the placement of the crowns, requiring strategic thinking and problem-solving skills.\n\nPlayers must ensure that no crown can attack another, meaning they cannot share the same row, column, or diagonal. This classic challenge tests the player\'s ability to plan and anticipate future moves, providing an engaging and stimulating gaming experience.'
    },
    category: 'GAME',
    tags: ['Godot', 'GDScript', 'Game Dev'],
    githubLink: 'https://github.com/SirAxLord/QueenVideogame',
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352352/Queens_hwd1yb.png', 
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352347/Queens-1_woyler.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352348/Queens-2_szvwsb.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352348/Queens-3_jzxqv8.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352349/Queens-4_gklvrh.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352350/Queens-5_vtd4dj.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352350/Queens-6_ntslag.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352351/Queens-7_cwkcfc.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352351/Queens-8_xo1olb.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352352/Queens-9_kdvpuv.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352347/Queens-10_rfdcxb.png'
    ]
  },
  {
    id: 9,
    title: { es: 'Sistema de Biblioteca', en: 'Library Management System' },
    description: {
      es: 'Aplicación web para la gestión de inventario, administración de usuarios, préstamos y devoluciones.',
      en: 'Web app for inventory management, user administration, loans and returns.'
    },
    longDescription: {
      es: 'El Sistema de Biblioteca es una aplicación web desarrollada para facilitar la gestión integral de una biblioteca. La plataforma permite administrar el inventario de libros, gestionar usuarios, y controlar los préstamos y devoluciones de materiales bibliográficos.\n\nCon una interfaz intuitiva, los administradores pueden agregar, editar y eliminar registros de libros, así como supervisar el estado de los préstamos. Los usuarios pueden registrarse, buscar libros disponibles y realizar solicitudes de préstamo en línea, mejorando la eficiencia operativa de la biblioteca.',
      en: 'The Library Management System is a web application developed to facilitate the comprehensive management of a library. The platform allows for the administration of book inventory, user management, and control of loans and returns of bibliographic materials.\n\nWith an intuitive interface, administrators can add, edit, and delete book records, as well as monitor the status of loans. Users can register, search for available books, and make loan requests online, enhancing the operational efficiency of the library.'
    },
    category: 'WEB',
    tags: ['Laravel', 'TailwindCSS', 'Vite'],
    githubLink: 'https://github.com/SirAxLord/Biblioteca',
    image: 'https://res.cloudinary.com/djump6tb3/image/upload/v1770352346/libreria_wehqcu.png',
    gallery: [
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352341/libreria-1_f06rpx.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352342/libreria-2_gqher7.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352342/libreria-3_lhfdkq.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352343/libreria-4_rvrgwv.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352344/libreria-5_rnn2xm.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352344/libreria-6_gvqx4k.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352345/libreria-7_wsiwzh.png',
      'https://res.cloudinary.com/djump6tb3/image/upload/v1770352345/libreria-8_cw7k3b.png'
    ]
  }
];
