import type { RouterConfig } from '@nuxt/schema'

// About one second at 60fps: longer than a page swap, short enough to give up on a bad hash.
const MAX_FRAMES = 60

export default {
  // Anchors clear the sticky header instead of hiding under it. Arriving from another
  // page, the target section isn't mounted yet, so wait for it to appear.
  scrollBehavior(to, from) {
    if (!to.hash) return { top: 0 }
    const target = { el: to.hash, top: 104 }
    if (to.path === from.path) return target
    const router = useRouter()
    return new Promise((resolve) => {
      let frames = 0
      const check = () => {
        if (router.currentRoute.value.fullPath !== to.fullPath) return resolve(false)
        if (document.querySelector(to.hash) || ++frames > MAX_FRAMES) return resolve(target)
        requestAnimationFrame(check)
      }
      requestAnimationFrame(check)
    })
  },
} satisfies RouterConfig
