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
    avoir compris le premier.
    `,
    examples: [
      { text: `Le cœur a ses raisons que la raison ne connaît point.`, source: 'Pascal' },
      {
        text: `Adieu, monsieur l'homme d'affaires, qui n'avez fait celles de personne.`,
        source: 'Marivaux, Madame Argante I, X, La Mère confidente',
      },
      { text: `Les étudiants, c'est comme le linge, quand il fait beau, ça sèche.` },
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
    la comparaison), d'un comparant (le 'thème' utilisé pour imager le comparé)
    et d'un outil de comparaison (c'est ce qui met en liaison le comparé et le
    comparant).
    `,
    goal: `
    En mettant deux termes sur le même plan littéraire, la comparaison permet de
    souligner leurs points communs pour imager ses propos.
    `,
    examples: [
      {
        text: `Et cette terre était proche, et elle lui apparaissait comme un bouclier sur la mer sombre.`,
      },
      { text: `Tu es fait comme un rat!` },
      { text: `Sa barbe était d'argent comme un ruisseau d'avril.` },
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
      { text: `J'espère, que dis-je ? Je suis sûr qu'on vous rendra justice.` },
      { text: `Votre prudence ou plutôt votre lâcheté nous ont perdu.` },
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
      { text: `Il n'est plus que l'ombre de lui-même.` },
      { text: `Il me casse les pieds.` },
      { text: `Il est mort dans la fleur de l'âge.` },
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
  {
    name: 'Métonymie',
    description: `
    La métonymie consiste en le remplacement d'un terme désignant un tout par un
    autre en désignant une partie. Le rapport entre les deux est implicite et,
    s'il n'est pris qu'au premier degré, la phrase devient alors incohérente.
    `,
    goal: `
    Utiliser une métonymie permet d'alléger la structure de la phrase comme par
    exemple dire "Je n'ai plus de batterie" au lieu de "Je n'ai plus d'énergie
    dans mon téléphone portable".

    Elle a aussi l'avantage d'englober toute la population désignée et donc peut
    renforcer un argumentaire. Lors d'un débat, si l'on désigne "les français"
    au lieu de cibler la tranche de population, on donne alors l'impression que
    notre discours concerne l'entièreté des habitants de France.
    `,
    examples: [
      { text: `Tu veux boire un verre ?` },
      { text: `Je n'ai plus de batterie.` },
      { text: `La France a obtenu une médaille d'or aux Jeux Olympiques.` },
    ],
    sources: [
      {
        name: 'linternaute',
        href: 'https://www.linternaute.fr/dictionnaire/fr/definition/metonymie/',
      },
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/M%C3%A9tonymie',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=521',
      },
    ],
  },
  {
    name: 'Catachrèse',
    description: `
    Une catachrèse est l'utilisation d'un mot pour désigner autre chose que ce
    qu'il défini initialement. Dans certains cas il s'agit d'une métaphore qui
    est passé dans la langue courante (ex: les pieds d'une table).
    `,
    goal: `
    Une catachrèse est utilisée la plupart du temps pour désigner quelque chose
    pour lequel la langue n'a pas de mot définissant ce dont on veut parler.
    C'est par exemple le cas pour le "verre" lorsque l'on propose de "boire un
    verre": le français n'a pas de mot pour désigner simplement le contenu d'un
    verre.
    `,
    examples: [
      { text: `J'ai abîmé la plume de mon stylo en appuyant trop fort.` },
      { text: `Les ailes de cet avion sont sales !` },
      { text: `Le pied de la table a été rongé par les thermites.` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Catachrèse',
      },
      {
        name: 'Larousse',
        href: 'https://www.larousse.fr/dictionnaires/francais/catachr%C3%A8se/13695',
      },
      {
        name: 'Wiktionnaire',
        href: 'https://fr.wiktionary.org/wiki/catachr%C3%A8see',
      },
    ],
  },
  {
    name: 'Chleuasme',
    description: `
    Le chleuasme est le fait de se dévaloriser en faisant preuve de fausse
    modestie.
    `,
    goal: `
    En se critiquant, le locuteur cherche à s'attirer la sympathie de la
    personne qui l'écoute.
    `,
    examples: [
      { text: `Je ne suis vraiment pas beau ce matin ...` },
      { text: `Je ne maîtrise pas très bien le sujet mais je peux quand même regarder.` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Chleuasme',
      },
    ],
  },
  {
    name: 'Hyperhypotaxe',
    description: `
    On parle d'hyperhypotaxe lorsqu'une phrase est construite avec un nombre
    excessif de prépositions.
    `,
    goal: `
    L'hyperhypotaxe permet souvent de mettre démesurément en avant les détails
    d'un argumentaire, perdant ainsi la personne qui l'écoute ou l'empêchant de
    formuler facilement un contre-argument, ces derniers n'en finissant pas.
    `,
    examples: [
      {
        text: `Martial est fils de noble, puisque son père est quasi-baron, étant donné
        que sa mère était une fille Angenaux, qui étaient reconnus comme maîtres
        des terres, et que sa belle-mère avait des accointances avec les De
        Bellot, à qui appartient le château...`,
      },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Hyperhypotaxe',
      },
      {
        name: 'Wiktionnaire',
        href: 'https://fr.wiktionary.org/wiki/hyperhypotaxe',
      },
      {
        name: 'WebLettres',
        href: 'https://www.weblettres.net/spip/article.php3?id_article=122',
      },
    ],
  },
  {
    name: 'Parataxe',
    description: `
    La parataxe consiste en la juxtaposition de deux mots ou phrases sans mots
    de liaison. Dans une phrase, cette dernière semblera alors coupé alors que
    dans le cadre de mots, ces derniers donneront une impression télégraphique.
    `,
    goal: `
    Puisque la relation entre les termes n'est pas définie, l'utilisation de la
    parataxe fait sonner la seconde partie comme la conséquence de la première.
    `,
    examples: [
      { text: `Vous n'êtes point gentilhomme, vous n'aurez pas ma fille.` },
      {
        text: `Il faisait beau. Le Soleil illuminait la pièce. Au dehors, le chant des oiseaux résonnait dans la clairière.`,
      },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Parataxe',
      },
      {
        name: 'La Culture Générale',
        href: 'https://www.laculturegenerale.com/parataxe-definition-simple-exemples/',
      },
    ],
  },
  {
    name: 'Antonomase',
    description: `
    L'antonomase est lorsque l'on utilise un nom commun comme nom propre ou bien
    l'inverse.
    `,
    goal: `
    L'antonomase permet de souligner une aspect de ce que l'on désigne
    en l'assimilant à autre chose souvent connue pour une caractéristique
    spécifique.
    `,
    examples: [
      { text: `J'irais acheter des sandwichs pour notre pique-nique de demain midi.` },
      { text: `L'Arc de Triomphe a été rénové.` },
      { text: `Peux-tu me passer le Sopalin ?` },
      { text: `Encore un rendez-vous amoureux ? Quel Don Juan !` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Antonomase',
      },
      {
        name: 'Larousse',
        href: 'https://www.larousse.fr/dictionnaires/francais/antonomase/4354',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=1278',
      },
    ],
  },
  {
    name: 'Prétérition',
    description: `
    La prétérition consiste à parler de quelque chose juste après avoir annoncé
    que nous n'allions pas le faire.
    `,
    goal: `
    L'emploi de la prétérition permet d'aborder des sujets sensibles en
    déresponsabilisant l'orateur.
    Elle est également employée lorsque l'auteur souhaite aborder un sujet qu'il
    se refuse à décrire.
    `,
    examples: [
      { text: `Je n'ai pas besoin de te rappeler que je dois envoyer ce document ce soir.` },
      { text: `Je ne vous dirais pas que le coût de la vie est trop élevé (...)` },
      { text: `Madame Y, pour ne pas la citer, (...)` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Prétérition',
      },
      {
        name: 'La Culture Générale',
        href: 'https://www.laculturegenerale.com/preterition-definition-exemples/',
      },
    ],
  },
  {
    name: 'Litote',
    description: `
    La litote est une figure de style par laquelle on exprime l'inverse de ce
    que l'on souhaite faire comprendre. Elle peut également être exprimée par
    une double négation.
    `,
    goal: `
    En en laissant entendre moins que ce que l'on veut, on renforce l'idée que
    l'on souhaite faire passer. Par exemple, dire qu'un repas n'était "pas
    mauvais" signifie bien généralement qu'il était très bon.
    `,
    examples: [
      { text: `Pas mauvais ce repas !` },
      { text: `Vous n'êtes pas sans savoir (...)` },
      { text: `Ça n'était pas le match du siècle.` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Litote',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=207',
      },
    ],
  },
  {
    name: 'Euphémisme',
    description: `
    L'euphémisme est le fait d'exprimer une idée en atténuant la réalité en
    employant un mot moins fort.
    `,
    goal: `
    Le but de l'euphémisme est d'adoucir des propos qui pourraient être
    blessants ou choquant. Elle peut également avoir un effet comique en étant
    utilisée de manière sarcastique.
    `,
    examples: [
      { text: `La Russie a engagé une opération militaire spéciale en Ukraine.` },
      { text: `Je ne roule pas sur l'or.` },
      { text: `Il a passé l'arme à gauche il y a trois ans.` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Euphémisme',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=207',
      },
      {
        name: 'Office québécois de la langue française',
        href: 'http://bdl.oqlf.gouv.qc.ca/bdl/gabarit_bdl.asp?id=3202',
      },
    ],
  },
  {
    name: 'Métalepse',
    description: `
    Une métalepse est une figure de style dans laquelle on remplace la cause
    par la conséquence et inversement.
    `,
    goal: `
    La métalepse permet de passer sous silence une idée et de laisser
    le lecteur se représenter ce qui est réellement entendu.
    `,
    examples: [
      { text: `Ce soir, nous dînons en Enfer !` },
      { text: `Il ne sera pas là ce matin, il a trop bu hier.` },
      { text: `Comme tu as grandi !` },
    ],
    sources: [
      {
        name: 'Wikipédia',
        href: 'https://fr.wikipedia.org/wiki/Métalepse',
      },
      {
        name: 'Larousse',
        href: 'https://www.larousse.fr/dictionnaires/francais/m%C3%A9talepse/50831',
      },
      {
        name: 'Youtube - Point Culture',
        href: 'https://youtu.be/ByDNEsBNf24?t=1344',
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
