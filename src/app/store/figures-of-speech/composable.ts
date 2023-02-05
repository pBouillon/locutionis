import { inject, makeEnvironmentProviders, type EnvironmentProviders } from '@angular/core'
import { provideEffects } from '@ngrx/effects'
import { provideState, Store } from '@ngrx/store'

import { FiguresOfSpeechActions } from './actions'
import { loadPreviews$ } from './effects'
import { figuresOfSpeechFeature, selectPreviewsVueModel } from './reducer'

export function provideFiguresOfSpeechFeature (): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(figuresOfSpeechFeature),
    provideEffects({ loadPreviews$ })
  ])
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectPreviews () {
  const store = inject(Store)

  return {
    load: () => { store.dispatch(FiguresOfSpeechActions.loadPreviews()) },
    vm$: store.select(selectPreviewsVueModel)
  }
}
