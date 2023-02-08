import { createActionGroup, emptyProps, props } from '@ngrx/store'

import { type Theme } from './reducer'

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Toggle Current Theme': emptyProps(),
    'Set Theme': props<{ theme: Theme }>(),
    Initialize: emptyProps()
  }
})
