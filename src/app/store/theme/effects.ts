import { inject } from '@angular/core'

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { map, tap } from 'rxjs'

import { ThemeActions } from './actions'
import { themeFeature, type Theme } from './reducer'

export const initialize$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(ThemeActions.initialize),
      map(() => {
        const savedPreference = localStorage['theme']
        const isTheme = ['light', 'dark'].includes(savedPreference)

        if (isTheme) {
          return ThemeActions.setTheme({ theme: savedPreference })
        }

        const isDarkThemePreferred = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches

        const preferredTheme = isDarkThemePreferred ? 'dark' : 'light'

        return ThemeActions.setTheme({ theme: preferredTheme })
      })
    )
  }, { functional: true })

export const toggleCurrentTheme$ = createEffect((actions$ = inject(Actions)) => {
  const store = inject(Store)

  return actions$.pipe(
    ofType(ThemeActions.toggleCurrentTheme),
    tap(() => {
      document.documentElement.classList.toggle('dark')
    }),
    concatLatestFrom(() => store.select(themeFeature.selectTheme)),
    map(([, current]) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      return ThemeActions.setTheme({ theme: next })
    })
  )
}, { functional: true })

export const saveToLocalStorage$ = createEffect((actions$ = inject(Actions)) => {
  return actions$.pipe(
    ofType(ThemeActions.setTheme),
    tap(({ theme }) => {
      localStorage.setItem('theme', theme)
    })
  )
}, { functional: true, dispatch: false })
