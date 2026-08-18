<script setup lang="ts">
const { tone = 'muted' } = defineProps<{ tone?: 'muted' | 'accent' }>()
</script>

<template>
  <p
    class="m-0 font-mono text-label uppercase"
    :class="tone === 'accent' ? 'text-accent' : 'text-muted'"
  >
    <slot />
  </p>
</template>
