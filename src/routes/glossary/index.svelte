<script lang="ts" context="module">
  import * as FiguresOfSpeechApi from '$lib/functions/api';

  export async function load() {
    const definitions = FiguresOfSpeechApi.get();
    return { props: { definitions } };
  }
</script>

<script lang="ts">
  import GlossarySection from '$lib/components/glossary/glossary-section.svelte';
  import SearchBar from '$lib/components/search-bar.svelte';
  import { normalize } from '$lib/functions/utils';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definitions: FigureOfSpeech[] = [];
  export let searchText: string = '';

  $: glossary = definitions.reduce((map, definition) => {
    let key = definition.name[0].toLocaleLowerCase();
    key = normalize(key);

    return map.set(key, [...(map[key] ?? []), definition]);
  }, new Map<string, FigureOfSpeech[]>());

  // $: filtered = glossary.filter();
</script>

<svelte:head>
  <title>Glossaire | Locutionis - Petit référentiel des figures de style</title>
</svelte:head>

<h1 class="mb-3 text-2xl font-extrabold tracking-tight md:text-4xl sm:text-center text-primary">
  Glossaire
</h1>

<div class="container my-5 md:my-8">
  <SearchBar bind:searchText />
</div>

<div class="container flex flex-col gap-3 md:gap-6">
  {#each Array.from(glossary.entries()) as [key, definitions]}
    <GlossarySection {key} {definitions} />
  {/each}
</div>
