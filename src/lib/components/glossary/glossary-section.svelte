<script lang="ts">
  import GlossaryEntry from './glossary-entry.svelte';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let key: string;
  export let definitions: FigureOfSpeech[];
</script>

<div>
  <h2 class="text-lg font-semibold md:text-2xl md:mb-3 text-primary">
    {key.toUpperCase()}
  </h2>

  <div class="flex flex-col gap-2">
    {#each definitions as definition}
      <GlossaryEntry {definition} />
    {/each}
  </div>
</div>
