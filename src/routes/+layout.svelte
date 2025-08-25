<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.jpg" />
</svelte:head>

<Navbar />

{@render children?.()}

<Footer />
