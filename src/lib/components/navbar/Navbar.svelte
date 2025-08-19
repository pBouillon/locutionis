<script lang="ts">
  import { page } from '$app/state';
  import NavbarBlock from './NavbarBlock.svelte';

  let showMobileMenu = $state<boolean>(false);

  const toggleMobileMenu = (): void => {
    showMobileMenu = !showMobileMenu;
  };
</script>

<nav
  class="fixed inset-0 mb-5 flex h-18 items-center justify-between px-5 py-3 text-main-foreground"
>
  <div class="flex flex-col sm:flex-row sm:gap-2">
    <a href="/" class="tracking-bold text-xl font-semibold">Locutionis</a>
    <small class="text-sm text-secondary-foreground sm:text-sm"
      >Petit référentiel de figures de style</small
    >
  </div>

  <ul class="hidden sm:block">
    <li>
      <a href="/" class="text-xl" class:font-semibold={page.url.pathname === '/'}>Accueil</a>
    </li>
  </ul>

  <button
    type="button"
    aria-label="Toggle mobile menu"
    onclick={toggleMobileMenu}
    class="block size-10 text-main-foreground sm:hidden"
  >
    <i class="bi bi-list text-2xl"></i>
  </button>
</nav>

{#if showMobileMenu}
  <NavbarBlock toggle={toggleMobileMenu} />
{/if}
