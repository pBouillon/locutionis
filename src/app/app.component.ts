import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './components/navigation'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="flex min-h-screen flex-col dark:bg-gray-900">
      <app-navbar [links]="links" />

      <main class="my-5 flex-grow px-5 pt-2">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {
  readonly links = [
    { name: 'Accueil', navigateTo: '' },
    { name: 'Glossaire', navigateTo: 'glossaire' },
    { name: 'GitHub', navigateTo: 'https://github.com/pbouillon/locutionis' }
  ]
}
