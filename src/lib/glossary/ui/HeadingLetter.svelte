<script lang="ts">
  const { letter } = $props<{ letter: string }>();
</script>

<div class="sticky top-0 z-10 rounded-b-lg backdrop-blur-sm md:static">
  <div class="relative flex items-center justify-center py-6">
    <div class="flex-grow border-t-2 border-accent-background"></div>
    <h2 class="mx-4 px-2 text-3xl font-semibold text-accent-foreground">
      {letter}
    </h2>
    <div class="flex-grow border-t-2 border-accent-background"></div>
  </div>
</div>
