<script lang="ts">
  import { toaster } from '../data-access';
  import Toast from './Toast.svelte';
</script>

<div
  class="fixed top-4 right-4 left-4 z-[9999] flex flex-col gap-2 md:right-auto md:left-1/2 md:w-auto md:-translate-x-1/2 lg:right-4 lg:left-auto lg:translate-x-0"
>
  {#each toaster.toasts as toast (toast.id)}
    <Toast {toast} onDismiss={() => toaster.dismiss(toast.id)} />
  {/each}
</div>
