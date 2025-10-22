<script lang="ts">
  import ActiveQuiz from '$lib/quiz/ActiveQuiz.svelte';
  import { QuizStore } from '$lib/quiz/quiz.store.svelte';
  import QuizConfigurator from '$lib/quiz/QuizConfigurator.svelte';
  import QuizSummary from '$lib/quiz/QuizSummary.svelte';

  const quizStore = QuizStore.create();
</script>

<svelte:head>
  <title>Quiz - Locutionis</title>

  <meta
    name="description"
    content="Vous aimez jouer avec les mots ? Testez vos connaissances des figures de style !"
  />
</svelte:head>

<main class="mx-6 mt-32 flex flex-col items-center justify-center gap-12 pb-24 sm:mt-42">
  {#if quizStore.isCompleted}
    <QuizSummary
      questionsCount={quizStore.totalQuestionsCount}
      score={quizStore.score}
      retry={quizStore.restart}
    />
  {:else if quizStore.isOngoing}
    <ActiveQuiz {quizStore} />
  {:else}
    <QuizConfigurator onStart={(count) => quizStore.startQuiz(count)} />
  {/if}
</main>
