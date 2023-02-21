import { AsyncPipe, NgIf } from '@angular/common'
import { Component, OnDestroy } from '@angular/core'

import { ErrorComponent } from 'src/app/components/error/error.component'
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'
import { TitleComponent } from 'src/app/components/title/title.component'
import { injectQuiz } from 'src/app/store/quiz'
import { QuestionLoadingComponent } from './components/question/question-loading/question-loading.component'
import { QuestionComponent } from './components/question/question.component'
import { QuizGenerationComponent } from '../quiz-generation/quiz-generation.component'
import { QuizResultComponent } from '../quiz-result/quiz-result.component'

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
  templateUrl: './quiz-home.component.html'
})
export class QuizHomeComponent implements OnDestroy {
  private readonly _quizFeature = injectQuiz()
  readonly vm$ = this._quizFeature.vm$

  ngOnDestroy(): void {
    this._quizFeature.resetQuiz()
  }

  moveToNextQuestion (): void {
    this._quizFeature.moveOntoNextQuestion()
  }

  onAnswerSelected (answer: string): void {
    this._quizFeature.submitAnswer(answer)
  }
}
