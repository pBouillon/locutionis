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

        if (isTheme) return savedPreference

        const isDarkThemePreferred = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches

        return isDarkThemePreferred ? 'dark' : 'light'
      }),
      map(theme => ThemeActions.setTheme({ theme }))
    )
  }, { functional: true })

export const toggleCurrentTheme$ = createEffect((actions$ = inject(Actions)) => {
  const store = inject(Store)

  return actions$.pipe(
    ofType(ThemeActions.toggleCurrentTheme),
    concatLatestFrom(() => store.select(themeFeature.selectTheme)),
    map(([, current]) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      return ThemeActions.setTheme({ theme: next })
    })
  )
}, { functional: true })

export const setDocumentClass$ = createEffect((actions$ = inject(Actions)) => {
  return actions$.pipe(
    ofType(ThemeActions.setTheme),
    tap(({ theme }) => {
      theme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    }),
    tap(({ theme }) => { localStorage.setItem('theme', theme) })
  )
}, { functional: true, dispatch: false })
