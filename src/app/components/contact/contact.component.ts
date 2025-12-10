import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  languageService = inject(LanguageService);
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  // Estados del envío
  isSubmitting = signal(false);
  isSuccess = signal(false);
  isError = signal(false);

  // Definición del Formulario
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    
    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    const url = 'https://formspree.io/f/xzznjzvl'; 

    this.http.post(url, formData).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.contactForm.reset();
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => this.isSuccess.set(false), 5000);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.isError.set(true);
        setTimeout(() => this.isError.set(false), 5000);
      }
    });
  }
}