import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { type Observable, tap } from 'rxjs'
import { quizFeature } from 'src/app/store/quiz'

export const canActivateOngoingQuizGuard = (): Observable<any> => {
  const router = inject(Router)
  const store = inject(Store)

  return store.select(quizFeature.selectIsFinished).pipe(
    tap((isFinished?: boolean) => {
      if (isFinished !== false) {
        void router.navigate(['/', 'quiz', 'nouveau'])
      }
    })
  )
}
