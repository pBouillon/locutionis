import type { Source } from "./source";

/**
 * The information about a specific figure of speech
 */
export interface FigureOfSpeech {
  /** The name of the figure of speech */
  name: string;

  /** Its overall description */
  description: string;

  /** Explanation about why one would use it */
  goal: string;

  /** Sentences using this figure of speech */
  examples: string[];

  /** External sources from which the previous information where gathered */
  sources: Source[];
}