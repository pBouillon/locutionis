import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { type FigureOfSpeechPreview } from 'src/app/models'

@Component({
  selector: 'app-glossary-entry',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="max-w-lg">
      <a
        [routerLink]="[ entry.name ]"
        class="decoration-sky-500 hover:text-sky-500 tracking-wide underline decoration-2 dark:text-gray-200"
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
