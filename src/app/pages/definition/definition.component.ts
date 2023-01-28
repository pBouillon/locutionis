import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common'
import { Component, inject, type OnDestroy, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, distinctUntilChanged, map, Subject, takeUntil, type Observable } from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'
import { QuoteComponent } from './components/quote/quote.component'
import { SourcesComponent } from './components/sources/sources.component'
import { UsagesComponent } from './components/usages/usages.component'

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, JsonPipe, QuoteComponent, SourcesComponent, UsagesComponent],
  template: `
    <div *ngIf="vm$ | async as vm" class="sm:mx-auto sm:w-2/3 md:w-1/3">

      <div *ngIf="vm.firstExample as current"class="mb-8 md:mb-12 md:mt-5">
        <app-quote
          [source]="vm.firstExample.source"
          [text]="vm.firstExample.example"
        />
      </div>

      <ng-container *ngIf="vm.current as current">
        <h1 class="mb-5 text-2xl font-semibold text-sky-500">
          {{ current.name }}
        </h1>

        <div class="flex flex-col gap-5">
          <section>
            <h2 class="mb-2 text-lg font-semibold text-sky-600">Description</h2>
            <p class="dark:text-slate-300">
              {{ current.description }}
            </p>
          </section>

          <section>
            <h2 class="mb-2 text-lg font-semibold text-sky-600">Dans quel but ?</h2>
            <p class="dark:text-slate-300">
              {{ current.purpose }}
            </p>
          </section>

          <app-usages [usages]="current.usages" />

          <app-sources [sources]="current.sources" />
        </div>
      </ng-container>
    </div>
  `
})
export class DefinitionComponent implements OnInit, OnDestroy {
  private readonly _componentDestroyed$ = new Subject()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private readonly _current: Observable<string> = inject(ActivatedRoute).params.pipe(
    map((params) => params['name']),
    distinctUntilChanged()
  )

  private readonly _figureOfSpeechService = inject(FigureOfSpeechService)

  readonly vm$ = combineLatest([
    this._figureOfSpeechService.isLoading$,
    this._figureOfSpeechService.current$
  ]).pipe(map(([isLoading, current]) => {
    const firstExample = current?.usages.at(0)
    return { isLoading, current, firstExample }
  }))

  ngOnInit (): void {
    this._current
      .pipe(takeUntil(this._componentDestroyed$))
      .subscribe(name => {
        this._figureOfSpeechService.loadDefinitionOf(name)
      })
  }

  ngOnDestroy (): void {
    this._componentDestroyed$.next({})
    this._componentDestroyed$.complete()
  }
}
