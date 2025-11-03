<script lang="ts">
  import type { OptionStatus } from '$lib/quiz/domain';

  const { status }: { status: OptionStatus } = $props();

  const indicatorClasses = $derived.by(() => {
    switch (status as OptionStatus) {
      case 'correct':
        return 'border-green-500 bg-green-500';
      case 'incorrect':
        return 'border-red-500 bg-red-500';
      case 'selected':
        return 'border-accent-foreground bg-accent-foreground';
      default:
        return 'border-secondary-foreground/50';
    }
  });
</script>

<div
  class="flex size-6 flex-shrink-0 items-center justify-center rounded-full border-2 {indicatorClasses}"
>
  {#if status === 'selected' || status === 'correct'}
    <i class="bi bi-check text-sm text-white"></i>
  {:else if status === 'incorrect'}
    <i class="bi bi-x text-sm text-white"></i>
  {/if}
</div>
