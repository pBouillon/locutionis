import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  distinctUntilChanged,
  map,
  Subject,
  takeUntil,
  type Observable
} from 'rxjs'
import { ErrorComponent } from 'src/app/components/error/error.component'
import { injectFigureOfSpeech } from 'src/app/store/figures-of-speech'
import { DetailsLoadingComponent } from './components/details-loading/details-loading.component'
import { DetailsComponent } from './components/details/details.component'

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, DetailsComponent, ErrorComponent, DetailsLoadingComponent],
  template: `
    <div *ngIf="vm$ | async as vm" class="sm:mx-auto sm:w-2/3 md:w-1/3">
      <app-details-loading *ngIf="vm.isLoading; else display" />

      <ng-template #display>
        <app-details
          *ngIf="vm.figureOfSpeech as figureOfSpeech; else error"
          [definition]="figureOfSpeech"
        />

        <ng-template #error>
          <app-error *ngIf="vm.error" [error]="vm.error" />
        </ng-template>
      </ng-template>
    </div>
  `
})
export class DefinitionComponent implements OnInit, OnDestroy {
  private readonly _componentDestroyed$ = new Subject()

  private readonly _figureOfSpeechFeature = injectFigureOfSpeech()
  readonly vm$ = this._figureOfSpeechFeature.vm$

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private readonly _current: Observable<string> = inject(
    ActivatedRoute
  ).params.pipe(
    map((params) => params['name']),
    distinctUntilChanged()
  )

  ngOnInit (): void {
    this._current
      .pipe(takeUntil(this._componentDestroyed$))
      .subscribe((name) => { this._figureOfSpeechFeature.load(name) })
  }

  ngOnDestroy (): void {
    this._componentDestroyed$.next({})
    this._componentDestroyed$.complete()
  }
}
