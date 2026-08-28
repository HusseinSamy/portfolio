<script setup lang="ts">
defineProps<{
  quote: string[]
  name: string
  role: string
  avatar: string
}>()
</script>

<template>
  <AppCard accent-top class="relative overflow-hidden">
    <figure class="relative m-0 flex flex-col gap-6">
      <figcaption class="border-line flex items-center gap-4 border-b pb-6">
        <img
          :src="avatar"
          :alt="name"
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
          class="border-line size-14 flex-none rounded-full border object-cover"
        />
        <span class="flex min-w-0 flex-col gap-1">
          <span class="text-body font-medium">{{ name }}</span>
          <span class="text-muted font-mono text-label tracking-mono">{{ role }}</span>
        </span>
      </figcaption>
      <div class="relative">
        <!-- Ornament: a ghosted quote mark, same trick as the stepper's numerals.
             Leading is left at normal so the glyph's ink stays inside the card. -->
        <span
          aria-hidden="true"
          class="text-ghost-ink font-display pointer-events-none absolute -top-[60px] right-0 text-[240px] leading-none font-bold"
          >&ldquo;</span
        >
        <blockquote class="relative m-0 flex flex-col gap-4">
          <p
            v-for="paragraph in quote"
            :key="paragraph"
            class="text-muted text-prose leading-prose m-0 text-pretty"
          >
            {{ paragraph }}
          </p>
        </blockquote>
      </div>
    </figure>
  </AppCard>
</template>
