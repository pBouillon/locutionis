<script lang="ts">
  import type { Question } from '$lib/figure-of-speech/quiz.svelte';
  import { onMount, type Snippet } from 'svelte';

  const {
    isAnswerSelected,
    isAnswerSubmitted,
    isLastQuestion,
    question,
    nextQuestion,
    children,
    submitAnswer
  } = $props<{
    isAnswerSelected: boolean;
    isAnswerSubmitted: boolean;
    isLastQuestion: boolean;
    question: Question;
    submitAnswer: () => void;
    children: Snippet;
    nextQuestion: () => void;
  }>();

  let showExplanation = $state(false);

  onMount(() => {
    $effect(() => {
      const hasChanged = question;
      showExplanation = false;
    });
  });
</script>

<div class="w-full max-w-2xl">
  <div class="rounded-xl border border-secondary-foreground/20 bg-main-background p-8 shadow-lg">
    <h2 class="mb-8 text-xl leading-relaxed font-semibold">
      {question.label}
    </h2>

    {@render children()}

    <div class="mt-8 flex flex-col justify-between gap-4 sm:flex-row">
      {#if isAnswerSubmitted}
        {#if question.explanation}
          <button
            onclick={() => (showExplanation = !showExplanation)}
            class="rounded-lg border border-secondary-foreground/30 px-4 py-2 text-secondary-foreground transition-all duration-300 hover:border-accent-foreground/50 hover:text-accent-foreground"
          >
            <i class="bi bi-info-circle mr-2"></i>
            {showExplanation ? 'Masquer' : 'Voir'} l'explication
          </button>
        {:else}
          <div id="spacer"></div>
        {/if}

        <button
          onclick={nextQuestion}
          class="rounded-lg bg-accent-background px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
          <i class="bi bi-arrow-right ml-2"></i>
        </button>
      {:else}
        <div id="spacer"></div>

        <button
          onclick={submitAnswer}
          disabled={!isAnswerSelected}
          class="rounded-lg px-6 py-3 font-semibold transition-all duration-300 {isAnswerSelected
            ? 'bg-accent-background text-accent-foreground hover:scale-105 hover:shadow-lg'
            : 'cursor-not-allowed bg-secondary-foreground/20 text-secondary-foreground/50'}"
        >
          <i class="bi bi-check-circle mr-2"></i>
          Valider
        </button>
      {/if}
    </div>

    {#if isAnswerSubmitted && showExplanation}
      <div class="mt-6 rounded-lg border border-accent-foreground/20 bg-accent-background/10 p-4">
        <h3 class="mb-2 font-semibold text-accent-foreground">Explication</h3>
        <p class="leading-relaxed text-secondary-foreground">{question.explanation}</p>
      </div>
    {/if}
  </div>
</div>
