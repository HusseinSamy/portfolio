<script setup lang="ts">
const { variant = 'neutral' } = defineProps<{ variant?: 'neutral' | 'accent' }>()
</script>

<template>
  <span
    class="rounded-control border px-2 py-1 font-mono text-micro tracking-mono whitespace-nowrap uppercase"
    :class="variant === 'accent' ? 'text-accent border-accent' : 'text-muted border-line'"
  >
    <slot />
  </span>
</template>
