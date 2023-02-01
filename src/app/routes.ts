import { type Route } from '@angular/router'
import { FigureOfSpeechService } from './features/glossary/services/figure-of-speech/figure-of-speech.service'
import { HomeComponent } from './features/home/pages/home/home.component'
import { QuizService } from './features/quiz/services/quiz/quiz.service'

/* eslint-disable @typescript-eslint/promise-function-async */
export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'glossaire',
    providers: [FigureOfSpeechService],
    loadChildren: () => import('./features/glossary/routes').then(m => m.routes)
  },
  {
    path: 'quiz',
    providers: [QuizService],
    loadChildren: () => import('./features/quiz/quiz').then(m => m.routes)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]
