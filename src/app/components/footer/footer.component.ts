import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer
      class="flex min-w-max flex-col items-center gap-2 border-t py-3 dark:border-slate-600 md:mx-80"
    >
      <p class="flex gap-1 text-xs text-slate-600 dark:text-slate-300">
        <a href="https://github.com/pbouillon/locutionis" class="text-sky-500">
          <i class="bi bi-github"></i>
          Voir sur GitHub
        </a>

        -

        <a
          href="https://github.com/pBouillon/locutionis/issues/new/choose"
          class="text-sky-500"
        >
          Signaler une erreur
        </a>
      </p>

      <p class="text-xs text-slate-600 dark:text-slate-300">
        Créé par
        <a href="https://pbouillon.github.io" class="text-sky-500">
          Pierre Bouillon
        </a>
      </p>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
