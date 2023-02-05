import { type Route } from '@angular/router'
import { HomeComponent } from './features/home/pages/home/home.component'
import { QuizService } from './features/quiz/services/quiz/quiz.service'
import { provideFiguresOfSpeechFeature } from './store/figures-of-speech'

/* eslint-disable @typescript-eslint/promise-function-async */
export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'glossaire',
    providers: [provideFiguresOfSpeechFeature()],
    loadChildren: () => import('./features/glossary/routes').then(m => m.routes)
  },
  {
    path: 'quiz',
    providers: [QuizService],
    loadChildren: () => import('./features/quiz/quiz').then(m => m.routes)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]
