import { provideHttpClient } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, type Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { GlossaryComponent } from './app/pages/glossary/glossary.component'
import { HomeComponent } from './app/pages/home/home.component'
import { FigureOfSpeechService } from './app/services/figure-of-speech/figure-of-speech.service'

const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'glossaire',
    component: GlossaryComponent,
    providers: [FigureOfSpeechService]
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), provideHttpClient()]
}).catch((err) => {
  console.error(err)
})
