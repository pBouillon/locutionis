import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { type Quiz } from 'src/app/features/quiz/models/quiz'
import { type Error } from 'src/app/models/error'

export const QuizActions = createActionGroup({
  source: 'Quiz',
  events: {
    'Generate Quiz': props<{ questionsCount: number }>(),
    'Generate Quiz Success': props<{ quiz: Quiz }>(),
    'Generate Quiz Failure': props<{ error: Error }>(),
    'Restart Quiz': emptyProps(),

    'Answer Submitted': props<{ answer: string }>(),
    'Valid Answer Submitted': emptyProps(),
    'Invalid Answer Submitted': emptyProps(),
    'Move Onto Next Question': emptyProps()
  }
})
