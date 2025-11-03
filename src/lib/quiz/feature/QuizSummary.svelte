<script lang="ts">
  import { resolve } from '$app/paths';

  const {
    score,
    questionsCount,
    retry
  }: {
    score: number;
    questionsCount: number;
    retry: () => void;
  } = $props();

  const goodAnswersRate = $derived(Math.round((score / questionsCount) * 100));

  const resultSummary = $derived.by<{ icon: string; message: string }>(() => {
    if (score === questionsCount) {
      return {
        icon: 'bi-patch-check-fill',
        message: 'Excellent ! Un score parfait - vous maîtrisez parfaitement les figures de style !'
      };
    }
    if (goodAnswersRate >= 70) {
      return {
        icon: 'bi-stars',
        message: 'Bravo ! Vous êtes sur la bonne voie, réussirez-vous le score parfait ?'
      };
    }
    if (goodAnswersRate >= 50) {
      return {
        icon: 'bi-hand-thumbs-up',
        message: 'Pas mal ! Encore un peu plus de pratique et vous serez incollable !'
      };
    }
    return {
      icon: 'bi-arrow-repeat',
      message: "Courage, c'est en pratiquant qu'on apprend !"
    };
  });
</script>

<div class="w-full max-w-2xl space-y-8 text-center">
  <div class="rounded-xl border border-secondary-foreground/20 bg-main-background p-8 shadow-lg">
    <div class="space-y-6">
      <div>
        <h2 class="mb-2 text-2xl font-semibold">Votre score</h2>
        <div class="text-5xl font-bold text-accent-foreground">
          {score}/{questionsCount}
        </div>
        <p class="mt-2 text-secondary-foreground">
          {goodAnswersRate}% de bonnes réponses
        </p>
      </div>

      <!-- Score Message -->
      <div class="rounded-lg border border-accent-foreground/20 bg-accent-background/10 p-4">
        <p class="inline-flex items-center gap-3 font-medium text-accent-foreground">
          <i class="bi {resultSummary.icon} text-xl"></i>
          {resultSummary.message}
        </p>
      </div>
    </div>
  </div>

  <!-- Action Buttons -->
  <div class="flex flex-col justify-center gap-4 sm:flex-row">
    <button
      onclick={retry}
      class="cursor-pointer rounded-lg bg-accent-background px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <i class="bi bi-arrow-clockwise mr-2"></i>
      Refaire le quiz
    </button>

    <a
      href={resolve('/glossaire')}
      class="cursor-pointer rounded-lg border-2 border-secondary-foreground/30 px-6 py-3 font-semibold text-secondary-foreground transition-all duration-300 hover:border-accent-foreground/50 hover:text-accent-foreground"
    >
      <i class="bi bi-book mr-2"></i>
      Consulter le glossaire
    </a>
  </div>
</div>
