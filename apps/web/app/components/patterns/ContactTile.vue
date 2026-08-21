<script setup lang="ts">
defineProps<{
  href: string
  icon: 'mail' | 'download' | 'linkedin' | 'repo'
  label: string
  value: string
}>()
</script>

<template>
  <a
    :href="href"
    class="bg-surface border-line rounded-card text-ink hover:border-accent flex items-center gap-4 border p-6 no-underline transition-[border-color] duration-200 ease-[ease] hover:no-underline"
  >
    <span
      class="rounded-control bg-accent-wash text-accent inline-flex h-10 flex-[0_0_40px] items-center justify-center"
    >
      <AppIcon :name="icon" />
    </span>
    <span class="grid min-w-0 gap-1">
      <span class="text-muted font-mono text-micro tracking-label uppercase">{{ label }}</span>
      <span class="text-body [overflow-wrap:anywhere]">{{ value }}</span>
    </span>
  </a>
</template>
