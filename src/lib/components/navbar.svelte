<script lang="ts">
  import { base } from '$app/paths';

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
        <ul class="space-y-5">
          {#each links as { href, label }}
            <li>
              <a {href} class="navbar-link">{label}</a>
            </li>
          {/each}
        </ul>

        <div class="absolute top-5 right-5">
          <button type="button" on:click={() => (showMobileMenu = false)}>
            <i class="text-xl text-gray-400 bi bi-x-lg" />
          </button>
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
