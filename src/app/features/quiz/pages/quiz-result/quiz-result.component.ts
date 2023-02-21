import { AsyncPipe, NgIf, PercentPipe } from '@angular/common'
import { Component } from '@angular/core'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'
import { TitleComponent } from 'src/app/components/title/title.component'
import { injectQuizResults } from 'src/app/store/quiz'

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [NgIf, AsyncPipe, PercentPipe, TitleComponent, SubtitleComponent],
  templateUrl: './quiz-result.component.html'
})
export class QuizResultComponent {
  private readonly _quizResultsFeature = injectQuizResults()
  readonly vm$ = this._quizResultsFeature.vm$

  onRestart (): void {
    this._quizResultsFeature.restart()
  }
}
