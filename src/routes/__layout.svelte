<script lang="ts">
  import '../app.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import Footer from '$lib/components/footer.svelte';
  import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<div class="flex flex-col min-h-screen dark:bg-gray-900">
  <Navbar />

  <main class="flex-grow px-5 pt-2 my-5">
    <slot />
  </main>

  <Footer />
</div>
