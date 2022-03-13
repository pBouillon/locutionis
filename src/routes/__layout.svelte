<script lang="ts">
  import '../app.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import Footer from '$lib/components/footer.svelte';
  import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  <main class="px-5 pt-2 flex-grow">
    <slot />
  </main>

  <Footer />
</div>
