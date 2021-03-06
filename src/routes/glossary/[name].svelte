<script context="module">
  import * as FiguresOfSpeechApi from '$lib/functions/api';

  /** @type {import('./[name]').Load} */
  export async function load({ params }) {
    const [definition] = FiguresOfSpeechApi.get(params.name);
    return { props: { definition } };
  }
</script>

<script lang="ts">
  import Quote from '$lib/components/quote.svelte';
  import type { FigureOfSpeech } from '$lib/models/figure-of-speech';

  export let definition: FigureOfSpeech;

  $: [firstExample] = definition.examples;
</script>

<svelte:head>
  <title>
    {definition.name} | Locutionis - Petit référentiel de figures de style
  </title>

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://locutionis.vercel.app/glossary/Alitération">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{definition.name} | Locutionis - Petit référentiel de figures de style">
  <meta property="og:description" content="{definition.description}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="pbouillon.github.io">
  <meta property="twitter:url" content="https://locutionis.vercel.app/glossary/Alitération">
  <meta name="twitter:title" content="{definition.name} | Locutionis - Petit référentiel de figures de style">
  <meta name="twitter:description" content="{definition.description}">
</svelte:head>

{#if firstExample}
  <div class="mb-8 md:mb-12 md:mt-5">
    <Quote quote={firstExample} />
  </div>
{/if}

<div class="container">
  <h1 class="title">
    {definition.name}
  </h1>

  <div class="flex flex-col gap-5">
    <section>
      <h2 class="subtitle">Description</h2>
      <p class="dark:text-slate-300">{definition.description}</p>
    </section>

    <section>
      <h2 class="subtitle">Dans quel but ?</h2>
      <p class="dark:text-slate-300">{definition.goal}</p>
    </section>

    <section>
      <h2 class="subtitle">Quelques exemples</h2>

      <div class="flex flex-col gap-3 text-sm">
        {#each definition.examples as example}
          <p class="flex flex-col">
            <span class="dark:text-slate-300">- {example.text}</span>
            {#if example.source}
              <span class="text-slate-500">{example.source}</span>
            {/if}
          </p>
        {/each}
      </div>
    </section>

    <section>
      <h2 class="subtitle">Sources</h2>

      <div class="flex flex-col gap-1 text-sm">
        {#each definition.sources as { name, href }}
          <p class="dark:text-slate-300">
            - <a {href} target="_blank" class="link">{name}</a>
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
