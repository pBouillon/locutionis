<script lang="ts">
  import type { QuizStore } from '../data-access';
  import {
    AnswerOptionList,
    ExplanationPanel,
    QuestionCard,
    QuizActions,
    QuizProgress
  } from '../ui';

  const { quizStore }: { quizStore: QuizStore } = $props();

  let showExplanation = $state(false);

  $effect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const trigger = quizStore.currentQuestionIndex;
    showExplanation = false;
  });

  function toggleExplanation() {
    showExplanation = !showExplanation;
  }
</script>

<QuizProgress
  currentQuestionIndex={quizStore.currentQuestionIndex}
  totalQuestionsCount={quizStore.totalQuestionsCount}
  completionRate={quizStore.completionRate}
/>

{#if quizStore.currentQuestion}
  <QuestionCard question={quizStore.currentQuestion}>
    <AnswerOptionList
      options={quizStore.currentQuestion.options}
      isLoading={quizStore.isAnswerBeingChecked}
      getOptionStatus={quizStore.getOptionStatus}
      pickAnswer={quizStore.pickAnswer}
    />

    <QuizActions
      hasExplanation={!!quizStore.solution?.explanation}
      canSubmit={quizStore.canSubmitAnswer}
      isExplanationVisible={showExplanation}
      onSubmit={quizStore.submitAnswer}
      onToggleExplanation={toggleExplanation}
      canMoveNext={quizStore.canMoveToNext}
      onMoveNext={quizStore.moveOntoNextQuestion}
      isLastQuestion={quizStore.isLastQuestion}
    />

    {#if showExplanation && quizStore.solution?.explanation}
      <ExplanationPanel solution={quizStore.solution} />
    {/if}
  </QuestionCard>
{/if}
