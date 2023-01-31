import { Component } from '@angular/core'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component';
import { TitleComponent } from 'src/app/components/title/title.component';

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [TitleComponent, SubtitleComponent],
  template: `
    <app-title>Quiz</app-title>

    <app-subtitle>
      Les figures de style n'ont plus de secret pour vous ?
      <br/>
      <em>Challengez-vous</em> pour le vérifier !
    </app-subtitle>
  `
})
export class QuizHomeComponent {}
