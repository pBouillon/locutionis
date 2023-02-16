import { createFeature, createReducer, createSelector, on } from '@ngrx/store'

import {
  type FigureOfSpeech,
  type FigureOfSpeechPreview
} from '../../features/glossary/models/figure-of-speech'
import { type Error } from '../../models/error'
import { FiguresOfSpeechActions } from './actions'

interface State {
  previews: FigureOfSpeechPreview[]
  current: FigureOfSpeech | null
  isLoading: boolean
  error: Error | null
}

const initialState: State = {
  current: null,
  error: null,
  isLoading: false,
  previews: []
}

// eslint-disable-next-line @ngrx/prefix-selectors-with-select
export const figuresOfSpeechFeature = createFeature({
  name: 'FiguresOfSpeech',
  reducer: createReducer(
    initialState,

    on(FiguresOfSpeechActions.loadPreviews, (state): State => {
      return {
        ...state,
        error: null,
        isLoading: true,
        previews: []
      }
    }),
    on(
      FiguresOfSpeechActions.previewsLoadedSuccess,
      (state, { previews }): State => {
        return {
          ...state,
          previews,
          error: null,
          isLoading: false
        }
      }
    ),
    on(
      FiguresOfSpeechActions.previewsLoadedFailure,
      (state, { error }): State => {
        return {
          ...state,
          error,
          isLoading: false
        }
      }
    ),

    on(FiguresOfSpeechActions.figureOfSpeechSelected, (state): State => {
      return {
        ...state,
        error: null,
        current: null,
        isLoading: true
      }
    }),
    on(
      FiguresOfSpeechActions.selectedLoadedSuccess,
      (state, { figureOfSpeech }): State => {
        return {
          ...state,
          current: figureOfSpeech,
          isLoading: false,
          error: null
        }
      }
    ),
    on(
      FiguresOfSpeechActions.selectedLoadedFailure,
      (state, { error }): State => {
        return {
          ...state,
          error,
          isLoading: false
        }
      }
    )
  ),
  extraSelectors: (state) => ({
    selectGlossary: createSelector(
      state.selectPreviews,
      (previews) => {
        return previews.reduce((map, preview) => {
          const key = preview.name[0]
            .toLocaleLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')

          const entries = map.get(key) ?? []

          return map.set(key, [...entries, preview])
        }, new Map<string, FigureOfSpeechPreview[]>())
      }
    )
  })
})

export const selectPreviewsVueModel = createSelector({
  glossary: figuresOfSpeechFeature.selectGlossary,
  isLoading: figuresOfSpeechFeature.selectIsLoading,
  error: figuresOfSpeechFeature.selectError
})

export const selectFigureOfSpeechVueModel = createSelector({
  figureOfSpeech: figuresOfSpeechFeature.selectCurrent,
  isLoading: figuresOfSpeechFeature.selectIsLoading,
  error: figuresOfSpeechFeature.selectError
})
