<script lang="ts">
  import { base } from '$app/paths';
  import { theme } from '$lib/functions/theme';

  let showMobileMenu = false;

  const links = [
    { href: `${base}/`, label: 'Accueil' },
    { href: `${base}/glossary`, label: 'Glossaire' },
    { href: 'https://github.com/pbouillon/locutionis', label: 'GitHub' },
  ];
</script>

<nav class="flex items-baseline justify-between p-5">
  <div class="flex items-baseline gap-3">
    <a
      href="{base}/"
      class="text-2xl font-bold tracking-wide text-transparent md:text-4xl bg-clip-text bg-gradient-to-br from-indigo-600 to-primary"
    >
      <i class="bi bi-journal-text" />
      Locutionis
    </a>

    <p class="hidden font-medium tracking-tight lg:block text-primary">
      Petit référentiel des figures de style
    </p>
  </div>

  <button
    type="button"
    class="flex items-center justify-center rounded md:hidden focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-slate-50"
    on:click={() => (showMobileMenu = true)}
  >
    <i class="px-1 text-3xl bi bi-list dark:text-slate-300" />
  </button>

  <div class="hidden gap-5 md:flex">
    {#each links as { href, label }}
      <a {href} class="navbar-link dark:text-slate-300">{label}</a>
    {/each}

    <div class="pl-5 border-l">
      <button on:click={theme.toggle}>
        <i class="bi {$theme === 'light' ? 'bi-sun' : 'bi-moon-stars'} text-lg dark:text-slate-300 hover:text-primary" />
      </button>
    </div>
  </div>

  {#if showMobileMenu}
    <div class="fixed inset-0 z-50 md:hidden">
      <div
        class="fixed inset-0 bg-black/20 backdrop-blur-sm"
        on:click={() => (showMobileMenu = false)}
      />

      <div
        class="fixed w-full max-w-xs p-6 text-base font-semibold bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-900 text-slate-900"
      >
        <div class="absolute top-5 right-5">
          <button type="button" on:click={() => (showMobileMenu = false)}>
            <i
              class="text-xl text-gray-400 dark:text-slate-300 dark:hover:text-slate-200 bi bi-x-lg"
            />
          </button>
        </div>

        <ul class="space-y-5">
          {#each links as { href, label }}
            <li>
              <a {href} class="navbar-link dark:text-slate-300 dark:hover:text-slate-200">{label}</a
              >
            </li>
          {/each}
        </ul>

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
  {/if}
</nav>

<style>
  .navbar-link {
    @apply text-lg tracking-wide decoration-2 decoration-primary hover:underline;
  }
</style>
