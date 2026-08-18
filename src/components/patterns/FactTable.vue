<script setup lang="ts">
const { rows = [] } = defineProps<{ rows?: { label: string; value: string }[] }>()
</script>

<template>
  <div class="grid gap-0">
    <div
      v-for="(row, i) in rows"
      :key="row.label"
      class="border-line flex flex-wrap gap-x-6 gap-y-2 border-t py-4"
      :class="i === rows.length - 1 ? 'border-b' : ''"
    >
      <span class="text-muted font-mono text-label flex-[0_0_120px] uppercase">{{
        row.label
      }}</span>
      <span class="flex-[1_1_240px]">{{ row.value }}</span>
    </div>
  </div>
</template>
