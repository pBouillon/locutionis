import { AsyncPipe, NgIf } from '@angular/common'
import { Component } from '@angular/core'

import { ErrorComponent } from 'src/app/components/error/error.component'
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'
import { TitleComponent } from 'src/app/components/title/title.component'
import { injectQuiz } from 'src/app/store/quiz'
import { QuestionLoadingComponent } from './components/question/question-loading/question-loading.component'
import { QuizGenerationComponent } from './components/quiz-generation/quiz-generation.component'
import { QuestionComponent } from './components/question/question.component'
import { QuizResultComponent } from './components/quiz-result/quiz-result.component'

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ErrorComponent,
    ProgressBarComponent,
    QuestionComponent,
    QuizGenerationComponent,
    QuizResultComponent,
    SubtitleComponent,
    TitleComponent,
    QuestionLoadingComponent
  ],
  template: `
    <app-title>Quiz</app-title>

    <ng-container *ngIf="vm$ | async as vm">

      <app-subtitle *ngIf="!vm.error">
        Les figures de style n'ont plus de secret pour vous ?
        <em>Challengez vous</em> pour tester vos connaissances !
      </app-subtitle>

      <app-question-loading *ngIf="vm.isLoading; else display" />

      <ng-template #display>
        <div *ngIf="vm.error; else quiz" class="sm:mx-auto sm:w-2/3 md:w-1/3">
          <app-error *ngIf="vm.error" [error]="vm.error" />
        </div>

        <ng-template #quiz>
          <!-- Generation -->
          <app-quiz-generation
            *ngIf="vm.currentQuestion === null; else ongoing"
            (generateQuiz)="generateQuiz($event)"
          />

          <!-- Ongoing -->
          <ng-template #ongoing>
            <div class="my-5 sm:mx-auto sm:w-2/3 md:w-1/3">
              <app-progress-bar
                [completionRatio]="vm.completionRatio!"
              />
            </div>

            <!-- Current Question -->
            <app-question
              *ngIf="!vm.isFinished; else results"
              [question]="vm.currentQuestion!"
              (answerSelected)="onAnswerSelected($event)"
              (nextQuestion)="moveToNextQuestion()"
            />

            <!-- Done -->
            <ng-template #results>
              <app-quiz-result
                [successRatio]="vm.successRatio!"
                (restart)="onRestart()"
              />
            </ng-template>
          </ng-template>
        </ng-template>
      </ng-template>
    </ng-container>
  `
})
export class QuizHomeComponent {
  private readonly _quizFeature = injectQuiz()
  readonly vm$ = this._quizFeature.vm$

  generateQuiz (questionsCount: number): void {
    this._quizFeature.generate(questionsCount)
  }

  moveToNextQuestion (): void {
    this._quizFeature.moveOntoNextQuestion()
  }

  onRestart (): void {
    this._quizFeature.restart()
  }

  onAnswerSelected (answer: string): void {
    this._quizFeature.submitAnswer(answer)
  }
}
