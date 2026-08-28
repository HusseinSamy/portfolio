<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const { brand = 'HUSSEIN SAMY', links = [] } = defineProps<{
  brand?: string
  links?: { label: string; href: string }[]
  cta?: { label: string; href: string }
}>()

const SHRINK_AT = 80
const scrolled = ref(false)
const menuOpen = ref(false)
const bar = ref<HTMLElement | null>(null)

const onScroll = () => (scrolled.value = window.scrollY > SHRINK_AT)
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') menuOpen.value = false
}
const onPointerDown = (e: PointerEvent) => {
  if (menuOpen.value && !bar.value?.contains(e.target as Node)) menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown)
})

// Navigating away closes the panel; an in-page anchor changes the hash only.
const route = useRoute()
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
)
</script>

<template>
  <header
    class="pointer-events-none fixed top-2 left-1/2 z-30 flex w-[calc(100%-16px)] -translate-x-1/2 justify-center sm:top-3 sm:w-[calc(100%-24px)] lg:top-4 lg:w-[calc(100%-32px)]"
  >
    <div
      ref="bar"
      class="border-line pointer-events-auto relative flex w-full items-center justify-between gap-3 border bg-[color-mix(in_oklab,var(--bg)85%,transparent)] shadow-[0_2px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-[20px] backdrop-saturate-[1.8] transition-[max-width,padding,border-radius] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none sm:gap-6"
      :class="
        scrolled
          ? 'max-w-[900px] rounded-panel px-4 py-2.5 sm:px-6 sm:py-3'
          : 'max-w-full rounded-t-card rounded-b-none px-4 py-3 sm:px-8 sm:py-4'
      "
    >
      <NuxtLink
        to="/"
        class="text-ink shrink-0 font-mono text-[13px] tracking-[0.04em] no-underline hover:no-underline"
        >{{ brand }}</NuxtLink
      >

      <nav
        v-if="links.length"
        class="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-muted hover:text-ink text-small no-underline transition-colors duration-200 ease-[ease] hover:no-underline"
          >{{ link.label }}</a
        >
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <AppButton v-if="cta" variant="primary" size="sm" :href="cta.href">
          <template #icon><AppIcon name="linkedin" :size="16" :stroke="2" /></template>
          {{ cta.label }}
        </AppButton>
        <ThemeToggle />
        <button
          v-if="links.length"
          type="button"
          class="text-muted rounded-control border-line hover:border-accent hover:text-ink inline-flex size-8 cursor-pointer items-center justify-center border bg-transparent p-0 transition-[border-color,color] duration-200 ease-[ease] md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="16" />
        </button>
      </div>

      <Transition name="menu-drop">
        <nav
          v-if="links.length"
          v-show="menuOpen"
          id="site-menu"
          class="border-line rounded-panel absolute top-full right-0 left-0 mt-2 flex flex-col gap-1 border bg-[color-mix(in_oklab,var(--bg)_96%,transparent)] p-2 backdrop-blur-[40px] backdrop-saturate-[1.8] md:hidden"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-muted hover:text-ink hover:bg-panel rounded-control text-small px-3 py-2 no-underline transition-colors duration-200 ease-[ease] hover:no-underline"
            @click="menuOpen = false"
            >{{ link.label }}</a
          >
        </nav>
      </Transition>
    </div>
  </header>
</template>
