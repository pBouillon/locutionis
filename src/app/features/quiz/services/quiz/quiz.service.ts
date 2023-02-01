import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { BehaviorSubject, map, type Observable } from 'rxjs'
import { ErrorType, type Error } from 'src/app/models/error'
import { environment } from 'src/environments/environment'
import { type Question } from '../../models/question'
import { type Quiz } from '../../models/quiz'

@Injectable()
export class QuizService {
  private readonly _dataService = inject(QuizDataService)

  private readonly _current$ = new BehaviorSubject<Quiz | null>(null)
  readonly current$ = this._current$.asObservable()

  private readonly _error$ = new BehaviorSubject<Error | null>(null)
  readonly error$ = this._error$.asObservable()

  private readonly _isLoading$ = new BehaviorSubject<boolean>(false)
  readonly isLoading$ = this._isLoading$.asObservable()

  answerCurrentQuestion (answer: string): void {
    const quiz = this._current$.getValue()

    if (quiz === null) return

    const question = quiz.questions[quiz.currentQuestionIndex]
    const isAnswerValid = question.solution.localeCompare(answer) === 0
    const goodAnswers = quiz.goodAnswers + (isAnswerValid ? 1 : 0)

    const nextIndex = quiz.currentQuestionIndex + 1
    const isFinished = quiz.questions.length === nextIndex

    this._current$.next({
      ...quiz,
      currentQuestionIndex: nextIndex,
      goodAnswers,
      isFinished
    })
  }

  /**
   * Delete the currently ongoing quiz
   */
  discardCurrentQuiz (): void {
    this._current$.next(null)
  }

  /**
   * Generate a new quiz with a predefined number of questions
   * @param questionsCount The number of questions the quiz should have
   */
  generateQuiz (questionsCount: number): void {
    this._isLoading$.next(true)

    this._dataService
      .generateQuestions(questionsCount)
      .pipe(
        map(
          (questions: Question[]): Quiz => ({
            questions,
            goodAnswers: 0,
            currentQuestionIndex: 0
          })
        )
      )
      .subscribe({
        next: (quiz: Quiz) => {
          this._current$.next(quiz)
          this._error$.next(null)
          this._isLoading$.next(false)
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400) {
              this._error$.next({
                type: ErrorType.UnableToGenerateQuestions,
                message: 'Impossible de générer le quiz'
              })
            } else {
              this._error$.next({
                type: ErrorType.UnableToConnect,
                message: 'Impossible de se connecter au serveur pour le moment'
              })
            }
          }

          this._isLoading$.next(false)
        }
      })
  }

  /**
   * Regenerate a new quiz with the same number of questions has the current one
   * If none is ongoing, does not do anything
   * @returns The newly generated quiz
   */
  regenerateQuiz (): void {
    const current = this._current$.getValue()

    if (current === null) return

    const questionsCount = current.questions.length
    this.generateQuiz(questionsCount)
  }
}

@Injectable({ providedIn: 'root' })
class QuizDataService {
  private readonly _http = inject(HttpClient)

  /**
   * Generate {@link questionsCount} questions
   * @param questionsCount The number of questions to generate
   * @returns The generated questions
   */
  generateQuestions (questionsCount: number): Observable<Question[]> {
    return this._http.get<Question[]>(`${environment.apiUri}/api/questions`, {
      params: { count: questionsCount }
    })
  }
}
