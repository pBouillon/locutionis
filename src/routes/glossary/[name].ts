import type { FigureOfSpeech } from "$lib/models/figure-of-speech";

export const get = async ({ params }) => {
  const figuresOfSpeechFiles = import.meta.glob('../../lib/data/*.json');

  if (!params?.name) {
    return { status: 400 };
  }

  const definitions = (await Promise.all(
    Object
      .values(figuresOfSpeechFiles)
      .map(async resolver => await resolver() as FigureOfSpeech)))
      .filter(definition => definition.name === params?.name);

  return definitions.length == 1
    ? { body: { definition: definitions[0] }}
    : { status: 404 };
};
