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

  mainImage = computed(() => {
    const p = this.project();
    if (!p) return undefined;
    if (p.image) return p.image;
    if (p.gallery && p.gallery.length > 0) return p.gallery[0];
    return undefined;
  });

  lightboxImages = computed(() => {
    const p = this.project();
    if (!p) return [] as string[];
    const imgs: string[] = [];
    if (p.image) imgs.push(p.image);
    if (p.gallery && p.gallery.length) imgs.push(...p.gallery);
    return imgs;
  });

  // Thumbnails (limit to 4 to avoid long pages)
  thumbnailImages = computed(() => {
    const p = this.project();
    if (!p || !p.gallery) return [] as string[];
    return p.gallery.slice(0, 4);
  });
  extraThumbCount = computed(() => {
    const p = this.project();
    if (!p || !p.gallery) return 0;
    const count = p.gallery.length - 4;
    return count > 0 ? count : 0;
  });

  // Zoom & Pan state
  scale = signal(1);
  translateX = signal(0);
  translateY = signal(0);
  isPanning = signal(false);
  private lastX = 0;
  private lastY = 0;
  private initialPinchDistance: number | null = null;

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const step = 0.15;
    const newScale = this.clamp(this.scale() - delta * step, 1, 4);
    this.scale.set(newScale);
    if (newScale === 1) {
      this.translateX.set(0);
      this.translateY.set(0);
    }
  }

  onMouseDown(event: MouseEvent) {
    if (this.scale() <= 1) return;
    this.isPanning.set(true);
    this.lastX = event.clientX - this.translateX();
    this.lastY = event.clientY - this.translateY();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isPanning()) return;
    const x = event.clientX - this.lastX;
    const y = event.clientY - this.lastY;
    this.translateX.set(this.clamp(x, -2000, 2000));
    this.translateY.set(this.clamp(y, -2000, 2000));
  }

  onMouseUp() {
    this.isPanning.set(false);
  }

  onMouseLeave() {
    this.isPanning.set(false);
  }

  onDblClick() {
    this.resetZoom();
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 2) {
      const d = this.getTouchDistance(event);
      this.initialPinchDistance = d;
    } else if (event.touches.length === 1 && this.scale() > 1) {
      const t = event.touches[0];
      this.isPanning.set(true);
      this.lastX = t.clientX - this.translateX();
      this.lastY = t.clientY - this.translateY();
    }
  }

  onTouchMove(event: TouchEvent) {
    if (event.touches.length === 2 && this.initialPinchDistance) {
      event.preventDefault();
      const d = this.getTouchDistance(event);
      const ratio = d / this.initialPinchDistance;
      const newScale = this.clamp(ratio, 1, 4);
      this.scale.set(newScale);
      if (newScale === 1) {
        this.translateX.set(0);
        this.translateY.set(0);
      }
    } else if (event.touches.length === 1 && this.isPanning()) {
      const t = event.touches[0];
      const x = t.clientX - this.lastX;
      const y = t.clientY - this.lastY;
      this.translateX.set(this.clamp(x, -2000, 2000));
      this.translateY.set(this.clamp(y, -2000, 2000));
    }
  }

  onTouchEnd() {
    this.isPanning.set(false);
    this.initialPinchDistance = null;
  }

  resetZoom() {
    this.scale.set(1);
    this.translateX.set(0);
    this.translateY.set(0);
  }

  private clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
  }

  private getTouchDistance(event: TouchEvent) {
    const [a, b] = [event.touches[0], event.touches[1]];
    const dx = a.clientX - b.clientX;
    const dy = a.clientY - b.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  categoryClasses: Record<'API' | 'WEB' | 'APP' | 'GAME', string> = {
    API: 'text-sky-700 dark:text-sky-300 border-sky-400 dark:border-sky-700 bg-sky-50/70 dark:bg-sky-900/30',
    WEB: 'text-emerald-700 dark:text-emerald-300 border-emerald-400 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-900/30',
    APP: 'text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-400 dark:border-fuchsia-700 bg-fuchsia-50/70 dark:bg-fuchsia-900/30',
    GAME: 'text-violet-700 dark:text-violet-300 border-violet-400 dark:border-violet-700 bg-violet-50/70 dark:bg-violet-900/30',
  };

  // Lightbox
  lightboxOpen = signal(false);
  currentIndex = signal(0);
  galleryLength = computed(() => this.lightboxImages().length);

  openLightbox(i: number) {
    if (this.galleryLength() > 0) {
      this.currentIndex.set(i);
      this.lightboxOpen.set(true);
    }
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  next() {
    const len = this.galleryLength();
    if (len > 0) {
      this.currentIndex.set((this.currentIndex() + 1) % len);
    }
  }

  prev() {
    const len = this.galleryLength();
    if (len > 0) {
      this.currentIndex.set((this.currentIndex() - 1 + len) % len);
    }
  }

  goTo(index: number) {
    const len = this.galleryLength();
    if (len > 0) {
      const clamped = Math.max(0, Math.min(index, len - 1));
      this.currentIndex.set(clamped);
    }
  }

  onKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') this.closeLightbox();
    else if (ev.key === 'ArrowRight') this.next();
    else if (ev.key === 'ArrowLeft') this.prev();
  }
}
