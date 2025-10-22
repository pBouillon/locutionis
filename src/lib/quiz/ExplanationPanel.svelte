<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  let { explanation } = $props<{ explanation: string }>();
</script>

<div
  transition:slide={{ easing: quintOut }}
  class="mt-6 rounded-lg border border-accent-foreground/20 bg-accent-background/10 p-4"
>
  <h3 class="mb-2 font-semibold text-accent-foreground">Explication</h3>
  <p class="leading-relaxed text-secondary-foreground">
    {explanation}
  </p>
</div>
