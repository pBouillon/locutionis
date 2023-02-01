import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { BehaviorSubject, map, type Observable } from 'rxjs'
import { ErrorType, type Error } from 'src/app/models/error'
import { environment } from 'src/environments/environment'
import { type FigureOfSpeech, type FigureOfSpeechPreview } from '../../models/figure-of-speech'

@Injectable()
export class FigureOfSpeechService {
  private readonly _dataService = inject(FigureOfSpeechDataService)

  private readonly _current$ = new BehaviorSubject<FigureOfSpeech | null>(null)
  readonly current$ = this._current$.asObservable()

  private readonly _error$ = new BehaviorSubject<Error | null>(null)
  readonly error$ = this._error$.asObservable()

  private readonly _isLoading$ = new BehaviorSubject<boolean>(false)
  readonly isLoading$ = this._isLoading$.asObservable()

  private readonly _previews$ = new BehaviorSubject<FigureOfSpeechPreview[]>([])
  readonly previews$ = this._previews$.asObservable()

  readonly glossary$ = this.previews$.pipe(
    map((previews) => previews.reduce((map, preview) => {
      const key = preview.name[0]
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

      const entries = map.get(key) ?? []

      return map.set(key, [...entries, preview])
    }, new Map<string, FigureOfSpeechPreview[]>()))
  )

  /**
   * Load the definition of a specific figure of speech
   * @param name The figure of speech's name, exposed through
   * {@link FigureOfSpeechService.current$}
   */
  loadDefinitionOf (name: string): void {
    const current = this._current$.getValue()
    if (current?.name === name) return

    this._isLoading$.next(true)

    this._dataService
      .get(name)
      .subscribe({
        next: (details: FigureOfSpeech) => {
          this._error$.next(null)
          this._current$.next(details)
          this._isLoading$.next(false)
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              this._error$.next({
                type: ErrorType.UnknownFigureOfSpeech,
                message: `Aucune figure de style n'est enregistrée pour "${name}"`
              })
            } else {
              this._error$.next({
                type: ErrorType.UnableToConnect,
                message: 'Impossible de se connecter au serveur pour le moment'
              })
            }
          }

          this._current$.next(null)
          this._isLoading$.next(false)
        }
      })
  }

  /**
   * Load the previews of all figures of speech, exposed through
   * {@link FigureOfSpeechService.previews$}
   */
  loadPreviews (): void {
    const current = this._previews$.getValue()
    if (current.length > 0) return

    this._isLoading$.next(true)

    this._dataService
      .getPreviews()
      .subscribe({
        next: (previews: FigureOfSpeechPreview[]) => {
          this._error$.next(null)
          this._previews$.next(previews)
          this._isLoading$.next(false)
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this._error$.next({
              type: ErrorType.UnableToConnect,
              message: 'Impossible de se connecter au serveur pour le moment'
            })
          }

          this._previews$.next([])
          this._isLoading$.next(false)
        }
      })
  }
}

/**
 * Data service use to perform the operations related to the figures of speech
 * by calling the API
 */
@Injectable({ providedIn: 'root' })
class FigureOfSpeechDataService {
  private readonly _http = inject(HttpClient)

  /**
   * Get the details of a figure of speech by its name
   * @param name The figure of speech's name
   * @returns An observable of those details
   */
  get (name: string): Observable<FigureOfSpeech> {
    return this._http.get<FigureOfSpeech>(
      `${environment.apiUri}/api/figures-of-speech/${name}`
    )
  }

  /**
   * Get a preview of all figures of speech
   * @returns An observable of an array of those previews
   */
  getPreviews (): Observable<FigureOfSpeechPreview[]> {
    return this._http.get<FigureOfSpeechPreview[]>(
      `${environment.apiUri}/api/figures-of-speech`
    )
  }
}
