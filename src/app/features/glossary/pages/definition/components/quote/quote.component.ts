import { NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [NgIf],
  template: `
    <blockquote class="flex flex-col items-center">
      <i
        class="bi bi-quote text-3xl font-extrabold text-gray-400 dark:text-slate-400"
      ></i>

      <p
        class="text-center text-lg italic text-gray-600 dark:text-slate-400 md:max-w-3xl md:text-2xl"
      >
        {{ text }}
      </p>

      <p
        *ngIf="source"
        class="text-center italic text-gray-600 dark:text-slate-400 md:max-w-md md:text-xl"
      >
        — {{ source }}
      </p>
    </blockquote>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent {
  @Input() source: string | null = null
  @Input() text!: string
}
