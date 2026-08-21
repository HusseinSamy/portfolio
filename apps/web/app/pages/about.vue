<script setup lang="ts">
import { identity } from '~/data/portfolio'

const sections = [
  {
    heading: 'What I build',
    body: 'Web frontends that have to survive contact with real users and real teams: authenticated products, dashboards, checkout and billing paths. My default stack is Next.js and TypeScript, and I have no objection to learning whatever a team already uses.',
  },
  {
    heading: 'How I got here',
    body: 'I studied philosophy at Cairo University. Four years of being told that an argument fails on its weakest word teaches you to name things accurately and to write your reasoning down before you defend it. Both are daily habits in code review.',
  },
  {
    heading: 'The distinctive part',
    body: 'I like the work most teams avoid. The build that got slower over two years, the test suite nobody wrote, the module that everything imports for no reason. That work is where the largest numbers on this site came from.',
  },
]
</script>

<template>
  <article class="max-w-read px-gutter relative z-1 mx-auto pt-24 pb-32">
    <EyebrowLabel tone="accent" class="mb-6">About</EyebrowLabel>
    <h1
      class="font-display m-0 mb-6 text-[clamp(32px,6vw,52px)] leading-[1.08] tracking-[-0.02em] font-medium text-pretty"
    >
      I came to frontend from a subject that is mostly about reading carefully.
    </h1>
    <p class="text-muted text-lead m-0 mb-16 leading-[1.55] text-pretty">
      Three years of production work in React, Next.js and Angular, all of it remote, most of it on
      codebases I did not start.
    </p>

    <template v-for="section in sections" :key="section.heading">
      <h2 class="font-display text-title m-0 mb-4 font-medium">{{ section.heading }}</h2>
      <p class="text-muted text-prose leading-prose m-0 mb-16 text-pretty">{{ section.body }}</p>
    </template>

    <div class="mb-16 flex flex-wrap gap-4">
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
