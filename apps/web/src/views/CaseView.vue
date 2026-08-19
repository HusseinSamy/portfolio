<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppCard from '../components/core/AppCard.vue'
import EyebrowLabel from '../components/core/EyebrowLabel.vue'
import FactTable from '../components/patterns/FactTable.vue'
import { caseStudies } from '../data/portfolio'

const route = useRoute()
const study = computed(() => caseStudies.find((c) => c.slug === route.params.slug))
</script>

<template>
  <article v-if="study" class="max-w-read px-gutter relative z-1 mx-auto pt-24 pb-32">
    <EyebrowLabel tone="accent" class="mb-6">{{ study.eyebrow }}</EyebrowLabel>
    <h1
      class="font-display m-0 mb-6 text-[clamp(32px,6vw,52px)] leading-[1.08] tracking-[-0.02em] font-medium text-pretty"
    >
      {{ study.title }}
    </h1>
    <p class="text-muted text-lead m-0 mb-12 leading-[1.55] text-pretty">{{ study.lead }}</p>

    <div class="mb-16"><FactTable :rows="study.facts" /></div>

    <template v-for="section in study.sections" :key="section.heading">
      <h2 class="font-display text-title m-0 mb-4 font-medium">{{ section.heading }}</h2>
      <p v-if="section.body" class="text-muted text-prose leading-prose m-0 mb-16 text-pretty">
        {{ section.body }}
      </p>
      <ul v-if="section.items" class="m-0 mb-16 grid list-none gap-4 p-0">
        <li
          v-for="item in section.items"
          :key="item"
          class="text-muted text-prose leading-prose grid grid-cols-[24px_1fr] gap-2"
        >
          <span class="text-accent">—</span><span>{{ item }}</span>
        </li>
      </ul>
    </template>

    <AppCard v-if="study.outcome" accent-top class="border-accent mb-16">
      <EyebrowLabel>Outcome</EyebrowLabel>
      <p class="font-display text-title m-0 font-medium tracking-[-0.02em]">
        {{ study.outcome.value }}
      </p>
      <p class="text-muted text-prose leading-prose m-0 text-pretty">{{ study.outcome.body }}</p>
    </AppCard>

    <div
      class="border-line flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t pt-8"
    >
      <RouterLink
        to="/#work"
        class="text-muted hover:text-ink font-mono text-label tracking-mono no-underline hover:no-underline"
        >← ALL WORK</RouterLink
      >
      <RouterLink
        :to="`/work/${study.next.slug}`"
        class="text-accent font-mono text-label tracking-mono no-underline hover:no-underline"
        >{{ study.next.label }}</RouterLink
      >
    </div>
  </article>
</template>
