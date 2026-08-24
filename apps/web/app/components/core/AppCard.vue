<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const {
  to,
  href,
  accentTop = false,
  interactive,
} = defineProps<{
  to?: string
  href?: string
  accentTop?: boolean
  interactive?: boolean
}>()

const classes = computed(() => [
  'group flex flex-col gap-4 p-8 bg-surface border border-line rounded-card text-ink',
  'no-underline hover:no-underline transition-[border-color] duration-200 ease-[ease]',
  accentTop ? 'border-t-2 border-t-accent' : '',
  to || href || interactive ? 'hover:border-accent' : '',
])

// Bind one of to/href, never both: a fallthrough `href` overrides the one
// NuxtLink generates, which silently strips the link.
const link = computed(() => (to ? { to } : href ? { href } : {}))
</script>

<template>
  <component :is="to ? NuxtLink : href ? 'a' : 'div'" v-bind="link" :class="classes">
    <slot />
  </component>
</template>
