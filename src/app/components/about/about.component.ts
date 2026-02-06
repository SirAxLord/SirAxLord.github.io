import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  languageService = inject(LanguageService);

  cvFileName = computed(() =>
    this.languageService.currentLang() === 'en'
      ? 'CV_Erik_Axel_Loredo_Lopez_EN.pdf'
      : 'CV_Erik_Axel_Loredo_Lopez.pdf'
  );

  cvHref = computed(() => `/${this.cvFileName()}`);
}
