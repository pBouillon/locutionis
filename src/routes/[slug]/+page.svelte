<script lang="ts">
  import type { PageData } from './$types';

  import { learningJourneyStore } from '$lib/figure-of-speech/learning-journey.svelte';
  import MarkedAsLearnedCta from '$lib/components/MarkedAsLearnedCta.svelte';

  const { data }: { data: PageData } = $props();
  const { figure } = data;

  const isLearned = $derived(learningJourneyStore.hasBeenLearned(figure.title));

  function toggleLearned() {
    if (isLearned) {
      learningJourneyStore.removeFromLearned(figure.title);
    } else {
      learningJourneyStore.markAsLearned(figure.title);
    }
  }
</script>

<svelte:head>
  <title>{figure.title}</title>
</svelte:head>

<main class="mx-auto mt-32 max-w-7xl px-8">
  <header class="text-center">
    <h1 class="mb-6 text-4xl leading-tight font-bold text-main-foreground md:text-5xl">
      {figure.title}
    </h1>
    <p class="mx-auto max-w-2xl text-xl leading-relaxed text-secondary-foreground">
      {figure.short_description}
    </p>
  </header>

  <hr class="mx-auto my-12 w-2/3 rounded-full border-t border-secondary-foreground md:w-1/2" />

  <div class="mx-auto my-8 prose max-w-none md:w-2/3">
    {@html figure.content}
  </div>

  <MarkedAsLearnedCta {isLearned} ontoggle={toggleLearned} />
</main>
