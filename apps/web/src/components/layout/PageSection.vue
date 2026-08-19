<script setup lang="ts">
import { computed } from 'vue'

/* Two rhythms alternating down the page — plain, panel, plain, panel. That
   alternation is the layering system; there are no shadows anywhere. */
const { variant = 'plain', first = false } = defineProps<{
  id?: string
  variant?: 'plain' | 'panel'
  first?: boolean
}>()

const classes = computed(() =>
  variant === 'panel'
    ? 'relative bg-panel border border-line rounded-panel py-16 px-[clamp(24px,4vw,48px)] my-24 scroll-mt-20'
    : ['py-24 scroll-mt-header', first ? '' : ''],
)
</script>

<template>
  <section :id="id" :class="classes"><slot /></section>
</template>
