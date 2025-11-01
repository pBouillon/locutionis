<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { Toast } from '../domain';

  let { toast, onDismiss }: { toast: Toast; onDismiss: () => void } = $props();
</script>

<div
  transition:fly={{ y: -20, duration: 300 }}
  class="flex w-full items-center gap-3 rounded-lg border px-4 py-4 shadow-lg md:w-auto md:px-6 md:py-3
        {toast.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : ''}
        {toast.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : ''}
        {toast.type === 'info' ? 'border-blue-200 bg-blue-50 text-blue-800' : ''}"
>
  {#if toast.type === 'success'}
    <i class="bi bi-check-circle-fill text-xl text-green-600 md:text-base"></i>
  {:else if toast.type === 'error'}
    <i class="bi bi-x-circle-fill text-xl text-red-600 md:text-base"></i>
  {:else if toast.type === 'info'}
    <i class="bi bi-info-circle-fill text-xl text-blue-600 md:text-base"></i>
  {/if}

  <span class="flex-1 text-base font-medium md:text-sm">{toast.message}</span>

  <button
    onclick={onDismiss}
    class="ml-2 text-lg text-current opacity-50 hover:opacity-100 md:text-base"
    aria-label="Fermer"
  >
    <i class="bi bi-x-lg"></i>
  </button>
</div>
