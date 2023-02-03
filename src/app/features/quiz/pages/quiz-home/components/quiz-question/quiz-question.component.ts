import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuoteComponent } from 'src/app/features/glossary/pages/definition/components/quote/quote.component';
import { type Question } from 'src/app/features/quiz/models/question';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [NgFor, NgClass, QuoteComponent],
  template: `
    <app-quote [text]="question.toGuess" />

    <div class="my-5 grid grid-cols-2 gap-3 md:mx-auto md:w-1/2">
      <button
        *ngFor="let answer of question.answers"
        type="button"
        class="rounded border border-sky-500 p-5 text-center dark:text-gray-300"
        [ngClass]="{
          'border-red-500': isAnswered && answer !== question.solution,
          'border-green-500 shadow shadow-green-300': isAnswered && answer === question.solution,
          'hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-300':
            !isAnswered
        }"
        (click)="selectAnswer(answer)"
      >
        {{ answer }}
      </button>
    </div>
  `,
})
export class QuizQuestionComponent {
  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<string>();

  get isAnswered(): boolean {
    return this.question.isCorrectlyAnswered !== undefined;
  }

  selectAnswer(answer: string): void {
    this.answerSelected.emit(answer);
  }
}
