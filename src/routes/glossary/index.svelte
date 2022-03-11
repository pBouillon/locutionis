<script lang="ts">
  import GlossarySection from "$lib/components/glossary-section.svelte";
  import { normalize } from "$lib/functions/utils";
  import type { FigureOfSpeech } from "$lib/models/figure-of-speech";

  export let definitions: FigureOfSpeech[];

  $: glossary = definitions
    .map(definition => {
      let key = definition.name[0].toLocaleLowerCase();
      key = normalize(key);

      return { key, definition };
    })
    .reduce((map, { key, definition }) => {
      map[key] = map.hasOwnProperty(key)
        ? [ ...map[key], definition ]
        : [ definition ];

      return map;
    }, { });

  console.log(glossary);
</script>

<h1 class="mb-3 text-2xl font-extrabold tracking-tight text-primary">
  Glossaire
</h1>

<div class="flex flex-col gap-6">
  {#each Object.entries(glossary) as [key, definitions]}
    <GlossarySection {key} {definitions} />
  {/each}
</div>
