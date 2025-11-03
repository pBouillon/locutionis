<script lang="ts">
  import AnswerOption from './AnswerOption.svelte';

  const { options, isLoading, getOptionStatus, pickAnswer } = $props<{
    options: string[];
    isLoading: boolean;
    getOptionStatus: (label: string) => any;
    pickAnswer: (label: string) => void;
  }>();
</script>

<div class="space-y-4">
  {#each options as label, index}
    <AnswerOption
      {index}
      {label}
      {isLoading}
      status={getOptionStatus(label)}
      selectAnswer={() => pickAnswer(label)}
    />
  {/each}
</div>
