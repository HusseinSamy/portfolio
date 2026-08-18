<script setup lang="ts">
import { computed } from 'vue'

const { position = 'bottom-right' } = defineProps<{
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}>()

const classes = computed(() => {
  const [v, h] = position.split('-')
  return [
    v === 'top' ? 'top-6' : 'bottom-6',
    h === 'right' ? 'right-6 justify-items-end' : 'left-6 justify-items-start',
  ]
})
</script>

<template>
  <div class="pointer-events-none fixed z-40 grid gap-4 [&>*]:pointer-events-auto" :class="classes">
    <slot />
  </div>
</template>
