import { NgFor } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'
import { type NavbarLink } from '../navbar-link/navbar-link'
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component'

@Component({
  selector: 'app-navbar-block',
  standalone: true,
  imports: [NgFor, NavbarLinkComponent],
  template: `
    <div class="fixed inset-0 z-50">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/20 backdrop-blur-sm"
        (click)="close.emit()"
      ></div>

      <div
        class="fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:border dark:border-gray-400 dark:bg-gray-800"
      >
        <!-- Closing button -->
        <div class="absolute top-5 right-5">
          <button type="button" (click)="close.emit()">
            <i class="bi bi-x-lg text-xl text-gray-400 dark:text-slate-300"></i>
          </button>
        </div>

        <!-- Links -->
        <ul class="space-y-3">
          <li *ngFor="let link of links">
            <app-navbar-link [navigateTo]="link.navigateTo">
              {{ link.name }}
            </app-navbar-link>
          </li>
        </ul>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBlockComponent {
  /**
   * The links to be displayed
   */
  @Input() links: NavbarLink[] = []

  /**
   * Emits whenever the user request the navbar to be closed
   */
  @Output() close = new EventEmitter<void>()
}
