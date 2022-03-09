<script>
  import { base } from '$app/paths';

  let showMobileMenu = false;
</script>

<nav>
  <div class="flex items-baseline gap-3">
    <a href="{base}/" class="text-2xl font-bold tracking-wide md:text-4xl bg-gradient">
      <i class="bi bi-journal-text"></i>
      Locutionis
    </a>

    <p class="hidden font-medium tracking-tight lg:block text-primary">
      Petit référentiel des figures de style
    </p>
  </div>

  <button type="button" class="main-button" on:click={() => (showMobileMenu = true)}>
    <i class="px-1 text-3xl bi bi-list"></i>
  </button>

  <div class="hidden gap-5 md:flex">
    <a href="{base}/" class="navbar-link">
      Accueil
    </a>

    <a href="{base}/glossary" class="navbar-link">
      Glossaire
    </a>

    <a href="{base}/sources" class="navbar-link">
      Sources
    </a>
  </div>

  {#if showMobileMenu}
    <div class="fixed inset-0 z-50 md:hidden">
      <div class="overlay" on:click={() => (showMobileMenu = false)}>
      </div>

      <div class="mobile-menu-container">

        <div class="flex justify-between">
          <a href="{base}/" class="navbar-link">
            Accueil
          </a>

          <button type="button" on:click={() => (showMobileMenu = false)}>
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <a href="{base}/glossary" class="navbar-link">
          Glossaire
        </a>

        <a href="{base}/sources" class="navbar-link">
          Sources
        </a>
      </div>
    </div>
  {/if}
</nav>

<style>
  nav {
    @apply flex items-baseline justify-between p-5;
  }

  .bg-gradient {
    @apply text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-primary;
  }

  .main-button {
    @apply md:hidden rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-slate-50;
  }

  .mobile-menu-container {
    @apply flex flex-col gap-5 fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900;
  }

  .navbar-link {
    @apply text-lg tracking-wide decoration-2 decoration-primary hover:underline;
  }

  .overlay {
    @apply fixed inset-0 bg-black/20 backdrop-blur-sm;
  }
</style>
