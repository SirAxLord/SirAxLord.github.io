import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  languageService = inject(LanguageService);
  
  darkMode = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  constructor() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.darkMode.update(val => !val);
    const html = document.querySelector('html');
    this.darkMode() ? html?.classList.add('dark') : html?.classList.remove('dark');
  }

  // Usamos el servicio para cambiar el idioma
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}