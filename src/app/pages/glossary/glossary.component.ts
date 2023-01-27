import { AsyncPipe, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core'

import { combineLatest, map } from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <h1
      class="mb-3 text-2xl font-extrabold tracking-tight text-sky-500 sm:text-center md:text-4xl"
    >
      Glossaire
    </h1>

    <ng-container *ngIf="vm$ | async as vm">
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent implements OnInit {
  private readonly _figureOfSpeechService = inject(FigureOfSpeechService)

  readonly vm$ = combineLatest([
    this._figureOfSpeechService.isLoading$,
    this._figureOfSpeechService.previews$
  ]).pipe(map(([isLoading, previews]) => ({ isLoading, previews })))

  ngOnInit (): void {
    this._figureOfSpeechService.loadPreviews()
  }
}
