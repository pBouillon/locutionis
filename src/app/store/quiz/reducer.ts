import { createFeature, createReducer, createSelector, on } from '@ngrx/store'

import { type Quiz } from 'src/app/features/quiz/models/quiz'
import { type Error } from 'src/app/models/error'
import { QuizActions } from './actions'

interface State {
  quiz: Quiz | null
  isLoading: boolean
  error: Error | null
}

const initialState: State = {
  quiz: null,
  isLoading: false,
  error: null
}

// eslint-disable-next-line @ngrx/prefix-selectors-with-select
export const quizFeature = createFeature({
  name: 'Quiz',
  reducer: createReducer(
    initialState,

    on(QuizActions.generateQuiz, (state): State => {
      return { ...state, isLoading: true }
    }),
    on(QuizActions.generateQuizSuccess, (state, { quiz }): State => {
      return {
        ...state,
        quiz,
        error: null,
        isLoading: false
      }
    }),
    on(QuizActions.generateQuizFailure, (state, { error }): State => {
      return {
        ...state,
        error,
        isLoading: false
      }
    }),
    on(QuizActions.resetQuiz, (state): State => {
      return { ...state, quiz: null }
    }),
    on(QuizActions.restartQuiz, (state): State => {
      return { ...state, quiz: null }
    }),

    on(QuizActions.answerSubmitted, (state): State => {
      const { quiz } = state

      if (quiz === null) {
        return { ...state }
      }

      return {
        ...state,
        quiz: { ...quiz, isCurrentQuestionAnswered: true }
      }
    }),
    on(QuizActions.validAnswerSubmitted, (state): State => {
      const { quiz } = state

      if (quiz === null) {
        return { ...state }
      }

      const questions = quiz.questions.map((question, index) =>
        index === quiz.currentQuestionIndex
          ? { ...question, isCorrectlyAnswered: true }
          : question
      )

      return {
        ...state,
        quiz: {
          ...quiz,
          questions,
          goodAnswers: quiz.goodAnswers + 1
        }
      }
    }),
    on(QuizActions.invalidAnswerSubmitted, (state): State => {
      const { quiz } = state

      if (quiz === null) {
        return { ...state }
      }

      const questions = quiz.questions.map((question, index) =>
        index === quiz.currentQuestionIndex
          ? { ...question, isCorrectlyAnswered: false }
          : question
      )

      return {
        ...state,
        quiz: { ...quiz, questions }
      }
    }),
    on(QuizActions.moveOntoNextQuestion, (state): State => {
      const { quiz } = state

      if (quiz === null) {
        return { ...state }
      }

      const nextQuestionIndex = quiz.currentQuestionIndex + 1
      const isQuizFinished = nextQuestionIndex === quiz.questions.length

      return {
        ...state,
        quiz: {
          ...quiz,
          isFinished: isQuizFinished,
          currentQuestionIndex: nextQuestionIndex,
          isCurrentQuestionAnswered: false
        }
      }
    })
  ),
  extraSelectors: (state) => ({
    selectCompletionRatio: createSelector(state.selectQuiz, (quiz) => {
      if (quiz === null) return null

      const { questions, currentQuestionIndex } = quiz
      return currentQuestionIndex / questions.length
    }),
    selectCurrentQuestion: createSelector(state.selectQuiz, (quiz) => {
      if (quiz === null) return null

      const { currentQuestionIndex, questions } = quiz
      return questions[currentQuestionIndex]
    }),
    selectIsFinished: createSelector(
      state.selectQuiz,
      (quiz) => quiz?.isFinished
    ),
    selectGoodAnswersCount: createSelector(state.selectQuiz, (quiz) =>
      quiz === null ? null : quiz.goodAnswers
    ),
    selectSuccessRatio: createSelector(state.selectQuiz, (quiz) => {
      if (quiz === null) return null

      const { questions, goodAnswers } = quiz
      return goodAnswers / questions.length
    }),
    selectQuestionsCount: createSelector(state.selectQuiz, (quiz) =>
      quiz === null ? null : quiz.questions.length
    )
  })
})

const selectAppreciationSelector = createSelector(
  quizFeature.selectCompletionRatio,
  (successRatio) => {
    if (successRatio === null) return null

    if (successRatio < 0.33) {
      return 'Un petit tour sur le glossaire avant de viser plus haut ?'
    }

    if (successRatio < 0.66) {
      return 'Encore quelques tours sur le glossaire et vous serez imbattable !'
    }

    if (successRatio < 0.95) {
      return "Impressionnant ! Vous n'aurez bientôt plus rien à apprendre ici !"
    }

    return `
      Parfait, il ne vous reste plus qu'a proposer celles que vous connaissez et
      qui n'apparaissent pas encore ici !
    `
  })

export const selectQuizVueModel = createSelector({
  currentQuestion: quizFeature.selectCurrentQuestion,
  isFinished: quizFeature.selectIsFinished,
  completionRatio: quizFeature.selectCompletionRatio,
  successRatio: quizFeature.selectSuccessRatio,
  isLoading: quizFeature.selectIsLoading,
  error: quizFeature.selectError
})

export const selectQuizResultsViewModel = createSelector({
  goodAnswersCount: quizFeature.selectGoodAnswersCount,
  appreciation: selectAppreciationSelector,
  isLoading: quizFeature.selectIsLoading,
  successRatio: quizFeature.selectSuccessRatio,
  questionsCount: quizFeature.selectQuestionsCount,
  isFinished: quizFeature.selectIsFinished
})
