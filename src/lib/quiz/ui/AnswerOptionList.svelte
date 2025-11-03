<script lang="ts">
  import type { OptionStatus } from '../domain';

  import AnswerOption from './AnswerOption.svelte';

  const {
    options,
    isLoading,
    getOptionStatus,
    pickAnswer
  }: {
    options: string[];
    isLoading: boolean;
    getOptionStatus: (label: string) => OptionStatus;
    pickAnswer: (label: string) => void;
  } = $props();
</script>

<div class="space-y-4">
  {#each options as label, index (index)}
    <AnswerOption
      {index}
      {label}
      {isLoading}
      status={getOptionStatus(label)}
      selectAnswer={() => pickAnswer(label)}
    />
  {/each}
</div>
