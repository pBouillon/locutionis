import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section
      class="my-12 mx-auto flex max-w-7xl flex-col gap-10 sm:px-6 md:px-8"
    >
      <h1
        class="text-center text-4xl font-bold tracking-tight dark:text-white sm:text-5xl lg:text-6xl"
      >
        Petit référentiel de figures de style.
      </h1>

      <p
        class="mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400"
      >
        <em>Locutionis</em> est un petit référentiel amateur de figures de style
        françaises visant à vulgariser leurs définitions et usages.
      </p>

      <div class="flex justify-center">
        <a
          [routerLink]="['glossaire']"
          class="flex h-12 w-full items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-1/4"
        >
          Voir le glossaire
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {}
