<script setup lang="ts">
defineProps<{ items: { id: string; level: 2 | 3; text: string }[]; active?: string }>()
</script>

<template>
  <details class="group border-line rounded-card bg-surface border">
    <summary
      class="text-ink rounded-card focus-visible:outline-accent flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-mono text-label uppercase focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden"
    >
      On this page
      <AppIcon
        name="chevron-down"
        :size="16"
        class="transition-transform duration-200 ease-[ease] group-open:rotate-180 motion-reduce:transition-none"
      />
    </summary>
    <nav aria-label="On this page" class="px-4 pb-4">
      <ol class="border-line border-l">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="hover:text-accent -ml-px block border-l py-1 text-[13px] leading-[1.4] no-underline hover:no-underline"
            :class="[
              item.level === 2 ? 'pl-4' : 'pl-7',
              item.id === active ? 'border-accent text-accent' : 'text-ink border-transparent',
            ]"
            :aria-current="item.id === active ? 'location' : undefined"
            >{{ item.text }}</a
          >
        </li>
      </ol>
    </nav>
  </details>
</template>
