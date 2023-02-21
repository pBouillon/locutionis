import { type Route } from '@angular/router'

import { canActivateFinishedQuizGuard, canActivateOngoingQuizGuard } from './guards'
import { QuizGenerationComponent } from './pages/quiz-generation/quiz-generation.component'
import { QuizHomeComponent } from './pages/quiz-home/quiz-home.component'
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component'

export default [
  {
    path: '',
    canActivate: [canActivateOngoingQuizGuard],
    component: QuizHomeComponent
  },
  {
    path: 'nouveau',
    component: QuizGenerationComponent
  },
  {
    path: 'résultats',
    canActivate: [canActivateFinishedQuizGuard],
    component: QuizResultComponent
  }
] as Route[]
