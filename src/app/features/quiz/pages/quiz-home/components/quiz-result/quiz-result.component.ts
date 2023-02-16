import { PercentPipe } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './quiz-result.component.html'
})
export class QuizResultComponent {
  @Input() successRatio!: number

  @Output() restart = new EventEmitter<void>()

  getAppreciation (): string {
    if (this.successRatio < 0.33) {
      return `
        Un petit tour sur le glossaire avant de viser plus haut ?
      `
    }

    if (this.successRatio < 0.66) {
      return 'Encore quelques tours sur le glossaire et vous serez imbattable !'
    }

    if (this.successRatio < 0.95) {
      return "Impressionnant ! Vous n'aurez bientôt plus rien à apprendre ici !"
    }

    return `
      Parfait, il ne vous reste plus qu'a proposer celles que vous connaissez et
      qui n'apparaissent pas encore ici !
    `
  }

  onRestart (): void {
    this.restart.emit()
  }
}
