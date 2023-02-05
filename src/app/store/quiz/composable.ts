import {
  inject,
  makeEnvironmentProviders,
  type EnvironmentProviders
} from '@angular/core'
import { provideEffects } from '@ngrx/effects'
import { provideState, Store } from '@ngrx/store'
import { QuizActions } from './actions'

import { answerSubmitted$, generateQuiz$ } from './effects'
import { quizFeature, selectQuizVueModel } from './reducer'

export function provideQuizFeature (): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(quizFeature),
    provideEffects({ answerSubmitted$, generateQuiz$ })
  ])
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectQuiz () {
  const store = inject(Store)

  return {
    generate: (questionsCount: number) => {
      store.dispatch(QuizActions.generateQuiz({ questionsCount }))
    },
    moveOntoNextQuestion: () => {
      store.dispatch(QuizActions.moveOntoNextQuestion())
    },
    restart: () => {
      store.dispatch(QuizActions.restartQuiz())
    },
    submitAnswer: (answer: string) => {
      store.dispatch(QuizActions.answerSubmitted({ answer }))
    },
    vm$: store.select(selectQuizVueModel)
  }
}
