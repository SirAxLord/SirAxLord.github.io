import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  currentLang = signal<'es' | 'en'>('es');

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }

  // EL DICCIONARIO COMPLETO
  data = computed(() => {
    const lang = this.currentLang();
    
    if (lang === 'es') {
      return {
        nav: {
          about: 'Sobre Mí',
          projects: 'Proyectos',
          contact: 'Contacto'
        },
        hero: {
          status: 'Disponible para trabajar',
          role_prefix: 'Ingeniero en Sistemas Inteligentes',
          description_1: 'Ingeniería aplicada a la construcción de software',
          description_2: 'Me apasiona programar soluciones robustas, desde aplicaciones web complejas hasta la lógica de un videojuego.',
          btn_projects: 'Ver Proyectos',
          btn_contact: 'Contactar'
        },
        about: {
          title: 'Sobre Mí',
          p1: 'Como Ingeniero en Sistemas Inteligentes, mi enfoque no es solo escribir código, sino diseñar soluciones.',
          p2: 'Recién egresado y apasionado por la tecnología en todas sus formas. Mi curiosidad me ha llevado a trabajar en un espectro amplio: desde la lógica robusta del Backend hasta la interactividad del Frontend.',
          p3: 'Me considero un autodidacta por naturaleza. No me intimida aprender un nuevo lenguaje o framework si el proyecto lo requiere; mi mayor fortaleza es la capacidad de adaptarme y dominar nuevas herramientas tecnológicas con rapidez.',
          p4: 'Actualmente, estoy buscando mi primera gran oportunidad profesional donde pueda aplicar mi versatilidad y seguir especializándome.',
          btn_cv: 'Descargar CV / Resumé',
          skills_title: 'Tech Stack Actual',
          skill_mobile: 'Flutter',
          skill_mobile_desc: 'Apps multiplataforma'
        },
        projects: {
          title: 'Proyectos',
          btn_code: 'Ver Código',
          btn_more: 'Ver Todo en GitHub',
          empty: 'No hay proyectos para mostrar aún.'
        },
        contact: {
          title: 'Contacto Profesional',
          info_title: 'Información de Contacto',
          info_p: 'Actualmente estoy interesado en oportunidades laborales como Desarrollador Full Stack o Ingeniero de Software.',
          label_email: 'Correo Electrónico',
          label_linkedin: 'LinkedIn',
          label_location: 'Ubicación',
          location_val: 'San Luis Potosí, México',
          link_profile: 'Ver Perfil Profesional',
          form_title: 'Envíame un mensaje',
          input_name: 'Nombre Completo',
          input_email: 'Correo Electrónico',
          input_subject: 'Asunto',
          input_message: 'Mensaje',
          ph_name: 'Tu nombre',
          ph_email: 'nombre@empresa.com',
          ph_subject: 'Propuesta de Proyecto...',
          ph_message: 'Escribe tu mensaje aquí...',
          btn_send: 'Enviar Mensaje',
          sending: 'Enviando...',
          success_title: '¡Mensaje enviado!',
          success_desc: 'Gracias por contactarme, te responderé pronto.',
          error_title: 'Error:',
          error_desc: 'Hubo un problema al enviar. Por favor intenta por LinkedIn o correo directo.',
          sys_connection_label: 'System.Connection:',
          sys_connection_value: 'Secure'
        },
        footer: {
          designed: 'Diseñado & Construido por',
          rights: 'Todos los derechos reservados.'
        }
      };
    } 
    
    // VERSIÓN EN INGLÉS
    else {
      return {
        nav: {
          about: 'About Me',
          projects: 'Projects',
          contact: 'Contact'
        },
        hero: {
          status: 'Available for work',
          role_prefix: 'Intelligent Systems Engineer',
          description_1: 'Engineering applied to software construction.',
          description_2: 'I am passionate about programming robust solutions, from complex web applications to game logic.',
          btn_projects: 'View Projects',
          btn_contact: 'Get in Touch'
        },
        about: {
          title: 'About Me',
          p1_strong: 'Erik Axel',
          p1: 'As an Intelligent Systems Engineer, my focus is not just writing code, but designing solutions.',
          p2: 'Recently graduated and passionate about technology in all its forms. My curiosity has led me to work across a broad spectrum: from robust Backend logic to Frontend interactivity.',
          p3: 'I consider myself a self-taught person by nature. I am not intimidated by learning a new language or framework if the project requires it; my greatest strength is the ability to adapt and master new technological tools quickly.',
          p4: 'Currently, I am looking for my first major professional opportunity where I can apply my versatility and continue specializing.',
          btn_cv: 'Download CV / Resume',
          skills_title: 'Current Tech Stack',
          skill_mobile: 'Flutter',
          skill_mobile_desc: 'Cross-platform Apps'
        },
        projects: {
          title: 'Projects',
          btn_code: 'View Code',
          btn_more: 'View All on GitHub',
          empty: 'No projects to show yet.'
        },
        contact: {
          title: 'Professional Contact',
          info_title: 'Contact Information',
          info_p: 'I am currently interested in job opportunities as a Full Stack Developer or Software Engineer.',
          label_email: 'Email Address',
          label_linkedin: 'LinkedIn',
          label_location: 'Location',
          location_val: 'San Luis Potosí, Mexico',
          link_profile: 'View Professional Profile',
          form_title: 'Send me a message',
          input_name: 'Full Name',
          input_email: 'Email Address',
          input_subject: 'Subject',
          input_message: 'Message',
          ph_name: 'Your name',
          ph_email: 'name@company.com',
          ph_subject: 'Project proposal...',
          ph_message: 'Type your message here...',
          btn_send: 'Send Message',
          sending: 'Sending...',
          success_title: 'Message sent!',
          success_desc: 'Thanks for reaching out, I will respond soon.',
          error_title: 'Error:',
          error_desc: 'There was a problem sending. Please try via LinkedIn or direct email.',
          sys_connection_label: 'System.Connection:',
          sys_connection_value: 'Secure'
        },
        footer: {
          designed: 'Designed & Built by',
          rights: 'All rights reserved.'
        }
      };
    }
  });
}