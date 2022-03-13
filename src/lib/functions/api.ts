import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

const figuresOfSpeech: FigureOfSpeech[] = [
  {
    name: 'Épanorthose',
    description:`
    L'épanorthose est une figure de style qui consiste à corriger ses propres
    propos afin d'accentuer ce qu'il vient d'être affirmé, renforçant ainsi le
    sentiment exprimé.
    `,
    goal: `
    Il s'agit d'une figure de style souvent utilisée pour donner un sentiment de
    sincérité dans son discours. En se corrigeant, le locuteur donne l'impression
    de rechercher la précision.
    `,
    examples: [
      `J'espère, que dis-je ? Je suis sûr qu'on vous rendra justice`,
      `Votre prudence ou plutôt votre lâcheté nous ont perdu`,
    ],
    sources: [
      { name: 'Wikipedia', href: 'https://fr.wikipedia.org/wiki/Épanorthose' },
      { name: 'Wiktionnaire', href: 'https://fr.wiktionary.org/wiki/épanorthose' },
    ],
  },
];

export const get = (name: string | undefined = undefined): FigureOfSpeech[] => {
  let definitions = figuresOfSpeech;

  if (name) {
    definitions = definitions.filter((definition) => definition.name === name);
  }

  return definitions.sort((a, b) => a.name.localeCompare(b.name));
};
