<script setup lang="ts">
const { action = 'READ →' } = defineProps<{
  href: string
  meta: string
  title: string
  summary: string
  action?: string
}>()
</script>

<template>
  <AppCard :href="href" accent-top class="h-full">
    <span class="text-muted font-mono text-label uppercase">{{ meta }}</span>
    <h3 class="font-display text-subtitle leading-title m-0 font-medium text-pretty">
      {{ title }}
    </h3>
    <p class="text-muted text-body m-0 text-pretty">{{ summary }}</p>
    <span class="text-accent font-mono text-label tracking-mono mt-auto pt-2">{{ action }}</span>
  </AppCard>
</template>
