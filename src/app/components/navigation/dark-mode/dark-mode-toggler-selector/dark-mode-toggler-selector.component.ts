import { NgClass } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-dark-mode-toggler-selector',
  imports: [NgClass],
  template: `
    <div class="flex max-w-xs items-center justify-between">
      <label class="text-lg tracking-wide" for="theme"> Thème </label>

      <div
        class="relative flex items-center rounded-lg p-2 text-base shadow-sm ring-1 ring-gray-400 dark:border-gray-200 dark:bg-gray-600 dark:text-gray-200"
      >
        <span class="flex gap-3 px-2">
          <i
            class="bi"
            [ngClass]="isDarkModeEnabled ? 'bi-moon-stars' : 'bi-sun'"
          ></i>
          {{ isDarkModeEnabled ? 'Sombre' : 'Clair' }}
          <i class="bi bi-chevron-down"></i>
        </span>

        <select
          id="theme"
          class="absolute inset-0 h-full w-full appearance-none opacity-0 dark:bg-gray-600 dark:text-gray-200"
          [value]="isDarkModeEnabled ? 'dark' : 'light'"
          (change)="onThemeSelected($event)"
        >
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </select>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeTogglerSelectorComponent {
  /**
   * Whether the dark mode is enabled or not
   */
  @Input() isDarkModeEnabled: boolean = false

  /**
   * Emitted when the user clicks to toggle the dark mode
   */
  @Output() onToggleDarkMode = new EventEmitter<void>()

  /**
   * Emitted when the user clicks to toggle the dark mode
   * @param event The selection event
   */
  onThemeSelected (event: any): void {
    const theme = event.target.value

    const hasValueChanged =
      (theme === 'light' && this.isDarkModeEnabled) ||
      (theme === 'dark' && !this.isDarkModeEnabled)

    if (hasValueChanged) {
      this.onToggleDarkMode.emit()
    }
  }
}
