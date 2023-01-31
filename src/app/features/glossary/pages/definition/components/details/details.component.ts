import { NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { type FigureOfSpeech, type Usage } from 'src/app/models'
import { QuoteComponent } from '../quote/quote.component'
import { SourcesComponent } from '../sources/sources.component'
import { UsagesComponent } from '../usages/usages.component'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, QuoteComponent, SourcesComponent, UsagesComponent],
  template: `
    <div *ngIf="firstExample" class="mb-8 md:mb-12 md:mt-5">
      <app-quote [source]="firstExample.source" [text]="firstExample.example" />
    </div>

    <h1 class="mb-5 text-2xl font-semibold text-sky-500">
      {{ definition.name }}
    </h1>

    <div class="flex flex-col gap-5">
      <section>
        <h2 class="mb-2 text-lg font-semibold text-sky-600">Description</h2>
        <p class="dark:text-slate-300">
          {{ definition.description }}
        </p>
      </section>

      <section>
        <h2 class="mb-2 text-lg font-semibold text-sky-600">Dans quel but ?</h2>
        <p class="dark:text-slate-300">
          {{ definition.purpose }}
        </p>
      </section>

      <app-usages [usages]="definition.usages" />
      <app-sources [sources]="definition.sources" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  @Input() definition!: FigureOfSpeech

  get firstExample (): Usage | undefined {
    return this.definition.usages.at(0)
  }
}
