import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { PROJECTS } from '../projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  languageService = inject(LanguageService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  project = computed(() => PROJECTS.find(p => p.id === this.id));

  mainImageError = signal(false);
  markMainImageError() { this.mainImageError.set(true); }

  categoryClasses: Record<'API' | 'WEB' | 'APP' | 'GAME', string> = {
    API: 'text-sky-700 dark:text-sky-300 border-sky-400 dark:border-sky-700 bg-sky-50/70 dark:bg-sky-900/30',
    WEB: 'text-emerald-700 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-900/30',
    APP: 'text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-400 dark:border-fuchsia-700 bg-fuchsia-50/70 dark:bg-fuchsia-900/30',
    GAME: 'text-violet-700 dark:text-violet-300 border-violet-400 dark:border-violet-700 bg-violet-50/70 dark:bg-violet-900/30',
  };
}
