import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './components/navigation'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar [links]="links"></app-navbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  readonly links = [
    { name: 'Accueil', navigateTo: '' },
    { name: 'Glossaire', navigateTo: 'glossaire' },
    { name: 'GitHub', navigateTo: 'https://github.com/pbouillon/locutionis' }
  ]
}
