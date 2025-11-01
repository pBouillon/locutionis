<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
  import { resolve } from '$app/paths';
  import type { Solution } from '../domain/solution';

  let { solution } = $props<{ solution: Solution }>();
</script>

<div
  transition:slide={{ easing: quintOut }}
  class="mt-6 rounded-lg border border-accent-foreground/20 bg-accent-background/10 p-4"
>
  <h3 class="mb-2 font-semibold text-accent-foreground">Explication</h3>
  <p class="leading-relaxed text-secondary-foreground">
    {solution.explanation}
  </p>

  <hr class="my-4 border-t border-dashed border-accent-foreground" />

  <a
    href={resolve(`/${solution.glossaryEntrySlug}?utm_source=quiz-explanation`)}
    target="_blank"
    class="inline-flex gap-2 text-accent-foreground"
    ><span>Voir définition dans le glossaire</span><i class="bi bi-box-arrow-up-right"></i></a
  >
</div>
