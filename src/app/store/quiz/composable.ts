import {
  inject,
  makeEnvironmentProviders,
  type EnvironmentProviders
} from '@angular/core'
import { provideEffects } from '@ngrx/effects'
import { provideState, Store } from '@ngrx/store'
import { QuizActions } from './actions'

import {
  answerSubmitted$,
  generateQuiz$,
  generateQuizSuccessRedirectToGame$,
  moveToResultsIfNoQuestionIsRemaining$,
  restartQuiz$
} from './effects'
import {
  quizFeature,
  selectQuizResultsViewModel,
  selectQuizVueModel
} from './reducer'

export function provideQuizFeature (): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(quizFeature),
    provideEffects({
      answerSubmitted$,
      generateQuiz$,
      generateQuizSuccessRedirectToGame$,
      moveToResultsIfNoQuestionIsRemaining$,
      restartQuiz$
    })
  ])
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectQuiz () {
  const store = inject(Store)

  return {
    moveOntoNextQuestion: () => {
      store.dispatch(QuizActions.moveOntoNextQuestion())
    },
    resetQuiz: () => {
      store.dispatch(QuizActions.resetQuiz())
    },
    submitAnswer: (answer: string) => {
      store.dispatch(QuizActions.answerSubmitted({ answer }))
    },
    vm$: store.select(selectQuizVueModel)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectGenerationFeature () {
  const store = inject(Store)

  return {
    generateQuiz: (questionsCount: number) => {
      store.dispatch(QuizActions.generateQuiz({ questionsCount }))
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectQuizResults () {
  const store = inject(Store)

  return {
    restart: () => {
      store.dispatch(QuizActions.restartQuiz())
    },
    vm$: store.select(selectQuizResultsViewModel)
  }
}
