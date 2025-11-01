<script lang="ts">
  const {
    hasExplanation,
    canMoveNext,
    canSubmit,
    isExplanationVisible,
    isLastQuestion,
    onMoveNext,
    onSubmit,
    onToggleExplanation
  } = $props<{
    hasExplanation: boolean;
    canMoveNext: boolean;
    canSubmit: boolean;
    isExplanationVisible: boolean;
    isLastQuestion: boolean;
    onMoveNext: () => void;
    onSubmit: () => void;
    onToggleExplanation: () => void;
  }>();
</script>

<div class="mt-8 flex flex-col justify-between gap-4 sm:flex-row">
  {#if hasExplanation}
    <button
      onclick={onToggleExplanation}
      class="cursor-pointer rounded-lg border border-secondary-foreground/30 px-4 py-2 text-secondary-foreground transition-all duration-300 hover:border-accent-foreground/50 hover:text-accent-foreground"
    >
      <i class="bi bi-{isExplanationVisible ? 'eye-slash' : 'info-circle'} mr-2"></i>
      {isExplanationVisible ? "Masquer l'explication" : "Voir l'explication"}
    </button>
  {:else}
    <div id="spacer"></div>
  {/if}

  {#if canMoveNext}
    <button
      onclick={onMoveNext}
      class="cursor-pointer rounded-lg bg-accent-background px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
    </button>
  {:else}
    <button
      onclick={onSubmit}
      disabled={!canSubmit}
      class="cursor-pointer rounded-lg px-6 py-3 font-semibold transition-all duration-300 {canSubmit
        ? 'bg-accent-background text-accent-foreground hover:scale-105 hover:shadow-lg'
        : 'cursor-not-allowed bg-secondary-foreground/20 text-secondary-foreground/50'}"
    >
      <i class="bi bi-check-circle mr-2"></i>
      Valider
    </button>
  {/if}
</div>
