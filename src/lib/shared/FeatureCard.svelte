<script lang="ts">
  let {
    icon,
    title,
    description
  }: {
    icon: string;
    title: string;
    description: string;
  } = $props();
</script>

<div class="space-y-4 text-center">
  <div class="flex flex-col items-center justify-center space-y-4">
    <i class="{icon} text-6xl text-accent-foreground"></i>
    <h3 class="text-xl font-medium">{title}</h3>
  </div>
  <p class="text-secondary-foreground">
    {description}
  </p>
</div>
