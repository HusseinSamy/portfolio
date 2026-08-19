<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppButton from '../core/AppButton.vue'
import AppIcon from '../core/AppIcon.vue'
import ThemeToggle from './ThemeToggle.vue'

const { brand = 'HUSSEIN SAMY', links = [] } = defineProps<{
  brand?: string
  links?: { label: string; href: string }[]
  cta?: { label: string; href: string }
  theme?: 'light' | 'dark'
}>()
defineEmits<{ toggleTheme: [] }>()
</script>

<template>
  <!-- The only transparency and blur in the system. -->
  <header
    class="border-line sticky top-0 z-20 border-b bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-[8px]"
  >
    <div
      class="max-w-page min-h-header px-gutter mx-auto flex flex-wrap items-center justify-between gap-4 py-2"
    >
      <RouterLink
        to="/"
        class="text-ink font-mono text-[13px] tracking-[0.04em] no-underline hover:no-underline"
        >{{ brand }}</RouterLink
      >
      <nav class="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-muted hover:text-ink text-small no-underline transition-colors duration-200 ease-[ease] hover:no-underline"
          >{{ link.label }}</a
        >
        <AppButton v-if="cta" variant="primary" size="sm" :href="cta.href">
          <template #icon><AppIcon name="linkedin" :size="16" :stroke="2" /></template>
          {{ cta.label }}
        </AppButton>
        <ThemeToggle :theme="theme" @toggle="$emit('toggleTheme')" />
      </nav>
    </div>
  </header>
</template>
