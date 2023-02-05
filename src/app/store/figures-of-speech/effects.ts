import { HttpClient, type HttpErrorResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of } from 'rxjs'

import { type FigureOfSpeech, type FigureOfSpeechPreview } from 'src/app/features/glossary/models/figure-of-speech'
import { ErrorType, type Error } from 'src/app/models/error'
import { environment } from 'src/environments/environment'
import { FiguresOfSpeechActions } from './actions'

export const loadPreviews$ = createEffect((actions$ = inject(Actions)) => {
  const http = inject(HttpClient)

  return actions$.pipe(
    ofType(FiguresOfSpeechActions.loadPreviews),
    exhaustMap(() =>
      http.get<FigureOfSpeechPreview[]>(`${environment.apiUri}/api/figures-of-speech`)
        .pipe(
          map(previews => FiguresOfSpeechActions.previewsLoadedSuccess({ previews })),
          catchError(() => {
            const digested: Error = {
              type: ErrorType.UnableToConnect,
              message: 'Impossible de se connecter au serveur pour le moment'
            }

            return of(FiguresOfSpeechActions.previewsLoadedFailure({ error: digested }))
          })
        )
    )
  )
}, { functional: true })

export const loadFigureOfSpeech$ = createEffect((actions$ = inject(Actions)) => {
  const http = inject(HttpClient)

  return actions$.pipe(
    ofType(FiguresOfSpeechActions.figureOfSpeechSelected),
    exhaustMap(({ name }) =>
      http.get<FigureOfSpeech>(`${environment.apiUri}/api/figures-of-speech/${name}`)
        .pipe(
          map((figureOfSpeech) => FiguresOfSpeechActions.selectedLoadedSuccess({ figureOfSpeech })),
          catchError((error: HttpErrorResponse) => {
            let digested: Error

            if (error.status === 404) {
              digested = {
                type: ErrorType.UnknownFigureOfSpeech,
                message: `Aucune figure de style n'est enregistrée pour "${name}"`
              }
            } else {
              digested = {
                type: ErrorType.UnableToConnect,
                message: 'Impossible de se connecter au serveur pour le moment'
              }
            }

            return of(FiguresOfSpeechActions.selectedLoadedFailure({ error: digested }))
          })
        )
    )
  )
}, { functional: true })
