import { getAllFigures } from '$lib/figure-of-speech/figure-of-speech';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const figures = await getAllFigures();
  return { figures };
};
