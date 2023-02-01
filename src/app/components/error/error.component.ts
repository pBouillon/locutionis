import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { type Error, ErrorType } from 'src/app/models/error'

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [NgClass, RouterLink],
  template: `
    <h1 class="mb-5 text-2xl font-semibold text-blue-500">
      <i class="bi text-red-500" [ngClass]="errorIconName"></i>
      Une erreur est survenue
    </h1>

    <p class="dark:text-slate-300">
      {{ error.message }}
    </p>

    <div class="mt-10 flex w-full justify-center">
      <a [routerLink]="['/']" class="text-sky-500">
        Revenir à l'accueil
      </a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  @Input() error!: Error

  get errorIconName (): string {
    switch (this.error.type) {
      case ErrorType.UnableToConnect:
        return 'bi-wifi-off'
      case ErrorType.UnknownFigureOfSpeech:
        return 'bi-question-circle'
      default:
        return 'bi-slash-circle'
    }
  }
}
