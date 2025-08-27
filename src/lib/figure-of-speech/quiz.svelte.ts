export type Question = {
  label: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

export type AnswerStatus =
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

const questions: Question[] = [
  {
    label: '« Moi, je fais attention au tri sélectif » est un exemple de :',
    options: ['Métaphore', 'Simploque', 'Pléonasme', 'Oxymore'],
    answerIndex: 2,
    explanation: "Si ça n'est pas sélectif, ça n'est pas un tri, on répète donc la même idée."
  },
  {
    label: '« La montagne, ça vous gagne ! » utilise une :',
    options: ['Homéotéleute', 'Antanaclase', 'Chleuasme', 'Epanadiplose'],
    answerIndex: 0,
    explanation: "On retrouve la même terminaison en 'agne' dans 'montagne' et 'gagne'."
  },
  {
    label: 'Dans « La chance sourit aux audacieux », on trouve :',
    options: ['Un hypallage', 'Une métaphore', 'Une parataxe', 'Une prosopopée'],
    answerIndex: 3,
    explanation: "La chance est personnifiée, elle sourit, ce qui n'est normalement qu'humain."
  },
  {
    label: 'Dans « Il conduit comme un fou ! », quelle figure remarquez-vous ?',
    options: ['Une litote', 'Une comparaison', 'Une métaphore', 'Une métonymie'],
    answerIndex: 1,
    explanation:
      "Il y a un outil de comparaison ('comme'), un comparé ('un fou') et un comparant ('il')."
  },
  {
    label: "« Ton bulletin n'est pas brillant » est un exemple de :",
    options: ['Euphémisme', 'Litote', 'Ironie', 'Antiphrase'],
    answerIndex: 0,
    explanation:
      "Au lieu de dire que le bulletin est mauvais, on atténue l'idée en disant qu'il n'est pas brillant."
  },
  {
    label: '« Est-ce que vous avez du feu » est une:',
    options: ['Métonymie', 'Hyperhypotaxe', 'Oxymore', 'Prétérition'],
    answerIndex: 0,
    explanation: "On désigne le briquet par « du feu », qui n'en est qu'une partie."
  },
  {
    label: "Dans « Ca n'est sûrement pas très bon, je ne cuisine pas bien », on reconnaît :",
    options: ['Une allitération', 'Une polyptote', 'Une comparaison', 'Un chleuasme'],
    answerIndex: 3,
    explanation: 'Le but ici est de recevoir des compliments, en se dévalorisant.'
  },
  {
    label: "« Il n'a fait que parler, et il parle encore. » est un exemple de :",
    options: ['Epanorthose', 'Hypallage', 'Polyptote', 'Pleonasme'],
    answerIndex: 2,
    explanation: '"Parler" est présent deux fois à deux temps différents (infitif et présent).'
  },
  {
    label: 'Dans « Ancrée dans nos traditions innovantes » on note :',
    options: ['Une hyperbole', 'Une parataxe', 'Une allitération', 'Une oxymore'],
    answerIndex: 3,
    explanation:
      'Une tradition est coutume appartenant au passé, on parle en revanche d\'innovation pour des idées nouvelles. Une "tradition innovante" regroupe donc bien deux mots aux sens contraires'
  },
  {
    label: '« Comme tu as grandi ! » est une :',
    options: ['Métaphore', 'Prosopopée', 'Métalepse', 'Symploque'],
    answerIndex: 2,
    explanation:
      "C'est moins la taille de la personne qui est remarquée (conséquence) que celle qu'elle ai continué à grandir depuis la dernière fois (cause)."
  },
  {
    label: 'Dans « Je suis mort de froid ! », on observe :',
    options: ['Une hyperbole', 'Une polyptote', ' Une prétérition', 'Un euphémisme'],
    answerIndex: 0,
    explanation:
      "Pour se manifester, la personne n'est probablement pas morte, c'est donc bien une exagération."
  },
  {
    label: 'Une métalepse consiste à :',
    options: [
      'Atténuer la réalité en employant un mot moins fort.',
      'Utiliser des mots ayant la même syllabe finale.',
      'Remplacer la cause par la conséquence et inversement.',
      'Atténuer une idée pour suggérer davantage.'
    ],
    answerIndex: 2
  },
  {
    label: "On parle d'hyperhypotaxe quand on :",
    options: [
      'Met en relation deux éléments avec un outil de comparaison.',
      "Rattache l'adjectif d'un mot à un autre.",
      'Exagère pour accentuer une idée.',
      'Utilise beaucoup trop de prépositions.'
    ],
    answerIndex: 3
  },
  {
    label: 'On peut noter une homéotéleute quand un texte :',
    options: [
      'Utilise des mots ayant la même syllabe finale.',
      'Répète un même son consonne.',
      'Compare sans outil de comparaison.',
      'Utilise un mot sous plusieurs formes dans une même phrase.'
    ],
    answerIndex: 0
  }
];

const getRandomQuestions = (toPick: number): Question[] =>
  questions.toSorted(() => Math.random() - 0.5).slice(0, toPick);

export class QuizStore {
  #questions: Question[] = getRandomQuestions(10);
  #currentQuestionIndex = $state<number>(0);
  #isAnswerSubmitted = $state<boolean>(false);
  #score = $state<number>(0);
  #selectedAnswer = $state<number | null>(null);

  readonly completionRate = $derived(
    ((this.#currentQuestionIndex + (this.#isAnswerSubmitted ? 1 : 0)) / this.#questions.length) *
      100
  );
  readonly currentQuestion = $derived(this.#questions[this.#currentQuestionIndex]);
  readonly currrentQuestionIndex = $derived(this.#currentQuestionIndex);
  readonly isAnswerSelected = $derived(this.#selectedAnswer !== null);
  readonly isAnswerSubmitted = $derived(this.#isAnswerSubmitted);
  readonly isCompleted = $derived(this.#currentQuestionIndex === this.#questions.length);
  readonly questionsCount = $derived(this.#questions.length);
  readonly score = $derived(this.#score);

  readonly getAnswerStatus = (answerIndex: number): AnswerStatus => {
    if (!this.#isAnswerSubmitted && this.#selectedAnswer === answerIndex) {
      return 'selected';
    }

    if (!this.#isAnswerSubmitted) {
      return 'pristine';
    }

    if (answerIndex === this.currentQuestion.answerIndex) {
      return 'correct';
    }

    if (answerIndex === this.#selectedAnswer) {
      return 'incorrect';
    }

    return 'not picked';
  };

  readonly moveOntoNext = (): void => {
    if (this.isCompleted) {
      return;
    }

    this.#currentQuestionIndex++;

    this.#isAnswerSubmitted = false;
    this.#selectedAnswer = null;
  };

  readonly restart = (): void => {
    this.#score = 0;

    this.#isAnswerSubmitted = false;
    this.#selectedAnswer = null;

    this.#questions = getRandomQuestions(10);
    this.#currentQuestionIndex = 0;
  };

  readonly selectAnswer = (index: number): void => {
    this.#selectedAnswer = index;
  };

  readonly submitCurrentAnswer = (): void => {
    const hasSelectedAnAnswer = this.#selectedAnswer !== null;
    if (!hasSelectedAnAnswer) {
      return;
    }

    this.#isAnswerSubmitted = true;

    const hasSelectedTheCorrectAnswer = this.#selectedAnswer === this.currentQuestion.answerIndex;
    if (hasSelectedTheCorrectAnswer) {
      this.#score++;
    }
  };
}
