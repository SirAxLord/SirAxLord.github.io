import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ACHIEVEMENTS } from './achievements.data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  languageService = inject(LanguageService);

  private formatMonthYear(date: string, lang: 'es' | 'en'): string {
    // Espera 'YYYY-MM'
    const [yearStr, monthStr] = date.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr);

    if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
      return date;
    }

    const locale = lang === 'es' ? 'es' : 'en';
    const monthName = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
      new Date(year, month - 1, 1)
    );

    return `${monthName} ${year}`.toUpperCase();
  }

  private kindLabel(kind: string, lang: 'es' | 'en'): string {
    const labels = {
      es: {
        certification: 'Certificación',
        event: 'Evento',
        award: 'Logro',
        recognition: 'Reconocimiento',
        talk: 'Charla',
        other: 'Otro'
      },
      en: {
        certification: 'Certification',
        event: 'Event',
        award: 'Achievement',
        recognition: 'certificate of recognition',
        talk: 'Talk',
        other: 'Other'
      }
    } as const;

    const dictionary = labels[lang];
    return (dictionary as Record<string, string>)[kind] ?? kind;
  }

  kindBadgeClasses: Record<string, string> = {
    certification:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    event:
      'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
    award:
      'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    recognition:
      'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
    talk:
      'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
    other:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
  };

  achievements = computed(() => {
    const lang = this.languageService.currentLang();
    return ACHIEVEMENTS.map(item => ({
      id: item.id,
      date: item.date,
      dateLabel: this.formatMonthYear(item.date, lang),
      kind: item.kind,
      kindLabel: this.kindLabel(item.kind, lang),
      title: item.title[lang],
      org: item.org?.[lang],
      description: item.description[lang],
      image: item.image
    }));
  });
}
