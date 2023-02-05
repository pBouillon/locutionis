import { inject, makeEnvironmentProviders, type EnvironmentProviders } from '@angular/core'
import { provideEffects } from '@ngrx/effects'
import { provideState, Store } from '@ngrx/store'

import { FiguresOfSpeechActions } from './actions'
import { loadPreviews$, loadFigureOfSpeech$ } from './effects'
import { figuresOfSpeechFeature, selectFigureOfSpeechVueModel, selectPreviewsVueModel } from './reducer'

export function provideFiguresOfSpeechFeature (): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(figuresOfSpeechFeature),
    provideEffects({ loadPreviews$, loadFigureOfSpeech$ })
  ])
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectPreviews () {
  const store = inject(Store)

  return {
    load: () => {
      store.dispatch(FiguresOfSpeechActions.loadPreviews())
    },
    vm$: store.select(selectPreviewsVueModel)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectFigureOfSpeech () {
  const store = inject(Store)

  return {
    load: (name: string) => {
      store.dispatch(FiguresOfSpeechActions.figureOfSpeechSelected({ name }))
    },
    vm$: store.select(selectFigureOfSpeechVueModel)
  }
}
