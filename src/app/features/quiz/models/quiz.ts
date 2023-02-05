import { type Question } from './question'

export interface Quiz {
  currentQuestionIndex: number
  goodAnswers: number
  isCurrentQuestionAnswered: boolean
  isFinished: boolean
  questions: Question[]
}
