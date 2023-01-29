import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  combineLatest,
  distinctUntilChanged,
  map,
  Subject,
  takeUntil,
  type Observable
} from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'
import { DetailsErrorComponent } from './components/details-error/details-error.component'
import { DetailsLoadingComponent } from './components/details-loading/details-loading.component'
import { DetailsComponent } from './components/details/details.component'

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, DetailsComponent, DetailsErrorComponent, DetailsLoadingComponent],
  template: `
    <div *ngIf="vm$ | async as vm" class="sm:mx-auto sm:w-2/3 md:w-1/3">
      <app-loading-details *ngIf="vm.isLoading; else display" />

      <ng-template #display>
        <app-details
          *ngIf="vm.current as current; else error"
          [definition]="current"
        />

        <ng-template #error>
          <app-details-error
            *ngIf="vm.error"
            [error]="vm.error"
          />
        </ng-template>
      </ng-template>
    </div>
  `
})
export class DefinitionComponent implements OnInit, OnDestroy {
  private readonly _componentDestroyed$ = new Subject()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private readonly _current: Observable<string> = inject(
    ActivatedRoute
  ).params.pipe(
    map((params) => params['name']),
    distinctUntilChanged()
  )

  private readonly _figureOfSpeechService = inject(FigureOfSpeechService)

  readonly vm$ = combineLatest([
    this._figureOfSpeechService.current$,
    this._figureOfSpeechService.error$,
    this._figureOfSpeechService.isLoading$
  ]).pipe(
    map(([current, error, isLoading]) => {
      return { current, error, isLoading }
    })
  )

  ngOnInit (): void {
    this._current
      .pipe(takeUntil(this._componentDestroyed$))
      .subscribe((name) => {
        this._figureOfSpeechService.loadDefinitionOf(name)
      })
  }

  ngOnDestroy (): void {
    this._componentDestroyed$.next({})
    this._componentDestroyed$.complete()
  }
}
