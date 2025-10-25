<script lang="ts">
  import AnswerOptionList from './components/answer/AnswerOptionList.svelte';
  import QuestionCard from './components/question/QuestionCard.svelte';
  import QuizActions from './components/question/QuizActions.svelte';
  import ExplanationPanel from './ExplanationPanel.svelte';
  import { QuizStore } from './quiz.store.svelte';
  import QuizProgress from './QuizProgress.svelte';

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
  {#key quizStore.currentQuestion?.id}
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
      onSubmit={() => quizStore.submitAnswer()}
      onToggleExplanation={toggleExplanation}
      canMoveNext={quizStore.canMoveToNext}
      onMoveNext={() => {
        // ensure explanation is hidden when moving onto the next question
        showExplanation = false;
        quizStore.moveOntoNextQuestion();
      }}
      isLastQuestion={quizStore.isLastQuestion}
    />

    {#if showExplanation && quizStore.solution?.explanation}
      <ExplanationPanel explanation={quizStore.solution.explanation} />
    {/if}
    </QuestionCard>
  {/key}
{/if}
