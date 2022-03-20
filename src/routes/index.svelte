<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Locutionis - Petit référentiel des figures de style</title>
</svelte:head>

<section class="flex flex-col gap-10">
  <h1 class="text-4xl font-bold tracking-tight text-center sm:text-5xl lg:text-6xl dark:text-white">
    Petit référentiel des figures de style.
  </h1>

  <p class="max-w-3xl mx-auto text-lg text-center text-slate-600 dark:text-slate-400">
    <em>Locutionis</em> est un petit référentiel amateur de figures de style françaises visant à vulgariser
    leurs définitions et usages.
  </p>

  <div class="flex justify-center">
    <a
      href="{base}/glossary"
      class="flex items-center justify-center w-full h-12 px-6 font-semibold text-white rounded-lg bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-1/4"
    >
      Voir le glossaire
    </a>
  </div>
</section>

<section>
  <h2 class="subtitle dark:text-slate-200">Objectif</h2>

  <p class="description text-slate-600 dark:text-slate-400">
    Le but de <em>Locutionis</em> est de permettre à n'importe quel curieux·euse de parcourir et/ou découvrir
    des figures de style de la langue française.
  </p>

  <p class="description text-slate-600 dark:text-slate-400">
    <em>Épanorthoses</em>, <em>antanaclases</em> et autres <em>antonomases</em>
    n'auront plus de secrets pour vous !
  </p>

  <p class="description text-slate-600 dark:text-slate-400">
    N'étant qu'hobyiste, les informations ici sont majoritairement agrégées depuis diverses
    ressources, pensez-donc à les vérifier !
  </p>
</section>

<section>
  <h2 class="subtitle dark:text-slate-200">Pourquoi Locutionis</h2>

  <p class="description text-slate-600 dark:text-slate-400">
    Amateur des figures de style que j'ai pu découvrir au cours des années, je me suis toujours
    amusé tant de leur phonétique que de leurs capacités à qualifier la structure de nos phrases.
  </p>

  <p class="description text-slate-600 dark:text-slate-400">
    Ayant des difficultés à les garder en mémoire, c'est en mêlant ma passion pour ces dernières et
    pour l'informatique que j'ai choisi de créer
    <em>Locutionis</em>, en espérant qu'un jour cela puisse aider quelqu'un !
  </p>
</section>

<style>
  section {
    @apply my-12 max-w-7xl mx-auto sm:px-6 md:px-8;
  }

  .description {
    @apply mt-3 max-w-3xl space-y-6 tracking-wide;
  }

  .subtitle {
    @apply text-2xl font-extrabold tracking-tight;
  }
</style>
