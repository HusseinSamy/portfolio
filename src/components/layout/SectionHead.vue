<script setup lang="ts">
import EyebrowLabel from '../core/EyebrowLabel.vue'

/* Panel rhythm: the mono label sits in a top row beside a one-line framing sentence. */
defineProps<{ label: string; framing: string }>()
</script>

<template>
  <div class="mb-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
    <EyebrowLabel>{{ label }}</EyebrowLabel>
    <p class="text-muted text-prose m-0 max-w-[46ch] text-pretty">{{ framing }}</p>
  </div>
</template>
