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
  class="mx-auto my-16 max-w-2xl rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 text-center shadow-lg"
>
  {#if isLearned}
    <h2 class="mb-4 text-2xl font-bold text-main-foreground">
      Vous avez déjà appris cette figure de style !
    </h2>

    <p class="mb-6 text-secondary-foreground">
      Vous pouvez la retirer de votre liste si nécessaire.
    </p>

    <button
      type="button"
      class="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-green-600 bg-white px-6 py-3 font-semibold text-green-600 transition-all duration-200 hover:bg-green-50"
      onclick={ontoggle}
    >
      <i class="bi bi-x-circle"></i>
      Retirer de mes acquis
    </button>
  {:else}
    <h2 class="mb-4 text-2xl font-bold text-main-foreground">
      Avez-vous compris cette figure de style ?
    </h2>

    <p class="mb-6 text-secondary-foreground">
      Marquez-la comme apprise pour suivre votre progression.
    </p>

    <button
      type="button"
      class="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-green-600 bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:border-green-700 hover:bg-green-700"
      onclick={ontoggle}
    >
      <i class="bi bi-check-circle"></i>
      Marquer comme apprise
    </button>
  {/if}
</div>
