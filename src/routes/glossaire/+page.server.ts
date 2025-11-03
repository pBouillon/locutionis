import type { PageServerLoad } from './$types';

import { getAllFigures } from '$lib/figure-of-speech/data-access';

export const load: PageServerLoad = async () => {
  const figures = await getAllFigures();
  return { figures };
};
