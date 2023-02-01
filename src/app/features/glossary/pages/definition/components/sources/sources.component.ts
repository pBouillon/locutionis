import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { type Source } from 'src/app/features/glossary/models/source'

@Component({
  selector: 'app-sources',
  standalone: true,
  imports: [NgFor],
  template: `
    <section>
      <h2 class="mb-2 text-lg font-semibold text-sky-600">
        Sources
      </h2>

      <div class="flex flex-col gap-1 text-sm">
        <p *ngFor="let source of sources" class="dark:text-slate-300">
          -
          <a
            [href]="source.url"
            target="_blank"
            class="underline decoration-2 decoration-sky-500 hover:text-primary dark:text-gray-200"
          >
            {{ source.displayName }}
          </a>
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourcesComponent {
  @Input() sources: Source[] = []
}
