<script lang="ts">
  import { base } from '$app/paths';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definition: FigureOfSpeech;
</script>

<div class="max-w-lg">
  <a href="{base}/glossary/{definition.name}" class="tracking-wide link">
    {definition.name}
  </a>
  <p class="text-sm text-gray-600 truncate dark:text-slate-400">
    {definition.description}
  </p>
</div>
