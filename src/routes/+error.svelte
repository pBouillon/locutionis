<script>
  import { resolve } from '$app/paths';
</script>

<main class="mx-6 mt-32 flex flex-col items-center justify-center gap-8 text-center sm:mt-48">
  <h1 class="text-3xl font-extrabold text-accent-foreground md:text-5xl">Page introuvable</h1>

  <p class="mx-auto mt-6 max-w-2xl text-xl leading-snug text-secondary-foreground">
    Oups, la page que vous cherchez n'existe pas. Il se peut qu'elle ait été déplacée ou supprimée.
  </p>

  <section id="cta" class="mt-12 mb-32 flex w-full max-w-lg justify-center sm:max-w-2xl">
    <a
      href={resolve('/glossaire')}
      class="group relative overflow-hidden rounded-xl bg-accent-background px-8 py-4 text-center font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-foreground/20"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-accent-background to-accent-foreground/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
      <div class="relative flex items-center justify-center space-x-2">
        <i class="bi bi-book text-lg"></i>
        <span class="text-lg">Voir le glossaire</span>
      </div>
      <div
        class="absolute -inset-1 -z-10 rounded-xl bg-accent-background opacity-30 blur transition duration-300 group-hover:opacity-60"
      ></div>
    </a>
  </section>
</main>
