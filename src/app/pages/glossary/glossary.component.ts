import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core'

import { combineLatest, map } from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'
import { GlossaryEntryComponent } from './components/glossary-entry/glossary-entry-component'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, GlossaryEntryComponent],
  template: `
    <h1
      class="mb-3 text-2xl font-extrabold tracking-tight text-sky-500 sm:text-center md:text-4xl"
    >
      Glossaire
    </h1>

    <ng-container *ngIf="vm$ | async as vm">
      <app-glossary-entry
        *ngFor="let preview of vm.previews"
        [entry]="preview"
      />
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
