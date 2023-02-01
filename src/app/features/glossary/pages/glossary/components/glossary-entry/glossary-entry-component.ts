import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FigureOfSpeechPreview } from 'src/app/features/glossary/models/figure-of-speech'

@Component({
  selector: 'app-glossary-entry',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="max-w-lg">
      <a
        [routerLink]="[entry.name]"
        class="tracking-wide underline decoration-sky-500 decoration-2 hover:text-sky-500 dark:text-gray-200"
      >
        {{ entry.name }}
      </a>

      <p class="truncate text-sm text-gray-600 dark:text-slate-400">
        {{ entry.preview }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryEntryComponent {
  @Input() entry!: FigureOfSpeechPreview
}
