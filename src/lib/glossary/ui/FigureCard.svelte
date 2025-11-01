<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Figure } from '$lib/figure-of-speech/domain';
  import { learningJourneyStore } from '$lib/learning-journey/data-access';

  const { figure } = $props<{ figure: Figure }>();

  const hasBeenLearned = $derived(learningJourneyStore.hasBeenLearned(figure.title));
</script>

<a
  href={resolve(`/${figure.slug}`)}
  class="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-background"
>
  {#if hasBeenLearned}
    <div
      class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100"
    >
      <i class="bi bi-check-lg text-green-600"></i>
    </div>
  {/if}

  <h2
    class="text-foreground mb-4 text-xl leading-snug font-semibold transition-colors group-hover:text-accent-foreground"
  >
    {figure.title}
  </h2>
  <p class="leading-relaxed text-secondary-foreground">
    {figure.short_description}
  </p>
</a>
