<script lang="ts">
  import { page } from '$app/state';
  import NavbarBackdrop from './NavbarBackdrop.svelte';

  const { toggle }: { toggle: () => void } = $props();
</script>

<NavbarBackdrop {toggle}>
  <div
    class="fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold shadow-lg"
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
          href="/"
          class="border-b-2 {page.url.pathname === '/' ? 'border-sky-500' : 'border-transparent'}"
          onclick={toggle}>Accueil</a
        >
      </li>
    </ul>
  </div>
</NavbarBackdrop>
