<script setup lang="ts">
defineProps<{ email: string; meta: string }>()
</script>

<template>
  <footer class="border-line bg-bg relative z-1 border-t">
    <div
      class="max-w-page px-gutter mx-auto flex flex-wrap items-center justify-between gap-6 py-8"
    >
      <a
        :href="`mailto:${email}`"
        class="text-ink font-mono text-[13px] no-underline hover:no-underline"
        >{{ email }}</a
      >
      <span class="text-muted font-mono text-label">{{ meta }}</span>
    </div>
  </footer>
</template>
