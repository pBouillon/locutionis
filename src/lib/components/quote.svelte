<script lang="ts">
  export let text: string;
</script>

<blockquote class="flex flex-col items-center">
  <i class="bi bi-quote text-3xl font-extrabold text-gray-400"></i>
  <p class="md:max-w-3xl md:text-2xl text-gray-600 text-center text-lg italic">
    {text}
  </p>
</blockquote>
