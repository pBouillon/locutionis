import { HttpClient, type HttpErrorResponse } from '@angular/common/http'
import { inject } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, filter, map, of, switchMap } from 'rxjs'

import { type Question } from 'src/app/features/quiz/models/question'
import { type Quiz } from 'src/app/features/quiz/models/quiz'
import { ErrorType, type Error } from 'src/app/models/error'
import { environment } from 'src/environments/environment'
import { QuizActions } from './actions'
import { quizFeature } from './reducer'

export const answerSubmitted$ = createEffect((actions$ = inject(Actions)) => {
  const store = inject(Store)

  return actions$.pipe(
    ofType(QuizActions.answerSubmitted),
    concatLatestFrom(() => store.select(quizFeature.selectCurrentQuestion)),
    filter(([, question]) => question !== null),
    map(([{ answer }, question]) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { solution } = question!
      const isAnswerCorrect = answer.localeCompare(solution) === 0

      return isAnswerCorrect
        ? QuizActions.validAnswerSubmitted()
        : QuizActions.invalidAnswerSubmitted()
    })
  )
}, { functional: true })

export const generateQuiz$ = createEffect((actions$ = inject(Actions)) => {
  const http = inject(HttpClient)

  return actions$.pipe(
    ofType(QuizActions.generateQuiz),
    switchMap(({ questionsCount }) =>
      http.get<Question[]>(`${environment.apiUri}/api/questions`, {
        params: { count: questionsCount }
      }).pipe(
        map((questions: Question[]) => {
          const quiz: Quiz = {
            questions,
            currentQuestionIndex: 0,
            goodAnswers: 0,
            isCurrentQuestionAnswered: false,
            isFinished: false
          }

          return QuizActions.generateQuizSuccess({ quiz })
        }),
        catchError((error: HttpErrorResponse) => {
          let digested: Error

          if (error.status === 400) {
            digested = {
              type: ErrorType.UnableToGenerateQuestions,
              message: 'Impossible de générer le quiz'
            }
          } else {
            digested = {
              type: ErrorType.UnableToConnect,
              message: 'Impossible de se connecter au serveur pour le moment'
            }
          }

          return of(QuizActions.generateQuizFailure({ error: digested }))
        })
      )
    )
  )
}, { functional: true })
