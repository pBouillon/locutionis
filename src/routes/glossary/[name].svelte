<script lang="ts">
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definition: FigureOfSpeech;
</script>

<svelte:head>
  <title>
    {definition.name} | Locutionis - Petit référentiel des figures de style
  </title>
</svelte:head>

<h1 class="mb-3 text-2xl font-semibold text-primary">
  {definition.name}
</h1>
