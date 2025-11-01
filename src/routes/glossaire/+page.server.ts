import { getAllFigures } from '$lib/figure-of-speech/data-access';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const figures = await getAllFigures();
  return { figures };
};
