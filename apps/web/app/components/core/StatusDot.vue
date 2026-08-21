<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex items-center gap-2">
    <span class="bg-accent block size-2 flex-none rounded-full" />
    <span class="text-muted font-mono text-label uppercase">{{ label }}</span>
  </div>
</template>
