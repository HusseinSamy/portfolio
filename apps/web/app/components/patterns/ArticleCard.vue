<script setup lang="ts">
const { action = 'READ' } = defineProps<{
  to: string
  meta: string
  title: string
  summary: string
  action?: string
}>()
</script>

<template>
  <AppCard :to="to" accent-top class="h-full">
    <span class="text-ink font-mono text-label uppercase">{{ meta }}</span>
    <h2 class="font-display text-subtitle leading-title m-0 font-medium text-pretty">
      {{ title }}
    </h2>
    <p class="text-ink text-body m-0 text-pretty">{{ summary }}</p>
    <span
      class="text-accent mt-auto inline-flex items-center gap-1 pt-2 font-mono text-label tracking-mono"
    >
      {{ action }}
      <span
        class="inline-block transition-transform duration-200 ease-[ease] group-hover:translate-x-1"
        >→</span
      >
    </span>
  </AppCard>
</template>
