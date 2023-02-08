import { NgClass, NgFor, NgIf } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { QuoteComponent } from 'src/app/features/glossary/pages/definition/components/quote/quote.component'
import { type Question } from 'src/app/features/quiz/models/question'

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, QuoteComponent],
  template: `
    <app-quote [text]="question.toGuess" />

    <div class="my-5 grid grid-cols-2 gap-3 md:mx-auto md:w-1/2">
      <button
        *ngFor="let answer of question.answers"
        type="button"
        class="rounded border border-sky-500 p-5 text-center dark:text-gray-300"
        [ngClass]="{
          'border-green-500 shadow shadow-green-300': isAnswered && isSolution(answer),
          'border-red-500 shadow shadow-red-300': isAnswered && !isSolution(answer) && isSelected(answer),
          'hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300': !isAnswered
        }"
        [disabled]="isAnswered"
        (click)="selectAnswer(answer)"
      >
        {{ answer }}
      </button>
    </div>

    <button
      *ngIf="isAnswered"
      type="button"
      class="mx-auto flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:bg-sky-500/50 disabled:text-white/50 sm:w-1/2 md:w-1/4"
      (click)="moveToNext()"
    >
      Question suivante
    </button>
  `
})
export class QuestionComponent {
  @Input() question!: Question
  @Output() answerSelected = new EventEmitter<string>()
  @Output() nextQuestion = new EventEmitter<void>()

  submittedAnswer?: string

  get isAnswered (): boolean {
    return this.question.isCorrectlyAnswered !== undefined
  }

  isSelected (answer: string): boolean {
    return this.submittedAnswer === answer
  }

  isSolution (answer: string): boolean {
    return this.question.solution === answer
  }

  moveToNext (): void {
    this.nextQuestion.emit()
  }

  selectAnswer (answer: string): void {
    this.submittedAnswer = answer
    this.answerSelected.emit(answer)
  }
}
