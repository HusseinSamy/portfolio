<script setup lang="ts">
import { computed } from 'vue'
import { identity } from '~/data/portfolio'

const route = useRoute()

// The same links everywhere: off the home page the anchors point back at it, and
// the page you are on (a case study, an article, About) lights its own link.
const onHome = computed(() => route.name === 'index')
const section = computed(() => {
  if (route.path === '/about') return 'about'
  if (route.path.startsWith('/work/')) return 'work'
  if (route.path.startsWith('/writing/')) return 'writing'
  return null
})

const links = computed(() => [
  { label: 'Work', to: onHome.value ? '#work' : '/#work', current: section.value === 'work' },
  { label: 'How I work', to: onHome.value ? '#how' : '/#how', current: false },
  {
    label: 'Writing',
    to: onHome.value ? '#writing' : '/#writing',
    current: section.value === 'writing',
  },
  { label: 'About', to: '/about', current: section.value === 'about' },
  { label: 'Contact', to: onHome.value ? '#contact' : '/#contact', current: false },
])
</script>

<template>
  <div class="bg-bg relative min-h-screen">
    <PatternBackground pattern="dots" />
    <SiteHeader
      :brand="identity.brand"
      :links="links"
      :cta="{ label: `Let's connect`, href: identity.linkedin }"
    />
    <div class="pt-[88px] lg:pt-[96px]"><NuxtPage /></div>
    <SiteFooter :email="identity.email" :meta="identity.meta" />
  </div>
</template>
