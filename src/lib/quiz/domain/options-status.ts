export type OptionStatus =
  /** Not selected for an unsubmitted question */
  | 'pristine'
  /** Selected but not submitted */
  | 'selected'
  /** Not selected when the answer was submitted */
  | 'not picked'
  /** Selected and submitted but incorrect */
  | 'incorrect'
  /** Selected and submitted and correct */
  | 'correct';
