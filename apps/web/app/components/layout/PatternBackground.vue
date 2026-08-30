<script setup lang="ts">
/* Two fixed layers behind everything: four asymmetric radial washes, and a 96px
   crossing-line grid masked by two off-centre gradients so the tile never announces
   itself. No photography, no illustration, no gradient banners. */
const { pattern = 'grid' } = defineProps<{ pattern?: 'grid' | 'dots' }>()
</script>

<template>
  <div aria-hidden="true" class="washes" />
  <div aria-hidden="true" class="texture" :class="pattern" />
</template>

<style scoped>
.washes,
.texture {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.washes {
  background-image:
    radial-gradient(
      circle at 12% 6%,
      color-mix(in oklab, var(--accent) 13%, transparent) 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 88% 22%,
      color-mix(in oklab, var(--ink) 7%, transparent) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 62% 78%,
      color-mix(in oklab, var(--accent) 8%, transparent) 0%,
      transparent 42%
    ),
    radial-gradient(
      circle at 4% 92%,
      color-mix(in oklab, var(--ink) 6%, transparent) 0%,
      transparent 26%
    );
}

.texture {
  --mask:
    radial-gradient(120% 70% at 78% 12%, #000 0%, transparent 62%),
    radial-gradient(90% 55% at 8% 64%, #000 0%, transparent 70%);
  -webkit-mask-image: var(--mask);
  mask-image: var(--mask);
}

.texture.grid {
  background-image:
    linear-gradient(to right, var(--line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size: 96px 96px;
  opacity: 0.5;
}

.texture.dots {
  /* background-image: radial-gradient(
    color-mix(in oklab, var(--accent) 50%, transparent) 1.6px,
    transparent 1px
  );
  background-size: 24px 24px;
  opacity: 0.55; */
}
</style>
