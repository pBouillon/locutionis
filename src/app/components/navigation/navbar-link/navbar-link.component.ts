import { NgIf, NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, RouterModule],
  template: `
    <ng-template *ngIf="isExternalUrl() then externalUrl; else innerLink"/>

    <ng-template #externalUrl>
      <a
        [href]="navigateTo"
        class="text-lg md:text-base tracking-wide dark:text-slate-300 hover:cursor-pointer border-b-2 border-transparent hover:border-sky-500"
      >
        <ng-container *ngTemplateOutlet="linkContentTemplate"/>
        <span class="text-sm">
          <i class="bi bi-box-arrow-up-right"></i>
        </span>
      </a>
    </ng-template>

    <ng-template #innerLink>
      <a
        [routerLink]="navigateTo"
        routerLinkActive="underline"
        class="text-lg md:text-base tracking-wide dark:text-slate-300 hover:cursor-pointer decoration-sky-500 decoration-2 hover:underline"
      >
        <ng-container *ngTemplateOutlet="linkContentTemplate"/>
      </a>
    </ng-template>

    <ng-template #linkContentTemplate>
      <ng-content/>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarLinkComponent {
  /**
   * The URL to navigate to on click
   */
  @Input() navigateTo!: string

  /**
   * Whether this URL is an internal one or not
   */
  isExternalUrl (): boolean {
    return this.navigateTo?.startsWith('http') ?? false
  }
}
