<script lang="ts">
  import { page } from '$app/state';
  import NavbarBlock from './NavbarBlock.svelte';

  let showMobileMenu = $state<boolean>(false);

  const toggleMobileMenu = (): void => {
    showMobileMenu = !showMobileMenu;
  };
</script>

<nav class="mb-5 flex h-16 items-center justify-between rounded-xl border-b-2 px-5 py-3 shadow">
  <div class="space-x-1 sm:space-x-2">
    <a href="/" class="tracking-bold text-xl font-semibold">Locutionis</a>
    <small class="text-xs sm:text-sm">Petit référentiel de figures de style</small>
  </div>

  <ul class="hidden sm:block">
    <li>
      <a href="/" class="text-lg" class:font-semibold={page.url.pathname === '/'}>Accueil</a>
    </li>
  </ul>

  <button
    type="button"
    aria-label="Toggle mobile menu"
    onclick={toggleMobileMenu}
    class="block size-10 sm:hidden"
  >
    <i class="bi bi-list text-2xl"></i>
  </button>
</nav>

{#if showMobileMenu}
  <NavbarBlock toggle={toggleMobileMenu} />
{/if}
