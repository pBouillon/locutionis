/* eslint-disable @typescript-eslint/promise-function-async */
import { provideHttpClient } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, type Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { FigureOfSpeechService } from './app/features/glossary/services/figure-of-speech/figure-of-speech.service'
import { HomeComponent } from './app/features/home/pages/home/home.component'

const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'glossaire',
    providers: [FigureOfSpeechService],
    loadChildren: () => import('./app/features/glossary/routes').then(m => m.routes)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), provideHttpClient()]
}).catch((err) => {
  console.error(err)
})
