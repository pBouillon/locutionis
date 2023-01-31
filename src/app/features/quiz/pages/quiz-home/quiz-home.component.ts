import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MainButtonLinkComponent } from 'src/app/components/main-button-link/main-button-link.component'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'
import { TitleComponent } from 'src/app/components/title/title.component'

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [RouterLink, MainButtonLinkComponent, TitleComponent, SubtitleComponent],
  template: `
    <app-title> Quiz </app-title>

    <app-subtitle>
      Les figures de style n'ont plus de secret pour vous ?
      <em>Challengez-vous</em> pour tester vos connaissances !
    </app-subtitle>

    <section class="my-12 mx-auto max-w-4xl sm:px-6 md:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight dark:text-slate-200">
        Fonctionnement
      </h2>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        Pour chaque exemple affiché à l'écran, retrouvez la figure de style
        correspondante parmi les propositions affichées.
      </p>
    </section>

    <app-main-button-link>
      <i class="bi bi-joystick pr-2"></i>
      Lancer le quiz !
    </app-main-button-link>

    <p class="text-center text-sm my-2 text-gray-400">
      Ou
      <a
        [routerLink]="['glossaire']"
        [relativeTo]="null"
        class="text-sky-500"
      >
        potasser encore un peu
      </a>
    </p>
  `
})
export class QuizHomeComponent {}
