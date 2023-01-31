import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { type FigureOfSpeechPreview } from 'src/app/models'
import { GlossaryEntryComponent } from '../glossary-entry/glossary-entry-component'

@Component({
  selector: 'app-glossary-section',
  standalone: true,
  imports: [NgFor, GlossaryEntryComponent],
  template: `
    <div>
      <h2 class="text-sky-500 text-lg font-semibold md:mb-3 md:text-2xl">
        {{ key.toUpperCase() }}
      </h2>

      <div class="flex flex-col gap-2">
        <app-glossary-entry
          *ngFor="let entry of entries"
          [entry]="entry"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossarySectionComponent {
  @Input() key!: string
  @Input() entries!: FigureOfSpeechPreview[]
}
