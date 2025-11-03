<script lang="ts">
  import type { OptionStatus } from '$lib/quiz/domain';

  import AnswerOptionSelectorIndicator from './AnswerOptionSelectorIndicator.svelte';

  const {
    status,
    label,
    index,
    selectAnswer,
    isLoading = false
  }: {
    status: OptionStatus;
    label: string;
    index: number;
    selectAnswer: (index: number) => void;
    isLoading?: boolean;
  } = $props();

  const optionClasses = $derived.by(() => {
    const baseClasses = (() => {
      switch (status) {
        case 'correct':
          return 'cursor-not-allowed border-green-500 bg-green-50 text-green-800';
        case 'incorrect':
          return 'cursor-not-allowed border-red-500 bg-red-50 text-red-800';
        case 'not picked':
          return 'cursor-not-allowed border-secondary-foreground/30 hover:border-accent-foreground/50 hover:bg-accent-background/5';
        case 'selected':
          return 'border-accent-foreground bg-accent-background/10 text-accent-foreground';
        default:
          return 'border-secondary-foreground/30 hover:border-accent-foreground/50 hover:bg-accent-background/5 cursor-pointer hover:scale-[1.02]';
      }
    })();

    const loadingClasses = isLoading
      ? 'cursor-not-allowed opacity-60 animate-pulse pointer-events-none'
      : '';

    return `${baseClasses} ${loadingClasses}`;
  });
</script>

<button
  onclick={() => selectAnswer(index)}
  disabled={(status !== 'pristine' && status !== 'selected') || isLoading}
  class="w-full rounded-lg border-2 p-4 text-left transition-all duration-300 {optionClasses}"
>
  <div class="flex items-center space-x-3">
    <AnswerOptionSelectorIndicator {status} />
    <span class="font-medium">{label}</span>
  </div>
</button>
