import type { FigureOfSpeech } from '$lib/models/figure-of-speech';


const figuresOfSpeech: FigureOfSpeech[] = [{
  name: 'Épanorthose',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores, natus dolor voluptatibus architecto distinctio velit inventore reiciendis perspiciatis magni rerum dignissimos quidem repudiandae illum explicabo animi doloribus error atque!',
  goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores, natus dolor voluptatibus architecto distinctio velit inventore reiciendis perspiciatis magni rerum dignissimos quidem repudiandae illum explicabo animi doloribus error atque!',
  examples: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  ],
  sources: [
    { name: 'Wikipedia', href: 'https://fr.wikipedia.org' },
  ],
}]

export const get = (name: string | undefined = undefined): FigureOfSpeech[] => {
  let definitions = figuresOfSpeech;

  if (name) {
    definitions = definitions.filter(definition => definition.name === name);
  }

  return definitions.sort((a, b) => a.name.localeCompare(b.name));
}
