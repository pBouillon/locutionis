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
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definitions: FigureOfSpeech[] = [];
  export let searchText: string = '';

  $: glossary = definitions.reduce((map, definition) => {
    const key = definition.name[0]
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return map.set(key, [...(map.get(key) ?? []), definition]);
  }, new Map<string, FigureOfSpeech[]>());

  $: filtered = Array.from(glossary.entries())
    .map(([key, definitions]) => {
      const matchingDefinitions = definitions.filter((definition) => {
        const query = searchText.toLocaleLowerCase();

        return definition.name
          .toLocaleLowerCase()
          .includes(query);
      });
      return [key, matchingDefinitions];
    })
    .filter(([_key, definitions]) => definitions.length > 0);
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

{#if filtered.length > 0}
  <div class="container flex flex-col gap-3 md:gap-6">
    {#each filtered as [key, definitions]}
      <GlossarySection {key} {definitions} />
    {/each}
  </div>
{:else}
  <p class="text-xl font-semibold tracking-wide text-center text-gray-400">
    Aucun résultat pour votre recherche
  </p>
{/if}
