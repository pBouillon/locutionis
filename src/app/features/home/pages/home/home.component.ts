import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HeroComponent } from './hero/hero.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <app-hero />

    <section class="my-12 mx-auto max-w-4xl sm:px-6 md:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight dark:text-slate-200">
        Objectif
      </h2>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        Le but de <em>Locutionis</em> est de permettre à n'importe quel
        curieux·euse de parcourir et/ou découvrir des figures de style de la
        langue française.
      </p>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        N'étant qu'hobbyiste, les informations ici sont majoritairement agrégées
        depuis diverses ressources, pensez-donc à les vérifier. Vous pourrez
        trouver certaines sources dans le détail de chaque figure de style.
      </p>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        <em>Épanorthoses</em>, <em>antanaclases</em> et autres
        <em>antonomases</em> n'auront plus de secrets pour vous !
      </p>
    </section>

    <section class="my-12 mx-auto max-w-4xl sm:px-6 md:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight dark:text-slate-200">
        Pourquoi Locutionis
      </h2>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        Amateur des figures de style que j'ai pu découvrir au cours des années,
        je me suis toujours amusé tant de leur phonétique que de leurs capacités
        à qualifier la structure de nos phrases.
      </p>

      <p
        class="mt-3 max-w-3xl space-y-6 tracking-wide text-slate-600 dark:text-slate-400"
      >
        Ayant des difficultés à les garder en mémoire, c'est en mêlant ma
        passion pour ces dernières et pour l'informatique que j'ai choisi de
        créer
        <em>Locutionis</em>, en espérant qu'un jour cela puisse aider quelqu'un
        !
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
