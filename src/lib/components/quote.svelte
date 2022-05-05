<script lang="ts">
  import type { Quote } from "$lib/models/quote";

  export let quote: Quote;
</script>

<blockquote class="flex flex-col items-center">
  <i class="text-3xl font-extrabold text-gray-400 dark:text-slate-400 bi bi-quote" />

  <p class="text-lg italic text-center text-gray-600 dark:text-slate-400 md:max-w-3xl md:text-2xl">
    {quote.text}
  </p>

  {#if quote.source}
    <p class="italic text-center text-gray-600 dark:text-slate-400 md:max-w-md md:text-xl">
      — {quote.source}
    </p>
  {/if}
</blockquote>
