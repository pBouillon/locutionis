<script lang="ts">
  import { theme } from '$lib/functions/theme';
  import MobileNavbar from './mobile-navbar.svelte';

  let showMobileMenu = false;

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/glossary', label: 'Glossaire' },
    { href: 'https://github.com/pbouillon/locutionis', label: 'GitHub' },
  ];
</script>

<nav class="flex items-baseline justify-between p-5">
  <div class="flex items-baseline gap-3">
    <a
      href="/"
      class="text-2xl font-bold tracking-wide text-transparent md:text-4xl bg-clip-text bg-gradient-to-br from-indigo-600 to-primary"
    >
      <i class="bi bi-journal-text" />
      Locutionis
    </a>

    <p class="hidden font-medium tracking-tight lg:block text-primary">
      Petit référentiel de figures de style
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
      <a {href} class="text-lg tracking-wide decoration-2 decoration-primary hover:underline dark:text-slate-300">{label}</a>
    {/each}

    <div class="pl-5 border-l">
      <button on:click={theme.toggle}>
        <i class="bi {$theme === 'light' ? 'bi-sun' : 'bi-moon-stars'} text-lg dark:text-slate-300 hover:text-primary" />
      </button>
    </div>
  </div>

  {#if showMobileMenu}
    <MobileNavbar on:close={() => showMobileMenu = false} {links} />
  {/if}
</nav>
