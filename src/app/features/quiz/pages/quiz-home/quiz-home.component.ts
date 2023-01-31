import { Component } from '@angular/core'
import { TitleComponent } from 'src/app/components/title/title.component';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title>Quiz</app-title>
  `
})
export class QuizHomeComponent {

}
