import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

import { getAllSlugs, getFigureBySlug } from '$lib/figure-of-speech/data-access';

export const entries: EntryGenerator = async () => {
  const slugs = await getAllSlugs();
  console.log('Generated slugs:', slugs);
  return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params }) => {
  const figure = await getFigureBySlug(params.slug);

  if (!figure) {
    throw error(404, 'Figure de style non trouvée');
  }

  return {
    figure
  };
};
