<script lang="ts">
  import type { Question } from '$lib/quiz/domain/question';
  import { type Snippet } from 'svelte';

  const { question, children } = $props<{
    question: Question;
    children: Snippet;
  }>();
</script>

<div class="w-full max-w-2xl">
  <div class="rounded-xl border border-secondary-foreground/20 bg-main-background p-8 shadow-lg">
    <h2 class="mb-8 text-xl leading-relaxed font-semibold">
      {question.label}
    </h2>

    {@render children()}
  </div>
</div>
