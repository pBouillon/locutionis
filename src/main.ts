import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, type Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { GlossaryComponent } from './app/pages/glossary/glossary.component'
import { HomeComponent } from './app/pages/home/home.component'

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'glossaire', component: GlossaryComponent }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
}).catch((err) => { console.error(err) })
