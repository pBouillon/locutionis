import type { FigureOfSpeech } from "$lib/models/figure-of-speech";

/** @type {import('./[name]').RequestHandler} */
export const get = async ({ params }) => {
  const figuresOfSpeechFiles = import.meta.glob('../../lib/data/*.json');

  const [ definition ] = (await Promise.all(
    Object
      .values(figuresOfSpeechFiles)
      .map(async resolver => await resolver() as FigureOfSpeech)))
    .filter(definition => definition.name === params?.name);

  return definition
    ? { body: { definition }}
    : { status: 404 };
};
