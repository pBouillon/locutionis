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

</nav>

<style>
  .navbar-link {
    @apply text-lg tracking-wide decoration-2 decoration-primary;
  }

  .bg-gradient {
    @apply text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary;
  }
</style>
