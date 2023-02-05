import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-subtitle',
  standalone: true,
  template: `
  <p class="mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
    <ng-content />
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubtitleComponent {}
