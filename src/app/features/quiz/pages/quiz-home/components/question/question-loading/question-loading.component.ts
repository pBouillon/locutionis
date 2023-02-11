import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-question-loading',
  standalone: true,
  imports: [NgFor],
  template: `
    <!-- Loading progress bar -->
    <div
      class="my-4 h-1.5 animate-pulse rounded-full bg-gray-400/75 sm:mx-auto sm:w-2/3 md:w-1/3"
    ></div>

    <!-- Loading quote -->
    <div
      class="mb-10 flex animate-pulse flex-col items-center gap-2 sm:mx-auto sm:w-2/3 md:w-1/3"
    >
      <div class="mb-2 h-6 w-6 rounded bg-gray-400/75"></div>

      <div class="h-5 w-4/5 rounded bg-gray-400/75"></div>
      <div class="h-5 w-1/3 rounded bg-gray-400/75"></div>
    </div>

    <!-- Loading answer buttons -->
    <div class="my-5 grid animate-pulse grid-cols-2 gap-3 md:mx-auto md:w-1/2">
      <div
        *ngFor="let _ of [0, 1, 2, 3, 4, 5]"
        class="h-12 w-full rounded-lg border border-sky-500 bg-sky-500/25"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionLoadingComponent {}
