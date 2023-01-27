import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  distinctUntilChanged,
  map, tap, type Observable
} from 'rxjs'

export type Theme = 'dark' | 'light'

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private readonly _currentTheme$: BehaviorSubject<Theme>
  readonly isDarkModeEnabled$: Observable<boolean>

  constructor () {
    const preferredTheme = this.getUserPreferredTheme()
    this._currentTheme$ = new BehaviorSubject<Theme>(preferredTheme)

    this._currentTheme$
      .pipe(
        distinctUntilChanged(),
        tap((theme) => (localStorage['theme'] = theme))
      )
      .subscribe(theme => {
        theme === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark')
      })

    this.isDarkModeEnabled$ = this._currentTheme$
      .asObservable()
      .pipe(map((theme) => theme === 'dark'))
  }

  private isTheme (value: string): value is Theme {
    return ['dark', 'light'].includes(value)
  }

  private getUserPreferredTheme (): Theme {
    const savedPreference = localStorage['theme']

    if (this.isTheme(savedPreference)) {
      return savedPreference
    }

    const isDarkThemePreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    return isDarkThemePreferred ? 'dark' : 'light'
  }

  /**
   * Toggle dark mode based on the current theme
   */
  toggleDarkMode (): void {
    const toggled = this._currentTheme$.getValue() === 'dark' ? 'light' : 'dark'

    this._currentTheme$.next(toggled)
  }
}
