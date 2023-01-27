import { NgIf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-dark-mode-toggler-icon',
  imports: [NgIf],
  template: `
    <button
      tabindex="0"
      role="button"
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-500 text-gray-500 hover:border-sky-500 hover:text-sky-500 dark:border-gray-200 dark:bg-gray-600 dark:text-gray-200"
      (click)="toggleDarkMode.emit()"
    >
      <i *ngIf="!isDarkModeEnabled" class="bi bi-moon-stars text-base"></i>
      <i *ngIf="isDarkModeEnabled" class="bi bi-sun text-lg"></i>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeTogglerIconComponent {
  /**
   * Whether the dark mode is enabled or not
   */
  @Input() isDarkModeEnabled: boolean = false

  /**
   * Emitted when the user clicks to toggle the dark mode
   */
  @Output() toggleDarkMode = new EventEmitter<void>()
}
