import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'
import {
  type FigureOfSpeech,
  type FigureOfSpeechPreview
} from 'src/app/models'
import { environment } from 'src/environments/environment.development'

@Injectable()
export class FigureOfSpeechService {
  private readonly _dataService = inject(FigureOfSpeechDataService)

  private readonly _current$ = new BehaviorSubject<FigureOfSpeech | null>(null)
  readonly current$ = this._current$.asObservable()

  private readonly _isLoading$ = new BehaviorSubject<boolean>(false)
  readonly isLoading$ = this._isLoading$.asObservable()

  private readonly _previews$ = new BehaviorSubject<FigureOfSpeechPreview[]>([])
  readonly previews$ = this._previews$.asObservable()

  loadDefinitionOf (name: string): void {
    const current = this._current$.getValue()
    if (current !== null) return

    this._isLoading$.next(true)

    this._dataService
      .get(name)
      .subscribe({
        next: (details: FigureOfSpeech) => {
          this._current$.next(details)
        },
        error: (_error) => { },
        complete: () => {
          this._isLoading$.next(false)
        }
      })
  }

  loadPreviews (): void {
    const current = this._previews$.getValue()
    if (current.length > 0) return

    this._isLoading$.next(true)

    this._dataService
      .getPreviews()
      .subscribe({
        next: (previews: FigureOfSpeechPreview[]) => {
          this._previews$.next(previews)
        },
        error: (_error) => { },
        complete: () => {
          this._isLoading$.next(false)
        }
      })
  }
}

@Injectable({ providedIn: 'root' })
class FigureOfSpeechDataService {
  private readonly _http = inject(HttpClient)

  get (name: string): Observable<FigureOfSpeech> {
    return this._http.get<FigureOfSpeech>(
      `${environment.apiUri}/api/figures-of-speech?name=${name}`
    )
  }

  getPreviews (): Observable<FigureOfSpeechPreview[]> {
    return this._http.get<FigureOfSpeechPreview[]>(
      `${environment.apiUri}/api/figures-of-speech`
    )
  }
}
