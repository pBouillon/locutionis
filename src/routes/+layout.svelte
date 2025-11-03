<script lang="ts">
  import logo from '$lib/assets/favicon.jpg';

  import { Footer, Navbar } from '$lib/shared';
  import { ToastContainer } from '$lib/toast/ui';

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
