import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

const figuresOfSpeech: FigureOfSpeech[] = [
  {
    name: 'Antanaclase',
    description: `
    On parle d'antanaclase lorsque l'on emploie deux fois un même mot mais avec
    un sens différent: on parle alors de polysémie (plusieurs sens). Si le mot
    n'est pas répété il est alors question d'antanaclase elliptique.
    `,
    goal: `
    Il s'agit d'une figure de style qui se prête très bien aux jeux de mots,
    elle est donc fréquemment utilisée pour faire de l'humour.

    En dehors du côté comique, elle permet de souligner le second sens du mot en
    surprenant le lecteur qui doit s'arrêter un instant pour le saisir après
    l'avoir avoir compris le premier.
    `,
    examples: [
      `Le cœur a ses raisons que la raison ne connaît point.`,
      `Adieu, monsieur l'homme d'affaires, qui n'avez fait celles de personne.`,
      `Les étudiants, c'est comme le linge, quand il fait beau, ça sèche.`,
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Antanaclase',
      },
      {
        name: 'Larousse',
        href: 'https://www.larousse.fr/dictionnaires/francais/antanaclase/10911044',
      },
      {
        name: 'La Culture Générale',
        href: 'https://www.laculturegenerale.com/antanaclase-diaphore-definition-exemples/',
      },
    ],
  },
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
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Comparaison_(rhétorique)',
      },
      {
        name: 'La langue française',
        href: 'https://www.lalanguefrancaise.com/linguistique/la-comparaison-figure-de-style',
      },
      {
        name: 'alloprof',
        href: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-comparaison-f1369',
      },
      {
        name: 'Youtube - Point Culture',
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
      `J'espère, que dis-je ? Je suis sûr qu'on vous rendra justice.`,
      `Votre prudence ou plutôt votre lâcheté nous ont perdu.`,
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Épanorthose',
      },
      {
        name: 'Wiktionnaire',
        href: 'https://fr.wiktionary.org/wiki/épanorthose',
      },
    ],
  },
  {
    name: 'Métaphore',
    description: `
    Une métaphore est similaire à une comparaison à la différence près qu'elle
    n'utilise pas d'outil de comparaison pour souligner le rapprochement de deux
    termes. C'est alors au lecteur d'essayer de deviner pourquoi l'auteur les a
    rapprochés pour créer cette image.
    `,
    goal: `
    Le but de la métaphore est d'imager ses propos pour souligner l'intensité
    ou la connotation de ce qui est imagé en lui donnant le sens d'un autre mot
    ou expression.
    `,
    examples: [
      'Étre dévoré par les remords.',
      'Il me casse les pieds.',
      'Il est mort dans la fleur de l\'âge.',
    ],
    sources: [
      {
        name: 'linternaute',
        href: 'https://www.linternaute.fr/dictionnaire/fr/definition/metaphore/',
      },
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/M%C3%A9taphore',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=478',
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
