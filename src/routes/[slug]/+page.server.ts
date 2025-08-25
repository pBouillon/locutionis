import { getFigureBySlug, getAllSlugs } from '$lib/figure-of-speech/figure-of-speech';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

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
