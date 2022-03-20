<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let searchText: string = '';
</script>

<input
  type="text"
  class="w-full px-2 py-1 border-2 rounded-lg border-primary/50 focus:outline-none focus:border-primary dark:text-slate-100 dark:bg-gray-800"
  placeholder="Chercher une figure de style ..."
  bind:value={searchText}
  on:keyup={() => dispatch('searchText', { searchText })}
/>
