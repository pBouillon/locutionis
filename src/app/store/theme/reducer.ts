import { createFeature, createReducer, createSelector, on } from "@ngrx/store"
import { ThemeActions } from './actions'

export type Theme = 'light' | 'dark'

interface State {
  theme: Theme
}

const initialState: State = {
  theme: 'light'
}

// eslint-disable-next-line @ngrx/prefix-selectors-with-select
export const themeFeature = createFeature({
  name: 'Theme',
  reducer: createReducer(
    initialState,

    on(ThemeActions.setTheme, (state, { theme }): State => {
      return { ...state, theme }
    })
  ),
  extraSelectors: (state) => ({
    isDarkModeEnabled: createSelector(
      state.selectTheme,
      (theme) => theme === 'dark'
    )
  })
})

export const selectThemeViewModel = createSelector(
  themeFeature.isDarkModeEnabled,
  (isDarkModeEnabled) => ({ isDarkModeEnabled })
)
