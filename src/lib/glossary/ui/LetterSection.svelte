<script lang="ts">
  import type { Figure } from '$lib/figure-of-speech/domain';

  import FigureCard from './FigureCard.svelte';
  import HeadingLetter from './HeadingLetter.svelte';

  let { letter, figures } = $props<{ letter: string; figures: Figure[] }>();
</script>

<section class="mb-20">
  <HeadingLetter {letter} />

  <div class="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 xl:grid-cols-3">
    {#each figures as figure}
      <FigureCard {figure} />
    {/each}
  </div>
</section>
