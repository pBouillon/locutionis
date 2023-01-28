import { provideHttpClient } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, type Route } from '@angular/router'
import { AppComponent } from './app/app.component'
import { DefinitionComponent } from './app/pages/definition/definition.component'
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
    providers: [FigureOfSpeechService],
    children: [
      {
        path: '',
        component: GlossaryComponent
      },
      {
        path: ':name',
        component: DefinitionComponent
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), provideHttpClient()]
}).catch((err) => {
  console.error(err)
})
