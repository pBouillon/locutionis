<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import '../app.css';
  import { resolve } from '$app/paths';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={resolve('/favicon.jpg')} />
</svelte:head>

<Navbar />

{@render children?.()}

<Footer />
