<script lang="ts">
  const { currentQuestionIndex, totalQuestionsCount, completionRate } = $props<{
    currentQuestionIndex: number;
    totalQuestionsCount: number;
    completionRate: number;
  }>();
</script>

<div class="w-full max-w-2xl space-y-6 text-center">
  <div class="space-y-2">
    <span class="text-sm tracking-wide text-accent-foreground uppercase">Quiz</span>
    <h1 class="text-3xl font-bold md:text-4xl">Testez vos connaissances</h1>
    <p class="text-secondary-foreground">
      Question {currentQuestionIndex + 1} sur {totalQuestionsCount}
    </p>
  </div>
  <div class="h-2 w-full rounded-full bg-secondary-foreground/20">
    <div
      class="h-2 rounded-full bg-accent-background transition-all duration-500 ease-out"
      style="width: {completionRate}%;"
    ></div>
  </div>
</div>
