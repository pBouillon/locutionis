<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { theme } from '$lib/functions/theme';

  const dispatch = createEventDispatcher();

  export let links: Array<{ href: string, label: string}>;

  function closeMobileMenu(): void {
    dispatch('close');
  }
</script>

<div class="fixed inset-0 z-50 md:hidden">

  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/20 backdrop-blur-sm"
    on:click={closeMobileMenu}
  />

  <!-- Mobile menu -->
  <div
    class="fixed w-full max-w-xs p-6 text-base font-semibold bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-900 text-slate-900"
  >

    <!-- Closing button -->
    <div class="absolute top-5 right-5">
      <button type="button" on:click={closeMobileMenu}>
        <i class="text-xl text-gray-400 dark:text-slate-300 dark:hover:text-slate-200 bi bi-x-lg" />
      </button>
    </div>

    <!-- Links -->
    <ul class="space-y-5">
      {#each links as { href, label }}
        <li>
          <a {href} class="navbar-link dark:text-slate-300 dark:hover:text-slate-200">{label}</a>
        </li>
      {/each}
    </ul>

    <!-- Theme selector -->
    <div class="pt-6 mt-6 border-t border-gray-400">
      <div class="flex items-center justify-between">
        <label
          class="text-lg tracking-wide dark:text-slate-300 dark:hover:text-slate-200"
          for="theme">Thème</label
        >
        <div
          class="relative flex items-center p-2 font-semibold rounded-lg shadow-sm ring-1 ring-gray-400"
        >
          <span class="flex gap-3 px-2 dark:text-slate-300 dark:hover:text-slate-200">
            {#if $theme === 'light'}
              <i class="bi bi-sun" />
              Clair
            {:else}
              <i class="bi bi-moon-stars" />
              Sombre
            {/if}
            <i class="bi bi-chevron-down" />
          </span>

          <select id="theme" class="absolute inset-0 w-full h-full opacity-0 appearance-none">
            <option value="light" on:click={theme.setLight}>Clair</option>
            <option value="dark" on:click={theme.setDark}>Sombre</option>
          </select>
        </div>
      </div>
    </div>

  </div>
</div>
