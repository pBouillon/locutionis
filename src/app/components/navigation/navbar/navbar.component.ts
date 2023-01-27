import { NgFor } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { type NavbarLink } from '../navbar-link/navbar-link'
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterModule, NavbarLinkComponent],
  template: `
    <nav class="flex items-baseline justify-between p-5">
      <!-- Title -->
      <div class="flex items-baseline gap-3">
        <a
          [routerLink]="['/']"
          class="bg-gradient-to-br from-indigo-600 to-sky-500 bg-clip-text px-2 text-2xl font-extrabold tracking-tighter text-transparent md:text-4xl"
        >
          <i class="bi bi-journal-text"></i>
          Locutionis
        </a>

        <p class="hidden font-medium text-sky-500 lg:block">
          Petit référentiel des figures de style
        </p>
      </div>

      <!-- Links -->
      <div class="hidden gap-5 md:flex">
        <app-navbar-link
          *ngFor="let link of links"
          [navigateTo]="link.navigateTo"
        >
          {{ link.name }}
        </app-navbar-link>
      </div>

      <!-- Navbar toggler -->
      <button
        type="button"
        class="focus:ring-primary/25 flex items-center justify-center rounded px-1 text-2xl text-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:text-slate-300 md:hidden"
        (click)="burgerMenuClicked.emit()"
      >
        <i class="bi bi-list"></i>
      </button>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  /**
   * The links to be displayed
   */
  @Input() links: NavbarLink[] = []

  /**
   * Emits whenever the burger menu icon is clicked
   */
  @Output() burgerMenuClicked = new EventEmitter<void>()
}
