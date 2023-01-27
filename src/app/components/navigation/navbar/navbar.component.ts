import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterModule, NavbarLinkComponent],
  template: `
    <nav class="flex items-baseline justify-between p-5">
      <div class="flex items-baseline gap-3">
        <a
          [routerLink]="['/']"
          class="bg-gradient-to-br from-indigo-600 to-sky-500 bg-clip-text text-2xl px-2 font-extrabold tracking-tighter text-transparent md:text-4xl"
        >
          <i class="bi bi-journal-text"></i>
          Locutionis
        </a>

        <p class="text-sky-500 hidden font-medium dark:text-slate-300 lg:block">
          Petit référentiel des figures de style
        </p>
      </div>

      <div class="hidden gap-5 md:flex">
        <app-navbar-link
          *ngFor="let link of links"
          [navigateTo]="link.navigateTo"
        >
          {{ link.name }}
        </app-navbar-link>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() links: Array<{ name: string, navigateTo: string }> = []
}
