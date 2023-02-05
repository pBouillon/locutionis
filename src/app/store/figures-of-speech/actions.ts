import { createActionGroup, emptyProps, props } from '@ngrx/store'

import {
  type FigureOfSpeech,
  type FigureOfSpeechPreview
} from 'src/app/features/glossary/models/figure-of-speech'
import { type Error } from 'src/app/models/error'

export const FiguresOfSpeechActions = createActionGroup({
  source: 'Figures of Speech',
  events: {
    'Load Previews': emptyProps(),
    'Previews Loaded Success': props<{ previews: FigureOfSpeechPreview[] }>(),
    'Previews Loaded Failure': props<{ error: Error }>(),

    'Figure of Speech Selected': props<{ name: string }>(),
    'Selected Loaded Success': props<{ figureOfSpeech: FigureOfSpeech }>(),
    'Selected Loaded Failure': props<{ error: Error }>()
  }
})
