<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import NavbarBackdrop from './NavbarBackdrop.svelte';

  const { toggle }: { toggle: () => void } = $props();
</script>

<NavbarBackdrop {toggle}>
  <div
    class="fixed top-4 right-4 w-full max-w-xs rounded-lg border border-accent-foreground/30 bg-main-background p-6 text-base font-semibold shadow-lg shadow-accent-foreground/20"
  >
    <button
      type="button"
      aria-label="Close mobile menu"
      onclick={toggle}
      class="absolute top-5 right-8"
    >
      <i class="bi bi-x-lg text-xl"></i>
    </button>

    <ul class="flex flex-col gap-2">
      <li>
        <a
          href={resolve('/')}
          class="border-b-2 {page.url.pathname === '/'
            ? 'border-accent-foreground'
            : 'border-transparent'}"
          onclick={toggle}>Accueil</a
        >
      </li>

      <li>
        <a
          href={resolve('/glossaire')}
          class="border-b-2 {page.url.pathname === '/glossaire'
            ? 'border-accent-foreground'
            : 'border-transparent'}"
          onclick={toggle}>Glossaire</a
        >
      </li>

      <li>
        <a
          href={resolve('/quiz')}
          class="border-b-2 {page.url.pathname === '/quiz'
            ? 'border-accent-foreground'
            : 'border-transparent'}"
          onclick={toggle}>Quiz</a
        >
      </li>
    </ul>
  </div>
</NavbarBackdrop>
