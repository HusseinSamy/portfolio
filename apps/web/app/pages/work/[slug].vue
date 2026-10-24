<script setup lang="ts">
import { computed } from 'vue'
import { caseStudies, cases, siteUrl } from '~/data/portfolio'

// Computed, not a plain lookup: the next-case link navigates slug to slug
// without remounting the page.
const route = useRoute('work-slug')
const study = computed(() => caseStudies.find((c) => c.slug === route.params.slug))

if (!study.value) throw createError({ statusCode: 404, statusMessage: 'Case study not found' })

usePageSeo(() => {
  const s = study.value
  if (!s) return
  const summary = cases.find((c) => c.slug === s.slug)?.summary ?? ''
  const url = `${siteUrl}/work/${s.slug}`
  return {
    title: `${s.title} — Hussein Samy`,
    description: summary,
    path: `/work/${s.slug}`,
    type: 'article',
    schema: [
      person,
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: s.title,
        description: summary,
        url,
        author: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en',
      },
    ],
  }
})
</script>

<template>
  <article v-if="study" class="max-w-read px-gutter relative z-1 mx-auto pt-10 pb-32">
    <EyebrowLabel tone="accent" class="mb-6">{{ study.eyebrow }}</EyebrowLabel>
    <h1
      class="font-display m-0 mb-12 text-[clamp(32px,6vw,52px)] leading-[1.08] tracking-[-0.02em] font-medium text-pretty"
    >
      {{ study.title }}
    </h1>

    <div class="mb-16"><FactTable :rows="study.facts" /></div>

    <template v-for="section in study.sections" :key="section.heading">
      <h2 class="font-display text-title m-0 mb-4 font-medium">{{ section.heading }}</h2>
      <p
        v-for="paragraph in section.body"
        :key="paragraph"
        class="text-ink text-prose leading-prose m-0 mb-6 text-pretty last:mb-16"
      >
        {{ paragraph }}
      </p>
    </template>

    <TestimonialCard v-if="study.testimonial" v-bind="study.testimonial" class="mb-16" />

    <div
      class="border-line flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t pt-8"
    >
      <NuxtLink
        to="/#work"
        class="text-ink hover:text-ink font-mono text-label tracking-mono no-underline hover:no-underline"
        >← ALL WORK</NuxtLink
      >
      <NuxtLink
        :to="`/work/${study.next.slug}`"
        class="text-accent font-mono text-label tracking-mono no-underline hover:no-underline"
        >{{ study.next.label }}</NuxtLink
      >
    </div>
  </article>
</template>
