import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  styles: [
    '.title { @apply text-2xl font-bold tracking-wide text-transparent md:text-4xl bg-clip-text bg-gradient-to-br from-indigo-600 to-sky-500 }',
  ],
  template: `
    <nav>
      <div class="flex items-baseline gap-3">
        <a href="/" class="title">
          <i class="bi bi-journal-text"></i>
          Locutionis
        </a>

        <p class="hidden font-medium tracking-tight lg:block text-primary">
          Petit référentiel de figures de style
        </p>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
