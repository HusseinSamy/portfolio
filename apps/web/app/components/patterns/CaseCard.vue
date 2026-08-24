<script setup lang="ts">
const {
  tags = [],
  outcomes = [],
  action = 'READ THE CASE',
} = defineProps<{
  to: string
  title: string
  meta: string
  summary: string
  tags?: string[]
  outcomes?: string[]
  action?: string
}>()
</script>

<template>
  <AppCard :to="to">
    <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h3 class="font-display text-title m-0 font-medium">{{ title }}</h3>
      <span class="text-muted font-mono text-label whitespace-nowrap">{{ meta }}</span>
    </div>
    <p class="text-muted text-prose m-0 max-w-[560px] text-pretty">{{ summary }}</p>
    <div class="flex flex-wrap gap-2">
      <AppTag v-for="tag in tags" :key="tag">{{ tag }}</AppTag>
      <AppTag v-for="outcome in outcomes" :key="outcome" variant="accent">{{ outcome }}</AppTag>
    </div>
    <span class="text-accent inline-flex items-center gap-1 font-mono text-label tracking-mono">
      {{ action }}
      <span class="inline-block transition-transform duration-200 ease-[ease] group-hover:translate-x-1"
        >→</span
      >
    </span>
  </AppCard>
</template>
