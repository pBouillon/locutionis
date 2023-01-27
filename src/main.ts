import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, type Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { HomeComponent } from './app/pages/home/home.component'

const appRoutes: Route[] = [
  { path: '', component: HomeComponent }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
}).catch((err) => { console.error(err) })
