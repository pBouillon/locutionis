<script lang="ts">
  import { base, resolve } from '$app/paths';

  const {
    icon,
    title,
    description,
    example,
    href
  }: {
    icon: string;
    title: string;
    description: string;
    example: string;
    // FIXME - Use proper typing
    href: any;
  } = $props();
</script>

<a
  href="{base}/href"
  class="group relative overflow-hidden rounded-2xl border border-secondary-foreground/20 bg-main-background p-8 transition-all duration-300 hover:border-accent-foreground/50 hover:shadow-xl hover:shadow-accent-foreground/10"
>
  <div
    class="absolute inset-0 bg-gradient-to-br from-accent-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  ></div>
  <div class="relative flex h-full flex-col justify-between">
    <div>
      <div class="mb-4 flex items-center space-x-3 text-accent-foreground">
        <i class="{icon} text-3xl"></i>
        <h3 class="text-2xl font-semibold">{title}</h3>
      </div>
      <p class="text-secondary-foreground">
        {description}
      </p>
    </div>
    <p class="mt-6 text-accent-foreground italic">
      "{example}"
    </p>
  </div>
</a>
