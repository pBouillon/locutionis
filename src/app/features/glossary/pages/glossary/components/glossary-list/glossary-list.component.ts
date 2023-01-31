import { KeyValuePipe, NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { TitleComponent } from 'src/app/components/title/title.component'
import { type FigureOfSpeechPreview } from 'src/app/models'
import { GlossarySectionComponent } from '../glossary-section/glossary-section.component'

@Component({
  selector: 'app-glossary-list',
  standalone: true,
  imports: [NgFor, KeyValuePipe, GlossarySectionComponent, TitleComponent],
  template: `
    <app-title>Glossaire</app-title>

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
