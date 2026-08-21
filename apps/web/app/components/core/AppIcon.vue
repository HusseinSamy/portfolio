<script setup lang="ts">
/* 24×24 stroke icons in the Lucide idiom: 1.75px stroke (2px inside filled buttons),
   round caps and joins, currentColor, no fills. Authored to match Lucide's geometry.
   If a new icon is needed, take it from https://lucide.dev rather than drawing one. */
const { size = 20, stroke = 1.75 } = defineProps<{
  name: 'mail' | 'download' | 'linkedin' | 'repo' | 'sun' | 'moon' | 'close'
  size?: number
  stroke?: number
}>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'mail'">
      <path d="M3 6h18v12H3z" />
      <path d="m3 7 9 6 9-6" />
    </template>
    <template v-else-if="name === 'download'">
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </template>
    <template v-else-if="name === 'repo'">
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a6 6 0 0 1-6 6H9" />
      <path d="M6 9v6" />
    </template>
    <template v-else-if="name === 'sun'">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
    </template>
    <path v-else-if="name === 'moon'" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    <path v-else d="M6 6l12 12M18 6L6 18" />
  </svg>
</template>
