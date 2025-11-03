import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

import PocketBase from 'pocketbase';

import type { Question, Solution } from '../domain';

export class QuizRepository {
  readonly #pb = new PocketBase(PUBLIC_POCKETBASE_URL);

  async fetchRandomQuestions(count: number): Promise<Question[]> {
    if (count < 1 || count > 20) {
      throw new Error('Count must be between 1 and 20');
    }

    return this.#pb
      .send<{ questions: Question[]; total: number }>('/api/quiz/random', {
        method: 'GET',
        query: { count: count.toString() }
      })
      .then((response) => response.questions);
  }

  async fetchSolution(questionId: string): Promise<Solution> {
    if (!questionId) {
      throw new Error('Question ID is required');
    }

    return this.#pb.send<Solution>(`/api/quiz/question/${questionId}/solution`, {
      method: 'GET'
    });
  }
}
