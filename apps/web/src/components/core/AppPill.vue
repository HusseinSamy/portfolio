<script setup lang="ts">
import { computed } from 'vue'

const {
  tone = 'neutral',
  size = 'md',
  dot = false,
  mono = false,
} = defineProps<{
  tone?: 'neutral' | 'accent' | 'solid'
  size?: 'sm' | 'md'
  dot?: boolean
  mono?: boolean
}>()

const tones = {
  neutral: 'text-muted bg-transparent border border-line',
  accent: 'text-accent bg-accent-wash border border-transparent',
  solid: 'text-accent-ink bg-accent border border-transparent',
}

const sizes = {
  sm: 'text-micro px-3 py-1 h-6',
  md: 'text-small px-4 py-2 h-8',
}

const classes = computed(() => [
  'inline-flex items-center gap-2 rounded-full whitespace-nowrap leading-none',
  mono ? 'font-mono tracking-mono uppercase' : 'font-body',
  sizes[size],
  tones[tone],
])
</script>

<template>
  <span :class="classes">
    <span
      v-if="dot"
      class="size-1.5 flex-none rounded-full"
      :class="tone === 'solid' ? 'bg-accent-ink' : 'bg-accent'"
    />
    <slot />
  </span>
</template>
