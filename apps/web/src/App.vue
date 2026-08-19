<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import PatternBackground from './components/layout/PatternBackground.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import { useTheme } from './composables/useTheme'
import { identity } from './data/portfolio'

const route = useRoute()
const { theme, toggle } = useTheme()

// The design shows nav links on the single-page home only; deeper pages carry
// their own back links instead.
const links = computed(() =>
  route.name === 'home'
    ? [
        { label: 'Work', href: '#work' },
        { label: 'How I work', href: '#how' },
        { label: 'Writing', href: '#writing' },
        { label: 'Contact', href: '#contact' },
      ]
    : [],
)
</script>

<template>
  <div class="bg-bg relative min-h-screen">
    <PatternBackground pattern="dots" />
    <SiteHeader
      :brand="identity.brand"
      :links="links"
      :cta="{ label: `Let's connect`, href: identity.linkedin }"
      :theme="theme"
      @toggle-theme="toggle"
    />
    <RouterView />
    <SiteFooter :email="identity.email" :meta="identity.meta" />
  </div>
</template>
