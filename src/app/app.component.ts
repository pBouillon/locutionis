import { AsyncPipe, NgIf } from '@angular/common'
import { Component, type OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { FooterComponent } from './components/footer/footer.component'
import { NavbarBlockComponent, NavbarComponent } from './components/navigation'
import { injectTheme } from './store/theme'

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
    <div *ngIf="vm$ | async as vm" class="flex min-h-screen flex-col dark:bg-gray-900">
      <app-navbar
        [links]="links"
        [isDarkModeEnabled]="vm.isDarkModeEnabled"
        (burgerMenuClick)="showMobileNavbar = true"
        (toggleDarkMode)="toggleDarkMode()"
      />

      <app-navbar-block
        *ngIf="showMobileNavbar"
        [links]="links"
        (close)="showMobileNavbar = false"
        [isDarkModeEnabled]="vm.isDarkModeEnabled"
        (toggleDarkMode)="toggleDarkMode()"
      />

      <main class="my-5 flex-grow px-5 pt-2">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `
})
export class AppComponent implements OnInit {
  private readonly _themeFeature = injectTheme()
  readonly vm$ = this._themeFeature.vm$

  showMobileNavbar = false

  readonly links = [
    { name: 'Accueil', navigateTo: '' },
    { name: 'Glossaire', navigateTo: 'glossaire' },
    { name: 'Quiz', navigateTo: 'quiz' },
    { name: 'GitHub', navigateTo: 'https://github.com/pbouillon/locutionis' }
  ]

  ngOnInit (): void {
    this._themeFeature.initialize()
  }

  toggleDarkMode (): void {
    this._themeFeature.toggle()
  }
}
