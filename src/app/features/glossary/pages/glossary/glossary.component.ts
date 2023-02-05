import { AsyncPipe, NgIf } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component, type OnInit
} from '@angular/core'

import { ErrorComponent } from 'src/app/components/error/error.component'
import { injectPreviews } from 'src/app/store/figures-of-speech'
import { GlossaryListComponent } from './components/glossary-list/glossary-list.component'
import { GlossaryLoadingComponent } from './components/glossary-loading/glossary-loading.component'

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ErrorComponent,
    GlossaryListComponent,
    GlossaryLoadingComponent
  ],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-glossary-loading *ngIf="vm.isLoading; else display" />

      <ng-template #display>
        <app-glossary-list
          *ngIf="!vm.error; else error"
          [glossary]="vm.glossary"
        />

        <ng-template #error>
          <div class="sm:mx-auto sm:w-2/3 md:w-1/3">
            <app-error *ngIf="vm.error" [error]="vm.error" />
          </div>
        </ng-template>
      </ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent implements OnInit {
  private readonly _previewsFeature = injectPreviews()
  readonly vm$ = this._previewsFeature.vm$

  ngOnInit (): void {
    this._previewsFeature.load()
  }
}
