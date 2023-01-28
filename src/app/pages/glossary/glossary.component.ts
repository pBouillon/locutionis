import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core'

import { combineLatest, map } from 'rxjs'
import { FigureOfSpeechService } from 'src/app/services/figure-of-speech/figure-of-speech.service'
import { GlossarySectionComponent } from './components/glossary-section/glossary-section.component'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, KeyValuePipe, GlossarySectionComponent],
  template: `
    <h1
      class="mb-3 text-2xl font-extrabold tracking-tight text-sky-500 sm:text-center md:text-4xl"
    >
      Glossaire
    </h1>

    <ng-container *ngIf="vm$ | async as vm">
      <div class="sm:mx-auto sm:w-2/3 md:w-1/3 flex flex-col gap-3 md:gap-6">
        <app-glossary-section
          *ngFor="let section of vm.glossary | keyvalue"
          [key]="section.key"
          [entries]="section.value"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent implements OnInit {
  private readonly _figureOfSpeechService = inject(FigureOfSpeechService)

  readonly vm$ = combineLatest([
    this._figureOfSpeechService.isLoading$,
    this._figureOfSpeechService.glossary$
  ]).pipe(map(([isLoading, glossary]) => ({ isLoading, glossary })))

  ngOnInit (): void {
    this._figureOfSpeechService.loadPreviews()
  }
}
