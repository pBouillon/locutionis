<script lang="ts">
  import { resolve } from '$app/paths';
  import type { PageData } from './$types';

  import type { Figure } from '$lib/figure-of-speech/domain';
  import { HeadingLetter } from '$lib/glossary/ui';
  import { learningJourneyStore } from '$lib/learning-journey/data-access';

  let { data }: { data: PageData } = $props();

  const glossary = $derived.by(() => {
    return data.figures
      .reduce(
        (acc, figure) => {
          const firstLetter = figure.title[0]
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase();

          let letterGroup = acc.find((group) => group.letter === firstLetter);

          if (!letterGroup) {
            letterGroup = { letter: firstLetter, figures: [] };
            acc.push(letterGroup);
          }

          letterGroup.figures.push(figure);

          return acc;
        },
        [] as Array<{ letter: string; figures: Figure[] }>
      )
      .sort((a, b) => a.letter.localeCompare(b.letter));
  });
</script>

<svelte:head>
  <title>Glossaire des figures de style</title>
  <meta
    name="description"
    content="Découvrez toutes les figures de style avec leurs définitions et exemples."
  />
</svelte:head>

<main class="mx-auto mt-32 max-w-7xl px-8">
  <header class="mb-16 text-center">
    <h1 class="mb-6 text-5xl leading-tight font-bold text-gray-900">
      Glossaire des figures de style
    </h1>
    <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
      Découvrez {data.figures.length} figures de style avec leurs définitions et exemples.
    </p>
  </header>

  {#each glossary as { letter, figures }}
    <section class="mb-20">
      <HeadingLetter {letter} />

      <div class="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 xl:grid-cols-3">
        {#each figures as figure}
          <a
            href={resolve(`/${figure.slug}`)}
            class="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-background"
          >
            {#if learningJourneyStore.hasBeenLearned(figure.title)}
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
        {/each}
      </div>
    </section>
  {/each}
</main>
