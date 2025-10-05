<script lang="ts">
  import logo from '$lib/assets/favicon.jpg';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import ToastContainer from '$lib/components/toast/ToastContainer.svelte';

  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={logo} />
</svelte:head>

<ToastContainer />

<Navbar />

{@render children?.()}

<Footer />
