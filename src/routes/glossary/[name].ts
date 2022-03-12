import * as FiguresOfSpeechApi from '$lib/functions/api';

/** @type {import('./index').RequestHandler} */
export const get = ({ params }) => {
  const [definition] = FiguresOfSpeechApi.get(params.name);

  return definition
    ? { body: { definition } }
    : { status: 404 };
};
