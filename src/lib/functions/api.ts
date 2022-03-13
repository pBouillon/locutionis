import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

const figuresOfSpeech: FigureOfSpeech[] = [
  {
    name: 'Comparaison',
    description: `
    Une comparaison est la mise en relation de deux éléments différents
    partageant un point commun. Elle est constituée d'un comparé (l'objet de
    la comparaison), d'un comparant (le "thème" utilisé pour imager le comparé)
    et d'un outil de comparaison (c'est ce qui met en liaison le comparé et le
    comparant).
    `,
    goal: `
    En mettant deux termes sur le même plan littéraire, la comparaison permet de
    souligner leurs points communs pour imager ses propos.
    `,
    examples: [
      `Et cette terre était proche, et elle lui apparaissait comme un bouclier sur la mer sombre.`,
      `Tu es fait comme un rat!`,
      `Sa barbe était d'argent comme un ruisseau d'avril.`,
    ],
    sources: [
      {
        name: 'Wikipedia',
        href: 'https://fr.wikipedia.org/wiki/Comparaison_(rhétorique)',
      },
      {
        name: 'Comparaison - Figure de style',
        href: 'https://www.lalanguefrancaise.com/linguistique/la-comparaison-figure-de-style',
      },
      {
        name: 'La comparaison (figure de style)',
        href: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-comparaison-f1369',
      },
      {
        name: 'Point Culture : les figures de style',
        href: 'https://youtu.be/ByDNEsBNf24?t=478',
      },
    ],
  },
  {
    name: 'Épanorthose',
    description: `
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
      {
        name: 'Wikipedia',
        href: 'https://fr.wikipedia.org/wiki/Épanorthose',
      },
      {
        name: 'Wiktionnaire',
        href: 'https://fr.wiktionary.org/wiki/épanorthose',
      },
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
