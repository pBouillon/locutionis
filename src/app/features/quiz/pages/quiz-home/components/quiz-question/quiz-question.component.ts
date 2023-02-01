import { Component, Input } from '@angular/core'
import { type Question } from 'src/app/features/quiz/models/question'

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  template: ''
})
export class QuizQuestionComponent {
  @Input() question!: Question
}
