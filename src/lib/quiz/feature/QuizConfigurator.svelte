<script lang="ts">
  let { onStart } = $props<{ onStart: (count: number) => void }>();

  const options = [
    {
      value: 5,
      label: 'Rapide',
      description: 'Idéal pour un challenge rapide'
    },
    {
      value: 10,
      label: 'Équilibré',
      description: 'Un bon équilibre pour réviser'
    },
    {
      value: 20,
      label: 'Révision',
      description: 'Pour approfondir vos connaissances'
    }
  ];

  let selectedQuestionsCount = $state(options[0].value);
</script>

<div class="w-full max-w-2xl space-y-8 text-center">
  <div class="space-y-2">
    <span class="text-sm tracking-wide text-accent-foreground uppercase">Quiz</span>
    <h1 class="text-3xl font-bold md:text-4xl">Testez vos connaissances</h1>
  </div>

  <form
    class="flex flex-col gap-8"
    onsubmit={(e) => {
      e.preventDefault();
      onStart(selectedQuestionsCount);
    }}
  >
    <fieldset class="space-y-4">
      <legend class="mb-8 w-full text-center text-sm text-secondary-foreground">
        Choisissez votre rythme
      </legend>

      <div class="space-y-3" role="radiogroup">
        {#each options as option}
          <label
            class={`block w-full cursor-pointer rounded-lg border-2 p-4 text-left transition-all duration-300 ${
              selectedQuestionsCount === option.value
                ? 'border-accent-foreground bg-accent-background/10 text-accent-foreground'
                : 'border-secondary-foreground/30 hover:scale-[1.02] hover:border-accent-foreground/50 hover:bg-accent-background/5'
            }`}
          >
            <input
              type="radio"
              name="question-count"
              value={option.value}
              bind:group={selectedQuestionsCount}
              class="sr-only"
            />
            <div class="flex items-center justify-between">
              <div class="flex flex-1 items-start space-x-3">
                <div
                  class={`mt-0.5 flex size-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                    selectedQuestionsCount === option.value
                      ? 'border-accent-foreground bg-accent-foreground'
                      : 'border-secondary-foreground/50'
                  }`}
                  aria-hidden="true"
                >
                  {#if selectedQuestionsCount === option.value}
                    <i class="bi bi-check text-sm text-white"></i>
                  {/if}
                </div>
                <div class="flex-1">
                  <div class="font-medium">{option.label}</div>
                  <div class="mt-1 text-sm text-secondary-foreground">
                    {option.value} questions
                  </div>
                  <div class="mt-1 text-sm text-secondary-foreground">
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          </label>
        {/each}
      </div>
    </fieldset>

    <button
      type="submit"
      class="group relative cursor-pointer overflow-hidden rounded-xl bg-accent-background px-8 py-4 text-center font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-foreground/20"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-accent-background to-accent-foreground/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
      <div class="relative flex items-center justify-center space-x-2">
        <i
          class="bi bi-dice-3 text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:text-accent-foreground"
        ></i>
        <span class="text-lg">Commencer le quiz</span>
      </div>
      <div
        class="absolute -inset-1 -z-10 rounded-xl bg-accent-background opacity-30 blur transition duration-300 group-hover:opacity-60"
      ></div>
    </button>
  </form>
</div>
