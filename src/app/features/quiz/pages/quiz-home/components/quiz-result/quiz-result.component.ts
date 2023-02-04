import { PercentPipe } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [PercentPipe],
  template: `
    <section class="my-12 mx-auto max-w-4xl sm:px-6 md:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight dark:text-slate-200">
        Résultats
      </h2>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        Vous avez correctement identifié
        <em>{{ getSuccessRatio() | percent }}</em>
        des figures de style présentées
      </p>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        {{ getAppreciation() }}
      </p>

      <button
        type="button"
        class="mt-5 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:bg-sky-500/50 disabled:text-white/50 sm:w-1/2 md:w-1/4"
        (click)="onRestart()"
      >
        <i class="bi bi-arrow-counterclockwise pr-2"></i>
        Recommencer
      </button>
    </section>
  `
})
export class QuizResultComponent {
  @Input() correctAnswersCount!: number
  @Input() questionsCount!: number

  @Output() restart = new EventEmitter<void>()

  getAppreciation (): string {
    const successRatio = this.getSuccessRatio()

    if (successRatio < 0.33) {
      return `
        Un petit tour sur le glossaire avant de viser plus haut ?
      `
    }

    if (successRatio < 0.66) {
      return 'Encore quelques tours sur le glossaire et vous serez imbattable !'
    }

    return `
      Parfait, il ne vous reste plus qu'a proposer celles que vous connaissez et
      qui n'apparaissent pas encore ici !
    `
  }

  getSuccessRatio (): number {
    return this.correctAnswersCount / this.questionsCount
  }

  onRestart (): void {
    this.restart.emit()
  }
}
