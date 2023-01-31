import { NgFor, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { type Usage } from 'src/app/models'

@Component({
  selector: 'app-usages',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
  <section>
    <h2 class="mb-2 text-lg font-semibold text-sky-600">
      Quelques exemples
    </h2>

    <div class="flex flex-col gap-3 text-sm">
      <p *ngFor="let usage of usages" class="flex flex-col">
        <span class="dark:text-slate-300">
          - {{ usage.example }}
        </span>

        <span *ngIf="usage.source" class="text-slate-500">
          {{ usage.source }}
        </span>
      </p>
    </div>
  </section>
  `
})
export class UsagesComponent {
  @Input() usages: Usage[] = []
}
