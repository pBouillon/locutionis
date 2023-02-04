import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MainButtonLinkComponent } from 'src/app/components/main-button-link/main-button-link.component';

@Component({
  selector: 'app-quiz-generation',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MainButtonLinkComponent],
  template: `
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

    <form
      class="flex flex-col items-center gap-8"
      [formGroup]="quizGenerationForm"
      (submit)="onSubmit()"
    >
      <div class="w-full sm:w-1/2 md:w-1/4">
        <label
          for="questions-count"
          class="mb-2 block font-medium text-gray-400"
        >
          Nombre de questions
        </label>

        <input
          id="questions-count"
          type="number"
          aria-describedby="helper-text-explanation"
          formControlName="questionsCount"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          min="0"
          max="10"
          required
        />

        <p
          id="helper-text-explanation"
          class="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Choisissez la longueur du quiz, de 1 à 10 questions
        </p>
      </div>

      <div>
        <button
          type="submit"
          class="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:bg-sky-500/50 disabled:text-white/50 sm:w-1/2 md:w-1/4"
          [disabled]="quizGenerationForm.invalid"
        >
          <i class="bi bi-joystick pr-2"></i>
          Lancer le quiz !
        </button>

        <p class="mt-2 mx-auto text-center text-xs md:text-sm text-gray-400">
          Ou
          <a
            [routerLink]="['glossaire']"
            [relativeTo]="null"
            class="text-sky-500"
          >
            potasser encore un peu
          </a>
        </p>
      </div>
    </form>
  `,
})
export class QuizGenerationComponent {
  private static readonly DEFAULT_QUESTIONS_COUNT = 5;

  @Output() generateQuiz = new EventEmitter<number>();

  quizGenerationForm = inject(FormBuilder).group({
    questionsCount: [
      QuizGenerationComponent.DEFAULT_QUESTIONS_COUNT,
      [Validators.required, Validators.min(0), Validators.max(10)],
    ],
  });

  onSubmit(): void {
    const questionsCount =
      this.quizGenerationForm.controls.questionsCount.value ??
      QuizGenerationComponent.DEFAULT_QUESTIONS_COUNT;

    this.generateQuiz.emit(questionsCount);
  }
}
