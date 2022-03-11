<script lang="ts">
  import type { FigureOfSpeech } from "$lib/models/figure-of-speech";


  export let definitions: FigureOfSpeech[];
</script>

{#each definitions as definition}
  <p>{definition.name}</p>
{/each}
