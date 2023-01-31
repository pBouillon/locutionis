import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
  <h1 class="mb-3 text-2xl font-extrabold tracking-tight text-sky-500 sm:text-center md:text-4xl">
    <ng-content />
  </h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {}
