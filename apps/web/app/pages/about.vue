<script setup lang="ts">
import { about, identity } from '~/data/portfolio'
</script>

<template>
  <article class="max-w-read px-gutter relative z-1 mx-auto pt-10 pb-32">
    <EyebrowLabel tone="accent" class="mb-6">About</EyebrowLabel>
    <p class="text-lead m-0 mb-16 leading-[1.55] text-pretty">{{ about.summary }}</p>

    <p
      v-for="paragraph in about.story"
      :key="paragraph"
      class="text-muted text-prose leading-prose m-0 mb-6 text-pretty"
    >
      {{ paragraph }}
    </p>

    <div class="mt-16 mb-16 flex flex-wrap gap-4">
      <AppButton variant="primary" :href="identity.linkedin">Connect on LinkedIn</AppButton>
      <AppButton variant="secondary" :href="`mailto:${identity.email}`">Email me</AppButton>
    </div>

    <div class="border-line border-t pt-8">
      <NuxtLink
        to="/"
        class="text-muted hover:text-ink font-mono text-label tracking-mono no-underline hover:no-underline"
        >← BACK TO PORTFOLIO</NuxtLink
      >
    </div>
  </article>
</template>
