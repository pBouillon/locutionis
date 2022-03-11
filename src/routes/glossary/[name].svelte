<script context='module' lang='ts'>
  import type { FigureOfSpeech } from "$lib/models/figure-of-speech";

  export const load = async ({ params, fetch }) => {
    const name: string = params.name;

    const response = await fetch('/api/figures-of-speech.json');
    var definitions: FigureOfSpeech[] = await response.json();

    const definition = definitions.filter(figureOfSpeech => figureOfSpeech.name === name)[0];

    return {
      props: { definition: definition },
    };
  }
</script>

<script lang='ts'>
  export let definition: FigureOfSpeech;
</script>

<pre>{definition.name}</pre>
