import { AsyncPipe, NgIf } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarBlockComponent, NavbarComponent } from './components/navigation'
import { DarkModeService } from './services/dark-mode/dark-mode.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterOutlet,
    NavbarComponent,
    NavbarBlockComponent,
    FooterComponent
  ],
  template: `
    <div class="flex min-h-screen flex-col dark:bg-gray-900">
      <app-navbar
        [links]="links"
        [isDarkModeEnabled]="(isDarkModeEnabled$ | async) ?? false"
        (burgerMenuClick)="showMobileNavbar = true"
        (toggleDarkMode)="toggleDarkMode()"
      />

      <app-navbar-block
        *ngIf="showMobileNavbar"
        [links]="links"
        (close)="showMobileNavbar = false"
        [isDarkModeEnabled]="(isDarkModeEnabled$ | async) ?? false"
        (toggleDarkMode)="toggleDarkMode()"
      />

      <main class="my-5 flex-grow px-5 pt-2">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `
})
export class AppComponent {
  private readonly _darkModeService = inject(DarkModeService)

  readonly isDarkModeEnabled$ = this._darkModeService.isDarkModeEnabled$

  showMobileNavbar = false

  readonly links = [
    { name: 'Accueil', navigateTo: '' },
    { name: 'Glossaire', navigateTo: 'glossaire' },
    { name: 'Quiz', navigateTo: 'quiz' },
    { name: 'GitHub', navigateTo: 'https://github.com/pbouillon/locutionis' }
  ]

  toggleDarkMode (): void {
    this._darkModeService.toggleDarkMode()
  }
}
