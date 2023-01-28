import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common'
import { Component, inject, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, map } from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, JsonPipe],
  template: `
    <div *ngIf="vm$ | async as vm" class="sm:mx-auto sm:w-2/3 md:w-1/3">

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

          <section>
            <h2 class="mb-2 text-lg font-semibold text-sky-600">Quelques exemples</h2>

            <div class="flex flex-col gap-3 text-sm">
              <p
                *ngFor="let usage of current.usages"
                class="flex flex-col"
              >
                <span class="dark:text-slate-300">- {{ usage.example }}</span>
                <span
                  *ngIf="usage.source"
                  class="text-slate-500"
                >
                  {{ usage.source }}
              </span>
              </p>
            </div>
          </section>

          <section>
            <h2 class="mb-2 text-lg font-semibold text-sky-600">Sources</h2>

            <div class="flex flex-col gap-1 text-sm">
              <p
                *ngFor="let source of current.sources"
                class="dark:text-slate-300"
              >
                -
                <a [href]="source.url" target="_blank" class="link">
                  {{ source.displayName}}
                </a>
              </p>
            </div>
          </section>
        </div>
      </ng-container>
    </div>
  `
})
export class DefinitionComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private readonly _current =
    inject(ActivatedRoute).snapshot.paramMap.get('name')!

  private readonly _figureOfSpeechService = inject(FigureOfSpeechService)

  readonly vm$ = combineLatest([
    this._figureOfSpeechService.isLoading$,
    this._figureOfSpeechService.current$
  ]).pipe(map(([isLoading, current]) => ({ isLoading, current })))

  ngOnInit (): void {
    this._figureOfSpeechService.loadDefinitionOf(this._current)
  }
}
