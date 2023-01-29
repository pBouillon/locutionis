import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-glossary-loading',
  standalone: true,
  imports: [NgFor],
  template: `
  <div class="animate-pulse space-y-4 md:mx-auto md:w-1/3">
    <!-- Simulate the title -->
    <div class="h-6 w-32 bg-sky-500/75 rounded md:mx-auto md:h-8 md:w-48"></div>

    <!-- Simulate a section -->
    <div *ngFor="let _ of [0, 1, 2, 3, 4]" class="space-y-3">
      <div class="h-6 w-5 bg-sky-500/75 rounded"></div>

      <!-- Simulate an entry -->
      <div *ngFor="let _ of [0, 1]" class="space-y-2">
        <div class="h-5 w-24 bg-black/75 dark:bg-white/75 rounded"></div>
        <div class="h-4 w-full bg-gray-500/75 rounded"></div>
      </div>
    </div>
  </div>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryLoadingComponent {}
