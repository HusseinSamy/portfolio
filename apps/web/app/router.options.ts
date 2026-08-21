import type { RouterConfig } from '@nuxt/schema'

export default {
  // Anchors clear the sticky header instead of hiding under it.
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 64 }
    return { top: 0 }
  },
} satisfies RouterConfig
