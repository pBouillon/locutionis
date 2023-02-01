import { type Question } from './question'

export interface Quiz {
  currentQuestionIndex: number
  goodAnswers: number
  questions: Question[]
}
