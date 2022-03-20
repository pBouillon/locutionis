<script lang="ts">
  import { base } from '$app/paths';
  import { theme } from '$lib/functions/theme';

  let showMobileMenu = false;

  const links = [
    { href: `${base}/`, label: 'Accueil' },
    { href: `${base}/glossary`, label: 'Glossaire' },
  ];
</script>

<nav class="flex items-baseline justify-between p-5">
  <div class="flex items-baseline gap-3">
    <a
      href="{base}/"
      class="text-2xl font-bold tracking-wide md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-primary"
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
    class="md:hidden rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-slate-50"
    on:click={() => (showMobileMenu = true)}
  >
    <i class="px-1 text-3xl bi bi-list" />
  </button>

  <div class="hidden gap-5 md:flex">
    {#each links as { href, label }}
      <a {href} class="navbar-link">{label}</a>
    {/each}
  </div>

  {#if showMobileMenu}
    <div class="fixed inset-0 z-50 md:hidden">
      <div
        class="fixed inset-0 bg-black/20 backdrop-blur-sm"
        on:click={() => (showMobileMenu = false)}
      />

      <div
        class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900"
      >
        <div class="absolute top-5 right-5">
          <button type="button" on:click={() => (showMobileMenu = false)}>
            <i class="text-xl text-gray-400 bi bi-x-lg" />
          </button>
        </div>

        <ul class="space-y-5">
          {#each links as { href, label }}
            <li>
              <a {href} class="navbar-link">{label}</a>
            </li>
          {/each}
        </ul>

        <div class="mt-6 pt-6 border-t border-gray-400">
          <div class="flex items-center justify-between">
            <label class="text-lg tracking-wide" for="theme">Thème</label>

            <div
              class="relative flex items-center ring-1 ring-gray-400 rounded-lg shadow-sm p-2 font-semibold"
            >
              <span class="flex gap-3">
                {#if $theme === 'light'}
                  <i class="bi bi-sun" />
                  Clair
                {:else}
                  <i class="bi bi-moon-stars" />
                  Sombre
                {/if}
                <i class="bi bi-chevron-down" />
              </span>

              <select id="theme" class="absolute appearance-none inset-0 w-full h-full opacity-0">
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
