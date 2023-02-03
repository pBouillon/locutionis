import { AsyncPipe, NgIf } from '@angular/common'
import { Component, inject } from '@angular/core'
import { combineLatest, map } from 'rxjs'
import { ErrorComponent } from 'src/app/components/error/error.component'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'
import { TitleComponent } from 'src/app/components/title/title.component'
import { QuizService } from '../../services/quiz/quiz.service'
import { QuizGenerationComponent } from './components/quiz-generation/quiz-generation.component'
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component'

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ErrorComponent,
    TitleComponent,
    SubtitleComponent,
    QuizQuestionComponent,
    QuizGenerationComponent
  ],
  template: `
    <app-title>Quiz</app-title>

    <app-subtitle>
      Les figures de style n'ont plus de secret pour vous ?
      <em>Challengez vous</em> pour tester vos connaissances !
    </app-subtitle>

    <ng-container *ngIf="vm$ | async as vm">
      <!-- TODO: Loading -->
      <div *ngIf="vm.isLoading; else display"></div>

      <ng-template #display>
        <div *ngIf="vm.error; else quiz" class="sm:mx-auto sm:w-2/3 md:w-1/3">
          <app-error *ngIf="vm.error" [error]="vm.error" />
        </div>

        <ng-template #quiz>
          <!-- Generation -->
          <app-quiz-generation
            *ngIf="vm.current === null; else ongoing"
            (generateQuiz)="generateQuiz($event)"
          />

          <!-- Ongoing -->
          <ng-template #ongoing>
            <hr class="my-5 bg-gray-500 md:w-1/2 md:mx-auto" />

            <!-- Current Question -->
            <app-quiz-question
              *ngIf="!vm.current!.isFinished"
              [question]="vm.currentQuestion!"
            />

            <!-- Done -->
          </ng-template>
        </ng-template>
      </ng-template>
    </ng-container>
  `
})
export class QuizHomeComponent {
  private readonly _quizService = inject(QuizService)

  readonly vm$ = combineLatest([
    this._quizService.current$,
    this._quizService.currentQuestion$,
    this._quizService.error$,
    this._quizService.isLoading$
  ]).pipe(
    map(([current, currentQuestion, error, isLoading]) => ({
      current,
      currentQuestion,
      error,
      isLoading
    }))
  )

  generateQuiz (questionsCount: number): void {
    this._quizService.generateQuiz(questionsCount)
  }
}
