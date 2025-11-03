import type { OptionStatus, Question, Solution } from '../domain';

import { QuizRepository } from './quiz.repository';

/**
 * Quiz states:
 *
 *     idle → loading → ready-to-answer ⟲
 *       ↑       ↓            ↓
 *       |     error    checking-answer
 *       |                    ↓
 *       └─── completed ← {revealed}
 */
export type QuizStatus =
  | 'idle'
  | 'loading'
  | 'ready-to-answer'
  | 'checking-answer'
  | { revealed: Solution }
  | 'completed'
  | { error: string };

export class QuizStore {
  readonly #quizRepository: QuizRepository;

  private constructor(quizRepository: QuizRepository) {
    this.#quizRepository = quizRepository;
  }

  // State
  #currentAnswer = $state<string | null>(null);
  #currentQuestionIndex = $state<number>(0);
  #questions = $state<Question[]>([]);
  #score = $state<number>(0);
  #status = $state<QuizStatus>('idle');

  // Selectors
  readonly canMoveToNext = $derived<boolean>(
    typeof this.#status === 'object' && 'revealed' in this.#status
  );

  readonly canPickAnswer = $derived<boolean>(this.#status === 'ready-to-answer');

  readonly canStartQuiz = $derived<boolean>(
    this.#status === 'idle' ||
      this.#status === 'completed' ||
      (typeof this.#status === 'object' && 'error' in this.#status)
  );

  readonly canSubmitAnswer = $derived<boolean>(
    this.#status === 'ready-to-answer' && !!this.#currentAnswer
  );

  readonly completionRate = $derived.by<number>(() => {
    const isAnswerSubmitted = typeof this.#status === 'object' && 'revealed' in this.#status;
    const answeredQuestionsCount = this.#currentQuestionIndex + (isAnswerSubmitted ? 1 : 0);

    return (answeredQuestionsCount / this.#questions.length) * 100;
  });

  readonly currentQuestion = $derived<Question | null>(
    this.#questions.at(this.#currentQuestionIndex) || null
  );

  readonly currentQuestionIndex = $derived<number>(this.#currentQuestionIndex);

  readonly isAnswerBeingChecked = $derived<boolean>(this.#status === 'checking-answer');

  readonly isCompleted = $derived<boolean>(this.#status === 'completed');

  readonly isLastQuestion = $derived<boolean>(
    this.#currentQuestionIndex === this.#questions.length - 1
  );

  readonly isOngoing = $derived<boolean>(
    this.#status === 'checking-answer' ||
      this.#status === 'ready-to-answer' ||
      (typeof this.#status === 'object' && 'revealed' in this.#status)
  );

  readonly score = $derived<number>(this.#score);

  readonly solution = $derived<Solution | null>(
    typeof this.#status === 'object' && 'revealed' in this.#status ? this.#status.revealed : null
  );

  readonly totalQuestionsCount = $derived<number>(this.#questions.length);

  // Actions
  moveOntoNextQuestion = (): void => {
    if (!this.canMoveToNext) {
      return;
    }

    this.#currentAnswer = null;

    const isLastQuestionPassed = this.#currentQuestionIndex === this.#questions.length - 1;
    if (isLastQuestionPassed) {
      this.#status = 'completed';
      return;
    }

    this.#currentQuestionIndex = this.#currentQuestionIndex + 1;
    this.#status = 'ready-to-answer';
  };

  pickAnswer = (answer: string): void => {
    if (!this.canPickAnswer) {
      return;
    }

    this.#currentAnswer = answer;
  };

  restart = (): void => {
    this.#currentAnswer = null;
    this.#currentQuestionIndex = 0;
    this.#questions = [];
    this.#score = 0;
    this.#status = 'idle';
  };

  startQuiz = async (count: number = 10): Promise<void> => {
    if (!this.canStartQuiz) {
      return;
    }

    this.#currentAnswer = null;
    this.#currentQuestionIndex = 0;
    this.#questions = [];
    this.#score = 0;
    this.#status = 'loading';

    await this.#quizRepository
      .fetchRandomQuestions(count)
      .then((questions) => {
        this.#questions = questions;
        this.#status = 'ready-to-answer';
      })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load quiz';
        this.#status = { error: errorMessage };
      });
  };

  submitAnswer = async (): Promise<void> => {
    const currentQuestionId = this.currentQuestion?.id;
    if (!this.canSubmitAnswer || !currentQuestionId) {
      return;
    }

    this.#status = 'checking-answer';

    await this.#quizRepository
      .fetchSolution(currentQuestionId)
      .then((solution) => {
        this.#status = { revealed: solution };

        const isAnswerCorrect = solution.answer === this.#currentAnswer;
        if (isAnswerCorrect) {
          this.#score = this.#score + 1;
        }
      })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch solution';
        this.#status = { error: errorMessage };
      });
  };

  // Method
  getOptionStatus = (label: string): OptionStatus => {
    if (this.#status === 'ready-to-answer') {
      return this.#currentAnswer === label ? 'selected' : 'pristine';
    }

    if (typeof this.#status === 'object' && 'revealed' in this.#status) {
      const { answer } = this.#status.revealed;

      if (label === answer) return 'correct';

      const isSelectedLabel = this.#currentAnswer === label;
      return isSelectedLabel ? 'incorrect' : 'not picked';
    }

    return 'pristine';
  };

  // Factory
  static create(): QuizStore {
    const quizRepository = new QuizRepository();
    return new QuizStore(quizRepository);
  }
}
