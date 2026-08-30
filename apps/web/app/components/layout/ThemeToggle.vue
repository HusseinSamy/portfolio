<script setup lang="ts">
/* The theme lives on <html data-theme>, set before first paint by the inline
   script in nuxt.config and read by CSS. No reactive copy: a copy would render
   'light' on the server and mismatch on hydration. Both icons ship, CSS picks. */
function toggle() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem('theme', next)
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle colour theme"
    title="Toggle colour theme"
    class="text-muted rounded-control border-line hover:border-accent hover:text-ink inline-flex size-8 cursor-pointer items-center justify-center border bg-transparent p-0 transition-[border-color,color] duration-200 ease-[ease]"
    @click="toggle"
  >
    <AppIcon name="sun" :size="16" class="hidden dark:block" />
    <AppIcon name="moon" :size="16" class="dark:hidden" />
  </button>
</template>
