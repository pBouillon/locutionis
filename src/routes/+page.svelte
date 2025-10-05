<script>
  import { resolve } from '$app/paths';
  import FeatureCard from '../lib/components/FeatureCard.svelte';
  import FigureCard from '../lib/components/FigureCard.svelte';
</script>

<main class="mx-6 mt-32 flex flex-col items-center justify-center gap-18 sm:mt-48">
  <!-- Heading -->
  <hgroup class="space-y-10 text-center">
    <h1 class="max-w-4xl text-3xl leading-snug font-bold md:text-5xl">
      Repérer une figure de style c'est bien, savoir à quoi elle sert,
      <mark
        class="relative inline-block rounded-lg bg-accent-background px-4 py-2 font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-foreground/25"
      >
        <span class="relative z-10">c'est mieux</span>
        <div
          class="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-background to-accent-foreground/20 opacity-0 transition-opacity duration-300 hover:opacity-100"
        ></div>
        <div
          class="absolute -inset-1 -z-10 rounded-lg bg-accent-background opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-60"
        ></div>
      </mark>&nbsp;!
    </h1>

    <p class="mx-auto mt-6 max-w-2xl text-lg leading-snug text-secondary-foreground md:text-xl">
      Locutionis est un petit annuaire des figures de styles françaises connues et moins connues,
      pour les bacheliers·ères et les curieux·ses !
    </p>
  </hgroup>

  <!-- CTA -->
  <section
    id="cta"
    class="mb-32 grid w-full max-w-lg grid-cols-1 justify-center gap-6 sm:max-w-2xl md:grid-cols-2"
  >
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

    <a
      href={resolve('/quiz')}
      class="group relative overflow-hidden rounded-xl border-2 border-secondary-foreground/30 bg-main-background px-8 py-4 text-center font-semibold text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent-foreground/50 hover:shadow-xl hover:shadow-accent-foreground/15"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-accent-background/20 to-accent-background/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>

      <div class="relative flex items-center justify-center space-x-2">
        <i
          class="bi bi-dice-3 text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:text-accent-foreground"
        ></i>
        <span class="text-lg transition-colors duration-300 group-hover:text-accent-foreground"
          >Testez vos connaissances</span
        >
      </div>
    </a>
  </section>

  <!-- Features -->
  <section class="mb-32 w-full max-w-6xl space-y-18">
    <hgroup class="flex flex-col items-center justify-center gap-4 text-center">
      <span class="text-sm tracking-wide text-accent-foreground uppercase"
        >Pourquoi Locutionis ?</span
      >
      <h2 class="text-3xl font-semibold">Pour comprendre la langue française, simplement.</h2>
    </hgroup>

    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
      <FeatureCard
        icon="bi-collection"
        title="Un glossaire pratique"
        description="Découvrez des dizaines de figures de style, présentées de manière claire et concise."
      />

      <FeatureCard
        icon="bi-list-check"
        title="Avancez à votre rythme"
        description="Marquez les figures de style déjà apprises, et repérez d'un coup d'œil celles qu'il vous reste à découvrir."
      />

      <FeatureCard
        icon="bi-eyeglasses"
        title="Clair et accessible"
        description="Chaque figure est expliquée avec des mots simples et des exemples faciles à retenir."
      />
    </div>
  </section>

  <!-- Figure of Speech Examples -->
  <section class="mb-24 w-full max-w-6xl space-y-18">
    <div class="flex flex-col items-center justify-center gap-4 text-center">
      <span class="text-sm tracking-wide text-accent-foreground uppercase">Explorez</span>
      <h2 class="text-3xl font-semibold">Quelques figures à découvrir</h2>
      <p class="max-w-2xl text-secondary-foreground">
        Un petit aperçu de ce que vous trouverez dans le glossaire.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <FigureCard
        icon="bi-cloud-moon"
        title="Métaphore"
        description="Comparaison sans outil de comparaison."
        example="Tu me casse les pieds."
        href="/metaphore"
      />

      <FigureCard
        icon="bi-repeat"
        title="Homéotéleute"
        description="Utiliser des mots ayant la même syllabe finale."
        example="Le cheval c'est trop génial !"
        href="/homeoteleute"
      />

      <FigureCard
        icon="bi-chat-square-text"
        title="Litote"
        description="Atténuer une idée pour suggérer davantage."
        example="Ça n'était pas le match du siècle."
        href="/litote"
      />
    </div>

    <div class="mt-8 text-center">
      <a
        href={resolve('/glossaire')}
        class="inline-flex items-center rounded-lg bg-accent-background px-6 py-3 font-medium text-accent-foreground transition-all duration-300 hover:scale-105 hover:bg-accent-background/90"
      >
        Voir tout le glossaire
        <i class="bi bi-arrow-right ml-2 text-xl"></i>
      </a>
    </div>
  </section>
</main>
