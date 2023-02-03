import { NgFor } from '@angular/common'
import { Component, Input } from '@angular/core'
import { QuoteComponent } from 'src/app/features/glossary/pages/definition/components/quote/quote.component'
import { type Question } from 'src/app/features/quiz/models/question'

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [NgFor, QuoteComponent],
  template: `
    <app-quote [text]="question.toGuess" />

    <div class="my-5 grid grid-cols-2 gap-3 md:w-1/2 md:mx-auto">
      <button
        *ngFor="let answer of question.answers"
        type="button"
        class="rounded border border-sky-500 p-5 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-300"
      >
        {{ answer }}
      </button>
    </div>
  `
})
export class QuizQuestionComponent {
  @Input() question!: Question
}
