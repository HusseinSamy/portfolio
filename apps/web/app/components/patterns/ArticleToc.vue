<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useId, useTemplateRef } from 'vue'

defineProps<{ items: { id: string; text: string }[]; active?: string }>()

const open = ref(false)
const panelId = useId()
const nav = useTemplateRef('nav')
const toggle = useTemplateRef('toggle')

// Only a mouse opens on hover. A touch tap also fires pointerenter, which would
// open the panel just before the tap's click toggled it shut again.
const hover = (e: PointerEvent, state: boolean) => {
  if (e.pointerType === 'mouse') open.value = state
}
const closeToToggle = () => {
  open.value = false
  toggle.value?.focus()
}
const onFocusOut = (e: FocusEvent) => {
  if (!nav.value?.contains(e.relatedTarget as Node)) open.value = false
}
const onPointerDown = (e: PointerEvent) => {
  if (open.value && !nav.value?.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('pointerdown', onPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
</script>

<template>
  <nav
    ref="nav"
    aria-label="Table of contents"
    class="hidden min-[904px]:block"
    @pointerenter="hover($event, true)"
    @pointerleave="hover($event, false)"
    @focusout="onFocusOut"
    @keydown.esc="closeToToggle"
  >
    <button
      ref="toggle"
      type="button"
      aria-label="Table of contents"
      :aria-expanded="open"
      :aria-controls="panelId"
      class="focus-visible:outline-accent fixed top-1/2 right-4 z-40 flex w-6 -translate-y-1/2 cursor-pointer flex-col items-end gap-2 rounded-full border-0 bg-[color-mix(in_oklab,var(--bg)38%,transparent)] px-1 py-3 transition-opacity duration-[180ms] focus-visible:outline-2"
      :class="open ? 'opacity-0' : ''"
      @click="open = !open"
    >
      <span
        v-for="item in items"
        :key="item.id"
        class="bg-ink h-0.5 w-4 rounded-[1px]"
        :class="item.id === active ? '' : 'opacity-15'"
      />
    </button>
    <div
      :id="panelId"
      class="bg-surface rounded-panel fixed top-1/2 right-4 z-40 max-h-[70vh] w-[300px] -translate-y-1/2 overflow-y-auto py-3 pr-10 pl-4 shadow-[0_0_4px_rgba(36,36,36,0.05),0_2px_8px_rgba(36,36,36,0.15)] transition-[opacity,visibility] duration-[180ms] dark:shadow-none"
      :class="open ? 'visible opacity-100' : 'invisible opacity-0'"
    >
      <ol>
        <li v-for="item in items" :key="item.id" class="py-0.5">
          <a
            :href="`#${item.id}`"
            class="flex items-center gap-2 text-[14px] leading-5 no-underline hover:no-underline"
            :class="item.id === active ? 'text-accent' : 'text-muted hover:text-ink'"
            :aria-current="item.id === active ? 'location' : undefined"
            @click="open = false"
          >
            <span
              class="size-1 flex-none rounded-full"
              :class="item.id === active ? 'bg-accent' : ''"
            />
            <span class="min-w-0 flex-1 truncate">{{ item.text }}</span>
          </a>
        </li>
      </ol>
    </div>
  </nav>
</template>
