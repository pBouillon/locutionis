<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  import NavbarBlock from './NavbarBlock.svelte';

  let showMobileMenu = $state<boolean>(false);

  const toggleMobileMenu = (): void => {
    showMobileMenu = !showMobileMenu;
  };
</script>

<nav
  class="absolute inset-0 flex h-18 items-center justify-between px-5 py-3 text-main-foreground md:px-12"
>
  <a href={resolve('/')} class="flex flex-col items-baseline sm:flex-row sm:gap-3">
    <p class="tracking-bold text-xl font-semibold">Locutionis</p>
    <small class="text-sm text-secondary-foreground sm:text-sm"
      >Petit référentiel de figures de style</small
    >
  </a>

  <ul class="hidden sm:flex sm:gap-5">
    <li>
      <a href={resolve('/')} class="text-lg" class:font-semibold={page.url.pathname === '/'}
        >Accueil</a
      >
    </li>

    <li>
      <a
        href={resolve('/glossaire')}
        class="text-lg"
        class:font-semibold={page.url.pathname === '/glossaire'}>Glossaire</a
      >
    </li>

    <li>
      <a href={resolve('/quiz')} class="text-lg" class:font-semibold={page.url.pathname === '/quiz'}
        >Quiz</a
      >
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
