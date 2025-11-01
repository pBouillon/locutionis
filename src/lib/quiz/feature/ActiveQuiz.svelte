<script lang="ts">
  import { QuizStore } from '../data-access/quiz.store.svelte';
  import ExplanationPanel from '../ui/ExplanationPanel.svelte';
  import QuizProgress from '../ui/QuizProgress.svelte';
  import AnswerOptionList from '../ui/answer/AnswerOptionList.svelte';
  import QuestionCard from '../ui/question/QuestionCard.svelte';
  import QuizActions from '../ui/question/QuizActions.svelte';

  let { quizStore } = $props<{ quizStore: QuizStore }>();

  let showExplanation = $state(false);

  $effect(() => {
    quizStore.currentQuestionIndex;
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
