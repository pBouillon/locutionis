import { type Route } from '@angular/router'
import { canActivateOngoingQuizGuard } from './guards/can-activate.ongoing-quiz.guard'
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
    component: QuizHomeComponent
  },
  {
    path: 'résultats',
    component: QuizResultComponent
  }
] as Route[]
