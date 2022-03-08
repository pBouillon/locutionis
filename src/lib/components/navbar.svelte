<script>
  let showMobileMenu = false;
</script>

<nav class="p-5 flex items-baseline justify-between">

  <div class="flex items-baseline gap-3">
    <a href="/" class="text-2xl font-bold tracking-wide md:text-4xl bg-gradient">
      <i class="bi bi-journal-text"></i>
      Locutionis
    </a>

    <p class="hidden font-medium tracking-tight md:block text-primary">
      Petit référentiel des figures de style
    </p>
  </div>

  <button type="button" class="md:hidden rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-slate-50"
    on:click={() => (showMobileMenu = true)}>
    <i class="bi bi-list text-2xl px-1"></i>
  </button>

  <ul class="gap-5 hidden md:flex">
    <li>
      <a href="/" class="navbar-link hover:underline">
        Accueil
      </a>
    </li>

    <li>
      <a href="/glossary" class="navbar-link hover:underline">
        Glossaire
      </a>
    </li>

    <li>
      <a href="/sources" class="navbar-link hover:underline">
        Sources
      </a>
    </li>
  </ul>

  {#if showMobileMenu}
    <div class="fixed z-50 inset-0 md:hidden">
      <div class="overlay" on:click={() => (showMobileMenu = false)}>
      </div>

      <div class="mobile-menu-container">
        xxx
      </div>
    </div>
  {/if}
</nav>

<style>
  .bg-gradient {
    @apply text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-primary;
  }

  .mobile-menu-container {
    @apply fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900;
  }

  .navbar-link {
    @apply text-lg tracking-wide decoration-2 decoration-primary;
  }

  .overlay {
    @apply fixed inset-0 bg-black/20 backdrop-blur-sm;
  }
</style>
