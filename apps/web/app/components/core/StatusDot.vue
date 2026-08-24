<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex items-center gap-2">
    <span class="relative flex size-2 flex-none">
      <span class="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-75" />
      <span class="bg-accent relative inline-flex size-2 rounded-full" />
    </span>
    <span class="text-muted font-mono text-label uppercase">{{ label }}</span>
  </div>
</template>
