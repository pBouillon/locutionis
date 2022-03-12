<script context="module">
  import * as FiguresOfSpeechApi from '$lib/functions/api';

  /** @type {import('./[name]').Load} */
  export async function load({ params }) {
    const [ definition ] = FiguresOfSpeechApi.get(params.name);
    return { props: { definition } };
  }
</script>

<script lang="ts">
  import Quote from '$lib/components/quote.svelte';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definition: FigureOfSpeech;

  $: firstExample = definition.examples.shift();
</script>

<svelte:head>
  <title>
    {definition.name} | Locutionis - Petit référentiel des figures de style
  </title>
</svelte:head>

{#if firstExample}
  <div class="mb-8 md:mb-12 md:mt-5">
    <Quote text={firstExample} />
  </div>
{/if}

<div class="container">
  <h1 class="title">
    {definition.name}
  </h1>

  <div class="flex flex-col gap-5">
    <section>
      <h2 class="subtitle">Description</h2>
      <p>{definition.description}</p>
    </section>

    <section>
      <h2 class="subtitle">Dans quel but ?</h2>
      <p>{definition.goal}</p>
    </section>

    <section>
      <h2 class="subtitle">Quelques exemples</h2>

      <div class="flex flex-col gap-3">
        {#each definition.examples as example}
          <p class="text-sm">- {example}</p>
        {/each}
      </div>
    </section>

    <section>
      <h2 class="subtitle">Sources</h2>

      <div class="flex flex-col gap-3">
        {#each definition.sources as { name, href }}
          <p>
            - <a {href} class="link">{name}</a>
          </p>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .title {
    @apply mb-5 text-2xl font-semibold text-primary;
  }

  .subtitle {
    @apply mb-2 text-lg font-semibold text-secondary;
  }
</style>
