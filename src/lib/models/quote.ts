/**
 * A quote extracted from a source
 * @example { text: 'Ce soir, nous dînons en Enfer !', source: '300' }
 */
export interface Quote {

  /** The quoted sentence */
  text: string;

  /** The reference of that example (a book, a movie, an author, etc.) */
  source?: string | undefined;

}
