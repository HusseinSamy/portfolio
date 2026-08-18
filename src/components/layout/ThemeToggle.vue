<script setup lang="ts">
import AppIcon from '../core/AppIcon.vue'

const { theme = 'light' } = defineProps<{ theme?: 'light' | 'dark' }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    aria-label="Toggle colour theme"
    title="Toggle colour theme"
    class="text-muted rounded-control border-line hover:border-accent hover:text-ink inline-flex size-8 cursor-pointer items-center justify-center border bg-transparent p-0 transition-[border-color,color] duration-200 ease-[ease]"
    @click="$emit('toggle')"
  >
    <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="16" />
  </button>
</template>
