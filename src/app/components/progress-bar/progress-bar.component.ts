import { NgStyle } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, type OnChanges } from '@angular/core'

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgStyle],
  template: `
  <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
    <div
      class="bg-sky-500 h-1.5 rounded-full"
      [ngStyle]="{'width': percentage}"
    ></div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnChanges {
  @Input() completionRatio: number = 0

  percentage = '0%'

  ngOnChanges (): void {
    this.percentage = `${this.completionRatio * 100}%`
  }
}
