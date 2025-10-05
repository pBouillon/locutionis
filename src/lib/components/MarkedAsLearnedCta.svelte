<script lang="ts">
  let {
    isLearned,
    ontoggle
  }: {
    isLearned: boolean;
    ontoggle: () => void;
  } = $props();
</script>

<div
  class="mx-auto my-12 max-w-2xl rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 text-center shadow-lg md:my-16 md:p-8"
>
  {#if isLearned}
    <h2 class="mb-3 text-xl leading-tight font-bold text-main-foreground md:mb-4 md:text-2xl">
      Vous avez déjà appris cette figure de style !
    </h2>
    <p class="mb-5 text-sm leading-relaxed text-secondary-foreground md:mb-6 md:text-base">
      Vous pouvez la retirer de votre liste si nécessaire.
    </p>
    <button
      onclick={ontoggle}
      class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-green-600 bg-white px-6 py-4 text-base font-semibold text-green-600 transition-all duration-200 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:py-3"
    >
      <i class="bi bi-bookmark-x-fill"></i>
      Retirer de mes acquis
    </button>
  {:else}
    <h2 class="mb-3 text-xl leading-tight font-bold text-main-foreground md:mb-4 md:text-2xl">
      Avez-vous compris cette figure de style ?
    </h2>
    <p class="mb-5 text-sm leading-relaxed text-secondary-foreground md:mb-6 md:text-base">
      Marquez-la comme apprise pour suivre votre progression.
    </p>
    <button
      onclick={ontoggle}
      class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-green-600 bg-green-600 px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:py-3"
    >
      <i class="bi bi-bookmark-check-fill"></i>
      Marquer comme apprise
    </button>
  {/if}
</div>
