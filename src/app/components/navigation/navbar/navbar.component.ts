import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <div class="flex items-baseline gap-3">
        <a
          [routerLink]="['/']"
          class="bg-gradient-to-br from-indigo-600 to-sky-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent md:text-4xl"
        >
          <i class="bi bi-journal-text"></i>
          Locutionis
        </a>

        <p class="text-primary hidden font-medium tracking-tight lg:block">
          Petit référentiel de figures de style
        </p>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
