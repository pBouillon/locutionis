<script>
  import '../app.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';

  import Navbar from '../components/navbar/navbar.svelte';
</script>

<Navbar />

<div class="px-5 pt-2">
  <slot />
</div>
