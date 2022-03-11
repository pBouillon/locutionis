import type { FigureOfSpeech } from "$lib/models/figure-of-speech";

export const get = async (): Promise<{ body: FigureOfSpeech[]; }> => {
  const figuresOfSpeechFiles = import.meta.glob('../../lib/data/*.json');

  const definitions = await Promise.all(
    Object
      .values(figuresOfSpeechFiles)
      .map(async resolver => await resolver() as FigureOfSpeech));

  const sortedDefinitions = definitions.sort((a, b) => a.name.localeCompare(b.name));

  return {
    body: sortedDefinitions,
  };
};
