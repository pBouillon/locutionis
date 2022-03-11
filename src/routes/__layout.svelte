<script lang="ts">
  import '../app.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />

<main class="px-5 pt-2">
  <slot />
</main>
