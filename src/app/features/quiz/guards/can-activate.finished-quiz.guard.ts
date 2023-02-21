import { inject } from '@angular/core'
import { Router, type UrlTree } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, type Observable } from 'rxjs'
import { quizFeature } from 'src/app/store/quiz'

export const canActivateFinishedQuizGuard = (): Observable<boolean | UrlTree> => {
  const router = inject(Router)
  const store = inject(Store)

  return store.select(quizFeature.selectIsFinished).pipe(
    map((isFinished?: boolean) => {
      if (isFinished !== true) {
        return router.parseUrl('/quiz/nouveau')
      }

      return true
    })
  )
}
