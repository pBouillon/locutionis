<script lang="ts">
  export let text: string;
</script>

<blockquote class="flex flex-col items-center">
  <i class="text-3xl font-extrabold text-gray-400 dark:text-slate-400 bi bi-quote" />
  <p class="text-lg italic text-center text-gray-600 dark:text-slate-400 md:max-w-3xl md:text-2xl">
    {text}
  </p>
</blockquote>
