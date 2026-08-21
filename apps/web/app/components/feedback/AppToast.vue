<script setup lang="ts">
const { tone = 'accent' } = defineProps<{
  tone?: 'accent' | 'quiet'
  title?: string
  message?: string
  icon?: 'mail' | 'download' | 'linkedin' | 'repo'
  action?: { label: string; href?: string }
  dismissible?: boolean
}>()
defineEmits<{ dismiss: [] }>()
</script>

<template>
  <div
    role="status"
    aria-live="polite"
    class="bg-surface border-line rounded-card text-ink flex w-full max-w-[400px] items-start gap-4 border border-t-2 px-6 py-4"
    :class="tone === 'accent' ? 'border-t-accent' : 'border-t-muted'"
  >
    <span
      v-if="icon"
      class="inline-flex flex-none pt-0.5"
      :class="tone === 'accent' ? 'text-accent' : 'text-muted'"
    >
      <AppIcon :name="icon" :size="16" />
    </span>
    <div class="grid min-w-0 flex-1 gap-1">
      <span v-if="title" class="text-body leading-[1.4] font-semibold">{{ title }}</span>
      <span v-if="message" class="text-muted text-small leading-[1.5] text-pretty">{{
        message
      }}</span>
      <a
        v-if="action"
        :href="action.href"
        class="text-accent mt-1 font-mono text-label tracking-mono uppercase no-underline hover:no-underline"
        >{{ action.label }}</a
      >
    </div>
    <button
      v-if="dismissible"
      type="button"
      aria-label="Dismiss"
      class="text-muted hover:text-ink rounded-control inline-flex size-6 flex-none cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-colors duration-200 ease-[ease]"
      @click="$emit('dismiss')"
    >
      <AppIcon name="close" :size="14" />
    </button>
  </div>
</template>
