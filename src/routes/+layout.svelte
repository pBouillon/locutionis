<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import '../app.css';
  import logo from '$lib/assets/favicon.jpg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={logo} />
</svelte:head>

<Navbar />

{@render children?.()}

<Footer />
