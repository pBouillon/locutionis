import { KeyValuePipe, NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { type FigureOfSpeechPreview } from 'src/app/models'
import { GlossarySectionComponent } from '../glossary-section/glossary-section.component'

@Component({
  selector: 'app-glossary-list',
  standalone: true,
  imports: [NgFor, KeyValuePipe, GlossarySectionComponent],
  template: `
    <h1
      class="mb-3 text-2xl font-extrabold tracking-tight text-sky-500 sm:text-center md:text-4xl"
    >
      Glossaire
    </h1>

    <div class="flex flex-col gap-3 sm:mx-auto sm:w-2/3 md:w-1/3 md:gap-6">
      <app-glossary-section
        *ngFor="let section of glossary | keyvalue"
        [key]="section.key"
        [entries]="section.value"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryListComponent {
  @Input() glossary = new Map<string, FigureOfSpeechPreview[]>()
}
