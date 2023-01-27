import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [],
  template: `
    <h1
      class="text-sky-500 mb-3 text-2xl font-extrabold tracking-tight sm:text-center md:text-4xl"
    >
      Glossaire
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent {
}
