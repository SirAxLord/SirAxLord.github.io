import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'API' | 'WEB' | 'APP' | 'ENG';
  tags: string[]; 
  image?: string; 
  githubLink: string;
  demoLink?: string;
}

interface ProjectI18n {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: 'API' | 'WEB' | 'APP' | 'ENG';
  tags: string[];
  image?: string;
  githubLink: string;
  demoLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  languageService = inject(LanguageService);

  private baseProjects = signal<ProjectI18n[]>([
      {
      id: 1,
      title: { 
        es: 'Chatbot Académico (Rasa)', 
        en: 'Academic Chatbot (Rasa)' 
      },
      description: {
        es: 'Asistente virtual conteinerizado con Docker capaz de resolver dudas sobre el plan de estudios de Ingeniería. Utiliza NLU para procesamiento de lenguaje natural y acciones personalizadas en Python para consultas de datos estructurados.',
        en: 'Dockerized virtual assistant capable of resolving queries about the Engineering curriculum. Uses NLU for natural language processing and custom Python actions for structured data queries.'
      },
      category: 'APP',
      tags: ['Rasa', 'Python', 'Docker', 'NLP'],
      githubLink: 'https://github.com/SirAxLord/Chatbot',
    },
    {
      id: 2,
      title: { 
        es: 'API REST E-Commerce', 
        en: 'E-Commerce REST API' 
      },
      description: {
        es: 'Motor backend completo para comercio electrónico. Gestiona catálogos de productos y servicios con autenticación segura (Sanctum), control de roles (RBAC), filtros avanzados y documentación OpenAPI.',
        en: 'Complete backend engine for e-commerce. Manages product and service catalogs with secure authentication (Sanctum), Role-Based Access Control (RBAC), advanced filters, and OpenAPI documentation.'
      },
      category: 'API',
      tags: ['Laravel', 'Sanctum', 'MySQL', 'OpenAPI'],
      githubLink: 'https://github.com/SirAxLord/api-ventas-pc',
    },
    {
      id: 3,
      title: { 
        es: 'Cliente Web E-Commerce (Flux)', 
        en: 'E-Commerce Web Client (Flux)' 
      },
      description: {
        es: 'Frontend reactivo desarrollado con Laravel 12 y Livewire (Flux/Volt). Consume la API externa para gestionar ventas, inventario y usuarios. Incluye carrito de compras, facturación PDF (Dompdf), paneles administrativos y autenticación 2FA con Fortify.',
        en: 'Reactive frontend built with Laravel 12 and Livewire (Flux/Volt). Consumes the external API to manage sales, inventory, and users. Includes shopping cart, PDF invoicing (Dompdf), admin panels, and 2FA authentication using Fortify.'
      },
      category: 'WEB',
      tags: ['Laravel', 'Flux', 'Tailwind', 'Dompdf'],
      githubLink: 'https://github.com/SirAxLord/Ventas-PC',
    },
    {
      id: 4,
      title: { 
        es: 'API E-Commerce (Node.js)', 
        en: 'E-Commerce API (Node.js)' 
      },
      description: {
        es: 'Backend RESTful escalable construido con Express 5 y Mongoose. Gestiona autenticación segura mediante JWT, control de roles y operaciones CRUD sobre una base de datos NoSQL (MongoDB).',
        en: 'Scalable RESTful backend built with Express 5 and Mongoose. Manages secure authentication via JWT, role-based access control, and CRUD operations on a NoSQL database (MongoDB).'
      },
      category: 'API',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/SirAxLord/Server-Valenzos-PC',
    },
    {
      id: 5,
      title: { 
        es: 'Cliente E-Commerce (Angular 19)', 
        en: 'E-Commerce Client (Angular 19)' 
      },
      description: {
        es: 'Frontend de alto rendimiento construido con Angular 19 y Angular Material. Implementa Renderizado del Lado del Servidor (SSR) para optimización SEO, gestión de estado reactiva con RxJS, carrito de compras y paneles de administración protegidos.',
        en: 'High-performance frontend built with Angular 19 and Angular Material. Implements Server-Side Rendering (SSR) for SEO optimization, reactive state management with RxJS, shopping cart, and protected administrative panels.'
      },
      category: 'WEB',
      tags: ['Angular 19', 'SSR', 'Material', 'RxJS'],
      githubLink: 'https://github.com/SirAxLord/Ventas-PC-Front',
    },
    {
      id: 6,
      title: { 
        es: 'Sistema de Gestión de Cine', 
        en: 'Cinema Management System' 
      },
      description: {
        es: 'Plataforma administrativa para cadenas de cine construida con Laravel 12 y Livewire. Automatiza la gestión de sucursales, salas y funciones. Destaca por su módulo de importación masiva (Excel/CSV), generación de reportes PDF y notificaciones automáticas por correo.',
        en: 'Administrative platform for cinema chains built with Laravel 12 and Livewire. Automates the management of branches, theaters, and showtimes. Features bulk data import (Excel/CSV), PDF report generation, and automatic email notifications.'
      },
      category: 'WEB',
      tags: ['Laravel', 'Livewire', 'Excel Import', 'Dompdf'],
      githubLink: 'https://github.com/SirAxLord/Cine',
    },
    {
      id: 7,
      title: { 
        es: 'El Último Alquimista', 
        en: 'The Last Alchemist' 
      },
      description: {
        es: 'Videojuego de acción y plataformas desarrollado en Godot Engine. Implementa una arquitectura completa de estados de juego (menús, pausa, game over), sistema de selección de personajes, gestión de HUD/inventario en tiempo real y cinemáticas integradas.',
        en: 'Action-platformer game developed in Godot Engine. Implements a complete game state architecture (menus, pause, game over), character selection system, real-time HUD/inventory management, and integrated cinematics.'
      },
      category: 'APP',
      tags: ['Godot', 'GDScript', 'Game Dev'],
      githubLink: 'https://github.com/SirAxLord/ElUltimoAlquimista',
    },
    {
      id: 8,
      title: { 
        es: 'Juego de Lógica "Queen"', 
        en: '"Queen" Logic Puzzle Game' 
      },
      description: {
        es: 'Minijuego de estrategia desarrollado en Godot 4.3. El jugador debe colocar 9 coronas en un tablero 9x9 cumpliendo reglas estrictas de posicionamiento: una por fila, columna, región de color, y sin adyacencias (ortogonal o diagonal).',
        en: 'Strategy puzzle game developed in Godot 4.3. The player must place 9 crowns on a 9x9 board following strict positioning rules: one per row, column, color region, and no adjacency (orthogonal or diagonal).'
      },
      category: 'APP',
      tags: ['Godot', 'GDScript', 'Game Dev'],
      githubLink: 'https://github.com/SirAxLord/QueenVideogame',
    },
    {
      id: 9,
      title: { 
        es: 'Sistema de Biblioteca', 
        en: 'Library Management System' 
      },
      description: {
        es: 'Aplicación web para la gestión eficiente de recursos bibliotecarios. Controla el flujo completo de inventario de libros, administración de usuarios, registro de préstamos y procesamiento de devoluciones.',
        en: 'Web application for efficient library resource management. Controls the complete flow of book inventory, user administration, loan registration, and return processing.'
      },
      category: 'WEB',
      tags: ['Laravel', 'TailwindCSS', 'Vite'],
      githubLink: 'https://github.com/SirAxLord/Biblioteca',
    },
  ]);

  projects = computed<Project[]>(() => {
    const lang = this.languageService.currentLang();
    return this.baseProjects().map(p => ({
      id: p.id,
      title: p.title[lang],
      description: p.description[lang],
      category: p.category,
      tags: p.tags,
      image: p.image,
      githubLink: p.githubLink,
      demoLink: p.demoLink,
    }));
  });
}