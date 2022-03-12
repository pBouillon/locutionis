import * as FiguresOfSpeechApi from '$lib/functions/api';

/** @type {import('./index').RequestHandler} */
export const get = () => {
  return {
    body: { definitions: FiguresOfSpeechApi.get() },
  };
};
