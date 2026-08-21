<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const {
  variant = 'primary',
  size = 'md',
  to,
  href,
  disabled,
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'sm'
  to?: string
  href?: string
  disabled?: boolean
}>()

const sizes = {
  md: 'px-6 py-4',
  sm: 'px-4 py-2 text-small',
}

const variants = {
  primary:
    'bg-accent text-accent-ink border border-transparent font-medium hover:brightness-[0.94]',
  secondary: 'bg-surface text-ink border border-line hover:border-accent',
  // ponytail: ghost pays no size padding — it is a text link with a rule under it.
  ghost:
    'bg-transparent text-muted border border-transparent p-0 rounded-none border-b-line hover:text-ink hover:border-b-accent',
}

const classes = computed(() => [
  'inline-flex items-center gap-2 font-body text-body leading-[1.4] rounded-control no-underline hover:no-underline cursor-pointer',
  'transition-[background,border-color,color,filter] duration-200 ease-[ease]',
  variant === 'ghost' ? '' : sizes[size],
  variants[variant],
  disabled ? 'opacity-50 pointer-events-none' : '',
])

// Bind one of to/href, never both: a fallthrough `href` overrides the one
// NuxtLink generates, which silently strips the link.
const link = computed(() => (to ? { to } : href ? { href } : { type: 'button' as const, disabled }))
</script>

<template>
  <component :is="to ? NuxtLink : href ? 'a' : 'button'" v-bind="link" :class="classes">
    <span v-if="$slots.icon" class="inline-flex flex-none"><slot name="icon" /></span>
    <span><slot /></span>
  </component>
</template>
