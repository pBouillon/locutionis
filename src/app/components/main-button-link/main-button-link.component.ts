import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-main-button-link',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex justify-center">
      <a
        [routerLink]="navigateTo"
        class="flex h-12 w-full items-center justify-center rounded-lg bg-sky-500 px-6 font-semibold text-white cursor-pointer hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-1/4"
      >
        <ng-content />
      </a>
    </div>
  `
})
export class MainButtonLinkComponent {
  @Input() navigateTo?: string | any[] = undefined
}
