import { type EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core'

import { provideEffects } from '@ngrx/effects'
import { provideState, Store } from '@ngrx/store'
import { ThemeActions } from './actions'
import { initialize$, toggleCurrentTheme$, setDocumentClass$ } from './effects'

import { selectThemeViewModel, themeFeature } from './reducer'

export function provideThemeFeature (): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(themeFeature),
    provideEffects({ initialize$, toggleCurrentTheme$, setDocumentClass$ })
  ])
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function injectTheme () {
  const store = inject(Store)

  return {
    initialize: () => {
      store.dispatch(ThemeActions.initialize())
    },
    toggle: () => {
      store.dispatch(ThemeActions.toggleCurrentTheme())
    },
    vm$: store.select(selectThemeViewModel)
  }
}
