<script lang="ts">
  import GlossaryEntry from "$lib/components/glossary-entry.svelte";
  import { normalize } from "$lib/functions/utils";

  import type { FigureOfSpeech } from "$lib/models/figure-of-speech";


  export let definitions: FigureOfSpeech[];

  $: glossary = definitions.reduce(
    (map, definition) => {
      let key = definition.name[0].toLocaleLowerCase();
      key = normalize(key);

      map[key] = [...map.get(key) ?? [], definition];
      return map;
    },
    new Map<string, FigureOfSpeech[]>());
</script>

<h1 class="text-primary text-xl mb-5">
  Glossaire
</h1>

{#each Object.entries(glossary) as [key, definitions]}
  <GlossaryEntry {key} {definitions} />
{/each}
