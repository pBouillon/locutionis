import { type Question } from './question'

export interface Quiz {
  currentQuestionIndex: number
  goodAnswers: number
  isFinished: boolean
  questions: Question[]
}
