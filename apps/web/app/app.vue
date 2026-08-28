<script setup lang="ts">
import { computed } from 'vue'
import { identity } from '~/data/portfolio'

const route = useRoute()

// The design shows nav links on the single-page home only; deeper pages carry
// their own back links instead.
const links = computed(() =>
  route.name === 'index'
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
    />
    <div class="pt-[88px] lg:pt-[96px]"><NuxtPage /></div>
    <SiteFooter :email="identity.email" :meta="identity.meta" />
  </div>
</template>
