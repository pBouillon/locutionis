import { browser } from '$app/environment';

const STORAGE_KEY = 'learning-journey';

/**
 * Retrieves the initial list of learned figures of speech from localStorage.
 *
 * @returns An array of learned figure of speech names, or empty array if unavailable
 */
const getInitialValue = (): string[] => {
  if (!browser) {
    return [];
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse the learning journey from localStorage: ', e);
    return [];
  }
};

/**
 * Syncs the current state to localStorage.
 * @param value - The array of learned figures of speech to persist
 */
const syncToStorage = (value: string[]): void => {
  if (browser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }
};

/** A reactive store that tracks which figures of speech have been learned and syncs with localStorage. */
class LearningJourneyStore {
  #learnedFiguresOfSpeech = $state(getInitialValue());

  /**
   * Checks whether a specific figure of speech has been marked as learned.
   *
   * @param figureOfSpeechName - The name of the figure of speech to check
   *
   * @returns `true` if learned, `false` otherwise
   */
  readonly hasBeenLearned = (figureOfSpeechName: string): boolean => {
    return this.#learnedFiguresOfSpeech.includes(figureOfSpeechName);
  };

  /**
   * Marks a figure of speech as learned. Does nothing if already learned.
   *
   * @param figureOfSpeechName - The name of the figure of speech to mark as learned
   */
  readonly markAsLearned = (figureOfSpeechName: string): void => {
    if (this.hasBeenLearned(figureOfSpeechName)) {
      return;
    }

    this.#learnedFiguresOfSpeech = [...this.#learnedFiguresOfSpeech, figureOfSpeechName];

    syncToStorage(this.#learnedFiguresOfSpeech);
  };

  /**
   * Removes a figure of speech from the learned list.
   *
   * @param figureOfSpeechName - The name of the figure of speech to remove
   */
  readonly removeFromLearned = (figureOfSpeechName: string): void => {
    this.#learnedFiguresOfSpeech = this.#learnedFiguresOfSpeech.filter(
      (name) => name !== figureOfSpeechName
    );

    syncToStorage(this.#learnedFiguresOfSpeech);
  };
}

/** Global singleton instance of the {@link LearningJourneyStore}. */
export const learningJourneyStore = new LearningJourneyStore();
