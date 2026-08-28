<script setup lang="ts">
import { computed, ref } from 'vue'

const { steps = [], defaultIndex = 0 } = defineProps<{
  steps?: { n: string; title: string; body: string }[]
  defaultIndex?: number
}>()

// Hover previews a step; the pinned (clicked) step is what we fall back to, so
// dragging the cursor across the list and away restores what you were reading.
const pinned = ref(defaultIndex)
const hovered = ref<number | null>(null)
const active = computed(() => hovered.value ?? pinned.value)
const current = computed(() => steps[active.value] ?? { n: '', title: '', body: '' })
// The pin stays lit while you hover elsewhere, so you never lose your place.
const isLit = (i: number) => i === pinned.value || i === hovered.value
const total = computed(() => String(steps.length).padStart(2, '0'))
</script>

<template>
  <div class="flex flex-wrap items-stretch gap-x-12 gap-y-8">
    <div
      class="border-line grid min-w-0 flex-[1_1_320px] content-start gap-0 border-l"
      @mouseleave="hovered = null"
    >
      <button
        v-for="(step, i) in steps"
        :key="step.n"
        type="button"
        class="-ml-px flex w-full cursor-pointer items-start gap-4 rounded-r-control border-0 border-l-2 py-4 pr-4 pl-6 text-left transition-[background,border-color] duration-200 ease-[ease]"
        :class="isLit(i) ? 'bg-bg border-l-accent' : 'border-l-transparent bg-transparent'"
        @click="pinned = i"
        @mouseenter="hovered = i"
      >
        <span
          class="leading-body flex-none font-mono text-label"
          :class="isLit(i) ? 'text-accent' : 'text-muted'"
          >{{ step.n }}</span
        >
        <span
          class="text-body leading-[1.5] text-pretty"
          :class="isLit(i) ? 'text-ink' : 'text-muted'"
          >{{ step.title }}</span
        >
      </button>
    </div>
    <div
      class="bg-bg border-line border-t-accent rounded-card relative flex min-h-[280px] min-w-0 flex-[1_1_340px] flex-col justify-center gap-4 overflow-hidden border border-t-2 p-10"
    >
      <!-- Ornament: mono numerals ghosted behind stepped content. -->
      <span
        aria-hidden="true"
        class="text-ghost-ink pointer-events-none absolute top-0 right-4 font-mono text-[112px] leading-none font-bold"
        >{{ current.n }}</span
      >
      <Transition name="step-fade">
        <div :key="current.n" class="relative flex flex-col gap-4">
          <p class="text-accent m-0 font-mono text-micro tracking-label uppercase">
            Commitment {{ current.n }} of {{ total }}
          </p>
          <h3 class="font-display text-title leading-title m-0 font-medium text-pretty">
            {{ current.title }}
          </h3>
          <p class="text-muted text-prose leading-prose m-0 text-pretty">{{ current.body }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>
