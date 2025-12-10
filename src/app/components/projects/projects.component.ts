import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS, ProjectI18n } from './projects.data';
import { LanguageService } from '../../services/language.service';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'API' | 'WEB' | 'APP' | 'GAME';
  tags: string[]; 
  image?: string; 
  githubLink: string;
  demoLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  languageService = inject(LanguageService);
  imageError = signal<Record<number, boolean>>({});

  markImageError(id: number) {
    this.imageError.update((errs) => ({ ...errs, [id]: true }));
  }

  categoryClasses: Record<'API' | 'WEB' | 'APP' | 'GAME', string> = {
    API: 'text-sky-700 dark:text-sky-300 border-sky-400 dark:border-sky-700 bg-sky-50/70 dark:bg-sky-900/30',
    WEB: 'text-emerald-700 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-900/30',
    APP: 'text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-400 dark:border-fuchsia-700 bg-fuchsia-50/70 dark:bg-fuchsia-900/30',
    GAME: 'text-violet-700 dark:text-violet-300 border-violet-400 dark:border-violet-700 bg-violet-50/70 dark:bg-violet-900/30',
  };

  private baseProjects = signal<ProjectI18n[]>(PROJECTS);

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