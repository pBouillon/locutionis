import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'

import { MainButtonLinkComponent } from 'src/app/components/main-button-link/main-button-link.component'
import { injectGenerationFeature } from 'src/app/store/quiz'

@Component({
  selector: 'app-quiz-generation',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MainButtonLinkComponent],
  templateUrl: './quiz-generation.component.html'
})
export class QuizGenerationComponent {
  private static readonly DEFAULT_QUESTIONS_COUNT = 10

  private readonly _quizGenerationFeature = injectGenerationFeature()

  quizGenerationForm = inject(FormBuilder).group({
    questionsCount: [
      QuizGenerationComponent.DEFAULT_QUESTIONS_COUNT,
      [Validators.required, Validators.min(5), Validators.max(20)]
    ]
  })

  onSubmit (): void {
    const questionsCount =
      this.quizGenerationForm.controls.questionsCount.value ??
      QuizGenerationComponent.DEFAULT_QUESTIONS_COUNT

    this._quizGenerationFeature.generateQuiz(questionsCount)
  }
}
