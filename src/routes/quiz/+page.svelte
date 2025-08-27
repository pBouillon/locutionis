<script>
  import AnswerOption from '$lib/components/question/AnswerOption.svelte';
  import QuestionCard from '$lib/components/question/QuestionCard.svelte';
  import QuizSummary from '$lib/components/question/QuizSummary.svelte';
  import { QuizStore } from '$lib/figure-of-speech/quiz.svelte';

  const quiz = new QuizStore();
</script>

<svelte:head>
  <title>Quiz - Locutionis</title>

  <meta
    name="description"
    content="Vous aimez jouer avec les mots ? Testez vos connaissances des figures de style !"
  />
</svelte:head>

<main class="mx-6 mt-32 flex flex-col items-center justify-center gap-12 pb-24 sm:mt-42">
  <!-- Quiz Header -->
  <div class="w-full max-w-2xl space-y-6 text-center">
    <div class="space-y-2">
      <span class="text-sm tracking-wide text-accent-foreground uppercase">Quiz</span>
      <h1 class="text-3xl font-bold md:text-4xl">Testez vos connaissances</h1>
      <p class="text-secondary-foreground">
        {#if quiz.isCompleted}
          Quiz terminé !
        {:else}
          Question {quiz.currrentQuestionIndex + 1} sur {quiz.questionsCount}
        {/if}
      </p>
    </div>

    <!-- Progress Bar -->
    <div class="h-2 w-full rounded-full bg-secondary-foreground/20">
      <div
        class="h-2 rounded-full bg-accent-background transition-all duration-500 ease-out"
        style="width: {quiz.completionRate}%"
      ></div>
    </div>
  </div>

  {#if quiz.isCompleted}
    <QuizSummary questionsCount={quiz.questionsCount} score={quiz.score} retry={quiz.restart} />
  {:else}
    <QuestionCard
      isAnswerSelected={quiz.isAnswerSelected}
      isAnswerSubmitted={quiz.isAnswerSubmitted}
      isLastQuestion={quiz.currrentQuestionIndex === quiz.questionsCount - 1}
      question={quiz.currentQuestion}
      nextQuestion={quiz.moveOntoNext}
      submitAnswer={quiz.submitCurrentAnswer}
    >
      <div class="space-y-4">
        {#each quiz.currentQuestion.options as label, index}
          <AnswerOption
            {index}
            {label}
            status={quiz.getAnswerStatus(index)}
            selectAnswer={quiz.selectAnswer}
          />
        {/each}
      </div>
    </QuestionCard>
  {/if}
</main>
