<script lang="ts" context="module">
  import * as FiguresOfSpeechApi from '$lib/functions/api';

  /** @type {import('./index').Load} */
  export async function load() {
    const definitions = FiguresOfSpeechApi.get();
    return { props: { definitions } };
  }
</script>

<script lang="ts">
  import GlossarySection from '$lib/components/glossary-section.svelte';
  import { normalize } from '$lib/functions/utils';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definitions: FigureOfSpeech[];

  $: glossary = definitions
    .map((definition) => {
      let key = definition.name[0].toLocaleLowerCase();
      key = normalize(key);

      return { key, definition };
    })
    .reduce((map, { key, definition }) => {
      map[key] = map.hasOwnProperty(key)
        ? [...map[key], definition]
        : [definition];

      return map;
    }, { });
</script>

<svelte:head>
  <title>
    Glossaire | Locutionis - Petit référentiel des figures de style
  </title>
</svelte:head>

<h1 class="mb-3 text-2xl font-extrabold tracking-tight md:text-4xl sm:text-center text-primary">
  Glossaire
</h1>

<div class="container flex flex-col gap-3 md:gap-6">
  {#each Object.entries(glossary) as [key, definitions]}
    <GlossarySection {key} {definitions} />
  {/each}
</div>
