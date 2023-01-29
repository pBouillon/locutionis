import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-loading-details',
  standalone: true,
  styles: [
    '.section-wrapper { @apply space-y-3 }',
    '.subtitle { @apply h-6 w-32 rounded bg-sky-600/75 }',
    '.text { @apply h-4 rounded bg-gray-400/75 }'
  ],
  template: `
    <!-- Loading quote -->
    <div class="mb-10 flex animate-pulse flex-col items-center gap-2">
      <div class="h-6 w-6 mb-2 rounded bg-gray-400/75"></div>

      <div class="h-5 w-4/5 rounded bg-gray-400/75"></div>
      <div class="h-5 w-1/3 rounded bg-gray-400/75"></div>
    </div>

    <!-- Loading details -->
    <div class="animate-pulse space-y-8">
      <div class="h-8 w-44 rounded bg-sky-500/75"></div>

      <div class="section-wrapper">
        <div class="subtitle"></div>

        <div class="text flex-grow"></div>
        <div class="text w-2/3"></div>
      </div>

      <div class="section-wrapper">
        <div class="subtitle"></div>

        <div class="text flex-grow"></div>
        <div class="text w-2/3"></div>
      </div>

      <div class="section-wrapper">
        <div class="subtitle"></div>

        <div class="text flex-grow"></div>
        <div class="text w-2/3"></div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsLoadingComponent {}
