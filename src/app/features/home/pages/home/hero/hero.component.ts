import { Component } from '@angular/core'
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SubtitleComponent],
  template: `
    <section
      class="my-12 mx-auto flex max-w-7xl flex-col gap-10 sm:px-6 md:px-8"
    >
      <h1
        class="text-center text-4xl font-bold tracking-tight dark:text-white sm:text-5xl lg:text-6xl"
      >
        Petit référentiel de figures de style.
      </h1>

      <app-subtitle>
        <em>Locutionis</em> est un petit référentiel amateur de figures de style
        françaises visant à vulgariser leurs définitions et usages.
      </app-subtitle>
    </section>
  `
})
export class HeroComponent {}
