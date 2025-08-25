<script lang="ts">
  import type { Snippet } from 'svelte';

  type NavbarBackdropProps = { toggle: () => void; children: Snippet };

  const { toggle, children }: NavbarBackdropProps = $props();
</script>

<div class="fixed inset-0 z-50">
  <button
    class="fixed inset-0 bg-main-background/10 backdrop-blur-sm"
    onclick={toggle}
    aria-label="Mobile menu toggler"
  ></button>

  {@render children()}
</div>
