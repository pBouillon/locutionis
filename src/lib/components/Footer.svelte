<script>
  import { resolve } from '$app/paths';
</script>

<footer class=" px-5 py-12 text-main-foreground">
  <div class="mx-auto max-w-4xl">
    <div class="flex flex-col gap-6">
      <div class="flex items-center justify-between gap-6">
        <div class="flex flex-col gap-3">
          <h2 class="text-lg font-semibold">Locutionis</h2>
          <p class="text-sm">
            Fait avec <i class="bi bi-arrow-through-heart"></i> par
            <a href="https://pbouillon.github.io" class="underline">Pierre Bouillon</a>.
          </p>
        </div>

        <nav>
          <ul class="mx-5 flex flex-col gap-2 text-sm">
            <li>
              <a class="underline hover:no-underline" href={resolve('/')}>Accueil</a>
            </li>

            <li>
              <a class="underline hover:no-underline" href={resolve('/glossaire')}>Glossaire</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-2 space-y-2 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Pierre Bouillon</p>
        <p>
          <a
            href="https://www.goatcounter.com/privacy"
            class="underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ce site utilise GoatCounter pour des statistiques respectueuses de la vie privée.
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
